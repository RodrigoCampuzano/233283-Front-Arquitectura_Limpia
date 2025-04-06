import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service'; 
import { User } from '@core/models/user.model'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { ID: 0, Name: '', Email: '' };
  editingUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
      
    });
  }

  addUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { ID: 0, Name: '', Email: '' };
    });
  }

  editUser(user: User): void {
    this.editingUser = { ...user };
  }

  updateUser(): void {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser.ID, this.editingUser).subscribe(() => {
        this.loadUsers();
        this.editingUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
