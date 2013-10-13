var pro1 = new Button({
    type: 'submit',
    'class': 'btn btn-success',
    label: '<span class="glyphicon glyphicon-music"></span> Click Click',
    onClick: function (e) {
        console.info('Clicked?');
        return false;
    }
}, 'pro1');

pro1.startup();