import {toggleClassList} from "../../utils/ClassListHandler.js";
import Carousel from "../../utils/Carousel.js";
import { getAddr } from "../../utils/Storage.js";

const carousels = document.querySelectorAll(".carousel");
const infoBtn = document.querySelector(".more-info-btn");

const addr = getAddr();

(()=>{

    Carousel(carousels);

    document.querySelector(".order-address").innerText = addr;

    infoBtn.addEventListener("click", (e)=>{
        toggleClassList(infoBtn.querySelector("i"),"fa-chevron-down");
        toggleClassList(infoBtn.querySelector("i"),"fa-chevron-up");
        toggleClassList(document.querySelector(".company-more-info"), "is-visible")
    });

})();