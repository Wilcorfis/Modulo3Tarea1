let totalcuenta=document.querySelector("#totalcuenta");
let porcentaje=document.querySelector("#porcentaje");

let totalc=document.querySelector("#totalc");
let propina=document.querySelector("#propina");
let totalp=document.querySelector("#totalp");

function Calcular() {
    totalc.textContent=Number(totalcuenta.value);

    let cantidad=Number(totalcuenta.value)*(Number(porcentaje.value)/100);

    propina.textContent=cantidad;

    let totalapagar=Number(totalcuenta.value)+cantidad;

    totalp.textContent=totalapagar;
    
}

    
   
    