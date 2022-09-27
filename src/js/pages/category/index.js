import Carousel from "../../utils/Carousel.js";

const sortbys = document.querySelector(".recommended-sortbys");
const carousels = document.querySelectorAll(".carousel");

(()=>{

    Carousel(carousels);

    sortbys.addEventListener("click",(e)=>{
        console.log(e.target);
        sortbys.querySelector(".sortby-list");
    });

})();