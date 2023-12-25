import '../style.css';

type Todo = {
  id: string;
  name: string;
  complete: boolean;
};

const form = document.querySelector<HTMLFormElement>('#new-todo-form')!;
const formInput = document.querySelector<HTMLInputElement>('#todo-input')!;
const list = document.querySelector<HTMLUListElement>('#list')!;
let todoArray: Todo[] = [];

form?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  const todoName = formInput.value;
  if (todoName === '') {
    return;
  }

  const newTodo = {
    id: crypto.randomUUID(),
    name: todoName,
    complete: false,
  };

  todoArray.push(newTodo);
  renderNewTodo(newTodo);
  saveTodos();
  formInput.value = '';
});

function renderNewTodo(todo: Todo) {
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  const label = document.createElement('label');
  label.classList.add('list-item-label');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('label-input');
  input.checked = todo.complete;
  listItem.textContent = todo.name;

  input.addEventListener('change', () => {
    todo.complete = input.checked;
    saveTodos();
  });

  const span = document.createElement('span');
  span.classList.add('label-text');

  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.textContent = 'Delete';

  button.addEventListener('click', () => {
    listItem.remove();
    todoArray = todoArray.filter((t) => t.id !== todo.id);
    removeFromLs(todo);
  });

  label.append(input, span);
  listItem.append(label, button);
  list.append(listItem);
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todoArray));
}

document.addEventListener('DOMContentLoaded', () => {
  const todos = localStorage.getItem('todos')!;

  const lsTodos = JSON.parse(todos);

  lsTodos.forEach((todo: Todo) => {
    renderNewTodo(todo);
  });
});

function removeFromLs(todo: Todo) {
  const todos = localStorage.getItem('todos')!;
  let lsTodos = JSON.parse(todos);

  lsTodos = lsTodos.filter((t: Todo) => t.id !== todo.id);

  localStorage.setItem('todos', JSON.stringify(lsTodos));
}
