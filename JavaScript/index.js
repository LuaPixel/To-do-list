const nomeElementos = "listaDeTarefas";

function novaTarefa() {
    let input = document.getElementById("input");

    // Validação
    if (!input.value) {
        alert("Digite algo para inserir em sua lista");
    } else {
        // Incrementar
        let values = JSON.parse(localStorage.getItem(nomeElementos) || "[]");
        
        values.push({
            name: input.value
        });

        // Salvar no localStorage
        localStorage.setItem(nomeElementos, JSON.stringify(values));
        
        // Limpar o campo de input
        input.value = "";

        // Atualizar a exibição da lista
        showValues();
    }
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(nomeElementos) || "[]");
    let listar = document.getElementById("list");
    listar.innerHTML = "";

    // Exibir a lista com botões para remover
    for (let i = 0; i < values.length; i++) {
        listar.innerHTML += `
            <li>
                ${values[i]["name"]}
                <button onclick="removerItem(${i})" class="remove">Remover</button>
            </li>`;
    }
}

function removerItem(index) {
    let values = JSON.parse(localStorage.getItem(nomeElementos) || "[]");

    // Remover o item do array pelo índice
    values.splice(index, 1);
    
    // Atualizar o localStorage
    localStorage.setItem(nomeElementos, JSON.stringify(values));

    // Atualizar a exibição da lista
    showValues();
}

// Exibir os itens quando a página carregar
showValues();
