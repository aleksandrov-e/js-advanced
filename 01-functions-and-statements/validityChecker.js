function validityChecker(x1, y1, x2, y2) {

  function check(x1, y1, x2, y2) {
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (Number.isInteger(distance)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }

  check(x1, y1, 0, 0);
  check(x2, y2, 0, 0);
  check(x1, y1, x2, y2);
}
validityChecker(2, 1, 1, 1)