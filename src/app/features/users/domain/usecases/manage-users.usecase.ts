import { Injectable } from '@angular/core';
import { UserRepository } from '../../data/repository/user.repository';
import { User } from '../../data/models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ManageUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  getUsers(): Observable<User[]> {
    return this.userRepository.getUsers();
  }

  addUser(user: User): Observable<User> {
    return this.userRepository.createUser(user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.userRepository.updateUser(id, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.userRepository.deleteUser(id);
  }
}
