let btn_valor = document.getElementById("btn_convertir");
btn_valor.addEventListener('click', convertir);
txtResultado = document.getElementById("resultado");

seleccion1 = document.getElementById("seleccion1");
seleccion1.addEventListener('change', convertir);

seleccion2 = document.getElementById("seleccion2");
seleccion2.addEventListener('change', convertir);

let resultado;

function convertir(){
    if(btn_valor.value==''){
        return;
    }
    ingrese_valor = btn_valor.value;
    ingrese_valor = parseFloat(ingrese_valor);

    if(seleccion1.value=="byte" && seleccion2.value=="byte"){
        resultado = ingrese_valor / 1;
        txtResultado.innerHTML = ingrese_valor + "byte/s equivale a " + resultado + "byte/s";
    }
}


