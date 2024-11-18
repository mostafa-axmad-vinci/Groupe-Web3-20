  import { Component } from '@angular/core';

  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    template: `<!-- home.component.html -->
  <div class="container mt-5 text-white bg-dark p-5 rounded">
    <h1 class="text-center mb-4">Bienvenue sur notre page d'introduction à Angular !</h1>
    <p class="lead text-center">
      Angular est un framework puissant et structuré pour le développement d'applications web modernes. Créé par Google, il est conçu pour aider les développeurs à construire des applications performantes et évolutives, en particulier celles nécessitant une architecture bien définie.
    </p>
  
    <!-- Accordion pour les questions -->
    <div class="accordion mt-5" id="angularQuestions">
      <!-- Question 1 -->
      <div class="accordion-item bg-dark border border-secondary">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            1. Quels sont les cas d'utilisation de la techno ?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse bg-secondary" aria-labelledby="headingOne" data-bs-parent="#angularQuestions">
          <div class="accordion-body bg-dark text-white">
            Angular est idéal pour les applications à grande échelle comme les ERP, CRM, applications à page unique (SPA), et les Progressive Web Apps (PWA). Il est également utile pour des fonctionnalités complexes comme le data binding bidirectionnel, le routage dynamique, et la gestion des formulaires.
          </div>
        </div>
      </div>
  
      <!-- Question 2 -->
      <div class="accordion-item bg-dark border border-secondary">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            2. À quel besoin cette techno répond-elle ?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#angularQuestions">
          <div class="accordion-body bg-dark text-white">
            Angular facilite le développement d'applications web robustes et évolutives, avec une architecture structurée. Il utilise TypeScript pour minimiser les erreurs, améliorer la maintenabilité et accélérer le développement.
          </div>
        </div>
      </div>
  
      <!-- Question 3 -->
      <div class="accordion-item bg-dark border border-secondary">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3. Comment est-ce qu'on la met en œuvre ?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#angularQuestions">
          <div class="accordion-body bg-dark text-white">
            Installez Angular CLI avec <code>npm install -g &#64;angular/cli</code>, créez un projet avec <code>ng new project-name</code>, puis lancez-le avec <code>ng serve</code>. Utilisez <code>ng generate</code> pour ajouter des composants, services, ou modules.
          </div>
        </div>
      </div>
  
      <!-- Question 4 -->
      <div class="accordion-item bg-dark border border-secondary">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            4. Comment elle s'intègre dans le paysage du web aujourd'hui ?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#angularQuestions">
          <div class="accordion-body bg-dark text-white">
            Angular reste un choix populaire pour les applications d'entreprise nécessitant une architecture solide. Il est utilisé aux côtés de frameworks comme React et Vue.js, offrant une structure stricte et une scalabilité pour des projets complexes.
          </div>
        </div>
      </div>
  
      <!-- Question 5 -->
      <div class="accordion-item bg-dark border border-secondary">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button collapsed bg-white text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            5. Qu'est-ce que vous auriez aimé savoir avant de démarrer ?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#angularQuestions">
          <div class="accordion-body bg-dark text-white">
            La courbe d'apprentissage d'Angular peut être raide pour les débutants. Il est essentiel de bien comprendre les concepts de composants, services, et modules pour optimiser votre projet dès le début.
          </div>
        </div>
      </div>
    </div>
  </div>  `,
    styleUrl: './home.component.css'
  })
  export class HomeComponent {

  }
