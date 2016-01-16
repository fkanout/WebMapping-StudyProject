var filterTotal=[];
var carte_style_url='http://tile.openstreetmap.org/{z}/{x}/{y}.png';
var myCommunes,myConditions;
var myFilter="";
var geometry ;
var coordinate ;
var cqlFilter ;       
var geojsonFormat = new ol.format.GeoJSON();
var coordinatesGPS="";
$('.pulse').hide();
var urlTemplate = 'http://myapp-faisalkanout.rhcloud.com/geoserver/wfs?service=WFS&' +
'version=1.1.0&request=GetFeature&' +
'typename=montpellier:Data_Events&' +
'CQL_FILTER={{CQLFILTER}}&'+
'outputFormat=text/javascript&' +
'format_options=callback:loadFeatures';
var $ajaxloading = $('#ajaxLoader').hide();
var $pageloading = $('#pageLoader').show();





$( "#gpsButton" ).click(function() {  
    var gpsDistance = ($('#gpsText').val()/100);
    if (!gpsDistance){
        alert("Il faut entrer une valeur correcte dans le champ KM");
    }else{
        var gpsTwoParts=coordinatesGPS.toString().split(",");
        filterTotal.splice(5,1,"");
        myDistance= " DWithin(the_geom,POINT("+gpsTwoParts[0]+" "+gpsTwoParts[1]+"),"+gpsDistance+",meters)";///BEFORE OR DURING 
        filterTotal.splice(5, 1 ,myDistance);
        changeFilter(filterTotal);
    }
});

function getDate(chosenDate){
        filterTotal.splice(4,1,"");
        myDate= "DATE_D = '"+chosenDate+"'";
        filterTotal.splice(4, 1 ,myDate);
        changeFilter(filterTotal);
    };
    
var vectorSource = new ol.source.Vector({
    loader: function(extent, resolution, projection) {
                                            var url = urlTemplate.replace('{{CQLFILTER}}', cqlFilter);
                                            $.ajax({url: url, dataType: 'jsonp', jsonp: false});
                                            }
                                        });

function changeFilter(addons) {
    for (var i = 0; i < addons.length; i++) {
    if( addons[i] !== ''){
       if(myFilter==""){
          myFilter=addons[i];

       }else{
           myFilter+=" AND " + addons[i];
            }
        }   
    }
    cqlFilter= myFilter;
    vectorSource.clear(true);
    myFilter="";
    console.log(cqlFilter);
};

// GetFeature requests
var loadFeatures = function(response) {
  vectorSource.addFeatures(geojsonFormat.readFeatures(response));
};



// Start Cluster 
var clusterSource = new ol.source.Cluster({
  distance: 20,
  source: vectorSource
});
        
var styleCache = {};
var clusters = new ol.layer.Vector({
  source: clusterSource,
  style: function(feature, resolution) {
    var size = feature.get('features').length;
    var style = styleCache[size];
    if (!style) {
      style = [new ol.style.Style({
            image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          size: [125, 125],
          offset: [0, 0],
          
          scale: 0.25,
          src: './webmappingAssets/img/pin.png'
        }),
         
        
        text: new ol.style.Text({
          text: size.toString(),
          font: '12px Calibri,sans-serif',
           offsetX: 0,
            offsetY: -5,
            
        
          fill: new ol.style.Fill({
            color: '#000000',
              
          })
        })
      })];
      styleCache[size] = style;
    }
    return style;
  }
});
//End Cluster


var slidemenu = document.getElementById('slidemenu');
var source = new ol.source.Vector({
    features: loadFeatures
    });
var styleCache = {};
var sourceTile= new ol.source.XYZ({url:carte_style_url});  
var tileLayer = new ol.layer.Tile({source:sourceTile});
var layers = [ 
    tileLayer,
    clusters,
    ];
var view= new ol.View({
    center:  [385242.6225572883, 5406391.010610516],
    zoom: 10   
    });
var map = new ol.Map({
    layers: layers,
    target:document.getElementById('map'),
    view: view,
    loadTilesWhileAnimating:true,
    loadTilesWhileInteracting:true,
    });


