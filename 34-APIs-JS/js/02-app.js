//* Intersection Observer

const $ = selector => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver( (entries) => {
    if(entries[0].isIntersecting) {
      console.log('Visible');
    }
    else {
      console.log('No visible');
    }
  });

  observer.observe($('.premium'))
})









