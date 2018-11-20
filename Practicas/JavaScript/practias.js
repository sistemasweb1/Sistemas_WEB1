/*
comentario tipo parrafo
*/

//inline comment

function suma() //suma de dos numeros
{
    var x = document.getElementById('caja1').value;
    var y = document.getElementById('caja2').value;
    var resultado = parseInt(x)+parseInt(y);
    document.getElementById('resultado').innerHTML = resultado;
}

function suma2(variable) //suma de dos numeros
{
   var x = 16 + variable;
    document.getElementById('texto').innerHTML = x;
}

function sumar(condicional) 
{
    if (condicional == 1)
    {
        var x = 16 + 4 + "volvo";
    }
    else
    {
        var x = "volvo" + 16 + 4;
    }

    document.getElementById('pruebas').innerHTML = x;

          
}

function concatenar()
{
    var text1 = document.getElementById('box1').value;
    var text2 = document.getElementById('box2').value;
    document.getElementById('concatenacion').innerHTML = text1 + ' ' + text2;
}
