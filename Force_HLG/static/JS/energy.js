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
const genprobstp3 = document.getElementById('genprob-step3')
const genprobstp4 = document.getElementById('genprob-step4')
const genprobstp42 = document.getElementById('genprob-step4-2')
const stp1 = document.getElementById('step-1')
const stp2 = document.getElementById('step-2')
const stp3 = document.getElementById('step-3')
const stp4 = document.getElementById('step-4')
const note = document.getElementById('note')
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
const notes = document.getElementById('notes')
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
const next1 = document.getElementById('btn1')
const back1 = document.getElementById('btn11')
const next2 = document.getElementById('btn2')
const back2 = document.getElementById('btn22')
const next3 = document.getElementById('btn3')
const back3 = document.getElementById('btn33')
const cs0 = document.getElementById('cs0')
const cs1 = document.getElementById('cs1')
const cs2 = document.getElementById('cs2')
const cs3 = document.getElementById('cs3')
const cs0hdr = document.getElementById('cs0_header')
const Kbtn = document.getElementById('kinetic_energy')
const Ubtn = document.getElementById('potential_energy')
const Wbtn = document.getElementById('work_friction')
const Ebtn = document.getElementById('con_energy')
const defK = document.getElementById('def_K')
const formK = document.getElementById('form_K')
const defU = document.getElementById('def_U')
const formU = document.getElementById('form_U')
const defW = document.getElementById('def_W')
const formW = document.getElementById('form_W')
const con0 = document.getElementById('con_img_0')
const con1 = document.getElementById('con_img_1')
const con2 = document.getElementById('con_img_2')
const endcs0 = document.getElementById('endcs0')
const hint3abtn = document.getElementById('hint3abtn')
const hint3bbtn = document.getElementById('hint3bbtn')
const hint4btn = document.getElementById('hint4btn')
const review= document.getElementById('review')
const dK = document.getElementById('Def_K')
const dU = document.getElementById('Def_U')
const dW = document.getElementById('Def_W')
const CE1 = document.getElementById('ConE1')
const CE2 = document.getElementById('ConE2')
const CE3 = document.getElementById('ConE3')
const CE4 = document.getElementById('ConE4')


let fin
// cs0.style.display = 'none'
// cs1.style.display='none'
// cs2.style.display = 'none'
//  cs3.style.display = 'none'
// cs4.style.display='none'
let Kbtn_clicked = false
let Ubtn_clicked = false
let Wbtn_clicked = false




////////     CS0     //////////////////////////////////////////////////////////////////////////////////////////////////////

Kbtn.addEventListener('click', ()=>{
    dK.play();
    dU.pause();
    dW.pause();
    defK.style.opacity=1;
    cs0hdr.style.opacity=0;
    formK.style.opacity=1;
    Kbtn_clicked = true;
    let tl=anime.timeline({
        autoplay:true, 
        easing:'linear'
    })
    tl.add({
        targets: "#kinetic_energy",
        translateY: -200,
        scale: 0.62,
        duration: 250
    })
    if(Kbtn_clicked && Ubtn_clicked && Wbtn_clicked){
        Ebtn.style.display='inline'
    }
})

Ubtn.addEventListener('click',()=>{
    dU.play();
    dK.pause();
    dW.pause();
    defU.style.opacity=1;
    cs0hdr.style.opacity=0;
    formU.style.opacity=1;
    Ubtn_clicked = true;
    let tl=anime.timeline({
        autoplay:true,
        easing: 'linear'
    })
    tl.add({
        targets: "#potential_energy",
        translateY: -200,
        scale:0.62,
        duration: 250
    })
    if(Kbtn_clicked && Ubtn_clicked && Wbtn_clicked){
        Ebtn.style.display='inline'
    }
})

