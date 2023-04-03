const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
  cats.push(cat);
}
function destructivelyPrependCat(cat){
    cats.unshift(cat);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(chubby) {
    const newCats = [...cats, chubby];
    return newCats;
  }

function prependCat(tubby){
    const newCats = [tubby, ...cats]
    return newCats;
}
function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}  
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  