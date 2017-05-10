export class Service { 
    buildApiLocation(root, api) {
        return (root.charAt(root.length - 1) == "/" ? root.substr(0, root.length - 1) : root) + 
            "/" + 
            (api.charAt(0) == "/" ? api.substr(1, api.length - 1) : api);
    }
}
