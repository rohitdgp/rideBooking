import driverController from '../controllers/driverController';
import riderController from '../controllers/driverController';
import routeController from '../controllers/driverController';

export default(app) => {

    app.route('/api/driver/add')
        .post(driverController.addDriver);
    app.route('/api/driver/update')
        .post(driverController.updateDriver);
    app.route('/api/driver/get')
        .get(driverController.getDriver);
    app.route('/api/driver/getHistory')
        .get(driverController.getRideHistory);

    app.route('/api/rider/add')
        .post(riderController.addRider);
    app.route('/api/rider/update')
        .post(riderController.updateRider);
    app.route('/api/rider/get')
        .get(riderController.getRider);
    app.route('/api/rider/getHistory')
        .get(riderController.getRideHistory);
}