window.onload = function () {
  var message = document.getElementById("text");
  message.style.backgroundColor = "red";

  var btn1 = document.getElementById("btn1");
  btn1.onclick = function () {
    //変数に関数を格納できる
    alert("虹色の猿");
  };
};

var name1 = "Ryuichi";

name1 = "Daniel";

console.log("name: " + name1);

var name2 = "佐藤" + "龍一";
console.log(name2);

var fruit1 = "apple";
var fruit2 = "orange";
var fruit3 = "grape";

var fruit = ["apple", "orange", "grape"]; //配列生成
console.log("fruit配列を出力する：" + fruit);

var apple = fruit[0];
var orange = fruit[1];
var grape = fruit[2];
console.log("配列の操作:" + apple, orange, grape);

console.log("配列の要素数:" + fruit.length);
var lastIndex = fruit.length - 1;
console.log("lastIndex：" + lastIndex);

var lastElement = fruit[lastIndex];
console.log("lastElement:" + lastElement);

//https://qiita.com/sho91/items/f32ea4df015976557a07 4まで　11/28(月)

var a = 0;
const b = " "; //半角スペース
const c = ""; //blank
var d = [0, "", " ", null];

if (a) {
  console.log("aを出力: " + a);
}
if (b) {
  console.log("bを出力：" + b);
}
if (c) {
  console.log("cを出力：" + c);
}
if (!c) {
  console.log("cはblankです！：" + b);
}
if (d) {
  console.log("dを出力：" + d);
}
if (d.length) {
  console.log("dの要素数を出力" + d.length);
} else {
  console.log("aを出力(false): " + a);
  console.log("bを出力(false): " + b);
  console.log("cを出力(false)：" + c);
  console.log("dを出力(false)：" + d);
}

console.log(`I'm happy `); //'が使いたい場合

const e = [1, "1", a === 0];
console.log("e:" + e);

//true or false 判定　12/3

var f = [a, b, c, d, e]; //配列
console.log("f:" + f);
console.log("f.length:" + f.length);
console.log("f[2]:" + f[2]);

var f1 = f[4];
console.log("f1:" + f1);

//多次元配列AとBを比較して、どちらにも存在しない配列のみを抽出する方法
const array1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const array2 = [
  { id: 2, name: "Bob" },
  { id: 4, name: "David" },
];

const difference = array1.filter(
  (a) => !array2.some((b) => a.id === b.id && a.name === b.name)
);

console.log(difference);

//オブジェクト
var g = {
  name: "Ryuichi",
  birth: "Tokyo",
  age: 29,
};
console.log("g:" + g);

var h = g.birth; //オブジェクトの値を格納
console.log("h:" + h);

//objectと配列のネスト
var i = {
  obj: g,
  array: f,
  arrayNest: f1,
};
console.log("i:" + i);
console.log("i:" + JSON.stringify(i));

//object のネストとインスタンスと変数のスコープ
var j = {
  j1: {
    a: this.a,
    b: this.b, //* const で宣言している為、アクセス不可！
    c: this.c,
    d: d, //this.つけなくても自インスタンスを参照している！
  },
  j2: {
    i: this.i,
  },
};
console.log("j:" + JSON.stringify(j)); //object はjson 形式となる為、解析が必要

var TKY = "Tokyo";

var k = {
  profile: {
    name: "Ryuichi",
    age: 29,
    birth: 1 / 14,
    from: TKY,
    adress: {
      postcode: 0123 - 4444,
      pref: "東京都",
      city: "大田区",
      House: "ハイツ青葉",
    },
    mail: "12345678@icloud.com",
  },
  job_detaile: {
    programmer: "2020/10/01 - 2022/12/04",
    SE: "application development",
  },
  personality: {},
  unfavorite: {},
};
console.log("key kを取得：" + Object.keys(k)); //object のkey を取得
console.log("key k.profileを取得：" + Object.keys(k.profile));
console.log("k:" + JSON.stringify(k));
//key と値を生成
k.profile.kana = "Sato";
(k.personality.favorite = "the Hiatus"), "Monoeyes";
k.personality.favorite += "チェーンソーマン";
k.personality.unfavorite = `I don't like small space. because I have panic disorder  `;
console.log("kにobject を追加:" + JSON.stringify(k));

//比較演算子：解析するかによって結果が変わる為注意！
//比較する場合、JSON化するとfalse になる
console.log(JSON.stringify(k.profile.age) >= 30);
console.log(JSON.stringify(k.profile.age) <= 30);
console.log(JSON.stringify(k.profile.age));
console.log(k.profile.age === 29);
console.log(JSON.stringify(k.profile.age) === 29);
console.log(k.profile.kana === "Sato");
console.log(JSON.stringify(k.profile.kana) === "Sato");

//※因みに、== と === は意味意味が異なる!
console.log(k.profile.age == "29");
console.log(k.profile.age === "29");

if (k.profile.age == "29") {
  if (k.profile.age == "29" && k.profile.kana) {
    console.log("仮名は設定されいます" + JSON.stringify(k.profile.kana));
  }
  // alert("29歳でした");
}
//case までOK！ 12/4

var l = 0;
while (l < 10) {
  //lより10が大きい場合場合incrementし続ける true
  l++;
  console.log("l:" + l + "回目だよ");
}
console.log("l:" + l + "回目");

//(初期化; 条件式； increment; )
for (var n = 0; n < 10; n++) {
  //nより10が大きい場合 incrementする(true)
  console.log("n:" + n + "回目だよ");
}
console.log("n:" + n + "回目\nwhileと結果が違うよ");

var n = 0;
for (n; n <= 10; n++) {
  if (n > 9) {
    console.log("nが10以上です：" + n);
  } else if (n === 5) {
    console.log("nが" + n + "です。");
  } else {
    console.log(n);
  }
}

// ここから苦手！
var chainsorMan = ["Samurai sourd", "Himeno", "Makima"];
var character;
for (var o = 0; o <= 3; o++) {
  character = chainsorMan[o];
  console.log("チェーンソーマンの登場キャラクター:" + character);
}

//関数
function add1(a) {
  var p = 10;
  var q = 20;
  var result = p + q + a;
  console.log("引数に" + a + "が渡されました");
  console.log("add1関数が実行されました！結果は：" + result + "です！");
}

const qa = 200;
add1(qa);

function add2(b, c) {
  const bc = b + c;
  console.log("add2の数値が出力されました:" + bc);
}

add2(10, 199);

//object のプロパティに関数を定義

var r = {
  ra: 10,
  rb: 15,
  result: 0,
  rc: function objAdd(a) {
    this.result = this.rb + this.ra + a;
    console.log("rオブジェクトの中の関数を実行！結果は:" + this.result);
  },
};

r.rc(qa);

//戻り値を使用する
function add3(b, c) {
  const result = b + c;
  return result;
}

var result1 = add3(10, 2);
console.log("result1の戻り値は：" + result1 + "です。");

var result2 = add3(33, 44);
console.log("result2の戻り値は：" + result2 + "です。");

var result3 = add3(result1, result2);
console.log(
  "result1,2の結果をadd3に入れてみましょう：" + result3 + "となりました。"
);

/* 以下はchatCPT のテスト */
//虹色の猿
const monkey = document.getElementById("monkey");
monkey.addEventListener("click", function () {
  monkey.classList.toggle("rotate");
});

var btn2 = document.getElementById("btn2");

btn2.onclick = function () {
  //変数に関数を格納できる

  console.log("虹色の猿");
};

//動く魚
const fish = document.getElementById("fish");

fish.addEventListener("click", function () {
  fish.classList.toggle("rotate");
});
