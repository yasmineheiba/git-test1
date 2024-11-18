


// var story = [
//     'Resentment is like drinking poison and waiting for your enemies to die.',
//     'Resentment is like drinking poison and waiting for your enemies to die.',
//     'Do not take life too seriously. You will not get out alive.',
//     'Resentment is like drinking poison and waiting for your enemies to die.',
//     'You miss 100% of the shots you dont take.',
//   'Resentment is like drinking poison and waiting for your enemies to die.',
//     'Resentment is like drinking poison and waiting for your enemies to die.',
//     'Do not take life too seriously. You will not get out alive.',
//     'Resentment is like drinking poison and waiting for your enemies to die.',
//     'You miss 100% of the shots you dont take.',
  
    
// ];
// var nextBtn = document.getElementById("btn_next");
// function changeText() {
//     var textBox = document.getElementById("txt");
//     var chapter = Number(textBox.dataset.chapter);
//      if (chapter <= story.length) {
//         textBox.dataset.chapter = chapter + 1;
//         textBox.innerHTML = story[chapter + 1];
         
//  }
//  }

// nextBtn.addEventListener("click", changeText);

var story = [
  'Resentment is like drinking poison and waiting for your enemies to die.',
  'Resentment is like drinking poison and waiting for your enemies to die.',
  'Do not take life too seriously. You will not get out alive.',
  'Resentment is like drinking poison and waiting for your enemies to die.',
  'You miss 100% of the shots you dont take.',
'Resentment is like drinking poison and waiting for your enemies to die.',
  'Resentment is like drinking poison and waiting for your enemies to die.',
  'Do not take life too seriously. You will not get out alive.',
  'Resentment is like drinking poison and waiting for your enemies to die.',
  'You miss 100% of the shots you dont take.',

  
];
var paper=[];
var nextBtn = document.getElementById("btn_next");

function changeText() {

  var textBox = document.getElementById("txt");
  var chapter =  Math.floor((Math.random()*story.length));
  if (chapter <= story.length) {
            textBox.dataset.chapter = chapter + 1;
            textBox.innerHTML = story[chapter ];
             
      }
     
}
nextBtn.addEventListener("click", changeText);