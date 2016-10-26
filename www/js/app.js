(function() {
  var app = angular.module('myreddit', ['ionic','ngCordova'])
  /*====================================================CONFIG=====================================================================*/

  app.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider.state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:'HomeCtrl'
    })
    $stateProvider.state('DM',{
      url:'/DM',
      templateUrl:'templates/DM.html',
      controller:'FeedController'
    })
    $stateProvider.state('DK',{
      url:'/DK',
      templateUrl:'templates/DK.html',
      controller:'FeedControllerr'
    })

    $urlRouterProvider.otherwise('/home')
  })
  /*====================================================HOMECTRL=====================================================================*/

  app.controller('HomeCtrl', function($scope, $http, $cordovaSocialSharing, $ionicLoading, $timeout, $state) {
    /*=======================================================FONCTIONPARTAGE==================================================================*/

    $scope.shareAnywhere = function($message, $title, $link){
      $cordovaSocialSharing.share($message,
        $title,
        null, 
        $link);
    }
    /*=======================================================RAFRAICHIRPULL==================================================================*/

    $scope.stories = [];
    $scope.doRefresh = function() {
      var url = decodeURIComponent(escape("http://www.villedecomines-warneton.be/actualites/index/atom.xml"));

      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


      var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));
      
      request.success(function(res) {
       $scope.stories = res.responseData.feed.entries;
     })
      request.finally(function() {

       $scope.$broadcast('scroll.refreshComplete');
     });
    };
    /*=======================================================APPELRETOURSJSON==================================================================*/
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    }); $timeout(function () {
      $ionicLoading.hide();
    $scope.stories = [];
    var url = decodeURIComponent(escape("http://www.villedecomines-warneton.be/actualites/index/atom.xml"));

    var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


    var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));

    request.success(function(res){

      $scope.stories = res.responseData.feed.entries;
      window.localStorage["stories"] = JSON.stringify(res.responseData.feed.entries);
      $state.go($state.current, {}, {reload: true});


    })  
    request.error(function(res) {
      if(window.localStorage["stories"] !== undefined) {
        $scope.stories = JSON.parse(window.localStorage["stories"]);
      }
    });
    }, 2000);
  });
  /*====================================================DAMIENMENUCTRL=====================================================================*/

  app.controller('FeedController', function($scope, $http, $cordovaSocialSharing, $ionicLoading, $timeout, $state) {
   /*=======================================================FONCTIONPARTAGE==================================================================*/

   $scope.shareAnywhere = function($title, $link){
     $cordovaSocialSharing.share(null,
      $title,
      null, 
      $link);  
   }
   /*=======================================================RAFRAICHIRPULL==================================================================*/

   $scope.dams = [];
   $scope.doRefresh = function() {
    var url = decodeURIComponent(escape("http://static.blog4ever.com/2006/01/65303/rss_album_photos.xml"));

    var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


    var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));
    request.success(function(res) {
     $scope.dams = res.responseData.feed.entries;
   })
    request.finally(function() {

     $scope.$broadcast('scroll.refreshComplete');
   });
  };
  /*=======================================================APPELRETOURSJSON==================================================================*/
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  }); $timeout(function () {
    $ionicLoading.hide();
  $scope.dams = [];
  var url = decodeURIComponent(escape("http://static.blog4ever.com/2006/01/65303/rss_album_photos.xml"));

  var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


  var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));

  request.success(function(res){

    $scope.dams = res.responseData.feed.entries;
    window.localStorage["dams"] = JSON.stringify(res.responseData.feed.entries);
    $state.go($state.current, {}, {reload: true});

  })  
  request.error(function(res) {
    if(window.localStorage["dams"] !== undefined) {
      $scope.dams = JSON.parse(window.localStorage["dams"]);
    }
  });
  }, 2000);
});
  /*====================================================DAVIDCTRL=====================================================================*/

  app.controller('FeedControllerr', function($scope, $http, $cordovaSocialSharing, $ionicLoading, $timeout, $state) {
    /*=======================================================FONCTIONPARTAGE==================================================================*/

    $scope.shareAnywhere = function($message, $title, $link){
      $cordovaSocialSharing.share($message,
        $title,
        null, 
        $link);
    }
    /*=======================================================RAFRAICHIRPULL==================================================================*/

    $scope.davs = [];
    $scope.doRefresh = function() {
      var url = decodeURIComponent(escape("http://david-kyriakidis.com/feed"));

      var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


      var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));
      request.success(function(res) {
       $scope.davs = res.responseData.feed.entries;
     })
      request.finally(function() {

       $scope.$broadcast('scroll.refreshComplete');
     });
    };
    /*=======================================================APPELRETOURSJSON==================================================================*/
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    }); $timeout(function () {
      $ionicLoading.hide();
    $scope.davs = [];


    var url = decodeURIComponent(escape("http://david-kyriakidis.com/feed"));

    var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";


    var request = $http.jsonp(google_converter+ unescape(encodeURIComponent(url)));

    request.success(function(res){

      $scope.davs = res.responseData.feed.entries;
      window.localStorage["davs"] = JSON.stringify(res.responseData.feed.entries);
      $state.go($state.current, {}, {reload: true});
    })  
    request.error(function(res) {
      if(window.localStorage["davs"] !== undefined) {
        $scope.davs = JSON.parse(window.localStorage["davs"]);
      }
    });
    }, 2000);
  });
  /*====================================================APPREADY=====================================================================*/

  app.run(function($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(window.Connection){
      if(navigator.connection.type == Connection.NONE) {

        $ionicPopup.confirm({
          title: "Impossible d'accéder à Internet",
          content: "Votre appareil n'est pas connecté à Internet. (les informations proviennent du cache de l'application.)."
        })
        .then(function(result) {
          if(!result) {
            ionic.Platform.exitApp();
          }
        });
      }
    }
  });
  })
  /*====================================================FILTRES=====================================================================*/
  app.filter('utf', function () {
    return function (utf) {


      return utf.replace(/&euro;/g,'€').replace(/&oelig;/g,'œ').replace(/&Yuml;/g,'Y').replace(/&nbsp;/g,' ').replace(/&iexcl;/g,'i').replace(/&cent;/g,'¢').replace(/&pound;/g,'£').replace(/&curren;/g,'¤').replace(/&yen;/g,'¥').replace(/&brvbar;/g,'¦').replace(/&sect;/g,'§').replace(/&uml;/g,'¨').replace(/&copy;/g,'©').replace(/&ordf;/g,'ª').replace(/&laquo;/g,'«').replace(/&not;/g,'¬').replace(/&reg;/g,'®').replace(/&masr;/g,'¯').replace(/&deg;/g,'°').replace(/&plusmn;/g,'±').replace(/&sup2;/g,'²').replace(/&sup3;/g,'³').replace(/&acute;/g,"'").replace(/&micro;/g,'µ').replace(/&para;/g,'¶').replace(/&middot;/g,'·').replace(/&cedil;/g,'¸').replace(/&sup1;/g,'¹').replace(/&ordm;/g,'º').replace(/&raquo;/g,'»').replace(/&frac14;/g,'¼').replace(/&frac12;/g,'½').replace(/&frac34;/g,'¾').replace(/&iquest;/g,'¿').replace(/&Agrave;/g,'À').replace(/&Aacute;/g,'Á').replace(/&Acirc;/g,'Â').replace(/&Atilde;/g,'Ã').replace(/&Auml;/g,'Ä').replace(/&Aring;/g,'Å').replace(/&Aelig/g,'Æ').replace(/&Ccedil;/g,'Ç').replace(/&Egrave;/g,'È').replace(/&Eacute;/g,'É').replace(/&Ecirc;/g,'Ê').replace(/&Euml;/g,'Ë').replace(/&Igrave;/g,'Ì').replace(/&Iacute;/g,'Í').replace(/&Icirc;/g,'Î').replace(/&Iuml;/g,'Ï').replace(/&eth;/g,'Ð').replace(/&Ntilde;/g,'Ñ').replace(/&Ograve;/g,'Ò').replace(/&Oacute;/g,'Ó').replace(/&Ocirc;/g,'Ô').replace(/&Otilde;/g,'Õ').replace(/&Ouml;/g,'Ö').replace(/&times;/g,'×').replace(/&Oslash;/g,'Ø').replace(/&Ugrave;/g,'Ù').replace(/&Uacute;/g,'Ú').replace(/&Ucirc;/g,'Û').replace(/&Uuml;/g,'Ü').replace(/&Yacute;/g,'Ý').replace(/&thorn;/g,'Þ').replace(/&szlig;/g,'ß').replace(/&agrave;/g,'à').replace(/&aacute;/g,'á').replace(/&acirc;/g,'â').replace(/&atilde;/g,'ã').replace(/&auml;/g,'ä').replace(/&aring;/g,'å').replace(/&aelig;/g,'æ').replace(/&ccedil;/g,'ç').replace(/&egrave;/g,'è').replace(/&eacute;/g,'é').replace(/&ecirc;/g,'ê').replace(/&euml;/g,'ë').replace(/&igrave;/g,'ì').replace(/&iacute;/g,'í').replace(/&icirc;/g,'î').replace(/&iuml;/g,'ï').replace(/&eth;/g,'ð').replace(/&ntilde;/g,'ñ').replace(/&ograve;/g,'ò').replace(/&oacute;/g,'ó').replace(/&ocirc;/g,'ô').replace(/&otilde;/g,'õ').replace(/&ouml;/g,'ö').replace(/&divide;/g,'÷').replace(/&oslash;/g,'ø').replace(/&ugrave;/g,'ù').replace(/&uacute;/g,'ú').replace(/&ucirc;/g,'û').replace(/&uuml;/g,'ü').replace(/&yacute;/g,'ý').replace(/&thorn;/g,'þ').replace(/&yuml;/g,'ÿ').replace(/&e/g,'è').replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
    };
  });
  app.filter('utff', function () {
    return function (utff) {


      return utff.replace(/&#32;/g,' ').replace(/&#33;/g,'!').replace(/&#34;/g,'\"').replace(/&#39;/g,'\'').replace(/&#40;/g,'(').replace(/&#41;/g,')').replace(/&#42;/g,'*').replace(/&#43;/g,'+').replace(/&#44;/g,',').replace(/&#45;/g,'-').replace(/&#46;/g,'.').replace(/&#47;/g,'/').replace(/&#48;/g,'0').replace(/&#49;/g,'1').replace(/&#50;/g,'2').replace(/&#51;/g,'3').replace(/&#52;/g,'4').replace(/&#53;/g,'5').replace(/&#54;/g,'6').replace(/&#55;/g,'7').replace(/&#56;/g,'8').replace(/&#57;/g,'9').replace(/&#58;/g,':').replace(/&#59;/g,';').replace(/&#60;/g,'<').replace(/&#61;/g,'=').replace(/&#62;/g,'>').replace(/&#63;/g,'?').replace(/&#64;/g,'@').replace(/&#65;/g,'A').replace(/&#66;/g,'B').replace(/&#67;/g,'C').replace(/&#68;/g,'D').replace(/&#69;/g,'E').replace(/&#70;/g,'F').replace(/&#71;/g,'G').replace(/&#72;/g,'H').replace(/&#73;/g,'I').replace(/&#74;/g,'J').replace(/&#75;/g,'K').replace(/&#76;/g,'L').replace(/&#77;/g,'M').replace(/&#78;/g,'N').replace(/&#79;/g,'O').replace(/&#80;/g,'P').replace(/&#81;/g,'Q').replace(/&#82;/g,'R').replace(/&#83;/g,'S').replace(/&#84;/g,'T').replace(/&#85;/g,'U').replace(/&#86;/g,'V').replace(/&#87;/g,'W').replace(/&#88;/g,'X').replace(/&#89;/g,'Y').replace(/&#90;/g,'Z').replace(/&#91;/g,'[').replace(/&#92;/g,'\\').replace(/&#93;/g,']').replace(/&#94;/g,'^').replace(/&#95;/g,'_').replace(/&#96;/g,'`').replace(/&#97;/g,'a').replace(/&#98;/g,'b').replace(/&#99;/g,'c').replace(/&#100;/g,'d').replace(/&#101;/g,'e').replace(/&#102;/g,'f').replace(/&#103;/g,'g').replace(/&#104;/g,'h').replace(/&#105;/g,'i').replace(/&#106;/g,'j').replace(/&#107;/g,'k').replace(/&#108;/g,'l').replace(/&#109;/g,'m').replace(/&#110;/g,'n').replace(/&#111;/g,'o').replace(/&#112;/g,'p').replace(/&#113;/g,'q').replace(/&#114;/g,'r').replace(/&#115;/g,'s').replace(/&#116;/g,'t').replace(/&#117;/g,'u').replace(/&#118;/g,'v').replace(/&#119;/g,'w').replace(/&#120;/g,'x').replace(/&#121;/g,'y').replace(/&#122;/g,'z').replace(/&#123;/g,'{').replace(/&#124;/g,'|').replace(/&#125;/g,'}').replace(/&#126;/g,'~').replace(/&#160;/g,' ').replace(/&#161;/g,'¡').replace(/&#162;/g,'¢').replace(/&#163;/g,'£').replace(/&#164;/g,'¤').replace(/&#165;/g,'¥').replace(/&#166;/g,'¦').replace(/&#167;/g,'§').replace(/&#168;/g,'¨').replace(/&#169;/g,'©').replace(/&#170;/g,'ª').replace(/&#171;/g,'«').replace(/&#172;/g,'¬').replace(/&#173;/g,'-').replace(/&#174;/g,'®').replace(/&#175;/g,'¯').replace(/&#176;/g,'°').replace(/&#177;/g,'±').replace(/&#178;/g,'²').replace(/&#179;/g,'³').replace(/&#180;/g,'´').replace(/&#181;/g,'µ').replace(/&#182;/g,'¶').replace(/&#183;/g,'·').replace(/&#184;/g,'¸').replace(/&#185;/g,'¹').replace(/&#186;/g,'º').replace(/&#187;/g,'»').replace(/&#188;/g,'¼').replace(/&#189;/g,'½').replace(/&#190;/g,'¾').replace(/&#191;/g,'¿').replace(/&#192;/g,'À').replace(/&#193;/g,'Á').replace(/&#194;/g,'Â').replace(/&#195;/g,'Ã').replace(/&#196;/g,'Ä').replace(/&#197;/g,'Å').replace(/&#198;/g,'Æ').replace(/&#199;/g,'Ç').replace(/&#200;/g,'È').replace(/&#201;/g,'É').replace(/&#202;/g,'Ê').replace(/&#203;/g,'Ë').replace(/&#204;/g,'Ì').replace(/&#205;/g,'Í').replace(/&#206;/g,'Î').replace(/&#207;/g,'Ï').replace(/&#208;/g,'Ð').replace(/&#209;/g,'Ñ').replace(/&#210;/g,'Ò').replace(/&#211;/g,'Ó').replace(/&#212;/g,'Ô').replace(/&#213;/g,'Õ').replace(/&#214;/g,'Ö').replace(/&#215;/g,'×').replace(/&#216;/g,'Ø').replace(/&#217;/g,'Ù').replace(/&#218;/g,'Ú').replace(/&#219;/g,'Û').replace(/&#220;/g,'Ü').replace(/&#221;/g,'Ý').replace(/&#222;/g,'Þ').replace(/&#223;/g,'ß').replace(/&#224;/g,'à').replace(/&#225;/g,'á').replace(/&#226;/g,'â').replace(/&#227;/g,'ã').replace(/&#228;/g,'ä').replace(/&#229;/g,'å').replace(/&#230;/g,'æ').replace(/&#231;/g,'ç').replace(/&#232;/g,'è').replace(/&#233;/g,'é').replace(/&#234;/g,'ê').replace(/&#235;/g,'ë').replace(/&#236;/g,'ì').replace(/&#237;/g,'í').replace(/&#238;/g,'î').replace(/&#239;/g,'ï').replace(/&#240;/g,'ð').replace(/&#241;/g,'ñ').replace(/&#242;/g,'ò').replace(/&#243;/g,'ó').replace(/&#244;/g,'ô').replace(/&#245;/g,'õ').replace(/&#246;/g,'ö').replace(/&#247;/g,'÷').replace(/&#248;/g,'ø').replace(/&#249;/g,'ù').replace(/&#250;/g,'ú').replace(/&#251;/g,'û').replace(/&#252;/g,'ü').replace(/&#253;/g,'ý').replace(/&#254;/g,'þ').replace(/&#255;/g,'ÿ').replace(/&#338;/g,'Œ').replace(/&#339;/g,'œ').replace(/&#352;/g,'Š').replace(/&#353;/g,'š').replace(/&#376;/g,'Ÿ').replace(/&#402;/g,'ƒ').replace(/&#8211;/g,'–').replace(/&#8212;/g,'——').replace(/&#8216;/g,'‘').replace(/&#8217;/g,'’').replace(/&#8218;/g,'‚').replace(/&#8220;/g,'“').replace(/&#8221;/g,'”').replace(/&#8222;/g,'„').replace(/&#8224;/g,'†').replace(/&#8225;/g,'‡').replace(/&#8226;/g,'•').replace(/&#8230;/g,'…').replace(/&#8240;/g,'‰').replace(/&#8364;/g,'€').replace(/&#8482;/g,'™').replace(/&#35;/g,'#').replace(/&#36;/g,'$').replace(/&#37;/g,'%').replace(/&#38;/g,'&');
    };
  });
app.filter('image', function () {
  return function (image) {


   /<img src="(.+?)"/.exec(image);
   return RegExp.$1;
 };
});
}());