// Copy text 
var clipboard = new ClipboardJS('.color-box');

// MSG On click
clipboard.on('success', function(e) {
    e.clearSelection();
    e.trigger.textContent = 'Copied!';
    var interval = setInterval(timer, 1000);

    function timer() {
        e.trigger.textContent = e.text;
        clearInterval(interval);
    }
});