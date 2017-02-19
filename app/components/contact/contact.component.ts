import { Component } from '@angular/core';
import { Contact } from './../../models/contact';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent  {
  public model = new Contact('', '', '');
}
