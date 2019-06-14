/*
 * Performant parallaxing JavaScript
 * 
 * Concept from:
 * https://github.com/GoogleChromeLabs/ui-element-samples/blob/gh-pages/parallax/
 *
 */
document.addEventListener('DOMContentLoaded', function() {
    if (getComputedStyle(document.getElementById('overflow')).webkitOverflowScrolling) {
        document.body.classList.add('sticky-parallax');
    } else {
        document.body.classList.add('overflow-parallax');
    }
});
