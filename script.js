// ELEMENTOS

const checkboxGenteMas = document.getElementById("genteMas");
const genteMasContainer = document.getElementById("genteMasContainer");
const botonCalcular = document.getElementById("calcular");

const resultado = document.getElementById("resultado");
const loader = document.getElementById("loader");


// MOSTRAR / OCULTAR "GENTE QUE COME MAS"

checkboxGenteMas.addEventListener("change", function () {
    genteMasContainer.style.display = checkboxGenteMas.checked ? "block" : "none";
});


// CALCULAR COMPLETOS

botonCalcular.addEventListener("click", function () {

    loader.style.display = "block";
    resultado.style.display = "none";

    setTimeout(function(){

        const personas = parseInt(document.getElementById("personas").value) || 0;
        const completosPorPersona = parseInt(document.getElementById("completosPorPersona").value) || 0;

        const comenMas = checkboxGenteMas.checked;
        const cuantosMas = parseInt(document.getElementById("cuantosMas").value) || 0;

        let completosTotales = 0;

        if (comenMas) {

            const personasNormales = personas - cuantosMas;

            completosTotales =
                (personasNormales * completosPorPersona) +
                (cuantosMas * (completosPorPersona + 1));

        } else {

            completosTotales = personas * completosPorPersona;

        }

        // BASE RECETA PARA 20 COMPLETOS

        const baseCompletos = 20;
        const baseTomateKg = 1.2;
        const basePaltaKg = 1.5;
        const baseTomates = 6;
        const basePaltas = 7;

        const factor = completosTotales / baseCompletos;

        const panes = Math.ceil(completosTotales);
        const salchichas = Math.ceil(completosTotales);

        const tomatesKg = (baseTomateKg * factor).toFixed(2);
        const paltasKg = (basePaltaKg * factor).toFixed(2);

        const tomatesUnidad = Math.ceil(baseTomates * factor);
        const paltasUnidad = Math.ceil(basePaltas * factor);

        const resultadoHTML = `
            <h3>Resultados</h3>

            <p><b>Completos totales:</b> ${completosTotales}</p>

            <p>🌭 Panes: ${panes}</p>
            <p>🌭 Salchichas: ${salchichas}</p>

            <p>🍅 Tomates: ${tomatesKg} kg (aprox. ${tomatesUnidad} tomates)</p>

            <p>🥑 Paltas: ${paltasKg} kg (aprox. ${paltasUnidad} paltas)</p>
        `;

        resultado.innerHTML = resultadoHTML;

        loader.style.display = "none";
        resultado.style.display = "block";

    }, 800);

});



// NAVEGACIÓN ENTRE APPS

const btnCompletos = document.getElementById("btnCompletos");
const btnAsado = document.getElementById("btnAsado");

const appCompletos = document.getElementById("appCompletos");
const appAsado = document.getElementById("appAsado");

if(btnCompletos && btnAsado){

    btnCompletos.onclick = function () {

        appCompletos.style.display = "block";
        appAsado.style.display = "none";

        btnCompletos.classList.add("active");
        btnAsado.classList.remove("active");

    }

    btnAsado.onclick = function () {

        appCompletos.style.display = "none";
        appAsado.style.display = "block";

        btnAsado.classList.add("active");
        btnCompletos.classList.remove("active");

    }

}