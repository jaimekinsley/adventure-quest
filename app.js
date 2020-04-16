const myForm = document.getElementById('user-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(myForm);

    console.log(form.get('class'), form.get('name'));

} )