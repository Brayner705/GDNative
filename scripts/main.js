// ARRAYS

let saldoGuardar = [];
let saldoDeuda = [];
let saldoGuardarGasto = [];
let saldoPendiente = [];
let asuntosSaldo = [];
let asuntosPendiente = [];
let asuntosAhorro = [];
let asuntosDeuda = [];
let asuntosSaldoGasto = [];

// VARIABLES

let clickeado = 0;
let clickeadoD = 0;

//  ELEMENTOS OBTENIDOS

const vistaDatosSaldo = document.getElementById("vistaSaldo");
const vistaDatosPendiente = document.getElementById("vistaPendiente");
const vistaDatosAhorro = document.getElementById("vistaAhorro");
const vistaDatosDeuda = document.getElementById("vistaDeuda");

const btns = document.querySelectorAll("#btnVer");
const modalS = document.getElementById("modal");
const exit = document.getElementById("exit");
const ventanaM = document.querySelector(".ventana");

const ventanaS = document.getElementById("saldo");
const titleModal = document.getElementById("titleModal");
const inputOne = document.getElementById("agregar");
const btnAsunto = document.getElementById("asunto");

// ELEMENTOS CREADOS

const btnSaldo = document.createElement("BUTTON");
const btnPendiente = document.createElement("BUTTON");
const btnAhorro = document.createElement("BUTTON");
const btnDeuda = document.createElement("BUTTON");
const btnGasto = document.createElement("BUTTON");

//  AÑADIENDO CLASES A ELEMENTOS

inputOne.classList.add("void");
btnAsunto.classList.add("void");

if (!localStorage.getItem("primeraVisita")) {
  alert("Bienvenido a primera vez a nuestra pagina");

  localStorage.setItem("primeraVisita", true);
  localStorage.setItem("saldo", "0");
  localStorage.setItem("pendiente", "0");
  localStorage.setItem("ahorro", "0");
  localStorage.setItem("comentariosSaldo", "");
  localStorage.setItem("saldoGuardado", "");
  localStorage.setItem("asuntoDeuda", "");
  localStorage.setItem("saldoDGuardado", "");
  localStorage.setItem("saldoGuardadoGasto", "");
  localStorage.setItem("comentariosSaldoGasto", "");
  localStorage.setItem("controlS", "0");
  localStorage.setItem("controlD", "0");
  localStorage.setItem("idDeuda", "");
  localStorage.setItem('asuntoPendiente',"");
  localStorage.setItem('saldoPendiente','');
}

const insertarDatos = document.getElementById("contenedorHistorial");

const crearBloque = (asunto, monto) => {
  let fecha = new Date();
  const div = document.createElement("DIV");
  div.classList.add("cajaHistorial");
  div.classList.add("historialM");

  const h5Sueldo = document.createElement("H5");
  h5Sueldo.textContent = asunto;

  const h5Monto = document.createElement("H5");
  h5Monto.textContent = monto;

  const h5Fecha = document.createElement("H5");
  h5Fecha.textContent = `${fecha.getDate()}-${
    fecha.getMonth() + 1
  }-${fecha.getFullYear()}`;

  div.appendChild(h5Sueldo);
  div.appendChild(h5Monto);
  div.appendChild(h5Fecha);

  insertarDatos.appendChild(div);
};


const insertarDatosPendiente = document.getElementById("contenedorPendiente");
let contadorPendiente = 0;

