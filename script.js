// why isn't var name working??
// var name = document.getElementById("name");
// var email = document.getElementById("email");
var comment = document.getElementById("comment");
var submit = document.getElementById("submit");

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
// const nameResult = document.getElementById("name-result");
// const emailResult = document.getElementById("email-result");
const commentSubmitted = document.getElementById("comment-submitted");
// const nameValue = document.getElementById("name-value");
// const emailValue = document.getElementById("email-value");
const commentValue = document.getElementById("comment-value");


function showInput() {
  // nameResult.innerHTML = "name is: ", name;
  // emailResult.innerHTML = "email is: ", email;
  commentSubmitted.innerText = "comment submitted: ";
  // nameValue.innerHTML = name.value;
  // emailValue.innerHTML = email.value;
  commentValue.innerHTML = comment.value;
  console.log(comment.value);
};

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