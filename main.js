// lets start
// talqin for black vision
let wider = document.querySelector('.maker')
let forId = document.querySelector('.oneId')
let inActive = document.querySelector('.inActive')
let left = document.querySelector('.left')
let active2 = document.querySelector('.active2')
let marTop = document.querySelector('.marTop')
let spans = document.querySelectorAll('.span')

wider.addEventListener('click', ()=>{
    if(wider.classList.contains('rightArrow')){
        wider.classList.remove('rightArrow')
        inActive.classList.remove('Active')
        left.style.width = '120px'
        inActive.style.display = 'none'
        active2.style.display = 'none'
        marTop.style.margin = '150px 0px 0px 0px'
        document.querySelector('.active3').style.display = 'none'
        document.querySelector('.oneId').style.margin = '155px 0px 80px 0px'
        spans.forEach((elm) =>{
            elm.classList.remove('spans')
        })
        document.querySelector('.single').style.display = 'none'
        document.querySelector('.box').style.display = 'none'
        document.querySelector('.rights').style.display = 'none'




        // need to add 
    }else{
    wider.classList.add('rightArrow')
    inActive.classList.add('Active')
    left.style.width = '450px'
    inActive.style.display = 'flex'
    active2.style.display = 'flex'
    marTop.style.margin = '0px 0px 0px 0px'
    document.querySelector('.active3').style.display = 'block'
    document.querySelector('.oneId').style.margin = '0px 0px 80px 0px'
    spans.forEach((elm) =>{
        elm.classList.add('spans')
    })
    document.querySelector('.single').style.display = 'flex'
    document.querySelector('.box').style.display = 'flex'
    document.querySelector('.rights').style.display = 'flex'


    // need to add
    }


})


let ex = document.querySelector('.ex')
let next = document.querySelector('.savol')

next.addEventListener('click', ()=>{
    document.querySelector('.angle').style.display = 'flex'
})
ex.addEventListener('click', ()=>{
    document.querySelector('.angle').style.display = 'none'
})

let close = document.querySelector('.close')

close.addEventListener('click', ()=>{
    document.querySelector('.first').style.display = 'none'
})

let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let buttons = [button1, button2, button3, button4]
let show1 = document.querySelector('.show1');
let show2 = document.querySelector('.show2');
let show3 = document.querySelector('.show3');
let show4 = document.querySelector('.show4');
let shows =[show1, show2, show3, show4]

button1.addEventListener('click', ()=>{
  
        buttons.forEach((elm)=>{
            elm.classList.remove('activeButton')
        })
        button1.classList.add('activeButton')
        shows.forEach((elm)=>{
            elm.style.display = 'none'
        })
        show1.style.display = 'block'
})

button2.addEventListener('click', ()=>{
 
        buttons.forEach((elm)=>{
            elm.classList.remove('activeButton')
        })
        button2.classList.add('activeButton')
        shows.forEach((elm)=>{
            elm.style.display = 'none'
        })
        show2.style.display = 'block'
    
})

button3.addEventListener('click', ()=>{
  
        buttons.forEach((elm)=>{
            elm.classList.remove('activeButton')
        })
        button3.classList.add('activeButton')
        shows.forEach((elm)=>{
            elm.style.display = 'none'
        })
        show3.style.display = 'block'
})

button4.addEventListener('click', ()=>{

        buttons.forEach((elm)=>{
            elm.classList.remove('activeButton')
        })
        
        button4.classList.remove('blackButton')
        button4.classList.add('activeButton')
        shows.forEach((elm)=>{
            elm.style.display = 'none'
        })
        show4.style.display = 'block'
})

let black = document.querySelector('.talqin')
let btns = document.querySelectorAll('.signButton')
let links = document.querySelectorAll('.birxil')

black.addEventListener('click', ()=>{
    if(left.classList.contains('black')){
        black.textContent = 'Version for the visually impaired'
        left.classList.remove('black')
        document.querySelector('.myId').classList.remove('idBlack')
        document.querySelector('.forAnim').classList.remove('blackAnim')
        document.querySelector('.question').classList.remove('blackQuestion')
        btns.forEach((elm)=>{
            elm.classList.remove('blackb')
        })
        document.querySelector('.sms').classList.remove('smn');
        document.querySelector('.refresh').classList.remove('refre')
        buttons.forEach((elm)=>{
            elm.classList.remove('blackb')
        })
        links.forEach((elm)=>{
            elm.style.color = '#4825C2'
        })
        document.querySelector('.up').classList.remove('lightb');
        document.querySelector('.up').classList.remove('light');
        document.querySelector('.bir').style.color = '#4825C2'

        // gonna continue
    }else{
        left.classList.add('black')
        black.textContent = 'Regular version'
        document.querySelector('.myId').classList.add('idBlack')
        document.querySelector('.forAnim').classList.add('blackAnim')
        document.querySelector('.question').classList.add('blackQuestion')
        btns.forEach((elm)=>{
            elm.classList.add('blackb')
        })
        document.querySelector('.sms').classList.add('smn');
        document.querySelector('.refresh').classList.add('refre')
        buttons.forEach((elm)=>{
            elm.classList.add('blackb')
        })
        links.forEach((elm)=>{
            elm.style.color = '#222222'
        })
        document.querySelector('.up').classList.remove('lightb');
            document.querySelector('.up').classList.remove('light');
            document.querySelector('.bir').style.color = '#222222'


        // gonna continue
    }


})

function show(checkbox){
    if(checkbox.checked){
        if(left.classList.contains('black')){

       document.querySelector('.up').classList.add('lightb');
        }else{
            document.querySelector('.up').classList.add('light');
        }

    }else{
        if(left.classList.contains('black')){

            document.querySelector('.up').classList.remove('lightb');
            document.querySelector('.up').classList.remove('light');

             }else{
                 document.querySelector('.up').classList.remove('light');
                 document.querySelector('.up').classList.remove('lightb');
             }
     
    }
}

