let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

const swiper = new Swiper('.about-sliders', {
    spaceBetween: 20,
    grabCursor:true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.getAttribute('action'), {
      method: 'POST',
      body: formData
    });

    const result = await response.text();
    console.log(result);

    if (response.ok) {
      alert('Form submitted successfully!');
      contactForm.reset();
      window.location.reload();
    } else {
      alert('Form submission failed. Please try again later.');
    }
  } catch (error) {
    console.error('Error', error);
    alert('Form submission failed. Please try again later.');
  }
});
