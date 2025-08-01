"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletStatus = exports.WalletType = exports.CurrencyType = void 0;
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["BDT"] = "BDT";
    CurrencyType["USD"] = "USD";
})(CurrencyType || (exports.CurrencyType = CurrencyType = {}));
var WalletType;
(function (WalletType) {
    WalletType["USER"] = "USER";
    WalletType["AGENT"] = "AGENT";
    WalletType["PENDINGAGENT"] = "PENDINGAGENT";
})(WalletType || (exports.WalletType = WalletType = {}));
var WalletStatus;
(function (WalletStatus) {
    WalletStatus["UNVERIFIED"] = "UNVERIFIED";
    WalletStatus["BLOCKED"] = "BLOCKED";
    WalletStatus["ACTIVE"] = "ACTIVE";
    WalletStatus["SUSPENDED"] = "SUSPENDED";
})(WalletStatus || (exports.WalletStatus = WalletStatus = {}));