const crearBloquePendiente = (nombre, monto) => {
  let fecha = new Date();
  const div = document.createElement("DIV");
  div.classList.add("datosPendiente");

  const divBotones = document.createElement("DIV");

  const nombrePendiente = document.createElement("H5");
  nombrePendiente.textContent = nombre;

  const montoPendiente = document.createElement("H5");
  montoPendiente.textContent = monto;

  const fechaPendiente = document.createElement("H5");
  fechaPendiente.textContent = `${fecha.getDate()}-${
    fecha.getMonth() + 1
  }-${fecha.getFullYear()}`;

  const botonP = document.createElement("BUTTON");

  botonP.classList.add("confirm");

  const iconoLike = document.createElement("I");
  iconoLike.classList.add("fa");
  iconoLike.classList.add("fa-check");

  botonP.setAttribute("id", contadorPendiente);
  div.setAttribute("id", contadorPendiente);

  botonP.appendChild(iconoLike);

  divBotones.appendChild(botonP);
  div.appendChild(nombrePendiente);
  div.appendChild(montoPendiente);
  div.appendChild(fechaPendiente);
  div.appendChild(divBotones);
  contadorPendiente++;

  insertarDatosPendiente.appendChild(div);

  botonP.addEventListener("click", () => {
    // BORRAR EL REGISTRO DE DEUDA DE LA BASE DE DATOS

    let presionado = botonP.getAttribute("id");

    console.log(localStorage.getItem('asuntoPendiente'))
    console.log(localStorage.getItem('saldoPendiente'))

    let asuntoPendienteTemp = JSON.parse(localStorage.getItem("asuntoPendiente"));
    let montoPendienteTemp = JSON.parse(localStorage.getItem("saldoPendiente"));

    asuntoPendienteTemp.splice(presionado, 1);
    montoPendienteTemp.splice(presionado, 1);

    console.log(presionado);
    console.log(`Se removio el elemento con id: ${presionado}`);
    console.log(asuntoPendienteTemp);
    console.log(montoPendienteTemp);

    localStorage.setItem("asuntoPendiente", JSON.stringify(asuntoPendienteTemp));
    localStorage.setItem("saldoPendiente", JSON.stringify(montoPendienteTemp));

    contadorPendiente--;

    //ACTUALIZAR MENU DEUDA

    vistaDatosPendiente.textContent = mostrarPendiente();

    div.remove();
  });
};

// BLOQUE DEUDA

const insertarDatosDeuda = document.getElementById("contenedorDeuda");
let contadorDeuda = 0;

const crearBloqueDeuda = (nombre, monto) => {
  let fecha = new Date();
  const div = document.createElement("DIV");
  div.classList.add("datosDeuda");

  const divBotones = document.createElement("DIV");

  const nombreDeuda = document.createElement("H5");
  nombreDeuda.textContent = nombre;

  const montoDeuda = document.createElement("H5");
  montoDeuda.textContent = monto;

  const fechaDeuda = document.createElement("H5");
  fechaDeuda.textContent = `${fecha.getDate()}-${
    fecha.getMonth() + 1
  }-${fecha.getFullYear()}`;

  const boton1 = document.createElement("BUTTON");

  boton1.classList.add("confirm");

  const iconoLike = document.createElement("I");
  iconoLike.classList.add("fa");
  iconoLike.classList.add("fa-check");

  boton1.setAttribute("id", contadorDeuda);
  div.setAttribute("id", contadorDeuda);

  boton1.appendChild(iconoLike);

  divBotones.appendChild(boton1);
  div.appendChild(nombreDeuda);
  div.appendChild(montoDeuda);
  div.appendChild(fechaDeuda);
  div.appendChild(divBotones);
  contadorDeuda++;

  insertarDatosDeuda.appendChild(div);

  boton1.addEventListener("click", () => {
    // BORRAR EL REGISTRO DE DEUDA DE LA BASE DE DATOS -----------------------------------------------------------------------------------------------------------------

    let presionado = boton1.getAttribute("id");

    let asuntoDeudaTemp = JSON.parse(localStorage.getItem("asuntoDeuda"));
    let montoDeudaTemp = JSON.parse(localStorage.getItem("saldoDGuardados"));

    console.log(asuntoDeudaTemp)
    console.log(montoDeudaTemp)

    asuntoDeudaTemp.splice(presionado, 1);
    montoDeudaTemp.splice(presionado, 1);

    console.log(presionado);
    console.log(`Se removio el elemento con id: ${presionado}`);
    console.log(asuntoDeudaTemp);
    console.log(montoDeudaTemp);

    localStorage.setItem("asuntoDeuda", JSON.stringify(asuntoDeudaTemp));
    localStorage.setItem("saldoDGuardados", JSON.stringify(montoDeudaTemp));

    contadorDeuda--;

    //ACTUALIZAR MENU DEUDA

    vistaDatosDeuda.textContent = mostrarDeuda();

    div.remove();
  });
};

