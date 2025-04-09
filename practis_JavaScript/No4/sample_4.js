function sample_promise() {
  return new Promise((resolve, reject) => {
    // resolve("resoleve!");
    reject("reject!");
  });
}

function promise_result() {
  sample_promise()
    .then((d) => {
      console.log("sample_promise:" + d);
    })
    .catch((e) => console.log("sample_promise:" + e));
}
// promise_result()

/* async function はpromise を返す。Promiseを簡単にかく */

// async functionが値をreturnした場合、Promiseは戻り値をresolveする。
async function sample_resolve() {
  return "resolve!!";
}

function resoleve_1() {
  sample_resolve().then((d) => {
    console.log("resoleve_1:" + d);
  });
}
// resoleve_1();

async function sample_reject() {
  throw new Error("reject!!");
  //  return reject('reject!!')
}

function reject_result() {
  sample_reject()
    .then((d) => {
      console.log("sample_reject!!" + d);
    })
    .catch((err) => {
      console.log("sample_reject:" + err);
    });
}
// reject_result();

function notAsync() {
  return "notAsync_resoleve!!!";
}
/* Promise オブジェクトのみが.then(resolve, reject)というメソッドを使用可能 */
function sample_notAsync() {
  try {
    notAsync()
      .then((d) => {
        console.log("notAsync_1:" + d);
      })
      .then((d) => {
        console.log("notAsync_2:" + d);
      });
  } catch (e) {
    console.log("notAsync_e:" + e);
  }
}
// sample_notAsync();

/* 
asyncを利用するならawaitも必ず利用すべき

await :
 async function内でPromiseの結果（resolve、reject）
 が返されるまで待機する（処理を一時停止する）演算子
 結果が返されたらasync function内の処理を再開する。

*/

async function sample_await() {
  const result1 = sample_resolve();

  console.log("result1:" + JSON.stringify(result1));

  const result2 = await sample_resolve();

  console.log("result2:" + result2);
}

// sample_await();

async function test_await(d) {
  const random = Math.floor(Math.random() * 100);
  console.log("random:" + random);
  const result = d + random;
  console.log("test_await:" + result);
  return result;
}

async function test_result(data) {
  const test_await1 = await test_await(data);
  const test_await2 = test_await(data); //処理を待たない

  console.log("test_await1:" + test_await1);
  console.log("test_await2:" + test_await2); //表示されない
}

//test_result(10);

//計算関数：2秒後にPromise オブジェクトに設定された値を２乗し返却する関数
async function sampleResoleve(value) {
  return new Promise((resoleve) => {
    setTimeout(() => {
      resoleve(value * 2);
    }, 2000);
  });
}

// 入力関数：上記のPromise関数を呼び出し5を設定し、
// 返却された値を変数に格納後５を足した結果を返却する
async function sample() {
  const result = await sampleResoleve(5);
  return result + 5; //await しなければ、返却値は5となる
}

//処理の結果を呼び出す関数
async function sample_async() {
  sample().then((result) => {
    console.log("result:" + result);
  });
}
//sample_async();

//設定関数
async function sample() {
  return (
    (await sampleResoleve(5)) *
    (await sampleResoleve(10)) *
    (await sampleResoleve(20))
  );
}

//設定関数　一度変数に格納しているが結果は同じ
async function sample2() {
  const a = await sampleResoleve(5);
  const b = await sampleResoleve(10);
  const c = await sampleResoleve(20);
  return a * b * c;
}

//2つの関数の結果を返却する関数を作成
async function sample_chain_async() {
  sample().then((v) => {
    console.log("sample_chain_async:" + v);
  });

  sample2().then((v) => {
    console.log("sample_chain_async2:" + v);
  });
}
sample_chain_async();
