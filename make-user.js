export default function makeUser(_formData) {
    const name = _formData.get('name');
    const userClass = _formData.get('class');

    const userObject = {
        name: name,
        class: userClass,
        completed: {},
        HP: 50,
        gold: 0,
    };

    return userObject;
    
}