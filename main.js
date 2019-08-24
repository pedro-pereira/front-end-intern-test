// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
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

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
	
	const emailValue = emailInput.value;
	const emailLength = emailValue.length;
	
	const messageValue = messageInput.value;
	const messageLength = messageValue.length;
	
	// Verifica se o usuário informou somente espaços em branco.
	if(nameValue.trim().length <= 3) {
		window.alert('O campo "nome" precisa ter no mínimo 3 caracteres.');
	}
	
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(emailValue.trim().length <= 3) {
		window.alert('O campo "email" precisa ter no mínimo 3 caracteres.');
	} else {
		if (!filter.test(emailValue)) {
			window.alert('O campo "email" deve estar no fomrato "email@example.com".');
		}
	}
	
	// Verifica se o usuário informou somente espaços em branco.
	if(messageValue.trim().length <= 1) {
		window.alert('O campo "mensagem" precisa estar preenchido.');
	}

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
    // window.alert(`Botão enviar clicado! Conteúdo do campo nome: ${nameValue} (${nameLength} caracteres)`);

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
