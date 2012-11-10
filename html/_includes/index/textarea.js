var pro1 = new Textarea({
    name: 'pro1',
    value: 'Some text'
}, 'pro1');

pro1.startup();

pro1.watch('value', function (name, old, val) {
    console.info('New value is "' + val);
});