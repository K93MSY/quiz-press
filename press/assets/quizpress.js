function random_select(json){
    let jsonlength = Object.keys(json).length;
    var f = Math.floor( Math.random() * (jsonlength) );
    return json[f];
}
function main(json){
    let data = random_select(json.quests);
    $('#mondai').html(data.q);
    $('#check').on('click', function() {
        if($('#kaitoran').val()==data.ans){
            $('#kaitoran').val("");
            data = random_select(json.quests);
            $('#mondai').html(data.q);
        }
    });
    $("body").keypress(function(e) {
        if (e.keyCode == 13) {
          // ここに処理を記述
          if($('#kaitoran').val()==data.ans){
            $('#kaitoran').val("");
            data = random_select(json.quests);
            $('#mondai').html(data.q);
        }
          return false;
        }
    });
}

$(function(){
    //処理

    $.getJSON("./quest/example.json")
    .done(function (json) {
        // 成功
        main(json);
    }).fail(function () {
        // 失敗
        //alert("エラーが発生しました　再読み込みを行います")
        //location.href = './';
    })
});