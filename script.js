
  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const valor = botao.textContent;

      if (valor === 'CE') {
        // Limpa o visor
        expressao = '';
        visor.value = '';
      } else if (valor === 'C') {
        // Apaga o último caractere
        expressao = expressao.slice(0, -1);
        visor.value = expressao;
      } else if (valor === '=') {
        try {
          // Avalia a expressão
          const resultado = eval(expressao.replace('x', '*').replace('÷', '/').replace(',', '.'));
          visor.value = resultado;
          expressao = resultado.toString();
        } catch (e) {
          visor.value = 'Erro';
          expressao = '';
        }
      } else if (valor === '+/-') {
        // Inverte o sinal
        if (expressao) {
          if (expressao.startsWith('-')) {
            expressao = expressao.substring(1);
          } else {
            expressao = '-' + expressao;
          }
          visor.value = expressao;
        }
      } else {
        // Adiciona o valor clicado à expressão
        expressao += valor;
        visor.value = expressao;
      }
    });
  });