;(function(window){
    'use strict';
    var doc = window.document;

    var Partyletterz = {
        partyhard: function() {
            var elements = doc.querySelectorAll('.partyletter');
            console.log(elements);
        }
    };

    if (!window.Partyletterz) {
        window.Partyletterz = Partyletterz;
    } else {console.error("Partyletterz already included once on page!")}

})(window);