;
var ecdplugin=(function(){
  var _encode=function(str){
    while(str.search("<")!=-1){
      str=str.replace("<","&lt;");
    }
    while(str.search(">")!=-1){
      str=str.replace(">","&gt;");
    }
    return str
  }
  return {
    encode:_encode
  }
})();
