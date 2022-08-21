const f1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },5000)
})

const f2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(2)
    },3000)
})

const f3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(3)
    },1000)
})

let listF = [f1,f2,f3]

listF.reduce((previous, current)=>{
    return previous.then((data)=>{
        console.log(data)
        return current
    })
}, Promise.resolve(0))

