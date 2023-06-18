score =0;  
cross =true;
audio=new Audio('music.mp3')
audiogo=new Audio('gameover.mp3')
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown=function(e){
    console.log("key code is:",e.keyCode )
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('Animatedino');
        setTimeout(()=>{
            dino.classList.remove('Animatedino')
        },700)
    }
   
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
       dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = dinoX + 120 +"px"
    }
     if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dinoX - 120) +"px"
    }
}
setInterval(()=>{
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    dx =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
     dy =parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
     
     
     ox =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))


offsetX= Math.abs(dx-ox)
offsetY= Math.abs(dy-oy)
// console.log(offsetX,offsetY)
if(offsetX < 173 && offsetY < 53){   
gameover.innerHTML ="Game Over - Reload to play again"
obstacle.classList.remove('obstacleAni')
audiogo.play();
audio.pause();
setTimeout(() => {
    audiogo.pause();
},1000);

}
else if(offsetX< 145 && cross){
    score +=1
  updatescore(score);
  cross =false;
  setTimeout(()=>{
    cross =true;
  },1000)
  setTimeout(()=>{
anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
  newdur = anidur - 0.1;
  obstacle.style.animationDuration =newdur + 's'
// console.log('New animation duration',newdur)
  },500)
  
}

},10);

function updatescore(score){
    scorecont.innerHTML =" Your Score : " + score
    }