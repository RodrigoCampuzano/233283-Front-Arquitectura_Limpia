import { Component, OnInit } from '@angular/core';
import { OrderService } from '@core/services/order.service';
import { Order } from '@core/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  newOrder: Order = { ID: 0, User_ID: 0, Amount: 0, Status: '' };
  editingOrder: Order | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(this.orders);
    });
  }

  addOrder(): void {
    this.orderService.createOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = { ID: 0, User_ID: 0, Amount: 0, Status: '' };
    });
  }

  editOrder(order: Order): void {
    this.editingOrder = { ...order };
  }

  updateOrder(): void {
    if (this.editingOrder) {
      this.orderService.updateOrder(this.editingOrder.ID, this.editingOrder).subscribe(() => {
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
