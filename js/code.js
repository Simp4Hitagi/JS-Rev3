fetch ('https://api.chucknorris.io/jokes/random')
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data.value);
    let x = data.value
    document.write("<h2>"+ x + "</h2>")
})

// forEach calls a function for each item in an array
// seperation of concern