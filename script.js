
//criar a variavel do jogo e pedir para o canvas trabalhar em 2d

var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');

var fundoimg = new Image()
var personagem = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 0;//Indicador da posição atual do personagem
var NUM_POSICOES = 6;//Quantidade de imagens que compõem o movimento
var gravidade = 2
function fundo(){
  fundoimg.src = "./img/Cenário.png";
  ctx.drawImage(fundoimg, 0, 0);  
}
//tela de desenho
function clearScream(){
  ctx.fillStyle = 'black' ;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fundo();
}
class Jogador{
  constructor(){
    this.position = {
      x:100,
      y:100
    }
    this.velocidade = {
      x:0,
      y:0
    }
    this.width = 30
    this.height = 30
  }
  desenhar(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(){
    this.desenhar()
    this.position.y += this.velocidade.y
    this.velocidade.y += gravidade
    if (this.position.y + this.height + this.velocidade.y <= canvas.height)
    this.velocidade.y += gravidade
    else this.velocidade.y = 0
    }
}
var jogador = new Jogador()

addEventListener('keydown', () => {
  console.log('keydown')
})

//game loop
function drawGame() {
  clearScream();
  setTimeout(drawGame, 10000/ 60);
  ctx.drawImage(fundoimg, 0, 0);
  requestAnimationFrame(drawGame)
  jogador.update()
};
drawGame();

