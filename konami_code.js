const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;

  document.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail || e.location)

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Congrats bruh, that's the code.");
      }
    } else {
      index = 0;
    }
  });
}
