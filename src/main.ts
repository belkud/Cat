import './style.css'
 



const eye = document.querySelector('#eye') as HTMLPictureElement
const button_eye = document.querySelector('#button_eye') as HTMLButtonElement
button_eye.addEventListener('click', ()=> {
  eye.style.display === 'none' ? eye.style.display = 'block' : eye.style.display = 'none';
})

const cat_leg = document.querySelector ('#cat_leg')
const cat_leg2 = document.querySelector ('#cat_leg2')
const button_cat_leg = document.querySelector ('#button_cat_leg')
button_cat_leg?.addEventListener('click', ()=>{
 
 if (cat_leg.style.display=='none'){
    cat_leg.style.display='block'
    cat_leg2.style.display='none'
    button_cat_leg.innerHTML= 'Спасибо, кот '
} else {
    cat_leg.style.display='none'
    cat_leg2.style.display='block'
    button_cat_leg.innerHTML= 'Кот, помаши лапкой '
 }
 // cat_leg.classList.add('anim')
})

  

const cat = document.querySelector('#cat') as HTMLImageElement
const cat_phrase = document.querySelector('#cat_phrase') as HTMLDivElement
const button_phantom = document.querySelector('#button_phantom') as HTMLButtonElement
const button_remove_cat = document.querySelector('#button_remove') as HTMLButtonElement
const cat_die = document.querySelector('#cat_die') as HTMLButtonElement
const cat_phantom = document.querySelector('#cat_phantom') as HTMLButtonElement
const cat_animation = document.querySelector('#cat_animation') as HTMLButtonElement
const rope = document.querySelector('#rope') as HTMLDivElement
const rope1 = document.querySelector('#rope1') as HTMLDivElement
const rope2 = document.querySelector('#rope2') as HTMLDivElement


button_remove_cat.addEventListener('click', ()=> {
  
    setTimeout(() => {
 
    cat_phrase.style.opacity = 1 
    cat_phrase.style.transition = 2.5 +'s'
    }, 1000);
    
    setTimeout(() => {
      cat_option1.style.opacity = 1 
      cat_option1.style.transition = 3 + 's' 
    }, 2000);
    
    setTimeout(() => {
      cat_option2.style.opacity = 1 
      cat_option2.style.transition = 3 + 's' 
    }, 3000);
})


const cat_phrase3 = document.querySelector('cat_phrase3') as HTMLDivElement


//! Вызывание 'духа'
button_phantom.addEventListener ('click', ()=> {
  setTimeout(() => {
    cat_phantom.style.display = 'block'
  }, 500);
  
  setTimeout(() => {
    cat_phantom.style.marginLeft = 200 +'px'
    cat_phantom.style.marginTop = 300 +'px'
    cat_phantom.style.transition = 5 +'s'
    
  }, 1000);

  setTimeout(() => {
    cat_phantom.style.filter = 'brightness(5.3)'
    cat_phantom.style.animation = 2+ 's'
  }, 6000);
  setTimeout(() => {
    cat_phantom.style.opacity = '0'
    cat_phantom.style.animation = 2 + 's'
  }, 8000);

  setTimeout(() => {
    button_phantom.style.opacity = '0'
    button_phantom.style.animation = 1 + 's'
  }, 9000);

  setTimeout(() => {
    button_cat_digger.style.opacity = '0'
    button_cat_digger.style.animation = 1 + 's'
  }, 10000);

  setTimeout(() => {
    button_remove.style.opacity = '0'
    button_remove.style.animation = 1 + 's'
  }, 11000);

  setTimeout(() => {
    button_cat_leg.style.opacity = '0'
    button_cat_leg.style.animation = 1 + 's'
  }, 12000);
  setTimeout(() => {
    button_eye.style.opacity = '0'
    button_eye.style.animation = 1 + 's'
  }, 13000);


  setTimeout(() => {
    tomb_cat.style.opacity = '0'
    tomb_cat.style.animation = 1 + 's'
  }, 14000);

  setTimeout(() => {
    tomb_cat2.style.opacity = '0'
    tomb_cat2.style.animation = 1 + 's'
  }, 15000);

  setTimeout(() => {
    cat_phantom.style.opacity = '1'
    cat_phantom.style.animation = 3 + 's'
  }, 16000);

  
  
 




})




const tomb_cat = document.querySelector('#tomb_cat') as HTMLDivElement
const tomb_cat2 = document.querySelector('#tomb_cat2') as HTMLDivElement
const cat_ghost_to_tomb = document.querySelector('#cat_ghost_to_tomb') as HTMLImageElement

