
const handleRadios = () => {
    
}
const form = document.querySelector("form");

const radios = document.querySelectorAll(".radio");
const checkBoxes = document.querySelectorAll(".checkbox");

const order = document.querySelector(".st-menu-add button");

(()=>{

    console.log(location);
    order.addEventListener("click",(e)=>{
        form.submit();
    });

})();