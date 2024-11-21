
//get data from user to get from api using xml
function getData() {

    const xhr =new XMLHttpRequest();
    const key="6470421789646585";
    
  
    
    let name =document.getElementsByName("txt")[0].value;
  
    
    if (name.match(/^[a-zA-Z ]*$/)&&name.length!==0) { 
    let endpoint=`https://superheroapi.com/api/${key}/search/${name}`;
    
    
    
    xhr.open("GET",endpoint,true);
    xhr.onload=function() {
    if (xhr.status===200) {
    const response=JSON.parse(xhr.responseText);
    displayData(response);
    } 
    
    else {
    displayError("Failed to fetch superhero data");
    }
    };
    xhr.onerror = function () {
    displayError("An error occurred while fetching the superhero's data.");
    };
    
    xhr.send();
    
   }
    
    else {
    displayError("Kindly add the superhero's name");
    }
    
    
    }
    
    
    //display wanted data taken from api
    function displayData(data) {
    const superheroDataElement=document.getElementById("superhero");
    
    superheroDataElement.innerHTML="";
    const fullname=data.results[0].biography['full-name'];
    const publisher= data.results[0].biography.publisher;
    const race=data.results[0].appearance.race;
    const affiliation= data.results[0].connections['group-affiliation'][0];
    const work= data.results[0].work.occupation;
    const url=data.results[0].image.url;
  
    const fullnameElement = document.createElement("p");
    fullnameElement.textContent =`Full name:${fullname}`;
    
    const imgElement=document.createElement("img");
    imgElement.src=url;
  
    const divimg=document.getElementById("image");
    divimg.innerHTML="";
    divimg.appendChild(imgElement);
  
    const raceElement = document.createElement("p");
    raceElement.textContent = `Race: ${race}` ;
    
    const workElement = document.createElement("p");
    workElement.textContent = `Work: ${work}`;
    
    const groupElement = document.createElement("p");
    groupElement.textContent = `Affiliated with: ${affiliation}`;
    
    const publisherElement = document.createElement("p");
    publisherElement.textContent = `Publisher: ${publisher}`;
    
    superheroDataElement.appendChild(fullnameElement);
    
    superheroDataElement.appendChild(raceElement);
    
    superheroDataElement.appendChild(workElement);
    
    
    superheroDataElement.appendChild(publisherElement);
  
    superheroDataElement.appendChild(divimg);
  
    }

    //display message for error handling
    function displayError(errorMessage) {
    const superheroElement = document.getElementById("superhero");
    superheroElement.innerHTML = "";
    
    const errorElement = document.createElement("p");
    
    errorElement.textContent = errorMessage;
    errorElement.classList.add("error");
    superheroElement.appendChild(errorElement);
    }
  //when user clicks clear data
    function deleteData(){
      
      const superH= document.getElementById("superhero");
  
     while (superH.hasChildNodes()) {
      superH.removeChild(superH.firstChild);
     }
     const textbox=document.getElementsByName("txt")[0].value="";
  
    }