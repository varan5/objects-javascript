const restaurant = {
    name: 'Banana Leaf',
    guestCapacity: 100,
    guestCount: 0,
    checkAvailability: function (partySize) {
        const seatLeft = this.guestCapacity - this.guestCount
        return seatLeft >= partySize
    },
    seatParty: function (addSize) {
        this.guestCount += addSize
    },
    removeParty: function (removeSize) {
        this.guestCount -= removeSize
    }
}

restaurant.seatParty(99)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(7)
console.log(restaurant.checkAvailability(4)) 