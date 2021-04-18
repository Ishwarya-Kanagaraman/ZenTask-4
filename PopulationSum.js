var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
  var data=JSON.parse(this.response);
 let CountryPopulation=data.map(country=>country.population);
 let SumOfPopulation=CountryPopulation.reduce((sum,ppltn)=>sum+ppltn);
 console.log(SumOfPopulation);
}