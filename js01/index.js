






/* 
for (let k = 0; k < 5; k++) {
  // a
  const header = document.createElement("header");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const img = document.createElement("img");
  const nav = document.createElement("nav");
  const a_courses = document.createElement("a");
  const a_study = document.createElement("a");
  for (let i = 0; i < 4; i++) { const rnd = document.createElement("div"); rnd.classList.add("round");
  right.append(rnd);
  }

  // b // class
left.classList.add("left");
right.classList.add("right");
img.classList.add("logo");
// attributes
img.src = "./Без названия 1.svg";
a_courses.href = "#";
a_study.href = "#";
// texts
a_courses.innerText = "My Courses + ;"
a_study.innerText = "My Study";
// c
header.append(left, right);
left.append(img, nav);
nav.append(a_courses, a_study);

document.body.append(header);

}

 */


/* 
let form = document.forms.signup
let inputs = form.querySelectorAll('input')

form.onsubmit = (event) => {
    event.preventDefault()
    let error = false

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if ( isRequest === true && inp.value.length === 0) {
            error = true

            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    });

    if (error === true) {
        alert('Error fill all fields')
        return
    }

    submit(event.target)
}

function submit(form) {
    let fm = new FormData(form)

    let user = {}

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}




 */









/* const slides = document.querySelectorAll('.slide')
const prev_next_bts



const slides document.querySelectorAll('.slide')
const prev_next_btns = document.querySelectorAll(' [data-group]')
const pagination_btns = document.querySelectorAll(' [data-idx]')
let slideIndex = 0
showSlides (slideIndex)
function show Slides (n) {
if(n >= slides.length) {
slideIndex = 0
}
if(n < 0) {
slideIndex = slides.length 1
}
slides.forEach(slide => slide.classList.add ('hide'))
slides [slideIndex].classList.remove('hide')
I
}
prev_next_btns.forEach(btn => {
btn.onclick = () => {
const act = btn.getAttribute('data-group')




 */


/* 
const im1g = document.querySelector('box')

    const images = {
      1: "./img/image 2.png",
      2: "./img/image 8.png",
      3: "./img/image 9.png",
      
  }


  
  box.forEach(boxs => {
    boxs.onclick =() => {
      let  color = boxs.innerText
      boxs.setAttribute('src' , images(color))
    }
    
  });
 *//* 
let open_buttons = document.querySselectorAll([data-modal])
let close_buttons = document.querySelectorAll([data-close])
let modal = document.querySelector(modal)

function open_close_modal(arr, open ) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"](show, fade)
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

let btns = document.querySelectorAll('#btns')
let first_modal = document.querySelector('.modal')
let close_modal = document.querySelector('.modal__close')
let body = document.querySelector("body")
btns.forEach(btn => {
    btn.onclick = () => {
        first_modal.style.display = 'flex'
        body.style.overflow = "hidden"
    }
})
    1``
close_modal.onclick = () => {

    first_modal.style.display = 'none'
    body.style.overflow = "scroll"

} */





/* let btn_on = document.querySelector('')
let btn_off = document.querySelector("#iks")
let box = document.querySelector(".box")

btn_on.onclick = () => {
box.style.display = "flex"

}
btn_off.onclick = () => {
    box.style.display = "none"
}
 */
/* let dia = document.querySelector(`#chorniy`)
let dialog = document.querySelector(`dialog`)
let closes = document.querySelector(`.close button`)


dia.onclick = () => {
dialog.showModal()
}
closes.onclick = () => {
    dialog.close()
}

 */


/* 
let btn_on = document.querySelector('#chorni')
let btn_off = document.querySelector('#iks')
let box = document.querySelector(".box")

btn_on.onclick = () => {
box.style.display = "flex"

}
btn_off.onclick = () => {
    box.style.display = "none"
}
 *//* 
let currentNumber = 0;


function increase() {
    currentNumber++;
    document.getElementById('num').innerText = currentNumber;
}


function increas() {
  currentNumber--;
  document.getElementById('num').innerText = currentNumber;
}

let  currentNumbe = 19;


function increas() {
  currentNumbe++;
  document.getElementById('num2').innerText = currentNumber;
}


function increa() {
currentNumbe--;
document.getElementById('num2').innerText = currentNumber;
}


 */
/* 

const im1g = document.querySelector('box_6')

    const images = {
      1: "./img/image 2.png",
      2: "./img/image 8.png",
      3: "./img/image 9.png",
      
  }


  
  box_10s.forEach(box_10 => {
    box_10.onclick =() => {
      let  color = box_10.innerText
      box_10.setAttribute('src' , images(color))
    }
    
  }); 
 *//* 
  
let img = document.querySelector(`img`)


let button = document.querySelector(`#myButton`)
let dblbutton = document.querySelector(`#myButton2`)
let dblbutton3 = document.querySelector(`#myButton2`)

button.onclick = () => {
    img.src = `./img/image 2.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `./img/image 8.png`
    }
 */


 
/* let box = document.qureSelector(`.box`) */
//let body = document.body
/* let boxes = document.qureSelectorAll(`#imposter`)
 */
 /* box.onclick = () => {
    //console.log(`click`); */
 //}
