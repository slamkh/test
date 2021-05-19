function currentTime() {
  let date = new Date(),
      dat = date.getDate(),
      month = date.getMonth(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds();
  
  dat = updateTime(dat);
  month = updateTime(month);
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
 }

 document.getElementById("clock").innerText=`${dat}.${month} ${hour}:${min}:${sec}`;
    var t = setTimeout(function(){ 
      currentTime() }, 1000); 
    }

currentTime();