
window.onload = init;

function init() {
    //Controls
    const overViewMapControl = new ol.control.OverviewMap({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ]
    });
    const mousePositionControl = new ol.control.MousePosition();
    const fullScreenControl = new ol.control.FullScreen();
    const map = new ol.Map({
        view: new ol.View({
            center: [-7587843.049117488, -1863168.094706761],

            zoom: 16,
            //maxZoom: 6,
            //minZoom: 2,
            rotation: 0


        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map',
        keyboardEventTarget: document,

        controls: ol.control.defaults().extend([
            fullScreenControl,
            mousePositionControl,
            overViewMapControl

        ])



    })

    //mostrar por consola los controles por defecto dentro de un array
    //console.log(ol.control.defaults())



    //muestra las coordenadas en la consola
    map.on('click', function (e) {
        console.log(e.coordinate);
    })

    const popupContainerElement = document.getElementById('popup-coordinates');
    const popup = new ol.Overlay({
        element: popupContainerElement,
        OverlayPositioning: 'top-right',

    })
    map.addOverlay(popup);

    map.on('click', function (e) {
        console.log(e.coordinate);
        const clickedCoordinate = e.coordinate; //guardamos en la constante el valor obtnido
        //popup.setPosition(undefined);
        popup.setPosition(clickedCoordinate);

        //then i need to change the content of paragraf
        popupContainerElement.innerHTML = clickedCoordinate;

    });


    //INTERACIONES
    //NO NECESITAN DE BOTONES SOLO INTERACIONES BASICAS CON EL USO DE MOUSE
    //TECLADO 
    //DragRotate Interaction
    const dragRotateInteraction = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    });

    map.addInteraction(dragRotateInteraction);

    //draw Interaction dibujo recto y libre.
    const drawInteraction = new ol.interaction.Draw({
        type: 'Polygon',
        // freehand:false,
    });
    map.addInteraction(drawInteraction);

    //Eventos al finalizar dibujo

    // drawInteraction.on('drawend',function(e){
    //     console.log('el dibujo a terminado');
    // })


    //evento al empezar el dibujo
    //drawInteraction.on('drawstart',function(e){
    drawInteraction.on('drawend', function (e) {

        //console.log('el dibujo a empezo');
        let parser = new ol.format.GeoJSON();
        // let drawFeatures = parser.writeFeaturesObject([e.feature]);
        // console.log(drawFeatures.features[0].geometry.coordinates[0]);

        //abajo muestra la opcion para ver en formato GEOjson
        let drawFeatures = parser.writeFeatures([e.feature]);
        console.log(drawFeatures);
    })

    //CONTROLES
    //aqui si se usa controles botones 




}

