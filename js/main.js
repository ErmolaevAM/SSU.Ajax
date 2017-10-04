$(document).ready(function () {
    loadStartInfo();
});


function sendAjax(url, parametr) {
    $.ajax({
        type: 'GET',
        url: url,
        async: true,
        data: parametr,
        success: function(data) {
            changePageInfo(data.meta); 
            changeTableInfo(data.data);
        },
        error: function(error) {
            console.log('Smth went wrong...');  
        }
    })
}

function loadStartInfo(params) {
    sendAjax('http://demo.webility.ru/api', params);
}

function changePageInfo(data) {
    var $from = $('#from');
    var $to = $('#to');
    var $all = $('#all');
    var jsonFrom = data.from;
    var jsonLength = data.length;
    $from.text(jsonFrom+1);
    if (jsonFrom<=10) {
        $('.previous_heroes').hide();
        $('.next_heroes').show();
    }
    if ((jsonFrom+10)>jsonLength) {
        $('.next_heroes').hide();
    }
    if (jsonFrom>=10 && (jsonFrom+10)<jsonLength) {
        $('.previous_heroes').show();
        $('.next_heroes').show();
    }
    if ((jsonFrom+10)<jsonLength) {
        $to.text(jsonFrom+10);
    } else {
        $to.text(jsonLength);
    }
    $all.text(jsonLength);
}

function changeTableInfo(table) {
    var info = [];
    var $tbody = $('tbody');
    $tbody.empty();
    $.each(table, function(index, element) {
        info.push('<tr><td>'+element.name+'</td><td>'+element.episodes+'</td></tr>');
    });
    $tbody.append(info.join(''));
}

function nextPage(params) {
    var $from = $('.from').text();
    var newFrom = parseFloat($from)+9;
    var newUrl = 'http://demo.webility.ru/api?from='+newFrom;
    sendAjax(newUrl, params);
}

function prevPage(params) {
    var $from = $('.from').text();
    var newFrom = parseFloat($from)-11;
    var newUrl = 'http://demo.webility.ru/api?from='+newFrom;
    sendAjax(newUrl, params);
}

function search(params) {
    var $searchText = $('.search').val();
    var newUrl = 'http://demo.webility.ru/api?q='+$searchText;
    sendAjax(newUrl, params);
}