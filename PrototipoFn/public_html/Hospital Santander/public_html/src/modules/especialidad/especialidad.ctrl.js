(function (ng) {
    var mod = ng.module('especialidadModule');

    mod.controller('especialidadCtrl', ['$scope', 'especialidadService', function ($scope, svc) {
            $scope.currentRecord = {};
            $scope.records = [];

            //Variables para el controlador
            this.readOnly = false;
            this.editMode = false;

            var self = this;
            this.createRecord = function () {
                this.editMode = true;
                $scope.currentRecord = {};
            };

            this.editRecord = function (record) {
                return svc.fetchRecord(record.nombre).then(function (response) {
                    $scope.currentRecord = response.data;
                    self.editMode = true;
                    return response;
                });
            };

            this.fetchRecords = function () {
                return svc.fetchRecords().then(function (response) {
                    $scope.records = response.data;
                    $scope.currentRecord = {};
                    self.editMode = false;
                    return response;
                });
            };
            this.saveRecord = function () {
                return svc.saveRecord($scope.currentRecord).then(function () {
                    self.fetchRecords();
                });
            };
            this.deleteRecord = function (record) {
                return svc.deleteRecord(record.nombre).then(function () {
                    self.fetchRecords();
                });
            };

            this.fetchRecords();
        }]);
})(window.angular);
