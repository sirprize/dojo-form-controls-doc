var ta = new Textarea({
    name: 'note',
    autocomplete: false,
    uppercase: true,
    trim: true,
    onKeyPress: function (ev) {
        console.info('Key pressed')
    }
}, 'ta');

ta.startup();

ta.watch('value', function (name, oldVal, val) {
    console.info('New value is "' + val);
});