import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newUser = {
    name: '',
    username: '',
    password: '',
    storeName: '',
    storeUrl: ''
  };

  constructor(private modalCtrl: ModalController) { }

  registerUser() {
    try {
      console.log("Entré");
      let users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push({ id: Date.now(), ...this.newUser });
      localStorage.setItem('users', JSON.stringify(users));
      this.dismiss();
    } catch (error) {
      console.error("Error register:", error);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }
}
