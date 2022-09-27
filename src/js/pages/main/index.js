import {toggleClassList} from "../../utils/ClassListHandler.js";
import Carousel from "../../utils/Carousel.js";

const carousels = document.querySelectorAll(".carousel");
const infoBtn = document.querySelector(".more-info-btn");

(()=>{

    Carousel(carousels);

    infoBtn.addEventListener("click", (e)=>{
        toggleClassList(infoBtn.querySelector("i"),"fa-chevron-down");
        toggleClassList(infoBtn.querySelector("i"),"fa-chevron-up");
        toggleClassList(document.querySelector(".company-more-info"), "is-visible")
    });

})();