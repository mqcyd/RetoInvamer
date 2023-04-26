import { NgModule } from "@angular/core";
import{Routes, RouterModule} from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

const rutas: Routes = [
    {path:'login',loadChildren:()=>import('./vistas/login/login.module').then(m=>m.LoginModule)},
    {path:'dashboard',loadChildren:()=>import('./vistas/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'ingresos',loadChildren:()=>import('./vistas/ingresos/ingresos.module').then(m=>m.IngresosModule)},

    {path:'',redirectTo:'login',pathMatch:'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule, BrowserModule]
})

export class routing {}

