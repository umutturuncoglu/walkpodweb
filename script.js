document.addEventListener('DOMContentLoaded',()=>{
  const form=document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      alert('Thanks — we\'ll be in touch! (Form is demo-only)');
      form.reset();
    });
  }
});
