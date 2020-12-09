import css from './css/index.css';

console.log('Project Loaded!');

// Define DOM Elements
const buttonShowNavigator = document.querySelector('[data-show-lesson-navigator]');
const buttonHideNavigator = document.querySelector('[data-hide-lesson-navigator]');
const lessonNavigator = document.querySelector('[data-lesson-navigator]');
const lessonNavigatorButtons = lessonNavigator.querySelectorAll('button');
const activeSubLesson = document.querySelector('aside ul li ul li.active');
const mainContent = document.querySelector('[data-main-content');
const hamBurgerMenu = document.querySelector('[data-hamburger-menu]');
const mobileMenu = document.querySelector('header nav');

// Show Lesson Navigator
buttonShowNavigator.addEventListener('click', () => {
    lessonNavigator.classList.add('show');
    buttonShowNavigator.classList.remove('show');
    mainContent.classList.remove('hidden-navigator');
    // Add LessonNavigator to A11ty tree
    toggleA11ty(false);
});

// Hide Lesson Navigator
buttonHideNavigator.addEventListener('click', () => {
    lessonNavigator.classList.remove('show');
    lessonNavigator.classList.add('hide');
    buttonShowNavigator.classList.add('show');
    mainContent.classList.add('hidden-navigator');
    // Remove LessonNavigator Buttons from A11ty tree
    toggleA11ty();
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
var totalQuestionSubmit = 0;

const quizElements = [
    {radio: 'questionOptions1', submit: 'submit1'},
    {radio: 'questionOptions2', submit: 'submit2'},
];

quizElements.map((quizElement) => {
    validationRadios(quizElement.radio, quizElement.submit);
});

// Mobile Menu
hamBurgerMenu.onclick = (e) => {
    e.preventDefault();
    let expanded = hamBurgerMenu.getAttribute('aria-expanded') === 'true' || false;
    hamBurgerMenu.setAttribute('aria-expanded', !expanded);
    if (!expanded) mobileMenu.classList.add('show');
    else mobileMenu.classList.remove('show');
};

/**
 *
 * @param {*} radios : String
 * @param {*} submitButton : String
 * return void;
 */
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
            // Update State of Active Lesson
            activeSubLesson.firstElementChild.firstElementChild.focus();
            activeSubLesson.classList.add('completed');
        }
    };
}

/**
 *
 * @param {*} $set : Boolean
 * return void;
 */
function toggleA11ty($set = true) {
    lessonNavigatorButtons.forEach((button) => {
        if ($set) {
            button.setAttribute('tabindex', -1);
        } else {
            button.removeAttribute('tabindex');
        }
    });
}

/**
 *
 * @param {*} navigatorItem Node
 * return void
 */
function toggleAccordionItem(navigatorItem) {
    let accordionButton = navigatorItem.firstElementChild.firstElementChild;
    let target = navigatorItem.firstElementChild.nextElementSibling;

    let expanded = accordionButton.getAttribute('aria-expanded') === 'true' || false;
    accordionButton.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
    if (!expanded) navigatorItem.classList.add('active');
    else navigatorItem.classList.remove('active');
}

function closeLastItem(navigatorItem) {
    let accordionButton = navigatorItem.firstElementChild.firstElementChild;
    let target = navigatorItem.firstElementChild.nextElementSibling;

    accordionButton.setAttribute('aria-expanded', false);
    target.hidden = true;
    navigatorItem.classList.remove('active');
}
