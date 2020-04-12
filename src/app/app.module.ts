import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListInventarioComponent } from './components/list-inventario/list-inventario.component';
import { ListContagemComponent } from './components/list-contagem/list-contagem.component';
import { ListLancamentoComponent } from './components/list-lancamento/list-lancamento.component';
import { MaterialModule } from './components/material/material.module';
import { LayoutsModule } from './components/layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListInventarioComponent,
    ListContagemComponent,
    ListLancamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
