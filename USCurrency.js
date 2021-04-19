var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
  var data=JSON.parse(this.response);
  var USCurrency=data.filter(country=>country.currencies[0].code=="USD");
  for(var i in USCurrency){
  console.log(USCurrency[i].name);
  }
}
