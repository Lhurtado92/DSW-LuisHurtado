const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valor_comp = document.getElementById("valor_compra").value;
  let porcen = document.getElementById("porcentaje").value;
  let iva = document.getElementById("iva").value;
  let cien = 100;
  
  //function operacion(){
    resul1 = cien - porcen;
    resul2 = resul1 / cien;
    resul3 = valor_comp / resul2;
    resulend = (resul3 * iva) + resul3;
    document.getElementById("rventa").value=resul3;
    document.getElementById("rganancia").value=resul2;
  //}
  //alert(valor_comp);
});
