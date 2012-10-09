require([
    "dojo-bootstrap/Affix",
    //"dojo-bootstrap/Scrollspy",
    "dijitive/Button",
    "dijitive/Checkbox",
    "dijitive/Radio",
    "dijitive/Select",
    "dijitive/Textarea",
    "dijitive/ExpandingTextarea",
    "dijitive/Textbox",
    "dijit/registry",
    "dojo/dom-geometry",
    "dojo/ready",
    "dojo/on",
    "dojo/query",
    "dojo/parser",
    "dojo/domReady!"
], function (
    Affix,
    //Scrollspy,
    Button,
    Checkbox,
    Radio,
    Select,
    Textarea,
    ExpandingTextarea,
    Textbox,
    registry,
    geom,
    ready,
    on,
    query,
    parser
) {
    "use strict";
    
    parser.parse();
    hljs.initHighlightingOnLoad();
    
    query('.bs-docs-sidenav').affix({
        offset: {
            top: function () {
                return document.width <= 980 ? 245 : 195;
            },
            bottom: 270
        }
    });
    /*
    new Affix(query('.bs-docs-sidenav')[0], {
        offset: {
            top: function () {
                return document.width <= 980 ? 245 : 195;
            },
            bottom: 270
        }
    });
    */
    
    // button section
    var button1 = new Button({
        type: 'submit',
        'class': 'btn btn-primary',
        label: '<i class="icon-music icon-white"></i> La La Laaaa',
        onClick: function (e) {
            console.info('Clicked');
            return false;
        }
    }, 'button1');

    button1.startup();
    
    registry.byId('button2').onClick = function (ev) {
        console.info('Clicked');
        return false;
    }
    
    // checkbox section
    var checkbox1 = new Checkbox({
        name: 'menu',
        value: 'clam chowder',
        checked: true,
        onChange: function (e) {
            // Value is false when unchecked
            console.info('New value is: ' + this.get('value'));
        }
    }, 'checkbox1');
    
    checkbox1.startup();
    
    registry.byId('checkbox2').onChange = function (ev) {
        // Value is false when unchecked
        console.info('New value is: ' + this.get('value'));
    }
    
    // radio section
    var radio1 = new Radio({
        name: 'size',
        value: 'large',
        onChange: function (e) {
            // Value is false when unchecked
            console.info('New value is: ' + this.get('value'));
        }
    }, 'radio1');
    
    radio1.startup();
    
    var radio2 = new Radio({
        name: 'size',
        value: 'small',
        checked: true,
        onChange: function (e) {
            // Value is false when unchecked
            console.info('New value is: ' + this.get('value'));
        }
    }, 'radio2');
    
    radio2.startup();
    
    registry.byId('radio3').onChange = function (ev) {
        // Value is false when unchecked
        console.info('New value is: ' + this.get('value'));
    }
    
    registry.byId('radio4').onChange = function (ev) {
        // Value is false when unchecked
        console.info('New value is: ' + this.get('value'));
    }
    
    // select section
    var options = [
        { value: '', label: 'Please select' },
        { value: "steak-and-lobster", label: "Steak & Lobster" },
        { value: "clam-chowder", label: "Clam chowder" },
        { value: "pizza", label: "Pizza", disabled: true },
        { value: "pasta", label: "Pasta" }
    ];
    
    var select1 = new Select({
        name: 'meal1',
        value: 'pasta',
        options: options,
        required: true,
        onChange: function (value) {
            console.info('select.onChange(): ' + value)
        }
    }, 'select1');
    
    select1.watch('value', function (prop, oldVal, val) {
        console.info('select.watch("value")', prop, oldVal, val);
    });
    
    select1.watch('message', function (prop, oldVal, val) {
        console[(val) ? 'error' : 'info']('select.watch("message"):', val);
    });
    
    select1.startup();
    
    var select2 = new Select({
        multiple: true,
        name: 'meal2',
        value: ['steak-and-lobster', 'clam-chowder'],
        options: options,
        required: true,
        onChange: function (value) {
            console.info('select.onChange(): ' + value)
        }
    }, 'select2');
    
    select2.watch('value', function (prop, oldVal, val) {
        console.info('select.watch("value")', prop, oldVal, val);
    });
    
    select2.watch('message', function (prop, oldVal, val) {
        console[(val) ? 'error' : 'info']('select.watch("message"):', val);
    });
    
    select2.startup();
    
    ready(function () {
        registry.byId('select3').onChange = function (value) {
            console.info('select.onChange(): ' + value)
        };

        registry.byId('select3').watch('value', function (prop, oldVal, val) {
            console.info('select.watch("value")', prop, oldVal, val);
        });

        registry.byId('select3').watch('message', function (prop, oldVal, val) {
            console[(val) ? 'error' : 'info']('select.watch("message"):', val);
        });

        registry.byId('select4').onChange = function (value) {
            console.info('select.onChange(): ' + value)
        };

        registry.byId('select4').watch('value', function (prop, oldVal, val) {
            console.info('select.watch("value")', prop, oldVal, val);
        });

        registry.byId('select4').watch('message', function (prop, oldVal, val) {
            console[(val) ? 'error' : 'info']('select.watch("message"):', val);
        });
    });
    
    // textarea
    var textarea1 = new Textarea({
        name: 'note',
        autocomplete: false,
        uppercase: true,
        trim: true,
        onKeyPress: function (ev) {
            console.info('Key pressed')
        }
    }, 'textarea1');

    textarea1.startup();
    
    textarea1.watch('value', function (name, oldVal, val) {
        console.info('New value is "' + val);
    });
    
    ready(function () {
        registry.byId('textarea2').onKeyPress = function (ev) {
            console.info('Key pressed')
        };
        
        registry.byId('textarea2').watch('value', function (prop, oldVal, val) {
            console.info('select.watch("value")', prop, oldVal, val);
        });
    });
    
    // expanding textarea
    var expandingTextarea1 = new ExpandingTextarea({
        name: 'note',
        autocomplete: false,
        uppercase: true,
        trim: true,
        onKeyPress: function (ev) {
            console.info('Key pressed')
        }
    }, 'expandingTextarea1');

    expandingTextarea1.startup();
    
    expandingTextarea1.watch('value', function (name, oldVal, val) {
        console.info('New value is "' + val);
    });
    
    ready(function () {
        registry.byId('expandingTextarea2').onKeyPress = function (ev) {
            console.info('Key pressed')
        };
        
        registry.byId('expandingTextarea2').watch('value', function (prop, oldVal, val) {
            console.info('select.watch("value")', prop, oldVal, val);
        });
    });
    
    // textbox
    var textbox1 = new Textbox({
        name: 'title',
        placeHolder: 'Your title',
        autocomplete: false,
        uppercase: true,
        trim: true,
        onKeyPress: function (ev) {
            console.info('Key pressed')
        }
    }, 'textbox1');

    textbox1.startup();
    
    textbox1.watch('value', function (name, oldVal, val) {
        console.info('New value is "' + val);
    });
    
    ready(function () {
        registry.byId('textbox2').onKeyPress = function (ev) {
            console.info('Key pressed')
        };
        
        registry.byId('textbox2').watch('value', function (prop, oldVal, val) {
            console.info('select.watch("value")', prop, oldVal, val);
        });
    });
});