(function (window) {
    var helloSpeaker = {};
    var byeSpeaker = {};
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var speakwordHello = "Hello";
    helloSpeaker.sayHello = function() {
        console.log(speakwordHello + " " + names[i]);
    }
    var speakwordBye = "Good Bye";
    byeSpeaker.sayGoodbye = function() {
        console.log(speakwordBye + " " + names[i]);
    }

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.sayGoodbye(names[i]);
          } else {
            helloSpeaker.sayHello(names[i]);
          }
        }

    

})(window);