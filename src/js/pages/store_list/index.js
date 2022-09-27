
const categorys = document.querySelector(".st-list-category");
const scrolList = document.querySelector(".st-list-scroll");
const sortbys = document.querySelector(".st-list-sortbys");

(()=>{
    console.log("asdasd");
    categorys.addEventListener("wheel",(e)=>{
        const direction = e.deltaY;
        if(direction > 0){
            categorys.scrollLeft += 10;
            
        }else{
            categorys.scrollLeft -= 10;
        }
    });

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

})();