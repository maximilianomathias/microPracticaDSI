import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contact } from "../models/contact.models";

@Injectable()
export class ContactService{

    private contactsRef = this.db.list<Contact>('Agenda2');
    //private contacts: Contact[]=[{"nombre":"Andres", "organizacion":"UC3M","movil":"666666666", correo:"andres@example.com"}];
    constructor(private db:AngularFireDatabase){
       
    }

    addContact(value: Contact){
        //this.contatcs.push(value);
        return this.contactsRef.push(value);
    }

    getConctacts(){
        return this.contactsRef;
    }

    updateContact(value: Contact){
        return this.contactsRef.update(value.key, value);
    }

    removeContact(value: Contact){
        return this.contactsRef.remove(value.key);
    }

    
    
}
