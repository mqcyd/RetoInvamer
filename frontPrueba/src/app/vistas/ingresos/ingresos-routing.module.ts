import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';


const routes: Routes = [
  {path:'',component:ListarComponent},
  {path:'crearUsuario', component: CreateUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
