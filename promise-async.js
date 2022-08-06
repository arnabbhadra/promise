const f1 = ()=>{
    setTimeout(()=>{
        console.log("f1 waited for 3s");
        
    },3000);
}

const f2 = ()=>{
    setTimeout(()=>{
        console.log("f2 waited for 5s");
    },5000);
}

const f3 = ()=>{
    setTimeout(()=>{
        console.log("f3 waited for 6s");
    },6000);
}
const listOfFunction =[f1,f2,f3];
(function main(){
    return Promise.all(listOfFunction.map((func)=>{func()}));
})();