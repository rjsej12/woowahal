import { getParam, getStore, getMenu } from "../../utils/Param";
import { convertPrices, convertPrice } from "../../utils/Wrapping";

const params = getParam(decodeURI(location.search));
const menu = getMenu(params.id, params.name);
const store = getStore(params.id);

const form = document.querySelector("form");

const order = document.querySelector(".st-menu-add button");
const amount = document.querySelector(".btn-amount");

const setFormData = () =>{
    const inputId = document.createElement("input");
    inputId.value = params.id;
    inputId.name = "id";
    inputId.type = "hidden";
    const inputName = document.createElement("input");
    inputName.value = params.name;
    inputName.name = "name";
    inputName.type = "hidden";
    form.appendChild(inputId);
    form.appendChild(inputName);
};
const setOrder = () => {
    const url = `url(${menu.url})`;
    document.querySelector(".st-menu-introbox").style.setProperty("--order-img",url);
    document.querySelector(".st-menu-introbox").querySelector(".introbox-info h3").innerText = menu.name;
    
};

const con = document.querySelector(".infos");
const setPrices = () => {
    con.innerHTML =`
        <section class="st-menu-price tmp key-value-box">
            <h3 class="st-menu-price-title">가격</h3>
            <span class="price" data-price=${menu.price}>${menu.price}</span>
        </section>
    `;
};
const setDepthRadio = () => {
    let res = ``;

    for(let i of Object.keys(menu.radio)){
        const tmp = menu.radio[i];
        res+=`
        <section class="st-menu-depth radio">
            <h3 class="st-menu-depth-title">${i}</h3>
            <ul class="st-menu-depth-list">
        
        `;
        for(let j of tmp){
            const al = j.split("+");
            if(al.length>1){
                res+=`
                <li>
                    <input data-price=${al[1].trim()} type="radio" id="${i}-${al[0]}" name="${i}" value="${al[0]}" />
                    <label for="${i}-${al[0]}">${al[0]}</label>
                    <span class="price"}>${al[1].trim()}</span>
                </li>
                `;
            }else{
                res+=`
                <li>
                    <input type="radio" id="${i}-${al[0]}" name="${i}" value="${al[0]}" />
                    <label for="${i}-${al[0]}">${al[0]}</label>
                    <span class="price">0</span>
                </li>
                `;
            }
        }
        res += `
                </ul>
            </section>
        `;

    }

    con.innerHTML+=res;
    
};
const setDepthCB = () => {
    let res = ``;

    for(let i of Object.keys(menu.checkbox)){
        const tmp = menu.checkbox[i];
        res+=`
        <section class="st-menu-depth radio">
            <h3 class="st-menu-depth-title">${i}</h3>
            <ul class="st-menu-depth-list">
        
        `;
        for(let j of tmp){
            const al = j.split("+");
            if(al.length>1){
                res+=`
                <li>
                    <input data-price=${al[1].trim()} type="checkbox" id="${i}-${al[0]}" name="${i}" value="${al[0]}" />
                    <label for="${i}-${al[0]}">${al[0]}</label>
                    <span class="price">${al[1].trim()}</span>
                </li>
                `;
            }else{
                res+=`
                <li>
                    <input type="checkbox" id="${i}-${al[0]}" name="${i}" value="${al[0]}" />
                    <label for="${i}-${al[0]}">${al[0]}</label>
                    <span class="price">0</span>
                </li>
                `;
            }
        }
        res += `
                </ul>
            </section>
        `;

    }

    con.innerHTML+=res;
    
};
const setBtn = () => {
    document.querySelector(".min").innerText=store.minprice;
    document.querySelector(".btn-order .price").setAttribute("data-price", menu.price);
    document.querySelector(".btn-order .price").innerText = menu.price;
}   

const sumProcess = () => {

    let res = 0;

    const radio = document.querySelectorAll("input[type='radio']");
    const cb = document.querySelectorAll("input[type='checkbox'");

    for(let i of Array.from(radio)){
        if(i.checked){
            const p = i.getAttribute("data-price");
            if(p){
                res+=parseInt(p);
            }
        }
    }
    for(let i of Array.from(cb)){
        if(i.checked){
            const p = i.getAttribute("data-price");
            if(p){
                res+=parseInt(p);
            }
        }
    }

    res += parseInt(amount.querySelector("span").innerText) * menu.price;
    
    document.querySelector(".btn-order .price").setAttribute("data-price", res);
    document.querySelector(".btn-order .price").innerText = convertPrice(res);

}

(()=>{

    setFormData();
    setOrder();
    setPrices();
    setDepthRadio();
    setDepthCB();
    setBtn();


    form.addEventListener("click", (e)=>{
        const type = e.target.type;
        if(type === "radio" || type==="checkbox"){
            sumProcess();
        }
    }); 

    amount.addEventListener("click",(e)=>{
        e.preventDefault();
        let num =parseInt(amount.querySelector("span").innerText);
            if(e.target.classList.contains("reduce")){
                if(num > 1) num -= 1;
            }
            if(e.target.classList.contains("more")){
                num += 1;
            }

            amount.querySelector("span").innerText=num;
            sumProcess();
    });

    order.addEventListener("click",(e)=>{
        e.preventDefault();

        const inputPrice = document.createElement("input");
        inputPrice.value = document.querySelector(".btn-order .price").getAttribute("data-price");
        inputPrice.name = "cartprice";
        inputPrice.type = "hidden";
        form.appendChild(inputPrice);
        
        form.submit();
    });

    const prices = document.querySelectorAll(".price");
    convertPrices(prices);

})();