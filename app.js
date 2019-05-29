const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generate list html
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

// add new todos
addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    //console.log(todo);
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodo = (term) => {
    /* 
    go through the li list and add the filtered tag to items
    that do not appear in the search
    */
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    /* 
    go through the li list and remove the filtered tag to items
    that do appear in the search
    */
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};

//search for a todo
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodo(term);

});
