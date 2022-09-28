import {toggleClassList} from "../../utils/ClassListHandler.js";
import { getParam, getStore } from "../../utils/Param.js";

const menu_btns = document.querySelectorAll(".menu-btn");
const cart = document.querySelector(".st-cart");


const params = getParam(location.search);
const store = getStore(params.id);

const setDetail = () => {
    document.querySelector(".introbox-info > h3").innerText = store.title;
    document.querySelector(".withimg").style.setProperty("--intro-img", `url(${store.url})`);
    
}


(()=>{

    setDetail();

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