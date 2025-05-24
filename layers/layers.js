ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32640").setExtent([444961.053101, 2567323.204240, 474262.343311, 2587000.707259]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ISPSD2_1_1 = new ol.format.GeoJSON();
var features_ISPSD2_1_1 = format_ISPSD2_1_1.readFeatures(json_ISPSD2_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_ISPSD2_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISPSD2_1_1.addFeatures(features_ISPSD2_1_1);
var lyr_ISPSD2_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISPSD2_1_1, 
                style: style_ISPSD2_1_1,
                popuplayertitle: 'ISPSD2_1',
                interactive: true,
                title: '<img src="styles/legend/ISPSD2_1_1.png" /> ISPSD2_1'
            });
var format_ISPFS4_2_2 = new ol.format.GeoJSON();
var features_ISPFS4_2_2 = format_ISPFS4_2_2.readFeatures(json_ISPFS4_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_ISPFS4_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISPFS4_2_2.addFeatures(features_ISPFS4_2_2);
var lyr_ISPFS4_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISPFS4_2_2, 
                style: style_ISPFS4_2_2,
                popuplayertitle: 'ISPFS4_2',
                interactive: true,
                title: '<img src="styles/legend/ISPFS4_2_2.png" /> ISPFS4_2'
            });
var format_ISPFS1_1_3 = new ol.format.GeoJSON();
var features_ISPFS1_1_3 = format_ISPFS1_1_3.readFeatures(json_ISPFS1_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_ISPFS1_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISPFS1_1_3.addFeatures(features_ISPFS1_1_3);
var lyr_ISPFS1_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISPFS1_1_3, 
                style: style_ISPFS1_1_3,
                popuplayertitle: 'ISPFS1_1',
                interactive: true,
                title: '<img src="styles/legend/ISPFS1_1_3.png" /> ISPFS1_1'
            });
var format_ISPFS3_1_4 = new ol.format.GeoJSON();
var features_ISPFS3_1_4 = format_ISPFS3_1_4.readFeatures(json_ISPFS3_1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_ISPFS3_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISPFS3_1_4.addFeatures(features_ISPFS3_1_4);
var lyr_ISPFS3_1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISPFS3_1_4, 
                style: style_ISPFS3_1_4,
                popuplayertitle: 'ISPFS3_1',
                interactive: true,
                title: '<img src="styles/legend/ISPFS3_1_4.png" /> ISPFS3_1'
            });
