(function (window) {
    var byeSpeaker = {};
    byeSpeaker.name = "Bryan";
    var speakWord = "Good Bye";
    byeSpeaker.sayGoodbye = function() {
        console.log(speakWord + " " + byeSpeaker.name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);