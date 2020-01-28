import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private userID: string;
  private roomID: string = '';

  constructor(
    private roomService: RoomService,
  ) { 

   this.userID = Math.random().toString(36).replace('0.', '').slice(0, 4).toUpperCase();
  }

  ngOnInit() {
  }

  public createRoom(): void  {
    this.roomService.createRoom();
  }

  public joinRoom(): void {
    console.log(this.roomID);
    this.roomService.joinRoom(this.roomID, this.userID);
  }
}
