var pro1 = new Checkbox({
    name: 'pro1',
    value: 'on',
    checked: true,
    onChange: function (e) {
        console.info('Value is: ' + this.get('value'));
    }
}, 'pro1');

pro1.startup();