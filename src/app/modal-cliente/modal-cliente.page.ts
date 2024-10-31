import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  @Input() client: any;
  clientData = {
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    url: ''
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.client) {
      this.clientData = { ...this.client }; // Copiar datos del cliente existente
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveClient() {
    if (!!this.clientData.nombre && !!this.clientData.telefono && !!this.clientData.email && !!this.clientData.url) {
      this.modalCtrl.dismiss(this.clientData);
    } else {
      alert("Faltan campos.");
    }
  }
}
