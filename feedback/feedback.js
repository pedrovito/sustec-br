document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Verifica se os campos de nome, email e assunto estão preenchidos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;

    if (nome === "" || email === "" || assunto === "") {
        alert("Preencha todos os campos antes de enviar o formulário.");
    } else {
        document.getElementById("aviso").style.display = "block";
        
        // Define um timeout para ocultar o aviso após 3 segundos (3000 milissegundos)
        setTimeout(function () {
            document.getElementById("aviso").style.display = "none";
        }, 3000);
    }

    nomeInput.value = "";
    emailInput.value = "";
    assuntoInput.value = "";

    
    submitButton.disabled = true;
    


    nomeInput.addEventListener("input", validarCampos);
    emailInput.addEventListener("input", validarCampos);
    assuntoInput.addEventListener("input", validarCampos);


    function validarCampos() {
        if (nomeInput.value.trim() !== "" && emailInput.value.trim() !== "" && assuntoInput.value.trim() !== "") {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
});