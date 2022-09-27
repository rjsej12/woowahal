
const addClassList = (obj, str) => {
    obj.classList.add(str);
}

const removeClassList = (obj, str) => {
    obj.classList.remove(str);
}

const toggleClassList = (obj, str) => {
    obj.classList.toggle(str);
}

export{
    addClassList,
    removeClassList,
    toggleClassList,
}