import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDataModel } from '../model/confirm-data.model';
import { BaseService } from '../service/base-service.service';

@Component({
    selector: 'dialog-confirm-delete',
    templateUrl: 'confirm-delete.component.html',
  })
  export class ConfirmDeleteDialog {
    
    service : BaseService;
    id : number;
    text : string
    constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDataModel) {
        this.service = this.data.service;
        this.id = this.data.id;
        this.text = this.data.text
    }
        
    onCancel(){
        this.dialogRef.close(false);
    }

    onDelete(){
        this.service.deleteElement(this.id).subscribe(
            response => {
                this.dialogRef.close(true);
            } , 
            error => {
                console.log(error);
            }
        )
    }
}