function comprarCarro(modelo, preco) {
    alert(`Você comprou um ${modelo} por $${preco}`);
}

//JAGUAR
var img1 = "../img/Jaguar/jaguar-xf_2.webp";
var img2 = "../img/Jaguar/f-pace_2.jpg";
var img3 = "../img/Jaguar/i-pace_2.jpg";
var img4 = "../img/Jaguar/jaguar-xe_2.webp";
var img5 = "../img/Jaguar/f-type_2.webp";

function trocar1(){								 
    element=document.getElementById('figura1').src= img1;
    let aux = img1;
    img1 = img2
    img2 = img3
    img3 = img4
    img4 = img5
    img5 = aux;
}

//BMW
var img6 = "../img/BMW/BMW-320I_2.jpg";
var img7 = "../img/BMW/BMW-420I_2.jpg";
var img8 = "../img/BMW/BMW-I7_1.jpeg";
var img9 = "../img/BMW/BMW-M3_1.webp";
var img10 = "../img/BMW/BMW-X6_2.jpg";

function trocar2(){								 
    element=document.getElementById('figura2').src= img6;
    let aux = img6;
    img6 = img7
    img7 = img8
    img8 = img9
    img9 = img10
    img10 = aux;
}

//KOENIGSEGG
var img11 = "../img/Koenigsegg/KOENIGSEGG-REGERA_2.jpg";
var img12 = "../img/Koenigsegg/koenigsegg-gemera_1.jpeg";
var img13 = "../img/Koenigsegg/KOENIGSEGG-CC850_2.webp";
var img14 = "../img/Koenigsegg/KOENIGSEGG-RAGE_2.jpg";
var img15 = "../img/Koenigsegg/KOENIGSEGG-JESKO_2.jpg";

function trocar3(){								 
    element=document.getElementById('figura3').src= img11;
    let aux = img11;
    img11 = img12
    img12 = img13
    img13 = img14
    img14 = img15
    img15 = aux;
}

//MERCEDES
var img16 = "../img/Mercedes/MERCEDES-GLA-200_2.jpg";
var img17 = "../img/Mercedes/MERCEDES-CLA35_2.jpg";
var img18 = "../img/Mercedes/MERCEDES-EQC4_2.webp";
var img19 = "../img/Mercedes/MERCEDES-C300_2.jpg";
var img20 = "../img/Mercedes/MERCEDES-G63_2.webp";

function trocar4(){								 
    element=document.getElementById('figura4').src= img16;
    let aux = img16;
    img16 = img17
    img17 = img18
    img18 = img19
    img19 = img20
    img20 = aux;
}

//PORSCHE
var img21 = "../img/Porsche/PORSCHE-PANAMERA2.jpg";
var img22 = "../img/Porsche/PORSCHE_taycan2.jpg";
var img23 = "../img/Porsche/PORSCHE-CAYENNE_2.jpg";
var img24 = "../img/Porsche/PORSCHE-MACAN_2.webp";
var img25 = "../img/Porsche/porsche-911_2.webp";

function trocar5(){								 
    element=document.getElementById('figura5').src= img21;
    let aux = img21;
    img21 = img22
    img22 = img23
    img23 = img24
    img24 = img25
    img25 = aux;
}