btns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    modalS.classList.add("modal");
    modalS.style.display = "flex";
    ventanaS.style.display = "flex";
    ventanaM.style.height = "50vh";

    let opcion = btn.getAttribute("value");

    switch (opcion) {
      case "saldo":
        btnSaldo.setAttribute("id", "agregarSaldo");
        btnSaldo.textContent = "Agregar saldo";
        btnGasto.textContent = "Gastar";

        ventanaS.appendChild(btnSaldo);
        ventanaS.appendChild(btnGasto);
        break;
      case "pendiente":
        btnPendiente.setAttribute("id", "agregarPendiente");
        btnPendiente.textContent = "Agregar Pendiente";
        ventanaS.appendChild(btnPendiente);
        break;
      case "ahorro":
        btnAhorro.setAttribute("id", "agregarAhorro");
        btnAhorro.textContent = "Agregar Ahorro";
        ventanaS.appendChild(btnAhorro);
        break;
      case "deuda":
        btnDeuda.setAttribute("id", "agregraDeuda");
        btnDeuda.textContent = "Agregar Deuda";
        ventanaS.appendChild(btnDeuda);
        break;
      default:
        console.log("no existe la opcion");
    }

    inputOne.setAttribute("placeholder", `Ingresa ${opcion}`);
    titleModal.textContent = opcion;
  });
});

btnGasto.addEventListener("click", () => {
  let saldo = cantidadDinero.value;

  let saldoActual = parseFloat(localStorage.getItem("saldo"));

  if (saldoActual >= saldo) {
    saldoActual = saldoActual - saldo;
    localStorage.setItem("saldo", saldoActual);

    saldoGuardarGasto.push(saldo);

    let saldoGuardado = JSON.stringify(saldoGuardarGasto);

    asuntosSaldoGasto.push(asunto.value);

    let asuntosGuardados = JSON.stringify(asuntosSaldoGasto);

    localStorage.setItem("saldo", saldoActual);
    localStorage.setItem("saldoGuardadoGasto", saldoGuardado);
    localStorage.setItem("comentariosSaldoGasto", asuntosGuardados);

    vistaDatosSaldo.textContent = localStorage.getItem("saldo");

    let ultimaposicion = asuntosSaldoGasto.length - 1;
    inputOne.value = "";
    btnAsunto.value = "";

    console.log(asuntosSaldoGasto);
    crearBloque(
      asuntosSaldoGasto[ultimaposicion],
      saldoGuardarGasto[ultimaposicion]
    );
    salir();
  } else {
    // AGREGAR CUANDO NO SE PUEDE HACER UN GASTO
  }
});

const salir = () => {
  modalS.classList.remove("modal");
  ventanaS.style.display = "none";
  ventanaM.style.height = "0";

  btns.forEach((btn) => {
    let opcion = btn.getAttribute("value");

    switch (opcion) {
      case "saldo":
        btnSaldo.remove();
        btnGasto.remove();
        break;
      case "pendiente":
        btnPendiente.remove();

        break;
      case "ahorro":
        btnAhorro.remove();
        break;
      case "deuda":
        btnDeuda.remove();
        break;
    }
  });
};

exit.addEventListener("click", () => {
  salir();
  inputOne.classList.remove("voidError");
});

/**             Guardar datos de cada operacion       */

/**         SALDO            */

const cantidadDinero = document.getElementById("agregar");
const asunto = document.getElementById("asunto");

