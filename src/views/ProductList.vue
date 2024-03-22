<template>
    <div class="products">
      <table border="0" cellspacing="0" style="width:45%; table-layout: fixed;" align="center">
        <th>Product Name</th>
        <th>Price</th>
        <tr v-for="item in products" :key="item.id">
          <td align="left">{{ item.name }}</td>
          <td align="right">₱{{ item.price }}</td>
          <td class="button-add"><button @click="addToCart(item)">Add to Cart</button></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { cart } from "../main.js";
  
  export default {
    data() {
      return {
        products: [
          { name: "Dog Food (3kg bag)", price: 300 },
          { name: "Cat Litter (5kg bag)", price: 200 },
          { name: "Pet Shampoo (500ml bottle)", price: 150 },
          { name: "Dog Chew Toys", price: 250 },
          { name: "Cat Scratching Post", price: 400 },
          { name: "Pet Bed (Medium size)", price: 600 },
          { name: "Bird Cage (Medium size)", price: 800 },
          { name: "Fish Tank (20 gallons)", price: 1000 },
          { name: "Reptile Heating Lamp", price: 500 },
          { name: "Rabbit Hutch", price: 700 }
        ],
      };
    },
    methods: {
      addToCart(item) {
        let existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

        if (existingItemIndex !== -1) {
          cart[existingItemIndex].quantity++;
        } else {
          let totalPrice = item.price;
          let unitPrice = item.price;
          cart.push({
            name: item.name,
            price: totalPrice,
            unitPrice: unitPrice,
            quantity: 1
          });
          alert("You successfully added this product in the cart!")
        }
      },
    },
  };
  </script>
  
  <style>
    th{
      background-color: burlywood;
      border: none;
      padding: 1%;
    }

    tr {
      background-color: bisque;
    }

    td {
      padding: 1%;
      border: 1px solid white;
      border-top: none;
      border-left: 1px solid black;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }

    .button-add {
      background-color: white;
      border: none;
    }

    button {
      border: none;
      border-radius: 50px;
      font-size: medium;
      background-color: white;
    }

    button:hover {
      color: black;
      background-color: bisque;
      padding-left: 20px;
      padding-right: 20px;
    }
  </style>
  