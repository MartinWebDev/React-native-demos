// Any imports we need
import { ServiceConfig } from './ServiceConfig';

// Import JSON files for demo purposes
var productListJSON = require("./ApiTestData/ProductsList.json");

// Setup the class and its functions
export class ProductService {
    constructor() {
        this.state = {
            apiRoot: ServiceConfig.ApiRoot, 
            apiUsername: ServiceConfig.ApiUsername, 
            apiPassword: ServiceConfig.ApiPassword, 

            productListApi: this.buildApiLocation(ServiceConfig.ApiRoot, ServiceConfig.ProductsListApi)
        };
    }

    buildApiLocation(root, api) {
        return (root.charAt(root.length - 1) == "/" ? root.substr(0, root.length - 1) : root) + 
            "/" + 
            (api.charAt(0) == "/" ? root.substr(1, api.length - 1) : api);
    }

    getProductsList() {
        return productListJSON;

        // In a real, live app this code below (or something similar) would be used. In this demo, we just load a JSON file
        // fetch(this.state.productListApi).then((response) => {
        //     console.log(reponse);
        //     return response.data;
        // }, 
        // (response) => {
        //     console.log(response);
        //     return response.error;
        // });
    }
}