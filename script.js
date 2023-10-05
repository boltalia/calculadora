
function calcular() {
    const f = Number(document.querySelector("#frequencia").value); // Velocidade
    const l = Number(document.querySelector("#comprimento").value); // Ângulo
    
    const v = f * l

    document.querySelector("#resultado").textContent = "Velocidade:" + v.toFixed(2) + "m/s";
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
});
