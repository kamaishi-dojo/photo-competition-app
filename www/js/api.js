//本間先生サンプル
function getInformations(version, success, failure) {
    $.ajax({
        url: "/v1/informations",
        cache: false,
        data: {
            "version" : "1.0.0"
        },
        type: "json"

/*★
masuzawa:postの場合、どうすれば良いか分かりません。以下のような記載でしょうか？
 type: "POST" or "GET"
 datatype: "json","html"…
*/

    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

/*★
masuzawa:functionを命名しましたが、ちょっと確認頂ければと・・・
*/

/* コンテスト一覧の取得 */
function getCompetitions(success, failure) {
    $.ajax({
        url: "/v1/competitions",
        cache: false,
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

/* 利用規約の取得 */
function getService(terms_of_service_accepted_at, success, failure) {
    $.ajax({
        url: "/v1/terms_of_service",
        cache: false,
        data: {
/*★
masuzawa:
何を渡せば良いのか分からず。
もしかしてパラメータとして渡されたterms_of_service_accepted_atを与えるのでしょうか？
その場合の記載例をもらえるとありがたいです。
*/
            "terms_of_service_accepted_at" : "????"
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}
/*★
masuzawa:
postの場合、ajax data にはpostする値を設定する？
その場合、渡された値をそのまま返すイメージでしょうか・・・
*/

function postAccounts(username,email,image,token, success, failure) {
    $.ajax({
        url: "/v1/accounts",
        cache: false,
        data: {
          "username" : ？引き渡されたusername？
          ,"email", :
          ,"image" :
          ,"token" :
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function getPhotos(competition_id, since, until, sort, success, failure) {
    $.ajax({
        url: "/v1/photos",
        cache: false,
        data: {
          "competition_id" : hoge
          ,"since" : hoge
          ,"until" : hoge
          ,"sort" : hoge
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function getPhotosme(competition_id, since, until,  success, failure) {
    $.ajax({
        url: "/v1/photos/me",
        cache: false,
        data: {
          "competition_id" : hoge
          ,"since" : hoge
          ,"until" : hoge
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function postPhotos(competition_id, title, comment, latitude, longitude, photo, success, failure) {
    $.ajax({
        url: "/v1/photos",
        cache: false,
        data: {
          "competition_id" : hoge
          "title" : hoge
          "comment" : hoge
          "latitude" : hoge
          "longitude" : hoge
          "photo" : hoge
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR){
        success(data);
    }).fail(function(data, textStatus, errorThrown){
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}
