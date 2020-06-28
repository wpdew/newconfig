(function() {
    var _id = "4cfe04346a315ffcfcc46c483227a5e6";
    while (document.getElementById("timer" + _id))
        _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:322px;height:50px;'></div>");
    var _t = document.createElement("script");
    _t.src = "config/thenks/js/timer.min.js";
    var _f = function(_k) {
        var l = new MegaTimer(_id,{
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "2",
                "params": {
                    "startByFirst": true,
                    "days": "0",
                    "hours": "0",
                    "minutes": "15",
                    "utc": 0
                }
            },
            "design": {
                "type": "circle",
                "params": {
                    "width": "2",
                    "radius": "22",
                    "line": "gradient",
                    "line-color": ["#ffe000", "#f70000"],
                    "background": "opacity",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "20",
                    "number-font-color": "black",
                    "separator-margin": "20",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": false,
                    "text-font-family": {
                        "family": "Arial"
                    },
                    "text-font-size": "12",
                    "text-font-color": "red"
                }
            },
            "designId": 5,
            "theme": "white",
            "width": 322,
            "height": 50
        });
        if (_k != null)
            l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded")
            _f(1);
    }
    ;
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}
).call(this);
