;(function(window){
    'use strict';
    var doc = window.document;

    var PartyLetterz = {
        config: {
            version: '0.0.1',
            imgPath:  '../img/'
        },
        partyHard: function() {
            console.log("When it's time to party we will party hard.");
            var elements = doc.querySelectorAll('.partyletter');

            for( var i = 0, len = elements.length; i < len; i++) {
                var current = elements[i];

                if (   current.tagName === 'P'
                    || current.tagName === 'H1'
                    || current.tagName === 'H2'
                    || current.tagName === 'SPAN'
                    ) {
                    var text = current.childNodes[0].nodeValue;
                    current.childNodes[0].nodeValue = "";
                }
            }
        }
    };

    if (!window.PartyLetterz) {
        window.PartyLetterz = PartyLetterz;
    } else {console.error("PartyLetterz already included once on page!")}

})(window);