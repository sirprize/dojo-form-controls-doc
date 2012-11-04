var pro1 = new Textarea({
    name: 'pro1',
    uppercase: true,
    trim: true,
    onKeyPress: function (ev) {
        console.info('Key pressed')
    }
}, 'pro1');

pro1.startup();

pro1.watch('value', function (name, oldVal, val) {
    console.info('New value is "' + val);
});