javascript
document.getElementById("review-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting
  alert("Thank you for submitting your review! We appreciate your feedback.");
});