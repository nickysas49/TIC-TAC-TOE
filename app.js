var allBox = document.getElementsByClassName('box');
var startBtn = document.getElementById('start-btn');
var restartBtn1 = document.getElementById('restart-btn1');
var restartBtn2 = document.getElementById('restart-btn2');
var restartBtn3 = document.getElementById('restart-btn3');
var restartBtn4 = document.getElementById('restart-btn4');

startBtn.addEventListener('click',start);
function start(){
    console.log("start")
    document.getElementsByClassName('popBox-mask')[0].style.display = "none";
    document.getElementsByClassName('popBox-intro')[0].style.display = "none";
    document.getElementsByClassName('timer')[0].style.display = "initial";
}

restartBtn1.addEventListener('click',restart);
restartBtn2.addEventListener('click',restart);
restartBtn3.addEventListener('click',restart);
restartBtn4.addEventListener('click',restart);
function restart(){
   location.reload()
}

function b(index){
    if (allBox[index].style.backgroundColor == ''){
        return true;
    }else{
        return false;
    }
}

function r(index){
    if (allBox[index].style.backgroundColor == 'red'){
        return true;
    }else{
        return false;
    }
}

function o(index){
    if (allBox[index].style.backgroundColor == 'orange'){
        return true;
    }else{
        return false;
    }
}

var counterRed =0;
var seconds=9;
function countDown(){
    if(document.getElementsByClassName('popBox-mask')[0].style.display == "none"){
        seconds--;
        document.getElementsByClassName('timer')[0].textContent = seconds;
        console.log(seconds)
        if(seconds <= 0) {
            clearInterval(inter);
            document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
            document.getElementsByClassName('popBox-timeout')[0].style.display = "initial";
            document.getElementsByClassName('timer')[0].style.display = "none";  
        }
    }
}
var inter = setInterval("countDown()",1000);

