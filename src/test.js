import string from "./css";

let n=0
demo.innerText= string.substring(0,n) //找到string的子字符串
demo2.innerHTML = string.substring(0,n)
let time = 100
let run = ()=>{
    n+=1

    if(n>string.length){
        window.clearInterval(id) //如果超过文字的长度 就取消定时器
    }
    demo.innerText =string.substring(0,n)
    demo2.innerHTML =string.substring(0,n)
    demo.scrollTop=demo.scrollHeight //它的滚动高度

}
let clearI = ()=>{
    window.clearInterval(id)
}
let play = ()=>{
    return setInterval(run,time)
}
let id = play()

btnPause.onclick=()=>{
    clearI() //清除定时器函数
}

btnPlay.onclick=()=>{
    id =play()
}
btnSlow.onclick=()=>{
    clearI()
    time = 300
    id =play()
}

btnInter.onclick=()=>{
    clearI()
    time = 100
    id =play()
}
btnSpeed.onclick=()=>{
    clearI()
    time = 0
    id =play()
}