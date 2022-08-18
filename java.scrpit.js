/* Carne - 400 gr por pessoa + de 6 horas - 650
Cerveja - 1200 ml por pessoa + 6 horas - 2000ml
refriferante/agua - 1000 ml por pessoa + 6 horas 1500 ml

criança valem por 0,5
*/

// setando as variaveis do input
let inputAdultos = document.getElementById("Adultos");
let inputCrianças = document.getElementById("Crianças");
let inputDuração = document.getElementById("Duração");
let resultado = document.getElementById("resu");

function calcular(){
    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duração = inputDuração.value;
   

    let qtdCarne = carnepp(duração)*adultos + (carnepp(duração)/2 * crianças);
    let qtdacerveja = cervejapp(duração)*adultos;
    let qtdabebidas = bebidapp(duração)*adultos + (bebidapp(duração)/2 * crianças);

    resultado.innerHTML = `<p>${qtdCarne / 1000} kg de Carne <p> `
    resultado.innerHTML += `<p>${Math.ceil(qtdabebidas / 2000)} garrafas de Bebidas <p> `
    resultado.innerHTML += `<p>${Math.ceil(qtdacerveja / 355)} latas de Cerveja <p> `
}

function carnepp(duração){
    if(duração >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejapp(duração){
    if(duração >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidapp(duração){
    if(duração >= 6){
        return 1500
    }else{
        return 1000
    }
 }
