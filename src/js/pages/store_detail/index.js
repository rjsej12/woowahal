import {toggleClassList} from "../../utils/ClassListHandler.js";
import { getParam, getStore, getMenus } from "../../utils/Param.js";
import { convertPrices, convertPrice } from "../../utils/Wrapping.js";
import {setCartStorage} from "../../utils/Storage.js";

const menus_list = document.querySelector(".st-detail-menus");
const cart = document.querySelector(".st-cart");

const params = getParam(location.search);
const store = getStore(params.id);

if(params.cartprice !== undefined){
    toggleClassList(cart, "is-active")
    cart.querySelector(".st-cart-btn-price").innerText = convertPrice(params.cartprice);
    let tmp = store.minprice - parseInt(params.cartprice);
    if(tmp > 0){
        cart.firstElementChild.innerText = `${convertPrice(tmp)} 더 다음면 배달 가능!`;
    }else{
        cart.firstElementChild.innerText = ``;
    }
    cart.firstElementChild.nextElementSibling.innerText = `배달 최소 주문금액 ${convertPrice(store.minprice)}`; 

    setCartStorage(params);
}

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
        <span>${parseFloat(store.rating / 10)}</span>
        `;
        rating.querySelector(".colorBox").style.setProperty("clip-path",`polygon(0 0, ${store.rating}% 0, ${store.rating}% 100%, 0% 100%)`);
        
}

const menus = getMenus(params.id);
const setRepresent = () => {


    const represent = document.createElement("ul");
    represent.classList.add("menu");
    represent.classList.add("menu-represent");

    represent.innerHTML = `
        <li class="st-detail-menus-represent">--- 대표메뉴 ---</li>
    `;

    for(let menu of menus){
        if(menu.represent){
            represent.innerHTML += `
            <a href="./store_order.html">
                <img src="${menu.url}" alt="" />
                <ul class="menu-info">
                <li class="menu-info-name"><h3>${menu.name}</h3></li>
                <li class="menu-info-detail">${menu.content}</li>
                <li class="menu-info-price">${convertPrice(menu.price)}</li>
                </ul>
            </a>
            `;
        }
    }

    menus_list.innerHTML = "";
    menus_list.appendChild(represent);
}

const setMenus = () => {
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
    });

    menus_list.innerHTML += el;
};

(()=>{

    setDetail();
    setRepresent();
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

    document.querySelector(".btn-order").addEventListener("click",(e)=>{
        location.href = "/cart.html";
    });
             

})();