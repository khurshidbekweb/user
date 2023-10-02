const elForm = document.getElementById('form')
const elInp = document.getElementById('form__input')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')

// Get result and updeate user
const updeaitUI = (data)=>{
        console.log(data);
        user.innerHTML = "";
    data.forEach((item)=>{        
        const {name, picture, dob, gender, location} = item;
        user.innerHTML += `
        <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>- ${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
        `
    })
}

clearBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    user.innerHTML = ""
    clearBtn.classList.add("hidden");
});

elForm.addEventListener('keyup', (e)=>{    
    e.preventDefault();
    let valueInp = elInp.value.toLowerCase();
    console.log(valueInp);
    const name = document.querySelectorAll('.user__name');
    console.log(name);
    name.forEach((item)=>{
        if(item.lastElementChild.textContent.toLowerCase().includes(valueInp)){
            console.log(item.lastElementChild.textContent);
            item.parentElement.classList.remove('hidden');
        }else{
            item.parentElement.classList.add('hidden');
        }
    })
})

document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'user__delete--btn'){
        e.target.parentElement.remove();
    }
    if(!user.children.length){
        clearBtn.classList.add('hidden')
    }
})