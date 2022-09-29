import {addClassList, toggleClassList} from "./ClassListHandler.js";
import {setSlideEffect} from "./Slide.js";
import carouselUrl from "../mock/carousel.json";

const makeSlide = (slider, item, idx) => {
    
    const slide = document.createElement("li");
    const slideAncher = document.createElement("a");
        const slideTitle = document.createElement("h3");
        const slideContent = document.createElement("p");

        slideAncher.appendChild(slideTitle);
        slideAncher.appendChild(slideContent);
        slideTitle.innerText = item.title;
        slideContent.innerText = item.content;
        slideAncher.style.backgroundImage = `url(${item.url})`;
        slideAncher.href="#";

    slide.appendChild(slideAncher);

    addClassList(slide, "carousel-slide");
    if(idx === 0 ) {addClassList(slide, "is-active");}
    
    slider.appendChild(slide);
}
const makeOffscreen = (carousel, urls) => {
    try{
        
        const offscreen = carousel.querySelector(".offscreen-text");
        offscreen.innerText = `1 / ${urls.length}`;
    }catch (e){
        console.error("ss");
    }finally{
    }
}
const toggleActive = (curr, comp, str) => {
    if(comp.tagName === 'LI'){
        toggleClassList(curr, str);
        toggleClassList(comp, str);
        comp.querySelector("a").focus();
    }
}

const Carousel = (carousels) => {

    for(let carousel of carousels){
        const slider = carousel.querySelector(".carousel-slider");
        if(carousel.classList.contains("promotion")){

            const promotion = carouselUrl.promotion;
            promotion.map((item,idx)=>{
                makeSlide(slider, item, idx);
            });

            makeOffscreen(carousel, promotion);
        }
        if(carousel.classList.contains("advertisement")){
            const advertisement = carouselUrl.advertisement;
            advertisement.map((item,idx)=>{
                makeSlide(slider, item, idx);
            });

            makeOffscreen(carousel, advertisement);
        }

        carousel.addEventListener("keydown",(e)=>{
            const keyCode = e.keyCode;
            const currentActive = carousel.querySelector(".is-active");
            //right
            if(keyCode === 39){
                const nextActive = currentActive.nextSibling;
                toggleActive(currentActive,nextActive,"is-active");
            }
            // LEFT
            if(keyCode === 37){
                const prevActive = currentActive.previousSibling;
                toggleActive(currentActive,prevActive,"is-active");
            }

           
        });

        setSlideEffect(carousel, toggleActive);
    }

}

export default Carousel;
