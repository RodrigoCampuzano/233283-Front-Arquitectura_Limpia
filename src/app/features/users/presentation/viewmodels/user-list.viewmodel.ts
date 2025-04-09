import { Injectable } from '@angular/core';
import { ManageUsersUseCase } from '../../domain/usecases/manage-users.usecase';
import { User } from '../../data/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserListViewModel {
  users$ = new BehaviorSubject<User[]>([]);
  newUser: User = { ID: 0, Name: '', Email: '' };
  editingUser: User | null = null;

  constructor(private manageUsersUseCase: ManageUsersUseCase) {}

  loadUsers(): void {
    this.manageUsersUseCase.getUsers().subscribe((data) => this.users$.next(data));
  }

  addUser(): void {
    this.manageUsersUseCase.addUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { ID: 0, Name: '', Email: '' };
    });
  }

  editUser(user: User): void {
    this.editingUser = { ...user };
  }

  updateUser(): void {
    if (this.editingUser) {
      this.manageUsersUseCase.updateUser(this.editingUser.ID, this.editingUser).subscribe(() => {
        this.loadUsers();
        this.editingUser = null;
      });
    }
  }

  deleteUser(id: number): void {
    this.manageUsersUseCase.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
