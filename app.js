/* Imports */
import { getPosts } from './fetch-utils.js';
/* Get DOM Elements */
const postsContainerEl = document.querySelector('.posts-container');
/* State */
let postData = [];
/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    postData = response;
    console.log(postData);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
