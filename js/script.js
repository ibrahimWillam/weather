// function getXMLData(term){
//   var myHttp = new XMLHttpRequest();
// myHttp.open("get",`https://api.weatherapi.com/v1/forecast.json?key=5331055bbe29470d985225926241401&q=${term}&days=3`);
// myHttp.send();
// }

let day=new Date().getDay();
let nextDay = day+1;
let nextafterDay = day+2;
console.log(nextafterDay);
if (day==5) {
  nextafterDay=0
  
}
if(day==6){
nextDay=0
nextafterDay=1
}

  let weekDay = ["sunday","monday","tuseday","wednesday","thursday","friday","saturday"];


  async function getXML(term){
    if(term == null || term == ""){
    let myNewData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5331055bbe29470d985225926241401&q=cairo&days=3`);
    let Dataa = await myNewData.json();
    console.log(Dataa);

    displayData(Dataa)
  }else {
      let myNewData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5331055bbe29470d985225926241401&q=${term}&days=3`);
      let Dataa = await myNewData.json()
      displayData(Dataa)
    }
  
} 
getXML()

var Data =[];
// myHttp.addEventListener("readystatechange",function(){
//     if(myHttp.readyState==4){
//         Data= JSON.parse(myHttp.response)
//         console.log(Data);
//         console.log(Data.forecast.forecastday[0].day.maxtemp_c);
//         console.log(Data.forecast.forecastday[0].date);
//         console.log(Data.location.name);
//         console.log(Data.location.country);
//         console.log(Data.forecast.forecastday[0].day.condition.text);
//         console.log(Data.forecast.forecastday[0].day.condition.icon);




//         displayData()
//       // searchbyCountry(searchItem)
//     }
// })

function displayData(Data){
    var cols=`
    
    <div class="col-md-4 ">
    <div class=" demo  bg-warning">
    <div class="card-header text-center bg-danger">
        <h5 class=" text-start position-relative px-1 py-2">${weekDay[day]} <span class="pe-1">${Data.forecast.forecastday[0].date}</span> </h5>
      
    </div>
    <div class="card-body ">
        <div class="w-75 mx-auto">
            <h3 class="text-start">${Data.location.name}</h3>
            <h5 class="text-start">${Data.location.country}</h5>
            <h2 class="text-center mb-4">${Data.forecast.forecastday[0].day.maxtemp_c} C</h2>
            
   
            <h6 class="text-start text-primary">${Data.forecast.forecastday[0].day.condition.text}</h6>
        </div>
  



    </div>
</div>

   </div>


   <div class="col-md-4 ">
    <div class=" demo  bg-warning">
    <div class="card-header text-center bg-danger">
        <h5 class=" text-center py-2 ">${weekDay[nextDay]}  </h5>
      
    </div>
    <div class="card-body ">
        <div class="w-75 mx-auto">
            <h2 class="text-center my-3 ">${Data.forecast.forecastday[1].day.maxtemp_c} C</h2>
            <h4 class="text-center my-2">${Data.forecast.forecastday[1].day.mintemp_c} C</h4>

            <h6 class="text-center my-4 text-primary">${Data.forecast.forecastday[1].day.condition.text}</h6>
        </div>
  



    </div>
</div>

   </div>




   <div class="col-md-4 ">
    <div class=" demo  bg-warning">
    <div class="card-header text-center bg-danger">
        <h5 class=" text-center py-2 ">${weekDay[nextafterDay]} </h5>
      
    </div>
    <div class="card-body ">
        <div class="w-75 mx-auto">
            <h2 class="text-center my-3 ">${Data.forecast.forecastday[2].day.maxtemp_c} C</h2>
            <h4 class="text-center my-2">${Data.forecast.forecastday[2].day.mintemp_c} C</h4>

            <h6 class="text-center my-4 text-primary">${Data.forecast.forecastday[2].day.condition.text}</h6>
        </div>
  



    </div>
</div>

   </div>


    
    `;


    document.getElementById("rowData").innerHTML=cols
}



document.addEventListener("input",function(){
  let term= document.getElementById("serchInput").value;
  console.log(term);
  getXML(term)
  })




