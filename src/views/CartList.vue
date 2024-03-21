<template>
  <div class="cart">
    <table style="width:100%; table-layout: fixed;" align="center">
      <th>Product Name</th>
      <th>Price</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <tr v-for="(item, index) in cart" :key="index">
        <td>{{ item.name }}</td>
        <td align="right">₱{{ computedItemPrice(item) }}</td>
        <td align="right"> ₱{{ item.unitPrice }}</td>
        <td align="right"><button @click="deductQuantity(index)">-</button> {{ item.quantity }}  <button @click="addQuantity(index)">+</button></td>
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
table, th, td {
  background-color: bisque;
}
</style>
