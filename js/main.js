$(document).ready(function () {
    loadStartInfo();
});

function loadStartInfo(params) {
    $.ajax({
        type: 'GET',
        url: 'http://demo.webility.ru/api',
        async: true,
        data: params,
        success: function(data) {
            changePageInfo(data.meta); 
        },
        error: function(error) {
            console.log('Smth went wrong...');
        }
    })
}

function changePageInfo(data) {
    var $from = $('.from');
    var $to = $('.to');
    var $all = $('.all');
    var jsonFrom = data.from;
    var jsonLength = data.length;
    $from.text(jsonFrom+1);
    $to.text(jsonFrom+10);
    $all.text(jsonLength);
}

function changeTableInfo(data) {

}