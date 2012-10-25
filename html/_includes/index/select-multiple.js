var options = [
    { value: '', label: 'Please select' },
    { value: "steak-and-lobster", label: "Steak & Lobster" },
    { value: "clam-chowder", label: "Clam Chowder" },
    { value: "pizza", label: "Pizza", disabled: true },
    { value: "pasta", label: "Pasta" }
];

var s = new Select({
    multiple: true,
    name: 'meal2',
    value: ['steak-and-lobster', 'clam-chowder'],
    options: options,
    required: true,
    onChange: function (value) {
        console.info('select.onChange(): ' + value)
    }
}, 's');

s.watch('value', function (prop, oldVal, val) {
    console.info('select.watch("value")', prop, oldVal, val);
});

s.watch('message', function (prop, oldVal, val) {
    console[(val) ? 'error' : 'info']('select.watch("message"):', val);
});

s.startup();