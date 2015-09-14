(function (ng) {
    var mod = ng.module('doctorModule');

    mod.service('doctorService', ['$http', 'doctorContext', function ($http, context) {
            this.fetchRecords = function () {
                return $http.get(context);
            };

            this.fetchRecord = function (nombre) {
                return $http.get(context + "/" + nombre);
            };
            this.saveRecord = function (currentRecord) {
                if (currentRecord.nombre) {
                    return $http.put(context + "/" + currentRecord.nombre, currentRecord);
                } else {
                    return $http.post(context, currentRecord);
                }
            };
            this.deleteRecord = function (nombre) {
                return $http.delete(context + "/" + nombre);
            };
        }]);
})(window.angular);
