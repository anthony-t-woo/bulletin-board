import { checkAuthFromCreate } from '../auth-utils.js';
import { addPost } from '../fetch-utils.js';
import { renderColorOption, renderPost } from '../render-utils.js';

const createPostForm = document.getElementById('create-post');
const homeButton = document.getElementById('home');
const previewContainerEl = document.getElementById('preview-container');
const backgroundSelectEl = document.getElementById('background-select');

let colors = ['yellow', 'greenyellow', 'hotpink', 'lavender', 'skyblue'];

window.addEventListener('load', async () => {
    await checkAuthFromCreate();
    for (let color of colors) {
        let colorOptionEl = renderColorOption(color);
        backgroundSelectEl.append(colorOptionEl);
    }
});

createPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(createPostForm);
    await addPost(
        formData.get('topic'),
        formData.get('message'),
        formData.get('contact'),
        formData.get('background')
    );
    location.replace('../');
});

homeButton.addEventListener('click', () => {
    location.replace('../');
});

createPostForm.addEventListener('keyup', () => {
    displayPreview();
});

backgroundSelectEl.addEventListener('change', () => {
    displayPreview();
});
function displayPreview() {
    const formData = new FormData(createPostForm);
    let previewData = {
        topic: formData.get('topic'),
        message: formData.get('message'),
        contact: formData.get('contact'),
        background: formData.get('background'),
    };

    const previewEl = renderPost(previewData);
    previewContainerEl.textContent = '';
    previewContainerEl.append(previewEl);
}
