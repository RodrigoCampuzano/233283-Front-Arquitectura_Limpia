import { Component, OnInit } from '@angular/core';
import { OrderService } from '@core/services/order.service';
import { Order } from '@core/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  newOrder: Order = { id: 0, userId: 0, amount: 0, status: '' };
  editingOrder: Order | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  addOrder(): void {
    this.orderService.createOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = { id: 0, userId: 0, amount: 0, status: '' };
    });
  }

  editOrder(order: Order): void {
    this.editingOrder = { ...order };
  }

  updateOrder(): void {
    if (this.editingOrder) {
      this.orderService.updateOrder(this.editingOrder.id, this.editingOrder).subscribe(() => {
        this.loadOrders();
        this.editingOrder = null;
      });
    }
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }
}
