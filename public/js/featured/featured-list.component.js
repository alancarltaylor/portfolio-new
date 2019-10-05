'use strict';
(function() {
  angular.module('app')
    .component('featuredList', {
      controller: controller,
      templateUrl: "js/featured/featured-list.template.html"
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
      console.log('running the controller');
      const vm = this;
      vm.activeFilter = "all";
      var archiveData = [];
      vm.photosLoaded = false;

      vm.$onInit = function() {
        $http.get('/app/featured').then(function (response) {
          archiveData = response.data;
          vm.archive = response.data;
          vm.photosLoaded = true;
        });
      };

      vm.updateFilter = function(newFilter) {
        vm.activeFilter = newFilter;
        vm.archive = [];
        if (newFilter === "all") {
          vm.archive = archiveData;
        } else {
          for (var i = 0; i < archiveData.length; i++) {
            if (archiveData[i].type === newFilter) {
              vm.archive.push(archiveData[i]);
            }
          }
        }
      };

      vm.selectProject = function (projectId) {
        $http.get(`app/featured/${projectId}`).then(function (response) {
          if (response.data.featured_state) {
            $state.go(response.data.featured_state);
          } else {
            $state.go("projectpage", { projectId: projectId});
          }
        });
      };
    }
})();
