import { getCartStorage } from "../../utils/Storage.js";
import {getMenu, getStore} from "../../utils/Param.js";
import Carousel from "../../utils/Carousel.js";

const carousels = document.querySelectorAll(".carousel");
const cart = getCartStorage();
const store =  getStore(cart.id); 
const n = decodeURIComponent(cart.name).split("+").join(" ");
const menu = getMenu(parseInt(cart.id), n);

const setHistory = () => {
    const major =document.querySelector(".ordered-history-store");
    major.querySelector("h3").innerText = store.title;
    major.querySelector("p").innerText = `${menu.name}외 1개`;
}

(()=>{


    Carousel(carousels);
    setHistory();

    document.querySelector(".decoration-img").src = menu.url;
    
})();