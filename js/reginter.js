
var phoneNumberFlag=false;//号码变量，默认为false
// 手机号码校验函数
function phoneNumberYz(){
  var phoneNumber =$('.phoneNumber').val();
  if(!(/^1[3|4|5|7|8]\d{9}$/.test(phoneNumber))){
      phoneNumberFlag=false;
      $('.phoneNumberTip span').show();
  }else{
      phoneNumberFlag=true;
      $('.phoneNumberTip span').hide();
  }
}
// 倒计时函数
var djs_seT;//倒计时定时器
function djs(){
  var i=59;
  djs_seT=setInterval(function(){
    $('.clickHq').text(i+'s');
    i--;
    if(i<0){
      clearInterval(djs_seT);
      $('.clickHq').removeClass('djsz').text('点击获取');
    }
  },1000)
}

$(function(){

  // 去抽奖按钮点击
  $('.cjBtn').on('touchend',function(){
    var txyzm=$('.picYzm').val();//图形验证码
    var mesyzm=$('.messageYzm').val();//短信验证码
    phoneNumberYz();
    if(txyzm==''){
      $('.picYzmTip span').show();
    }else{
      $('.picYzmTip span').hide();
    }
    if(mesyzm==''){
      $('.messageYzmTip span').show();
    }else{
      $('.messageYzmTip span').hide();
    }
  })

  // 点击获取按钮点击事件
  $('.clickHq').on('touchend',function(){
    phoneNumberYz();
    if(!$(this).hasClass('djsz')&&phoneNumberFlag){
      console.log(1)
      $(this).addClass('djsz');
      $('.clickHq').text('60s');
      djs();
    }
  })

})
