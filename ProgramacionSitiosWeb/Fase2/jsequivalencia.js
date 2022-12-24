let valor = document.getElementById("valor1");
valor.addEventListener('keyup', convertir);
txtResultado = document.getElementById("result");

seleccion1 = document.getElementById("unidad1");
seleccion1.addEventListener('change', convertir);

seleccion2 = document.getElementById("unidad2");
seleccion2.addEventListener('change', convertir);

let resultado;

function convertir(){
    if(valor.value==''){
        return;
    }

    numero = valor.value;
    numero = parseFloat(numero);

    //calcula byte

    if(seleccion1.value=="byte" && seleccion2.value=="kilobyte"){
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " byte/s equivale a " + resultado + " kilobyte/s";
    }

    if(seleccion1.value=="byte" && seleccion2.value=="megabyte"){
    resultado = numero / 1000000;
    txtResultado.innerHTML = numero + " byte/s equivale a " + resultado + " megabyte/s";
    }

    if(seleccion1.value=="byte" && seleccion2.value=="gigabyte"){
    resultado = numero / 1000000000;
    txtResultado.innerHTML = numero + " byte/s equivale a " + resultado + " gigabyte/s";
    }

    if(seleccion1.value=="byte" && seleccion2.value=="terabyte"){
    resultado = numero / 1000000000000;
    txtResultado.innerHTML = numero + " byte/s equivale a " + resultado + " terabyte/s";
    }

//calcula kilobyte

if(seleccion1.value=="kilobyte" && seleccion2.value=="byte"){
    resultado = numero * 1000;
    txtResultado.innerHTML = numero + " kilobyte/s equivale a " + resultado + " byte/s";
    }

    if(seleccion1.value=="kilobyte" && seleccion2.value=="megabyte"){
    resultado = numero / 1000;
    txtResultado.innerHTML = numero + " kilobyte/s equivale a " + resultado + " megabyte/s";
    }

    if(seleccion1.value=="kilobyte" && seleccion2.value=="gigabyte"){
    resultado = numero / 1000000;
    txtResultado.innerHTML = numero + " kilobyte/s equivale a " + resultado + " gigabyte/s";
    }

    if(seleccion1.value=="kilobyte" && seleccion2.value=="terabyte"){
    resultado = numero / 1000000000;
    txtResultado.innerHTML = numero + " byte/s equivale a " + resultado + " terabyte/s";
    }

    //calcular a megabyte

    if(seleccion1.value=="megabyte" && seleccion2.value=="byte"){
        resultado = numero * 1000000;
        txtResultado.innerHTML = numero + " megabyte/s equivale a " + resultado + " byte/s";
        }
    
        if(seleccion1.value=="megabyte" && seleccion2.value=="kilobyte"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " megabyte/s equivale a " + resultado + " kilobyte/s";
        }
    
        if(seleccion1.value=="megabyte" && seleccion2.value=="gigabyte"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " megabyte/s equivale a " + resultado + " gigabyte/s";
        }
    
        if(seleccion1.value=="megabyte" && seleccion2.value=="terabyte"){
        resultado = numero / 1000000;
        txtResultado.innerHTML = numero + " megabyte/s equivale a " + resultado + " terabyte/s";
        }

    //calcular a gigabyte

    if(seleccion1.value=="gigabyte" && seleccion2.value=="byte"){
        resultado = numero * 1000000000;
        txtResultado.innerHTML = numero + " gigabyte/s equivale a " + resultado + " byte/s";
        }
    
        if(seleccion1.value=="gigabyte" && seleccion2.value=="megabyte"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " gigabyte/s equivale a " + resultado + " megabyte/s";
        }
    
        if(seleccion1.value=="gigabyte" && seleccion2.value=="kilobyte"){
        resultado = numero * 1000000;
        txtResultado.innerHTML = numero + " gigabyte/s equivale a " + resultado + " kilobyte/s";
        }
    
        if(seleccion1.value=="gigabyte" && seleccion2.value=="terabyte"){
        resultado = numero / 1000;
        txtResultado.innerHTML = numero + " gigabyte/s equivale a " + resultado + " terabyte/s";
        }

    //calcular a terabyte

    if(seleccion1.value=="terabyte" && seleccion2.value=="byte"){
        resultado = numero * 1000000000000;
        txtResultado.innerHTML = numero + " terabyte/s equivale a " + resultado + " byte/s";
        }
    
        if(seleccion1.value=="terabyte" && seleccion2.value=="megabyte"){
        resultado = numero * 1000000;
        txtResultado.innerHTML = numero + " terabyte/s equivale a " + resultado + " megabyte/s";
        }
    
        if(seleccion1.value=="terabyte" && seleccion2.value=="gigabyte"){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + " terabyte/s equivale a " + resultado + " gigabyte/s";
        }
    
        if(seleccion1.value=="terabyte" && seleccion2.value=="kilobyte"){
        resultado = numero * 1000000000;
        txtResultado.innerHTML = numero + " terabyte/s equivale a " + resultado + " kilobyte/s";
        }
}