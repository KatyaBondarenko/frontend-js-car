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


        if (this.passengers.length === 0) {
            return;
        }

        if (speed > this.maxSpeed)
        {
            speed = this.maxSpeed;
        }
        else
            speed =  speed;

    }

};

module.exports = car;