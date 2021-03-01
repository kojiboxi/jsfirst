// console.log("Hello world");
// console.log("Hello world");
let say = "hello";
console.log(say);
say = "Goodbye";
console.log(say);
const add = 6 + 5;
console.log(add);
const place = 1000;
const tax = 0.1;
console.log(place * tax);
const Aboy = 80 + 90 + 60 + 85 + 100;
const Bboy = 40 + 90 + 50 + 25 + 60;
console.log(Aboy);
console.log(Bboy);

if (Aboy && Bboy > 300) {
  console.log("素晴らしい");
} else if (Aboy || Bboy > 300) {
  console.log("普通");
} else{
  console.log("頑張ろう");
}

if (Aboy >= 300 && Bboy >= 300) {
  console.log("素晴らしい");
} else if (Aboy >= 300 || Bboy >= 300) {
  console.log("普通");
} else if (Aboy < 300 && Bboy < 300) {
  console.log("頑張ろう");
}

const kuji = "大吉";

switch (kuji) {
  case "大吉":
    console.log("大吉です！");
    break;
  case "中吉":
    console.log("中吉です！");
    break;
  case "小吉":
    console.log("小吉です！");
    break;
  case "吉":
    console.log("吉です！");
    break;
  case "末吉":
    console.log("末吉です！");
    break;
  case "凶":
    console.log("凶です！");
    break;
  case "大凶":
    console.log("大凶です！");
    break;
}

const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];

console.log(array);
console.log(array[0]);
console.log(array[1]);
array[1] = "八郎";

console.log(array);
console.log(array.length);

array.push("十郎");
array.shift();
console.log(array);

const lists = ["太郎", "次郎", "三郎", "四郎", "五郎"];

console.log(lists[0]);
console.log(lists[1]);
console.log(lists[2]);
console.log(lists[3]);
console.log(lists[4]);

for (let i = 0; i < lists.length; i++){
  console.log(lists[i]);
}

const test = ["国語", "数学", "英語"];
test.push("理科","社会");
// test.push = "社会";

console.log(test);

console.log(test.length);



let c = 1;
while (c < 30) {
  c = c + 2;
  console.log(c);
}

for (let i = 1; i < 50; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i)
  }
}

let water = 1000;
const drinkWater = 180;
while (water > 0) {
  console.log(water);
  water = water - drinkWater;
}
console.log("水を飲み干した");

function text(koji,yamahiro) {
  const value = koji + yamahiro;
  return value;
}

console.log(text(4, 5));

// const array = ["koji", "ken", "shu", "taro"];

// array.forEach(function (item, index) {
//   if (item == "ken") {
//     console.log(`${item}は${index}番目の要素です`);
//   }
// });

const arr1 = ["koji", "taro", "shu", "ken", "taku"];

arr1.forEach(function (item, index) {
  if (item == "taku") {
    console.log(`${item}は${index}番目の要素です`);
  }
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = numbers.map((item) => {
  if (item % 2 == 0) {
    return item * 2;
  }
  return item;
});

console.log(num);

const user = {
  name: "太郎",
  age : 20,
}

console.log(user.name);
console.log(user.age);

const ky = {
  say: function () {
    console.log("hello");
  },
};

ky.say();

const kj = {
  name: "太郎",
  age: 30,
  say: function () {
    console.log(this.name);
  },
};

kj.say();

console.log(Math.random());
console.log(Math.ceil(6.2));
console.log(Math.floor(6.2));
console.log(Math.round(6.2));
console.log(Math.ceil(Math.random() * 50));

const student = {
  name: "孝治",
  age: 30,
  gender: "男性",
  skills: ["html", "css", "js"],
  wife: null,
};

const json = JSON.stringify(student);

console.log(student);
console.log(json);


function Leapyear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return `${year}年はうるう年`;
  } else if (year % 400 == 0) {
    return `${year}年はうるう年`;
  } else {
    return `${year}年はうるう年ではない`;
  }
}


console.log(Leapyear(2020));
console.log(Leapyear(2021));