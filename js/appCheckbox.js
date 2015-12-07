
angular.module("webmapping", [])
    .controller("communesController", function 
                communesController($scope) {


    $scope.communes = [{name:"Abeilhan"},{name:"Adissan"},{name:"Agde"},{name:"Agel"},{name:"Agonès"},{name:"Aigne"},{name:"Aigues-Vives"},{name:"Les Aires"},{name:"Alignan-du-Vent"},{name:"Aniane"},{name:"Arboras"},{name:"Argelliers"},{name:"Aspiran"},{name:"Assas"},{name:"Assignan"},{name:"Aumelas"},{name:"Aumes"},{name:"Autignac"},{name:"Avène"},{name:"Azillanet"},{name:"Babeau-Bouldoux"},{name:"Baillargues"},{name:"Balaruc-le-Vieux"},{name:"Balaruc-les-Bains"},{name:"Bassan"},{name:"Beaufort"},{name:"Beaulieu"},{name:"Bédarieux"},{name:"Bélarga"},{name:"Berlou"},{name:"Bessan"},{name:"Béziers"},{name:"Boisseron"},{name:"Boisset"},{name:"La Boissière"},{name:"Le Bosc"},{name:"Boujan-sur-Libron"},{name:"Le Bousquet-d Orb"},{name:"Bouzigues"},{name:"Brenas"},{name:"Brignac"},{name:"Brissac"},{name:"Buzignargues"},{name:"Cabrerolles"},{name:"Cabrières"},{name:"Cambon-et-Salvergues"},{name:"Campagnan"},{name:"Campagne"},{name:"Camplong"},{name:"Candillargues"},{name:"Canet"},{name:"Capestang"},{name:"Carlencas-et-Levas"},{name:"Cassagnoles"},{name:"Castanet-le-Haut"},{name:"Castelnau-de-Guers"},{name:"Castelnau-le-Lez"},{name:"Castries"},{name:"La Caunette"},{name:"Causse-de-la-Selle"},{name:"Causses-et-Veyran"},{name:"Caussiniojouls"},{name:"Caux"},{name:"Le Caylar"},{name:"Cazedarnes"},{name:"Cazevieille"},{name:"Cazilhac"},{name:"Cazouls-d Hérault"},{name:"Cazouls-lès-Béziers"},{name:"Cébazan"},{name:"Ceilhes-et-Rocozels"},{name:"Celles"},{name:"Cers"},{name:"Cessenon-sur-Orb"},{name:"Cesseras"},{name:"Ceyras"},{name:"Clapiers"},{name:"Claret"},{name:"Clermont-l Hérault"},{name:"Colombières-sur-Orb"},{name:"Colombiers"},{name:"Combaillaux"},{name:"Combes"},{name:"Corneilhan"},{name:"Coulobres"},{name:"Courniou"},{name:"Cournonsec"},{name:"Cournonterral"},{name:"Creissan"},{name:"Le Crès"},{name:"Le Cros"},{name:"Cruzy"},{name:"Dio-et-Valquières"},{name:"Espondeilhan"},{name:"Fabrègues"},{name:"Faugères"},{name:"Félines-Minervois"},{name:"Ferrals-les-Montagnes"},{name:"Ferrières-les-Verreries"},{name:"Ferrières-Poussarou"},{name:"Florensac"},{name:"Fontanès"},{name:"Fontès"},{name:"Fos"},{name:"Fouzilhon"},{name:"Fozières"},{name:"Fraisse-sur-Agout"},{name:"Frontignan"},{name:"Gabian"},{name:"Galargues"},{name:"Ganges"},{name:"Garrigues"},{name:"Gigean"},{name:"Gignac"},{name:"Gorniès"},{name:"Grabels"},{name:"Graissessac"},{name:"La Grande-Motte"},{name:"Guzargues"},{name:"Hérépian"},{name:"Jacou"},{name:"Joncels"},{name:"Jonquières"},{name:"Juvignac"},{name:"Lacoste"},{name:"Lagamas"},{name:"Lamalou-les-Bains"},{name:"Lansargues"},{name:"Laroque"},{name:"Lattes"},{name:"Laurens"},{name:"Lauret"},{name:"Lauroux"},{name:"Lavalette"},{name:"Lavérune"},{name:"Lespignan"},{name:"Lézignan-la-Cèbe"},{name:"Liausson"},{name:"Lieuran-Cabrières"},{name:"Lieuran-lès-Béziers"},{name:"Lignan-sur-Orb"},{name:"La Livinière"},{name:"Lodève"},{name:"Loupian"},{name:"Lunas"},{name:"lunel"},{name:"Lunel-Viel"},{name:"Magalas"},{name:"Maraussan"},{name:"Margon"},{name:"Marseillan"},{name:"Marsillargues"},{name:"Mas-de-Londres"},{name:"Les Matelles"},{name:"Mauguio"},{name:"Maureilhan"},{name:"Mérifons"},{name:"Mèze"},{name:"Minerve"},{name:"Mireval"},{name:"Mons"},{name:"Montady"},{name:"Montagnac"},{name:"Montarnaud"},{name:"Montaud"},{name:"Montbazin"},{name:"Montblanc"},{name:"Montels"},{name:"Montesquieu"},{name:"Montferrier-sur-Lez"},{name:"Montouliers"},{name:"Montoulieu"},{name:"Montpellier"},{name:"Montpeyroux"},{name:"Moulès-et-Baucels"},{name:"Mourèze"},{name:"Mudaison"},{name:"Murles"},{name:"Murviel-lès-Béziers"},{name:"Murviel-lès-Montpellier"},{name:"Nébian"},{name:"Neffiès"},{name:"Nézignan-l Évêque"},{name:"Nissan-lez-Enserune"},{name:"Nizas"},{name:"Notre-Dame-de-Londres"},{name:"Octon"},{name:"Olargues"},{name:"Olmet-et-Villecun"},{name:"Olonzac"},{name:"Oupia"},{name:"Pailhès"},{name:"Palavas-les-Flots"},{name:"Pardailhan"},{name:"Paulhan"},{name:"Pégairolles-de-Buèges"},{name:"Pégairolles-de-l Escalette"},{name:"Péret"},{name:"Pérols"},{name:"Pézenas"},{name:"Pézènes-les-Mines"},{name:"Pierrerue"},{name:"Pignan"},{name:"Pinet"},{name:"Plaissan"},{name:"Les Plans"},{name:"Poilhes"},{name:"Pomérols"},{name:"Popian"},{name:"Portiragnes"},{name:"Le Pouget"},{name:"Le Poujol-sur-Orb"},{name:"Poujols"},{name:"Poussan"},{name:"Pouzolles"},{name:"Pouzols"},{name:"Le Pradal"},{name:"Prades-le-Lez"},{name:"Prades-sur-Vernazobre"},{name:"Prémian"},{name:"Le Puech"},{name:"Puéchabon"},{name:"Puilacher"},{name:"Puimisson"},{name:"Puissalicon"},{name:"Puisserguier"},{name:"Quarante"},{name:"Restinclières"},{name:"Rieussec"},{name:"Riols"},{name:"Les Rives"},{name:"Romiguières"},{name:"Roquebrun"},{name:"Roqueredonde"},{name:"Roquessels"},{name:"Rosis"},{name:"Rouet"},{name:"Roujan"},{name:"Saint-André-de-Buèges"},{name:"Saint-André-de-Sangonis"},{name:"Saint-Aunès"},{name:"Saint-Bauzille-de-la-Sylve"},{name:"Saint-Bauzille-de-Montmel"},{name:"Saint-Bauzille-de-Putois"},{name:"Saint-Brès"},{name:"Saint-Chinian"},{name:"Saint-Christol"},{name:"Saint-Clément-de-Rivière"},{name:"Saint-Drézéry"},{name:"Saint-Étienne-d Albagnan"},{name:"Saint-Étienne-de-Gourgas"},{name:"Saint-Étienne-Estréchoux"},{name:"Saint-Félix-de-l Héras"},{name:"Saint-Félix-de-Lodez"},{name:"Saint-Gély-du-Fesc"},{name:"Saint-Geniès-de-Fontedit"},{name:"Saint-Geniès-de-Varensal"},{name:"Saint-Geniès-des-Mourgues"},{name:"Saint-Georges-d Orques"},{name:"Saint-Gervais-sur-Mare"},{name:"Saint-Guilhem-le-Désert"},{name:"Saint-Guiraud"},{name:"Saint-Hilaire-de-Beauvoir"},{name:"Saint-Jean-de-Buèges"},{name:"Saint-Jean-de-Cornies"},{name:"Saint-Jean-de-Cuculles"},{name:"Saint-Jean-de-Fos"},{name:"Saint-Jean-de-la-Blaquière"},{name:"Saint-Jean-de-Minervois"},{name:"Saint-Jean-de-Védas"},{name:"Saint-Julien"},{name:"Saint-Just"},{name:"Saint-Martin-de-l Arçon"},{name:"Saint-Martin-de-Londres"},{name:"Saint-Mathieu-de-Tréviers"},{name:"Saint-Maurice-Navacelles"},{name:"Saint-Michel"},{name:"Saint-Nazaire-de-Ladarez"},{name:"Saint-Nazaire-de-Pézan"},{name:"Saint-Pargoire"},{name:"Saint-Paul-et-Valmalle"},{name:"Saint-Pierre-de-la-Fage"},{name:"Saint-Pons-de-Mauchiens"},{name:"Saint-Pons-de-Thomières"},{name:"Saint-Privat"},{name:"Saint-Saturnin-de-Lucian"},{name:"Saint-Sériès"},{name:"Saint-Thibéry"},{name:"Saint-Vincent-d Olargues"},{name:"Saint-Vincent-de-Barbeyrargues"},{name:"Sainte-Croix-de-Quintillargues"},{name:"Salasc"},{name:"La Salvetat-sur-Agout"},{name:"Saturargues"},{name:"Saussan"},{name:"Saussines"},{name:"Sauteyrargues"},{name:"Sauvian"},{name:"Sérignan"},{name:"Servian"},{name:"Sète"},{name:"Siran"},{name:"Sorbs"},{name:"Soubès"},{name:"Le Soulié"},{name:"Soumont"},{name:"Sussargues"},{name:"Taussac-la-Billière"},{name:"Teyran"},{name:"Thézan-lès-Béziers"},{name:"La Tour-sur-Orb"},{name:"Tourbes"},{name:"Tressan"},{name:"Le Triadou"},{name:"Usclas-d Hérault"},{name:"Usclas-du-Bosc"},{name:"La Vacquerie-et-Saint-Martin-de-Castries"},{name:"Vacquières"},{name:"Vailhan"},{name:"Vailhauquès"},{name:"Valergues"},{name:"Valflaunès"},{name:"Valmascle"},{name:"Valras-Plage"},{name:"Valros"},{name:"Vélieux"},{name:"Vendargues"},{name:"Vendémian"},{name:"Vendres"},{name:"Vérargues"},{name:"Verreries-de-Moussans"},{name:"Vias"},{name:"Vic-la-Gardiole"},{name:"Vieussan"},{name:"Villemagne-l Argentière"},{name:"Villeneuve-lès-Béziers"},{name:"Villeneuve-lès-Maguelone"},{name:"Villeneuvette"},{name:"Villespassans"},{name:"Villetelle"},{name:"Villeveyrac"},{name:"Viols-en-Laval"},{name:"Viols-le-Fort"}];

var communesSelected="";
var nbKey=1;
    
$scope.checkAll = function () {
  communesSelected="";
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
        myFilter = "PLACE IN (".concat(communesSelected).concat(")")  ;           /*lunel','popian','cebazan') */
        changeFilter();
        console.log(cqlFilter);    
    }else {
            $scope.selectedAll = false;
            communesSelected="";
            myFilter="";
            changeFilter();
            console.log("im in else");
    }

};

    
    
    
    
    
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
    console.log("after if :"+nbKey);
    $scope.communesSelected+=",";

    }
    }


    });

    myFilter = "PLACE IN (".concat($scope.communesSelected).concat(")")  ;           /*lunel','popian','cebazan') */

    changeFilter();
    console.log(cqlFilter);


    };
    });