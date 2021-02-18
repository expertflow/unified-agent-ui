import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NoRouteFoundComponent } from './no-route-found/no-route-found.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SharedModule } from './shared/shared.module';
import { appConfigService } from './services/appConfig.service';
import { ChatNotificationsComponent } from './notifications/chat-notifications/chat-notifications.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import { AnnouncementComponent } from './announcement/announcement.component';
import {DashboardComponent} from './supervisor/dashboard/supervisor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoRouteFoundComponent,
    AppHeaderComponent,
    ChatNotificationsComponent,
    DashboardComponent,
    AnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  entryComponents: [
  ],
  providers: [appConfigService, MessageService, ConfirmationService,
    {
      provide: APP_INITIALIZER,
      useFactory: (_appConfigService: appConfigService) => () => _appConfigService.loadConfig(),
      deps: [appConfigService],
      multi: true
    }],
  exports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    DashboardComponent,
    AnnouncementComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
