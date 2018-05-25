import { Message } from './message.model';

export class MessageService {
	messages: Message[] = [];

	private addMessage(message: Message) {
		this.messages.push(message);
		console.log(this.messages);
	}

	getMessages() {
		return this.messages;
	}

	deleteMessage(message: Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}