const mostrarDeuda = () => {
  let saldoTotalDeuda;
  let deudaTotal = 0;
  saldoTotalDeuda = JSON.parse(localStorage.getItem("saldoDGuardados"));

  try {
    saldoTotalDeuda.forEach((total) => {
      deudaTotal += parseFloat(total);
    });
    return deudaTotal;
  } catch (e) {
    console.error("array vacio");
    return 0;
  }
};

const mostrarPendiente = () => {
  let saldoTotalPendiente;
  let pendienteTotal = 0;
  saldoTotalPendiente = JSON.parse(localStorage.getItem("saldoPendiente"));

  try {
    saldoTotalPendiente.forEach((total) => {
      pendienteTotal += parseFloat(total);
    });
    return pendienteTotal;
  } catch (e) {
    console.error("array pendiente vacio");
    return 0;
  }
};

window.addEventListener("load", () => {
  vistaDatosSaldo.textContent = localStorage.getItem("saldo");
  vistaDatosPendiente.textContent = localStorage.getItem("pendiente");
  vistaDatosAhorro.textContent = localStorage.getItem("ahorro");

  vistaDatosDeuda.textContent = mostrarDeuda();

  try {
    clickeado = JSON.parse(localStorage.getItem("comentariosSaldo")).length;
  } catch (e) {
    console.error("error de analisis saldo");
  }

  try {
    clickeadoD = JSON.parse(localStorage.getItem("asuntoDeuda")).length;

    console.log(clickeado);
  } catch (e) {
    console.error("error de analisis deuda");
  }

  try {
    let comentariosHistorialC = JSON.parse(
      localStorage.getItem("comentariosSaldo")
    );
    let saldoHistorialC = JSON.parse(localStorage.getItem("saldoGuardado"));

    console.log(comentariosHistorialC);
    console.log(saldoHistorialC);

    for (let i = 0; i < comentariosHistorialC.length; i++) {
      crearBloque(comentariosHistorialC[i], saldoHistorialC[i]);
    }

    comentariosHistorialC.forEach((comen) => {
      asuntosSaldo.push(comen);
    });

    saldoHistorialC.forEach((saldo) => {
      saldoGuardar.push(saldo);
    });
  } catch (error) {
    console.error("No existe historial en la base de datos");
  }

  try {
    let saldoDeudaC = JSON.parse(localStorage.getItem("saldoDGuardados"));
    let asuntoDeudaC = JSON.parse(localStorage.getItem("asuntoDeuda"));
    for (let i = 0; i < saldoDeudaC.length; i++) {
      crearBloqueDeuda(asuntoDeudaC[i], saldoDeudaC[i]);
    }

    saldoDeudaC.forEach((saldo) => {
      saldoDeuda.push(saldo);
    });

    asuntoDeudaC.forEach((asuntoD) => {
      asuntosDeuda.push(asuntoD);
    });
  } catch (error) {
    console.error("No hay datos ");
  }
});

// Borrar datos

document.getElementById("limpiar").addEventListener("click", () => {
  alert("va a ser reiniciado en breve");
  setTimeout(() => {
    localStorage.clear();
    location.reload();
  }, 3000);
});

let idDeuda = [];

