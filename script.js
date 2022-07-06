const name = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const submit = document.getElementById("submit");
// needs to tell it what to do when clicked: const clicked = document.addEventListener("click",);
// might need to remove?: const body = document.addEventListener("body");
const nameResult = document.getElementById("name-result");
const emailResult = document.getElementById("email-result");
const commentResult = document.getElementById("comment-result");

// CHARACTER COUNT
const maxChars = 140;
const commentCounter = document.getElementById("comment-counter");
comment.addEventListener('input', () => {
  const charCount = comment.value.length;
  commentCounter.textContent = `${charCount} /140`;
  console.log(charCount)
});

// let commentChar = comment.split(""); 
// let commentCount = {};
// for (var i = 0; i < commentChars.length; i++) {
//   if (commentCount[commentChars[i]] == undefined)
//     commentCount[commentChars[i]] = 0;
//   commentCount[commentChars[i]] += 1;
// }
// for (i in commentCount)
// {
//   console.log(i + ' ' + commentCount[i]);
// }
// let length = comment.str.length;
// let commentCounter = document.getElementById("comment-counter")
// commentCounter.append(length);

// submitOK = "true";

// if (Comment.length > 140) {
//   alert("The name may have no more than 140 characters");
//   submitOK = "false";
// }
// // else 
// submitOK = "true";

// RETURN RESULTS

function showInput() {
    newDiv.innerText = "name is: ", Name, "email is: ", Email, "comment is: ", Comment;
    // submit.addEventListener('click',()=> {
    newDiv.textContent = "name is: ", Name, "email is: ", Email, "comment is: ", Comment;
    Body.append(newDiv)

    // if (submit === clicked) {
    //     submittedName.innerHTML = name;
    //     } else {
    //     submittedName.innerHTML = "";
        
        // submittedName.innerHTML = "name is:", name;
        // submittedEmail.innerHTML = "email is:", email;
        // submittedComment.innerHTML = "comment is", comment;  
    }
    // )
// }

// document.getElementById("results").innerHTML = 
//                 document.getElementById("name").value;
//                 document.getElementById("email").value;
//                 document.getElementById("comment").value;