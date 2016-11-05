"use strict";
var InMemoryProductService /*implements InMemoryDbService */ = (function () {
    function InMemoryProductService /*implements InMemoryDbService */() {
    }
    InMemoryProductService /*implements InMemoryDbService */.prototype.createDb = function () {
        var products = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 2,
                name: "Samsung galaxy 10",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 3,
                name: "Samsung galaxy 20",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            }
        ];
        return { products: products };
    };
    return InMemoryProductService /*implements InMemoryDbService */;
}());
exports.InMemoryProductService /*implements InMemoryDbService */ = InMemoryProductService /*implements InMemoryDbService */;
//# sourceMappingURL=in-memory-product.service.js.map