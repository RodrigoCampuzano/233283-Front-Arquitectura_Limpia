import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPage } from './features/users/presentation/pages/user-list.page';
import { OrderListPage } from './features/orders/presentation/pages/order-list.page';

const routes: Routes = [
  { path: 'users', component: UserListPage },
  { path: 'orders', component: OrderListPage },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
