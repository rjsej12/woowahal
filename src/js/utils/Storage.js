
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

const setAddr = () => {
    localStorage.setItem("addr", "서울시 동대문구 XX동");

}
const getAddr = () => {
    let res = localStorage.getItem("addr");
    if(!res){
        setAddr();
        res = getAddr();
    }
    return res;
}
export {
    setCartStorage,
    getCartStorage,
    getAddr
}