import { getCartStorage } from "../../utils/Storage.js";
import {getMenu, getStore} from "../../utils/Param.js";
import {convertPrice, convertPrices} from "../../utils/Wrapping.js";

const cart = getCartStorage();
const store =  getStore(cart.id); 
const n = decodeURIComponent(cart.name).split("+").join(" ");

const menu = getMenu(parseInt(cart.id), n);
console.log(cart);
const setMenusTitle = () => {
    const fig = document.querySelector(".cart-menus-title");
    fig.querySelector("img").src = store.url;
    fig.querySelector("figcaption").innerText = store.title;
    
};

const setMenu = () => {
    const major = document.querySelector(".cart-menus-menu");

    major.querySelector("h3").innerText = menu.name;

    major.querySelector("img").src = menu.url;
    const opt = cart.cartprice - menu.price;
    let addOpt = "";
    if(opt > 0){    
        addOpt = `<li>옵션추가 ${convertPrice(opt)}</li>`
    }
    major.querySelector("ul").innerHTML =`
        <li>가격 ${convertPrice(menu.price)}</li>
        ${addOpt}
    `;

    
};

const setInfo = () => {
    
    const major = document.querySelector(".cart-price");

    console.log(cart);
        const info = document.createElement("section");
        info.classList.add("cart-price-info");
        info.innerHTML = `
          <h3>${n}</h3>
          <span class="price">${cart.cartprice}</span>
        `;

    major.prepend(info);
    
};

const setPrice = () => {

    document.querySelector(".cart-order").querySelector(".price").innerText = cart.cartprice;
    document.querySelector(".sum").querySelector(".price").innerText = cart.cartprice;
}

(()=>{

    setMenusTitle();
    setMenu();
    setInfo();
    setPrice();


    document.querySelector(".btn-order").addEventListener("click",(e)=>{
        location.href = "/result.html";
    })

    const prices = document.querySelectorAll(".price");
    convertPrices(prices);
})();