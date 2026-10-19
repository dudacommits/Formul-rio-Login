const card = document.querySelector('.card');
const esquerda = document.querySelector('#btn-facalogin');
const direita = document.querySelector('#btn-facadastro');
const formCadastro = document.querySelector('.form-cadastro');
const btnCadastrar = document.querySelector('#btn-cadastrar');
const janelaCadastro = document.querySelector('.cadastrado');
const btnLogar = document.querySelector('#btn-logar');
let usuarios = [];


esquerda.addEventListener('click', () => {
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
});

direita.addEventListener('click', () => {
    card.classList.remove('loginActive');
    card.classList.add('cadastroActive');
});

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    cadastrarUsuario();
});

function cadastrarUsuario() {
    let nomeCadastro = document.querySelector('#nome-cadastro').value;
    let emailCadastro = document.querySelector('#email-cadastro').value;
    let passwordCadastro = document.querySelector('#password-cadastro').value;
    let confirmPasswordCadastro = document.querySelector('#confirm-password-cadastro-confirm').value;   
    
    if (confirmPasswordCadastro !== passwordCadastro) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    let contaEncontrada = usuarios.find((usuario) => {
        return usuario.email === emailCadastro;
    });

    if (contaEncontrada) {
        alert('Esse e-mail já foi cadastrado!');
        document.querySelector('#email-cadastro').value = '';
    return;
    }

    let usuario = {
        nome: nomeCadastro,
        email: emailCadastro,
        senha: passwordCadastro
    };

    usuarios.push(usuario);

    janelaCadastro.classList.remove('hide')

    console.log('Usuários cadastrados:', usuarios);
}

btnLogar.addEventListener('click', () => {
    janelaCadastro.classList.add('hide')
    card.classList.remove('cadastroActive');
    card.classList.add('loginActive');
});