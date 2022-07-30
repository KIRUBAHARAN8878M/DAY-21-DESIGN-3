const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "548a9529-44c3-4d07-9c3b-0a4d5ded453a";
let ArrayBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   console.log(data)
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   ArrayBreeds = data;
   
   for (let i = 0; i < ArrayBreeds.length; i++) {
    const breed = ArrayBreeds[i];
    let option = document.createElement('option');
     if(!breed.image)continue
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= ` ${ArrayBreeds[index].image.url}`;
  document.getElementById("title").innerHTML=`Name : ${ArrayBreeds[index].name}`;
  document.getElementById("cc").innerHTML=`Country_Code :&nbsp;&nbsp;${ArrayBreeds[index].country_code}`;
  document.getElementById("ls").innerHTML=`Life_Span&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; ${ArrayBreeds[index].life_span}`;
  document.getElementById("des").innerHTML=`Description :</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${ArrayBreeds[index].description}`;
  document.getElementById("breed_json").innerHTML= `Temperament :</br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ArrayBreeds[index].temperament}`;
  document.getElementById("wiki_link").href= ArrayBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= ArrayBreeds[index].wikipedia_url
}