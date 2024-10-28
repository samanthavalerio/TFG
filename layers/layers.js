var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Distrito_1 = new ol.format.GeoJSON();
var features_Distrito_1 = format_Distrito_1.readFeatures(json_Distrito_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distrito_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distrito_1.addFeatures(features_Distrito_1);
var lyr_Distrito_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distrito_1, 
                style: style_Distrito_1,
                popuplayertitle: "Distrito",
                interactive: true,
                title: '<img src="styles/legend/Distrito_1.png" /> Distrito'
            });
var format_PequeaEscala_2 = new ol.format.GeoJSON();
var features_PequeaEscala_2 = format_PequeaEscala_2.readFeatures(json_PequeaEscala_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PequeaEscala_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PequeaEscala_2.addFeatures(features_PequeaEscala_2);
var lyr_PequeaEscala_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PequeaEscala_2, 
                style: style_PequeaEscala_2,
                popuplayertitle: "Pequeña Escala",
                interactive: true,
    title: 'Pequeña Escala<br />\
    <img src="styles/legend/PequeaEscala_2_0.png" /> 0.0 - 25.0<br />\
    <img src="styles/legend/PequeaEscala_2_1.png" /> 25.0 - 50.0<br />\
    <img src="styles/legend/PequeaEscala_2_2.png" /> 50.0 - 100.0<br />'
        });
var format_GranEscala_3 = new ol.format.GeoJSON();
var features_GranEscala_3 = format_GranEscala_3.readFeatures(json_GranEscala_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranEscala_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranEscala_3.addFeatures(features_GranEscala_3);
var lyr_GranEscala_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranEscala_3, 
                style: style_GranEscala_3,
                popuplayertitle: "Gran Escala",
                interactive: true,
    title: 'Gran Escala<br />\
    <img src="styles/legend/GranEscala_3_0.png" /> 0.0 - 25.0<br />\
    <img src="styles/legend/GranEscala_3_1.png" /> 25.0 - 50.0<br />\
    <img src="styles/legend/GranEscala_3_2.png" /> 50.0 - 100.0<br />'
        });
var group_CostaRica = new ol.layer.Group({
                                layers: [lyr_Distrito_1,lyr_PequeaEscala_2,lyr_GranEscala_3,],
                                fold: "open",
                                title: "Costa Rica"});

lyr_OSMStandard_0.setVisible(true);lyr_Distrito_1.setVisible(true);lyr_PequeaEscala_2.setVisible(true);lyr_GranEscala_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_CostaRica];
lyr_Distrito_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_PequeaEscala_2.set('fieldAliases', {'ID Transfo': 'ID Transformador', 'Cap Mínim': 'Capacidad Mínima (kW)', 'Criterio q': 'Criterio q', 'Cap Maxima': 'Cap Maxima', 'Cap Nom (k': 'Cap Nom (k', 'Coord, X': 'Coord, X', 'Coord Y': 'Coord Y', 'Dispoibili': 'Disponibilidad (%)', });
lyr_GranEscala_3.set('fieldAliases', {'Equipment': 'ID Tramo', 'begin': 'begin', 'end': 'end', 'Tramos_Cap': 'Capacidad de integración (kW)', 'Tramos_C_1': 'Disponibilidad (%)', });
lyr_Distrito_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_PequeaEscala_2.set('fieldImages', {'ID Transfo': 'TextEdit', 'Cap Mínim': 'TextEdit', 'Criterio q': 'TextEdit', 'Cap Maxima': 'TextEdit', 'Cap Nom (k': 'TextEdit', 'Coord, X': 'TextEdit', 'Coord Y': 'TextEdit', 'Dispoibili': 'TextEdit', });
lyr_GranEscala_3.set('fieldImages', {'Equipment': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'Tramos_Cap': 'TextEdit', 'Tramos_C_1': 'TextEdit', });
lyr_Distrito_1.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_PequeaEscala_2.set('fieldLabels', {'ID Transfo': 'inline label - always visible', 'Cap Mínim': 'inline label - always visible', 'Criterio q': 'hidden field', 'Cap Maxima': 'hidden field', 'Cap Nom (k': 'hidden field', 'Coord, X': 'hidden field', 'Coord Y': 'hidden field', 'Dispoibili': 'inline label - always visible', });
lyr_GranEscala_3.set('fieldLabels', {'Equipment': 'inline label - always visible', 'begin': 'hidden field', 'end': 'hidden field', 'Tramos_Cap': 'header label - always visible', 'Tramos_C_1': 'hidden field', });
lyr_GranEscala_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});