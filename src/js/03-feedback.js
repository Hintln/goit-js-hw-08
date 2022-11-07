import throttle from "lodash.throttle";


const STORAGE_KEY = "feedback-form-state";
const formData = {};
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormImput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);
 

function onFormImput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
 
};

