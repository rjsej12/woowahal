import {toggleClassList} from "../../utils/ClassListHandler.js";
import { getParam, getStore } from "../../utils/Param.js";

const menu_btns = document.querySelectorAll(".menu-btn");
const cart = document.querySelector(".st-cart");


const params = getParam(location.search);
const store = getStore(params.id);

const setDetail = () => {
    document.querySelector(".introbox-info > h3").innerText = store.title;
    document.querySelector(".withimg").style.setProperty("--intro-img", `url(${store.url})`);
    const rating = document.querySelector(".introbox-info-row1");
    
        rating.classList.add("container-rating");
        rating.innerHTML =`
        <ul class="colorBox">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        ${parseFloat(store.rating / 10)}
        `;
        rating.querySelector(".colorBox").style.setProperty("clip-path",`polygon(0 0, ${store.rating}% 0, ${store.rating}% 100%, 0% 100%)`);
        
        console.log(`polygon(0 0, ${store.rating}% 0, ${store.rating}% 100%, 0% 100%);`);
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