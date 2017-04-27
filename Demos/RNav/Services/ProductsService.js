// Any imports we need
import { ServiceConfig } from './ServiceConfig';

import { Service } from './Service';

// Import JSON files for demo purposes
var productListJSON = require("./ApiTestData/ProductsList.json");

// Setup the class and its functions
export class ProductService extends Service {
    constructor() {
        super();

        this.state = {
            apiRoot: ServiceConfig.ApiRoot, 
            apiUsername: ServiceConfig.ApiUsername, 
            apiPassword: ServiceConfig.ApiPassword, 

            productListApi: super.buildApiLocation(ServiceConfig.ApiRoot, ServiceConfig.ProductsListApi)
        };
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

    getProductDetails(productId) {
        var allProds = productListJSON;
        
        for (var i = 0; i < allProds.length; i++) {
            if (allProds[i].productId == productId) 
                return allProds[i];
        }

        return null;
    }
}