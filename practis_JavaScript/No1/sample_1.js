document.querySelector("p").textContent = "Hello querySelector";
window.alert("Hello World!!");

/* 

************************************:

-　この章では『非同期処理』について勉強する -

　・setTimeout(
    (val)=>{
    console.log(val)
    },1000)

  ・Promise

  ・async/await

*************************************

・document → HTML ドキュメントに対する操作
・window →   ブラウザーのウィンドウに対する操作
・console →  ブラウザーのコンソールに対する操作
・.() はメソッド（関数）
・.textContent はプロパティ／property

・Promise (お約束) : java script は処理を待てない！
　　※Promse は頭大文字です。
　　https://qiita.com/cheez921/items/41b744e4e002b966391a

*/

console.log("1番目");
// 1秒後に実行する処理
setTimeout(() => {
  console.log("2番目(1秒後に実行)");
}, 1000);
console.log("3番目");

/* javascript は非同期言語であるため、
一つ前の処理の実行に時間がかかった場合、実行完了を待たずに次の処理に移ってしまう
 */

console.log("4番目");
new Promise((resolve) => {
  console.log("4.5番目");
  setTimeout(() => {
    console.log("5番目(1秒後に実行)");
    val = "が終わったよ";
    resolve(val); //無事処理が終わったことを伝える
  }, 1000);
}).then((val) => {
  //処理が終わったら実行
  console.log("6番目：" + val);
});

console.log("7番目");

/* Promise の状態
pending: 未解決 (処理が終わるのを待っている状態)
resolved: 解決済み (処理が終わり、無事成功した状態)
rejected: 拒否 (処理が失敗に終わってしまった状態)

*/

const promise = new Promise((resolve, reject) => {
  resolve("resolve結果：１");
}).then((val) => {
  console.log(val);
});
/* resolveに文字列の値を設定して、.then(設定した値)とする事で受け取る事ができる 
reject 発生時にcatchしていないとUncaught (in promise)のエラーが出る。
つまりプログラム上は、catchはresolveを受け取ると解決ずみと判断する
*/

const rejectPro = new Promise((resolve, reject) => {
  reject("が実行されました！");
})
  .then((val) => {
    //成功
    console.log("resolve" + val);
  })
  .catch((val) => {
    //失敗
    console.log("reject" + val);
  });

const chainPromise1 = new Promise((resolve, reject) => {
  resolve("が実行されました1");
})
  .then((val) => {
    console.log(`Promise Chain のresolve1  ${val}`);
    return val;
  })
  .catch((val) => {
    console.log("reject" + val);
    return val;
  })
  .then((val) => {
    console.log(`Promise Chain のresolve2"  ${val}`);
    return val;
  });

//Promise メソッドチェーンでreject()した場合、最後の.then()は実行される

const chainPromise2 = new Promise((resolve, reject) => {
  reject("が実行されました2");
})
  .then((val) => {
    console.log(`then1  ${val}`);
    return val;
  })
  .catch((val) => {
    console.log(`catch ${val} `);
    return val;
  })
  .then((val) => {
    console.log(`then2  ${val}`);
    return val;
  });

//promise chain まで学習終了 12/16

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1が実行されました");
  }, 1000);
}).then((val) => {
  console.log(val);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2が実行されました");
  }, 500);
}).then((val) => {
  console.log(val);
});

//allは引数に設定した全てPromise オブジェクトがresolveの場合、次の処理に進む
Promise.all([promise1, promise2]).then(() => {
  console.log("allの処理が実行されました");
});

//どれか1つのPromiseオブジェクトがresolvedになったら次に進みます。
Promise.race([chainPromise1, chainPromise2]).then((val) => {
  console.log(`raceが実行されて、どれか一つ成功したよ: ${val}`);
});

//async , await
const lateTime = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
  console.log("すまん" + ms + "分待たせた！");
};

lateTime(10);

/*関数の頭につけることで、
Promiseオブジェクト（用はresolve or reject）を返す関数にすることができます。 */

const asyncFnc = async (ms) => {
  if (ms === 404) {
    throw new Error("err:");
  } else {
    return "asncFnc が実行されました。:";
  }
};

const ms = 405;
asyncFnc(ms)
  .then((val) => {
    return val + `then1  ${val}`;
  })
  .catch((val) => {
    return val + "catch(reject)";
  })
  .then((val) => {
    console.log(`then2  ${val}`);
  });

//※awaitは必ず、async function内で使います。

const asyncFnc2 = async () => {
  let x, y;
  x = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  y = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
  const xy = x + y;
  // ※awaitを使用しなければ、処理を待たないので設定中はNaN やPromise Object
  // などとなる
  console.log("asyncFnc2の設定値は" + xy);
};

asyncFnc2();
//1218 にて終了
