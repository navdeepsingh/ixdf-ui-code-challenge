
# Welcome to the IxDF UI Front-End Code Challenge!

The main goal of this challenge is to get a sense of your coding style and choices.

The code challenge does not involve any exotic or cutting-edge technologies, tools, etc., and that’s the point.
We’d like to focus on your coding style and not get distracted.

On that note, we’re also not looking for "rights and wrongs" and there are no "trick parts" in this challenge.
We would merely like to get a more profound impression of how you write code.

That also will allow us to have a more fruitful and constructive discussion at the technical interview.
We’re not fans of white-boarding at interviews, so we’d much rather have some concrete code to talk about.
We think that makes the interview much more enjoyable and productive.

<p>To do:</p>
<ol>
    <li>Implement a <a href="https://zpl.io/V0KlGRQ" target="_blank">LessonNavigator</a></li>
    <li>Implement a <a href="https://zpl.io/amQKr36" target="_blank">grid</a></li>
    <li>Implement a <a href="https://zpl.io/VKrw1gW" target="_blank">basic page layout</a></li>
    <li>Implement a breadcrumbs</li>
    <li>Implement a simple quiz answer functionality that will update a state of the LessonNavigator</li>
    <li>Share your awesome solution with us 🦄</li>
</ol>


## Your challenge/task

Imagine you’re our new front-stack developer 🦄 and you’ve just got a feature request from our design team which goes like this:

> Hey Devs!
>
> We’ve just created a new design for the Lesson page, which includes a new LessonNavigator component.
> Please check our new design files on zeplin:
> - https://zpl.io/V107nwQ (the Full project, where you can find detailed specs for components)
> - https://zpl.io/VKrw1gW (the Lesson page you need to implement)
>
>
> Zeplin credentials:
>  - Username: `ixdf_unicorn`
>  - Password: `unicorn`


## Technical notes

Basic code-styling rules you can find at `.prettierrc` and `.editorconfig`.

A list of target browsers you can find at `package.json` (we use browserlist).

To start the development server, just run `npm start`.

**JS**: You are free to use any popular framework or lib for the challenge – preferably (order matters): vanilla > web-components (with LitElement or without it) > Vue.js.
We recommend that you use vanilla HTML and JS so you can focus on what we will evaluate. 

**CSS**: Tailwind CSS or custom CSS/PostCSS code (less PostCSS plugins — better).

Also, we will be glad if you follow our [JS conventions](https://handbook.interaction-design.org/library/front-end/conventions--js.html) and [Clean code principles](https://handbook.interaction-design.org/library/front-end/clean-code-js.html), but it’s just a recommendation because we value your time.


## What we will evaluate

At the IxDF, we have 2 distinct front-end roles:
 1. **UI developer** (CSS, animations, semantic, a11ty, rendering performance, presentational JS, SVG)
 2. **Application/JavaScript** developer (JS Frameworks, routing, state management, PWA)

**This is a UI developer challenge, so our evaluation will be focused on the UI.**
We recommend that you invest your time in writing HTML and CSS.
There is no requirement to build SPA – you need to build a static HTML page, and copy-pasting in HTML code is OK in this context.

To simplify the challenge and save your time, you don’t need to use any back end (e.g., to submit a quiz answer or fetch a list of lessons and sub-lessons).
So, just feel free to copy the lesson item text from our design files into the template file.

We will evaluate the following:
 - Maintainability and readability of the code
 - Performance of the page (animations, bundle size, load time)
 - Accessibility and semantics of main components (LessonNavigator, Breadcrumbs) and the page as a whole
 - Automated tests (optional – you can earn some extra points)

You are of course more than welcome to ask questions about this challenge if you’re in doubt about something or need more background information!

We’re really looking forward to diving into every line of your code with hungry curiosity, an open mind and high expectations.
The objective of this code challenge is to give you a chance to showcase your style and, yes, impress us.
Thus, your goal should not merely be to get your code to work but also to show us what we can expect of you when working together.
We’ll need to be confident that you can consistently impress us — just like we aim to impress you, both in terms of technical excellence as well as teamwork.


## What we will NOT evaluate

 - Generic boilerplate code
 - Webpack config (right now it’s simple and development-focused, so there’s no need to create production builds using webpack)


## How to submit your solution

Please submit your solution in a git repository (we ❤️ atomic commits).
Ideally, you should make an initial commit with the files of this code challenge and then build your solution upon that.

You can submit your solution in 2 ways:
 1. Use a **private** GitHub repository and send us an invitation for [IxDF-bot](https://github.com/ixdf-bot). **Preferable way**.
 2. Use a **public** GitHub repository and send us the link.
 
PS: We at the IxDF would greatly appreciate it if you could kindly give us some feedback about this code challenge. :)

🦄
