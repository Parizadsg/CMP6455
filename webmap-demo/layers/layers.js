var wms_layers = [];

var format_slco_county_boundary_0 = new ol.format.GeoJSON();
var features_slco_county_boundary_0 = format_slco_county_boundary_0.readFeatures(json_slco_county_boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slco_county_boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slco_county_boundary_0.addFeatures(features_slco_county_boundary_0);
var lyr_slco_county_boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slco_county_boundary_0, 
                style: style_slco_county_boundary_0,
                popuplayertitle: 'slco_county_boundary',
                interactive: true,
                title: '<img src="styles/legend/slco_county_boundary_0.png" /> slco_county_boundary'
            });
var format_slco_census_tracts_1 = new ol.format.GeoJSON();
var features_slco_census_tracts_1 = format_slco_census_tracts_1.readFeatures(json_slco_census_tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slco_census_tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slco_census_tracts_1.addFeatures(features_slco_census_tracts_1);
var lyr_slco_census_tracts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slco_census_tracts_1, 
                style: style_slco_census_tracts_1,
                popuplayertitle: 'slco_census_tracts',
                interactive: false,
                title: '<img src="styles/legend/slco_census_tracts_1.png" /> slco_census_tracts'
            });
var format_slco_healthcare_facilities_2 = new ol.format.GeoJSON();
var features_slco_healthcare_facilities_2 = format_slco_healthcare_facilities_2.readFeatures(json_slco_healthcare_facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slco_healthcare_facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slco_healthcare_facilities_2.addFeatures(features_slco_healthcare_facilities_2);
var lyr_slco_healthcare_facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slco_healthcare_facilities_2, 
                style: style_slco_healthcare_facilities_2,
                popuplayertitle: 'slco_healthcare_facilities',
                interactive: true,
    title: 'slco_healthcare_facilities<br />\
    <img src="styles/legend/slco_healthcare_facilities_2_0.png" /> 0 - 40<br />\
    <img src="styles/legend/slco_healthcare_facilities_2_1.png" /> 40 - 1092<br />\
    <img src="styles/legend/slco_healthcare_facilities_2_2.png" /> 1092 - 22232<br />\
    <img src="styles/legend/slco_healthcare_facilities_2_3.png" /> 22232 - 82915<br />\
    <img src="styles/legend/slco_healthcare_facilities_2_4.png" /> 82915 - 143529<br />' });

