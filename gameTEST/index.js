

let bg=document.getElementById("nrd-btn")
let valueEl=document.getElementById("value-el")
let loc=25
let revbg=document.getElementById("sqr-el25")
revbg.style.backgroundImage="url("+ "/img/carton/png-carton3.png" +")"
let revClr=document.getElementById("sqr-el25")
revClr.style.color="red"


function nrdRnd(){

    
let rnd6=Math.floor(Math.random()*6)+1
bg.style.backgroundImage="url("+ "/img/nrd-blk/" +rnd6+".gif" +")"
let bo=loc-rnd6
if(bo>0 ){
    revClr.style.color="white"
    revbg.style.backgroundImage="none"
    loc-=rnd6
    
  
    revbg=document.getElementById("sqr-el"+loc)
    revbg.style.backgroundImage="url("+ "/img/carton/png-carton3.png" +")"
     revClr=document.getElementById("sqr-el"+loc)
     revClr.style.color="red"


     valueEl.textContent=rnd6
     if(loc==1)
     {valueEl.textContent=" 🎊 YOU WIN 🎊"}
}


}
function newGame(){
    revClr.style.color="white"
    revbg.style.backgroundImage="none"
    loc=25
    revbg=document.getElementById("sqr-el25")
    revbg.style.backgroundImage="url("+ "/img/carton/png-carton3.png" +")"
    revClr=document.getElementById("sqr-el25")
    revClr.style.color="red"
    document.getElementById(value-el).textContent=" 0"
    bg.style.backgroundImage="url("+ "/img/nrd.gif" +")"
}