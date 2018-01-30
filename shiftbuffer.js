module.exports = function shift (src) {
  
  var buffer = new Buffer(src.length);
  for (var i = 0; i <= src.length;i++) {      
    if(i == 0){
      buffer[i]  = src[src.length-1];
    }else{
      buffer[i] = src[i-1]
    }     
  }   

  return buffer
}
