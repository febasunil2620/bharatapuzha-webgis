var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_waterbody_1 = new ol.format.GeoJSON();
var features_waterbody_1 = format_waterbody_1.readFeatures(json_waterbody_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_1.addFeatures(features_waterbody_1);
var lyr_waterbody_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbody_1, 
                style: style_waterbody_1,
                popuplayertitle: 'waterbody',
                interactive: false,
                title: '<img src="styles/legend/waterbody_1.png" /> waterbody'
            });
var format_Geology_2 = new ol.format.GeoJSON();
var features_Geology_2 = format_Geology_2.readFeatures(json_Geology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_2.addFeatures(features_Geology_2);
var lyr_Geology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geology_2, 
                style: style_Geology_2,
                popuplayertitle: 'Geology',
                interactive: false,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_2_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/Geology_2_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_2_2.png" /> Charnockite Group of rocks<br />\
    <img src="styles/legend/Geology_2_3.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/Geology_2_4.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/Geology_2_5.png" /> Migmatite Complex<br />\
    <img src="styles/legend/Geology_2_6.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/Geology_2_7.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/Geology_2_8.png" /> Sand and Silt<br />\
    <img src="styles/legend/Geology_2_9.png" /> Sandstone and clay with lignite interc<br />\
    <img src="styles/legend/Geology_2_10.png" /> Tank/WB/River<br />' });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: 'Road',
                interactive: false,
    title: 'Road<br />\
    <img src="styles/legend/Road_3_0.png" /> BOUNDARY<br />\
    <img src="styles/legend/Road_3_1.png" /> CART TRACK IN PLAINS<br />\
    <img src="styles/legend/Road_3_2.png" /> DISTRICT ROAD<br />\
    <img src="styles/legend/Road_3_3.png" /> FOOT PATH<br />\
    <img src="styles/legend/Road_3_4.png" /> NATIONAL HIGHWAY<br />\
    <img src="styles/legend/Road_3_5.png" /> PACK TRACK IN PLAINS<br />\
    <img src="styles/legend/Road_3_6.png" /> STATE HIGHWAY<br />\
    <img src="styles/legend/Road_3_7.png" /> VILLAGE ROAD<br />' });
var format_geomorphology_4 = new ol.format.GeoJSON();
var features_geomorphology_4 = format_geomorphology_4.readFeatures(json_geomorphology_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphology_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphology_4.addFeatures(features_geomorphology_4);
var lyr_geomorphology_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphology_4, 
                style: style_geomorphology_4,
                popuplayertitle: 'geomorphology',
                interactive: false,
    title: 'geomorphology<br />\
    <img src="styles/legend/geomorphology_4_0.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphology_4_1.png" /> Denudational Hills<br />\
    <img src="styles/legend/geomorphology_4_2.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/geomorphology_4_3.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/geomorphology_4_4.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/geomorphology_4_5.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/geomorphology_4_6.png" /> Pediplain Weathered<br />\
    <img src="styles/legend/geomorphology_4_7.png" /> Piedmont Zone<br />\
    <img src="styles/legend/geomorphology_4_8.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/geomorphology_4_9.png" /> Residual Hill<br />\
    <img src="styles/legend/geomorphology_4_10.png" /> Residual Mount<br />\
    <img src="styles/legend/geomorphology_4_11.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/geomorphology_4_12.png" /> Rock Exposure<br />\
    <img src="styles/legend/geomorphology_4_13.png" /> Structural Hills<br />\
    <img src="styles/legend/geomorphology_4_14.png" /> Valley<br />\
    <img src="styles/legend/geomorphology_4_15.png" /> Valley Fill<br />\
    <img src="styles/legend/geomorphology_4_16.png" /> Water Body<br />\
    <img src="styles/legend/geomorphology_4_17.png" /> <br />' });
var format_drainage_5 = new ol.format.GeoJSON();
var features_drainage_5 = format_drainage_5.readFeatures(json_drainage_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainage_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainage_5.addFeatures(features_drainage_5);
var lyr_drainage_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainage_5, 
                style: style_drainage_5,
                popuplayertitle: 'drainage',
                interactive: false,
    title: 'drainage<br />\
    <img src="styles/legend/drainage_5_0.png" /> 0<br />\
    <img src="styles/legend/drainage_5_1.png" /> 1<br />\
    <img src="styles/legend/drainage_5_2.png" /> 2<br />\
    <img src="styles/legend/drainage_5_3.png" /> 3<br />\
    <img src="styles/legend/drainage_5_4.png" /> 4<br />\
    <img src="styles/legend/drainage_5_5.png" /> 5<br />' });
var format_CheckDam_6 = new ol.format.GeoJSON();
var features_CheckDam_6 = format_CheckDam_6.readFeatures(json_CheckDam_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckDam_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckDam_6.addFeatures(features_CheckDam_6);
var lyr_CheckDam_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CheckDam_6, 
                style: style_CheckDam_6,
                popuplayertitle: 'Check Dam',
                interactive: true,
                title: '<img src="styles/legend/CheckDam_6.png" /> Check Dam'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_waterbody_1.setVisible(true);lyr_Geology_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_geomorphology_4.setVisible(true);lyr_drainage_5.setVisible(true);lyr_CheckDam_6.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_waterbody_1,lyr_Geology_2,lyr_Road_3,lyr_geomorphology_4,lyr_drainage_5,lyr_CheckDam_6];
lyr_Bharathapuzha_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_waterbody_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Geology_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Road_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_geomorphology_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_drainage_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_CheckDam_6.set('fieldAliases', {'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_Bharathapuzha_0.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_waterbody_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Geology_2.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_geomorphology_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_drainage_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'ORDER1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_CheckDam_6.set('fieldImages', {'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_Bharathapuzha_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_waterbody_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Geology_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Road_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_geomorphology_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_drainage_5.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_CheckDam_6.set('fieldLabels', {'Name': 'no label', 'name1': 'inline label - visible with data', 'Photo': 'no label', });
lyr_CheckDam_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});