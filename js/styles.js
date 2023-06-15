function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
}

function handleSelect(event) {
  event.preventDefault();
  const q1 = document.querySelector("#q1").value;
  const q2 = document.querySelector("#q2").value;

  let result;
  if (q2 === "Cat") {
    result = "Ruby"
}
  //const q2 = document.getElementById("q2").value;
  //const q3 = document.getElementById("q3").value;
  //const q4 = document.getElementById("q4").value;
  //const q5 = document.getElementById("q5").value;


window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", handleSelect);
});


window.onload = function () {
    const form = document.querySelector("form")
    form.addEventListener("submit", handleSelect)
  }
}