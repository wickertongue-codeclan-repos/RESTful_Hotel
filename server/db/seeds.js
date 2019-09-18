use hotel_database;
db.dropDatabase();

db.bookings.insertMany([
  {

    guestName: "James",
    guestEmail: "james@james.com",
    checkedIn: true

  },
  {

    guestName: "Lames",
    guestEmail: "lames@dude.com",
    checkedIn: false

  },
  {

    guestName: "Cliff",
    guestEmail: "cliffedge@putlook.com",
    checkedIn: true

  }
])