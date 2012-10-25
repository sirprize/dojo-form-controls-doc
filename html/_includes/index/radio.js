var r = new Radio({
    name: 'size',
    value: 'large',
    checked: true,
    onChange: function (e) {
        console.info('Value is: ' + this.get('value'));
    }
}, 'radio');

r.startup();