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

//planos----------------------------------------------------------
$('div.planos-bottom').click(function(){
    alert("clicou");
})

//links-----------------------------------------------------------
$('ion-icon#instagram').click(function(){
    window.open("https://www.instagram.com/","_blank");
})

//Codigos de animação----------------------------------------------

$('div#testemunhos ul:eq(0)').css('opacity',0);
$('div#testemunhos ul:eq(1)').css('opacity',0);
$('div#testemunhos ul:eq(2)').css('opacity',0);

$('section#domingo-perfeito').waypoint(function(direcao){
    if(direcao == "down"){

        $("div.folha1").removeClass('animate__animated animate__fadeOutUp')
        $("div.folha3").removeClass('animate__animated animate__fadeOutUp')
        $("div.camarao").removeClass('animate__animated animate__fadeOutUp animate__slow')
        $("div.tomate").removeClass('animate__animated animate__fadeOutUp animate__slow')
        $("div.queijo").removeClass('animate__animated animate__fadeOutUp animate__slower')
        $("div.folha2").removeClass('animate__animated animate__fadeOutUp animate__slower')

       $("div.folha1").addClass('animate__animated animate__fadeInUp')
       $("div.folha3").addClass('animate__animated animate__fadeInUp')
       $("div.camarao").addClass('animate__animated animate__fadeInUp animate__slow')
       $("div.tomate").addClass('animate__animated animate__fadeInUp animate__slow')
       $("div.queijo").addClass('animate__animated animate__fadeInUp animate__slowr')
       $("div.folha2").addClass('animate__animated animate__fadeInUp animate__slowr')
    }   
    if(direcao == "up"){
        $("div.folha1").addClass('animate__animated animate__fadeOutUp')
        $("div.folha3").addClass('animate__animated animate__fadeOutUp')
        $("div.camarao").addClass('animate__animated animate__fadeOutUp animate__slow')
        $("div.tomate").addClass('animate__animated animate__fadeOutUp animate__slow')
        $("div.queijo").addClass('animate__animated animate__fadeOutUp animate__slower')
        $("div.folha2").addClass('animate__animated animate__fadeOutUp animate__slower')
    }
},{
    offset: '300px;'
})

$('section#pizza').waypoint(function(direcao){
    if(direcao == "down"){

        $('section#pizza p').removeClass('animate__animated animate__fadeOutUp')
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeOutUp animate__slow')

        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
     }   
     if(direcao == "up"){
        $('section#pizza p').addClass('animate__animated animate__fadeOutUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeOutUp animate__slow')
     }
},{
    offset: "400px;"
})

$('section#testemunho').waypoint(function(direcao){
    if(direcao == "down"){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower')
    }   
     if(direcao == "up"){
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower')
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower')
     }
},{
    offset: "500px;"
})

$('div#transicao-testemunho-plano').waypoint(function(direcao){
    if(direcao == "down"){

        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow')

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow')
    }   
     else{
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow')
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slow')
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow')
     }
},{
    offset: "500px;"
})

$('section#plano-principal').waypoint(function(direcao){
    if(direcao == "down"){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow')
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow')
    }   
     else{
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow')
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow')
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow')
     }
},{
    offset: "500px;"
})

$('footer').waypoint(function(direcao){
    if(direcao == "down"){
        $('footer div#mapa').addClass('animate__animated animate__fadeIn')
        $('footer div#info').addClass('animate__animated animate__fadeIn')
        $('footer div#pizza-rodape').addClass('animate__animated animate__fadeIn')
    }
    
    else{
        $('footer div#mapa').removeClass('animate__animated animate__fadeIn')
        $('footer div#info').removeClass('animate__animated animate__fadeIn')
        $('footer div#pizza-rodape').removeClass('animate__animated animate__fadeIn')
    }
},{
    offset: "500px;"
})