var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado_operacion = document.getElementById ("resultado");
    var reset = document.getElementById ('reset');
    var suma = document.getElementById ('suma');
    var resta = document.getElementById ('resta');
    var multiplicacion = document.getElementById ('multiplicacion');
    var division = document.getElementById ('division');
    var igual = document.getElementById ('igual');
    var uno = document.getElementById ('uno');
    var dos = document.getElementById ('dos');
    var tres = document.getElementById ('tres');
    var cuatro = document.getElementById ('cuatro');
    var cinco = document.getElementById ('cinco');
    var seis = document.getElementById ('seis');
    var siete = document.getElementById ('siete');
    var ocho = document.getElementById ('ocho');
    var nueve = document.getElementById ('nueve');
    var cero = document.getElementById( 'cero' );

    //eventos
    uno.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "1";
    }
    dos.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "2";
    }
    tres.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "4";
    }
    cinco.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "5";
    }
    seis.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "6";
    }
    siete.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "7";
    }
    ocho.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "8";
    } 
    nueve.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "9";
    } 
    cero.onclick = function(e){
        resultado_operacion.textContent = resultado_operacion. textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }  
    suma.onclick = function(e){
        operandoa = resultado_operacion.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado_operacion.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado_operacion.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado_operacion.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado_operacion.textContent;  
        resolver();
    }

    function limpiar (){
        resultado_operacion.textContent = "";
    }
    function resetear (){
        resultado_operacion.textContent = "";
        operandoa = 0;
        operandob = 0; 
        operacion = "";      
    }

    function resolver(){

        var primerValor = parseFloat(operandoa)
        var segundoValor = parseFloat(operandob)

        switch(operacion){
            case "+":
                resultado_operacion.textContent = primerValor + segundoValor
                break;
    
            case "-":
                resultado_operacion.textContent = primerValor - segundoValor
                break;

            case "*":
                resultado_operacion.textContent = primerValor * segundoValor
                break;

            case "/":
                resultado_operacion.textContent = primerValor / segundoValor
                break;
        }
    }
}
