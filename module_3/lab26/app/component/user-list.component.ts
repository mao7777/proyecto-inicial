import { Component, Input } from '@angular/core';


@Component({
	selector: 'user-list',
	templateUrl: 'app/templates/user-list.html'
})

export class UserListComponent {
	@Input()
	user: User;
}