const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
}

const bookingForm = document.querySelector('#bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(bookingForm);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const guests = data.get('guests') || '1';
    const option = data.get('option') || 'AUD $500 deposit';
    const note = data.get('note') || '';
    const subject = encodeURIComponent(`Gauras Tours booking request — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGuests: ${guests}\nBooking option: ${option}\n\nMessage:\n${note}`);
    window.location.href = `mailto:bookings@gaurastours.com?subject=${subject}&body=${body}`;
  });
}
