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
});