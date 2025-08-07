// Event listener for the sumbit form
document.getElementById('joinForm').addEventListener('submit', function(e) {
  // prevent default form from submitting
    e.preventDefault();

    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[89]\d{7}$/;

    //show error if the inputted phone patter don't match
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.style.display = 'block';
      phoneInput.focus();
      // Stop the function if the validation fails
      return; 
    } else {
      phoneError.style.display = 'none';
    }
    // Encode form
    const name   = encodeURIComponent(document.getElementById('name').value);
    const email  = encodeURIComponent(document.getElementById('email').value);
    const phone  = encodeURIComponent(document.getElementById('phone').value);
    const school = encodeURIComponent(document.getElementById('school').value);
    //if it matches, direct to thankyou.html
    if (typeof loadPage === "function") {
      loadPage(`thankyou.html?name=${name}&email=${email}&phone=${phone}&school=${school}`);
    } else {
      window.location.href = `thankyou.html?name=${name}&email=${email}&phone=${phone}&school=${school}`;
    }
  });