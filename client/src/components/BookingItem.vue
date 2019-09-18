<template>
  
    <tr>
      <td>{{booking.guestName}}</td>    
      <td>{{booking.guestEmail}}</td>    
      <td v-if="booking.checkedIn == true"> Checked In </td>
      <td v-else="booking.checkedIn == false"> Not Fucking Here</td>
      <td><button type="button" class="delete-button" v-on:click="deleteBooking">delete</button></td>  
    </tr>

</template>

<script>
import BookingsService from '../services/BookingsService.js'
import { eventBus } from '../main' 

export default {
  name: 'booking-item',
  props: ['booking'],
  methods: {
    deleteBooking() {
      BookingsService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    }
  }
}

</script>

<style scoped>

table, th, td {
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: ivory;
}

tr:hover {
  background-color: #f5ebbc;
}

</style>