
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
                visible: true,
                //  nota abour EXTENT              The bounding extent for layer rendering. The layer will not be rendered outside of this extent.
                //ESPAÑOL
                //La extensión delimitadora para el renderizado de capas. La capa no se renderizará fuera de esta extensión.

                extent: [-7893011.389734798,-2750862.8075842257, -6300063.720271725, -971408.7891053226]

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
                visible: true,

                extent: [-7893011.389734798,-2750862.8075842257, -6300063.720271725, -971408.7891053226]

                //opacity: 0.3
            })
        ]
    })
    map.addLayer(layerGroup);
    //layer group

    //get coordinate
    map.on ('click',function(e){
        console.log(e.coordinate);
    })

}

