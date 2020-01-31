import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public room = new FormControl('');
  public name = new FormControl('');
  constructor(
    private roomService: RoomService,
  ) {}

  ngOnInit() {
  }

  public createRoom(): void  {
    this.roomService.createRoom(this.name.value);
  }

  public joinRoom(): void {
    console.log(this.room.value);
    this.roomService.joinRoom(this.room.value, this.name.value);
  }
}
