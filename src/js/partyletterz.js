;(function(window){
    'use strict';
    var doc = window.document;

    var PartyLetterz = {
        partyHard: function() {
            var elements = doc.querySelectorAll('.partyletter');
            console.log(elements);
        }
    };

    if (!window.PartyLetterz) {
        window.PartyLetterz = PartyLetterz;
    } else {console.error("PartyLetterz already included once on page!")}

})(window);