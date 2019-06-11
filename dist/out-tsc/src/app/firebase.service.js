import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { http } from '@angular/http';
var FirebaseService = /** @class */ (function () {
    function FirebaseService(http) {
        this.http = http;
    }
    FirebaseService.prototype.storeServers = function (servers) {
        console.log("you are in the store method");
        return this.http.post('https://firestore-e6ff0.firebaseio.com/data.json', servers); // this will return observable .... 
    };
    FirebaseService.prototype.getServers = function () {
        return this.http.get('https://firestore-e6ff0.firebaseio.com/data.json');
    };
    FirebaseService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FirebaseService);
    return FirebaseService;
}());
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map