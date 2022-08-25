
function maior(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    
    if (numero1 > numero2)
        alert("Falso! O primeiro número é maior que o segundo");
    else
        if(numero2 > numero1)
           alert("Verdadeiro! O segundo número é maior que o primeiro");
        else
           alert("Os dois números são iguais!");
        }
