const string =`.san{
    width: 0;
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    position: absolute;
    top:100%;
    transform: translate(-50%,-50%);
}
.san::after{
    content: '';
    clear: both;
    display: block;
    background-color: black;
    position: absolute;
    width: 20px;
    height: 8px;
    top: 100%;
    transform: translate(-50%,-220%);
    border-radius:10px 10px 0 0;
}

.eye{
    width: 64px;
    height: 64px;
    border: 2px solid black;
    position: absolute;
    top: 15%;
    left: 50%;
    /* transform: translate(-50%); */
    margin-left: -32px;
    border-radius: 50%;
    background-color: #2e2e2e;

}
.eye.left{
    transform: translateX(100px);

}
.eye::before{
    content: '';
    display: block;
    clear: both;
    width: 26px;
    height: 26px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    top: 3px;
    left: 20%;
    border: 2px solid #000;
}
.eye.right{
    transform: translateX(-100px);
}
.mouth{
    width: 200px;
    height: 140px;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}
.up{
    width: inherit;
    height: 100%;
    position: absolute;
    left: -1px;
    top: 0;
}
.up .lip{
    position: absolute;
    top: -5px;
    margin-left: 1px;
    border: 2px solid black;
    border-color:  transparent transparent black transparent;
    width: 100px;
    height: 20px;
    background-color: #ffdb00;
    z-index: 1;
}
.up .lip::after{
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: -14px;
    border: 5px solid  #ffdb00;
    background-color: #ffdb00;
    height: 30px;

}
.up .lip.left::after{
    left:48%;
}
.up .lip.right::after{
    right:98%;
}
.up .lip.right{
    border-radius: 0 0  20px 0;
    right: 50%;
    transform: translateX(100%) rotate(14deg);
}
.up .lip.left{
    border-radius: 0 0 0 20px;
    left: 50%;
    transform: translateX(-100%) rotate(-14deg);
}


.down{
    width: 150px;
    height: 1000px;
    position: absolute;
    border: 2px solid black;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 90px/350px;
    background-color: #a61108;
    overflow: hidden;
}
.yuan1{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 89%;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
    background-color: #ff5b5d;
}

.face{
    width: 88px;
    height: 88px;
    border: 2px solid black;
    position: absolute;
    top: 24%;
    left: 50%;
    border-radius: 50%;
    margin-left: -44px;
    z-index: 2;
    background-color: #fe1800;

}
.face.left{
    transform: translateX(-170px);
}

.face.right{
    transform: translateX(170px);
}

`
export default string