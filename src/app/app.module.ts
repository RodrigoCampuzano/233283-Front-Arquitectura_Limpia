import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationWrapperComponent } from './core/navigation/navigation-wrapper.component';
import { UserListPage } from './features/users/presentation/pages/user-list.page';
import { OrderListPage } from './features/orders/presentation/pages/order-list.page';

@NgModule({
  declarations: [
    AppComponent,
    NavigationWrapperComponent,
    UserListPage,
    OrderListPage
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
