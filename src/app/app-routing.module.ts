import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContagemComponent } from './components/list-contagem/list-contagem.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListInventarioComponent } from './components/list-inventario/list-inventario.component';


const routes: Routes = [

  { path: 'contagem', component: ListContagemComponent},
  { path: 'inventario', component: ListInventarioComponent},
  { path: 'item', component: ListItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
