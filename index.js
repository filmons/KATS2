 const photo = document.querySelector("#img");
        const myButton = document.querySelector(".button");
        

        fetch ('https://api.thecatapi.com/v1/images/search')
       
        // fetch ("https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY")
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    img.src = data[0].url
                })

            }else{
                console.log( "error");
                document.gitElementById('Error').innerHTML = "Error"
            }
        })

        $(document).ready(function(){$("#img")
        myButton.addEventListener("click", function(){

 });
});
       
