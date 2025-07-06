/* service worker */
if ('serviceWorker' in navigator) {
    var baseUrl = document.location.origin;
    console.log(baseUrl);
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function () {
            /* console.log("Service Worker Registered"); */
        });
}
window.addEventListener('beforeinstallprompt', function (event) {
    /* console.log('fired beforeinstallprompt'); */
    event.preventDefault();
    deferredPrompt = event;
    return false;
});