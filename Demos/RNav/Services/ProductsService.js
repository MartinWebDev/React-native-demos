// Any imports we need
import { ServiceConfig } from './ServiceConfig';

// Setup the class and its functions
export class ProductService {
    constructor() {
        this.state = {
            apiRoot: ServiceConfig.ApiRoot, 
            apiUsername: ServiceConfig.ApiUsername, 
            apiPassword: ServiceConfig.ApiPassword, 

            productListApi: buildApiLocation(ServiceConfig.apiRoot, ServiceConfig.ProductsListApi)
        };
    }

    private buildApiLocation(root, api) {
        return (root.charAt(root.length - 1) == "/" ? root.substr(0, root.length - 1) : root) + 
            "/" + 
            (api.charAt(0) == "/" ? root.substr(1, api.length - 1) : api);
    }

    getProductsList() {
        fetch(this.productListApi).then((response) => {
            console.log(reponse);
            return response.data;
        }, 
        (response) => {
            console.log(response);
            return response.error;
        });
    }
}