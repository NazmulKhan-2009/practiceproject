const submitBtn=document.getElementById('submit')

const domId=id=>document.getElementById(id)

// domv('cityName').addEventListener('click',()=>console.log('good'))
const dataHide=document.querySelector('.middle_layer')

const getInfo= async(e)=>{
  e.preventDefault()

  const cityValue=domId('cityName').value
  // displayResult=info=>domId(result).innerText=info

  if(cityValue===''){
    dataHide.classList.add('data_hide')
    domId('result').innerText="Please Input the City Name"
    

    
  }else{
    
   try {

    const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=79a81931750e22ec472d162e35c3f171`
 
    const weatherInfo=await fetch(url)
    const weatherJson=await weatherInfo.json()
    
    const arrayData=[weatherJson]
    
    // displayResult(arrayData[0].name)

    domId('result').innerText=`${arrayData[0].name}, ${arrayData[0].sys.country}`
    domId('temp').innerText=arrayData[0].main.temp+'°C'
    let symbol=arrayData[0].weather[0].main
    console.log(symbol)
    


    if(symbol==="Haze"){
      domId('temp_status').innerHTML=`<i class="fas fa-smog"   style="color:white"></i>`
     }else if(symbol==='Clouds'){
      domId('temp_status').innerHTML=`<i class="fas fa-cloud"></i>` 
     }else if(symbol==="Rain"){
      domId('temp_status').innerHTML=`<i class="fas fa-cloud-sun-rain"></i>`
     }else if(symbol==='Sunny'){
      domId('temp_status').innerHTML=`<i class="fas fa-sun"></i>`
     }else{
      domId('temp_status').innerHTML=`<i class="fas fa-sun"></i>`
     }

     dataHide.classList.remove('data_hide')
    //  document.getElementsByClassName('data_hide').style.visibility="visible"
    console.log(weatherJson)
    
   } catch {
     dataHide.classList.add('data_hide')
    domId('result').innerText='Pls enter the info properly'
    // document.getElementById('result').innerText="oshhhhh"
   }

  }

  
  


}


submitBtn.addEventListener('click',getInfo)
