/**
 * Created by Administrator on 2016/6/1.
 */
window.onload=function(){
    var oDiv=document.getElementsByClassName("one")[0];
    var angle=0;
    setInterval(function(){
        angle++;
        setCss3(oDiv,{"transform":"rotate("+angle+"deg)","transform-origin":"50% 50%"});
    },60)
};
function setCss3(obj,attrObj){
    for(var i in attrObj){
        var newi=i;
        if(newi.indexOf("-")>0){
            var num=newi.indexOf("-");
            //去掉横线，将小写转换成大写
            newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
        }
        obj.style[newi]=attrObj[i];
        newi= i.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
        obj.style["webkit"+newi]=attrObj[i];
        obj.style["moz"+newi]=attrObj[i];
        obj.style["o"+newi]=attrObj[i];
        obj.style["ms"+newi]=attrObj[i];
    }
};