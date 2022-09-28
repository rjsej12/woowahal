import { getParam, getStore } from "../../utils/Param";
import { convertPrices } from "../../utils/Wrapping";

const form = document.querySelector("form");

const order = document.querySelector(".st-menu-add button");
const bg = document.querySelector(".withimg");

const prices = document.querySelectorAll(".price");


convertPrices(prices);


(()=>{

    bg.style.setProperty("--info-img", `url(/asset/imgs/떡볶이.jpg)`)
    order.addEventListener("click",(e)=>{
        form.submit();
    });

})();