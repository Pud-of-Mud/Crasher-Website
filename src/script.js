onbeforeunload = function(){localStorage.x=1};

if(1 == 1) {
  document.getElementById('messWithYou').className = "messItUp";
  onbeforeunload = function(){localStorage.x=1};
  setTimeout(function(){
    while(1)location.reload(1)
  }, 10000)
}  