const counters = document.querySelectorAll(".counter");

counters.forEach(counters => {
  counters.innerHTML = "0";

  const updateCounter = () => {
    const target = +counters.getAttribute("data-target");
    const c = +counters.innerHTML;
    const increment = target / 400;
  
    if (c < target) {
      counters.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counters.innerHTML = target;
    }
  };
  updateCounter();
});
