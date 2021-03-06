var options = [
    { value: '', label: 'Please select' },
    { value: "steak-and-lobster", label: "Steak & Lobster" },
    { value: "clam-chowder", label: "Clam Chowder" },
    { value: "pizza", label: "Pizza", disabled: true },
    { value: "pasta", label: "Pasta" }
];

var pro1 = new Select({
    name: 'pro1',
    value: 'clam-chowder',
    options: options,
    required: true,
    'class': 'form-control',
    onChange: function (value) {
        console.info('select.onChange(): ' + value)
    }
}, 'pro1');

pro1.watch('value', function (prop, old, val) {
    console.info('select.watch("value")', prop, old, val);
});

pro1.startup();