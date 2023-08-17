document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controlls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');
  
    function pageTransitions() {
      for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
          const currentBtn = document.querySelector('.active-btn');
          if (currentBtn) {
            currentBtn.classList.remove('active-btn');
          }
          this.classList.add('active-btn');
        });
      }
  
      //Sections Active
      allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
          // Remove the 'active' class from other buttons
          sectBtns.forEach((btn) => {
            btn.classList.remove('active');
          });
  
          e.target.classList.add('active');
  
          // Hide other sections
          sections.forEach((section) => {
            section.classList.remove('active');
          });
  
          const element = document.getElementById(id);
          element.classList.add('active');
        }
      });
      //toggle theme
      const themeBtn=document.querySelector('.theme-btn');
      themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode')
      })
    }
  
    pageTransitions();
  });
  