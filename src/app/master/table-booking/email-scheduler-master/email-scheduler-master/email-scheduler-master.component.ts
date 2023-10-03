import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { TRANSLATE } from 'src/app/shared/constant/translate';
import {MatChipEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
export interface Fruit {
  name: string;
}
export interface Email {
  name: string;
}

@Component({
  selector: 'app-email-scheduler-master',
  templateUrl: './email-scheduler-master.component.html',
  styleUrls: ['./email-scheduler-master.component.scss'],
  
})

export class EmailSchedulerMasterComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Email1'}, {name: 'Email2'}, {name: 'Email3'}];
  emails: Email[] = [{name: 'asas'}, {name: 'Lime'}, {name: 'Apple'}];
  announcer: any;
  constructor() { }

  ngOnInit() {
  }
  addTo(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    // event.chipInput!.clear();
  }

  addCC(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.emails.push({name: value});
    }

    // Clear the input value
    // event.chipInput!.clear();
  }
  removeTo(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
    }
  }
  removeCC(email: Email): void {
    const index1 = this.emails.indexOf(email);
    if (index1 >= 0) {
      this.emails.splice(index1, 1);
      this.announcer.announce(`Removed ${email}`);
    }
  }

  // edit(fruit: Fruit, event: MatChipEditedEvent) {
  //   const value = event.value.trim();

  //   // Remove fruit if it no longer has a name
  //   if (!value) {
  //     this.remove(fruit);
  //     return;
  //   }

  //   // Edit existing fruit
  //   const index = this.fruits.indexOf(fruit);
  //   if (index >= 0) {
  //     this.fruits[index].name = value;
  //   }
  // }


}
