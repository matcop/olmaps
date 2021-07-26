window.onload=init;

function init(){
    const map =new ol.Map({
        view: new ol.View({
            center:[-7587843.049117488,-1863168.094706761],
            zoom:16
           
        }),
        layers:[
            new ol.layer.Tile({
                source:new ol.source.OSM()
            })
        ],
            target:'js-map'
    })

    map.on('click', function(e){
        console.log(e.coordinate);
    })
}

 