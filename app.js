/* Imports */
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const postsContainerEl = document.querySelector('.posts-container');
/* State */
let postData = [];
/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    postData = response;
    displayPosts();
});

/* Display Functions */
function displayPosts() {
    for (let post of postData) {
        const postEl = renderPost(post);
        postsContainerEl.append(postEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
