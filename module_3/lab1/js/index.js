function probar () {
	var ValorUnidad=4100/50
	var unidades =parseInt(document.getElementsByName("nombre")[0].value);
	/*var festivos =document.getElementsByName("festivos")[0].value;*/
	unidades=unidades+0;
	var resultado=0;
	
	if (unidades < 50) {
    	resultado=4100;
	} else { 
    	resultado= ValorUnidad * unidades;
	}
	if(document.getElementById("festivos").checked)
	{
	  resultado=resultado+1900;
	}
	if(document.getElementById("aeropuerto").checked)
	{
	  resultado=resultado+3900;
	}
	if(document.getElementById("puerta").checked)
	{
	  resultado=resultado+1700;
	}
	document.getElementById("resultado").innerHTML = resultado;	
	event.preventDefault();
}
