
const setCartStorage = (obj) => {
    localStorage.setItem("cart",JSON.stringify(obj));
}
const getCartStorage = () => {
    const res = localStorage.getItem("cart");
    if(!res){
        location.href = "/category.html"
    }

    return JSON.parse(res);
}
export {
    setCartStorage,
    getCartStorage
}