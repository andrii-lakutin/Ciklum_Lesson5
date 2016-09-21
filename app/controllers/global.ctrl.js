export default class appCtrl {

	constructor($http){

		this.http = $http;

		this.items = ['DELETE ALL','ONLY FAVORITE','SEARCH'];
		this.icons = ["fa fa-trash-o", "fa fa-star-o", "fa fa-search"];

		this.selectOptions = [{text : 'Movie', value : 'movie'},
					  		  {text : 'Series' , value : 'series'},
					  		  {text : 'Episode' , value : 'episode'}];
		this.selected = this.selectOptions[0];

		this.pages = [1,2,3,4,5,6,7,8,9];
		this.page = this.pages[0];

		this.searchInput = "";
		this.yearInput = "";

		// result of search
		this.searchResult = [];

	}

	clickTarget(target){
		switch(target) {
   		case "DELETE ALL":
   		    break;
   		case "ONLY FAVORITE":
   			super.moviesFactory();
   		    break;
   		case "SEARCH":
   			this.hideSearch();
   		    break;
   		default:
   		    break; 
		}
	}

	getData(data){
		this.http({
			method: 'GET',
			url: `http://www.omdbapi.com/?s=${data.searchInput}&y=${data.yearInput}&type=${data.selectedValue}&plot=full&r=json&page=${data.page}`
		}).then(function successCallback(response) {
			console.log(response.data);
			this.moviesFactory(response.data);
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	hideSearch(){
		angular.element(document.querySelector(".searchSection")).toggleClass('hide-search-js');
		angular.element(document.querySelector(".filtersSection")).toggleClass('hide-search-js');
		angular.element(document.querySelector(".moviesSection")).toggleClass('padding-if-search-hidden-js');
	}


	search(){
		this.getData({
			searchInput  : this.searchInput,
			yearInput    : this.yearInput,
			selectedValue: this.selected.value,
			page         : this.page
		});
	}

}