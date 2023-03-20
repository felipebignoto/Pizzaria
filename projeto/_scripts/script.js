var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunho div#testemunho-centro').width();

$('div#testemunho').css('width',limite*-1);




$('div#testemunho-direita').click(function(){
    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao = posicao_atual - view_largura;

    if(limite < (posicao_atual - view_largura)){
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if(limite > (nova_posicao - view_largura)){
        $('div#testemunho-direita ion-icon').css('opacity',0.5);
        $('div#testemunho-direita ion-icon').css('cursor','not-allowed');
    }

    $('div#testemunho-esquerda ion-icon').css('opacity',1);
    $('div#testemunho-esquerda ion-icon').css('cursor','pointer');
    
})

$('div#testemunho-esquerda').click(function(){
    posicao_atual = $('div#testemunhos').position().left;

    if(posicao_atual + view_largura <= 0){
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if(nova_posicao == 0){
        $('div#testemunho-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunho-esquerda ion-icon').css('cursor','not-allowed');
    }

    $('div#testemunho-direita ion-icon').css('opacity',1);
    $('div#testemunho-direita ion-icon').css('cursor','pointer');
})

//planos

$('div.planos-bottom').click(function(){
    alert("clicou");
})