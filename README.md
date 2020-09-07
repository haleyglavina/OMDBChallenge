//=================================//
## Considerations for this project //
//=================================//

Created by Haley Glavina for Shopify, 2020.

Thank you for taking a look at my project! Although the project requirements were my priority when completing this website, I kept some additional things in mind. These include accessibility, efficiency, and some things I enjoy. I will explain how I considered each of these in my code. 

## ACCESSIBILITY
- I used semantic HTML elements whenever possible (i.e. using ul, li, main, h1, h2, h3, p, form) to ensure screen readers can properly parse my HTML
- All images include alt properties
- The website is responsive and looks good at mobile, tablet, and desktop dimensions (so anybody with a screen can use it)
- Used high contrasting colours between text and background to ensure readability
- Having contrasting active and hover states for the form and button elements

## EFFICIENCY
- I chose to implement this project in React to render new movie components efficiently, as well as allow me to reuse code when creating each movie list item in the results and nomination sections. By abstracting the similar (but slightly different) movie types into one component, I reduced code and kept shared styling in a single scss file.
- Within Movie.js, an early return statement will produce the more-likely to be rendered Result type first, and prevents the need for a second condition to be checked if the Nominations type should be returned instead
- I used destructuring when handling prop parameters to reduce code
- Used React hooks and functional components rather than state and class components to reduce code and to easily use setter functions in child components

## THINGS I ENJOY
- I'm not a designer, but I still enjoy visual design and aesthetic. I went for an Old Hollywood kind of look by sticking with black and white, gold, and a bold serif font
- Using Sass over vanilla CSS. I really like using Sass, mainly for establishing global styles that can be reused as variables throughout my styling sheets. It makes the styling way easier to update. Nesting also helps logically separate sections of styling in an otherwise flat css file
- Using React over vanilla JS. Returning jsx rather than manual DOM manipulation is much easier, and it's more efficient to let React turn the virtual DOM into a real one rather than me doing that. I also really like the modularity that React enforces, and the code resuability of repeated components (especially anytime there's a dynamic list of elements like in the movie results and nominations).
- Flexbox. It's the best, I can't live without it. It's especially handy for making things responsive.
- I saved the nominations list to local storage instead of session storage so that it would survive tab closures.

//===============================================//
## create-react-app automated README information //
//===============================================//

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
