# quiz-press
簡単にクイズが作れるHTML&amp;Javascript ベースのアプリ

## 動かし方
#### pythonがパソコンにインストールされている人
1.index.pyを実行する
2.http://localhost:8000/press/ にアクセスする
#### nodejsがパソコンにインストールされている人
1.nodejs.batを実行する
2.http://localhost:8000/ にアクセスする

## 問題のつくり方
questフォルダーの中にあるexample.jsonを編集することで動かすことができます
assetsフォルダーの中のquizpress.jsの中の`$.getJSON("./quest/example.json")`
を編集することでファイルの名前を変えることができます　　

### 問題のサンプル
`
{
    "quests":[
        {"q":"系 系統 体系","ans":"system"},
        {"q":"他","ans":"other"},
        {"q":"技術者","ans":"engineer"}
    ]
}
`
- q 問題
- ans 回答