let counter = 0;

function count() {
  let x = counter +=1;
    document.querySelector('h1').innerHTML = counter;
    if(counter%10 === 0){
        alert(`Counter is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = count;
})  