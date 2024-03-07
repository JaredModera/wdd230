//In your js file, declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');//or submit?
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;//i tough it was innerHTML XD
        deleteButton.textContent = 'X';

        li.append(deleteButton); //Not appendChild
        list.append(li); //document.querySelector('#list').appendChild(li); was kinda right?
        
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }
});