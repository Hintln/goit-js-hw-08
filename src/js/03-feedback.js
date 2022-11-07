import throttle from "lodash.throttle";


const STORAGE_KEY = "feedback-form-state";
const formData = {};
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormImput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);
addTextToInput();

function onFormImput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {

    e.preventDefault();
    if (localStorage.getItem(STORAGE_KEY)) {
        console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    }

    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};


function addTextToInput() {
    if (!JSON.parse(localStorage.getItem(STORAGE_KEY))) {
        return
    };
};