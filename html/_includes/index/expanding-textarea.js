var ta = new ExpandingTextarea({
    name: 'note',
    uppercase: true,
    trim: true,
    onKeyPress: function (ev) {
        console.info('key pressed')
    }
}, 'ta');

ta.startup();

ta.watch('value', function (name, oldVal, val) {
    console.info('New value is "' + val);
});