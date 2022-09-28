import {toggleClassList} from "../../utils/ClassListHandler.js";

const menu_btns = document.querySelectorAll(".menu-btn");
const cart = document.querySelector(".st-cart");

const getParam = (search) => {
    if(search){
        const tmp = search.substring(1).split("&");
        const data = {};
        tmp.map((i)=>{
            const sp = i.split("=");
            data[sp[0]] = sp[1];
        });

        return data;
    }else{
        return false;
    }
}
(()=>{
    
    const params = getParam(location.search);
    console.log(params);
    
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