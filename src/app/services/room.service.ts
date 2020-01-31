import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private socket: Socket,
  ) { }

  public createRoom(user: string): void {
    this.socket.emit(Room.Create, {userID: user});
  }

  public joinRoom(room: string, user: string): void {
    this.socket.emit(Room.Join, {roomID: room, userID: user});
  }
}
