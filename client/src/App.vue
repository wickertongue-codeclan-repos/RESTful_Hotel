<template>

  <div>
    <h1>The REST-ful Hotel</h1>
      <booking-form></booking-form>
      <img src="./assets/sleepydino.jpg" alt="">
      <bookings-grid></bookings-grid>

  </div>

</template>

<script>
import BookingForm from './components/BookingForm'
import BookingsGrid from './components/BookingsGrid'

export default {
  name: 'app',
  components: {
    'bookings-grid': BookingsGrid,
    'booking-form': BookingForm
  }

}
</script>

<style>

img {
  width: 200px;
}


</style>