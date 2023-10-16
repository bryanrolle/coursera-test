(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
    .directive('foundItems', FoundItemsDirective);

    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var narrowControl = this;
      narrowControl.searchTerm = '';
      narrowControl.found = [];
  
      narrowControl.search = function () {
        narrowControl.found = [];
        if ( narrowControl.searchTerm.trim() != "") {
            var promise = MenuSearchService.getMatchedMenuItems( narrowControl.searchTerm);
            promise.then(function (result) {
                narrowControl.found = result;
                console.log(result);
            })
            .catch(function (error) {
                console.log("Something went wrong: " + error);
            });
        }
      }
  
      narrowControl.remove = function (index) {
        narrowControl.found.splice(index, 1);
      }
    
    }
    
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
    
      service.getMatchedMenuItems = function (searchTerm) {
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        });
    
        return response.then(function (result) {
            var searchItems = [];
            var data = result.data;
      
            for (var category in data) {
                searchItems.push( data[category].menu_items.filter( item => item.description.toLowerCase().includes(searchTerm.toLowerCase()) )
                );
            }
            return searchItems.flat();
        });
      };
    
    }

    function FoundItemsDirective() {
        var found = {
            templateUrl: 'found.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };
  
        return found;
    } 
    
    })(); 
    
  