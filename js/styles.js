function handleSelect(event) {
  event.preventDefault();
  const q1 = document.getElementById("#q1").value;

let results;
  if (q1 === "App Design")
    results = "Ruby";

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", handleSelect);
});
}
