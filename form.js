// redirect to home page if logged in
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            location.replace('/');
        }
    }
}
const loader = document.querySelector('.loader');
// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const username = document.querySelector('#username') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tnc = document.querySelector('#tnc') || null;
const notify = document.querySelector('#notify') || null;

submitBtn.addEventListener('click', () => {
    if (name != null) { // signup page
        if(!name.value.length){
            showAlert('enter your name');
            name.classList.add('warn');
        } else if(name.value.length < 3){
            name.classList.add('warn');
            showAlert('name must be 3 letters long');
        } else if(username.value.length < 3){
            username.classList.add('warn');
            showAlert('Username should be at least 3 letters');
        } else if(!email.value.length){
            email.classList.add('warn');
            showAlert('enter your email');
        } else if(password.value.length < 8){
            password.classList.add('warn');
            showAlert('password should be 8 characters long');
        }else if(!number.value.length){
            number.classList.add('warn');
            showAlert('enter your phone number');
        }else if(!Number(number.value) || Number(number.value.length) != 11){
            number.classList.add('warn');
            showAlert('Please enter a valid phone number');
        } else if (!tnc.checked){
            showAlert('You must agree to our terms and conditions');
        } else{
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                username: username.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tnc: tnc.checked,
                notify: notify.checked,
                seller: false
            })
        }
    } else {
        // login page
        if (!email.value.length || !password.value.length) {
            showAlert('fill in log in details');
        } else {
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value
            })
        }
    }
})

