document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  const pupils = document.querySelectorAll(".pupil");
  pupils.forEach((pupil) => {
    const mx = event.pageX
    const my = event.pageY
    // scale mouse position from screen space to percentages 15% - 85%
    const vx = scale(mx, 0, innerWidth, 10, 100)
    const vy = scale(my, 0, innerHeight, 0, 55)
    pupil.style.transform = `translate(${vx}%, ${vy}%)`
  });
}

// scales value from inMin - inMax range to outMin - outMax range
function scale(value, inMin, inMax, outMin, outMax) {
  const percent = (value - inMin) / (inMax - inMin);
  const out = percent * (outMax - outMin) + outMin;
  return out
}