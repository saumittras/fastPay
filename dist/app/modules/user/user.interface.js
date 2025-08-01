"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["AGENT"] = "AGENT";
})(Role || (exports.Role = Role = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["PENDING"] = "PENDING";
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["BLOCKED"] = "BLOCKED";
    AccountStatus["FROZEN"] = "FROZEN";
    AccountStatus["CLOSED"] = "CLOSED";
    AccountStatus["DELETED"] = "DELETED";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
