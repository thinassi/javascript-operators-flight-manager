function Flights() {
    calculateNumberOfFlights = (numberOfPassegenrs, flightCapacity) => {

        if (numberOfPassegenrs < 0) throw new Error('The number of passengers must be a positive integer value');
        if (flightCapacity < 0) throw new Error('The capacity of the flight must be a positive integer value');

        let numberOfFlights;
        if ((numberOfPassegenrs % flightCapacity) === 0){
            numberOfFlights = numberOfPassegenrs / flightCapacity;
        } else {
            numberOfFlights = (numberOfPassegenrs / flightCapacity) + 1;
        }
        return numberOfFlights;
    }

    checkAircraftRevision = (distanceLimit, distancesArray) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalDistance = distancesArray.reduce(reducer);
        
        if (totalDistance <= (distanceLimit / 2)) {
            return "The revision needs to be done within the next 3 months.";
        } else if ((totalDistance > (distanceLimit / 2)) && (totalDistance <= (3 * distanceLimit / 4)))  {
            return "The revision needs to be done within the next 2 months.";
        } else if ((totalDistance <= (3 * distanceLimit / 4)) && (totalDistance <= distanceLimit)) {
            return "The revision needs to be done within the next month.";
        } else {
            throw new Error();
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();
