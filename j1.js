function toggle_visibility(id1,id2,id3,id4,id5) {
       var e = document.getElementById(id1);
       e.style.display = 'block';
	   var f=document.getElementById(id2);
	  f.style.display= 'none';
	  var g=document.getElementById(id3);
	  g.style.display= 'none';
	  var h=document.getElementById(id4);
	  h.style.display= 'none';
	  var i=document.getElementById(id5);
	  i.style.display= 'none';
	  
    }
function starttime() {
  const today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  min = checktime(min);
  sec = checktime(sec);
  //document.getElementById('d').innerHTML =  hr + ":" + min + ":" + sec;
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  document.getElementById('d').innerHTML = hr + ":" + min + ":" + sec+"    &nbsp;&nbsp;&nbsp;&nbsp;  "+date;
  setTimeout(starttime, 1000);
}

function checktime(j) {
  if (j < 10) {j = "0" + j}; 
  return j;
}