Wbtn.addEventListener('click', ()=>{
    dW.play();
    dK.pause();
    dU.pause();
    defW.style.opacity=1;
    cs0hdr.style.opacity=0;
    formW.style.opacity=1;
    Wbtn_clicked = true;
    let tl=anime.timeline({
        autoplay:true,
        easing:'linear'
    })
    tl.add({
        targets:"#work_friction",
        translateY: -200,
        scale:0.62,
        duration: 250
    })
    if(Kbtn_clicked && Ubtn_clicked && Wbtn_clicked){
        Ebtn.style.display='inline'
    }
})

// CE1.addEventListener('ended',()=>{
//     Ebtn.style.display='inline'
// })

Ebtn.addEventListener('click', ()=>{
    dK.pause();
    dU.pause();
    dW.pause();
    CE1.play();
    con0.style.display='inline';
    Ebtn.style.display='none'
})

con0.addEventListener('click',()=>{
    CE1.pause();
    CE2.play()
})

CE2.addEventListener('ended', ()=>{
    con1.style.display = 'inline'
})

con1.addEventListener('click', ()=>{
    CE3.play()
})

CE3.addEventListener('ended',()=>{
    con2.style.display='inline'
})

con2.addEventListener('click',()=>{
    CE4.play()
})

CE4.addEventListener('ended',()=>{
    endcs0.style.display='inline'
})

endcs0.addEventListener('click',()=>{
    cs0.style.display='none';
    cs1.style.display='grid'
})







////////     CS1     //////////////////////////////////////////////////////////////////////////////////////////////////////

playbtn.addEventListener('click', ()=>{
    probstatement.play()
})

pausebtn.addEventListener('click', ()=>{
    probstatement.pause()
})

replaybtn.addEventListener('click', ()=>{
    probstatement.currentTime= 22
    probstatement.play()
    // probstatement.currentTime= probstatement.duration
})

probstatement.addEventListener('ended', ()=>{
    bttstep1.style.display='inline';
})

bttstep1.addEventListener('click', ()=>{
    genprobstp2.pause();
    genprobstp1.play();
    let tl = anime.timeline({
        easing:'linear',
        autoplay: false
    })
    tl.add({
        targets: "#buttonleft",
        begin: function(){
            document.getElementById("buttonleft").style.display = 'inline'
        }
    },10000)
    tl.add({
        targets: "#buttoncenter",
        begin: function(){
            document.getElementById("buttoncenter").style.display = 'inline'
        } 
    },13000)
    tl.add({
        targets: "#buttonright",
        begin: function(){
            document.getElementById("buttonright").style.display = 'inline'
        }
    },16000)
    //Set Interval checks -> 50ms for audio time. 
    const x = setInterval(function(){
     let place = genprobstp1.currentTime;
    //anime timeline syncs animation with audio
      tl.seek(place*1000);
    },50);
})

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
    bttstep2.style.display='inline';
})

bttstep2.addEventListener('click', ()=>{
    genprobstp2.play();
    genprobstp3.pause();
    genprobstp1.pause();
})

bttstep3.addEventListener('click', ()=>{
    genprobstp2.pause();
    genprobstp4.pause();
    genprobstp3.play();
})

bttstep4.addEventListener('click',()=>{
    genprobstp3.pause();
    genprobstp42.pause();
    genprobstp4.play();
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
    albtn1.style.display='none';
    albtn2.style.display='none';
    albtn3.style.display='none';
    albtn4.style.display='none';
    bttstep1.style.display='none';
    bttstep2.style.display='none';
    bttstep3.style.display='none';
    bttstep4.style.display='none';
    note.style.display='none';
})

genprobstp1.addEventListener('ended',()=>{
    bttstep2.style.display='inline';
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
    albtn1.style.display='none';
    albtn2.style.display='none';
    albtn3.style.display='none';
    albtn4.style.display='none';
    bttstep1.style.display='none';
    bttstep2.style.display='none';
    bttstep3.style.display='none';
    bttstep4.style.display='none';   
    note.style.display='none';
})

