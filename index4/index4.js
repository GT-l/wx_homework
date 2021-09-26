var start,end,sum;
Page({
  startNum:function(e){
    start = parseInt(e.detail.value);
  },
  endNum:function(e){
    end = parseInt(e.detail.value);
  },
  calc:function(){
    sum = start;
    for(var i = 2;i<=end;i++){
      sum = sum*(1+0.03);
    }
    this.setData({
      sum:sum
    })
  }
})
