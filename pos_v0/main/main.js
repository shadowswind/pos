'use strict';

function printReceipt(input) {
    console.log("***<没钱赚商店>收据***\n");
    var total = 0; 
    for (var i =0;i<input.length;i++){
    total += input[i].count * input[i].price;
    console.log( "名称："+input[i].name + "，数量：" + input[i].count + input[i].unit + "，单价："+input[i].price + ".00(元)，小计："+ input[i].count*input[i].price + ".00(元)\n");
}
    console.log("----------------------\n"+"总计："+total+".00(元)\n" +"**********************\n" );
	
}
const inputs = [
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
      },
      {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
      },
      {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
      }
    ];
printReceipt(inputs);
