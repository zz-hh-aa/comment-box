let Name = document.getElementById("name").value;
let Email = document.getElementById("email").value;
let Comment = document.getElementById("comment").value;

let Submit = document.getElementByID("submit");
let clicked = document.addEventListener("click");
let Body = document.addEventListener("body");
let newDiv = document.createElement("div");

// loop for char count
let CommentChars = Comment.split(""); 
let CommentCount = {};
for (var i = 0; i < CommentChars.length; i++) {
  if (CommentCount[CommentChars[i]] == undefined)
    CommentCount[CommentChars[i]] = 0;
  CommentCount[CommentChars[i]] += 1;
}

for (i in CommentCount)
{
  console.log(i + ' ' + CommentCount[i]);
}
// 

let length = Comment.str.length;
Comment.append(newDiv);
newDiv.textContent = length, "/140";

submitOK = "true";

if (Comment.length > 140) {
  alert("The name may have no more than 140 characters");
  submitOK = "false";
}
// else 
// submitOK = "true";

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