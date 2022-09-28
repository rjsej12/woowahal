import {stores} from "../../mock/stores.json";
import Carousel from "../../utils/Carousel.js";

const sortbys = document.querySelector(".recommended-sortbys");
const carousels = document.querySelectorAll(".carousel");

const recommands = document.querySelector(".recommended-list");

const makeRecomandCon = (store) => {
    const res = document.createElement("li");
    res.id = store.id;
    // 가게페이지 넘어가기
    res.innerHTML = `
    <a href="#">
        <div class="recommended-img-container" title="${store.title}"></div>
        <div class="recommended-text-container">
        <p class="recommended-store">${store.title} <i class="fa-sharp fa-solid fa-star star-icon"></i> 4.9</p>
        <div class="recommended-store-detail">
            <p><span>최소주문</span> ${store.minprice} &middot;</p>
            <p><span>배달팁</span> ${store.deliverytip} &middot;</p>
            <p>${store.distance}km</p>
            <p class="ellipse offscreen deliverytime"><i class="fa-light fa-clock-three"></i>21~36분</p>
        </div>
        </div>
    </a>
    `;

    res.querySelector(".recommended-img-container").style.backgroundImage = `url(${store.url})`;
    return res;
};

(()=>{

    Carousel(carousels);

    sortbys.addEventListener("click",(e)=>{
        sortbys.querySelector(".sortby-list");
    });


    for(let i of Object.values(stores)){
        console.log(i);
        const anchor = makeRecomandCon(i);
        recommands.appendChild(anchor);
    }

})();