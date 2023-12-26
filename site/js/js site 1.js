'use script';

const wrapper = document.getElementById('wrapper');
const form = document.querySelector('form');
const nom = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.querySelector('.error')


function nouvelleInterface(nom, email) {
    wrapper.innerHTML = `
    <h3>Bienvenue ${nom}</h3>
    <h4>Email enregistré : ${email}</h4>
    <button class="favorite styled" type="button"><a href="site2.0.html">Découvrir le site</a></button>
    `
}

function validateMDP(password){
    const Reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}/;

    if (Reg.test(password)) {
    error.textContent = ''
    return true
    } else {
    error.textContent = 'Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial.'
    error.style.color = 'red'
    return false
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (validateMDP(password.value)) {
        form.remove()
        nouvelleInterface(nom.value, email.value)
    }
})
