import { Routes } from '@angular/router';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { RoutersDemoComponent } from './routers-demo/routers-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { HomeComponent } from './home/home.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'components', component: ComponentsDemoComponent },
    { path: 'routers', component: RoutersDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
    { path: 'apis', component: ApiDemoComponent },
    { path: 'quizz', component: QuizzComponent }
  ];

export default routes;  