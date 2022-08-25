
function maior(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    
    if (numero1 > numero2)
        alert("O primeiro número (" + numero1 + ") é maior que o segundo (" + numero2 + ")");
    else
        if(numero2 > numero1)
           alert("O segundo número (" + numero2 + ") é maior que o primeiro (" + numero1 + ")");
        else
           alert("Os dois números são iguais!");
        }
