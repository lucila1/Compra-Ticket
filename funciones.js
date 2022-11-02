const valorTicket = 200;

var promoEstudiante = 80;
var promoTrainee    = 50;
var promoJunior     = 15;

var nombre          = document.getElementById("nombre");
var apellido        = document.getElementById("apellido");
var mail            = document.getElementById("input-c");
var cantidadTickets = document.getElementById("cantidad");
var categoria       = document.getElementById("tipo");

function total_a_pagar()
{


    let totalValorTickets=(cantidadTickets.value*valorTicket);

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    else if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(promoEstudiante/100*totalValorTickets);
    }
    else if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(promoTrainee/100*totalValorTickets);
    }
    else if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(promoJunior/100*totalValorTickets);
    }
    
    total_abonar.innerHTML=totalValorTickets;
}

// PARA QUE SE LIMPIE EL P DE DONDE DICE EL PRECIO
function reset_total_a_pagar()
{
    
    total_abonar.innerHTML="Total a pagar: $";
}


btnResumen.addEventListener("click",total_a_pagar);

btnBorrar.addEventListener("click",reset_total_a_pagar);