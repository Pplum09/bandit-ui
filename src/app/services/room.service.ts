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

  public createRoom(): void {
    this.socket.emit(Room.Create);
  }

  public joinRoom(roomID: string, userID: string): void {
    this.socket.emit(Room.Join, {roomID: roomID, userID: userID});
  }
}
