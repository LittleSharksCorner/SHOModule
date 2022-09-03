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
const stp3 = document.getElementById('step-3')
const stp4 = document.getElementById('step-4')
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
const bttstep4 = document.getElementById('button-step-4')
const al1 = document.getElementById('algebra-1')
const al2 = document.getElementById('algebra-2')
const al3 = document.getElementById('algebra-3')
const al4 = document.getElementById('algebra-4')
const al5 = document.getElementById('algebra-5')
const albtn1 = document.getElementById('al-button-1')
const albtn2 = document.getElementById('al-button-2')
const albtn3 = document.getElementById('al-button-3')
const albtn4 = document.getElementById('al-button-4')




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
    genprobstp2.play();
})


bttstep1.addEventListener('click', ()=>{        //STEP 1
    stp1.style.opacity=1;
    stp2.style.opacity=0;                // step 2 content
    btnleft1.style.opacity=0;   
    btncenter1.style.opacity=0;
    btnright1.style.opacity=0;
    pl.style.opacity=0;
    eq.style.opacity=0;
    stp3.style.opacity=0;                  // step 3 content
    btnleft2.style.opacity=0;
    btncenter2.style.opacity=0;
    btnright2.style.opacity=0;
    pl1.style.opacity=0;
    eq1.style.opacity=0;
    stp4.style.opacity=0;                 // Step 4 content
    al1.style.opacity=0;
    al2.style.opacity=0;
    al3.style.opacity=0;
    al4.style.opacity=0;
    al5.style.opacity=0;
    albtn1.style.opacity=0;
    albtn2.style.opacity=0;
    albtn3.style.opacity=0;
    albtn4.style.opacity=0;
})

genprobstp1.addEventListener('ended',()=>{
    bttstep1.style.opacity=0;
    bttstep2.style.opacity=1;
    bttstep3.style.opacity=0;
    bttstep4.style.opacity=0;
})

bttstep2.addEventListener('click', ()=>{        //STEP 2
    stp1.style.opacity=0;               //step 1 content
    btnleft.style.opacity=0;
    btncenter.style.opacity=0;
    btnright.style.opacity=0;
    stp2.style.opacity=1;               //step 2 content
    btnleft1.style.opacity=1;           
    btncenter1.style.opacity=1;
    btnright1.style.opacity=1;
    pl.style.opacity=1;
    eq.style.opacity=1;
    stp3.style.opacity=0;               //step 3 content
    btnleft2.style.opacity=0;
    btncenter2.style.opacity=0;
    btnright2.style.opacity=0;
    pl1.style.opacity=0;
    eq1.style.opacity=0;
    stp4.style.opacity=0;              // Step 4 content
    al1.style.opacity=0;
    al2.style.opacity=0;
    al3.style.opacity=0;
    al4.style.opacity=0;
    al5.style.opacity=0;
    albtn1.style.opacity=0;
    albtn2.style.opacity=0;
    albtn3.style.opacity=0;
    albtn4.style.opacity=0;
})

genprobstp2.addEventListener('ended',()=>{
    bttstep1.style.opacity=1;
    bttstep2.style.opacity=0;
    bttstep3.style.opacity=1;
    bttstep4.style.opacity=0;
})

bttstep3.addEventListener('click', ()=>{           //STEP 3
    stp1.style.opacity=0;                   //step 1 content
    btnleft.style.opacity=0;
    btncenter.style.opacity=0;
    btnright.style.opacity=0;
    stp2.style.opacity=0;                   //step 2 content
    btnleft1.style.opacity=0;
    btncenter1.style.opacity=0;
    btnright1.style.opacity=0;
    pl.style.opacity=0;
    eq.style.opacity=0;
    stp3.style.opacity=1;                   //step 3 content
    btnleft2.style.opacity=1;
    btncenter2.style.opacity=1;
    btnright2.style.opacity=1;
    pl1.style.opacity=1;
    eq1.style.opacity=1;
    stp4.style.opacity=0;                   //step 4 content
    al1.style.opacity=0;
    al2.style.opacity=0;
    al3.style.opacity=0;
    al4.style.opacity=0;
    al5.style.opacity=0;
    albtn1.style.opacity=0;
    albtn2.style.opacity=0;
    albtn3.style.opacity=0;
    albtn4.style.opacity=0;
    bttstep1.style.opacity=0;
    bttstep2.style.opacity=1;
    bttstep3.style.opacity=0;
    bttstep4.style.opacity=1;
})


bttstep4.addEventListener('click', ()=>{        //STEP 4
    stp1.style.opacity=0;                   // Step 1 content
    btnleft.style.opacity=0;
    btncenter.style.opacity=0;
    btnright.style.opacity=0;
    tp.style.opacity=0;
    prs.style.opacity=0;
    btt.style.opacity=0;
    stp2.style.opacity=0;                   // Step 2 content
    btnleft1.style.opacity=0;
    btncenter1.style.opacity=0;
    btnright1.style.opacity=0;
    pl.style.opacity=0;
    eq.style.opacity=0;
    stp3.style.opacity=0;                  // step 3 content
    btnleft2.style.opacity=0;
    btncenter2.style.opacity=0;
    btnright2.style.opacity=0;
    pl1.style.opacity=0;
    eq1.style.opacity=0;
    stp4.style.opacity=1;                 // Step 4 content
    al1.style.opacity=1;
    albtn1.style.opacity=1;
    bttstep1.style.opacity=0;
    bttstep2.style.opacity=0;
    bttstep3.style.opacity=1;
    bttstep4.style.opacity=0;
})

albtn1.addEventListener('click', ()=>{
    albtn1.style.opacity=0;
    al2.style.opacity=1;
    albtn2.style.opacity=1;
})

albtn2.addEventListener('click',()=>{
    albtn2.style.opacity=0;
    al3.style.opacity=1;
    albtn3.style.opacity=1;
})

albtn3.addEventListener('click',()=>{
    albtn3.style.opacity=0;
    al4.style.opacity=1;
    albtn4.style.opacity=1;
})

albtn4.addEventListener('click',()=>{
    albtn4.style.opacity=0;
    al5.style.opacity=1;
})


