var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunho div#testemunho-centro').width();

$('div#testemunho').css('width',limite*-1);

$('div#teste').html(limite);


$('div#testemunho-direita').click(function(){
    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao = posicao_atual - view_largura;

    $('div#testemunhos').animate({left:nova_posicao},1000);
})

$('div#testemunho-esquerda').click(function(){
    $('div#teste').html("Clicou na esquerda");
})