var tb = new Textbox({
    name: 'title',
    placeHolder: 'Your title',
    autocomplete: false,
    uppercase: true,
    trim: true,
    onKeyPress: function (ev) {
        console.info('Key pressed')
    }
}, 'tb');

tb.startup();

tb.watch('value', function (name, oldVal, val) {
    console.info('New value is "' + val);
});