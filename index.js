// const meleeCharacters = ['Dr. Mario', 'Mario', 'Luigi', 'Bowser', 'Peach', 'Yoshi', 'D.K.', 'C.Falcon','Gannondorf',
// 'Falco', 'Fox', 'Ness', 'Ice Climbers', 'Kirby', 'Samus', 'Zelda', 'Sheik', 'Link', 'Young Link', 'Pichu',
// 'Pikachu', 'Jigglypuff', 'Mewtwo', 'Mr.Game & Watch', 'Marth', 'Roy']

const meleeCharacters = ['./char-img/dr-mario.png', './char-img/mario.png', './char-img/luigi.png', './char-img/bowser.png',
 './char-img/peach.png', './char-img/yoshi.png', './char-img/d.k.png', './char-img/c-falcon.png', './char-img/gannon.png',
  './char-img/falco.png', './char-img/fox.png', './char-img/ness.png', './char-img/ice-climbers.png', './char-img/kirby.png',
   './char-img/samus.png', './char-img/zelda.png', './char-img/sheik.png', './char-img/link.png', './char-img/young-link.png',
    './char-img/pichu.png', './char-img/pikachu.png', './char-img/jigglypuff.png', './char-img/mewtwo.png',
     './char-img/mr-game-and-watch.png', './char-img/marth.png', './char-img/roy.png']

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
    const divs = document.querySelectorAll(".box")
    for(let i = 0; i < arr.length; i++) {
        divs[i].innerHTML = '<img src=' + arr[i] +' />'
    }
}

button.addEventListener("click", function() {
    randomizeCharacters(meleeCharacters)
    mapChars(meleeCharacters)
});

