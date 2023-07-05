/*

    SMOOTH SCROLL VANILA JS

*/


// select all nav links
const navLinks = document.querySelectorAll("[data-link]");

navLinks.forEach((e) => {

    // add click event on every event
    e.addEventListener('click', function (e) {

        // stop default action
        e.preventDefault();

        // get element id
        let targetLink = e.target.href.split('#')[1];

        // find target element in document
        let target = document.getElementById(targetLink);

        // get top position of the window
        let startScroll = window.pageYOffset;

        // get top position of the target element
        let endScroll = target.getBoundingClientRect().top;

        // set start time to null
        let startTime = null;


        function scrollAnimation(curentTime) { // curentTime is DOMHighResTimeStamp(3)
            let duration = 1000;

            if (startTime === null) {
                startTime = curentTime;
            }

            let runTime = curentTime - startTime;

            let ease = easeInCubic(runTime, startScroll, endScroll, duration);

            window.scrollTo(0, ease);

            if (runTime < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        // ease function
        function easeInCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(scrollAnimation);
    })
})
