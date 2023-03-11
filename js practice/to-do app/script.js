const input = document.getElementById('input');
const btn = document.getElementById('btn');
const notCompleted = document.querySelector('.notCompleted');
const Completed = document.querySelector('.Completed');

function Add(){
    if(!input.value){
        alert("please enter the task");
    }
    const newli = document.createElement('li');
    const checkbtn = document.createElement('button');
    const dltbtn = document.createElement('button');
    
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    dltbtn.innerHTML = '<i class="fa fa-trash"></i>';
    newli.textContent = input.value;
    notCompleted.appendChild(newli);
    newli.appendChild(checkbtn);
    newli.appendChild(dltbtn);
    input.value = "";


    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkbtn.style.display = 'none';
    })

    dltbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
      
    })

}
