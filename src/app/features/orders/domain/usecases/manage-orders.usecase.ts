import { Injectable } from '@angular/core';
import { OrderRepository } from '../../data/repository/order.repository';
import { Order } from '../../data/models/order.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ManageOrdersUseCase {
  constructor(private orderRepository: OrderRepository) {}

  getOrders(): Observable<Order[]> {
    return this.orderRepository.getOrders();
  }

  addOrder(order: Order): Observable<Order> {
    return this.orderRepository.createOrder(order);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.orderRepository.updateOrder(id, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.orderRepository.deleteOrder(id);
  }
}
