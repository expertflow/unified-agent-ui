import { Component, OnInit, Inject, Input } from '@angular/core';
import { cacheService } from 'src/app/services/cache.service';
import { socketService } from 'src/app/services/socket.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-notifications',
  templateUrl: './chat-notifications.component.html',
  styleUrls: ['./chat-notifications.component.scss']
})
export class ChatNotificationsComponent implements OnInit {

  @Input() data: any;
  customerName: string = null;
  channel: string;
  identified: boolean = false;
  channelImageSrc: string;
  @Output() closeRequestHeaderEvent = new EventEmitter<boolean>();

  constructor(private _socketService: socketService, private _cacheService: cacheService) { }

  ngOnInit() {

    console.log("this is data ", this.data)
    if (this.data.channelSession.associatedCustomer.firstName) {
      this.customerName = this.data.channelSession.associatedCustomer.firstName;
      console.log("name " + this.data.channelSession.associatedCustomer.firstName)
      this.identified = true;
    }
    this.channel = this.data.channelSession.channel.type.name;
    console.log("channel " + this.data.channelSession.channel.type.name)
    this.channelImageSrc = 'assets/images/' + this.channel.toLowerCase() + '.svg';

  }

  getTopicSubscription() {
    this._socketService.emit('topicSubscription', { agentId: this._cacheService.agent.details.username, topicId: this.data.topicId });
    this.closeRequestHeaderEvent.emit(false);
  }

}
