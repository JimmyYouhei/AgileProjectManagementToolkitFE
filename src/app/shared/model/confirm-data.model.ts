import { BaseService } from '../service/base-service.service';

export class ConfirmDataModel {
    service : BaseService;
    id : number;
    text : string

    constructor(service : BaseService , id : number , text : string){
        this.service = service;
        this.id = id,
        this.text = text;
    }
}