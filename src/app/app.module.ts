import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ServerComponent, ServersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
