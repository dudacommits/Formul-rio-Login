const card = document.querySelector('.card');
const esquerda = document.querySelector('#btn-facalogin');
const direita = document.querySelector('#btn-facadastro');
const formCadastro = document.querySelector('.form-cadastro');
const btnCadastrar = document.querySelector('#btn-cadastrar');

esquerda.addEventListener('click', () => {
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
});

direita.addEventListener('click', () => {
    card.classList.remove('loginActive');
    card.classList.add('cadastroActive');
});

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o envio do formulário 
});
