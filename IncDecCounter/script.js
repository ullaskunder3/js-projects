let decrementBtn = document.getElementById('button__dec');
let incrementBtn = document.getElementById('button__inc');
let counter = document.getElementById('counter');

let count = 0;

decrementBtn.addEventListener('click',()=>{
    count--;
    counter.innerHTML = count
    counterStyle();
})
incrementBtn.addEventListener('click',()=>{
    count++;
    counter.innerHTML = count
    counterStyle();
})

function counterStyle() {
    if(count < 0){
        counter.classList.add("negative");
    }
    else if( count > 0){
        counter.classList.add("positive");
    }else{
        counter.classList.remove("negative");
        counter.classList.remove("positive");
    }
}