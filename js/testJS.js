
(function(){
var webmapping=angular.module("webmapping", []);
webmapping.controller("communesController", function communesController($scope) {

$scope.communes=lesCommunes;
var communesSelected=[];
var conditionEntree=[];
var eventSelected=[];
var paysageSelected=[];
var isCommune=false;
var isCondition=false;
var nbrCondition=2;
    

$scope.checkAll = function () {
    
    filterTotal.splice(0,1,"");
    communesSelected=[];
    if ($scope.selectedAll) {
        angular.forEach($scope.communes, function (item) {
            item.Selected = $scope.selectedAll;
            communesSelected.push("'"+item.name+"'");        
        });      
    }else{
       angular.forEach($scope.communes, function (item) {
       item.Selected = $scope.selectedAll;
        });      
    }
    if(typeof communesSelected !== 'undefined' && communesSelected.length!=0){ 
        myCommunes = "COMMUNE IN ("+communesSelected+")";
        filterTotal.splice(0,1,myCommunes);

        isCommune=true;

   } else{
       isCommune=false;
        filterTotal.splice(0,1,"");
   }
   
changeFilter(filterTotal);
};
    
    
    
$scope.inistialCommune=function(){
    $scope.selectedAll = true;
    $scope.checkAll();  
};

$scope.submit = function () {
    filterTotal.splice(0,1,"");

    communesSelected=[];
    angular.forEach($scope.communes, function (item,key) {
        if (item.Selected){
           communesSelected.push("'"+item.name+"'");  
        }
    });
      if(typeof communesSelected !== 'undefined' && communesSelected.length!=0){ 
        myCommunes = "COMMUNE IN ("+communesSelected+")"; 
        filterTotal.splice(0,1,myCommunes);
        isCommune=true;
   } else{
       isCommune=false;
       filterTotal.splice(0,1,"");

   }
    changeFilter(filterTotal);
};
  
    
});

    
//-----------------------------------------------------------------------
    
webmapping.controller("conditionStatus",function($scope){ 
    $scope.condValue=conditionStatusVal;

    $scope.checkIfchecked=function(){
        filterTotal.splice(1,1,"");
        conditionEntree=[];
        angular.forEach($scope.condValue, function (item) {
            if (item.selected){
                conditionEntree.push("'"+item.name+"'");
            }
        });
           if(typeof conditionEntree !== 'undefined' && conditionEntree.length!=0){
                myConditions = "ACCES IN ("+conditionEntree+")" ; 
                filterTotal.splice(1,1,myConditions);
  
                isCondition=true;
              
           } else{
               isCondition=false;
               filterTotal.splice(1,1,"");
             

           }
        
 changeFilter(filterTotal);
        
    };
    
});

    
//-----------------------------------------------------------------------
    
webmapping.controller("typeEvent",function($scope){ 
    $scope.typeEvent=typeEve;

    $scope.checkIfchecked=function(){
        filterTotal.splice(2,1,"");
        eventSelected=[];
        angular.forEach($scope.typeEvent, function (item) {
            if (item.selected){
                eventSelected.push("'"+item.name+"'");
            }
        });
           if(typeof eventSelected !== 'undefined' && eventSelected.length!=0){
                myEvents = "TYPE IN ("+eventSelected+")" ; 
                filterTotal.splice(2,1,myEvents);
  
                isCondition=true;
              
           } else{
               isCondition=false;
               filterTotal.splice(2,1,"");
             

           }
        
 changeFilter(filterTotal);
        
    };
    
});
    
//-----------------------------------------------------------------------
    
webmapping.controller("typePeysage",function($scope){ 
    $scope.peysags=typePeysageList;

    $scope.checkIfchecked=function(){
        filterTotal.splice(3,1,"");
        paysageSelected=[];
        angular.forEach($scope.peysags, function (item) {
            if (item.selected){
                paysageSelected.push("'"+item.name+"'");
            }
        });
           if(typeof paysageSelected !== 'undefined' && paysageSelected.length!=0){
                myPeysage = "PEYSAGE IN ("+paysageSelected+")" ; 
                filterTotal.splice(3,1,myPeysage);
           } else{
               filterTotal.splice(3,1,"");
             

           }
        
 changeFilter(filterTotal);
        
    };
    
    
});

//-----------------------------------------------------------------------

webmapping.controller('styleCtrl',function($scope){ 
    $scope.styleList=carteStyle;
    $scope.selected='OSM-MapInk';
    
    $scope.styleChecked=function(val){
       changeStyle(val);
    };
});

    
//-----------------------------------------------------------------------
    
webmapping.controller('mainController', function($scope, $filter) {
    $scope.displayResultList = false;

    //Array of government holidays
    $scope.federalHolidayDates = [];
    $scope.federalHolidayDates.push('10/01/2015');
    $scope.federalHolidayDates.push('10/12/2015') ;
    $scope.federalHolidayDates.push('11/26/2015') ;                 
    $scope.invalidCalendarDates = $scope.federalHolidayDates;

    //Array of events
    $scope.eventsArray=[] ;
    $scope.eventsArray.push({id: 1, startDate: moment('10/10/2015').format('DD/MM/YYYY')});
    
    $scope.submitDates = function(){
        $scope.displayResultsArray = $scope.eventsArray;
        $scope.displayResultList = true;      
    };

  });
    
    
webmapping.directive('jqueryDatePicker', ['$compile', '$timeout', '$parse', function($compile, $timeout, $parse) {
    var tpl = "<div class='input-group'> <input type='text' class='form-control' ng-model='myDate' placeholder='dd/mm/yyyy' required='true' /> <div class='input-group-addon' ng-click='showCalendar()'><i class='fa fa-calendar'></i></div> </div>";
    return {
        restrict: 'AE',
        require: 'ngModel',
        replace: true,
        template: tpl,
        scope: {
            invalidDates: "=disableDates"
        },
        link : function(scope,element,attrs,ngModelCtrl){

          $(element).daterangepickercompat({
              singleDatePicker: true,
              "isInvalidDate": function (val) {
                  var findFedDate = $.inArray(moment(val).format("DD/MM/YYYY"), scope.invalidDates);
                  if (findFedDate != -1) {
                      return true;

                  } else {
                      getDate("");
                      return false;

                  }
                  
              }
          });

          //Updating incoming model value and assign to viewValue
          ngModelCtrl.$formatters.push(function(modelValue) {
              var myDate = modelValue;

              return myDate;
          });

          //Incoming viewValue and assign to modelValue
          ngModelCtrl.$parsers.push(function(viewValue) {
              scope.myDate = viewValue;
                            

             scope.myDate = scope.myDate.format("DD/MM/YYYY");
             getDate(scope.myDate);/// here where i can get the chosen date

              return scope.myDate;
          });


          $(element).on('apply.daterangepickercompat', function(ev, picker) {
              var pickedDate = moment(picker.startDate).utcOffset(240); //Corrects UTC offset issue
              ngModelCtrl.$setViewValue(pickedDate);
              ngModelCtrl.$render = function() {
                scope.myDate = scope.myDate;
              };
          });

          //Return rendered to templates model
          ngModelCtrl.$render = function() {
            scope.myDate = ngModelCtrl.$viewValue;
          };

        }
    };

}]);


var carteStyle=[
{name:"OSM-MapInk",val:"http://tile.openstreetmap.org/{z}/{x}/{y}.png",chosen:true},
{name:"OSM-France",val:"http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",chosen:true},
{name:"OSM-Monochrome",val:"http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",chosen:false},
{name:"OSM-Hot",val:"http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",chosen:false},
{name:"OSM-RiverBoatMap",val:"http://b.tile.openstreetmap.fr/openriverboatmap/{z}/{x}/{y}.png",chosen:false},
{name:"OSM-thunderfores",val:"https://a.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png",chosen:false},
{name:"OSM-GPS",val:"http://a.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png",chosen:false},
{name:"OSM-Admin",val:"http://korona.geog.uni-heidelberg.de/tiles/adminb/x={x}&y={y}&z={z}",chosen:false},
    
{name:"OCM-Transport",val:"http://b.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png",chosen:false},
{name:"HikeBikeMap",val:"http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",chosen:false},
{name:"Stamen-Toner",val:"http://tile.stamen.com/toner/{z}/{x}/{y}.png",chosen:false},
{name:"Stamen-watercolor",val:"http://b.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg",chosen:false},
{name:"ESRI-Sat",val:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg",chosen:false},
{name:"MapBox-Sat",val:"https://a.tiles.mapbox.com/v3/tmcw.map-j5fsp01s/{z}/{x}/{y}.png",chosen:false}
];

var typePeysageList=[
    {name:'Garrigues et vignobles',selected:true},
        {name:'Moyenne Montagne' ,selected:true},
        {name:'Mer et plage' ,selected:true},
        {name:'Ville' ,selected:true}];    
var typeEve=[
    {name:'Ateliers',selected:true},{name:'Competition sportive',selected:true},{name:'Concert',selected:true},{name:'Conference',selected:true},{name:'Exposition',selected:true},{name:'Festival',selected:true},{name:'Foire',selected:true},{name:'Vide greniers braderie',selected:true},{name:'Stage',selected:true},{name:'Marche',selected:true},{name:'Theatre',selected:true},{name:'Portes ouvertes',selected:true},{name:'Visite guidee',selected:true},
{name:'Representation',selected:true},{name:'Spectacle',selected:true}];

lesCommunes= [
   {name:"Aniane"},{name:"Berlou"},{name:"Bessan"},{name:"Beziers"},{name:"Boisseron"},{name:"Boisset"},{name:"La Boissiere"},{name:"Le Bosc"},{name:"Boujan sur Libron"},{name:"Bouzigues"},{name:"Brenas"},{name:"Brignac"},{name:"Brissac"},{name:"Buzignargues"},{name:"Cabrerolles"},{name:"Cabrieres"},{name:"Cambon et Salvergues"},{name:"Campagnan"},{name:"Campagne"},{name:"Camplong"},{name:"Candillargues"},{name:"Canet"},{name:"Capestang"},{name:"Carlencas et Levas"},{name:"Cassagnoles"},{name:"Castanet le Haut"},{name:"Castelnau de Guers"},{name:"Castelnau le Lez"},{name:"Castries"},{name:"La Caunette"},{name:"Causse de la Selle"},{name:"Causses et Veyran"},{name:"Caussiniojouls"},{name:"Caux"},
{name:"Le Caylar"},{name:"Cazedarnes"},{name:"Cazevieille"},{name:"Cazilhac"},{name:"Cazouls d Herault"},{name:"Cazouls les Beziers"},{name:"Cebazan"},{name:"Ceilhes et Rocozels"},{name:"Celles"},{name:"Cers"},{name:"Cessenon sur Orb"},{name:"Cesseras"},{name:"Ceyras"},{name:"Clapiers"},{name:"Claret"},{name:"Clermont l Herault"},{name:"Colombieres sur Orb"},{name:"Colombiers"},{name:"Combaillaux"},{name:"Combes"},{name:"Corneilhan"},{name:"Coulobres"},{name:"Courniou"},{name:"Cournonsec"},{name:"Cournonterral"},{name:"Creissan"},{name:"Le Cres"},{name:"Le Cros"},{name:"Cruzy"},{name:"Dio et Valquieres"},{name:"Espondeilhan"},{name:"Fabregues"},{name:"Faugeres"},{name:"Felines Minervois"},{name:"Ferrals les Montagnes"},{name:"Ferrieres les Verreries"},{name:"Ferrieres Poussarou"},{name:"Florensac"},{name:"Fontanes"},{name:"Fontes"},{name:"Fos"},{name:"Fouzilhon"},{name:"Fozieres"},{name:"Fraisse sur Agout"},{name:"Frontignan"},{name:"Gabian"},{name:"Galargues"},{name:"Ganges"},{name:"Garrigues"},{name:"Gigean"},{name:"Gignac"},{name:"Gornies"},{name:"Grabels"},{name:"Graissessac"},{name:"La Grande Motte"},{name:"Guzargues"},{name:"Herepian"},{name:"Jacou"},{name:"Joncels"},{name:"Jonquieres"},{name:"Juvignac"},{name:"Lacoste"},{name:"Lagamas"},{name:"Lamalou les Bains"},{name:"Lansargues"},{name:"Laroque"},{name:"Lattes"},{name:"Laurens"},{name:"Lauret"},{name:"Lauroux"},{name:"Lavalette"},{name:"Laverune"},{name:"Lespignan"},{name:"Lezignan la Cebe"},{name:"Liausson"},{name:"Lieuran Cabrieres"},{name:"Lieuran les Beziers"},{name:"Lignan sur Orb"},{name:"La Liviniere"},{name:"Lodeve"},{name:"Loupian"},{name:"Lunas"},{name:"Lunel"},{name:"Lunel Viel"},{name:"Magalas"},{name:"Maraussan"},{name:"Margon"},{name:"Marseillan"},{name:"Marsillargues"},{name:"Mas de Londres"},{name:"Les Matelles"},{name:"Mauguio"},{name:"Maureilhan"},{name:"Merifons"},{name:"Meze"},{name:"Minerve"},{name:"Mireval"},{name:"Mons"},{name:"Montady"},{name:"Montagnac"},{name:"Montarnaud"},{name:"Montaud"},{name:"Montbazin"},{name:"Montblanc"},{name:"Montels"},{name:"Montesquieu"},{name:"Montferrier sur Lez"},{name:"Montouliers"},{name:"Montoulieu"},{name:"Montpellier"},{name:"Montpeyroux"},{name:"Moules et Baucels"},{name:"Moureze"},{name:"Mudaison"},{name:"Murles"},{name:"Murviel les Beziers"},{name:"Murviel les Montpellier"},{name:"Nebian"},{name:"Neffies"},{name:"Nezignan l eveque"},{name:"Nissan lez Enserune"},{name:"Nizas"},{name:"Notre Dame de Londres"},{name:"Octon"},{name:"Olargues"},{name:"Olmet et Villecun"},{name:"Olonzac"},{name:"Oupia"},{name:"Pailhes"},{name:"Palavas les Flots"},{name:"Pardailhan"},{name:"Paulhan"},{name:"Pegairolles de Bueges"},{name:"Pegairolles de l Escalette"},{name:"Peret"},{name:"Perols"},{name:"Pezenas"},{name:"Pezenes les Mines"},{name:"Pierrerue"},{name:"Pignan"},{name:"Pinet"},{name:"Plaissan"},{name:"Les Plans"},{name:"Poilhes"},{name:"Pomerols"},{name:"Popian"},{name:"Portiragnes"},{name:"Le Pouget"},{name:"Le Poujol sur Orb"},{name:"Poujols"},{name:"Poussan"},{name:"Pouzolles"},{name:"Pouzols"},{name:"Le Pradal"},{name:"Prades le Lez"},{name:"Prades sur Vernazobre"},{name:"Premian"},{name:"Le Puech"},{name:"Puechabon"},{name:"Puilacher"},{name:"Puimisson"},{name:"Puissalicon"},{name:"Puisserguier"},{name:"Quarante"},{name:"Restinclieres"},{name:"Rieussec"},{name:"Riols"},{name:"Les Rives"},{name:"Romiguieres"},{name:"Roquebrun"},{name:"Roqueredonde"},{name:"Roquessels"},{name:"Rosis"},{name:"Rouet"},{name:"Roujan"},{name:"Saint Chinian"},{name:"Saint Gervais sur Mare"},{name:"Saint etienne de Gourgas"},{name:"Salasc"},{name:"La Salvetat sur Agout"},{name:"Saturargues"},{name:"Saussan"},{name:"Saussines"},{name:"Sauteyrargues"},{name:"Sauvian"},{name:"Serignan"},{name:"Servian"},{name:"Sete"},{name:"Vieussan"},{name:"Villespassans"}
];

var conditionStatusVal=[
    {name:'Gratuit',selected:true},
                        {name:'Payant' ,selected:true}
];
    
    
})();