// box.ondblclick = () => {
    /* console.log(`doble click`);
// }
 //box.onmouseenter = () => {
    console.log(`entered`);
 //}
//box.onmouseleave = () =>{
   //}
box.onmousemove = () =>{
    console.log(`movig...`);
}
body.onscroll = () =>{
    console.log(`scroll...`);
}

/* console.log(boxes); */

/* let on = document.querySelector(`one`)
let off = document.querySelector(`two`)
 */    


/* button.onclick = () => {

    if(button.classList.contains('blue')) 
    { button.classList.remove('blue')
    } else {
    button.classList.add('blue')
    }
}
 */



/* 
let numContainer = document.getElementById("num");
let value = 0;

let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
let btnRam = document.querySelector(".random")

btnInc.addEventListener("click", () => {
  value++ 
  numContainer.textContent = value;
});

btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});

btnReset.addEventListener("click", () => { 
  value = 0;
  numContainer.textContent = value;
});

btnRam.addEventListener(`click` , () => {
    value = Math.random()
    numContainer.textContent = value
})
 */






/* 
let inp = document.querySelector(`input`)
let btn = document.querySelector(`button`)




btn.onclick= () => {
  if( inp.getAttribute(`type`) === "text"){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = "🙈" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= "🙊"
  }
}



 */


/* 
let btns = document.querySelectorAll('button')

btns.forEach((btn) => {
  btn.onmouseover = () =>{
    console.log( '', btn.innerText);
    document.body.style.background = btn.innerText
  }
});


 */     

/* 
btn.onclick= () => {
  if( inp.getAttribute(`type`) === ){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = ">" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= ">"
  }
}

*/
/* 
let img = document.querySelector(`img`)


let button = document.querySelector(`#a`)
let dblbutton = document.querySelector(`#b`)

button.onclick = () => {
    img.src = `img/pk.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/pk2.png`
    }

 */

/* 
const img = document.querySelector('img')

    const images = {
      titan: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
      blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
      white: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845706590",
      black: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845694698",
  }


  
  btns.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  }); */
  
  
 /* 
  button.forEach(btn => {
    btn.onclick =() => {
      let  color = btn.innerText
      img.setAttribute('src' , images(color))
    }
    
  });
 */
/* 
  let button= document.getElementsByClassName("accordion");
let i

for (i = 0; i < acc.length; i++) {
  button[i].addEventListener("click", function() {

    this.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {

      panel.style.display = "none";
    } else {
      
      panel.style.display = "block";
    }
  });
}
 */

/* 
const items =  document.querySelectorAll('.item')
   
items.forEach(item => {
  item.onclick = () =>{
   item.classList.toggle('active')
  }
  
});

 */




/* 
let on = document.querySelector(`#a`)
let off = document.querySelector(`#b`)



     button.onclick = () => {
    
        if(button.classList.contains('blue')) 
        { button.classList.remove('blue')
      } else {
        button.classList.add('blue')
      }
    }

 */

/* 
let button3 = document.querySelector('.text')


let button2 = document.querySelector('#a')
let blue = document.querySelector('#b')

button2.onclick = () =>{
     text.h2_1 = "White"
     
     
    }
    blue.onclick = () =>{
     text.h2_1 = "Space Gray"
     
    } */
    /* 
    function btn_1() {
      let element = document.getElementById(".h2_1");
      let currentText = element.innerHTML;

      // Пример: если текущий текст "Привет, мир!", то изменить на "Новый текст"
      let newText = (currentText === "White") ? "Space Gray" : "White";

      element.innerHTML = newText;
  }
  
  */
 
 /* 
 function btn() {
   let element = document.querySelector("btn_1");
   let element2 = document.querySelector("btn_2");
   let currentColor = element.style.background;
   let currentColor2 = element2.style.background;
   
   let newColor2 = (currentColor2 === "#797979") ? "blue" : "#797979";
   let newColor = (currentColor === "#797979") ? "blue" : "#797979";
   
   element.style.backgroundColor = newColor;
   element.style.backgroundColor = newColor2;
  } */
/* 
document.getElementById('a').addEventListener('click', function() {
  
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
  });
  
  document.getElementById('b').addEventListener('click', function() {
    
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
 */  
/* 

let img = document.querySelector(`img`)


let button = document.querySelector(`#myButton`)
let dblbutton = document.querySelector(`#myButton2`)

button.onclick = () => {
    img.src = `img/pk3.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/pk2.png`
    }


function changeColor() {
    document.getElementById('myButton').style.backgroundColor = "#3498db";
  }

  function changeColor() {
    // установка нового текста заголовка
    let heading = document.getElementById('h2_1');
    heading.innerHTML = "Space Grey";
  }

  
  function changeColor() {
    // установка нового текста заголовка
    let heading = document.getElementById('h3_1');
    heading.innerHTML = "Space Grey";
  }

 */
/* 

let open_btn = document.querySelector('button')
let close_btn = document.querySelector('[data-close]')
let dialog = document.querySelector('dialog')

open_btn.onclick = () =>{
 dialog.showPopover()
}

close_btn.onclick = () =>{
  dialog.close()
}
 */

