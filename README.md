# rideBooking [![Build](https://www.travis-ci.com/rohitdgp/rideBooking.svg?branch=main)](https://www.travis-ci.com/rohitdgp/rideBooking)

## Introduction
An application server for ride booking and lookups. Single server handling requests for Drivers and Riders - lookups and bookings.

### Driver Side
1. Every driver is assigned a vehicle and permitted ride types
2. Every driver has an associated current location. 
3. Drivers can accept a ride request 

### Consumer Side 
1. Users can raise a ride booking request by choosing a desired ride type and providing a starting & destination location. You can use polling for getting updated status while the ride matching is happening. 
2. Users can cancel the ride search without any penalty before the ride is confirmed. 3. Users can change the destination or add multiple stops to an ongoing ride. 
4. Users can view their ride history. [UI is not required, only the API is enough] 

### Ride Matching 
1. While matching/assigning drivers to a ride request, following are to be considered, a. Distance from the starting location 
b. Preferred ride type 


## Installation/Setup

* navigate to the rideBooking/webServer/src folder in the Project folder.
* Run the command `npm install`, to install the necessary packages.
* Once the necessary packages are installed in the previous step run the command `npm start` to run the application.
