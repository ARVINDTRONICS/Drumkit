
document.addEventListener('keydown', (e) => {
console.log(e.keyCode);
const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
if(!audio) return;
audio.currentTime=0;
audio.play();
key.classList.add('pressed');
setTimeout(()=>{

   key.classList.remove('pressed') 
},500);

});



