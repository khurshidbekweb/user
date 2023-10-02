// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

// Toggelse mode
function toggleLoud(results){
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
                toggleLoud(true);
            }else if(request.readyState ===4 && request.status===200){
                let data = JSON.parse(request.responseText);
                resolve(data.results);
                toggleLoud(false)
            }else if(request.readyState===4){
                reject("Errors !!!");
                toggleLoud(false)
            }
        })
        request.open('GET', recource);
        request.send()        
    })
}
const reloud = ()=>{
    getDate(API).then((data)=>{
        updeaitUI(data);
    }).catch((err)=>{
        updeaitUI(err);
    })
}
document.addEventListener('DOMContentLoaded', reloud)