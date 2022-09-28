const getParam = (search) => {
    if(search){
        const tmp = search.substring(1).split("&");
        const data = {};
        tmp.map((i)=>{
            const sp = i.split("=");
            data[sp[0]] = sp[1];
        });

        return data;
    }else{
        return false;
    }
}

export {
    getParam
}