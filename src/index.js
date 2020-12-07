import css from './css/index.css';

console.log('Project Loaded!');

// Show/Hide Lesson Navigator
const buttonShowNavigator = document.querySelector('[data-show-lesson-navigator]');
const buttonHideNavigator = document.querySelector('[data-hide-lesson-navigator]');
const lessonNavigator = document.querySelector('[data-lesson-navigator]');

buttonShowNavigator.addEventListener('click', () => {
    lessonNavigator.classList.add('show');
});

buttonHideNavigator.addEventListener('click', () => {
    lessonNavigator.classList.remove('show');
    lessonNavigator.classList.add('hide');
});

// Toggle Lessons
const accordionHeaders = document.querySelectorAll('[data-lesson-navigator-header]');
accordionHeaders.forEach((accordionHeader) => {
    let target = accordionHeader.parentElement.nextElementSibling;
    let accordionListItem = accordionHeader.parentElement.parentElement;
    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
        if (!expanded) accordionListItem.classList.add('active');
        else accordionListItem.classList.remove('active');
    };
});

// Quiz questions validation
const activeSubLesson = document.querySelector('aside ul li ul li.active');

var totalQuestionSubmit = 0;

const quizElements = [
    {radio: 'questionOptions1', submit: 'submit1'},
    {radio: 'questionOptions2', submit: 'submit2'},
];

quizElements.map((quizElement) => {
    validationRadios(quizElement.radio, quizElement.submit);
});

function validationRadios(radios, submitButton) {
    const button = document.getElementById(submitButton);
    var radios = document.getElementsByName(radios);
    radios.forEach((radio) => {
        radio.onchange = () => {
            button.removeAttribute('disabled');
        };
    });
    // Submit Button
    button.onclick = () => {
        totalQuestionSubmit++;
        button.classList.add('submitted');
        button.innerText = 'Submitted';
        if (totalQuestionSubmit === quizElements.length) {
            activeSubLesson.firstElementChild.firstElementChild.focus();
            activeSubLesson.classList.add('completed');
        }
    };
}
