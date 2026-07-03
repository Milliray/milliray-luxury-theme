// Minimal theme JS (placeholder)
document.addEventListener('DOMContentLoaded', function(){
  // Simple progressive enhancement: ensure add-to-cart buttons have basic behavior
  document.querySelectorAll('form[action="/cart/add"]').forEach(function(form){
    form.addEventListener('submit', function(e){
      // let the browser submit; could add AJAX later
    });
  });
});
