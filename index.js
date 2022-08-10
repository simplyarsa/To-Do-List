const inputel=document.getElementById("input");

let list=JSON.parse(localStorage.getItem("list"));
console.log(list)

if (list){
list.forEach((task)=>{
    createitem(task);
})
}

inputel.addEventListener("keypress", function(e){
    if (inputel.value!=''){
    if(e.key==="Enter"){
        createitem();
    }
    }
})


function createitem(task){
    let newtask=inputel.value
    const ulel=document.querySelector(".item")
    const liel=document.createElement("li");
    if(task){
        newtask=task.name
    }
    if (task && task.checked){
        liel.classList.add("checked");
    }
    // liel.innerText=inputel.value;
    liel.innerText=newtask;
    ulel.appendChild(liel);
    const checkbtn=document.createElement("span");
    inputel.value=""

    checkbtn.innerHTML=`<i class="fa-solid fa-check"></i>`
    const trashbtn=document.createElement("span");
    trashbtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
    liel.appendChild(checkbtn);
    liel.appendChild(trashbtn);

    checkbtn.addEventListener("click",()=>{
        liel.classList.toggle("checked");
        updatelocalstorage();
    })
    trashbtn.addEventListener("click", ()=>{
        liel.remove();
        updatelocalstorage();
    })
    updatelocalstorage();
}

function updatelocalstorage(){
    const liels=document.querySelectorAll("li");
    let list=[];
    liels.forEach(liel=>{
        list.push({
            name: liel.innerText,
            checked:liel.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list));
}