lyr_slco_county_boundary_0.setVisible(true);lyr_slco_census_tracts_1.setVisible(true);lyr_slco_healthcare_facilities_2.setVisible(true);
var layersList = [lyr_slco_county_boundary_0,lyr_slco_census_tracts_1,lyr_slco_healthcare_facilities_2];
lyr_slco_county_boundary_0.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'countynbr': 'countynbr', 'entitynbr': 'entitynbr', 'entityyr': 'entityyr', 'name': 'name', 'fips': 'fips', 'stateplane': 'stateplane', 'pop_lastce': 'pop_lastce', 'pop_curres': 'pop_curres', 'globalid': 'globalid', 'fips_str': 'fips_str', 'color4': 'color4', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_slco_census_tracts_1.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'statefp10': 'statefp10', 'countyfp10': 'countyfp10', 'tractce10': 'tractce10', 'geoid10': 'geoid10', 'name10': 'name10', 'funcstat10': 'funcstat10', 'intptlat10': 'intptlat10', 'intptlon10': 'intptlon10', 'logrecno': 'logrecno', 'arealand': 'arealand', 'areawatr': 'areawatr', 'pop100': 'pop100', 'hu100': 'hu100', 'p0020001': 'p0020001', 'p0020002': 'p0020002', 'p0020003': 'p0020003', 'p0020004': 'p0020004', 'p0020005': 'p0020005', 'p0020006': 'p0020006', 'p0020007': 'p0020007', 'p0020008': 'p0020008', 'p0020009': 'p0020009', 'p0020010': 'p0020010', 'mtfcc': 'mtfcc', 'p0010011': 'p0010011', 'p0010012': 'p0010012', 'p0010013': 'p0010013', 'p0010014': 'p0010014', 'sqmiles': 'sqmiles', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_slco_healthcare_facilities_2.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'factype': 'factype', 'facility_i': 'facility_i', 'facid': 'facid', 'name': 'name', 'address': 'address', 'city': 'city', 'zip': 'zip', 'telephone': 'telephone', 'type': 'type', 'county': 'county', 'telehealth': 'telehealth', 'functional': 'functional', });
lyr_slco_county_boundary_0.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'countynbr': 'TextEdit', 'entitynbr': 'TextEdit', 'entityyr': 'TextEdit', 'name': 'TextEdit', 'fips': 'TextEdit', 'stateplane': 'TextEdit', 'pop_lastce': 'TextEdit', 'pop_curres': 'TextEdit', 'globalid': 'TextEdit', 'fips_str': 'TextEdit', 'color4': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_slco_census_tracts_1.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'statefp10': 'TextEdit', 'countyfp10': 'TextEdit', 'tractce10': 'TextEdit', 'geoid10': 'TextEdit', 'name10': 'TextEdit', 'funcstat10': 'TextEdit', 'intptlat10': 'TextEdit', 'intptlon10': 'TextEdit', 'logrecno': 'TextEdit', 'arealand': 'TextEdit', 'areawatr': 'TextEdit', 'pop100': 'TextEdit', 'hu100': 'TextEdit', 'p0020001': 'TextEdit', 'p0020002': 'TextEdit', 'p0020003': 'TextEdit', 'p0020004': 'TextEdit', 'p0020005': 'TextEdit', 'p0020006': 'TextEdit', 'p0020007': 'TextEdit', 'p0020008': 'TextEdit', 'p0020009': 'TextEdit', 'p0020010': 'TextEdit', 'mtfcc': 'TextEdit', 'p0010011': 'TextEdit', 'p0010012': 'TextEdit', 'p0010013': 'TextEdit', 'p0010014': 'TextEdit', 'sqmiles': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_slco_healthcare_facilities_2.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'TextEdit', 'factype': 'TextEdit', 'facility_i': 'TextEdit', 'facid': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'city': 'TextEdit', 'zip': 'TextEdit', 'telephone': 'TextEdit', 'type': 'TextEdit', 'county': 'TextEdit', 'telehealth': 'TextEdit', 'functional': 'TextEdit', });
lyr_slco_county_boundary_0.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'countynbr': 'no label', 'entitynbr': 'no label', 'entityyr': 'no label', 'name': 'no label', 'fips': 'no label', 'stateplane': 'no label', 'pop_lastce': 'no label', 'pop_curres': 'no label', 'globalid': 'no label', 'fips_str': 'no label', 'color4': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_slco_census_tracts_1.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'statefp10': 'no label', 'countyfp10': 'no label', 'tractce10': 'no label', 'geoid10': 'no label', 'name10': 'no label', 'funcstat10': 'no label', 'intptlat10': 'no label', 'intptlon10': 'no label', 'logrecno': 'no label', 'arealand': 'no label', 'areawatr': 'no label', 'pop100': 'no label', 'hu100': 'no label', 'p0020001': 'no label', 'p0020002': 'no label', 'p0020003': 'no label', 'p0020004': 'no label', 'p0020005': 'no label', 'p0020006': 'no label', 'p0020007': 'no label', 'p0020008': 'no label', 'p0020009': 'no label', 'p0020010': 'no label', 'mtfcc': 'no label', 'p0010011': 'no label', 'p0010012': 'no label', 'p0010013': 'no label', 'p0010014': 'no label', 'sqmiles': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_slco_healthcare_facilities_2.set('fieldLabels', {'pk': 'no label', 'objectid': 'no label', 'factype': 'no label', 'facility_i': 'no label', 'facid': 'no label', 'name': 'no label', 'address': 'no label', 'city': 'no label', 'zip': 'no label', 'telephone': 'no label', 'type': 'no label', 'county': 'no label', 'telehealth': 'no label', 'functional': 'no label', });
lyr_slco_healthcare_facilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});