const cat_phrase2 = document.querySelector('#cat_phrase2') as HTMLDivElement
const cat_dialog = document.querySelector('#cat_dialog') as HTMLDivElement
const cat_option1 = document.querySelector('#cat_option1') as HTMLDivElement
const cat_option2 = document.querySelector('#cat_option2') as HTMLDivElement


//! поднять наверх кота
cat_option1.addEventListener ('click', ()=> { 
  setTimeout(() => {
    cat_dialog.style.display = 'none' 
    rope1.style.display = 'block'
    rope2.style.display = 'block'
    rope.style.marginTop = 230 +'px'
    rope.style.transition = 3 + 's'
  }, 500);
  
  setTimeout(() => {
    rope.style.marginTop = 80 +'px'
    rope.style.transition = 1.5 + 's'
    cat_animation.style.marginTop = 200+ 'px'
    cat_animation.style.transition = 1.5 + 's'
  }, 4000);
  
  setTimeout(() => {
    cat_leg.style.marginTop = 400 +'px'
    cat_leg2.style.marginTop = 400 +'px'
    cat.style.display = 'none'
    cat_phantom.style.display = 'block'
    cat_ghost_to_tomb.style.display = 'block'
    cat_ghost_to_tomb.style.position = 'relative'
  }, 6000);
  
  setTimeout(() => {
    cat_phantom.style.marginTop = -550 +'px'
    cat_phantom.style.transition = 12 + 's'
    eye.style.marginTop = -550 +'px'
    eye.style.transition = 0.5 + 's'
    
    cat_ghost_to_tomb.style.opacity = '1'
    cat.style.opacity = '0'
  }, 7000);
  
  setTimeout(() => {
    tomb_cat.style.display = 'block'
  }, 11000);

  setTimeout(() => {
    button_cat_digger.style.opacity = 1
    button_cat_digger.style.transition = 3 +'s'
  }, 11000);
})
 

// !закопать кота

const button_cat_digger = document.querySelector('#button_cat_digger') as HTMLButtonElement
button_cat_digger.addEventListener ('click', ()=> {
  
    setTimeout(() => {
    rope1.style.display = 'none'
    rope2.style.display = 'none'
  }, 2000);
  
  
  setTimeout(() => {
   tomb_cat2.style.opacity = 1
   tomb_cat2.style.animation = 3 +'s'
    
  }, 3000);
  
  setTimeout(() => {
    cat_ghost_to_tomb.style.marginTop = 420 +'px'
    cat_ghost_to_tomb.style.transition = 3 + 's'
  }, 4500);
  setTimeout(() => {
    cat_ghost_to_tomb.style.display = 'none'
  }, 7501);
  
  setTimeout(() => {
   tomb_cat.style.display = 'relative'
   tomb_cat.style.opacity = 1
   tomb_cat.style.animation = 3 +'s'
  }, 8000);

  setTimeout(() => {
    button_phantom.style.opacity = 1
    button_phantom.style.transition = 3 + 's'
  }, 9000);
  
})




//! диалог с котом
cat_option2.addEventListener ('click', ()=> {
  setTimeout(() => {
    cat_phrase.style.opacity = 0 
    cat_phrase.style.transition = 2.5 +'s' 
    cat_option1.style.opacity = 0 
    cat_option2.style.opacity = 0 
  }, 500);
  setTimeout(() => {
    cat_phrase2.style.opacity = 1
    cat_phrase2.style.transition = 3 + 's' 
  }, 3000);
  setTimeout(() => {
    cat_phrase2.style.opacity = 0
    cat_phrase2.style.transition = 2 + 's' 
  }, 5000);
})






 
//! Надпись "Добро пожаловать"
const cat_phrase4 = document.querySelector('#cat_phrase4')as HTMLDivElement

// if (!localStorage.hello) {
  setTimeout(() => {
    cat_phrase4.style.opacity ='1'
    cat_phrase4.style.transition = 3 +'s'
    cat_leg.style.display = 'block'
    cat_leg2.style.display = 'none'
  }, 1000);
  setTimeout(() => {
    cat_phrase4.style.opacity = '0'
    cat_phrase4.style.transition = 3 +'s'
    cat_leg.style.display = 'none'
    cat_leg2.style.display = 'block'
  }, 3500);
  // localStorage.hello = true
// }

setInterval(() => {
  setTimeout(() => {
    cat_leg.style.display = 'block'
    cat_leg2.style.display = 'none'
  }, 1000);
  setTimeout(() => {
    cat_leg.style.display = 'none'
    cat_leg2.style.display = 'block'
  }, 4000);
}, 10000);


  