var format_Boundary_5 = new ol.format.GeoJSON();
var features_Boundary_5 = format_Boundary_5.readFeatures(json_Boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32640'});
var jsonSource_Boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_5.addFeatures(features_Boundary_5);
var lyr_Boundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_5, 
                style: style_Boundary_5,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_5.png" /> Boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ISPSD2_1_1.setVisible(true);lyr_ISPFS4_2_2.setVisible(true);lyr_ISPFS1_1_3.setVisible(true);lyr_ISPFS3_1_4.setVisible(true);lyr_Boundary_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ISPSD2_1_1,lyr_ISPFS4_2_2,lyr_ISPFS1_1_3,lyr_ISPFS3_1_4,lyr_Boundary_5];
lyr_ISPSD2_1_1.set('fieldAliases', {'ISPolCode': 'ISPolCode', 'ISPolID': 'ISPolID', 'ISPolSite': 'ISPolSite', 'ISPolName': 'ISPolName', 'ISPolChall': 'ISPolChall', 'ISPolDesc': 'ISPolDesc', 'ISPolLayer': 'ISPolLayer', 'GeomType': 'GeomType', 'Length': 'Length', 'Area': 'Area', 'Ha': 'Ha', 'Date': 'Date', 'CreatedBy': 'CreatedBy', 'ExAgencies': 'ExAgencies', 'Stakehold': 'Stakehold', 'SDGCode': 'SDGCode', 'OV2040': 'OV2040', 'KeyAction1': 'KeyAction1', 'KeyAction2': 'KeyAction2', 'KeyAction3': 'KeyAction3', 'KeyAction4': 'KeyAction4', 'KeyAction5': 'KeyAction5', 'KeyAction6': 'KeyAction6', 'KeyAction7': 'KeyAction7', 'KeyAction8': 'KeyAction8', 'Outcome1': 'Outcome1', 'Outcome2': 'Outcome2', 'Outcome3': 'Outcome3', 'Outcome4': 'Outcome4', 'Outcome5': 'Outcome5', 'Outcome6': 'Outcome6', 'Outcome7': 'Outcome7', 'Outcome8': 'Outcome8', 'Target1': 'Target1', 'Target2': 'Target2', 'Target3': 'Target3', 'Target4': 'Target4', 'Target5': 'Target5', 'Target6': 'Target6', 'Target7': 'Target7', 'Target8': 'Target8', 'Note': 'Note', });
lyr_ISPFS4_2_2.set('fieldAliases', {'ISPolCode': 'ISPolCode', 'ISProjCode': 'ISProjCode', 'ISProjID': 'ISProjID', 'ISProjSite': 'ISProjSite', 'ISPolName': 'ISPolName', 'ISProjName': 'ISProjName', 'ISProjDesc': 'ISProjDesc', 'ISProjType': 'ISProjType', 'ISProjLink': 'ISProjLink', 'RSSCode': 'RSSCode', 'GeomType': 'GeomType', 'Length': 'Length', 'Area': 'Area', 'Ha': 'Ha', 'Date': 'Date', 'CreatedBy': 'CreatedBy', 'ExAgencies': 'ExAgencies', 'Stakehold': 'Stakehold', 'SDGCode': 'SDGCode', 'OV2040': 'OV2040', 'Priority': 'Priority', 'Phase': 'Phase', 'Status': 'Status', 'Yr5DevPlan': 'Yr5DevPlan', 'StartYear': 'StartYear', 'EndYear': 'EndYear', 'TProjInv': 'TProjInv', 'PRSI': 'PRSI', 'PUSI': 'PUSI', 'PPP': 'PPP', 'ExtFund': 'ExtFund', 'ExtFundA': 'ExtFundA', 'Note': 'Note', });
lyr_ISPFS1_1_3.set('fieldAliases', {'ISPolCode': 'ISPolCode', 'ISProjCode': 'ISProjCode', 'ISProjID': 'ISProjID', 'ISProjSite': 'ISProjSite', 'ISPolName': 'ISPolName', 'ISProjName': 'ISProjName', 'ISProjDesc': 'ISProjDesc', 'ISProjType': 'ISProjType', 'ISProjLink': 'ISProjLink', 'RSSCode': 'RSSCode', 'GeomType': 'GeomType', 'Length': 'Length', 'Area': 'Area', 'Ha': 'Ha', 'Date': 'Date', 'CreatedBy': 'CreatedBy', 'ExAgencies': 'ExAgencies', 'Stakehold': 'Stakehold', 'SDGCode': 'SDGCode', 'OV2040': 'OV2040', 'Priority': 'Priority', 'Phase': 'Phase', 'Status': 'Status', 'Yr5DevPlan': 'Yr5DevPlan', 'StartYear': 'StartYear', 'EndYear': 'EndYear', 'TProjInv': 'TProjInv', 'PRSI': 'PRSI', 'PUSI': 'PUSI', 'PPP': 'PPP', 'ExtFund': 'ExtFund', 'ExtFundA': 'ExtFundA', 'Note': 'Note', });
lyr_ISPFS3_1_4.set('fieldAliases', {'ISPolCode': 'ISPolCode', 'ISProjCode': 'ISProjCode', 'ISProjID': 'ISProjID', 'ISProjSite': 'ISProjSite', 'ISPolName': 'ISPolName', 'ISProjName': 'ISProjName', 'ISProjDesc': 'ISProjDesc', 'ISProjType': 'ISProjType', 'ISProjLink': 'ISProjLink', 'RSSCode': 'RSSCode', 'GeomType': 'GeomType', 'Length': 'Length', 'Area': 'Area', 'Ha': 'Ha', 'Date': 'Date', 'CreatedBy': 'CreatedBy', 'ExAgencies': 'ExAgencies', 'Stakehold': 'Stakehold', 'SDGCode': 'SDGCode', 'OV2040': 'OV2040', 'Priority': 'Priority', 'Phase': 'Phase', 'Status': 'Status', 'Yr5DevPlan': 'Yr5DevPlan', 'StartYear': 'StartYear', 'EndYear': 'EndYear', 'TProjInv': 'TProjInv', 'PRSI': 'PRSI', 'PUSI': 'PUSI', 'PPP': 'PPP', 'ExtFund': 'ExtFund', 'ExtFundA': 'ExtFundA', 'Note': 'Note', });
lyr_Boundary_5.set('fieldAliases', {'fid_1': 'fid_1', 'LAYER': 'LAYER', 'HA': 'HA', 'AREA': 'AREA', });
lyr_ISPSD2_1_1.set('fieldImages', {'ISPolCode': 'TextEdit', 'ISPolID': 'TextEdit', 'ISPolSite': 'TextEdit', 'ISPolName': 'TextEdit', 'ISPolChall': 'TextEdit', 'ISPolDesc': 'TextEdit', 'ISPolLayer': 'TextEdit', 'GeomType': 'TextEdit', 'Length': 'TextEdit', 'Area': 'TextEdit', 'Ha': 'TextEdit', 'Date': 'DateTime', 'CreatedBy': 'TextEdit', 'ExAgencies': 'TextEdit', 'Stakehold': 'TextEdit', 'SDGCode': 'TextEdit', 'OV2040': 'TextEdit', 'KeyAction1': 'TextEdit', 'KeyAction2': 'TextEdit', 'KeyAction3': 'TextEdit', 'KeyAction4': 'TextEdit', 'KeyAction5': 'TextEdit', 'KeyAction6': 'TextEdit', 'KeyAction7': 'TextEdit', 'KeyAction8': 'TextEdit', 'Outcome1': 'TextEdit', 'Outcome2': 'TextEdit', 'Outcome3': 'TextEdit', 'Outcome4': 'TextEdit', 'Outcome5': 'TextEdit', 'Outcome6': 'TextEdit', 'Outcome7': 'TextEdit', 'Outcome8': 'TextEdit', 'Target1': 'TextEdit', 'Target2': 'TextEdit', 'Target3': 'TextEdit', 'Target4': 'TextEdit', 'Target5': 'TextEdit', 'Target6': 'TextEdit', 'Target7': 'TextEdit', 'Target8': 'TextEdit', 'Note': 'TextEdit', });
lyr_ISPFS4_2_2.set('fieldImages', {'ISPolCode': 'TextEdit', 'ISProjCode': 'TextEdit', 'ISProjID': 'TextEdit', 'ISProjSite': 'TextEdit', 'ISPolName': 'TextEdit', 'ISProjName': 'TextEdit', 'ISProjDesc': 'TextEdit', 'ISProjType': 'TextEdit', 'ISProjLink': 'TextEdit', 'RSSCode': 'TextEdit', 'GeomType': 'TextEdit', 'Length': 'TextEdit', 'Area': 'TextEdit', 'Ha': 'TextEdit', 'Date': 'DateTime', 'CreatedBy': 'TextEdit', 'ExAgencies': 'TextEdit', 'Stakehold': 'TextEdit', 'SDGCode': 'TextEdit', 'OV2040': 'TextEdit', 'Priority': 'TextEdit', 'Phase': 'TextEdit', 'Status': 'TextEdit', 'Yr5DevPlan': 'TextEdit', 'StartYear': 'TextEdit', 'EndYear': 'TextEdit', 'TProjInv': 'TextEdit', 'PRSI': 'TextEdit', 'PUSI': 'TextEdit', 'PPP': 'TextEdit', 'ExtFund': 'TextEdit', 'ExtFundA': 'TextEdit', 'Note': 'TextEdit', });
lyr_ISPFS1_1_3.set('fieldImages', {'ISPolCode': 'TextEdit', 'ISProjCode': 'TextEdit', 'ISProjID': 'TextEdit', 'ISProjSite': 'TextEdit', 'ISPolName': 'TextEdit', 'ISProjName': 'TextEdit', 'ISProjDesc': 'TextEdit', 'ISProjType': 'TextEdit', 'ISProjLink': 'TextEdit', 'RSSCode': 'TextEdit', 'GeomType': 'TextEdit', 'Length': 'TextEdit', 'Area': 'TextEdit', 'Ha': 'TextEdit', 'Date': 'DateTime', 'CreatedBy': 'TextEdit', 'ExAgencies': 'TextEdit', 'Stakehold': 'TextEdit', 'SDGCode': 'TextEdit', 'OV2040': 'TextEdit', 'Priority': 'TextEdit', 'Phase': 'TextEdit', 'Status': 'TextEdit', 'Yr5DevPlan': 'TextEdit', 'StartYear': 'TextEdit', 'EndYear': 'TextEdit', 'TProjInv': 'TextEdit', 'PRSI': 'TextEdit', 'PUSI': 'TextEdit', 'PPP': 'TextEdit', 'ExtFund': 'TextEdit', 'ExtFundA': 'TextEdit', 'Note': 'TextEdit', });
lyr_ISPFS3_1_4.set('fieldImages', {'ISPolCode': 'TextEdit', 'ISProjCode': 'TextEdit', 'ISProjID': 'TextEdit', 'ISProjSite': 'TextEdit', 'ISPolName': 'TextEdit', 'ISProjName': 'TextEdit', 'ISProjDesc': 'TextEdit', 'ISProjType': 'TextEdit', 'ISProjLink': 'TextEdit', 'RSSCode': 'TextEdit', 'GeomType': 'TextEdit', 'Length': 'TextEdit', 'Area': 'TextEdit', 'Ha': 'TextEdit', 'Date': 'DateTime', 'CreatedBy': 'TextEdit', 'ExAgencies': 'TextEdit', 'Stakehold': 'TextEdit', 'SDGCode': 'TextEdit', 'OV2040': 'TextEdit', 'Priority': 'TextEdit', 'Phase': 'TextEdit', 'Status': 'TextEdit', 'Yr5DevPlan': 'TextEdit', 'StartYear': 'TextEdit', 'EndYear': 'TextEdit', 'TProjInv': 'TextEdit', 'PRSI': 'TextEdit', 'PUSI': 'TextEdit', 'PPP': 'TextEdit', 'ExtFund': 'TextEdit', 'ExtFundA': 'TextEdit', 'Note': 'TextEdit', });
lyr_Boundary_5.set('fieldImages', {'fid_1': 'TextEdit', 'LAYER': 'TextEdit', 'HA': 'TextEdit', 'AREA': 'TextEdit', });
lyr_ISPSD2_1_1.set('fieldLabels', {'ISPolCode': 'inline label - visible with data', 'ISPolID': 'inline label - visible with data', 'ISPolSite': 'inline label - visible with data', 'ISPolName': 'inline label - visible with data', 'ISPolChall': 'inline label - visible with data', 'ISPolDesc': 'inline label - visible with data', 'ISPolLayer': 'inline label - visible with data', 'GeomType': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Ha': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'CreatedBy': 'inline label - visible with data', 'ExAgencies': 'inline label - visible with data', 'Stakehold': 'inline label - visible with data', 'SDGCode': 'inline label - visible with data', 'OV2040': 'inline label - visible with data', 'KeyAction1': 'inline label - visible with data', 'KeyAction2': 'inline label - visible with data', 'KeyAction3': 'inline label - visible with data', 'KeyAction4': 'inline label - visible with data', 'KeyAction5': 'inline label - visible with data', 'KeyAction6': 'inline label - visible with data', 'KeyAction7': 'inline label - visible with data', 'KeyAction8': 'inline label - visible with data', 'Outcome1': 'inline label - visible with data', 'Outcome2': 'inline label - visible with data', 'Outcome3': 'inline label - visible with data', 'Outcome4': 'inline label - visible with data', 'Outcome5': 'inline label - visible with data', 'Outcome6': 'inline label - visible with data', 'Outcome7': 'inline label - visible with data', 'Outcome8': 'inline label - visible with data', 'Target1': 'inline label - visible with data', 'Target2': 'inline label - visible with data', 'Target3': 'inline label - visible with data', 'Target4': 'inline label - visible with data', 'Target5': 'inline label - visible with data', 'Target6': 'inline label - visible with data', 'Target7': 'inline label - visible with data', 'Target8': 'inline label - visible with data', 'Note': 'inline label - visible with data', });
lyr_ISPFS4_2_2.set('fieldLabels', {'ISPolCode': 'inline label - visible with data', 'ISProjCode': 'inline label - visible with data', 'ISProjID': 'inline label - visible with data', 'ISProjSite': 'inline label - visible with data', 'ISPolName': 'inline label - visible with data', 'ISProjName': 'inline label - visible with data', 'ISProjDesc': 'inline label - visible with data', 'ISProjType': 'inline label - visible with data', 'ISProjLink': 'inline label - visible with data', 'RSSCode': 'inline label - visible with data', 'GeomType': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Ha': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'CreatedBy': 'inline label - visible with data', 'ExAgencies': 'inline label - visible with data', 'Stakehold': 'inline label - visible with data', 'SDGCode': 'inline label - visible with data', 'OV2040': 'inline label - visible with data', 'Priority': 'inline label - visible with data', 'Phase': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Yr5DevPlan': 'inline label - visible with data', 'StartYear': 'inline label - visible with data', 'EndYear': 'inline label - visible with data', 'TProjInv': 'inline label - visible with data', 'PRSI': 'inline label - visible with data', 'PUSI': 'inline label - visible with data', 'PPP': 'inline label - visible with data', 'ExtFund': 'inline label - visible with data', 'ExtFundA': 'inline label - visible with data', 'Note': 'inline label - visible with data', });
lyr_ISPFS1_1_3.set('fieldLabels', {'ISPolCode': 'inline label - visible with data', 'ISProjCode': 'inline label - visible with data', 'ISProjID': 'inline label - visible with data', 'ISProjSite': 'inline label - visible with data', 'ISPolName': 'inline label - visible with data', 'ISProjName': 'inline label - visible with data', 'ISProjDesc': 'inline label - visible with data', 'ISProjType': 'inline label - visible with data', 'ISProjLink': 'inline label - visible with data', 'RSSCode': 'inline label - visible with data', 'GeomType': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Ha': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'CreatedBy': 'inline label - visible with data', 'ExAgencies': 'inline label - visible with data', 'Stakehold': 'inline label - visible with data', 'SDGCode': 'inline label - visible with data', 'OV2040': 'inline label - visible with data', 'Priority': 'inline label - visible with data', 'Phase': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Yr5DevPlan': 'inline label - visible with data', 'StartYear': 'inline label - visible with data', 'EndYear': 'inline label - visible with data', 'TProjInv': 'inline label - visible with data', 'PRSI': 'inline label - visible with data', 'PUSI': 'inline label - visible with data', 'PPP': 'inline label - visible with data', 'ExtFund': 'inline label - visible with data', 'ExtFundA': 'inline label - visible with data', 'Note': 'inline label - visible with data', });
lyr_ISPFS3_1_4.set('fieldLabels', {'ISPolCode': 'inline label - visible with data', 'ISProjCode': 'inline label - visible with data', 'ISProjID': 'inline label - visible with data', 'ISProjSite': 'inline label - visible with data', 'ISPolName': 'inline label - visible with data', 'ISProjName': 'inline label - visible with data', 'ISProjDesc': 'inline label - visible with data', 'ISProjType': 'inline label - visible with data', 'ISProjLink': 'inline label - visible with data', 'RSSCode': 'inline label - visible with data', 'GeomType': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Ha': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'CreatedBy': 'inline label - visible with data', 'ExAgencies': 'inline label - visible with data', 'Stakehold': 'inline label - visible with data', 'SDGCode': 'inline label - visible with data', 'OV2040': 'inline label - visible with data', 'Priority': 'inline label - visible with data', 'Phase': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Yr5DevPlan': 'inline label - visible with data', 'StartYear': 'inline label - visible with data', 'EndYear': 'inline label - visible with data', 'TProjInv': 'inline label - visible with data', 'PRSI': 'inline label - visible with data', 'PUSI': 'inline label - visible with data', 'PPP': 'inline label - visible with data', 'ExtFund': 'inline label - visible with data', 'ExtFundA': 'inline label - visible with data', 'Note': 'inline label - visible with data', });
lyr_Boundary_5.set('fieldLabels', {'fid_1': 'header label - always visible', 'LAYER': 'inline label - visible with data', 'HA': 'inline label - visible with data', 'AREA': 'inline label - visible with data', });
lyr_Boundary_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});