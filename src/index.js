import css from './css/index.css';

console.log('Project Loaded!');

import {validationRadios, toggleA11ty, toggleAccordionItem, closeLastItem} from './utilities';

// Define DOM Elements
const buttonShowNavigator = document.querySelector('[data-show-lesson-navigator]');
const buttonHideNavigator = document.querySelector('[data-hide-lesson-navigator]');
const lessonNavigator = document.querySelector('[data-lesson-navigator]');
const lessonNavigatorButtons = lessonNavigator.querySelectorAll('button');
const activeSubLesson = document.querySelector('aside ul li ul li.active');
const mainContent = document.querySelector('[data-main-content');
const hamBurgerMenu = document.querySelector('[data-hamburger-menu]');
const mobileMenu = document.querySelector('header nav');
const quizElements = [
    {radio: 'questionOptions1', submit: 'submit1'},
    {radio: 'questionOptions2', submit: 'submit2'},
];

// Show Lesson Navigator
buttonShowNavigator.addEventListener('click', () => {
    lessonNavigator.classList.add('show');
    buttonShowNavigator.classList.remove('show');
    mainContent.classList.remove('hidden-navigator');
    // Add LessonNavigator to A11ty tree
    toggleA11ty(lessonNavigatorButtons, false);
});

// Hide Lesson Navigator
buttonHideNavigator.addEventListener('click', () => {
    lessonNavigator.classList.remove('show');
    lessonNavigator.classList.add('hide');
    buttonShowNavigator.classList.add('show');
    mainContent.classList.add('hidden-navigator');
    // Remove LessonNavigator Buttons from A11ty tree
    toggleA11ty(lessonNavigatorButtons);
});

// Toggle Lessons
var lastClickedLesson = null;
const accordionList = document.querySelectorAll('[data-lesson-navigator-list]');
accordionList.forEach((accordionListItem) => {
    accordionListItem.onclick = () => {
        // Hide last opened Accordion Lesson Item
        // Also if same item **not** clicked again
        if (lastClickedLesson && lastClickedLesson !== accordionListItem) {
            closeLastItem(lastClickedLesson);
        }

        // Toggle Show/Hide
        toggleAccordionItem(accordionListItem);

        // Track last clicked lesson
        lastClickedLesson = accordionListItem;
    };
});

// Quiz questions validation
quizElements.map((quizElement) => {
    validationRadios(quizElement.radio, quizElement.submit, quizElements.length, activeSubLesson);
});

// Mobile Menu
hamBurgerMenu.onclick = (e) => {
    e.preventDefault();
    let expanded = hamBurgerMenu.getAttribute('aria-expanded') === 'true' || false;
    hamBurgerMenu.setAttribute('aria-expanded', !expanded);
    if (!expanded) mobileMenu.classList.add('show');
    else mobileMenu.classList.remove('show');
};
