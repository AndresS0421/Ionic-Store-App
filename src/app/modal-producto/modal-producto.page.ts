import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.page.html',
  styleUrls: ['./modal-producto.page.scss'],
})
export class ModalProductoPage implements OnInit {
  @Input() product: any;
  productData = {
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precioCosto: 0,
    precioVenta: 0,
    url: ''
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.product) {
      this.productData = { ...this.product };
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveProduct() {
    if (!!this.productData.nombre && !!this.productData.cantidad && !!this.productData.precioVenta && !!this.productData.url) {
      this.modalCtrl.dismiss(this.productData);
    } else {
      alert("Faltan elementos");
    }
  }
}
