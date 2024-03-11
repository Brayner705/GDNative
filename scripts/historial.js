const insertarDatos = document.getElementById('contenedorHistorial');


const crearBloque = ()=>{

    const div = document.createElement('DIV');
    div.classList.add('cajaHistorial');
    div.classList.add('historialM');

    const h5Sueldo = document.createElement('H5');
    h5Sueldo.textContent = 'Sueldo';
    

    const h5Monto = document.createElement('H5');
    h5Monto.textContent = '500';


    const h5Fecha = document.createElement('H5');
    h5Fecha.textContent = '04/03/2024';

    div.appendChild(h5Sueldo);
    div.appendChild(h5Monto);
    div.appendChild(h5Fecha);

    insertarDatos.appendChild(div);
    
}
 /**  Falta agregar cuando pase una accion o darle un boton
  * 
  * EJEMPLO
  * 
  * btn.addEventListener('click',()=>{
  * 
  *     Aqui va accion
  * 
  * })
  * 
  * 
  * 
  * 
  * 
  */