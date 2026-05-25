const stickyBarNav = document.getElementById('stickyBar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { 
    stickyBarNav.classList.add('active');   
  } else {
    stickyBarNav.classList.remove('active');
  }
});


const addressInputLocation = document.getElementById('addressInput'); 
const addressModalLocationNav = document.getElementById('addressModal');

const locationModal = document.getElementById('locationModal');
const closeBtn = document.getElementById('closeBtn');

 
addressInputLocation.addEventListener('click', () => {
  locationModal.classList.add('show');
});

addressModalLocationNav.addEventListener('click', () => {
  locationModal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  locationModal.classList.remove('show');
});

locationModal.addEventListener('click', (e) => {
  if (e.target === locationModal) {
    locationModal.classList.remove('show');
  }
});

 
