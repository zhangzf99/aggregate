for(var i = 0; i < 6; i++){
  (function(j){
    setTimeout(function(){
      console.log(j)
    },j*1000)
  })(i)
}