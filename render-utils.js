export function renderPost(post) {
    const div = document.createElement('div');
    const topicEl = document.createElement('h2');
    const messageEl = document.createElement('p');
    const contactEl = document.createElement('p');

    div.classList.add('post-card');

    topicEl.textContent = post.topic;
    messageEl.textContent = post.message;
    contactEl.textContent = post.contact;

    div.append(topicEl, messageEl, contactEl);

    return div;
}
