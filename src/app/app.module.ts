import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Importa RouterModule

import { AppRoutingModule } from './app-routing.module'; // ✅ Importa correctamente
import { AppComponent } from './app.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // ✅ Asegúrate de incluir RouterModule aquí
    AppRoutingModule, // ✅ Esto debe ir después de RouterModule
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
