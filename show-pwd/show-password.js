(function() {

    // Recuperar os elementos
    let pwd = document.getElementById('pwd'); // Obtém a senha
    let chk = document.getElementById('chk'); // Obtém checkbox

    // Adicionar um ouvinte de evento
    chk.addEventListener('change', showPwd);

    // Função resposável por exibir a senha
    function showPwd(e) {
        let target = e.target || e.srcElements; // IE8<
        try { // Tente esse bloco de código
            if(target.checked) {
                pwd.type = 'text'; //vExibe a senha
            } else { // Se não
                pwd.type = 'password'; // Oculta a senha
            }
        } catch {
            alert('Não foi possível trocar o tipo'); // Tratando o erro
        }
    }

}());