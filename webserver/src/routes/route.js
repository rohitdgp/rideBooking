import driverController from '../controllers/driverController';
import riderController from '../controllers/riderController';
// import routeController from '../controllers/driverController';

export default(app) => {

    app.route('/api/v1/driver/add')
        .post(driverController.addDriver);
    app.route('/api/v1/driver/update')
        .post(driverController.updateDriver);
    app.route('/api/v1/driver/get')
        .get(driverController.getDriver);
    app.route('/api/v1/driver/acceptRequest')
        .get(driverController.acceptRequest);

    app.route('/api/v1/rider/add')
        .post(riderController.addRider);
    app.route('/api/v1/rider/update')
        .post(riderController.updateRider);
    app.route('/api/v1/rider/get')
        .get(riderController.getRider);
    app.route('/api/v1/rider/initiateBooking')
        .get(riderController.initiateSearch);
}