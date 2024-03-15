//In your js file, declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');//or submit?
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');

    li.append(deleteButton); //Not appendChild
    list.append(li); //document.querySelector('#list').appendChild(li); was kinda right?
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

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