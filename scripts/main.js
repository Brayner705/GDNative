

if(!localStorage.getItem('primeraVisita')){
    alert('Bienvenido a primera vez a nuestra pagina');

    localStorage.setItem('primeraVisita',true);
    localStorage.setItem('saldo','0');
    localStorage.setItem('pendiente','0');
    localStorage.setItem('ahorro','0');
    localStorage.setItem('deuda','0');
}

const insertarDatos = document.getElementById('contenedorHistorial');

const crearBloque = (asunto,monto)=>{
    
    let fecha = new Date();
    const div = document.createElement('DIV');
    div.classList.add('cajaHistorial');
    div.classList.add('historialM');

    const h5Sueldo = document.createElement('H5');
    h5Sueldo.textContent = asunto;
    

    const h5Monto = document.createElement('H5');
    h5Monto.textContent = monto;


    const h5Fecha = document.createElement('H5');
    h5Fecha.textContent = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;

    div.appendChild(h5Sueldo);
    div.appendChild(h5Monto);
    div.appendChild(h5Fecha);

    insertarDatos.appendChild(div);
    
}

const insertarDatosDeuda = document.getElementById('contenedorDeuda');

const crearBloqueDeuda = (nombre,monto) =>{

    let fecha = new Date();
    const div = document.createElement('DIV');
    div.classList.add('datosDeuda');

    const divBotones = document.createElement('DIV');

    
    const nombreDeuda = document.createElement('H5');
    nombreDeuda.textContent = nombre;
    
    const montoDeuda = document.createElement('H5');
    montoDeuda.textContent = monto;
    
    const fechaDeuda = document.createElement('H5');
    fechaDeuda.textContent = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
    
    const boton1 = document.createElement('BUTTON');

    boton1.classList.add('confirm');
    
    const iconoLike = document.createElement('I');
    iconoLike.classList.add('fa');
    iconoLike.classList.add('fa-check');
    
    boton1.appendChild(iconoLike);
    
    divBotones.appendChild(boton1);
    div.appendChild(nombreDeuda);
    div.appendChild(montoDeuda);
    div.appendChild(fechaDeuda);
    div.appendChild(divBotones);

    insertarDatosDeuda.appendChild(div);

        boton1.addEventListener('click',()=>{

            // BORRAR EL REGISTRO DE DEUDA DE LA BASE DE DATOS


            div.remove();

        })

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

const salir = () => {
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
}

exit.addEventListener('click', ()=>{
    salir();

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
    
    try {
        let comentariosHistorial = JSON.parse(localStorage.getItem('comentariosSaldo'));
        let saldoHistorial = JSON.parse(localStorage.getItem('saldoGuardado'));

        let asuntoDeuda = JSON.parse(localStorage.getItem('asuntoDeuda'));
        let saldoDeuda = JSON.parse(localStorage.getItem('saldoDGuardados'))

        for(let i = 0;i < comentariosHistorial.length;i++){
            crearBloque(comentariosHistorial[i],saldoHistorial[i]);
            crearBloqueDeuda(asuntoDeuda[i],saldoDeuda[i]);
        }
    } catch (error) {
        console.error('No existe historial en la base de datos')
    }
    
})

// Borrar datos

document.getElementById('limpiar').addEventListener('click', ()=>{
    alert('va a ser reiniciado en breve');
    setTimeout(()=>{
        localStorage.clear();
        location.reload();
    },3000)
})


let asuntosSaldo = [];
let saldoGuardar = [];
let asuntosPendiente = [];
let asuntosAhorro = [];
let asuntosDeuda = [];
let saldoDeuda = [];

const guardarDatos = (opcion,clickeado) =>{

    let saldo = cantidadDinero.value;

    switch(opcion){
        case 0:

            let saldoActual = parseFloat(localStorage.getItem('saldo')) + parseFloat(saldo);

            saldoGuardar.push(saldo);

            let saldoGuardado = JSON.stringify(saldoGuardar);
            

            asuntosSaldo.push(asunto.value);
            let asuntosGuardados = JSON.stringify(asuntosSaldo);

            localStorage.setItem('saldo',saldoActual);
            localStorage.setItem('saldoGuardado',saldoGuardado);
            localStorage.setItem('comentariosSaldo',asuntosGuardados);

            vistaDatosSaldo.textContent = localStorage.getItem('saldo');

            for(let i=clickeado;i< asuntosSaldo.length;i++){
               crearBloque(asuntosSaldo[i],saldo);
               break;
            }

            break;
        case 1:
            let saldoActualP = parseFloat(localStorage.getItem('pendiente')) + parseFloat(saldo);

            localStorage.setItem('pendiente',saldoActualP);
            localStorage.setItem('asuntoPendiente',asuntos);

            vistaDatosPendiente.textContent = localStorage.getItem('pendiente');
            crearBloque(asuntos,saldo);

            break;
        case 2:
            let saldoActualA = parseFloat(localStorage.getItem('ahorro')) + parseFloat(saldo);

            localStorage.setItem('ahorro',saldoActualA);
            localStorage.setItem('asuntoAhorro',asuntos);

            vistaDatosAhorro.textContent = localStorage.getItem('ahorro');
            crearBloque(asuntos,saldo);

            break;
        case 3:
            let saldoActualD = parseFloat(localStorage.getItem('deuda')) + parseFloat(saldo);

            saldoDeuda.push(saldo);

            let saldoDGuardado = JSON.stringify(saldoDeuda);
            

            asuntosDeuda.push(asunto.value);
            let asuntoDsGuardados = JSON.stringify(asuntosDeuda);

            localStorage.setItem('deuda',saldoActualD);
            localStorage.setItem('asuntoDeuda',asuntoDsGuardados);
            localStorage.setItem('saldoDGuardados',saldoDGuardado);

            vistaDatosDeuda.textContent = localStorage.getItem('deuda');
            for(let i=clickeadoD;i< asuntosSaldo.length;i++){
                crearBloqueDeuda(asuntosDeuda[i],saldoDeuda);
                break;
             }

            break;
    }



    cantidadDinero.value = '';
    asunto.value = '';
}
let clickeado = 0;
btnSaldo.addEventListener('click',()=>{
    guardarDatos(0,clickeado);
    clickeado++;
    salir();
})

/**         FIN SALDO        */

btnPendiente.addEventListener('click',()=>{
    guardarDatos(1);
    salir();
})

btnAhorro.addEventListener('click',()=>{
    guardarDatos(2);
    salir();
})
let clickeadoD = 0;
btnDeuda.addEventListener('click',()=>{
    guardarDatos(3,clickeadoD);
    clickeadoD++;
    salir();
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
