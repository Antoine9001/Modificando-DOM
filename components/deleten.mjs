const deleten = () => {
    const icon = document.createElement('icon')
    icon.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon')
    icon.addEventListener('click', deleteTask)
    return icon
};

const deleteTask = (event) => {
    const parent = event.target.parentElement
    parent.remove();
};

export default deleten;