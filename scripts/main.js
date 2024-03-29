const btns = document.querySelectorAll('#btnVer')
const modalS = document.getElementById('modal');
const exit = document.getElementById('exit');
const ventanaM = document.querySelector('.ventana');3

const ventanaS = document.getElementById('saldo')
const titleModal = document.getElementById('titleModal');
const inputOne = document.getElementById('agregar');

const agregarMonto = document.getElementById('agregarSaldo');


btns.forEach(function(btn){
    btn.addEventListener('click', ()=>{
        modalS.classList.add('modal');
        ventanaS.style.display = 'flex'
        ventanaM.style.height = '50vh';

        let opcion = btn.getAttribute('value');
        
        inputOne.setAttribute('placeholder',`Ingresa ${opcion}`)
        titleModal.textContent = opcion;
        

    })
})


exit.addEventListener('click', ()=>{
    modalS.classList.remove('modal');
    ventanaS.style.display = 'none';
    ventanaM.style.height = '0';


})

agregarMonto.addEventListener('click',()=>{
    modalS.classList.remove('modal');
    ventanaS.style.display = 'none';
})

/**             Bars                     */


const ventanaLateral = document.getElementById('ventanaL');
const btnVentanaLateral = document.getElementById('btnL');
const fondoVentana = document.getElementById('fondoVentana');

btnVentanaLateral.addEventListener('click', ()=>{
    ventanaLateral.style.transform = 'translate(0)';
    fondoVentana.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

fondoVentana.addEventListener('click', ()=>{
    ventanaLateral.style.transform = 'translate(-100%)';
    fondoVentana.style.display = 'none';
    document.body.style.overflow = '';

})
