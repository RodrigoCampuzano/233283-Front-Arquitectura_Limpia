import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'orders', component: OrderListComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
