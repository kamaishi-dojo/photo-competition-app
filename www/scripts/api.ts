/// <reference path="./libs.d.ts" />
//本間先生サンプル
function getInformations(version: number, success, failure): void {
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

    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
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
function getCompetitions(success, failure): void {
    $.ajax({
        url: "/v1/competitions",
        cache: false,
        type: "json"
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

/* 利用規約の取得 */
function getService(terms_of_service_accepted_at: any, success, failure): void {
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
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
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

function postAccounts(username: string, email: string, image: string, token: string, success, failure): void {
    $.ajax({
        url: "/v1/accounts",
        cache: false,
        data: {
          "username" : username
          ,"email" : email
          ,"image" : image
          ,"token" : token
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function getPhotos(competition_id: any, since: string, until: string, sort: string, success, failure): void {
    $.ajax({
        url: "/v1/photos",
        cache: false,
        data: {
          "competition_id" : competition_id
          ,"since" : since
          ,"until" : until
          ,"sort" : sort
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function getPhotosme(competition_id: any, since: string, until: string,  success, failure): void {
    $.ajax({
        url: "/v1/photos/me",
        cache: false,
        data: {
          "competition_id" : competition_id
          ,"since" : since
          ,"until" : until
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}

function postPhotos(competition_id: any, title: string, comment: string, latitude: any, longitude: any, photo: string, success, failure): void {
    $.ajax({
        url: "/v1/photos",
        cache: false,
        data: {
          "competition_id" : competition_id
          ,"title" : title
          ,"comment" : comment
          ,"latitude" : latitude
          ,"longitude" : longitude
          ,"photo" : photo
        },
        type: "json"
    }).done(function(data, textStatus, jqXHR): void {
        success(data);
    }).fail(function(data, textStatus, errorThrown): void {
        if (data.error) {
            failure(data.error.code, data.error.message);
        }
        else {
            failure(500, data);
        }
    });
}
