
  // So'rovlar
  let num1 = prompt("1 raqamni kiriting:");
  let opChoice = prompt("Tanglang:\n1) +\n2) /\n3) *\n4) -");
  let num2 = prompt("2 raqamni kiriting:");

  // Operator tanlash
  let operator;
  switch (opChoice) {
    case "1": operator = "+"; break;
    case "2": operator = "/"; break;
    case "3": operator = "*"; break;
    case "4": operator = "-"; break;
    default: operator = "+";
  }

  // Bitta katta box
  let box = document.createElement('div');
  box.style.width = "400px";
  box.style.background = "#f0ad4e";
  box.style.padding = "25px";
  box.style.borderRadius = "10px";
  box.style.margin = "40px auto";
  box.style.textAlign = "center";
  document.body.appendChild(box);

  // Kvadrat yaratish funksiyasi
  function createSquare(text) {
    let sq = document.createElement('div');
    sq.innerText = text;
    sq.style.width = "80px";
    sq.style.height = "80px";
    sq.style.border = "3px solid black";
    sq.style.display = "inline-flex";
    sq.style.justifyContent = "center";
    sq.style.alignItems = "center";
    sq.style.fontSize = "24px";
    sq.style.fontWeight = "bold";
    sq.style.background = "white";
    sq.style.margin = "10px";
    return sq;
  }

  // Uchta kvadrat
  box.appendChild(createSquare(num1));
  box.appendChild(createSquare(operator));
  box.appendChild(createSquare(num2));

  // Tugma
  let btn = document.createElement('button');
  btn.innerText = "Check";
  btn.style.background = "green";
  btn.style.color = "white";
  btn.style.padding = "12px 30px";
  btn.style.border = "none";
  btn.style.borderRadius = "18px";
  btn.style.cursor = "pointer";
  btn.style.display = "block";
  btn.style.margin = "15px auto";
  box.appendChild(btn);

  // Natija
  let res = document.createElement('div');
  res.innerText = "?";
  res.style.width = "180px";
  res.style.height = "60px";
  res.style.background = "red";
  res.style.color = "white";
  res.style.fontSize = "22px";
  res.style.display = "flex";
  res.style.justifyContent = "center";
  res.style.alignItems = "center";
  res.style.margin = "auto";
  res.style.borderRadius = "5px";
  box.appendChild(res);

  // Hisoblash
  btn.onclick = function() {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let result;

    switch (operator) {
      case "+": result = n1 + n2; break;
      case "-": result = n1 - n2; break;
      case "*": result = n1 * n2; break;
      case "/": result = n2 !== 0 ? (n1 / n2).toFixed(2) : "Xato"; break;
    }
    res.innerText = result;
  }
