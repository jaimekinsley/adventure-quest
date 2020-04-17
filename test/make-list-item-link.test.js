// IMPORT MODULES under test here:
import makeListItemLink from '../map/make-list-item-link.js';

const test = QUnit.test;

test('make list item link for map page', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const questData = {
        id: 'monsters',
        title: 'A Den of Monsters',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'monsters.jpg',
        description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
        choices: [{
            id: 'negotiate',
            description: 'Negotiate with them',
            result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
            hp: 0,
            gold: 35
        }, {
            id: 'fight',
            description: 'Fiiiiiggghhhttt!',
            result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
            hp: -30,
            gold: 50
        }, {
            id: 'run',
            description: 'Run away like good Sir Robin',
            result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
            hp: -50,
            gold: 0
        }]
    };

    const expected = `<li class="quest-item"><a href="../quest/?id=monsters">A Den of Monsters</a></li>`;

    const li = makeListItemLink(questData);

    const HTMLString = li.outerHTML;

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(HTMLString, expected);
});
