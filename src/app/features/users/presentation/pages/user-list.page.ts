import { Component, OnInit } from '@angular/core';
import { UserListViewModel } from '../viewmodels/user-list.viewmodel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html'
})
export class UserListPage implements OnInit {
  constructor(public viewModel: UserListViewModel) {}

  ngOnInit(): void {
    this.viewModel.loadUsers();
  }
}
