import {Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'user-detail-app',
    templateUrl: 'app/templates/user-detail.html',
    providers: [UserService]
})

export class UserDetailComponent implements OnInit {

    product: User;
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.userService.getProduct(id)
                .then(user => this.user = user);
        });
    }
}

