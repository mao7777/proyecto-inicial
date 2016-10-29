import {Component, OnInit} from '@angular/core';
import { Lineitem } from '../model/lineitem';
import {LineitemService} from "../service/lineitem.service";
import {Router} from "@angular/router";

@Component({
    selector: 'lineitem-list-app',
    templateUrl: 'app/templates/lineitem-list.html',
    providers: [LineitemService]
})

export class LineitemListComponent implements OnInit {
    title: string = "lista";
    selected: Lineitem;
    lineitems: Lineitem[];

    constructor(private router: Router, private lineitemService: LineitemService) {

    }

    getLineitems() {
        this.lineitemService.getLineitems().then(lineitems => this.lineitems = lineitems);
    }

    ngOnInit(): void {
        this.getLineitems();
    }

    onSelect(lineitem: Lineitem){
        this.selected = lineitem;
    }

   /* gotoDetail(): void {
        this.router.navigate(['product/detail/', this.selected.id]);
    }*/
}
