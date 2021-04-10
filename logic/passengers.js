function Passengers() {
    checkFlightCapacity = (flightCapacity, passengersNumberArray) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalNumberOfPassengers = passengersNumberArray.reduce(reducer);

        if (totalNumberOfPassengers < flightCapacity) {
            return totalNumberOfPassengers;
        } else {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        }
    };

    // distributeAllSeatsToAllPassengers = (numberOfVipPassengers, numberOfRegularPassengers, numberOfFlights, numberOfBusinessSeatsPerFlight, numberOfEconomySeatsPerFlight) => {

    //     let vipCount = 0, vipPassengersBusinessSeats = 0, vipPassengersEconomySeats = 0;
    //     let regularCount = 0,regularPassengersBusinessSeats = 0, regularPassengersEconomySeats = 0;
    //     let availableBusiness = numberOfFlights * numberOfBusinessSeatsPerFlight;
    //     let availableRegular =  numberOfFlights * numberOfEconomySeatsPerFlight;

    //     while((vipCount < availableBusiness) && (vipCount < numberOfVipPassengers)){
    //         vipPassengersBusinessSeats += 1;
    //         vipCount += 1;
    //     }
    //     while((vipCount < numberOfVipPassengers) && (vipPassengersEconomySeats < availableRegular)){ 
    //         vipPassengersEconomySeats += 1;
    //         vipCount +=1;
    //     }
    //     while((vipPassengersBusinessSeats < availableBusiness) && (regularCount < availableBusiness) && (regularCount < availableRegular)){
    //         regularPassengersBusinessSeats += 1;
    //         regularCount += 1;
    //     }
    //     while((vipPassengersEconomySeats < availableRegular) && (regularPassengersEconomySeats < availableRegular) && (regularCount < numberOfRegularPassengers)){
    //         regularPassengersEconomySeats += 1;
    //         regularCount += 1;
    //     }
    //     return {vipPassengersBusinessSeats, vipPassengersEconomySeats, regularPassengersBusinessSeats, regularPassengersEconomySeats}
    //     // return passengers;
    // }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, 
        businessSeatsPerFlight, economySeatsPerFlight) {

        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, 
        regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

        var vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

        var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

        var regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
        regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

        var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
    }

    function updateConfiguration(configuration, seatsPerFlight) {
        let passengersWithSeats = 0;
        while (configuration.passengers > 0) {
            if (configuration.seats > 0) {
               if (configuration.passengers >= configuration.seats) {

                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
               } else {
                    passengersWithSeats += configuration.passengers;
                    configuration.seats -= configuration.passengers;
                    configuration.passengers = 0;
               }
            } else {
               break;
            }
        }
        return passengersWithSeats;
    }
    
    return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
};

module.exports = Passengers();
