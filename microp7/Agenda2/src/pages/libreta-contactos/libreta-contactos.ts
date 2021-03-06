import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { Contact } from '../../models/contact.models';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';
import { VerContactoPage } from '../ver-contacto/ver-contacto';

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts$: Observable<Contact[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
  }

  ionViewWillEnter(){
    this.contacts$ = this.ContactService
    .getConctacts()
    .snapshotChanges()
    .map(
      changes=> {
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }));
      });

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  onLoadContactosPage(){
    this.navCtrl.push(NuevoContactoPage);
  }

  onItemTapped($event, contact){
    this.navCtrl.push(VerContactoPage, contact);
  }
}
