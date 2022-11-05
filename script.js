(() => {
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
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerHTML = evaluar
    taskContent.appendChild(titleTask);
    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.appendChild(taskContent);
    list.appendChild(task);
};

btn.addEventListener('click', createTask)

const checkComplete = () =>{
    const i = document.createElement("i")
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask)
    return i
}
const completeTask = (event) => {
    const element = event.target
    element.classList.toggle('far');
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon')
    

}
})();

//alt 96 comillas invertidas