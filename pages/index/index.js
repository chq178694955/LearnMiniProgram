//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    title:'Hello CaoHaoQuan',
    age:18,
    students:[
      {id:1,name:'koobe',age:18},
      {id:2,name:'james',age:6},
      {id:3,name:'chq',age:17}
    ],
    counter:0
  },
  handlerIncrement(e){
    console.log('按钮发生了点击');
    console.log(e);
    this.setData({
      counter: this.data.counter +1
    });
  },
  handlerSubtract(e){
    this.setData({
      counter: this.data.counter - 1
    });
  }
})
