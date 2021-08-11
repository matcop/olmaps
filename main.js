
window.onload = init;

function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [-7116569.555390783, -1930303.4143617074],
            zoom: 5,//19,
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(),
                zIndex: 1,
                visible: false,
                //  nota abour EXTENT              The bounding extent for layer rendering. The layer will not be rendered outside of this extent.
                //ESPAÑOL
                //La extensión delimitadora para el renderizado de capas. La capa no se renderizará fuera de esta extensión.

                //extent: [-7893011.389734798,-2750862.8075842257, -6300063.720271725, -971408.7891053226]

            })
        ],
        target: 'js-map',
    })

    //layer group

    const layerGroup = new ol.layer.Group({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    //url:'https://{a-c}.tile.openstreeatmap.fr/hot/{z}/{x}/{y}.png',
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    //url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' //
                }),
                zIndex: 0,
                visible: false,

                //extent: [-7893011.389734798,-2750862.8075842257, -6300063.720271725, -971408.7891053226]

                //opacity: 0.3
            }),
            //Bing Maps BaseMap Layer
            //no tengo cuenta de bing no pude crear llave
            /*  new ol.layer.Tile({
                 source:new ol.source.BingMaps({
 
                 })
             }) */
            //Bing Maps BaseMap Layer

            //CartoDB baseLayer


        ]
    })
    map.addLayer(layerGroup);
    //layer group para  CartoDB

    const cartoDBaseLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{scale}.png'


        }),
        visible: false
    })
    map.addLayer(cartoDBaseLayer);
    // tileDebug
    const tileDebugLayer = new ol.layer.Tile({
        source: new ol.source.TileDebug(),
        visible: false
    })

    map.addLayer(tileDebugLayer);


    // STAMEN Other provider base map layer

    const stamenBaseLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain-labels'
        }),
        visisble: false
    })
    map.addLayer(stamenBaseLayer);


    const stamenBaseMapLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',

        }),
        visible: true,
        opacity: 0.4
    })
    map.addLayer(stamenBaseMapLayer);


    // tile ArcGIS REST API layer
    const tileArcGISTLAYER = new ol.layer.Tile({
        source: new ol.source.TileArcGISRest({
            //    url:'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer'
            //url:'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_PublicSafety_Louisville/MapServer'  
            url: 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_PublicSafety_Louisville/MapServer/2'
        }),
        visible: true
    })

    map.addLayer(tileArcGISTLAYER);

    // NOAA WMS Layers

    const NOAAWMSLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            //url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?',
            url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?',
            params: {
                LAYERS: 1,
                //Boundary:19,
                FORMAT: 'image/png',
                TRANSPARENT: true
            },
        }),
        visible:true
    })
    map.addLayer(NOAAWMSLayer);




    //get coordinate// para obtener las coordenadas
    map.on('click', function (e) {
        console.log(e.coordinate);
    })

}

