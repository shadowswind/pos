'use strict';

function printReceipt(inputs) {

      console.log("***<没钱赚商店>收据***\n");
      var total = 0;
      while(inputs.length>0) {
      var number = 1;
      for (var i = 0; i < inputs.length; i++) {
        if (compare(inputs[i],inputs[i+1])) {
            number++;
        }
        else {
	      console.log("名称："+inputs[i].name + "，数量：" + number + inputs[i].unit + "，单价："+inputs[i].price + ".00(元)，小计："+ number*inputs[i].price + ".00(元)\n");
	      total +=number*inputs[i].price;
	      inputs.splice(0,i+1);
	      break;
        }
      }
    }
        console.log("----------------------\n"+"总计："+total+".00(元)\n" +"**********************\n" );
}

function compare(a,b){
  if (b ==undefined){
    return;
  }
  var keya = Object.getOwnPropertyNames(a);
  var keyb = Object.getOwnPropertyNames(b);
  for (var i = 0;i<keya.length;i++){
    if (a[keya[i]] ==b[keyb[i]])
    {
      return true
    }
    else return false;
  }
}
const inputs = [
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00

  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000000',
    name: '可口可乐',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000001',
    name: '雪碧',
    unit: '瓶',
    price: 3.00
  },
  {
    barcode: 'ITEM000004',
    name: '电池',
    unit: '个',
    price: 2.00
  }
];
printReceipt(inputs);
