var pro1 = new Radio({
    name: 'size',
    value: 'large',
    checked: true,
    onChange: function (e) {
        console.info('Value is: ' + this.get('value'));
    }
}, 'pro1');

pro1.startup();