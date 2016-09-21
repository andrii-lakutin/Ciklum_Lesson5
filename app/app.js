import angular from "angular";

import appCtrl from "./controllers/app.ctrl";

// CSS
import reset         from  "./scss/reset.scss";
import globalStyles  from  "./scss/global.scss";
import header        from  "./scss/header.scss";
import search        from  "./scss/search.scss";
import filters       from  "./scss/filters.scss";
import movies        from  "./scss/movies.scss";
import js            from  "./scss/jsStyles.scss";


angular.module('app',[]) 
	.controller('appCtrl', ['$http', appCtrl]);


//must be at the bottom of this file
angular.bootstrap(document, ['app']); 