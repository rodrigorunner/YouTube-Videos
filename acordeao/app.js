$(function() {

    $('.accordion').on('click', '.accordion-control', function(e) {

        e.preventDefault(); // Previnir o comportamento default do browser
        $(this) // Palavra chave, selecionando o elemento clicado 
            .next('.accordion-panel') // Selecione o próximo elemento
            .not(':animated') // Se ele não estiver atualmente sendo animado
            .slideToggle(); // Cause um efeito de slide e exibe ou oculta
    });

});