const guardarDatos = (opcion) => {
  let saldo = cantidadDinero.value;

  switch (opcion) {
    case 0:
      let saldoActual =
        parseFloat(localStorage.getItem("saldo")) + parseFloat(saldo);

      saldoGuardar.push(saldo);

      let saldoGuardado = JSON.stringify(saldoGuardar);

      asuntosSaldo.push(asunto.value);

      let asuntosGuardados = JSON.stringify(asuntosSaldo);

      localStorage.setItem("saldo", saldoActual);
      localStorage.setItem("saldoGuardado", saldoGuardado);
      localStorage.setItem("comentariosSaldo", asuntosGuardados);

      vistaDatosSaldo.textContent = localStorage.getItem("saldo");

      for (let i = clickeado; i < asuntosSaldo.length; i++) {
        crearBloque(asuntosSaldo[i], saldoGuardar[i]);
        console.log("entro");
        break;
      }

      break;
    case 1:
      let saldoActualP =
        parseFloat(localStorage.getItem("pendiente")) + parseFloat(saldo);

      saldoPendiente.push(saldo);
      asuntosPendiente.push(asunto.value);

      let saldoPGuardado = JSON.stringify(saldoPendiente);
      let asuntoPGuardados = JSON.stringify(asuntosPendiente);

      localStorage.setItem("pendiente", saldoActualP);
      localStorage.setItem("asuntoPendiente", asuntoPGuardados);
      localStorage.setItem("saldoPendiente", saldoPGuardado);

      vistaDatosPendiente.textContent = mostrarPendiente();

      for (let i = clickeadoD; i < asuntosPendiente.length; i++) {
        crearBloquePendiente(asuntosPendiente[i], saldoPendiente[i]);
        idDeuda.push(i);
        break;
      }

      localStorage.setItem("idDeuda", JSON.stringify(idDeuda));

      break;
    case 2:
      let saldoActualA =
        parseFloat(localStorage.getItem("ahorro")) + parseFloat(saldo);

      localStorage.setItem("ahorro", saldoActualA);

      vistaDatosAhorro.textContent = localStorage.getItem("ahorro");

      let saldoAhorro =
        parseFloat(localStorage.getItem("saldo")) - parseFloat(saldo);

      localStorage.setItem("saldo", saldoAhorro);

      vistaDatosSaldo.textContent = saldoAhorro;

      break;
    case 3:
      let saldoActualD =
        parseFloat(localStorage.getItem("deuda")) + parseFloat(saldo);

      saldoDeuda.push(saldo);

      let saldoDGuardado = JSON.stringify(saldoDeuda);

      asuntosDeuda.push(asunto.value);

      let asuntoDsGuardados = JSON.stringify(asuntosDeuda);

      localStorage.setItem("deuda", saldoActualD);
      localStorage.setItem("asuntoDeuda", asuntoDsGuardados);
      localStorage.setItem("saldoDGuardados", saldoDGuardado);

      vistaDatosDeuda.textContent = mostrarDeuda();

      for (let i = clickeadoD; i < asuntosDeuda.length; i++) {
        crearBloqueDeuda(asuntosDeuda[i], saldoDeuda[i]);
        idDeuda.push(i);
        break;
      }

      localStorage.setItem("idDeuda", JSON.stringify(idDeuda));

      break;
  }

  cantidadDinero.value = "";
  asunto.value = "";
};

btnSaldo.addEventListener("click", () => {
  if (inputOne.value != "") {
    inputOne.classList.remove("voidError");
    guardarDatos(0);
    clickeado++;
    let guardarclick = clickeado.toString();
    localStorage.setItem("controlS", guardarclick);
    salir();
  } else {
    inputOne.classList.add("voidError");

    setTimeout(() => {
      inputOne.classList.remove("voidError");
    }, 1500);
  }
});

/**         FIN SALDO        */

btnPendiente.addEventListener("click", () => {
  guardarDatos(1);
  salir();
});

btnAhorro.addEventListener("click", () => {
  guardarDatos(2);
  salir();
});
btnDeuda.addEventListener("click", () => {
  guardarDatos(3);
  clickeadoD++;
  let guardarclickD = clickeadoD.toString();
  localStorage.setItem("controlD", guardarclickD);
  salir();
});

/**                             FIN                     */

/**             Bars                     */

const ventanaLateral = document.getElementById("ventanaL");
const btnVentanaLateral = document.getElementById("btnL");
const fondoVentana = document.getElementById("fondoVentana");

btnVentanaLateral.addEventListener("click", () => {
  ventanaLateral.style.transform = "translate(0)";
  fondoVentana.style.display = "block";
  document.body.style.overflow = "hidden";
});

fondoVentana.addEventListener("click", () => {
  ventanaLateral.style.transform = "translate(-100%)";
  fondoVentana.style.display = "none";
  document.body.style.overflow = "";
});
