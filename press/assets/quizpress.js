function random_select(json){
    let jsonlength = Object.keys(json).length;
    var f = Math.floor( Math.random() * (jsonlength + 1 - 0) ) + 0 ;
    return json[f];
}

$(function(){
    //処理

    $.getJSON("./quest/example.json")
    .done(function (json) {
        // 成功
        let data = random_select(json);
        data.q
    }).fail(function () {
        // 失敗
        alert("エラーが発生しました　再読み込みを行います")
        location.href = './';
    })
});