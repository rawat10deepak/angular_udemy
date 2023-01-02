import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: ['server.component.css'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = null;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
