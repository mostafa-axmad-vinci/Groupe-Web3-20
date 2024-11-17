import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template:`<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <img src="../assets/logo.jpg" alt="logo" width="50" height="50">
    <div class="collapse navbar-collapse justify-content-center" id="navbarColor01">
      <ul class="navbar-nav mx-auto d-flex align-items-center"> <!-- Ajout de d-flex et align-items-center -->
        <li class="nav-item">
          <a class="nav-link active" href="/components">Components</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/forms">Forms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active quizz-link" href="/forms">Quizz</a> <!-- Lien Quizz -->
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/routers">Routers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/apis">API</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>  
`,
  styleUrl: './app.component.css',

})


export class AppComponent {
  title = 'projet-web3';
}
