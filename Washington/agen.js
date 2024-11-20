function agendarDoacao(event) {
    event.preventDefault(); 


    const dataNascimento = new Date(document.getElementById("data-nascimento").value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();

    
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (idade < 18) {
        alert("Você precisa ter 18 anos ou mais para agendar uma doação de sangue.");
        return;
    }

    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const celular = document.getElementById("celular").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const local = document.getElementById("local").value;

    
    const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
    mensagemConfirmacao.style.display = "block";
    mensagemConfirmacao.innerHTML = `<p>Agendamento realizado com sucesso, ${nome}! Obrigado por ser um doador.</p>`;

    document.getElementById("form-agendamento").reset();
}