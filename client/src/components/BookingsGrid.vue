<template>
  
<div>
  <table>
    <thead>
      <th>Guest Name</th>
      <th>Guest Email</th>
      <th>Checked In?</th>
      <th></th>
    </thead>
    <tbody>
      <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking"></booking-item>
    </tbody>
  </table>
</div>

</template>

<script>
import { eventBus } from '../main.js'
import BookingItem from './BookingItem'
import BookingsService from '../services/BookingsService.js'

export default {
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    BookingsService.getBookings()
    .then(bookings => this.bookings = bookings);

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

  },
  components: {
    'booking-item': BookingItem
  }
}
</script>

<style>

</style>