genprobstp2.addEventListener('ended',()=>{
    bttstep1.style.display='inline';
    bttstep3.style.display='inline';
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
    albtn1.style.display='none';
    albtn2.style.display='none';
    albtn3.style.display='none';
    albtn4.style.display='none';
    bttstep1.style.display='none';
    bttstep2.style.display='none';
    bttstep3.style.display='none';
    bttstep4.style.display='none';
    note.style.display='none';
})

genprobstp3.addEventListener('ended',()=>{
    bttstep2.style.display='inline';
    bttstep4.style.display='inline';
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
    al2.style.opacity=0;
    al3.style.opacity=0;
    al4.style.opacity=0;
    al5.style.opacity=0;
    albtn1.style.display='inline';
    albtn2.style.display='none';
    albtn3.style.display='none';
    albtn4.style.display='none';
    bttstep1.style.display='none';
    bttstep2.style.display='none';
    bttstep3.style.display='none';
    bttstep4.style.display='none';
    note.style.display='none';
})

albtn1.addEventListener('click', ()=>{
    albtn1.style.display='none';
    al2.style.opacity=1;
    albtn2.style.display='inline';
})

albtn2.addEventListener('click',()=>{
    albtn2.style.display='none';
    al3.style.opacity=1;
    albtn3.style.display='inline';
})

albtn3.addEventListener('click',()=>{
    albtn3.style.display='none';
    al4.style.opacity=1;
    albtn4.style.display='inline';
})

albtn4.addEventListener('click',()=>{
    albtn4.style.display='none';
    al5.style.opacity=1;
    note.style.display='inline';
})

note.addEventListener('click', ()=>{
    genprobstp4.pause();
    genprobstp42.play();
    notes.style.opacity=1;
})

genprobstp42.addEventListener('ended',()=>{
    bttstep1.style.display='inline';
    bttstep2.style.display='inline';
    bttstep3.style.display='inline';
    bttstep4.style.display='inline';
    next1.style.display = 'inline';
    back1.style.display = 'inline';
    fin = true;
})

next1.addEventListener('click', ()=>{
    cs1.style.display="none";
    cs2.style.display="grid";
})

back1.addEventListener('click', ()=>{
    cs1.style.display='none';
    cs0.style.display='grid';
})





////////     CS2     //////////////////////////////////////////////////////////////////////////////////////////////////////

//jQuery listens for submission of question 1
$("#mul-choice-1").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken,'question':'q1','timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ 
            document.getElementById('prob2-box').style.display='block';
        }
        })
});

$("#mul-choice-2").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken,'question':'q2','timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ 
            cs2.style.display = 'none';
            cs3.style.display = 'grid';

        }
        })
});








////////     CS3     //////////////////////////////////////////////////////////////////////////////////////////////////////

hint3abtn.addEventListener('click', ()=>{
    document.getElementById('hint3a').style.opacity=1;
})

hint3bbtn.addEventListener('click',()=>{
    document.getElementById('hint3b').style.opacity=1;
})

$("#mul-choice-3-a").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken,'question':'q3a','timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ 
            document.getElementById('prob3b-box').style.display='block';
            hint3bbtn.style.display='inline'
        }
        })
});


$("#mul-choice-3-b").submit(function(e){
    e.preventDefault();
    const form = $(this);
    const newDate = new Date();
    const datetime = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} --- ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getMilliseconds()}`
    let url = form.attr("action");
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    $.ajax({
        headers: {'X-CSRFToken': csrftoken,'question':'q3b','timeStamp':datetime},
        type:"POST",
        url: url,
        data: form.serialize(),
        complete: function(){ 
            cs3.style.display='none';
            cs4.style.display='grid'
        }
        })
});








////////     CS4     //////////////////////////////////////////////////////////////////////////////////////////////////////

hint4btn.addEventListener('click',()=>{
    document.getElementById('hint4').style.opacity=1;
})
