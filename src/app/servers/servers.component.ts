import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // select by attribute
  // selector: '.app-servers', // select by class
  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;

  constructor() {
    this.serverCreationStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    console.log(event.target.value);
    this.serverName = event.target.value;
  }
}
