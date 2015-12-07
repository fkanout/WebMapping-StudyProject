
(function(){
var webmapping=angular.module("webmapping", []);
webmapping.controller("communesController", function 
                communesController($scope) {


    $scope.communes = [{name:"Abeilhan"},{name:"Adissan"},{name:"Agde"},{name:"Agel"},{name:"Agones"},{name:"Aigne"},{name:"Aigues Vives"},{name:"Les Aires"},{name:"Alignan du Vent"},{name:"Aniane"},{name:"Arboras"},{name:"Argelliers"},{name:"Aspiran"},{name:"Assas"},{name:"Assignan"},{name:"Aumelas"},{name:"Aumes"},{name:"Autignac"},{name:"Avene"},{name:"Azillanet"},{name:"Babeau Bouldoux"},{name:"Baillargues"},{name:"Balaruc le Vieux"},{name:"Balaruc les Bains"},{name:"Bassan"},{name:"Beaufort"},{name:"Beaulieu"},{name:"Bedarieux"},{name:"Belarga"},{name:"Berlou"},{name:"Bessan"},{name:"Beziers"},{name:"Boisseron"},{name:"Boisset"},{name:"La Boissiere"},{name:"Le Bosc"},{name:"Boujan sur Libron"},{name:"Le Bousquet d Orb"},{name:"Bouzigues"},{name:"Brenas"},{name:"Brignac"},{name:"Brissac"},{name:"Buzignargues"},{name:"Cabrerolles"},{name:"Cabrieres"},{name:"Cambon et Salvergues"},{name:"Campagnan"},{name:"Campagne"},{name:"Camplong"},{name:"Candillargues"},{name:"Canet"},{name:"Capestang"},{name:"Carlencas et Levas"},{name:"Cassagnoles"},{name:"Castanet le Haut"},{name:"Castelnau de Guers"},{name:"Castelnau le Lez"},{name:"Castries"},{name:"La Caunette"},{name:"Causse de la Selle"},{name:"Causses et Veyran"},{name:"Caussiniojouls"},{name:"Caux"},{name:"Le Caylar"},{name:"Cazedarnes"},{name:"Cazevieille"},{name:"Cazilhac"},{name:"Cazouls d Herault"},{name:"Cazouls les Beziers"},{name:"Cebazan"},{name:"Ceilhes et Rocozels"},{name:"Celles"},{name:"Cers"},{name:"Cessenon sur Orb"},{name:"Cesseras"},{name:"Ceyras"},{name:"Clapiers"},{name:"Claret"},{name:"Clermont l Herault"},{name:"Colombieres sur Orb"},{name:"Colombiers"},{name:"Combaillaux"},{name:"Combes"},{name:"Corneilhan"},{name:"Coulobres"},{name:"Courniou"},{name:"Cournonsec"},{name:"Cournonterral"},{name:"Creissan"},{name:"Le Cres"},{name:"Le Cros"},{name:"Cruzy"},{name:"Dio et Valquieres"},{name:"Espondeilhan"},{name:"Fabregues"},{name:"Faugeres"},{name:"Felines Minervois"},{name:"Ferrals les Montagnes"},{name:"Ferrieres les Verreries"},{name:"Ferrieres Poussarou"},{name:"Florensac"},{name:"Fontanes"},{name:"Fontes"},{name:"Fos"},{name:"Fouzilhon"},{name:"Fozieres"},{name:"Fraisse sur Agout"},{name:"Frontignan"},{name:"Gabian"},{name:"Galargues"},{name:"Ganges"},{name:"Garrigues"},{name:"Gigean"},{name:"Gignac"},{name:"Gornies"},{name:"Grabels"},{name:"Graissessac"},{name:"La Grande Motte"},{name:"Guzargues"},{name:"Herepian"},{name:"Jacou"},{name:"Joncels"},{name:"Jonquieres"},{name:"Juvignac"},{name:"Lacoste"},{name:"Lagamas"},{name:"Lamalou les Bains"},{name:"Lansargues"},{name:"Laroque"},{name:"Lattes"},{name:"Laurens"},{name:"Lauret"},{name:"Lauroux"},{name:"Lavalette"},{name:"Laverune"},{name:"Lespignan"},{name:"Lezignan la Cebe"},{name:"Liausson"},{name:"Lieuran Cabrieres"},{name:"Lieuran les Beziers"},{name:"Lignan sur Orb"},{name:"La Liviniere"},{name:"Lodeve"},{name:"Loupian"},{name:"Lunas"},{name:"Lunel"},{name:"Lunel Viel"},{name:"Magalas"},{name:"Maraussan"},{name:"Margon"},{name:"Marseillan"},{name:"Marsillargues"},{name:"Mas de Londres"},{name:"Les Matelles"},{name:"Mauguio"},{name:"Maureilhan"},{name:"Merifons"},{name:"Meze"},{name:"Minerve"},{name:"Mireval"},{name:"Mons"},{name:"Montady"},{name:"Montagnac"},{name:"Montarnaud"},{name:"Montaud"},{name:"Montbazin"},{name:"Montblanc"},{name:"Montels"},{name:"Montesquieu"},{name:"Montferrier sur Lez"},{name:"Montouliers"},{name:"Montoulieu"},{name:"Montpellier"},{name:"Montpeyroux"},{name:"Moules et Baucels"},{name:"Moureze"},{name:"Mudaison"},{name:"Murles"},{name:"Murviel les Beziers"},{name:"Murviel les Montpellier"},{name:"Nebian"},{name:"Neffies"},{name:"Nezignan l eveque"},{name:"Nissan lez Enserune"},{name:"Nizas"},{name:"Notre Dame de Londres"},{name:"Octon"},{name:"Olargues"},{name:"Olmet et Villecun"},{name:"Olonzac"},{name:"Oupia"},{name:"Pailhes"},{name:"Palavas les Flots"},{name:"Pardailhan"},{name:"Paulhan"},{name:"Pegairolles de Bueges"},{name:"Pegairolles de l Escalette"},{name:"Peret"},{name:"Perols"},{name:"Pezenas"},{name:"Pezenes les Mines"},{name:"Pierrerue"},{name:"Pignan"},{name:"Pinet"},{name:"Plaissan"},{name:"Les Plans"},{name:"Poilhes"},{name:"Pomerols"},{name:"Popian"},{name:"Portiragnes"},{name:"Le Pouget"},{name:"Le Poujol sur Orb"},{name:"Poujols"},{name:"Poussan"},{name:"Pouzolles"},{name:"Pouzols"},{name:"Le Pradal"},{name:"Prades le Lez"},{name:"Prades sur Vernazobre"},{name:"Premian"},{name:"Le Puech"},{name:"Puechabon"},{name:"Puilacher"},{name:"Puimisson"},{name:"Puissalicon"},{name:"Puisserguier"},{name:"Quarante"},{name:"Restinclieres"},{name:"Rieussec"},{name:"Riols"},{name:"Les Rives"},{name:"Romiguieres"},{name:"Roquebrun"},{name:"Roqueredonde"},{name:"Roquessels"},{name:"Rosis"},{name:"Rouet"},{name:"Roujan"},{name:"Saint Andre de Bueges"},{name:"Saint Andre de Sangonis"},{name:"Saint Aunes"},{name:"Saint Bauzille de la Sylve"},{name:"Saint Bauzille de Montmel"},{name:"Saint Bauzille de Putois"},{name:"Saint Bres"},{name:"Saint Chinian"},{name:"Saint Christol"},{name:"Saint Clement de Riviere"},{name:"Saint Drezery"},{name:"Saint etienne d Albagnan"},{name:"Saint etienne de Gourgas"},{name:"Saint etienne Estrechoux"},{name:"Saint Felix de l Heras"},{name:"Saint Felix de Lodez"},{name:"Saint Gely du Fesc"},{name:"Saint Genies de Fontedit"},{name:"Saint Genies de Varensal"},{name:"Saint Genies des Mourgues"},{name:"Saint Georges d Orques"},{name:"Saint Gervais sur Mare"},{name:"Saint Guilhem le Desert"},{name:"Saint Guiraud"},{name:"Saint Hilaire de Beauvoir"},{name:"Saint Jean de Bueges"},{name:"Saint Jean de Cornies"},{name:"Saint Jean de Cuculles"},{name:"Saint Jean de Fos"},{name:"Saint Jean de la Blaquiere"},{name:"Saint Jean de Minervois"},{name:"Saint Jean de Vedas"},{name:"Saint Julien"},{name:"Saint Just"},{name:"Saint Martin de l Arçon"},{name:"Saint Martin de Londres"},{name:"Saint Mathieu de Treviers"},{name:"Saint Maurice Navacelles"},{name:"Saint Michel"},{name:"Saint Nazaire de Ladarez"},{name:"Saint Nazaire de Pezan"},{name:"Saint Pargoire"},{name:"Saint Paul et Valmalle"},{name:"Saint Pierre de la Fage"},{name:"Saint Pons de Mauchiens"},{name:"Saint Pons de Thomieres"},{name:"Saint Privat"},{name:"Saint Saturnin de Lucian"},{name:"Saint Series"},{name:"Saint Thibery"},{name:"Saint Vincent d Olargues"},{name:"Saint Vincent de Barbeyrargues"},{name:"Sainte Croix de Quintillargues"},{name:"Salasc"},{name:"La Salvetat sur Agout"},{name:"Saturargues"},{name:"Saussan"},{name:"Saussines"},{name:"Sauteyrargues"},{name:"Sauvian"},{name:"Serignan"},{name:"Servian"},{name:"Sete"},{name:"Siran"},{name:"Sorbs"},{name:"Soubes"},{name:"Le Soulie"},{name:"Soumont"},{name:"Sussargues"},{name:"Taussac la Billiere"},{name:"Teyran"},{name:"Thezan les Beziers"},{name:"La Tour sur Orb"},{name:"Tourbes"},{name:"Tressan"},{name:"Le Triadou"},{name:"Usclas d Herault"},{name:"Usclas du Bosc"},{name:"La Vacquerie et Saint Martin de Castries"},{name:"Vacquieres"},{name:"Vailhan"},{name:"Vailhauques"},{name:"Valergues"},{name:"Valflaunes"},{name:"Valmascle"},{name:"Valras Plage"},{name:"Valros"},{name:"Velieux"},{name:"Vendargues"},{name:"Vendemian"},{name:"Vendres"},{name:"Verargues"},{name:"Verreries de Moussans"},{name:"Vias"},{name:"Vic la Gardiole"},{name:"Vieussan"},{name:"Villemagne l Argentiere"},{name:"Villeneuve les Beziers"},{name:"Villeneuve les Maguelone"},{name:"Villeneuvette"},{name:"Villespassans"},{name:"Villetelle"},{name:"Villeveyrac"},{name:"Viols en Laval"},{name:"Viols le Fort"}];

var communesSelected="";
var nbKey=1;

//Frist lunche inialtaion    
$scope.selectedAll = true;
angular.forEach($scope.communes, function (item) {
    item.Selected = $scope.selectedAll;
});
 $scope.selectedAll = true;
        angular.forEach($scope.communes, function (item,key) {
        item.Selected = $scope.selectedAll;
        nbKey+=1;
        communesSelected+="'".concat(item.name).concat("'"); 
        if(nbKey<=343){
            communesSelected+=",";
            }
        });
        console.log("here :"+nbKey);
        myFilter = "COMMUNE IN (".concat(communesSelected).concat(")")  ;           /*lunel','popian','cebazan') */
        changeFilter();
        console.log(cqlFilter);    
    
//------------------------------------------------------------------------------------------    
// when click select all the communes 
$scope.checkAll = function () {
    nbKey=1;
    if ($scope.selectedAll) {
        $scope.selectedAll = true;
        angular.forEach($scope.communes, function (item,key) {
        item.Selected = $scope.selectedAll;
        nbKey+=1;
        communesSelected+="'".concat(item.name).concat("'"); 
        if(nbKey<=343){
            communesSelected+=",";
            }
        });
        console.log("here :"+nbKey);
        myFilter = "COMMUNE IN (".concat(communesSelected).concat(") ")  ;           /*lunel','popian','cebazan') */
        changeFilter();
        console.log(cqlFilter);   

    } else {
            $scope.selectedAll = false;
            communesSelected="";
            myFilter="";
            changeFilter();
    }
    angular.forEach($scope.communes, function (item) {
    item.Selected = $scope.selectedAll;
    });

};
    
//------------------------------------------------------------------------------------------    


//when click option by option communes
$scope.submit = function () {
    angular.forEach($scope.communes, function (item,key) {
    if (item.Selected){
        nbKey=key;
        }
    });
    $scope.communesSelected="";
    angular.forEach($scope.communes, function (item,key) {
        if (item.Selected){
            $scope.communesSelected+="'".concat(item.name).concat("'");
            if(nbKey>key){
                $scope.communesSelected+=",";
            }
        }
    });
    myFilter = "COMMUNE IN (".concat($scope.communesSelected).concat(")")  ;           /*lunel','popian','cebazan') */
    changeFilter();
    console.log(cqlFilter);
    };
    
});
    var conditionEntree=[];
    webmapping.controller("conditionStatus",function($scope){ 
        $scope.condValue=conditionStatusVal;
        
        $scope.checkIfchecked=function(){
            conditionEntree=[];
            angular.forEach($scope.condValue, function (item) {
                if (item.selected){
                    conditionEntree.push("'"+item.name+"'");
                }
            });
            myFilter = "ACCES IN ("+conditionEntree+")" ;           /*lunel','popian','cebazan') */
            console.log(myFilter);
            changeFilter();
            
        };
          

    });
   
        
    conditionStatusVal=[{name:'gratuit',selected:true},
                        {name:'payant',selected:true}];
    
    
})();