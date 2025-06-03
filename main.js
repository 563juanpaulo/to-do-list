function adicionarTarefa() {
    const input = document.getElementById('nova-tarefa');
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === '') {

        alert('Digite uma tarefa!');
        return;
    }
    const lista = document.getElementById('lista-tarefas');
    const novaLi = document.createElement('li');
    novaLi.innerHTML = tarefaTexto;

    lista.appendChild(novaLi);

    input.value = '';

    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerHTML = 'X';
    botaoExcluir.style, marginLeft = '10px';

    botaoExcluir.addEventListener('click', function () {
        lista.removeChild(novaLi);
    });

    novaLi.appendChild(botaoExcluir);
    lista.appendChild(novaLi);

    input.value = '';
};


