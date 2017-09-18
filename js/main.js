function test() {
    var heroes = [];
    
    console.log('start');
    
    /*heroes = $.ajax({
        url: 'http://demo.webility.ru/api',
        success: function() {
            alert('success');
        }
    });*/
    
    heroes = $.getJSON('http://demo.webility.ru/api', function(result){
        $.each(result, function(i, field){
            console.log(field);
        });
    });
    
    console.log(heroes);
}