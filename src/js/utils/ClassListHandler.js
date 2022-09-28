
const addClassList = (obj, str) => {
    obj.classList.add(str);
}

const removeClassList = (obj, str) => {
    obj.classList.remove(str);
}

const toggleClassList = (obj, str) => {
    obj.classList.toggle(str);
}

const ctrlIsactive = (obj) =>{
    toggleClassList(obj, "is-active");
}

const ctrlChevron = (ico) =>{
    toggleClassList(ico, "fa-chevron-down");
    toggleClassList(ico, "fa-chevron-up");
}

export{
    addClassList,
    removeClassList,
    toggleClassList,
    ctrlIsactive,
    ctrlChevron
}