import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommunityNetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community-net',
  templateUrl: 'community-net.html',
})
export class CommunityNetPage {
  public novoTopico: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.novoTopico = navParams.get('newTopic') || null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityNetPage');
  }  
}
