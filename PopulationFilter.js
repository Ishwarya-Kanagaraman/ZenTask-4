var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
  var data=JSON.parse(this.response);
  console.log(data);
  const AsianCountries=data.filter(country=>{
      return country.population<200000;
  })
  console.log(AsianCountries);
}
