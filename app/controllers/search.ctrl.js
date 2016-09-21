import globalCtrl from "../global.ctrl";

export default class searchCtrl extends globalCtrl {
	constructor($http){
		super();			// как с конструктора предка вытащить функцию http? 
		this.http = $http;   
		this.selectOptions = [{text : 'Movie', value : 'movie'},
							  {text : 'Series' , value : 'series'},
							  {text : 'Episode' , value : 'episode'}];
		this.selected = this.selectOptions[0];

		this.pages = [1,2,3,4,5,6,7,8,9];
		this.page = this.pages[0];

		this.searchInput = "";
		this.yearInput = "";
	}

	search(){
		super.getData({
			searchInput  : this.searchInput,
			yearInput    : this.yearInput,
			selectedValue: this.selected.value,
			page         : this.page
		});
	}

}