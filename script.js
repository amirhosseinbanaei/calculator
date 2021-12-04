const btns = document.querySelectorAll(".num-button");
const resultBox = document.querySelector("#result-box");
const clearBtn = document.querySelector("#clear")
const cBtn = document.querySelector('#c')
const total = document.querySelector("#total");
for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
      resultBox.textContent += btns[i].textContent;
   })
   total.addEventListener('click', function () {
      resultBox.textContent = eval(resultBox.textContent);
   })
}
clearBtn.addEventListener('click', function () {
   resultBox.textContent = '';
})
cBtn.addEventListener('click', function () {
   resultBox.textContent = resultBox.textContent.slice(0, -1);
})
document.body.addEventListener('keydown', function (e) {
   const keyboardBtns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '*', '-', '+', '/'];
   for (let c = 0; c < keyboardBtns.length; c++) {
      if (e.key == keyboardBtns[c]) {
         resultBox.textContent += keyboardBtns[c]
      }
   }
   if (e.key == 'Enter') {
      resultBox.textContent = eval(resultBox.textContent);
   } else if (e.key == 'Backspace'){
      resultBox.textContent = resultBox.textContent.slice(0, -1);
   } else if (e.key == 'Delete' || e.key == 'Escape'){
      resultBox.textContent = '';
   }
})
