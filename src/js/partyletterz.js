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
                    var currentPosition = 0;
                    var currentAcc      = 0;

                    switch (current.tagName) {
                        case 'P':
                            currentAcc = 20;
                            break;
                        case 'H1':
                            currentAcc = 120;
                            break;
                        case 'H2':
                            currentAcc = 80;
                            break;
                    }

                    console.log(currentAcc);

                    for (var x = 0, txtlen = text.length; x < txtlen; x++) {
                        var char = text[x];
                            currentPosition += currentAcc;

                            if (char != ' ') {
                                imageBackground += 'url(' + "'../src/img/" + char.toUpperCase() + ".gif'" + ')';
                            } else {
                                imageBackground += "url('../src/img/blank.png')";
                            }

                            imagePositions += currentPosition + 'px 0px';
                            if (x < txtlen - 1) {
                                imageBackground += ', ';
                                imagePositions  += ', ';
                            }

                    }

                    current.style['background-image']    = imageBackground;
                    current.style['background-position'] = imagePositions;
                    current.childNodes[0].nodeValue = "";
                }
            }
        }
    };

    if (!window.PartyLetterz) {
        window.PartyLetterz = PartyLetterz;
    } else {console.error("PartyLetterz already included once on page!")}

})(window);