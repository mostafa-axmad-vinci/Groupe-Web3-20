import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow sticky-top">
      <div class="container-fluid">
        <a routerLink="/" class="navbar-brand d-flex align-items-center">
        <img src="../assets/logo.jpg" alt="logo" class="logo me-2" width="50" height="50">
        <span class="fs-3 fw-bold text-gradient">Club 4</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/components" routerLinkActive="active">Components</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/forms" routerLinkActive="active">Forms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/quizz" routerLinkActive="active">Quizz</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/routers" routerLinkActive="active">Routers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/apis" routerLinkActive="active">API</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mt-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projet-web3';
}
