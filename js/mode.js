const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

let modLocal = localStorage.getItem('mode');

if(modLocal){
    body.classList.add("dark-mode");
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
}
function toggleMod(){
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
    body.classList.toggle("dark-mode"); 
}
darkBtn.addEventListener("click", ()=>{
    toggleMod()
    localStorage.setItem('mode', 'dark-mode');
})
lightBtn.addEventListener('click', ()=>{
    toggleMod();
    localStorage.setItem("mode", '');
})