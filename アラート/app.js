let hello = "Hello, World";
alert(hello);

// 整数を代入する
let init=1;

// 負数を代入する
let init2 = -10;

// 小数点を代入する
let float1 = 3.14;

let str = 'JavaScriptを覚えよう';



alert(4+3);

alert('Hello' + 'World');

let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がリンゴより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num =num *2;
  count =count +1;
}

alert('2をかけて'+ max + 'を超えるのに必死だった回数は'+ count + '回です');

//do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理
// do{
//   最低1回は行われる処理
// }while(条件式);

let i;
let num1 = 0;
for(i =1;i < 11;i++){
  num1 = num1 + i;
}

alert('1から10まで足し算した結果は' + num1 + 'です');
