import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent},

    { path: 'dashboard', 
        component: DashboardComponent,
        children: [
            { path: 'charts', component: ChartsComponent }
        ]
    },	
];
