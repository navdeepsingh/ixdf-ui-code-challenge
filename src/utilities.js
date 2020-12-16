// Global state
var totalQuestionSubmit = 0;

/**
 *
 * @param {*} radios : String
 * @param {*} submitButton : String
 * @param {*} totalQuestions : Number
 * @param {*} activeSubLesson : Object*
 * return void;
 */
export function validationRadios(radios, submitButton, totalQuestions, activeSubLesson) {
    const button = document.getElementById(submitButton);
    var radios = document.getElementsByName(radios);
    radios.forEach((radio) => {
        radio.onchange = () => {
            button.removeAttribute('disabled');
        };
    });
    // Submit Button
    button.onclick = () => {
        totalQuestionSubmit = totalQuestionSubmit + 1;
        button.classList.add('submitted');
        button.innerText = 'Submitted';
        console.log(totalQuestionSubmit, totalQuestions);
        if (totalQuestionSubmit === totalQuestions) {
            // Update State of Active Lesson
            console.log(activeSubLesson);
            activeSubLesson.classList.add('completed');
            activeSubLesson.firstElementChild.firstElementChild.focus();
        }
    };
}

/**
 * @param {*} navigatorButtons : ElementNodes
 * @param {*} set : Boolean
 * return void;
 */
export function toggleA11ty(navigatorButtons, set = true) {
    navigatorButtons.forEach((button) => {
        if (set) {
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
export function toggleAccordionItem(navigatorItem) {
    let accordionButton = navigatorItem.firstElementChild.firstElementChild;
    let target = navigatorItem.firstElementChild.nextElementSibling;

    let expanded = accordionButton.getAttribute('aria-expanded') === 'true' || false;
    accordionButton.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
    if (!expanded) navigatorItem.classList.add('active');
    else navigatorItem.classList.remove('active');
}

export function closeLastItem(navigatorItem) {
    let accordionButton = navigatorItem.firstElementChild.firstElementChild;
    let target = navigatorItem.firstElementChild.nextElementSibling;

    accordionButton.setAttribute('aria-expanded', false);
    target.hidden = true;
    navigatorItem.classList.remove('active');
}
