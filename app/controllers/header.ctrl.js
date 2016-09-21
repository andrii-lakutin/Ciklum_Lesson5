import globalCtrl from "../global.ctrl";

export default class headerCtrl extends globalCtrl{
	constructor(){
		super();
		this.items = ['DELETE ALL','ONLY FAVORITE','SEARCH'];
		this.icons = ["fa fa-trash-o", "fa fa-star-o", "fa fa-search"];
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

	hideSearch(){
		angular.element(document.querySelector(".searchSection")).toggleClass('hide-search-js');
		angular.element(document.querySelector(".filtersSection")).toggleClass('hide-search-js');
		angular.element(document.querySelector(".moviesSection")).toggleClass('padding-if-search-hidden-js');
	}
}