function changeStyle(val){
    carte_style_url=val;
    sourceTile.setUrl(carte_style_url);    
};

map.addControl(new ol.control.Zoom({
    className: 'custom-zoom'
}));
   
var nom = document.getElementById('nom');
var place = document.getElementById('Commune');
var imginfo = document.getElementById('imginfo');
var adress = document.getElementById('adress');
var bref = document.getElementById('bref');
var type = document.getElementById('type');
var acces = document.getElementById('acces');
var date_d = document.getElementById('date_d');
var date_e = document.getElementById('date_e');
var typePeysage = document.getElementById('typePeysage');


    
    
//Start GeoLocalisation
 var geolocation = new ol.Geolocation({
    projection: view.getProjection(),    
});
var accuracyFeature = new ol.Feature();
geolocation.on('change:accuracyGeometry', function() {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});
var positionFeature = new ol.Feature();
positionFeature.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          offset: [0, 0],   
          scale: 0.25,
          src: './webmappingAssets/img/location.png'
    })
  }));
  
geolocation.on('change:position', function() {
   coordinatesGPS = geolocation.getPosition();
   positionFeature.setGeometry(coordinatesGPS ?
    new ol.geom.Point(coordinatesGPS) : null);
});
var sourcefeaturesOverlay = new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  });

var featuresOverlay = new ol.layer.Vector({
  map: map,
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  })
});


function validateGPS(){
    var checkBoxGPS=document.getElementById('track');
    if(checkBoxGPS.checked){
        geolocation.setTracking(true);
        featuresOverlay.setSource(sourcefeaturesOverlay);
        document.getElementById("gpsButton").disabled = false;
        document.getElementById("gpsText").disabled = false;
        document.getElementById("gpsText").value="";
        $('.pulse').show();
    }else{
    geolocation.setTracking(false);
    featuresOverlay.setSource(null);
    document.getElementById("gpsButton").disabled = true;
    document.getElementById("gpsText").disabled = true;
    document.getElementById("gpsText").value="";   
    $('.pulse').hide();
    filterTotal.splice(5,1,"");
    changeFilter(filterTotal);
    }
};

//End GeoLocalisation
// change mouse cursor when over marker
map.on('pointermove', function(e) {
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});

map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        geometry = feature.getGeometry();
        return feature;
    });
    if (feature) {
        imginfo.src="";
        var features = feature.get('features');
        var i;
        for (i = 0; i < features.length; ++i) {
            nom.innerText=(features[i].get('NOM'));
            place.innerText="Commune: "+(features[i].get('COMMUNE'));
            imginfo.src="./webmappingAssets/imgEvents/"+(features[i].get('IMAGE'))+".jpg";
            adress.innerHTML="Adress: <br>"+(features[i].get('ADRESS'));
            bref.innerHTML="Enbref: <br>"+(features[i].get('DESCRIPTIO'));
            type.innerHTML="Type d'evenement: "+(features[i].get('TYPE'));
            acces.innerHTML="Condition d'entrée: "+(features[i].get('ACCES'));
            date_d.innerHTML="Date de debut . . . . . ."+(features[i].get('DATE_D'));
            date_e.innerHTML="Date de fin . . . . . . . . . "+(features[i].get('DATE_F'));
            typePeysage.innerHTML="Peysage: "+(features[i].get('PEYSAGE'));
            }
        slidemenu.className="mdl-layout__drawer is-visible";
    }
    else{
        place.innerHTML="";
        imginfo.src="";
    }
   
    coordinate = geometry.getCoordinates(); 
    //Start Animation 
    var pan = ol.animation.pan({
        duration: 500,
        source: /** @type {ol.Coordinate} */ (view.getCenter())
    });
    map.beforeRender(pan);
    view.setCenter(coordinate);
    //End Animation    
});

$(document)
  .ajaxStart(function () {
    $ajaxloading.show();
  })
  .ajaxStop(function () {
    $ajaxloading.hide();
  });

$(document).ready(function(){
    $('#gpsText').keypress(function(e){
      if(e.keyCode==13)
      $('#gpsButton').click();
    });
     setTimeout(function() {
        $pageloading.fadeOut('slow');
    }, 1200); 
});


