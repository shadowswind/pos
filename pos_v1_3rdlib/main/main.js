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
function producediscountlist() {
  var list1 = loadPromotions();
  var list2 = list1[0].barcodes;
  var discountlist=[];
  for(var i =0;i<list2.length;i++){
    discountlist.push(Number(list2[i].substring(9)));
  }
  return discountlist;
}

function printReceipt(tags) {
  for (var i =0;i<tags.length;i++){
    if (tags[i].indexOf("-")<0){
      tags[i]=tags[i]+"-1";
    }
    else tags[i]=tags[i];
  }
  var discountlist = producediscountlist();
  var itemList = loadAllItems();
  var goodsList = [];
  goodsList.length=itemList.length;
  for(var i =0;i<goodsList.length;i++){
    goodsList[i]=0;
  }
  var total1 = 0;
  var total2 = 0;
  var discount=0;
  for(var i =0;i<tags.length;i++){
    var number = tags[i].indexOf("-");
    var count = Number(tags[i].substring(number + 1));
    tags[i]=tags[i].substring(0,number);
    goodsList[Number(tags[i].substring(9))]=goodsList[Number(tags[i].substring(9))]+count;

  }
  console.log("***<没钱赚商店>收据***\n");
  for(var i =0;i<goodsList.length;i++){
    if (goodsList[i]>0){
      if(discountlist.indexOf(i)>-1){
        console.log("名称：" + itemList[i].name +"，数量：" + goodsList[i] + itemList[i].unit + "，单价：" + itemList[i].price.toFixed(2) + "(元)，小计：" + ((goodsList[i]- parseInt(goodsList[i]/3))*itemList[i].price).toFixed(2)+"(元)\n");
        total1 = total1 +(goodsList[i]-parseInt(goodsList[i]/3))*itemList[i].price;
        discount = discount + parseInt(goodsList[i]/3)*itemList[i].price;
      }
      else {
        console.log("名称：" + itemList[i].name +"，数量：" + goodsList[i] + itemList[i].unit + "，单价：" + itemList[i].price.toFixed(2) + "(元)，小计：" + (goodsList[i]*itemList[i].price).toFixed(2)+"(元)\n");
        total2 = total2 +  goodsList[i]*itemList[i].price;
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
