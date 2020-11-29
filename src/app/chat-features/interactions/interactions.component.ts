import { Component, Input, OnInit } from '@angular/core';
import { sharedService } from 'src/app/services/shared.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss']
})
export class InteractionsComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('convers') convers: any;
  conversation = [];
  unidentified = true;
  isConnected = true;
  popTitle = "Notes"

  channelUrl = 'assets/images/web.svg';
  options: string[] = ['Glenn Helgass', ' Ev Gayforth', 'Adam Joe Stanler', 'Fayina Addinall', 'Doy Ortelt', 'Donnie Makiver', 'Verne West-Frimley', ' Ev Gayforth', 'Adam Joe Stanler', 'Fayina Addinall', 'Doy Ortelt', 'Donnie Makiver', 'Verne West-Frimley', 'Glenn Helgass', ' Ev Gayforth'];
  categories: string[] = ['Fayina Addinall', 'Doy Ortelt', ' Ev Gayforth', 'Adam Joe Stanler'];

  customer: any = {
    type: 'Customer',
    info: {
      channel: 'web',
      email: 'farhan.maqbool@expertflow.com',
      firstName: 'farhan',
      id: '',
      language: 'en',
      lastName: 'maqbool',
      name: 'farhan ',
      phone: '5555',
      refId: '5555',
      url: 'http://localhost:4200/',
    }
  };


  constructor(private _sharedService: sharedService, private dialog: MatDialog) {
  }

  ngOnInit() {
    // this.con = this.convers;
    console.log('con', this.convers[0].title);
  }

  openDialog(templateRef, e): void {
    this.popTitle = e;

    this.dialog.open(templateRef, {
      panelClass: 'wrap-dialog',
    });
  }


}
