
const slideEffect = (con)=>{
    let downX, upX;
    con.addEventListener("mousedown",(e)=>{
        downX = e.x;
    });
    con.addEventListener("mouseup",(e)=>{
        upX = e.x;

        let left = con.scrollLeft;
        con.scrollBehavior = "smooth";
        if(downX > upX + 5){
            con.scrollTo({left: left + 50, behavior:"smooth"});
        }else{
            con.scrollTo({left: left - 50, behavior:"smooth"});
        }
    });
    
};

const setSlideEffect=(carousel, toggleActive)=>{
    let start;
   
    carousel.addEventListener("dragstart",(e)=>{
        start = e.x;
    });
    // carousel.addEventListener("touchstart",(e)=>{
    //     start = e.x;
    // });
    function process(e){
        const currentActive = carousel.querySelector(".is-active");
        if(start + 120 < e.x ){
            const nextActive = currentActive.nextSibling;
            toggleActive(currentActive,nextActive,"is-active");
        }
        
        if(start - 120 > e.x){
            const prevActive = currentActive.previousSibling;
            toggleActive(currentActive,prevActive,"is-active");
        }
    }
    carousel.addEventListener("dragend",(e)=>{
        process(e);
    });
    // carousel.addEventListener("touchend",(e)=>{
    //     process(e);
    // });
}

export {
    slideEffect,
    setSlideEffect
}