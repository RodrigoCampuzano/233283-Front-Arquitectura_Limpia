import { Component, OnInit } from '@angular/core';
import { OrderListViewModel } from '../viewmodels/order-list.viewmodel';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html'
})
export class OrderListPage implements OnInit {
  constructor(public viewModel: OrderListViewModel) {}

  ngOnInit(): void {
    this.viewModel.loadOrders();
  }
}
