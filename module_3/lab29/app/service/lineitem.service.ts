import {Injectable} from "@angular/core";
import {LINEITEMS} from "../mock/lineitem-mock";
import {Lineitem} from "../model/lineitem"; 

@Injectable()
export class LineitemService{
    getLineitems(): Promise<Lineitem[]>{
        return Promise.resolve(LINEITEMS);
    }

     getLineitem(linenumber: number): Promise<Lineitem> {
        return this.getLineitems()
            .then(lineitems => lineitems.find(lineitem => lineitem.linenumber === linenumber));
    }
}