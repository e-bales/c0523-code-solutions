const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formObject = {};
  const email = $contactForm.elements.email.value;
  const name = $contactForm.elements.name.value;
  const message = $contactForm.elements.message.value;
  formObject.name = name;
  formObject.email = email;
  formObject.message = message;
  console.log(formObject);
  $contactForm.reset();
});
