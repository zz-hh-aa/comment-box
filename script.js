var name = document.getElementById("name");
var email = document.getElementById("email");
var comment = document.getElementById("comment");
var submit = document.getElementById("submit");
// needs to tell it what to do when clicked: const clicked = document.addEventListener("click",);
// might need to remove?: const body = document.addEventListener("body");

// CHARACTER COUNT
const maxChars = 140;
const commentCounter = document.getElementById("comment-counter");
comment.addEventListener('input', () => {
  const charCount = comment.value.length;
  commentCounter.textContent = `${charCount} /140`;

  const colour = charCount < 140 ? 'black' : 'white';
  const weight = charCount < 140 ? 'normal' : 'bold';
  commentCounter.style.color = colour;
  commentCounter.style.fontWeight = weight;
});

// RETURN RESULTS
const nameResult = document.getElementById("name-result");
const emailResult = document.getElementById("email-result");
const commentResult = document.getElementById("comment-result");

function showInput() {
  nameResult.innerText = "name is: ", name.value;
  emailResult.innerText = "email is: ", email.value;
  commentResult.innerText = "comment is: ", comment.value;
  console.log(name.value, email.value, comment.value);
}

//   submit.addEventListener('click',()=> {
//     if (submit === clicked) {
//       nameResult.innerText = "name is: ", nameValue;
//       emailResult.innerText = "email is: ", emailValue;
//       commentResult.innerText = "comment is: ", commentValue;
//       console.log(nameValue, emailValue, commentValue);
//     } else {
//       nameResult.innerText = "";
//       emailResult.innerText = ""; 
//       commentResult.innerText = "";
//       console.log(null);
//     }
//   })
// }