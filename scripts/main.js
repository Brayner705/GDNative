const btns = document.querySelectorAll('#btnVer')
const modalS = document.getElementById('modal');
const exit = document.getElementById('exit');
const ventanaM = document.querySelector('.ventana');


const ventanaS = document.getElementById('saldo')
const titleModal = document.getElementById('titleModal');
const inputOne = document.getElementById('agregar');

const agregarMonto = document.getElementById('agregarSaldo');


btns.forEach(function(btn){
    btn.addEventListener('click', ()=>{
        modalS.classList.add('modal');
        ventanaS.style.display = 'flex'
        
        let opcion = btn.getAttribute('value');
        
        inputOne.setAttribute('placeholder',`Ingresa ${opcion}`)
        titleModal.textContent = opcion;

    })
})

exit.addEventListener('click', ()=>{
    modalS.classList.remove('modal');
    ventanaS.style.display = 'none';
})

agregarMonto.addEventListener('click',()=>{
    modalS.classList.remove('modal');
    ventanaS.style.display = 'none';

    

})