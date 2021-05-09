let morebtn = document.querySelector('.morebtn');
let redclick = document.querySelector('.redClick');
let title = document.querySelector('.infoinfo');
let redcolor = document.querySelector('red')

morebtn.addEventListener('click', ()=> {
  morebtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})

redclick.addEventListener('click', ()=> {
  redclick.classList.toggle('red');
})
