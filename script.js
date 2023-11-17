let player = 'X';
let vencedor;
var matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function verificarVitoria() {
    if (
      (matriz[0][0] && matriz[0][0] === matriz[0][1] && matriz[0][0] === matriz[0][2]) ||
      (matriz[1][0] && matriz[1][0] === matriz[1][1] && matriz[1][0] === matriz[1][2]) ||
      (matriz[2][0] && matriz[2][0] === matriz[2][1] && matriz[2][0] === matriz[2][2]) ||
      (matriz[0][0] && matriz[0][0] === matriz[1][0] && matriz[0][0] === matriz[2][0]) ||
      (matriz[0][1] && matriz[0][1] === matriz[1][1] && matriz[0][1] === matriz[2][1]) ||
      (matriz[0][2] && matriz[0][2] === matriz[1][2] && matriz[0][2] === matriz[2][2]) ||
      (matriz[0][0] && matriz[0][0] === matriz[1][1] && matriz[0][0] === matriz[2][2]) ||
      (matriz[0][2] && matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0])
    ) {
      alert("Combinação vencedora encontrada! O vencedor é "+ vencedor);
    }
}

function play(space){
    if(space.innerHTML == ''){
        space.innerHTML = player; //adiciona o X ou O ao botão

        //adiciona o valor correto dentro da matriz
        const linha = parseInt(space.getAttribute('data-linha'));
        const coluna = parseInt(space.getAttribute('data-coluna'));
        matriz[linha][coluna] = player;

        vencedor = player; //define o vencedor, pois a variável 'player' estava mostrando o vencedor errado devido a atualização

        //alterna o jogador da vez
        if(player == 'X'){
            player ='O';
        }else{
            player = 'X';
        }

        verificarVitoria();
    }    
}
