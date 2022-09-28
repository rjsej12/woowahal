import {stores} from "../../mock/stores.json";
import { slideEffect } from "../../utils/Slide";

const categorys = document.querySelector(".st-list-category");
const scrolList = document.querySelector(".st-list-scroll");
const sortbys = document.querySelector(".st-list-sortbys");
const list = document.querySelector(".st-list-scroll");

const makeList = (store) =>{
    const res = document.createElement("li");
    res.className ="scroll-item container-img-info left";
    const anchor = document.createElement("a");
    anchor.href = `/store_detail.html?id=${store.id}`;
    anchor.innerHTML =`
        <img src="${store.url}" alt="${store.alt}" />
        <ul>
            <li class="scroll-item-name">${store.title}</li>
            <li class="scroll-item-menu"><i class="fa-solid fa-star-sharp"></i>5.0(100+) 대부 가래떡 떡볶이, 부산꼬지어묵, 치즈세트</li>
            <li>최소주문 ${store.minprice}원, 배달팁 ${store.deliverytip}원</li>
        </ul>
        <div class="scroll-item-time" aria-label="소요 시간"><i class="fa-light fa-clock"></i>38~53분</div>
    `;
    res.appendChild(anchor);
    return res;
}

(()=>{
    categorys.addEventListener("wheel",(e)=>{
        const direction = e.deltaY;
        if(direction > 0){
            console.log(categorys.scrollLeft);
            categorys.scrollTo({left: 50, behavior:smooth});
            
        }else{
            categorys.scrollLeft -= 10;
        }
    });


    slideEffect(categorys);

    categorys.addEventListener("keydown",(e)=>{
       const keyCode = e.keyCode;
       const focused = categorys.querySelector(":focus");

       if(keyCode === 9){
        sortbys.focus();
       }

       if(focused){
           if(focused.tagName === "BUTTON"){
               if(keyCode===37){
                   focused.parentElement.previousElementSibling.firstChild.focus();
                }
            if(keyCode==39){
                    focused.parentElement.nextElementSibling.firstChild.focus();

               }
           }
       }


    });

    scrolList.addEventListener("keydown",(e)=>{
        const keyCode = e.keyCode;
        const focused = scrolList.querySelector(":focus");
        
        // console.log(focused);
        // if(focused){
        //     if(focused.tagName === "BUTTON"){
        //         if(keyCode===37){
        //             console.log(focused);
        //             focused.parentElement.previousElementSibling.firstChild.focus();
        //         }
        //      if(keyCode==39){
        //              focused.parentElement.nextElementSibling.firstChild.focus();
 
        //         }
        //     }
        // }
 
     });

     for(let i of stores){
        list.appendChild(makeList(i));
     }

})();