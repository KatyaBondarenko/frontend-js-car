'use strict';

var car =  {
    color: 'white',
    dours: 4,
    speed: 0,
    defaultSpeed: 60,
    maxSpeed: 100,
    seats: 4,
    passengers: [],

    put: function(){

        if (this.passengers.length === this.seats) {
            return;
        }

        this.passengers.push(true);
    },

    land: function () {

        this.passengers.pop();
    },

    drive: function(speed){

        if (!this.passengers[0]) {

            this.speed = 0;
        }
        else if (speed > this.maxSpeed)
        {
            this.speed = this.maxSpeed;
        }
        else  if (speed === undefined) {
            this.speed = this.defaultSpeed;
        }
        else {
            this.speed = speed;
        }


    }

};

module.exports = car;