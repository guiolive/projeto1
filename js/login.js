const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.Login_form');

// Valida se a pessoa digitou ao menos 2 letras no nome e habilita/desabilita o botão
const validateInput = ({target}) => {
  if(target.value.length >= 2){
    button.removeAttribute('disabled')
    return;
    }
    button.setAttribute('disabled', ''); // perguntar ****
  }

  const handleSubmit = (event) => {
    event.prevenDefault(); // previne o comportamento do navegador de recarregar a página.
    
    localStorage.setItem('player', input.value); // para salvar o que foi digitado no navegador
    window.location = 'pages/game.html'

  }

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);