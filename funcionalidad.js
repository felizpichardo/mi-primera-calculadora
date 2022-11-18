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
    var punto = document.getElementById( 'punto' );   
    var porcentaje = document.getElementById( 'porcentaje' );
    var raiz = document.getElementById('raiz');
    var pontencial = document.getElementById('potencia');
    var elevacion = document.getElementById ('elevacion');
    var factorial = document.getElementById ('factorial' );
    

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
        operacion = "×";
        limpiar();
    }

    division.onclick = function(e){
        operandoa = resultado_operacion.textContent;
        operacion = "÷";
        limpiar();
    }

    factorial.onclick= function (e){
        /*operandoa=resultado_operacion.textContent;
        operacion= "x!";
        limpiar();*/
        alerta();
        
    }


    elevacion.onclick= function (e){
        /*operandoa=resultado_operacion.textContent;
        operacion= "x2";
        limpiar();*/
        alerta();

    }

   pontencial.onclick = function (e){
    /*operandoa=resultado_operacion.textContent;
    operacion= "xy";
    limpiar();*/
    alerta();

    }

    raiz.onclick = function(e){
        /*operandoa=resultado_operacion.textContent;
        operacion= "√";
        limpiar();*/
        alerta();
    
    }
    



    menos.onclick = function (e){
        var pantalla =resultado_operacion.textContent;
        pantalla = parseFloat(pantalla);
        resultado_operacion.textContent = pantalla * -1;
    }     

    igual.onclick = function(e){
        operandob = resultado_operacion.textContent;  
        resolver();
    }
    porcentaje.onclick=function(e){
        operandoa=resultado_operacion.textContent;
        operacion= "%";
        limpiar();
    }
    punto.onclick=function(e){
        /*operandoa=resultado_operacion.textContent;
        operacion= ".";
        limpiar();*/
        alerta();
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

        switch(operacion) {
            case "+":
                resultado_operacion.textContent = primerValor + segundoValor
                break;
    
            case "-":
                resultado_operacion.textContent = primerValor - segundoValor
                break;

            case "×":
                resultado_operacion.textContent = primerValor * segundoValor
                break;

            case "%":
                  var valorporcentual= primerValor /100;
                 
                  resultado_operacion.textContent= segundoValor * valorporcentual;
               break;

            case "^":
                resultado_operacion.textContent = Math.pow(primerValor, segundoValor);

                break;

            case "÷":
                resultado_operacion.textContent = primerValor / segundoValor;
            
            break;

            case "x!":
                resultado_operacion.textContent = primerValor / segundoValor;

            break

            case "√":
                resultado_operacion.textContent = Math.sqrt(primerValor, segundoValor);

                break;




            
        }
    }
    
}
