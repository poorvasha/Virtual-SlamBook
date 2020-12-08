import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { ForeverPage } from '../forever/forever.page';

@Component({
  selector: 'app-wishes-page',
  templateUrl: './wishes-page.page.html',
  styleUrls: ['./wishes-page.page.scss'],
})
export class WishesPagePage implements OnInit {
  persons: any;
  spaceIndex: any;
  nameLetter: any;
  constructor(private router: Router, private fireStore: AngularFirestore) { }


  ngOnInit() {

    // to get wishes collection form database and it has been subscribed because it returns the value as observable
    this.fireStore.collection<any>('Wishes').valueChanges().subscribe( (data) => {

      this.persons = data;

      //     element.Name.replace( /element.Name.charAt(0)/ 'element.Name.charAt(0).toUpperCase()');
      //     element.Wish[0] = element.Wish.charAt(0).toUpperCase();

      //     this.spaceIndex = element.Name.indexOf(' ');

      //     if(this.spaceIndex !== -1){
      //       element.Name[this.spaceIndex + 1] = element.Name.charAt(this.spaceIndex + 1).toUpperCase();
      //     }

      //     console.log(element);
      // });


    });

  }

  foreverPageNav(){
    this.router.navigate(['forever']);
  }
}
