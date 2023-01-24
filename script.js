var btn = document.getElementById("btnenc");
var btn2 = document.getElementById("btndes");
var btn3 = document.getElementById("btncopiar");
var texto = document.getElementById("inputtext")
texto.addEventListener("input", detectarInput); //Registra el evento cuando se escribe en la caja de texto

//Permite la funcionalidad del click
window.onload = function() {
    this.click();
}

function click() {
    btn.onclick = encriptar;
    btn2.onclick = desencriptar;
    btn3.onclick = copiar;
}
//Funciones de los botones
function encriptar() {
    let texto = document.getElementById("inputtext").value.toLowerCase();
    let inputtext = texto.replace(/e/img, "enter");
    inputtext = inputtext.replace(/o/img, "ober");
    inputtext = inputtext.replace(/i/img, "imes");
    inputtext = inputtext.replace(/a/img, "ai");
    inputtext = inputtext.replace(/u/img, "ufat");
    inputtext = inputtext.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Quita los acentos.
    document.getElementById("resultado").innerHTML = inputtext;
    document.getElementById("resultado").style.display = ""
    document.getElementById("imgr").style.display = "none"; //Desvanece los elementos de la derecha para msotrar el resultado
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("btncopiar").style.display = "inline";
}

function desencriptar() {
    let texto = document.getElementById("inputtext").value.toLowerCase();
    let inputtext = texto.replace(/enter/img, "e");
    inputtext = inputtext.replace(/ober/img, "o");
    inputtext = inputtext.replace(/imes/img, "i");
    inputtext = inputtext.replace(/ai/img, "a");
    inputtext = inputtext.replace(/ufat/img, "u");
    inputtext = inputtext.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    document.getElementById("resultado").innerHTML = inputtext;
    document.getElementById("imgr").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("btncopiar").style.display = "inline";
}

function copiar() {
    var contenido = document.getElementById("resultado");
    contenido.select();
    document.execCommand("copy");
}
// Detecta cuando se copia texto y los botones.
function activarBotones() {
    btn.disabled = false;
    btn.style.pointerEvents = 'auto';
    btn2.disabled = false;
    btn2.style.pointerEvents = 'auto';
    btn3.style.pointerEvents = 'auto';
}

function desactivarBotones() {
    btn.disabled = true;
    btn.style.pointerEvents = 'none';
    btn2.disabled = true;
    btn2.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'auto';
}

function detectarInput() {
    if (inputtext.value) {
        activarBotones();
    } else {
        desactivarBotones();
    }
}