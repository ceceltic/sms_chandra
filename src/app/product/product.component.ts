import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products=[{'name':'Asus','slug':'Search oncredeble','price':'3000'},
{'name':'Mi','slug':'Create thing','price':'30000'},
{'name':'Lava','slug':'But One get One','price':'5000'},
{'name':'Samsung','price':'400'}];
//public product=[];

share() {
  window.alert('The product has been shared!');
}
onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
constructor() { }

  ngOnInit() {

  }

}
