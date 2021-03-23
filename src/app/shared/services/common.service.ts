import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  cart: Array<any>;
  user;
  token;
  commonUrl = 'http://localhost:3000/';
  showloader: boolean;

  constructor(private toastr: ToastrService, private _router: Router) {
    this.updateMyCart();
    this.updateToken();
  }

  showLoader() {
    this.showloader = false;
  }

  hideLoader() {
    setTimeout(() => {
      this.showloader = false;
    }, 300);
  }

  getNumberofProductsAddedToCart(loginCartUpdate) {
    this.cart = loginCartUpdate || []; //value I got during login
    localStorage.setItem('updatedCart', JSON.stringify(this.cart)); //saved in local storage
    console.log(this.cart);
  }

  showSuccessToast(data, msg) {
    this.toastr.success(data, msg);
  }

  updateToken() {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  clearStorage() {
    this.token = '';
    this.user = '';
    localStorage.clear();
    this._router.navigateByUrl('/singin');
  }

  showErrorToast(data, msg) {
    this.toastr.error(data, msg);
  }
  updateMyCart() {
    this.cart = JSON.parse(localStorage.getItem('updatedCart'));
  }
}
