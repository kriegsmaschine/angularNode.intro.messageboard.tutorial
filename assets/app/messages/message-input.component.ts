import { Component } from '@angular/core';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
	selector: 'app-message-input',
	templateUrl: './message-input.component.html',
})
export class MessageInputComponent {

	constructor(private messageService: MessageService) {}

	onSubmit(form: NgForm) {
		const message = new Message(form.value.content, 'Scott');
		this.messageService.addMessage(message);
		form.resetForm(); // clears form text input field after save
	}
}