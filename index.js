const meleeCharacters = ['Dr. Mario', 'Mario', 'Luigi', 'Bowser', 'Peach', 'Yoshi', 'D.K.', 'C.Falcon','Gannondorf',
'Falco', 'Fox', 'Ness', 'Ice Climbers', 'Kirby', 'Samus', 'Zelda', 'Sheik', 'Link', 'Young Link', 'Pichu',
'Pikachu', 'Jigglypuff', 'Mewtwo', 'Mr.Game & Watch', 'Marth', 'Roy']

const randomizeCharacters = function (arr) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
      return arr
}


const button = document.getElementById("random")

const mapChars = function (arr) {
    const divs = document.getElementsByClassName("box")
    for(let i = 0; i < arr.length; i++) {
        divs[i].innerHTML = meleeCharacters[i]
    }
}

button.addEventListener("click", function() {
    randomizeCharacters(meleeCharacters)
    mapChars(meleeCharacters)
});

