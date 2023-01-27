import { checkAuthFromCreate } from '../auth-utils.js';
import { addPost } from '../fetch-utils.js';

const createPostForm = document.getElementById('create-post');
const homeButton = document.getElementById('home');

window.addEventListener('load', async () => {
    await checkAuthFromCreate();
});

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(createPostForm);
    await addPost(formData.get('topic'), formData.get('message'), formData.get('contact'));
    location.replace('../');
});

homeButton.addEventListener('click', () => {
    location.replace('../');
});