function handleClick(event) {
    counterRed++;
    var userClicked = event.target;
    if(userClicked.style.backgroundColor == ''){
      userClicked.style.backgroundColor = 'red';
    }
    console.log('user step'+counterRed);

    //(step one)
    if(r(0)&&b(1)&&b(2)&&b(3)&&b(4)&&b(5)&&b(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&r(1)&&b(2)&&b(3)&&b(4)&&b(5)&&b(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&r(2)&&b(3)&&b(4)&&b(5)&&b(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&r(3)&&b(4)&&b(5)&&b(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&b(3)&&r(4)&&b(5)&&b(6)&&b(7)&&b(8)){
        allBox[0].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&b(3)&&b(4)&&r(5)&&b(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&b(3)&&b(4)&&b(5)&&r(6)&&b(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&b(3)&&b(4)&&b(5)&&b(6)&&r(7)&&b(8)){
        allBox[4].style.backgroundColor = 'orange';
    }else if(b(0)&&b(1)&&b(2)&&b(3)&&b(4)&&b(5)&&b(6)&&b(7)&&r(8)){
        allBox[4].style.backgroundColor = 'orange';
    }
    //(step 2 cp block)
    if((counterRed==2 && (b(0)&&r(1)&&r(2))) || (counterRed==2 && (b(0)&&r(3)&&r(6)))){
        allBox[0].style.backgroundColor = 'orange';
    }else if(counterRed==2 && (b(1)&&r(0)&&r(2)) ){
        allBox[1].style.backgroundColor = 'orange';
    }else if((counterRed==2 && (b(2)&&r(1)&&r(0))) || (counterRed==2 &&(b(2)&&r(5)&&r(8)))){
        allBox[2].style.backgroundColor = 'orange';
    }else if(counterRed==2 && (b(3)&&r(0)&&r(6)) ){
        allBox[3].style.backgroundColor = 'orange';
    }else if(counterRed==2 && (b(5)&&r(2)&&r(8)) ){
        allBox[5].style.backgroundColor = 'orange';
    }else if((counterRed==2 && (b(6)&&r(0)&&r(3))) || (counterRed==2 &&(b(6)&&r(7)&&r(8)))){
        allBox[6].style.backgroundColor = 'orange';
    }else if(counterRed==2 && (b(7)&&r(6)&&r(8))){
        allBox[7].style.backgroundColor = 'orange';
    }else if((counterRed==2 && (b(8)&&r(2)&&r(5))) || (counterRed==2 &&(b(8)&&r(6)&&r(7)))){
        allBox[8].style.backgroundColor = 'orange';

    }else if(counterRed==2 && o(4) && r(0) &&r(8)){
        allBox[5].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(4)&& r(2) &&r(6)){
        allBox[3].style.backgroundColor = 'orange';

    }else if(counterRed==2 && o(4)&& r(1) &&r(3)){
        allBox[6].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(4)&& r(1) &&r(5)){
        allBox[0].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(4)&& r(5) &&r(7)){
        allBox[2].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(4)&& r(3) &&r(7)){
        allBox[8].style.backgroundColor = 'orange';

    }else if(counterRed==2 && o(0)&& r(4) &&r(1)){
        allBox[7].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(2)){
        allBox[6].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(3)){
        allBox[5].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(5)){
        allBox[3].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(6)){
        allBox[2].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(7)){
        allBox[1].style.backgroundColor = 'orange';
    }else if(counterRed==2 && o(0)&& r(4) &&r(8)){
        allBox[3].style.backgroundColor = 'orange';
        
    }else if((counterRed==2 && o(4) && r(1) &&r(6)) || (counterRed==2 && o(4) && r(0) &&r(7)) || (counterRed==2 && o(4) && r(1) &&r(7))){
        allBox[3].style.backgroundColor = 'orange';
    }else if((counterRed==2 && o(4) && r(1) &&r(8)) || (counterRed==2 && o(4) && r(2) &&r(7))){
        allBox[5].style.backgroundColor = 'orange';
    }else if((counterRed==2 && o(4) && r(2) &&r(3)) || (counterRed==2 && o(4) && r(0) &&r(5)) || (counterRed==2 && o(4) && r(3) &&r(5))){
        allBox[1].style.backgroundColor = 'orange';
    }else if((counterRed==2 && o(4) && r(3) &&r(8)) || (counterRed==2 && o(4) && r(5) &&r(6))){
        allBox[7].style.backgroundColor = 'orange';
    }

    //step 3 cp check win first, if not, block, else, random
    if((counterRed==3 && (b(0)&&o(1)&&o(2))) || (counterRed==3 && (b(0)&&o(3)&&o(6)))|| (counterRed==3 && (b(0)&&o(4)&&o(8)))){
        allBox[0].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(1)&&o(0)&&o(2))) || (counterRed==3 && (b(1)&&o(4)&&o(7)))){
        allBox[1].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(2)&&o(1)&&o(0))) || (counterRed==3 && (b(2)&&o(4)&&o(6))) || (counterRed==3 && (b(2)&&o(5)&&o(8)))){
        allBox[2].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(3)&&o(0)&&o(6))) || (counterRed==3 && (b(3)&&o(4)&&o(5)))){
        allBox[3].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(4)&&o(1)&&o(7))) || (counterRed==3 && (b(4)&&o(3)&&o(5))) || (counterRed==3 && (b(4)&&o(0)&&o(8))) || (counterRed==3 && (b(4)&&o(2)&&o(6)))){
        allBox[4].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(5)&&o(3)&&o(4))) || (counterRed==3 && (b(5)&&o(2)&&o(8)))){
        allBox[5].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(6)&&o(0)&&o(3))) || (counterRed==3 && (b(6)&&o(2)&&o(4))) || (counterRed==3 && (b(6)&&o(7)&&o(8)))){
        allBox[6].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(7)&&o(1)&&o(4))) || (counterRed==3 && (b(7)&&o(6)&&o(8)))){
        allBox[7].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(8)&&o(0)&&o(4))) || (counterRed==3 && (b(8)&&o(2)&&o(5))) || (counterRed==3 && (b(8)&&o(6)&&o(7)))){
        allBox[8].style.backgroundColor = 'orange';
    }
    if((counterRed==3 && (b(0)&&r(1)&&r(2))) || (counterRed==3 && (b(0)&&r(3)&&r(6)))|| (counterRed==3 && (b(0)&&r(4)&&r(8)))){
        allBox[0].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(1)&&r(0)&&r(2))) || (counterRed==3 && (b(1)&&r(4)&&r(7)))){
        allBox[1].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(2)&&r(1)&&r(0))) || (counterRed==3 && (b(2)&&r(4)&&r(6))) || (counterRed==3 && (b(2)&&r(5)&&r(8)))){
        allBox[2].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(3)&&r(0)&&r(6))) || (counterRed==3 && (b(3)&&r(4)&&r(5)))){
        allBox[3].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(4)&&r(1)&&r(7))) || (counterRed==3 && (b(4)&&r(3)&&r(5))) || (counterRed==3 && (b(4)&&r(0)&&r(8))) || (counterRed==3 && (b(4)&&r(2)&&r(6)))){
        allBox[4].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(5)&&r(3)&&r(4))) || (counterRed==3 && (b(5)&&r(2)&&r(8)))){
        allBox[5].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(6)&&r(0)&&r(3))) || (counterRed==3 && (b(6)&&r(2)&&r(4))) || (counterRed==3 && (b(6)&&r(7)&&r(8)))){
        allBox[6].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(7)&&r(1)&&r(4))) || (counterRed==3 && (b(7)&&r(6)&&r(8)))){
        allBox[7].style.backgroundColor = 'orange';
    }else if((counterRed==3 && (b(8)&&r(0)&&r(4))) || (counterRed==3 && (b(8)&&r(2)&&r(5))) || (counterRed==3 && (b(8)&&r(6)&&r(7)))){
        allBox[8].style.backgroundColor = 'orange';
    }else if(counterRed==3){
        var blankArr = []
        for (var index = 0; index <= 8; index++){
            if(b(index)){
                blankArr.push(index)
            }
        } 
            console.log(blankArr)
            var cpIndex = Math.floor(Math.random() * 4)
            allBox[blankArr[cpIndex]].style.backgroundColor = 'orange';
    }

    if((counterRed==4 && (b(0)&&r(1)&&r(2))) || (counterRed==4 && (b(0)&&r(3)&&r(6)))|| (counterRed==4 && (b(0)&&r(4)&&r(8)))){
        allBox[0].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(1)&&r(0)&&r(2))) || (counterRed==4 && (b(1)&&r(4)&&r(7)))){
        allBox[1].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(2)&&r(1)&&r(0))) || (counterRed==4 && (b(2)&&r(4)&&r(6))) || (counterRed==4 && (b(2)&&r(5)&&r(8)))){
        allBox[2].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(3)&&r(0)&&r(6))) || (counterRed==4 && (b(3)&&r(4)&&r(5)))){
        allBox[3].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(4)&&r(1)&&r(7))) || (counterRed==4 && (b(4)&&r(3)&&r(5))) || (counterRed==4 && (b(4)&&r(0)&&r(8))) || (counterRed==4 && (b(4)&&r(2)&&r(6)))){
        allBox[4].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(5)&&r(3)&&r(4))) || (counterRed==4 && (b(5)&&r(2)&&r(8)))){
        allBox[5].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(6)&&r(0)&&r(3))) || (counterRed==4 && (b(6)&&r(2)&&r(4))) || (counterRed==4 && (b(6)&&r(7)&&r(8)))){
        allBox[6].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(7)&&r(1)&&r(4))) || (counterRed==4 && (b(7)&&r(6)&&r(8)))){
        allBox[7].style.backgroundColor = 'orange';
    }else if((counterRed==4 && (b(8)&&r(0)&&r(4))) || (counterRed==4 && (b(8)&&r(2)&&r(5))) || (counterRed==4 && (b(8)&&r(6)&&r(7)))){
        allBox[8].style.backgroundColor = 'orange';
    }else if(counterRed==4){
        var blankArr = []
        for (var index = 0; index <= 8; index++){
            if(b(index)){
                blankArr.push(index)
            }
        } 
        console.log(blankArr)
        var cpIndex = Math.floor(Math.random() * 2)
        allBox[blankArr[cpIndex]].style.backgroundColor = 'orange';
    }


    if (r(0)&&r(1)&&r(2)){
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(3)&&r(4)&&r(5)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(6)&&r(7)&&r(8)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(0)&&r(3)&&r(6)){
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(1)&&r(4)&&r(7)){
        allBox[0].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(2)&&r(5)&&r(8)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(0)&&r(4)&&r(8)){
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (r(2)&&r(4)&&r(6)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-win')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
   

    if (o(0)&&o(1)&&o(2)){
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(3)&&o(4)&&o(5)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(6)&&o(7)&&o(8)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(0)&&o(3)&&o(6)){
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(1)&&o(4)&&o(7)){
        allBox[0].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(2)&&o(5)&&o(8)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[4].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(0)&&o(4)&&o(8)){
        allBox[1].style.backgroundColor = '';
        allBox[2].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[6].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
    if (o(2)&&o(4)&&o(6)){
        allBox[0].style.backgroundColor = '';
        allBox[1].style.backgroundColor = '';
        allBox[3].style.backgroundColor = '';
        allBox[5].style.backgroundColor = '';
        allBox[7].style.backgroundColor = '';
        allBox[8].style.backgroundColor = '';
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-lose')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }
 
    if (b(0)== false &&b(1)== false &&b(2)== false &&b(3)== false &&b(4)== false &&b(5)== false &&b(6)== false &&b(7)== false &&b(8)== false ){
        document.getElementsByClassName('popBox-mask')[0].style.display = "initial";
        document.getElementsByClassName('popBox-tie')[0].style.display = "initial";
        document.getElementsByClassName('timer')[0].style.display = "none";
    }

}


for (var index = 0; index < allBox.length; index++){
    allBox[index].addEventListener('click', handleClick);
} 
