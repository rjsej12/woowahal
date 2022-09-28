import {toggleClassList} from "../../utils/ClassListHandler.js";
import { getParam, getStore, getMenus } from "../../utils/Param.js";
import { convertPrices } from "../../utils/Wrapping.js";

const menus_list = document.querySelector(".st-detail-menus");


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
        
}

const setMenus = () => {
    const menus = getMenus(params.id);
    const categorys = [];
    let el = ``;
    menus.map((menu)=>{
        if(!categorys.includes(menu.category)){
            categorys.push(menu.category);
            if(el !== ``){
                el += "</ul>"
            }
            el += `
                <button class="menu-btn">${menu.category}<i class="fa-sharp fa-solid fa-chevron-up"></i></button>
                <ul class="menu">
            `;
            
        }
        
        el += `
        <li class="container-img-info right">
            <a href="./store_order.html?id=${params.id}&name=${menu.name}">
                <img onerror="this.style.display='none'" src="${menu.url}" alt="${menu.category}의 ${menu.name}" />
                <ul class="menu-info">
                <li class="menu-info-name"><h3>${menu.name}</h3></li>
                <li class="menu-info-detail">${menu.content}</li>
                <li class="menu-info-price price">${menu.price}</li>
                </ul>
            </a>
        </li>
        `;
        menus_list.innerHTML = el;
    });
};

(()=>{

    setDetail();

    setMenus();

    const prices = document.querySelectorAll(".price");
    convertPrices(prices);

    const menu_btns = document.querySelectorAll(".menu-btn");
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