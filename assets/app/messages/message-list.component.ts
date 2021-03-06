import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

import { MessageService } from './message.service';

@Component({
	selector: 'app-message-list',
	template: `
		<div class="col-md-8 col-md-offset-2">
			<app-message [testmsg]="tmessage" (editClicked)="tmessage.content = $event" 
			*ngFor="let tmessage of messages"></app-message>
		</div>
	`,
})
export class MessageListComponent implements OnInit {

    messages: Message[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
    	this.messages = this.messageService.getMessages();
    }
}