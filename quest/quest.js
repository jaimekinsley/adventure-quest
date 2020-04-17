import quests from '../data/data.js';
import { findById } from '../utils.js';


const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(quests, questId);


// document.querySelector('body').append(JSON.stringify(quest));

const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const div = document.querySelector('div');
const form = document.querySelector('form');



img.src = '../assets/quests/' + quest.image;
h3.textContent = quest.title;
div.textContent = quest.description;

// labels[0].append(quest.choices[0].description);
// labels[1].append(quest.choices[1].description);
// labels[2].append(quest.choices[2].description);

const labels = document.querySelectorAll('label');

const radios = document.querySelectorAll('input');


for (let i = 0; i < quest.choices.length; i++) {
    labels[i].append(quest.choices[i].description);
    radios[i].value = quest.choices[i].id;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const choiceId = data.get('quest');
    const choices = quest.choices;

    const choice = findById(choices, choiceId);

    const user = JSON.parse(localStorage.getItem('USER'));

    user.hp = user.hp + choice.hp;
    user.gold = user.gold + choice.gold;
    user.completed[quest.id] = true;

    localStorage.setItem('USER', JSON.stringify(user));

});

