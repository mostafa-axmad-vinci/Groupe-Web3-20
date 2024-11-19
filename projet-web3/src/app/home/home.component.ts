import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <section class="hero">
    <div class="hero-content text-center text-white">
      <h1 class="display-3 text-gradient">Bienvenue sur Angular Explorer</h1>
      <p class="lead mt-3">Découvrez comment Angular peut transformer vos projets web en chefs-d'œuvre modernes et performants.</p>
    </div>
  </section>

  <div class="container mt-5 p-5 rounded shadow-lg bg-light">
    <h2 class="text-center mb-4 display-5 text-primary">Foire Aux Questions</h2>
    <div class="accordion mt-5" id="angularQuestions">
      <!-- Question 1 -->
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <i class="bi bi-question-circle-fill me-2"></i> Quels sont les cas d'utilisation de la techno ?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#angularQuestions">
          <div class="accordion-body">
            Angular est idéal pour les ERP, CRM, applications à page unique (SPA), et Progressive Web Apps (PWA). Ses fonctionnalités avancées rendent les projets complexes plus faciles à gérer.
          </div>
        </div>
      </div>

      <!-- Question 2 -->
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <i class="bi bi-lightbulb-fill me-2"></i> À quel besoin cette techno répond-elle ?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#angularQuestions">
          <div class="accordion-body">
            Angular facilite le développement d'applications web robustes et évolutives, avec une architecture structurée. Il utilise TypeScript pour minimiser les erreurs et améliorer la maintenabilité.
          </div>
        </div>
      </div>

      <!-- Question 3 -->
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <i class="bi bi-tools me-2"></i> Comment est-ce qu'on la met en œuvre ?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#angularQuestions">
          <div class="accordion-body">
            Installez Angular CLI avec <code>npm install -g &#64;angular/cli</code>, créez un projet avec <code>ng new project-name</code>, puis lancez-le avec <code>ng serve</code>. Utilisez <code>ng generate</code> pour ajouter des composants, services, ou modules.
          </div>
        </div>
      </div>

      <!-- Question 4 -->
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <i class="bi bi-diagram-3-fill me-2"></i> Comment elle s'intègre dans le paysage du web aujourd'hui ?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#angularQuestions">
          <div class="accordion-body">
            Angular reste un choix populaire pour les applications d'entreprise nécessitant une architecture solide. Il est utilisé aux côtés de frameworks comme React et Vue.js.
          </div>
        </div>
      </div>

      <!-- Question 5 -->
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <i class="bi bi-info-circle-fill me-2"></i> Qu'est-ce que vous auriez aimé savoir avant de démarrer ?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#angularQuestions">
          <div class="accordion-body">
            La courbe d'apprentissage d'Angular peut être raide pour les débutants. Comprendre les concepts de composants, services et modules est essentiel.
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
