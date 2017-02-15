function formatNumber(n){
  const num = n.toString()
  return num[1] ? num : "0" + num
}

function formatTime(date, type){
  let year = date.getFullYear();
  let month = date.getMonth + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let time = "";

  switch(type){
    case 1: time = "${[year, month, day].map(formatNumber).join('.')}"; break;
    case 2: time = "${[year, month, day].map(formatNumber).join('.')} ${[hour, minute].map(formatNumber).join(':')}"; break;
    default: time = "$${[year, month, day].map(formatNumber).join('.')} ${[hour, minute, second].map(formatNumber).join(':')}"
  }
  return time;
}

module.exports = {
  formatNumber,
  formatTime
}
