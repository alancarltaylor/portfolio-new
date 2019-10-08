'use strict';
(function() {
  // console.log("archive-list loaded");
  angular.module('app')
    .component('archiveList', {
      controller: controller,
      templateUrl: "js/archive/archive-list.template.html"
    });

    controller.$inject = ['$http', '$state', '$stateParams'];

    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.activeFilter = "all";
      var archiveData = [];
      vm.photosLoaded = false;

      vm.$onInit = function() {
        $http.get('/app/archive').then(function (response) {
          console.log('lol, about to sort');
          archiveData = response.data;
          vm.archive = response.data;
          vm.photosLoaded = true;
        });
      };

      vm.updateFilter = function(newFilter) {
        vm.activeFilter = newFilter;
        console.log('archiveData: ', archiveData);
        // Clear archive and only display projects for this filter
        vm.archive = [];
        if (newFilter === "all") {
          vm.archive = archiveData;
        } else {
          for (var i = 0; i < archiveData.length; i++) {
            if (archiveData[i].tags.includes(newFilter)) {
              vm.archive.push(archiveData[i]);
            }
          }
        }
      };

      vm.selectProject = function (projectId) {
        $http.get(`app/archive/${projectId}`).then(function (response) {
          if (response.data.featured_state) {
            $state.go(response.data.featured_state);
          } else {
            $state.go("projectpage", { projectId: projectId});
          }
        });
      };
    }
})();
