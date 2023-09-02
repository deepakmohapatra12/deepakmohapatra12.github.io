import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component')
      },
      {
        path: 'my-survey',
        loadComponent: () => import('./demo/my-survey/my-survey.component')
      },
      {
        path: 'my-survey-details',
        loadComponent: () => import('./demo/my-survey-details/my-survey-details.component')
      },
      {
        path: 'customers',
        loadComponent: () => import('./demo/customers/customers.component')
      },
      {
        path: 'roles',
        loadComponent: () => import('./demo/elements/roles/roles.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'add-survey',
        loadComponent: () => import('./demo/add-survey/add-survey.component')
      },
      {
        path: 'email-group',
        loadComponent: () => import('./demo/email-group/email-group.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
