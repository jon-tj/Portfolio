function filterTags(tag, containerId) {
    const container = document.getElementById(containerId);
    const items = container.children;
    for (let i = 0; i < container.childElementCount; i++) {
        const item = items[i];
        const tags = item.getAttribute('data-tags');
        if (tags && tags.includes(tag) || tag == '') {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
    container.scrollIntoView({ behavior: 'smooth' });
}