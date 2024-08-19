document.getElementById("sendBtn").addEventListener("click", function (event) {
    // Captura os valores dos campos de usuário e senha
    let usuario = document.getElementById("usu").value;
    let senha = document.getElementById("passW").value;
    let usuErro = document.getElementById("usu");
    let passWErro = document.getElementById("passW");
    let erroSenha = document.querySelector(".erroSenha");

    // Verifica se os campos estão vazios
    if (usuario.length == 0 || senha.length == 0) {
        alert("Você precisa preencher os campos solicitados.");
        erroSenha.style.display = "none";
        event.preventDefault(); // Impede o envio do formulário
    }

    // Verifica se as credenciais estão corretas
    if (usuario != "admin" || senha != "admin") {
        usuErro.style.border = "2px solid red"; // Adiciona borda vermelha ao campo de usuário
        passWErro.style.border = "2px solid red"; // Adiciona borda vermelha ao campo de senha
        erroSenha.style.display = "block"; // Exibe a mensagem de erro
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert("Acesso autorizado!");
        location.href = "https://produto.mercadolivre.com.br/MLB-1537459490-varal-em-aco-dobravel-20-metros-cabo-aco-encapado-_JM?variation=56831026753#reco_item_pos=9&reco_backend=machinalis-homes-pdp-boos&reco_backend_type=function&reco_client=home_navigation-recommendations&reco_id=f204047f-58b4-4b5e-9d9d-07cca66fdfd0&c_id=/home/navigation-recommendations/element&c_element_order=10&c_uid=e0823609-be92-4e7c-943a-dd778a6413b7";
        // O redirecionamento para a página home.html deve ocorrer aqui
    }
});

// Remover bordas vermelhas e mensagem de erro ao corrigir os campos
// Esse evento chamado "input", faz a ação pedida caso haja qualquer alteração no unput selecionado. 
document.getElementById("usu").addEventListener("input", function () {
    let usuErro = document.getElementById("usu"); // input de usuario
    let erroSenha = document.querySelector(".erroSenha");

    usuErro.style.border = ""; // Remove a borda vermelha
    erroSenha.style.display = "none"; // Esconde a mensagem de erro
});

document.getElementById("passW").addEventListener("input", function () {
    let passWErro = document.getElementById("passW"); // input de senha
    let erroSenha = document.querySelector(".erroSenha");

    passWErro.style.border = ""; // Remove a borda vermelha
    erroSenha.style.display = "none"; // Esconde a mensagem de erro
});
