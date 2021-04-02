import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = async (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if(shouldSendForm(target)) {;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username.value);
    urlencoded.append("email", email.value);
    urlencoded.append("password", password.value);

    const requestOptions: Object = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    let baseUrl = "http://localhost:3003/api/avanceClient"

    fetch(baseUrl , requestOptions )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error de catch', error));
    }
}

form.addEventListener('submit', submitEventFn);

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void =>{
  inputs.forEach(input =>{
    if(!input.value) showErrorMessage(input, 'Este campo não pode ficar vazio');
  })
}

const checkEmail = (input: HTMLInputElement):void => {
  if(!isEmail(input.value)) showErrorMessage(input, 'Email inváido');
}

const checkEqualPasswords = (password: HTMLInputElement, password2: HTMLInputElement): void => {
  if(password.value !== password2.value){
    showErrorMessage(password, 'Senhas são diferentes');
    showErrorMessage(password2, 'Senhas são diferentes');
  }
}

const hideErrorMessages = (form: HTMLFormElement): void =>{
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

const showErrorMessage = (input: HTMLInputElement, msg: string): void  => {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message' , ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

const shouldSendForm = (form: HTMLFormElement ): boolean => {
  let send = true;
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach(() => {
      send = false;
    });
  return send;
}

// showErrorMessage(username, 'MENSAGEM');
// hideErrorMessages(form);
