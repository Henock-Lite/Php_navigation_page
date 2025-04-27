// Fonction pour changer de vue
function navigateTo(pageId) {
    const views = document.querySelectorAll('.view');
  
    views.forEach(view => {
      view.classList.remove('active'); 
    });
        
    const activeView = document.getElementById(pageId);
  
    if (activeView) {
      activeView.classList.add('active'); 
      window.history.pushState({page: pageId}, "", `#${pageId}`);
    } else {
      // Si la vue demandée n'existe pas, on retourne à l'accueil
      navigateTo('home');
    }
  }
  
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
    });
  });
  
  // Gestion du bouton "Retour" navigateur
  window.addEventListener('popstate', event => {
    if (event.state && event.state.page) {
      navigateTo(event.state.page);
    } else {
      navigateTo('#home');
    }
  });
  
  // Charger la vue par défaut
  navigateTo('#home');
  