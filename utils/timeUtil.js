//获取当前时间的函数
 const show=function (){
    let now = new Date();
    let year = now.getFullYear(); //得到年份
    let month = now.getMonth()+1;//得到月份
    let date = now.getDate();//得到日期
    let hour= now.getHours();//得到小时数
    let minute= now.getMinutes();//得到分钟数
    let second= now.getSeconds();//得到秒数
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}

module.exports={
    show:show
}