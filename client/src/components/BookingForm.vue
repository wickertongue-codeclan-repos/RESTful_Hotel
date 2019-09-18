<template>
  
  <form class="bookingForm" v-on:submit="addBooking" method="post">
    <p> 
      <label for="guestName">Guest Name:</label>
      <input type="text" id="guestName" v-model="guestName" required>
    </p>
    <p>
      <label for="guestEmail">Guest Email:</label>
      <input type="text" id="guestEmail" v-model="guestEmail" required>
    </p>
    <p>
      <select v-model="checkedIn" id="checkedIn">
        <option value=null text="Select an option..." disabled>Select an option...</option>
        <option value=true>Checked In</option>
        <option value=false>Not Yet Checked In</option>
      </select>
    </p>

    <input type="submit" value="save" id="save"/>
  </form>

</template>

<script>
import BookingsService from '../services/BookingsService'
import { eventBus } from '../main'

export default {
  data() {
    return {
      guestName: "",
      guestEmail: "",
      checkedIn: null
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      const booking = {
        guestName: this.guestName,
        guestEmail: this.guestEmail,
        checkedIn: this.checkedIn
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style>

.bookingForm {
  padding: 10px;
}

</style>