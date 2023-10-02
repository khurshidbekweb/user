// api
const API = 'https://randomuser.me/api/?results=12'

// for leader
const overlay = document.getElementById('overlay')

// Toggelse mode
function toggleMods(results){
    let indentfy = results;
    if(indentfy){
        overlay.classList.remove('hidden');
    }else{
        overlay.classList.add('hidden');
    }
}

const getDate = (recource)=>{
    return new Promise((resolve, reject)=>{
        const request =new XMLHttpRequest()
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState < 4){                
                toggleMods(true);
            }else if(request.readyState ===4 && request.status===200){
                let data = JSON.parse(request.responseText);
                resolve(data.results);
                toggleMods(false)
            }else if(request.readyState===4){
                reject("Errors !!!");
                toggleMods(false)
            }
        })
        request.open('GET', recource);
        request.send()        
    })
}
const reloud = ()=>{
    getDate(API).then((data)=>{
        updeaitUI(data);
    })
}
document.addEventListener('DOMContentLoaded', reloud)