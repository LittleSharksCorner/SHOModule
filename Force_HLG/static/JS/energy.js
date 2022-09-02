// const leftbtn = document.getElementById("buttonleft")

// leftbtn.addEventListener('click',function(){
//     let tl = anime.timeline({
//         easing : 'linear',
//         autoplay: true
//     })
//     tl.add({
//         targets: "#problem-text",
//         opacity: 0,
//         duration: 0.3
//     })
// })

const playbtn = document.getElementById('playbutton')
const pausebtn = document.getElementById('pausebutton')
const replaybtn = document.getElementById('replaybutton')
const probstatement = document.getElementById('problemstatement')
const genprobstp1 = document.getElementById('genprob-step1')
const genprobstp2 = document.getElementById('genprob-step2')
const stp1 = document.getElementById('step-1')
const stp2 = document.getElementById('step-2')
const btnleft = document.getElementById('buttonleft')
const btncenter = document.getElementById('buttoncenter')
const btnright = document.getElementById('buttonright')
const btnleft1 = document.getElementById('buttonleft-1')
const btncenter1 = document.getElementById('buttoncenter-1')
const btnright1 = document.getElementById('buttonright-1')
const btnleft2 = document.getElementById('buttonleft-2')
const btncenter2 = document.getElementById('buttoncenter-2')
const btnright2 = document.getElementById('buttonright-2')
const tp = document.getElementById('top')
const prs = document.getElementById('process')
const btt = document.getElementById('bottom')
const pl = document.getElementById('plus')
const eq = document.getElementById('equal')
const pl1 = document.getElementById('plus-1')
const eq1 = document.getElementById('equal-1')
const bttstep1 = document.getElementById('button-step-1')
const bttstep2 = document.getElementById('button-step-2')
const bttstep3 = document.getElementById('button-step-3')




playbtn.addEventListener('click', ()=>{
    probstatement.play()
})

pausebtn.addEventListener('click', ()=>{
    probstatement.pause()
})

replaybtn.addEventListener('click', ()=>{
    probstatement.currentTime= 20
    probstatement.play()
    // probstatement.currentTime= probstatement.duration
})

probstatement.addEventListener('ended', ()=>{
    bttstep1.style.opacity=1;
})

bttstep1.addEventListener('click', ()=>{
    stp1.style.opacity=1;
    genprobstp1.play();
})

let tl = anime.timeline({
    easing:'linear',
    autoplay: false
})
tl.add({
    targets: "#buttonleft",
    opacity: 1, 
    duration: 5
},10000)
tl.add({
    targets: "#buttoncenter",
    opacity: 1, 
    duration: 5
},13000)
tl.add({
    targets: "#buttonright",
    opacity: 1, 
    duration: 5
},16000)


  //Set Interval checks -> 50ms for audio time. 
  const x = setInterval(function(){
    let place = genprobstp1.currentTime;
    //anime timeline syncs animation with audio
      tl.seek(place*1000);
  },50);

btnleft.addEventListener('click',function(){
    tp.style.opacity=1;
})

btncenter.addEventListener('click',function(){
    prs.style.opacity=1;
})

btnright.addEventListener('click',function(){
    btt.style.opacity=1;
})

genprobstp1.addEventListener('ended', ()=>{
    bttstep2.style.opacity = 1;
})

bttstep2.addEventListener('click', ()=>{
    stp2.style.opacity=1;
    genprobstp2.play();
})


bttstep3.addEventListener('click', ()=>{
    stp1.style.opacity=0;
    btnleft.style.opacity=0;
    btncenter.style.opacity=0;
    btnright.style.opacity=0;
    stp2.style.opacity=0;
    btnleft1.style.opacity=0;
    btncenter1.style.opacity=0;
    btnright1.style.opacity=0;
    btnleft2.style.opacity=1;
    btncenter2.style.opacity=1;
    btnright2.style.opacity=1;
    pl.style.opacity=0;
    eq.style.opacity=0;
    pl1.style.opacity=1;
    eq1.style.opacity=1;
    bttstep1.style.opacity=1;
    bttstep2.style.opacity=1;
    bttstep3.style.opacity=0;
})


bttstep1.addEventListener('click', ()=>{
    stp2.style.opacity=0;
    btnleft1.style.opacity=0;
    btncenter1.style.opacity=0;
    btnright1.style.opacity=0;
    pl.style.opacity=0;
    eq.style.opacity=0;
    bttstep1.style.opacity=0;
    bttstep2.style.opacity=1;
    bttstep3.style.opacity=0;
})

bttstep2.addEventListener('click', ()=>{
    stp1.style.opacity=0;
    btnleft.style.opacity=0;
    btncenter.style.opacity=0;
    btnright.style.opacity=0;
    btnleft1.style.opacity=1;
    btncenter1.style.opacity=1;
    btnright1.style.opacity=1;
    pl.style.opacity=1;
    eq.style.opacity=1;
    bttstep1.style.opacity=1;
    bttstep2.style.opacity=0;
    bttstep3.style.opacity=1;
})