document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para teste.

    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome && mensagem) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});