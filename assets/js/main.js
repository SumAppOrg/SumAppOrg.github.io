/* Overlay functions */
function showOverlay(templateId) {
    let overlay = document.getElementById('overlay');
    let template = document.querySelector(`#${templateId}`).content.cloneNode(true);
    overlay.appendChild(template);
}
function hideOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.innerHTML = '';
}