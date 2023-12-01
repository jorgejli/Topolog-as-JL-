var paragraphs = document.querySelectorAll('.custom-paragraph');
        var currentIndex = 0;
    
        function showParagraph(index) {
          paragraphs.forEach(function(paragraph, i) {
            if (i === index) {
              paragraph.classList.add('showing');
            } else {
              paragraph.classList.remove('showing');
            }
          });
        }
    
        function changeParagraph(increment, event) {
          event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
          currentIndex = (currentIndex + increment + paragraphs.length) % paragraphs.length;
          showParagraph(currentIndex);
        }
    
        function showSign(sign) {
          sign.style.opacity = 1;
        }
    
        function hideSign(sign) {
          sign.style.opacity = 0;
        }