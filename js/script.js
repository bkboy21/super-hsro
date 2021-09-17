let shData;

const $name = $("#name");
const $intelligence = $("#intelligence");
const $strength = $("#strength");
const $imgh = $("#imgh")
const $input = $('input[type="text"]');

function handleGetData(event) {
  event.preventDefault();

  userInput = $input.val();

  $.ajax({
    url: "https://www.superheroapi.com/api.php/1166343633774129/search/" + userInput
  }).then(
    (data) => {
      console.log(data);
      shData = data;
      render();
    },
    (error) => {
      console.log("Super Hero Not Found: ", error);
      alert("not found")
    }
  );
}

function render() {
  // if shData.results.length === 1
  $name.text(shData.results[0].name);
  $intelligence.text(shData.results[0].powerstats.intelligence);
  $strength.text(shData.results[0].powerstats.strength);
  $imgh.attr('src', shData.results[0].image["url"]);
  



  
  
  
  
  
  // else {
  //   for (i=0; i < shData.results.length; i++)
  //   {
  //     $name.text(shData.results[i].name);
  // $intelligence.text(shData.results[i].powerstats.intelligence);
  // $strength.text(shData.results[i].powerstats.strength);
  // $imgh.attr('src', shData.results[i].image["url"]);
  //   }
  

}

$('form').on('submit', handleGetData);



// 