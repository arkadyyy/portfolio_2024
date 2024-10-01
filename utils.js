export function stringToEl(string) {
    var parser = new DOMParser(),
        content = 'text/html',
        DOM = parser.parseFromString(string, content);
  
    // return element
    return DOM.body.childNodes[0];
  }

export function removePrevElement() {
  
    const projectsContainer = document.querySelector('.project-list');
    const aboutMeContainer = document.querySelector('.about-me-container');
    const contactContainer = document.querySelector('.contact-container');
  
    if(projectsContainer) projectsContainer.remove();
    if(aboutMeContainer) aboutMeContainer.remove();
    if(contactContainer) contactContainer.remove();
  }
