const btn1El = document.getElementById('btn1');
const jokeEl = document.getElementById('joke1');

const apiKey = "Your_Api_Key";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
};

const apiURL = "Your_Api_URL";

async function getJoke(){
    // console.log("click");    //
try{
    jokeEl.innerText = "Updating....";
    btn1El.disabled = true;
    btn1El.innerText = "Loading....";
    const response = await fetch(apiURL, options);
    const data = await response.json();   //this converts the data from const response  to json
    
    btn1El.disabled = false;
    btn1El.innerText = "Tell me a joke";

    // console.log("data[0].joke");
    jokeEl.innerText = data[0].joke;

 } catch (error) {
    jokeEl.innerText = "An error occurred, try again later";
    console.log(error);

    btn1El.disabled = false;
    btn1El.innerText = "Tell me a joke";
 }
}
btn1El.addEventListener("click", getJoke);