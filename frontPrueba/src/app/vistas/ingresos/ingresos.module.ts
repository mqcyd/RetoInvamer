;
import { ListarComponent } from './pages/listar/listar.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresosRoutingModule } from './ingresos-routing.module';



@NgModule({
  declarations: [
    
    ListarComponent
  ],
  imports: [
    CommonModule,
    IngresosRoutingModule
  ]
})
export class IngresosModule { }
