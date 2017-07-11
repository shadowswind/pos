'use strict';

function printReceipt(inputs) {
  function loadAllItems() {
    return [
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
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50
      },
      {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00
      },
      {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
      },
      {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50
      }
    ];
  }
  console.log("***<没钱赚商店>收据***\n");
  var total = 0;
  var list = loadAllItems();
  while(inputs.length>0) {
    var number = 1;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i] === inputs[i + 1]) {
        number++;
      } else {
        console.log("名称："+list[parseInt(inputs[i][9])].name + "，数量：" + number + list[inputs[i][9]].unit + "，单价："+list[inputs[i][9]].price + ".00(元)，小计："+ number*list[inputs[i][9]].price + ".00(元)\n");
        total +=number*list[inputs[i][9]].price;
        inputs.splice(0, i + 1);
        break;
      }
    }
  }
  console.log("----------------------\n"+"总计："+total+".00(元)\n" +"**********************\n" );
}

const inputs = [
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
];
printReceipt(inputs);
