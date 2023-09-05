function comprarCarro(modelo, preco) {
    alert(`Você comprou um ${modelo} por $${preco}`);
}

var img1 = "img/Jaguar/f-pace_1.jpg";
var img2 = "img/Jaguar/f-pace_2.jpg";

function trocar1(){								 
    element=document.getElementById('figura1').src= img1;
    let aux = img1;
    img1 = img2;
    img2 = aux;
   }

var img3 = "img/BMW/BMW-320I_1.jpg";
var img4 = "img/BMW/BMW-320I_2.jpg";
   
function trocar2(){								 
    element=document.getElementById('figura2').src= img3;
    let aux = img3;
    img3 = img4;
    img4 = aux;
    }