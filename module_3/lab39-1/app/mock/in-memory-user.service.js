"use strict";
var InMemoryUserService = (function () {
    function InMemoryUserService() {
    }
    InMemoryUserService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                email: "emol@hotmail.com",
                password: "em1234",
                firstname: "Pedro",
                lastname: "Perez",
                phone: 2000000
            },
            {
                id: 2,
                email: "polo1@hotmail.com",
                password: "polo1234",
                firstname: "Polo",
                lastname: "Pachanquique",
                phone: 2220000
            },
            {
                id: 3,
                email: "kikol@hotmail.com",
                password: "kik1234",
                firstname: "Joaquin",
                lastname: "Guzman",
                phone: 3433233
            }
        ];
        return { users: users };
    };
    return InMemoryUserService;
}());
exports.InMemoryUserService = InMemoryUserService;
//# sourceMappingURL=in-memory-user.service.js.map