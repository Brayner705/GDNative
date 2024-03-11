const arrowDown = document.getElementById('down');
const add = document.getElementById('addE');

console.log(add)

let click = false

arrowDown.addEventListener('click',()=>{
    if(!click){
        arrowDown.classList.replace('fa-angle-right','fa-angle-down');
        add.style.transition = 'all .3s';
        add.style.position = 'relative';
        add.style.top = '0';
        click = true;
    }else{
        arrowDown.classList.replace('fa-angle-down','fa-angle-right');
        add.style.transition = 'all 0s';
        add.style.position = 'absolute';
        add.style.top = '-100px';
        click = false;
    }
})
