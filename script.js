import checkComplete from './components/checkComplete.mjs';
import deleten from './components/deleten.mjs';

const btn = document.querySelector('[data-form-boton]')
const createTask = (evento) => {
    evento.preventDefault();
    const texto = document.querySelector('[data-form-texto]');
    const evaluar = texto.value;
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li')
    task.classList.add('card');
    texto.value = ''
    const taskContent = document.createElement('div')
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerHTML = evaluar 
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleten())
    list.appendChild(task);
};  

btn.addEventListener('click', createTask)

//alt 96 comillas invertidas