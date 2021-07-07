import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QR } from '../entity/qr-object';
import { StorageutilService } from '../services/storageutil.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  showBackButton = true;
 title = 'History';
 showHistoryNav = false;
 historyList!: QR[];

 constructor(private storageService: StorageutilService,
 private snackbar: MatSnackBar ) { }

 ngOnInit() {
   this.populateHistory();
 }

 private populateHistory() {
   this.historyList = this.storageService.readAllHistory();
 }

 delete(text: string) {
   this.storageService.deleteHistory(text);
   this.populateHistory();
 }

 share(text: string) {
   this.snackbar.open(text, '', {duration: 2000,})
 }

}
