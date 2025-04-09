/*callback関数について：関数の引数に関数を設定する */

function aFunc1(data, callback) {
  setTimeout(function () {
    callback(data * 2);
  }, Math.random() * 1000); //ランダムな時間
}

function sample_callback() {
  //非同期関数を用いて100の2倍を求める
  aFunc1(100, function (value) {
    console.log(value);
  });
}
// sample_callback();

function sample_callback_hell() {
  //コールバック地獄
  aFunc1(100, function (data) {
    console.log("最初のcon:" + data);
    aFunc1(data, function (data) {
      console.log("2回目のcon:" + data);
      aFunc1(data, function (data) {
        console.log("3回目のcon:" + data);
      });
    });
  });
}
// sample_callback_hell();

/* Promiseについて */
function aFunc2(data) {
  return new Promise(function (callback) {
    setTimeout(function () {
      callback(data * 2);
      console.log("aFunc2が呼ばれたよ。");
    }, Math.random() * 1000);
  });
}

function sample_promise() {
  aFunc2(100).then(function (data) {
    console.log("aFunc2を読んだ結果だよ：" + data);
  });
}
// sample_promise();

/* アロー関数 : function を簡単にしただけ */
function sample_promise2() {
  aFunc2(100).then((data) => {
    console.log("=> 関数を使ってsample_promise を簡単に書いたよ" + data);
  });
}
// sample_promise2();

/* arrow関数とFunctionの違い */
function sample_promise3() {
  aFunc2(100)
    .then((data) => {
      console.log("sample_promise3.then(arrow)だよ：" + data);
      return aFunc2(data);
    })
    .then(function (data) {
      console.log("sample_promise3.then(function())だよ" + data);
      return aFunc2(data);
    })
    .then((data) => {
      console.log("sample_promise3のpromise chainだよ" + data);
    });
}
// sample_promise3();

/* Promise オブジェクトは then(ok_callback, ng_callback) というメソッドを持ちます。
then() は、Promise が成功(resolve)または失敗(reject)になるまで処理を受け流し、
成功時に ok_callback を、失敗時に ng_callback をコールバック関数として呼び出します。*/

function aFunc3(data) {
  return new Promise(function (okCallback, ngCallback) {
    setTimeout(function () {
      if (Math.random() < 0.5) {
        ngCallback(new Error("aFunc3:ERROR!"));
      } else {
        okCallback(data * 2);
      }
    }, Math.random() * 1000);
  });
}
/* .then(()=<{})はPromiseで定義した関数を利用する際に処理をつなげる為に使用する。 */
function sample_promise4() {
  aFunc3(100)
    .then((data) => {
      console.log("sample_promise4だよ(resolve_1)：" + data);
      return aFunc3(data);
    })
    .then((data) => {
      console.log("sample_promise4だよ(resolve_2)" + data);
    })
    .catch((data) => {
      console.log("sample_program4だよ(reject)：" + data);
      return aFunc3(data);
    });
}

// for (var n = 0; n < 10; n++) {
//   console.log("n:" + n + "回目だよ");
//   sample_promise4();
// }

function sample_reject(d) {
  aFunc3(d).then((d) => {
    console.log("sample_reject(resolve):" + d),
      (e) => {
        console.log("sample_reject(e):" + e);
      };
  });
}
// for (var n = 0; n < 5; n++) {
//   sample_reject(Math.random());
// }
/* .then()内での例外をThrrowする.catch()でのERRORの処理
.catch().then()は.finally()と同じ意味 */
function sample_catch(d) {
  aFunc3(d)
    .then((d) => {
      console.log("sample_catch:(then:1)" + d);
      return aFunc3(d);
    })
    .then((d) => {
      console.log("sampele_catch:(then:2)" + d);
      throw new Error(
        "catch() はまた、処理中に発生した throw をキャッチすることもできます!!!:" +
          d
      );
    })
    .catch((e) => {
      console.log("sampele_catch:(catch)" + e);
      return aFunc3(d);
    })
    .finally((d) => {
      console.log("ES2018(ES9) では、.finally() がサポートされました。");
      console.log("catchの後のthenはfinallyの様な役割:" + d);
    });

  // .then((d) => {
  //   console.log("catchの後のthenはfinallyの様な役割:" + d);
  // });
}

// for (var n = 0; n < 5; n++) {
//   sample_catch(Math.random());
//   console.log("sample_catchのfor文:" + n + "回目");
// }

/* Promis.all([,]) .race([,]) .any([,]) について */
function taskA() {
  return new Promise((callBack) => {
    console.log("taskA Start.");
    setTimeout(function () {
      console.log("taskA end.");
      callBack();
    }, Math.random() * 3000);
  });
}
function taskB() {
  return new Promise((callBack) => {
    console.log("taskB Start.");
    setTimeout(function () {
      console.log("taskB end.");
      callBack();
    }, Math.random() * 1000);
  });
}

function sample_all() {
  p1 = taskA();
  p2 = taskB();
  Promise.all([p1, p2]).then(() => {
    console.log("taskA and taskB are finished.");
    console.log(
      "Promise.all() は配列で指定されたすべての Promise タスクが完了した時点で.then()のcallback関数が呼ばれる"
    );
  });
}
// sample_all();

function sample_race() {
  p1 = taskA();
  p2 = taskB();
  Promise.race([p1, p2]).then(() => {
    console.log(
      "Promise.race() は配列で指定された Promise タスクを待ち合わせ、いずれかひとつのタスクが完了した時点で、.then() のコールバック関数を呼び出します。"
    );
  });
}
// sample_race();

function sample_any() {
  p1 = taskA();
  p2 = taskB();
  Promise.any([p1, p2]).then(() => {
    console.log(
      "Promise.race() と同様、いずれかのタスクの完了を待ちますが、race() がいずれかのタスクが成功(resolve)または失敗(reject)した時点で終了するのに対し、any() はいずれかのタスクが成功(resolve)した時のみ終了します。"
    );
  });
}
// sample_any();

async function sample_async_await() {
  var val2 = 100;
  try {
    val2 = await aFunc2(val2);
    console.log("sample_async_await:val2 " + val2);
    val2 = await aFunc2(val2);
    console.log("sample_async_await:val2 " + val2);
    var val3 = await aFunc3(val2);
    console.log("sample_async_await:val3 " + val3);
  } catch (e) {
    console.log("sample_async_await:e " + e);
  }
}
// sample_async_await();
