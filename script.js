var username = document.getElementById("username");
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
const commentSubmitted = document.getElementById("comment-submitted");
const commentValue = document.getElementById("comment-value");
const emailSubmitted = document.getElementById("email-submitted");
const emailValue = document.getElementById("email-value");
const usernameSubmitted = document.getElementById("username-submitted");
const usernameValue = document.getElementById("username-value");


function showInput() {
  usernameSubmitted.innerText = "name submitted: ";
  usernameValue.innerHTML = username.value;
  emailSubmitted.innerText = "email submitted: ";
  emailValue.innerHTML = email.value;
  commentSubmitted.innerText = "comment submitted: ";
  commentValue.innerHTML = comment.value;
};