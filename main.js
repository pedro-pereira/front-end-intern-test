// Adicionamos nosso código dentro de uma função anônima para evitar variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    
	// A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
	const emailValue = emailInput.value;
	const messageValue = messageInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
	const emailLength = emailValue.length;
	const messageLength = messageValue.length;
	
	// Varíavel para as mensagens de validação dos inputs.
	var result = "";
	
	// Verifica se o usuário informou somente espaços em branco ou menos de 3 caracteres.
	if(nameValue.trim().length < 3) {
		result = result.concat(`O campo "nome" precisa ter no mínimo 3 caracteres. \n`);
	}
	
	// Verifica se o usuário informou somente espaços em branco ou menos de 3 caracteres.
	if(emailValue.trim().length < 3) {
		result = result.concat(`O campo "email" precisa ter no mínimo 3 caracteres. \n`);
	} else {
		// Expressão regular para validar o formato do texto digitado no campo de email.
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(emailValue)) {
			result = result.concat(`O campo "email" deve estar no fomrato "email@example.com". \n`);
		}
	}
	
	// Verifica se o usuário informou somente espaços em branco.
	if(messageValue.trim().length === 0) {
		result = result.concat(`O campo "mensagem" precisa estar preenchido. \n`);
	}
	
	if(result.length < 1) {
		result = result.concat(`Botão enviar clicado! \n`)
		result = result.concat(`Conteúdo do campo nome: ${nameValue} \n`);
		result = result.concat(`Conteúdo do campo email: ${emailValue} \n`);
		result = result.concat(`Conteúdo do campo mensagem: ${messageValue} \n`);
	}

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
    window.alert(result);

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
