// Syntax:
// $("selector").method();

//JS - document.getElementById("demo").innerHTML = "Hello. World!";
//JQ - $("#demo").html("Hello, World!");
//similar to querySelector


//similar to onlad in JS
/*
$(document).ready(function() {
  $("#demo").html("whatever");
});
*/


//List of the most commonly used selectors

// Wildcard / All selector
//selects every element on the page
// $("*")

// Tag
//selects every instanceof the <p> tag
// $("p")

// Class
// selects all elements with the example class
// $(".example")

// ID
//selects a single instance of the unique example id
// $("##example")

// Attribute
//selects any element with the text apllied to the type attribute
// $("[type='text']")

//Pseudo element
// selects the first <p> element
// $("p:first-of-type")



//EVENTS

/*
$(document).ready(function() {
  $("#trigger").click(function() {
    $("#demo").html("Hallo")
  });
});
*/


//The most commonly used event methods

//Click
//executes on a single mouse click
// click()

//Hover
//executes when the mouse is hovered over an element.
//hover()
//mouseenter() and mouseleave() apply only to the mouse entering or leaving the element

//Submit
// Executes when a form is submitted
// submit()

//Scroll
//executes when the screen is scrolled
// scroll()

//Keydown
//executes when key on keyoard is pressed
// keydown()


/*

$(document).ready(function() {
  $("#greeting").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#greeting").css("color", "chartreuse");
    } else {
      $("#greeting").css("color", "orangered");
    }
  })
})

*/




// DOUBLE EVENTS EXERCISE
/*
#  Insert mouseenter and mouseleave

**Complete with jQuery**

* Create a button that contains some text.
* When the user enters the mouse, the text of the button changes to 'Welcome! Stay here forever!'
* When the user's mouse leaves, change the text again to 'Dont go please!'.
*/

$(document).ready(function() {
  $("#hover-button").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#hover-button").html("Stay forever!");
    } else {
      $("#hover-button").html("No, come back!");
    }
  });
});





/*
# jQuery Drop Down

## Create a drop down menu

* Create a navbar that contains 5 list items. When the user clicks each list item, a drop down menu of three items should appear. In the mock up image provided, there are five movie names. When the user clicks one, a drop down menu appears with the names of the three main actors.
* If another movie title is clicked, the previous one closes and the new one opens.

**Hint**: You may want to create a class like 'shown' to make the dropdown list visible. When the link is clicked you may want to toggle this class to that specific menu item.

* Once you are finished with writing the code in vanilla JS, convert your code to Jquery.
*/

//VANILLA JS
/*
const colorsContainer = document.querySelector(".colors");

let isVisible = false;

const hideOnLoad = e => {
  const details = document.querySelectorAll(".details");
  [...details].map(list => list.style.display = "none");

  const colorSpans = document.querySelectorAll("span");
  [...colorSpans].map(color => color.style.pointerEvents = "none");
}

const showMatches = e => {
  if (e.target.tagName === "LI") {
    isVisible = !isVisible;

    if (isVisible) {
      e.target.lastElementChild.style.display = "block";
    } else {
      e.target.lastElementChild.style.display = "none";
    }

  }
}


hideOnLoad();

colorsContainer.addEventListener("click", showMatches);
*/

//JQUERY

$(document).ready(function() {
  $(".details").hide();
  $(".colors li").click(function() {
    $(".details", this).toggle();
  });
})


//To do List
// VANILLA JS

/*
const form = document.querySelector("form");
const todoText = document.getElementById("todoText");
const todoButton = document.getElementById("todoButton");
const listContainer = document.getElementById("listContainer");
const deleteButton = document.querySelector("#listContainer");

const addTodo = e => {
  const newListItem = document.createElement("li");
  const newText = document.createTextNode(`${todoText.value}`);
  newListItem.appendChild(newText);

  const newDelete = document.createElement("button");
  newDelete.innerHTML = "delete";
  newListItem.appendChild(newDelete);

  listContainer.appendChild(newListItem);
  e.preventDefault();
  todoText.value = "";

}

form.addEventListener("submit", addTodo);



const deleteItem = e => {
  if (e.target.tagName = "BUTTON") {
    e.target.closest("li").remove();
  }
}
deleteButton.addEventListener("click", deleteItem);
*/


//JQUERY
$(document).ready(function() {
  $("#todoButton").click(function(e) {
    let newList = $("<li></li>");
    let newText = $("#todoText").val();
    let newDelete = $("<button>Delete</button>");
    $(newList).append(newText);
    $(newList).append(newDelete);
    $(newList).appendTo("#listContainer");
    $("form")[0].reset();
    $("#listContainer button").click(function(e) {
      $(this).closest("li").remove();
    });
  });
})



//
