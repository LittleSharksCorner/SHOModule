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
const stp1 = document.getElementById('step-1')
const stp2 = document.getElementById('step-2')
const btnleft = document.getElementById('buttonleft')
const btncenter = document.getElementById('buttoncenter')
const btnright = document.getElementById('buttonright')
const btnleft1 = document.getElementById('buttonleft1')
const btncenter1 = document.getElementById('buttoncenter1')
const btnright1 = document.getElementById('buttonright1')


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
    btnleft.style.opacity=1;
    btncenter.style.opacity=1;
    btnright.style.opacity=1;
})



