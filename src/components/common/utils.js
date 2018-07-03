/*set cookie*/
import {log} from '@/components/common/log'

export const setCookie = function(name, value, Days){
  // 默认七天清除cookie
  if(Days == null || Days == ''){
    Days = 7;
  }
  var exp  = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + "; path=/;expires=" + exp.toGMTString();
  log('保存cookie', document.cookie)
}

/*get cookie*/
export const getCookie = function(name) {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

// 清理 cookie
export const delAllCookie = () => {
  var myDate=new Date();
  myDate.setTime(-1000);//设置时间
  var data=document.cookie;
  var dataArray=data.split("; ");
  for(var i=0;i<dataArray.length;i++){
    var varName=dataArray[i].split("=");
    document.cookie=varName[0]+"=''; expires="+myDate.toGMTString();
  }
}
