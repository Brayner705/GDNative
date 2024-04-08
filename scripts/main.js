if(!localStorage.getItem('primeraVisita')){
    alert('Bienvenido a primera vez a nuestra pagina');

    localStorage.setItem('primeraVisita',true);
    localStorage.setItem('saldo','0');
    localStorage.setItem('pendiente','0');
    localStorage.setItem('ahorro','0');
    localStorage.setItem('deuda','0');
}



const btns = document.querySelectorAll('#btnVer')
const modalS = document.getElementById('modal');
const exit = document.getElementById('exit');
const ventanaM = document.querySelector('.ventana');3

const ventanaS = document.getElementById('saldo')
const titleModal = document.getElementById('titleModal');
const inputOne = document.getElementById('agregar');
const btnSaldo = document.createElement('BUTTON');
const btnPendiente = document.createElement('BUTTON');
const btnAhorro = document.createElement('BUTTON');
const btnDeuda = document.createElement('BUTTON');


btns.forEach(function(btn){
    btn.addEventListener('click', ()=>{
        modalS.classList.add('modal');
        modalS.style.display = 'flex';
        ventanaS.style.display = 'flex'
        ventanaM.style.height = '50vh';

        
        let opcion = btn.getAttribute('value');

        switch(opcion){
            case 'saldo':
                btnSaldo.setAttribute('id','agregarSaldo');
                btnSaldo.textContent = 'Agregar saldo';
                ventanaS.appendChild(btnSaldo);
                break;
            case 'pendiente':
                btnPendiente.setAttribute('id','agregarPendiente');
                btnPendiente.textContent = 'Agregar Pendiente';
                ventanaS.appendChild(btnPendiente);
                break;
            case 'ahorro':
                btnAhorro.setAttribute('id','agregarAhorro');
                btnAhorro.textContent = 'Agregar Ahorro';
                ventanaS.appendChild(btnAhorro);
                break;
            case 'deuda':
                btnDeuda.setAttribute('id','agregraDeuda');
                btnDeuda.textContent = 'Agregar Deuda';
                ventanaS.appendChild(btnDeuda);
                break;
            default:
                console.log('no existe la opcion');
        }

        inputOne.setAttribute('placeholder',`Ingresa ${opcion}`)
        titleModal.textContent = opcion;



    })
})



exit.addEventListener('click', ()=>{
    modalS.classList.remove('modal');
    ventanaS.style.display = 'none';
    ventanaM.style.height = '0';

    btns.forEach(btn =>{
        let opcion = btn.getAttribute('value')

        switch(opcion){
            case 'saldo':
                btnSaldo.remove();
                break;
            case 'pendiente':
                btnPendiente.remove();

                break;
            case 'ahorro':
                btnAhorro.remove();
                break;
            case 'deuda':
                btnDeuda.remove();
                break;
        }
    })


    

})

/**             Guardar datos de cada operacion       */


/**         SALDO            */

const cantidadDinero = document.getElementById('agregar');
const asunto = document.getElementById('asunto');

const vistaDatosSaldo = document.getElementById('vistaSaldo');
const vistaDatosPendiente = document.getElementById('vistaPendiente');
const vistaDatosAhorro = document.getElementById('vistaAhorro');
const vistaDatosDeuda = document.getElementById('vistaDeuda');

window.addEventListener('load', ()=>{
    vistaDatosSaldo.textContent = localStorage.getItem('saldo');
    vistaDatosPendiente.textContent = localStorage.getItem('pendiente');
    vistaDatosAhorro.textContent = localStorage.getItem('ahorro');
    vistaDatosDeuda.textContent = localStorage.getItem('deuda');
    
})

// Borrar datos

document.getElementById('limpiar').addEventListener('click', ()=>{
    alert('va a ser reiniciado en breve');
    setTimeout(()=>{
        localStorage.clear();
        location.reload();
    },3000)
})

const guardarDatos = (opcion) =>{

    let saldo = cantidadDinero.value;
    let asuntos = asunto.value;

    switch(opcion){
        case 0:

            let saldoActual = parseFloat(localStorage.getItem('saldo')) + parseFloat(saldo);

            localStorage.setItem('saldo',saldoActual);
            localStorage.setItem('asuntoSaldo',asuntos);

            vistaDatosSaldo.textContent = localStorage.getItem('saldo');

            break;
        case 1:
            let saldoActualP = parseFloat(localStorage.getItem('pendiente')) + parseFloat(saldo);

            localStorage.setItem('pendiente',saldoActualP);
            localStorage.setItem('asuntoPendiente',asuntos);

            vistaDatosPendiente.textContent = localStorage.getItem('pendiente');
            break;
        case 2:
            let saldoActualA = parseFloat(localStorage.getItem('ahorro')) + parseFloat(saldo);

            localStorage.setItem('ahorro',saldoActualA);
            localStorage.setItem('asuntoAhorro',asuntos);

            vistaDatosAhorro.textContent = localStorage.getItem('ahorro');
            break;
        case 3:
            let saldoActualD = parseFloat(localStorage.getItem('deuda')) + parseFloat(saldo);

            localStorage.setItem('deuda',saldoActualD);
            localStorage.setItem('asuntoDeuda',asuntos);

            vistaDatosDeuda.textContent = localStorage.getItem('deuda');
            break;
    }



    cantidadDinero.value = '';
    asunto.value = '';
}

btnSaldo.addEventListener('click',()=>{
    guardarDatos(0);
})

/**         FIN SALDO        */

btnPendiente.addEventListener('click',()=>{
    guardarDatos(1);

})

btnAhorro.addEventListener('click',()=>{
    guardarDatos(2);


})

btnDeuda.addEventListener('click',()=>{
    guardarDatos(3);


})




/**                             FIN                     */

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
