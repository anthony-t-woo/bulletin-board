import { checkAuthFromCreate } from '../auth-utils.js';
import { addPost } from '../fetch-utils.js';
import { renderPost } from '../render-utils.js';

const createPostForm = document.getElementById('create-post');
const homeButton = document.getElementById('home');
const previewContainerEl = document.getElementById('preview-container');
const inputsEl = document.querySelectorAll('input');
console.log(inputsEl);
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

createPostForm.addEventListener('keyup', () => {
    console.log('change detected');
    const formData = new FormData(createPostForm);
    let previewData = {
        topic: formData.get('topic'),
        message: formData.get('message'),
        contact: formData.get('contact'),
    };

    const previewEl = renderPost(previewData);
    previewContainerEl.textContent = '';
    previewContainerEl.append(previewEl);
});
