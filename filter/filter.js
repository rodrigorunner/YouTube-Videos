(function() {

    // Objeto com novo de Freelancers
    let people = [
        {
            name: 'Rodrigo',
            rate: 88
        },
        {
            name: 'Thales',
            rate: 64
        },
        {
            name: 'Cadu',
            rate: 69
        },
        {
            name: 'Karla',
            rate: 55
        },
        {
            name: 'Ketlin',
            rate: 89
        },
        {
            name: 'Dude',
            rate: 45
        }
    ];

    // Função resposável por filtrar as correspondências
    function priceRange(person) {
        return (person.rate >= 65) && (person.rate <= 90);
    }

    let results = []; // Um novo array, para armazenar as novas correspondências
    results = people.filter(priceRange); // filter() chama priceRange()

    let $tableBody = $('<tbody></tbody>'); // Cria um corpo de uma tabela
    // ITERAR PELO CÓDIGO
    for(let i = 0; i < results.length; i++) {
        let person = results[i]; // Armazena pessoa atual
        let $row = $('<tr></tr>'); // Criar linha na tabela
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $tableBody.append($row);
    }
    $('thead').after($tableBody);

}());