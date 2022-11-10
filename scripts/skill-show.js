function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('skill_show');
      }
    });
  }
  
  const options = {
    threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll('.skill');
  
  for (let elm of elements) {
    observer.observe(elm);
  }