let notas = [];
let filmes = document.getElementById("filmes");
let nota = document.getElementById("nota");
let buttonAdiciona = document.getElementById("buttonMedia");
let buttonMedia = document.getElementById("buttonMedia");
let buttonNotasDadas = document.getElementById("buttonNotasDadas");

buttonAdiciona.addEventListener(onclick="adicionarNota()");
buttonMedia.addEventListener(onclick="calcularMedia()");
buttonNotasDadas.addEventListener(onclick="NotasDadas()");


// função que irá adicionar a nota aos filmes e exibir o elert que a nota foi adicionada
function adicionarNota() {
    filmeSelecionado = filmes.value;
    notaSelecionada = parseInt(nota.value);

    if (notas[filmeSelecionado]) {
        // Se já existir uma lista de notas para o filme, adiciona a nova nota a ela
        notas[filmeSelecionado].push(notaSelecionada);
    } else {
        // Caso contrário, cria uma nova lista de notas para o filme e adiciona a nota inicial
        notas[filmeSelecionado] = [notaSelecionada];
    }

    alert(`Nota adicionada, a nota para o filme ${filmeSelecionado} foi: ${notaSelecionada}`)
}


// função para calcular a média do filme
function calcularMedia() {
    // Obtém o valor selecionado no seletor de filmes
    filmeSelecionado = filmesMedia.value;

    var listaNotas = notas[filmeSelecionado]; // Obtém a lista de notas para o filme selecionado
    var media = 0;

    if (listaNotas) {
        // Se existirem notas para o filme, calcula a média
        var soma = listaNotas.reduce(function (a, b) {
            return a + b;
        });
        media = soma / listaNotas.length;
    }

    alert(`A média do filme ${filmeSelecionado} é: ${media.toFixed(1)}`);

}

// mostra as notas dadas para os filmes
function NotasDadas() {
    alert("Notas: " + notas[filmesMedia.value]);
}