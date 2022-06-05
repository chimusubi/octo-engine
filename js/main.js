import { movies } from './movies.js';

console.log("loaded")

// sort movies alphabetically
var sortedMovies = Object.keys(movies).sort().reduce( (acc, key) => {
  acc[key] = movies[key];
  return acc;
}, {});

// render options from movies list
var str = ''
for (var item of Object.keys(sortedMovies)){
  str += '<option>' + item + '</option>'
}
document.getElementById('wish').innerHTML = str

// button adds movie category
document.getElementById('button').onclick = () => {
  var option = document.getElementById('wish').value;
//   console.log(option)
  var li = document.createElement('LI')
  var text = document.createTextNode(sortedMovies[option])
  li.appendChild(text)
  document.getElementById('results-list').appendChild(li)
}
