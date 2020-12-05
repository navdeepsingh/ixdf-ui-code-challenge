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
});

// Toggle Lessons
const accordionHeaders = document.querySelectorAll('[data-lesson-navigator-header]');
accordionHeaders.forEach((accordionHeader) => {
    let target = accordionHeader.parentElement.nextElementSibling;
    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.hidden = expanded;
    };
});
