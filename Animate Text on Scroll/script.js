let textPath = document.querySelector('#text-path')
let textContainer = document.querySelector('#text-container')
let path = document.querySelector(textPath.getAttribute('href'))
let pathLength = path.getTotalLength();

function updateTextPathOffset(offset) {
    textPath.setAttribute('startOffset', offset);
}
updateTextPathOffset(pathLength);

function onScroll() {
    requestAnimationFrame(function() {
        let rect = textContainer.getBoundingClientRect();
        let scrollPercent = rect.y / window.innerHeight
        updateTextPathOffset(scrollPercent*1.5*pathLength)
    });
}
window.addEventListener('scroll', onScroll)