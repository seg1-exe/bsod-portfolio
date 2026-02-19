//btn to toggle language of reports
function toggleLanguage() {
    const englishReport = document.querySelector('.english-report');
    const frenchReport = document.querySelector('.french-report');
    const languageButton = document.querySelector('.language-btn');
  
    // Toggle visibility of the reports
    if (englishReport.style.display === 'none') {
      englishReport.style.display = 'block';
      frenchReport.style.display = 'none';
      languageButton.textContent = 'FR';
    } else {
      englishReport.style.display = 'none';
      frenchReport.style.display = 'block';
      languageButton.textContent = 'EN';
    }
}

//typewriter effect on index text
var i = 0;
var txt = 'Your PC ran into my portfolio and needs to explore it.<br>We’re just collecting some of my previous work,<br>and then we’ll show them to you.';
var speed = 30;

function typeWriter() {
    if (i < txt.length) {
        if (txt.charAt(i) === "<") {
        // Handle HTML tags like <br> correctly
        var tag = "";
        while (txt.charAt(i) !== ">" && i < txt.length) {
            tag += txt.charAt(i);
            i++;
        }
        tag += ">";
        document.getElementById("typewriter-container").innerHTML += tag;
        } else {
        document.getElementById("typewriter-container").innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = function() {
    typeWriter();
};

//Sections animations
const animatedDivs = document.querySelectorAll('.animated-section-bottom, .animated-section-top, .animated-section-left, .animated-section-right');
const bigImg = document.querySelectorAll('.bigImg');
const mdBody = document.querySelectorAll('.markdown-body')

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

animatedDivs.forEach(div => {
  observer.observe(div);
});

const bigImgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      imgObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

bigImg.forEach(img => {
  bigImgObserver.observe(img);
});

const mdBodyObserver = new IntersectionObserver((entries, bodyObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      bodyObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.02 });

mdBody.forEach(img => {
  mdBodyObserver.observe(img);
});

//redirection for study-cases
document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('.study-case');
  let mainSeen = false;
  let count = 0;
  const maxCount = 30;
  const intervalTime = 60;

  function checkMainVisibility() {
    const rect = mainElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      mainSeen = true;
      window.removeEventListener('scroll', checkMainVisibility);
      window.removeEventListener('resize', checkMainVisibility);
    }
  }

  window.addEventListener('scroll', checkMainVisibility);
  window.addEventListener('resize', checkMainVisibility);

  const interval = setInterval(() => {
    count++;

    if (count >= maxCount) {
      clearInterval(interval);
      if (!mainSeen) {
        mainElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, intervalTime);
});