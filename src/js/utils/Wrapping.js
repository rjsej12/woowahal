const makeRating = (rating) => {

}

const convertPrice = (num) => {
    return parseInt(num).toLocaleString('ko-KR') +"원";
}
const convertPrices = (prices) => {
    for(let price of prices){
        price.innerText = convertPrice(price.innerText);
    };
}



export {
    convertPrices,
    convertPrice
};