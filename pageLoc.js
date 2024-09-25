
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('blog');

      element.addEventListener('click', function() {
        let pageLocation = "blog.html";
    blog(pageLocation);
      });
        console.log('Element clicked!');
  });
document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('home');

      element.addEventListener('click', function() {
        let pageLocation = "index.html";
    blog(pageLocation);
      });
        console.log('Element clicked!');
  });
