var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunha div#testemunho-centro').width();

$('div#testemunho').css('width',limite*-1);

$('div#teste').html(limite);
