function cadastrarDoador(event) {
  event.preventDefault(); 

  
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const tipoSanguineo = document.getElementById("tipo-sanguineo").value;
  const email = document.getElementById("contato").value;
  const telefone = document.getElementById("telefone").value;

  
  if (idade < 18) {
    alert("Você precisa ser maior de 18 anos para se cadastrar como doador.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }
  const mensagemSucesso = document.getElementById("mensagem-sucesso");
  mensagemSucesso.style.display = "block";
  mensagemSucesso.innerHTML = `<p>Cadastro realizado com sucesso, ${nome}! Obrigado por ser um doador.</p>`;

  document.getElementById("form-cadastro").reset();
}
