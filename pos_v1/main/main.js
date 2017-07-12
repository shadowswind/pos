'use strict';

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

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}
var list3 = loadPromotions();
var list4 = list3[0].barcodes;
var list5=[];
for(var i =0;i<list4.length;i++){
  list5.push(Number(list4[i][9]));
}
console.log(list5);
function printReceipt(tags) {
  for (var i =0;i<tags.length;i++){
    if (tags[i].length===10){
      tags[i]=tags[i]+"-1";
    }
    else tags[i]=tags[i];
  }
  var list = loadAllItems();
  var list1 = [];
  list1.length=list.length;
  for(var i =0;i<list1.length;i++){
    list1[i]=0;
  }
  var total1 = 0;
  var total2=0;
  var discount=0;
  for(var i =0;i<tags.length;i++){
      list1[parseInt(tags[i][9])]=list1[parseInt(tags[i][9])]+Number(tags[i].substring(11));

  }

  console.log("***<没钱赚商店>收据***\n");
  for(var i =0;i<list1.length;i++){
  if (list1[i]>0){
    if(list5.indexOf(i)>-1){
      console.log("名称：" + list[i].name +"，数量：" + list1[i] + list[i].unit + "，单价：" + list[i].price.toFixed(2) + "(元)，小计：" + ((list1[i]-parseInt(list1[i]/3))*list[i].price).toFixed(2)+"(元)\n");
      total1 = total1 +(list1[i]-parseInt(list1[i]/3))*list[i].price;
      discount = discount + parseInt(list1[i]/3)*list[i].price;
    }
    else {
      console.log("名称：" + list[i].name +"，数量：" + list1[i] + list[i].unit + "，单价：" + list[i].price.toFixed(2) + "(元)，小计：" + (list1[i]*list[i].price).toFixed(2)+"(元)\n");
      total2 = total2 +  list1[i]*list[i].price;
    }
  }
  }
  console.log("----------------------\n"+"总计：" + (total1+total2).toFixed(2) + "(元)\n"+"节省："+discount.toFixed(2)+"(元)\n"+"**********************");
}

const tags = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2.5',
  'ITEM000005',
  'ITEM000005-2',
];
printReceipt(tags);
