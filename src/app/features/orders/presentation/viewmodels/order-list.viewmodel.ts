import { Injectable } from '@angular/core';
import { ManageOrdersUseCase } from '../../domain/usecases/manage-orders.usecase';
import { Order } from '../../data/models/order.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderListViewModel {
  orders$ = new BehaviorSubject<Order[]>([]);
  newOrder: Order = { ID: 0, User_ID: 0, Amount: 0, Status: '' };
  editingOrder: Order | null = null;

  constructor(private manageOrdersUseCase: ManageOrdersUseCase) {}

  loadOrders(): void {
    this.manageOrdersUseCase.getOrders().subscribe((data) => this.orders$.next(data));
  }

  addOrder(): void {
    this.manageOrdersUseCase.addOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = { ID: 0, User_ID: 0, Amount: 0, Status: '' };
    });
  }

  editOrder(order: Order): void {
    this.editingOrder = { ...order };
  }

  updateOrder(): void {
    if (this.editingOrder) {
      this.manageOrdersUseCase.updateOrder(this.editingOrder.ID, this.editingOrder).subscribe(() => {
        this.loadOrders();
        this.editingOrder = null;
      });
    }
  }

  deleteOrder(id: number): void {
    this.manageOrdersUseCase.deleteOrder(id).subscribe(() => this.loadOrders());
  }
}
