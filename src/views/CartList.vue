<template>
  <div class="cart">
    <table border="0" cellspacing="0" style="width:45%; table-layout: fixed;" align="center">
      <th>Product Name</th>
      <th>Price</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <tr v-for="(item, index) in cart" :key="index">
        <td align="left">{{ item.name }}</td>
        <td align="right">₱{{ computedItemPrice(item) }}</td>
        <td align="right"> ₱{{ item.unitPrice }}</td>
        <td align="center"><button class="cart-button" @click="deductQuantity(index)">-</button> {{ item.quantity }}  <button class="cart-button" @click="addQuantity(index)">+</button></td>
      </tr>
    </table>
      <div class="checkout">
        <p>Total Price: ₱{{ totalPrice }}</p>
      </div>
  </div>
</template>

<script>
import { cart } from "../main.js";

export default {
  data() {
    return {
      cart: cart,
    };
  },
  methods: {
    deductQuantity(index) {
    if (this.cart[index].quantity > 0) {
      this.cart[index].quantity--; // Decrease the quantity by 1
      this.updatePrice(index);
      }if (this.cart[index].quantity == 0){
        this.cart.splice(index, 1);
      }
    },
    addQuantity(index) {
      this.cart[index].quantity++; // Increase the quantity by 1
      this.updatePrice(index);
    },
    updatePrice(index) {
      this.cart[index].price = this.cart[index].unitPrice * this.cart[index].quantity;
    },
    computedItemPrice(item) {
      return item.unitPrice * item.quantity;
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + this.computedItemPrice(item), 0);
    }
  }
};
</script>

<style>
  th{
    background-color: burlywood;
  }

  tr {
    background-color: bisque;
    border-bottom: 1px solid brown;
  }

  .cart-button {
    background-color: burlywood;
    border: none;
    border-radius: 50px;
    height: 20px;
    width: 20px;
  }

  .cart-button:hover {
    color: white;
    background-color: brown;
    padding: 0%;
  }
</style>
