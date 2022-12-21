const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valor_comp = document.getElementById("valor_compra").value;
  let porcen = document.getElementById("porcentaje").value;
  let iva = document.getElementById("iva").value;
 
  valorcom = valor_comp / 100 * porcen;
  document.getElementById("rganancia").value=valorcom;

  valorcom2 = valor_comp / 100 * iva + parseInt(valor_comp) + parseInt(valorcom);  
  document.getElementById("rventa").value=valorcom2;

  //function operacion(){
   /* resul1 = cien - porcen;
    resul2 = resul1 / cien;
    resul3 = valor_comp / resul2;
    resulend = (resul3 * iva) + resul3;*/
    
    
  //}
  //alert(valor_comp);
});
