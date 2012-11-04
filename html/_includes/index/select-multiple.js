var options = [
    { value: '', label: 'Please select' },
    { value: "steak-and-lobster", label: "Steak & Lobster" },
    { value: "clam-chowder", label: "Clam Chowder" },
    { value: "pizza", label: "Pizza", disabled: true },
    { value: "pasta", label: "Pasta" }
];

var pro1 = new Select({
    multiple: true,
    name: 'pro1',
    value: ['steak-and-lobster', 'clam-chowder'],
    options: options,
    required: true,
    size: 3,
    onChange: function (value) {
        console.info('select.onChange(): ' + value)
    }
}, 'pro1');

pro1.watch('value', function (prop, oldVal, val) {
    console.info('select.watch("value")', prop, oldVal, val);
});

pro1.watch('message', function (prop, oldVal, val) {
    console[(val) ? 'error' : 'info']('select.watch("message"):', val);
});

pro1.startup();