import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Typography */

html {font-size: 100%;} /*16px*/

body {
  background: white;
  font-family: 'Cabin', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}
`;

export default GlobalStyle;
