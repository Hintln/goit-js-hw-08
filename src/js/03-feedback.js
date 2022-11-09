import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state'
const userData = {
    'email' : '',
    'message' : ''
};


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onFormImput, 500));
refs.message.addEventListener('input', throttle(onFormImput, 500));

addTextToInput();


function onFormImput() {
    userData.email = refs.email.value;
    userData.message = refs.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(`e-mail: ${refs.email.value}, message: ${refs.message.value}`)
    e.target.reset()
    localStorage.removeItem(STORAGE_KEY)
};

function addTextToInput() {
    const saveData = localStorage.getItem(STORAGE_KEY)
    const parseData = JSON.parse(saveData)

    if (parseData) {
        refs.email.value = parseData.email || ''
        refs.message.value = parseData.message || ''
    }
}



// old version

  
// const STORAGE_KEY = "feedback-form-state";
// const formData = {};
// const feedbackForm = document.querySelector('.feedback-form');

// feedbackForm.addEventListener('input', throttle(onFormImput, 500));
// feedbackForm.addEventListener('submit', onFormSubmit);
// addTextToInput();

// function onFormImput(e) {
//     formData[e.target.name] = e.target.value;

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// function onFormSubmit(e) {

//     e.preventDefault();
//     if (localStorage.getItem(STORAGE_KEY)) {
//         console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
//     }

//     e.currentTarget.reset();

//     localStorage.removeItem(STORAGE_KEY);
// };

// function addTextToInput() {
//     if (!JSON.parse(localStorage.getItem(STORAGE_KEY))) {
//         return
//     };
//       if (JSON.parse(localStorage.getItem(STORAGE_KEY)).email) {
//         feedbackForm.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email
//     };
//     if (JSON.parse(localStorage.getItem(STORAGE_KEY)).message) {
//         feedbackForm.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message
//     };
// };

