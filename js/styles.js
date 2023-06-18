function handleSelect(event) {
  event.preventDefault();
  const q1 = parseInt(document.getElementById("q1").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);
  const q4 = parseInt(document.getElementById("q4").value);
  const q5 = parseInt(document.getElementById("q5").value);

  let result;
  if (q1 + q2 + q3 + q4 + q5 === 5) {
    result = "Ruby";
  }
  else if (q1 + q2 + q3 + q4 + q5 === 10) {
    result = "C#";
  }
  else if (q1 + q2 + q3 + q4 + q5 === 15) {
    result = "Python";
  }
  else {
    result ="Ruby";
  }

  document.getElementById("result").innerText = result;
}

window.onload = function () {
  const form = document.querySelector("form")
  form.addEventListener("submit", handleSelect)
}

