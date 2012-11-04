var pro1 = new Button({
    type: 'submit',
    'class': 'btn btn-primary',
    label: '<i class="icon-music icon-white"></i> Click Click',
    onClick: function (e) {
        console.info('Clicked?');
        return false;
    }
}, 'pro1');

pro1.startup();