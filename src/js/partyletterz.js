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

                    var imageBackground = '';
                    var imagePositions  = '';

                    for (var i = 0, txtlen = text.length; i < txtlen; i++) {
                        var char = text[i];
                        if (char != ' ') {
                            imageBackground +=  'url(' + "'../src/img/" + char.toUpperCase() + ".gif'" + ')';

                            if (i < txtlen - 1) {
                                imageBackground += ', ';
                            }
                        }
                    }
                    console.log(current);
                    console.log(imageBackground);
                    current.style['background-image'] = imageBackground;
                    current.childNodes[0].nodeValue = "";
                }
            }
        }
    };

    if (!window.PartyLetterz) {
        window.PartyLetterz = PartyLetterz;
    } else {console.error("PartyLetterz already included once on page!")}

})(window);