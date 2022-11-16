function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element_show');
      }
    });
  }
  
  // появление для блока skill
  const options = {
    threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const skill = document.querySelectorAll('.skill');
  
  for (let elm of skill) {
    observer.observe(elm);
  }

  // появление для блока hobby

  const hobby = document.querySelectorAll('.hobby__info');
  
  for (let elm of hobby) {
    observer.observe(elm);
  }

// появление для блока footer

  const footer = document.querySelectorAll('.footer__email');
  
  for (let elm of footer) {
    observer.observe(elm);
  }
