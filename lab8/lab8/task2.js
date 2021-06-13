const d = createAnimal("dog", "bark", "Woooof!")
console.log(d.bark())  //"Woooof!"
const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
 
 
  return {
    species,
    [verb](){
      return noise;
    }
  }
}