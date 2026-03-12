const boton = document.getElementById("calcular");

boton.addEventListener("click", function(){

const loader = document.getElementById("loader");
const resultado = document.getElementById("resultado");

loader.style.display = "block";
resultado.style.display = "none";

setTimeout(function(){

const personas = parseInt(document.getElementById("personas").value) || 0;

const carnesSeleccionadas = document.querySelectorAll(".carne:checked");

if(carnesSeleccionadas.length === 0){

alert("Selecciona al menos una carne");
loader.style.display = "none";
return;

}

const totalKg = personas * 1.5;

const kgPorCarne = totalKg / carnesSeleccionadas.length;

let resultadoHTML = "<h3>Ingredientes necesarios</h3>";

let agregarChoripan = false;

carnesSeleccionadas.forEach(function(carne){

let nombre = "";

if(carne.value === "carne") nombre = "🥩 Carne";
if(carne.value === "pollo") nombre = "🍗 Pollo";
if(carne.value === "cerdo") nombre = "🐖 Cerdo";

if(carne.value === "choripan"){

agregarChoripan = true;

}

if(carne.value === "carne" || carne.value === "pollo" || carne.value === "cerdo"){

resultadoHTML += nombre + ": " + kgPorCarne.toFixed(2) + " kg<br>";

}

});

if(agregarChoripan){

const choripanes = personas * 2;
const panes = personas * 2;

resultadoHTML += "<br>🌭 Chorizos: " + choripanes + "<br>";
resultadoHTML += "🥖 Panes para choripanes: " + panes + "<br>";

resultadoHTML += "<br>🌶️ No se te vaya a olvidar el pebre!! 😋";

}

resultado.innerHTML = resultadoHTML;

loader.style.display = "none";
resultado.style.display = "block";

}, 800);

});