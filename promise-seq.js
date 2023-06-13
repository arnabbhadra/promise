const f1 = ()=> {return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        resolve(1)
    }, 5000)
})}

const f2 = ()=>{ return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(2);
        resolve(2)
    }, 2000)
})}

const f3 = ()=>{ return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(3);
        resolve(3)
    }, 2000)
})}

let listF = [f1, f2, f3]

const f4 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(4);
            resolve();
        }, 1000);
    })
};
listF.push(f4);

const promiseSeq = () => {
    return listF.reduce((previous, current) => {
        return previous.then(()=> {
            return current()});
    }, Promise.resolve())
}
promiseSeq();
