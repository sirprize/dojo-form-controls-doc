var cb = new Checkbox({
    name: 'menu',
    value: 'clam chowder',
    checked: true,
    onChange: function (e) {
        console.info('Value is: ' + this.get('value'));
    }
}, 'cb');

cb.startup();