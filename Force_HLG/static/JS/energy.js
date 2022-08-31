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
const stp1 = document.getElementById('step-1')
const stp2 = document.getElementById('step-2')
const btnleft = document.getElementById('buttonleft')
const btncenter = document.getElementById('buttoncenter')
const btnright = document.getElementById('buttonright')
const btnleft1 = document.getElementById('buttonleft1')
const btncenter1 = document.getElementById('buttoncenter1')
const btnright1 = document.getElementById('buttonright1')
const tp = document.getElementById('top')
const prs = document.getElementById('process')
const btt = document.getElementById('bottom')




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
    stp1.style.opacity=1;
    // btnleft.style.opacity=1;
    // btncenter.style.opacity=1;
    // btnright.style.opacity=1;
    genprobstp1.play()
})

let tl = anime.timeline({
    easing:'linear',
    autoplay: false
})
tl.add({
    targets: "#buttonleft",
    opacity: 1, 
    duration: 5
},11000)
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

