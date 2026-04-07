function timeToWalk(steps, footprintLength, speedKmH) {
  let distance = steps * footprintLength; 

  let speed = speedKmH / 3.6; 

  let time = distance / speed; 

  let rests = Math.floor(distance / 500);
  time += rests * 60;

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.round(time % 60);

  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5)