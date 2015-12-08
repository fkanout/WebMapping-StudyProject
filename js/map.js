var filterTotal=[];
var carte_style_url='http://b.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
var myCommunes,myConditions;
var myFilter="";
var geometry ;
var coordinate ;
var cqlFilter ;       
var geojsonFormat = new ol.format.GeoJSON();

var urlTemplate = 'http://myapp-faisalkanout.rhcloud.com/geoserver/wfs?service=WFS&' +
'version=1.1.0&request=GetFeature&' +
'typename=montpellier:Data_Events&' +
'CQL_FILTER={{CQLFILTER}}&'+
'outputFormat=text/javascript&' +
'format_options=callback:loadFeatures';
 

//  DWithin(GEOMETRY,POINT(5895346 1792630),10000,meters)


function getDate(chosenDate){
        filterTotal.splice(4,1,"");
        myDate= "DATE_D = '"+chosenDate+"'";///BEFORE OR DURING 
        ///        lastEarthQuake DURING 1700-01-01T00:00:00/2011-01-01T00:00:00"
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
    console.log(myFilter);

    vectorSource.clear(true);
    myFilter="";
}

    // the global function whose name is specified in the URL of JSONP WFS
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
          src: './flags/facebook30.png'
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
    center:  [431735.4450117468, 5405225.345929167],
    zoom: 9   
    });
var map = new ol.Map({
    layers: layers,
    
    target:    document.getElementById('map'),
    view: view,
    loadTilesWhileAnimating:true,
    loadTilesWhileInteracting:true,
    
    
    });


function changeStyle(val){
    
    carte_style_url=val;
sourceTile.setUrl(carte_style_url)    ;
    
    
    
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
 projection: view.getProjection()
});


$( "#track" ).click(function() {
  geolocation.setTracking(true);
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
          src: './flags/location.png'
    })
  }));
  
geolocation.on('change:position', function() {
  var coordinates = geolocation.getPosition();

  positionFeature.setGeometry(coordinates ?
      new ol.geom.Point(coordinates) : null);
    console.log(coordinates);
     
    
});

var featuresOverlay = new ol.layer.Vector({
  map: map,
  source: new ol.source.Vector({
    features: [accuracyFeature, positionFeature]
  })
});

//End GeoLocalisation
   
    
  /*  
map.on('pointermove', function(e) {
  if (e.dragging) {
    $(element).popover('destroy');
    return;
  }
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
}); */

map.on('click', function(evt) {
 
  var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
       geometry = feature.getGeometry();
    return feature;
  });
  if (feature) {
    var features = feature.get('features');
    var i;
    for (i = 0; i < features.length; ++i) {
        nom.innerText=(features[i].get('NOM'));
        place.innerText="Commune: "+(features[i].get('COMMUNE'));
        imginfo.src="./garig/"+(features[i].get('IMAGE'))+".jpg";
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