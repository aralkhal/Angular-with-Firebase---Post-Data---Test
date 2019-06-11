import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
//import { observable } from '@angular/observable';
var AppComponent = /** @class */ (function () {
    function AppComponent(f) {
        this.f = f;
        this.title = 'firebaseHttpTest';
        this.name = '';
        this.test = '';
        this.test2 = '';
    }
    AppComponent.prototype.onClick = function () {
        this.f.storeServers(name)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FirebaseService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map