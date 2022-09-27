import {toggleClassList} from "../../utils/ClassListHandler.js";

const menu_btns = document.querySelectorAll(".menu-btn");
const cart = document.querySelector(".st-cart");

(()=>{
    console.log(location);
    for(let btn of menu_btns){

        btn.addEventListener("click",(e)=>{
            const menu = btn.nextElementSibling;
            const ico = btn.querySelector("i");
            toggleClassList(ico, "fa-chevron-down");
            toggleClassList(ico, "fa-chevron-up");
            toggleClassList(menu, "hidden");
        }); 
        
    }
                                                                                                                                                                                       
})();