var pro1 = new Textbox({
    name: 'pro1',
    placeholder: 'Enter text',
    'class': 'form-control'
}, 'pro1');

pro1.startup();

pro1.watch('value', function (name, old, val) {
    console.info('New value is "' + val);
});