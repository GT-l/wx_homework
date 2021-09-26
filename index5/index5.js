// pages/index5/index5.js
var num = [];
Page({
  createNumber:function(){
    num = [];
    for (var i = 0; i < 7; i++) {  
      var c = Math.floor(Math.random() * 30+1)
      num.push(c);
    }
    console.log(num);
    this.setData({
      num1:num[0],
      num2:num[1],
      num3:num[2],
      num4:num[3],
      num5:num[4],
      num6:num[5],
      num7:num[6]
  })
  },
  onLoad:function(e){
    this.createNumber();
  },
  changeNumber:function(e){
    this.createNumber(); 
  }
})