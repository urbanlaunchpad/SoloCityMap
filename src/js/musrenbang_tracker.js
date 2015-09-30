var projectIDfromURL = getProjectIDfromURL();
if(projectIDfromURL != null) {
	console.log(projectIDfromURL.substr(0, projectIDfromURL.indexOf('-')));
}
clearURL();
//***********************************************************************
//***********************Here goes the stuff for the map*****************
//***********************************************************************
var kelurahansFusionTableID = "1jdxsdPlAvCNRair4uv2pOwWTzMNtutDdhfXlp9QO";
var subdivisionsFusionTableID = "158fKZygrAlgGKaYDkT4alniT5ZEeTqPdwtFtEoc-";
var musrenbangFusionTableID = "1yHXZ3Z5yQXl8eEewPUgYSzOvd458RhW9pQ2smFIf";
var kel2010FusionTableID = "1oMln7GsJjbGJ9CQK41FP-aq3Xkz7fJPVZof2U5rY";
var projectFields = [
    {
        KEY: "KELURAHAN",
        NAME: "Kelurahan",
        TYPE: "TEXT"
    },
    {
        KEY: "YEAR",
        NAME: "Year",
        TYPE: "NUMBER"
    },
    {
        KEY: "VOTED",
        NAME: "Voted",
        TYPE: "TEXT"
    },
    {
        KEY: "CATEGORY",
        NAME: "Category",
        TYPE: "TEXT"
    },
    {
        KEY: "SUBCATEGORY",
        NAME: "Subcategory",
        TYPE: "TEXT"
    },
    {
        KEY: "UNIQUE_NUMBER",
        NAME: "Unique number",
        TYPE: "NUMBER"
    },
    {
        KEY: "LEVEL",
        NAME: "Level",
        TYPE: "TEXT"
    },
    {
        KEY: "PRIORITY",
        NAME: "Priority",
        TYPE: "NUMBER"
    },
    {
        KEY: "PROJECT_NAME",
        NAME: "Project name",
        TYPE: "TEXT"
    },
    {
        KEY: "LOCATION",
        NAME: "Location",
        TYPE: "TEXT"
    },
    {
        KEY: "AGENCY",
        NAME: "Agency",
        TYPE: "TEXT"
    },
    {
        KEY: "PLANNED_BUDGET",
        NAME: "Planned budget",
        TYPE: "NUMBER"
    },
    {
        KEY: "EXECUTED_BUDGET",
        NAME: "Executed budget",
        TYPE: "NUMBER"
    },
    {
        KEY: "IS_IT_EXECUTED",
        NAME: "Is it executed",
        TYPE: "TEXT"
    },
    {
        KEY: "NOTES",
        NAME: "Notes",
        TYPE: "TEXT"
    }
];
var dataTableIDs = {};
dataTableIDs["KEL2010"] = "1oMln7GsJjbGJ9CQK41FP-aq3Xkz7fJPVZof2U5rY";
dataTableIDs["KEL2012"] = "1igNdyGwVkk8143BqEGVFeHrEqCoDs_PMDTlBot_m";
dataTableIDs["RT2010"] = "1amOHPP434XnwMJVMJB5AtjD1iQvfyRboyPgLniPE";
dataTableIDs["RT2012"] = "17gTZPxPFgSxlHxPe7VSAQYBK-g4PsIa4XJsV5_rG";
var dataFields = {};
dataFields["KEL2010"] = [
    {
        KEY: "KELURAHAN",
        NAME: "Kelurahan",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "PUBLIC_WELLS_PERCENTAGE",
        NAME: "Public wells percentage",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WELLS_PERCENTAGE",
        NAME: "Percentage of private wells",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PDAM_PERCENTAGE",
        NAME: "Percentage of PDAM",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WC_PERCENTAGE",
        NAME: "Percentage of households with private WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "WC_PUBLIC_PERCENTAGE",
        NAME: "Percentage of households using public WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "POVERTY_PERCENTAGE",
        NAME: " % of households in Poverty",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Poverty"
    },
    {
        KEY: "NO_SCHOOL_PERCENTAGE",
        NAME: "Percentage of children not in school",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Vulnerability"
    },
    {
        KEY: "LAND_TENURE_PERCENTAGE",
        NAME: "Land tenure percentage",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Housing"
    }
];
dataFields["KEL2012"] = [
    {
        KEY: "KELURAHAN",
        NAME: "Kelurahan",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "PDAM_PERCENTAGE",
        NAME: "Percentage of PDAM",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WC_PERCENTAGE",
        NAME: "Percentage of households with private WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "WC_PUBLIC_PERCENTAGE",
        NAME: "Percentage of households with public WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "POVERTY_PERCENTAGE",
        NAME: " % of households in Poverty",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Poverty"
    },
    {
        KEY: "NO_SCHOOL_PERCENTAGE",
        NAME: "Percentage of children not in school",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Vulnerability"
    },
    {
        KEY: "HH_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of household",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "POPULATION_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of population",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "CHILDREN_7_18_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of ages 7 - 18 years",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "NO_SCHOOL_7_18_PERCENTAGE_CHANGE_2010_2012",
        NAME: " % change of 7-18 years old not in school",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "PRIV_WC_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of HH with private WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "PUB_WC_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of HH with public WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "PDAM_PERCENTAGE_CHANGE_2010_2012",
        NAME: "% change of HH with access to PDAM",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    },
    {
        KEY: "POVERTY_PERCENTAGE_CHANGE_2010_2012",
        NAME: "Percentage of children not in school",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Change from 2010 data"
    }
];
dataFields["RT2010"] = [
    {
        KEY: "KELURAHAN",
        NAME: "Kelurahan",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "RT",
        NAME: "RT",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "RW",
        NAME: "RW",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "PDAM_PERCENTAGE",
        NAME: "Percentage of PDAM",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PUBLIC_WELL_PERCENTAGE",
        NAME: "Public wells percentage",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WELL_PERCENTAGE",
        NAME: "Percentage of private wells",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WC_PERCENTAGE",
        NAME: "Percentage of households with private WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "PUBLIC_WC_PERCENTAGE",
        NAME: "Percentage of households using public WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "POVERTY_PERCENTAGE",
        NAME: " % of households in Poverty",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Poverty"
    },
    {
        KEY: "CHILDREN_PERCENTAGE",
        NAME: "Percentage of 7 - 18 years old children",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Vulnerability"
    },
    {
        KEY: "NO_SCHOOL_PERCENTAGE",
        NAME: "Percentage of 7 - 18 years old children not in school",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Vulnerability"
    },
    {
        KEY: "LAND_TENURE_PERCENTAGE",
        NAME: "Land tenure percentage",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Housing"
    }
];
dataFields["RT2012"] = [
    {
        KEY: "KELURAHAN",
        NAME: "Kelurahan",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "RT",
        NAME: "RT",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "RW",
        NAME: "RW",
        TYPE: "text",
        KIND: "TEXT",
        CLASS_NAME: "KEY"
    },
    {
        KEY: "PDAM_PERCENTAGE",
        NAME: "Percentage of PDAM",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Water"
    },
    {
        KEY: "PRIVATE_WC_PERCENTAGE",
        NAME: "Percentage of households with private WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "PUBLIC_WC_PERCENTAGE",
        NAME: "Percentage of households using public WC",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Sanitation"
    },
    {
        KEY: "POVERTY_PERCENTAGE",
        NAME: "% of households in Poverty",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Poverty"
    },
    {
        KEY: "DISABLED_PEOPLE_PERCENTAGE",
        NAME: "Percentage of disabled people",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Vulnerability"
    },
    {
        KEY: "POP_DENSITY",
        NAME: "Population density (ppl/hectare)",
        TYPE: "TOTAL",
        KIND: "FLOAT",
        CLASS_NAME: "Housing"
    },
    {
        KEY: "UNHABITABLE_HOUSES_PERCENTAGE",
        NAME: "% of uninhabitable Houses",
        TYPE: "PERCENTAGE",
        KIND: "FLOAT",
        CLASS_NAME: "Housing"
    }
];
var drawDelay = 50;
if(projectIDfromURL != null){
    drawDelay = 1;
}
var projectDatabase = TAFFY();
var aggregateDataDatabase = {};
aggregateDataDatabase["KEL2010"] = {};
aggregateDataDatabase["KEL2012"] = {};
aggregateDataDatabase["RT2010"] = {};
aggregateDataDatabase["RT2012"] = {};
var aggregateTaffyDatabase = {};
aggregateTaffyDatabase["KEL2010"] = TAFFY();
aggregateTaffyDatabase["KEL2012"] = TAFFY();
aggregateTaffyDatabase["RT2010"] = TAFFY();
aggregateTaffyDatabase["RT2012"] = TAFFY();
//var colors = ['#BEC1C4', '#AB8A71', '#F0BC6E', '#F7DE8C']; // More neutral, similar to Kota Kita site
var colors = ['#BEC1C4']; // More neutral, similar to Kota Kita site
var percentageColor = "#8A0707";
var noDataColor = ["#000000"];
var colorKeys = [
    "#fc8d59",
  "#fee090",
  "#ffffbf",
  "#e0f3f8",
  "#91bfdb",
];
var originalKelurahanShapeOptions = {
    color: "#000000",
    opacity: 1,
    weight: 0.5,
    fillColor: "#FFFFFF",
    fillOpacity: 0,
};
var originalDataLayerShapeOptions = {
    color: "#000000",
    opacity: 0,
    weight: 0.2,
    fillColor: percentageColor,
    fillOpacity: 1,
};
var onHoverKelurahanShapeOptions = {
    color: "#000000",
    opacity: 1,
    weight: 2,
    fillColor: "#8A0707",
    fillOpacity: 0,
};
var activeKelurahanShapeOptions = {
    color: "#FFFF00",
    opacity: 1,
    weight: 4,
    fillColor: "#FFFFFF",
    fillOpacity: 0,
};
var originalLocationShapeOptions = {
    color: "#000000",
    opacity: 1,
    weight: 1,
    fillColor: "#BEC1C4",
    fillOpacity: 0.5,
};
var originalKelurahanOpacity = 0.7;
var onHoverKelurahanOpacity = 0.3;
var activeKelurahanOpacity = 0.1;
var map;
var kelurahans = [];
var subdivisions = {};
var kelurahanShapes = {};
var projectsArray = [];
var subcategoryIcons;
var mapSC;
var kelurahanLayer;
var projectLocationLayer;
var aggregateDataLayer;
var layer2010sel;
var layer2012sel;
var layerRTsel;
var layerKELsel;
var projectCards = {};
document.addEventListener("DOMContentLoaded", initialize);
var subcategories = {
    JA: {
        name: "Jalan",
        color: "#4C4320"
    },
    SA: {
        name: "Sanitasi",
        color: "#573649"
    },
    SM: {
        name: "Mannakemen sampah",
        color: "#601D00"
    },
    LS: {
        name: "Listrik",
        color: "#E7922A"
    },
    AR: {
        name: "Air Bersih",
        color: "#003951"
    },
    IC: {
        name: "Informasi dan komunicasi",
        color: "#B65B46"
    },
    DR: {
        name: "Drainase",
        color: "#7FA6B2"
    },
    SR: {
        name: "Saran lainnyn",
        color: "#C0B58F"
    }
};

function initialize() {
    subcategoryIcons = new getSubcategoryIcons();
    projectStateIcons = new getProjectStateIcons();
    mapSC = new mapStateController();
    getKelurahans();
    getProjects();
    getAllData();
    getSubdivisions();
    initializeLayerToolbar();
}

function clearDataLayerView() {
    map.removeLayer(aggregateDataLayer);
    document.getElementById("aggregate_data_selector").selectedIndex = 0;
    document.getElementById("key_bar_container").innerHTML = "";
}

function updateLayerOptions() {
    if (layer2010sel.checked) {
        this.year = "2010";
    } else {
        this.year = "2012";
    }
    if (layerRTsel.checked) {
        this.locScope = "RT";
    } else {
        this.locScope = "KEL";
    }
    var scope = this.locScope + this.year;
    var aggregateDataLayerSelector = document.getElementById("aggregate_data_selector");
    for (var i = aggregateDataLayerSelector.options.length - 1; i >= 0; i--) {
        aggregateDataLayerSelector.options[i] = null;
    };
    var defOpt = document.createElement("option");
    defOpt.disabled = true;
    defOpt.selected = true;
    defOpt.innerHTML = "Select a data layer";
    defOpt.value = "";
    aggregateDataLayerSelector.appendChild(defOpt);
    for (var i = 0; i < dataFields[scope].length; i++) {
        if (!(dataFields[scope][i]["CLASS_NAME"] == "KEY")) {
            if ((i == 0) && (dataFields[scope][i]["CLASS_NAME"] != "KEY")) {
                var opDiv = document.createElement("option");
                opDiv.innerHTML = dataFields[scope][i]["CLASS_NAME"];
                opDiv.disabled = true;
                opDiv.className = "data_divider";
                aggregate_data_selector.appendChild(opDiv);
            } else if ((i > 0) && ((dataFields[scope][i]["CLASS_NAME"] != "KEY") && (dataFields[scope][i]["CLASS_NAME"] != dataFields[scope][i - 1]["CLASS_NAME"]))) {
                var opDiv = document.createElement("option");
                opDiv.innerHTML = dataFields[scope][i]["CLASS_NAME"];
                opDiv.disabled = true;
                opDiv.className = "data_divider";
                aggregate_data_selector.appendChild(opDiv);
            }
            var option = document.createElement("option");
            option.value = dataFields[scope][i]["KEY"];
            option.type = dataFields[scope][i]["TYPE"];
            option.name = dataFields[scope][i]["NAME"];
            option.innerHTML = dataFields[scope][i]["NAME"];
            aggregate_data_selector.appendChild(option);
        }
    }
    that = this;
    aggregateDataLayerSelector.onchange = function() {
        var aggregateDataLayerSelector = document.getElementById("aggregate_data_selector");
        var selectedLayer = aggregateDataLayerSelector.options[aggregateDataLayerSelector.selectedIndex].value;
        var selectedType = aggregateDataLayerSelector.options[aggregateDataLayerSelector.selectedIndex].type;
        var selectedLabel = aggregateDataLayerSelector.options[aggregateDataLayerSelector.selectedIndex].name;
        showDataLayer(selectedLayer, selectedType, selectedLabel, that.year, that.locScope);
    }
}

function initializeLayerToolbar() {
    var layerButton = document.getElementById("layers_button");
    layerButton.onclick = function() {
        toggleLayerToolbar();
        $("#data_layer_year_selector").buttonset();
        $("#data_layer_scope").buttonset();
    }
    layer2010sel = document.getElementById("data_2010");
    layer2010sel.onclick = function() {
        clearDataLayerView();
        updateLayerOptions();
    }
    layer2012sel = document.getElementById("data_2012");
    layer2012sel.onclick = function() {
        clearDataLayerView();
        updateLayerOptions();
    }
    layerRTsel = document.getElementById("data_RT");
    layerRTsel.onclick = function() {
        clearDataLayerView();
        updateLayerOptions();
    }
    layerKELsel = document.getElementById("data_KEL");
    layerKELsel.onclick = function() {
        clearDataLayerView();
        updateLayerOptions();
    }
    clearLayerButton = document.getElementById("clear_data_layer_button");
    clearLayerButton.onclick = function() {
        clearDataLayerView();
    }
    updateLayerOptions();
}

function toggleLayerToolbar() {
    var layerTools = document.getElementById("layer_tools");
    var displayStyle = window.getComputedStyle(layerTools, null).getPropertyValue("display");
    if (displayStyle === "none") {
        layerTools.style.display = "block";
    } else {
        layerTools.style.display = "none";
    }
}

function getKelurahans() {
    var query = 'SELECT KELURAHAN, geometry, geometry_pos FROM ' + kelurahansFusionTableID;
    getFusionTablesData(query, "parseKelurahans");
}

function getSubdivisions() {
    var query = 'SELECT KELURAHAN, geometry, geometry_pos, RW, RT FROM ' + subdivisionsFusionTableID;
    getFusionTablesData(query, "parseSubdivisions");
}

function getData(scope) {
    var columnNames = getWhatToGet(dataFields[scope]);
    var query = 'SELECT ' + columnNames + '  FROM ' + dataTableIDs[scope];
    getFusionTablesData(query, "parseData" + scope);
}

function getAllData() {
    for (var scope in dataFields) {
        if (dataFields.hasOwnProperty(scope)) {
            getData(scope);
        }
    }
}

function mapStateController() {
    var mainState = {
        lat: -7.566667,
        lng: 110.866667,
        zoom: 13
    }
    L.mapbox.accessToken = 'pk.eyJ1Ijoic3RlcGhlbmtlbm5lZHkiLCJhIjoidjE2aTktdyJ9.gpYsw_JQAEuHlK5rAq0rsw';
    map = L.mapbox.map("map", 'stephenkennedy.ad4e43ac').setView([mainState.lat, mainState.lng], mainState.zoom);
    aggregateDataLayer = L.mapbox.featureLayer().addTo(map);
    kelurahanLayer = L.mapbox.featureLayer().addTo(map);
    projectLocationLayer = L.mapbox.featureLayer().addTo(map);
    var state;
    var possibleStates = {
        Default: 0,
        Main: 1,
        Kelurahan: 2,
    };
    state = possibleStates.Default;
    var yearCheckboxes = [];
    var selectedKelurahan = null;
    var selectedProjectID = null;
    var scFilters = new subcategoryFilters(this);
    this.filters = document.getElementById("filter_conditions");
    this.GPFilter = new ghostProjectFilters(this);
    this.EPFilter = new executedProjectFilters(this);
    this.PBBar = new budgetBar("PLANNED_BUDGET", getNameFromKey(projectFields, "PLANNED_BUDGET", "NAME"), document.getElementById("planned_budget_info"));
    this.EBBar = new budgetBar("EXECUTED_BUDGET", getNameFromKey(projectFields, "EXECUTED_BUDGET", "NAME"), document.getElementById("executed_budget_info"));
    this.kelSelect = null;
    this.isKelurahanParsed = false;
    this.isProjectParsed = false;
    this.isKel2010DataParsed = false;
    this.isKel2012DataParsed = false;
    this.isRT2010DataParsed = false;
    this.isRT2012DataParsed = false;
    this.originalKelurahanTitle = document.getElementById("kelurahan_name").innerHTML;
    this.showMain = function() {}
    this.selectKelurahan = function(kelurahanToSelect) {
        document.getElementById("kelurahan_name").innerHTML = kelurahanToSelect.name;
        state = possibleStates.Kelurahan;
        map.fitBounds(kelurahanToSelect.kelurahanShape.getBounds());
        kelurahanToSelect.kelurahanShape.bringToFront();
        if (selectedKelurahan != null) {
            selectedKelurahan.setDeselected();
        }
        selectedKelurahan = kelurahanToSelect;
        //selectedKelurahanIndex = kelurahanIndex;
        kelurahanToSelect.setSelected();
        this.addFiltersUI();
        $("#was_voted_filter").buttonset();
        $("#is_it_executed_filter").buttonset();
        emptyProjectCards();
        this.filteringChanged();
        this.kelSelect.selectKelurahan(kelurahanToSelect.name);
    }
    this.deselectKelurahans = function() {
        selectedKelurahan.setDeselected();
        selectedKelurahan = null;
        state = possibleStates.Main;
        this.filteringChanged();
    }
    this.selectKelurahanByName = function(kelurahanName) {
        this.kelurahanName = kelurahanName;
        this.selectKelurahan(this.getKelurahanByName(this.kelurahanName));
    }
    this.getKelurahanByName = function(kelurahanName) {
        this.kelurahanName = kelurahanName;
        this.kelurahan = null;
        for (var i = kelurahans.length - 1; i >= 0; i--) {
            if (kelurahans[i].name == kelurahanName) {
                this.kelurahan = kelurahans[i];
                break;
            }
        };
        return this.kelurahan;
    }
    this.onKelurahanMouseOver = function(kelurahan) {
        if (kelurahan != selectedKelurahan) {
            document.getElementById("kelurahan_name").innerHTML = kelurahan.name;
            kelurahan.setStyle(kelurahan.onMouseOverStyle);
        }
    }
    this.onKelurahanClick = function(kelurahan) {
        this.selectKelurahan(kelurahan);
    }
    this.onKelurahanMouseOut = function(kelurahan) {
        if (selectedKelurahan != null) {
            document.getElementById("kelurahan_name").innerHTML = selectedKelurahan.name;
        } else {
            document.getElementById("kelurahan_name").innerHTML = this.originalKelurahanTitle;
        }
        if (!kelurahan.selected) {
            kelurahan.setStyle(kelurahan.normalStyle);
        } else {
            kelurahan.setStyle(kelurahan.selectedStyle);
        }
    }
    this.onProjectsParsed = function() {
        this.initializeYearSelector();
        this.isProjectParsed = true;
        if (this.isKelurahanParsed) {
            state = possibleStates.Main;
            this.filteringChanged();
        }
    }
    this.onKelurahansParsed = function() {
        drawKelurahans(kelurahans);
        this.addKelurahanSelector();
        this.isKelurahanParsed = true;
        if (this.isProjectParsed) {
        	state = possibleStates.Main;
            this.filteringChanged();
        }
    }
    this.onKelurahansDrawn = function(){
        if(projectIDfromURL != null){
            this.selectKelurahanByName(getKelurahanNameByProjectID(projectIDfromURL));
            projectCards[projectIDfromURL].select();
        }
    }
    this.initializeYearSelector = function() {
        var minYear = projectDatabase().min("YEAR");
        var maxYear = projectDatabase().max("YEAR");
        var yearSelector = document.getElementById("year_selector");
        yearCheckboxes = [];
        for (var i = minYear; i <= maxYear; i++) {
            var input = document.createElement("input");
            input.type = "checkbox";
            input.id = "year_" + i;
            input.year = i;
            var label = document.createElement("label");
            label.htmlFor = "year_" + i;
            label.textContent = i;
            var that = this;
            input.onchange = function() {
                that.filteringChanged();
            }
            yearSelector.appendChild(input);
            yearSelector.appendChild(label);
            yearCheckboxes.push(input);
        }
        document.getElementById("year_" + maxYear).checked = true; // Selecting the last year by default.
        $("#year_selector").buttonset();
    }
    this.filteringChanged = function() {
        switch (state) {
            case possibleStates.Default:
                break;
            case possibleStates.Main:
                this.goToMainView();
                break;
            case possibleStates.Kelurahan:
                var years = [];
                this.emptyProjectLocationLayer();
                for (var i = 0; i < yearCheckboxes.length; i++) {
                    if (yearCheckboxes[i].checked) {
                        years.push(yearCheckboxes[i].year);
                    }
                }
                var scSelected = scFilters.getSelected();
                var gpFilterSelected = this.GPFilter.getActiveFilter();
                var exFilterSelected = this.EPFilter.getActiveFilter();
                emptyProjectCards();
                var cardData = fillProjectCards(selectedKelurahan.name, years, scSelected, gpFilterSelected, exFilterSelected, this);
                this.PBBar.updateBar(TAFFY(cardData({
                    "VOTED": "VO"
                }).get()));
                this.EBBar.updateBar(TAFFY(cardData({
                    "IS_IT_EXECUTED": "YES"
                }).get()));
                break;
        }
    }
    this.goToMainView = function() {
        map.setView([mainState.lat, mainState.lng], mainState.zoom);
        this.state = possibleStates.Main;
        emptyProjectCards();
        var projectsToSummarize = TAFFY();
        for (var i = 0; i < yearCheckboxes.length; i++) {
            if (yearCheckboxes[i].checked) {
                projectsToSummarize.insert(projectDatabase({
                    YEAR: ("" + yearCheckboxes[i].year)
                }).get())
            }
        }
        fillKelurahanSummaries(projectsToSummarize);
        var projectsToSummarize = TAFFY();
        for (var i = 0; i < yearCheckboxes.length; i++) {
            if (yearCheckboxes[i].checked) {
                projectsToSummarize.insert(projectDatabase({
                    YEAR: ("" + yearCheckboxes[i].year)
                }).get())
            }
        }
        this.PBBar.updateBar(TAFFY(projectsToSummarize({
            "VOTED": "VO"
        }).get()));
        this.EBBar.updateBar(TAFFY(projectsToSummarize({
            "IS_IT_EXECUTED": "YES"
        }).get()));
    }
    this.setSelectedProject = function(projectID) {
        if (selectedProjectID != null) {
            this.emptyProjectLocationLayer();
            clearURL();
        }
        selectedProjectID = projectID;
        var project = projectDatabase({
            ID: selectedProjectID
        }).get()[0];
        var location = project.LOCATION.split(',');
        var kelurahan = project.KELURAHAN;
        var subcategory = subcategories[project.SUBCATEGORY];
        this.showLocationShapes(kelurahan, subcategory, location);
        console.log(JSON.stringify(project));
        updateQueryStringParameter(window.location.pathname.substring(1), "projectid", project.ID);
    }
    this.emptyProjectLocationLayer = function() {
        map.removeLayer(projectLocationLayer);
        projectLocationLayer = L.mapbox.featureLayer().addTo(map);
        selectedProjectID = null;
    }
    this.showLocationShapes = function(kelurahan, subcategory, locations) {
        var shapeOptions = originalLocationShapeOptions;
        shapeOptions.fillColor = subcategory.color;
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].indexOf("-") != -1) {
                var tempLoc = locations[i].split("-");
                var geometry = subdivisions[kelurahan][tempLoc[0].substring(2, tempLoc[0].length)][tempLoc[1].substring(2, tempLoc[1].length)].GEOMETRIES;
                var shape = L.polygon(geometry, shapeOptions);
                shape.addTo(projectLocationLayer);
            } else if (locations[i].indexOf("RW") != -1) {
                var locationsToShow = subdivisions[kelurahan][locations[i].substring(2, locations[i].length)];
                for (var key in locationsToShow) {
                    var geometry = locationsToShow[key].GEOMETRIES;
                    var shape = L.polygon(geometry, shapeOptions);
                    shape.addTo(projectLocationLayer);
                }
            } else if (locations[i] == "KELURAHAN") {
                var kelurahanLocations = subdivisions[kelurahan];
                for (var key in kelurahanLocations) {
                    var rwLocations = kelurahanLocations[key];
                    for (var key in rwLocations) {
                        var rtLocations = rwLocations[key];
                        if (rtLocations.hasOwnProperty("GEOMETRIES")) {
                            var geometry = rtLocations.GEOMETRIES;
                            var shape = L.polygon(geometry, shapeOptions);
                            shape.addTo(projectLocationLayer);
                        }
                    }
                }
            }
        }
        console.log(JSON.stringify(projectLocationLayer.getBounds()))
        var bounds = projectLocationLayer.getBounds();
        bounds._southWest.lat = bounds._southWest.lat - 0.002;
        bounds._southWest.lng = bounds._southWest.lng - 0.002;
        bounds._northEast.lat = bounds._northEast.lat + 0.002;
        bounds._northEast.lng = bounds._northEast.lng + 0.002;
        map.fitBounds(bounds);
    }
    this.addShape = function(locations, layer, style) {
        var shapeOptions = style;
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].indexOf("-") != -1) {
                var tempLoc = locations[i].split("-");
                var geometry = subdivisions[kelurahan][tempLoc[0].substring(2, tempLoc[0].length)][tempLoc[1].substring(2, tempLoc[1].length)].GEOMETRIES;
                var shape = L.polygon(geometry, shapeOptions);
                shape.addTo(projectLocationLayer);
            } else if (locations[i].indexOf("RW") != -1) {
                var locationsToShow = subdivisions[kelurahan][locations[i].substring(2, locations[i].length)];
                for (var key in locationsToShow) {
                    var geometry = locationsToShow[key].GEOMETRIES;
                    var shape = L.polygon(geometry, shapeOptions);
                    shape.addTo(projectLocationLayer);
                }
            } else if (locations[i] == "KELURAHAN") {
                var kelurahanLocations = subdivisions[kelurahan];
                for (var key in kelurahanLocations) {
                    var rwLocations = kelurahanLocations[key];
                    for (var key in rwLocations) {
                        var rtLocations = rwLocations[key];
                        if (rtLocations.hasOwnProperty("GEOMETRIES")) {
                            var geometry = rtLocations.GEOMETRIES;
                            var shape = L.polygon(geometry, shapeOptions);
                            shape.addTo(projectLocationLayer);
                        }
                    }
                }
            }
        }
    }
    this.addKelurahanSelector = function() {
        this.kelSelect = new kelurahanSelector(this);
        this.kelSelect.initialize();
    }
    this.addFiltersUI = function() {
        switch (state) {
            case possibleStates.Default:
                break;
            case possibleStates.Main:
                break;
            case possibleStates.Kelurahan:
                this.filters.style.display = "inherit";
                scFilters.show();
                break;
        }
    }
}

function kelurahanSelector(parent) {
    this.parent = parent;
    this.kelSelector = document.getElementById("kelurahan_selector");
    this.kelSelector.multiple = false;
    this.kelOptions = [];
    var that = this;
    this.kelSelector.onchange = function() {
        var kelName = this.options[this.selectedIndex].value
        if (kelName != "") {
            that.parent.selectKelurahanByName(kelName);
        } else {
            that.parent.deselectKelurahans();
        }
    }
    this.initialize = function() {
        //Adding blank text option
        var option = document.createElement("option");
        option.innerHTML = "";
        option.value = "";
        this.kelSelector.appendChild(option);
        this.kelOptions.push(option);
        for (var i = 0; i < kelurahans.length; i++) {
            var option = document.createElement("option");
            option.innerHTML = kelurahans[i].name;
            option.id = "kel_" + kelurahans[i].name;
            option.value = kelurahans[i].name;
            this.kelSelector.appendChild(option);
            this.kelOptions.push(option);
        };
        $(this.kelSelector).attr('data-placeholder', "Select a kelurahan").chosen({
            allow_single_deselect: true
        });
    }
    this.selectKelurahan = function(kelurahanName) {
        if (this.kelSelector.options[this.kelSelector.selectedIndex].value != kelurahanName) {
            for (var i = this.kelOptions.length - 1; i >= 0; i--) {
                if (this.kelOptions[i].value == kelurahanName) {
                    this.kelSelector.selectedIndex = i;
                    $(this.kelSelector).trigger("chosen:updated");
                    break;
                }
            };
        }
    }
}

function ghostProjectFilters(parent) {
    this.parent = parent;
    var that = this;
    this.callback = function() {
        if (this.checked) {
            if (this == that.nv) {
                that.vo.checked = false;
                that.all.checked = false;
                $(that.vo).button("refresh");
                $(that.all).button("refresh");
            } else if (this == that.vo) {
                that.nv.checked = false;
                that.all.checked = false;
                $(that.nv).button("refresh");
                $(that.all).button("refresh");
            } else if (this == that.all) {
                that.vo.checked = false;
                that.nv.checked = false;
                $(that.vo).button("refresh");
                $(that.nv).button("refresh");
            }
        } else {
            this.checked = true;
            $(this).button("refresh");
        }
        that.parent.filteringChanged();
    }
    this.all = document.getElementById("was_voted_filter_ALL");
    this.nv = document.getElementById("was_voted_filter_NV");
    this.vo = document.getElementById("was_voted_filter_VO");
    this.all.checked = true;
    this.nv.checked = false;
    this.vo.checked = false;
    this.all.onchange = this.callback;
    this.nv.onchange = this.callback;
    this.vo.onchange = this.callback;
    this.getActiveFilter = function() {
        var filterArray = [];
        if (this.nv.checked) {
            filterArray.push("NV");
        }
        if (this.vo.checked) {
            filterArray.push("VO");
        }
        if (this.all.checked) {
            filterArray.push("NV");
            filterArray.push("VO");
        }
        return filterArray;
    }
}

function executedProjectFilters(parent) {
    this.parent = parent;
    var that = this;
    this.callback = function() {
        if (this.checked) {
            if (this == that.no) {
                that.yes.checked = false;
                that.all.checked = false;
                $(that.yes).button("refresh");
                $(that.all).button("refresh");
            } else if (this == that.yes) {
                that.no.checked = false;
                that.all.checked = false;
                $(that.no).button("refresh");
                $(that.all).button("refresh");
            } else if (this == that.all) {
                that.no.checked = false;
                that.yes.checked = false;
                $(that.no).button("refresh");
                $(that.yes).button("refresh");
            }
        } else {
            this.checked = true;
            $(this).button("refresh");
        }
        that.parent.filteringChanged();
    }
    this.all = document.getElementById("is_it_executed_filter_ALL");
    this.yes = document.getElementById("is_it_executed_filter_YES");
    this.no = document.getElementById("is_it_executed_filter_NO");
    this.all.checked = true;
    this.yes.checked = false;
    this.no.checked = false;
    this.all.onchange = this.callback;
    this.no.onchange = this.callback;
    this.yes.onchange = this.callback;
    this.getActiveFilter = function() {
        var filterArray = [];
        if (this.no.checked) {
            filterArray.push("NO")
        }
        if (this.yes.checked) {
            filterArray.push("YES")
        }
        if (this.all.checked) {
            filterArray.push("YES");
            filterArray.push("NO");
        }
        return filterArray;
    }
}

function subcategoryFilters(parent) {
    this.parent = parent;
    this.scFilters = document.getElementById("subcategory_filter");
    this.scOptions = [];
    this.isActive = false;
    this.all = document.createElement("input");
    this.all.type = "radio";
    this.all.name = "subcategories";
    this.all.checked = true;
    this.all.value = "sub_all";
    this.all.id = "sub_all";
    this.all.className = "sub_filt_select";
    var that = this;
    this.all.onclick = function() {
        that.parent.filteringChanged();
    }
    this.allLabel = document.createElement("label");
    this.allLabel.htmlFor = "sub_all";
    this.allLabel.className = "sub_filt_label";
    this.allLabel.name = "subcategories";
    this.allLabel.id = "sub_label_all";
    this.scFilters.appendChild(this.all);
    this.scFilters.appendChild(this.allLabel);
    this.scOptions = [];
    var i = 0;
    for (var key in subcategories) {
        this.scOptions[i] = document.createElement("input");
        this.scOptions[i].type = "radio";
        this.scOptions[i].name = "subcategories";
        this.scOptions[i].value = key;
        this.scOptions[i].id = "sub_" + key;
        this.scOptions[i].className = "sub_filt_select";
        var label = document.createElement("label");
        label.htmlFor = "sub_" + key;
        label.title = "Show projects for " + subcategories[key].name;
        label.className = "sub_filt_label"
        label.id = "sub_label_" + key;
        var that = this;
        this.scOptions[i].onclick = function() {
            that.parent.filteringChanged();
        }
        this.scFilters.appendChild(this.scOptions[i]);
        this.scFilters.appendChild(label);
        i++;
    }
    this.show = function() {
        if (this.isActive == false) {
            this.scFilters.style.display = "inherit";
            this.isActive = true;
        }
    }
    this.getSelected = function() {
        var selectedSubcategories = [];
        if (this.all.checked) {
            for (var key in subcategories) {
                selectedSubcategories.push(key);
            }
        } else {
            for (var i = 0; i < this.scOptions.length; i++) {
                if (this.scOptions[i].checked) {
                    selectedSubcategories.push(this.scOptions[i].value);
                }
            }
        }
        return selectedSubcategories;
    }
}

function budgetBar(key_name, name, div) {
    this.div = div;
    this.key_name = key_name;
    this.name = name;
    this.div.innerHTML = '<p><span class="total_projects">0</span> projects</p><p>' + this.name + ': <span class="total_budget">0.00</span> IDR</p><div class="budget_bar" title="The size of each color bar is proportional to the budget percentage spent on that category."><div class="bar_element JA" title="Jalan"></div><div class="bar_element SA" title="Sanitasi"></div><div class="bar_element SM" title="Mannakemen sampah"></div><div class="bar_element LS" title="Listrik"></div><div class="bar_element AR" title="Air Bersih"></div><div class="bar_element IC" title="Informasi dan komunicasi"></div><div class="bar_element DR" title="Drainase"></div><div class="bar_element SR" title="Saran lainnyn"></div></div>'
    this.budgetView = this.div.getElementsByClassName("total_budget")[0];
    this.budgetBar = this.div.getElementsByClassName("budget_bar")[0];
    this.projectNumber = this.div.getElementsByClassName("total_projects")[0];
    this.budgetBars = [];
    this.percentages = [];
    this.projectCounts = [];
    this.totalBudget = 0;
    this.budgets = [];
    for (var key in subcategories) {
        this.budgetBars.push(this.div.getElementsByClassName(key)[0]);
    }
    this.updateBar = function(projects) {
        this.projects = projects;
        this.totalBudget = projects().sum(this.key_name);
        this.budgetView.innerHTML = " " + numberWithCommas(this.totalBudget);
        this.projectNumber.innerHTML = this.projects().count();
        this.budgets = [];
        this.percentages = [];
        this.projectCounts = [];
        this.budgetBar.innerHTML = "";
        var i = 0;
        for (var key in subcategories) {
            if (this.totalBudget == 0) {
                this.budgets.push(0);
                this.percentages.push(100 * (1 / Object.keys(subcategories).length));
                this.projectCounts.push(0);
            } else {
                this.budgets.push(this.projects({
                    SUBCATEGORY: key
                }).sum(this.key_name));
                this.percentages.push((100 * (this.budgets[i] / this.totalBudget)).toFixed(1));
                this.projectCounts.push(this.projects({
                    SUBCATEGORY: key
                }).count());
            }
            this.budgetBars[i].style.width = Math.floor(this.percentages[i]) + "%";
            this.budgetBars[i].percentage = this.percentages[i];
            this.budgetBars[i].title = subcategories[key].name + ": " + this.projectCounts[i] + " projects, " + numberWithCommas(this.budgets[i]) + " IDR, " + this.percentages[i] + " %";
            i++;
        }
        this.percentages.sort(sortNumber);
        for (var i = this.percentages.length - 1; i >= 0; i--) {
            for (var j = 0; j < this.budgetBars.length; j++) {
                if (this.budgetBars[j].percentage == this.percentages[i]) {
                    this.budgetBar.appendChild(this.budgetBars[j]);
                }
            };
        };
    }
}

function parseKelurahans(data) {
    var rows = data['rows'];
    for (var i in rows) {
        var newCoordinates = [];
        var kelurahan_name = rows[i][0];
        var center = constructNewPointCoordinates(rows[i][2]['geometry']);
        var geometries = rows[i][1]['geometries'];
        if (geometries) {
            for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));
            }
        } else {
            newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
        }
        kelurahans[i] = new kelurahan(kelurahan_name, newCoordinates, center, i);
        shape = new L.polygon(newCoordinates, originalDataLayerShapeOptions);
        kelurahanShapes[kelurahan_name] = {
            SHAPE: shape
        }
    }
    kelurahans.sort(function(a, b) {
        if (a.getName() < b.getName()) return -1;
        if (a.getName() > b.getName()) return 1;
        return 0;
    })
    mapSC.onKelurahansParsed();
}

function parseSubdivisions(data) {
    var rows = data['rows'];
    subdivisions = {};
    for (var i in rows) {
        var newCoordinates = [];
        var kelurahan_name = rows[i][0];
        var center = constructNewPointCoordinates(rows[i][2]['geometry']);
        var geometries = rows[i][1]['geometries'];
        var rw_name = isNaN(parseFloat(rows[i][3])) ? 0 : parseFloat(rows[i][3]);
        var rt_name = isNaN(parseFloat(rows[i][4])) ? 0 : parseFloat(rows[i][4]);
        if (geometries) {
            for (var j in geometries) {
                newCoordinates.push(constructNewCoordinates(geometries[j]));
            }
        } else {
            newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
        }
        if (!subdivisions.hasOwnProperty(kelurahan_name)) {
            subdivisions[kelurahan_name] = {};
        }
        if (!subdivisions[kelurahan_name].hasOwnProperty(rw_name)) {
            subdivisions[kelurahan_name][rw_name] = {};
        }
        if (!subdivisions[kelurahan_name][rw_name].hasOwnProperty(rt_name)) {
            subdivisions[kelurahan_name][rw_name][rt_name] = {};
        }
        shape = new L.polygon(newCoordinates, originalDataLayerShapeOptions);
        subdivisions[kelurahan_name][rw_name][rt_name] = {
            CENTER: center,
            GEOMETRIES: newCoordinates,
            SHAPE: shape
        }
    }
}

function kelurahan(name, geometry, center, index) {
    this.name = name;
    this.selected = false;
    this.geometry = geometry;
    this.index = index;
    this.center = center;
    this.onMouseOverStyle = null;
    this.normalStyle = null;
    this.selectedStyle = null;
    var projects = null;
    var randomnumber = Math.floor(Math.random() * colors.length);
    this.kelurahanShape = new L.polygon(this.geometry, this.shapeOptions);
    this.getName = function() {
        return this.name;
    }
    this.drawKelurahan = function() {
        this.kelurahanShape.setStyle(this.normalStyle);
        this.kelurahanShape.addTo(kelurahanLayer);
    }
    this.initializeShape = function() {
        this.drawKelurahan();
        this.addListeners();
    }
    this.setStyle = function(style) {
        this.kelurahanShape.setStyle(style);
    }
    this.setOnMouseOverStyle = function(style) {
        this.onMouseOverStyle = style;
    }
    this.setNormalStyle = function(style) {
        this.normalStyle = style;
    }
    this.setSelectedStyle = function(style) {
        this.selectedStyle = style;
    }
    this.setStyles = function(ns, ss, mov) {
        this.normalStyle = JSON.parse(JSON.stringify(ns));
        this.selectedStyle = JSON.parse(JSON.stringify(ss));
        this.onMouseOverStyle = JSON.parse(JSON.stringify(mov));
        if (this.selected) {
            this.setStyle(this.selectedStyle);
        } else {
            this.setStyle(this.normalStyle);
        }
    }
    this.setSelected = function() {
        this.selected = true;
        this.setStyle(this.selectedStyle);
    }
    this.setDeselected = function() {
        this.selected = false;
        this.setStyle(this.normalStyle);
    }
    this.addListeners = function() {
        var that = this;
        this.kelurahanShape.on("click", function() {
            mapSC.onKelurahanClick(that);
        });
        this.kelurahanShape.on('mouseover', function() {
            mapSC.onKelurahanMouseOver(that);
        });
        this.kelurahanShape.on('mouseout', function() {
            mapSC.onKelurahanMouseOut(that);
        });
    }
}

function drawKelurahans(kelurahans) {
    this.kelurahans = kelurahans;
    shuffleArray = [];
    for (var i = 0; i < kelurahans.length; i++) {
        shuffleArray[i] = i;
    }
    shuffleArray = shuffle(shuffleArray);
    i = 0;
    var interval = setInterval(function() {
        if (i < kelurahans.length) {
            kelurahans[shuffleArray[i]].setStyles(originalKelurahanShapeOptions, activeKelurahanShapeOptions, onHoverKelurahanShapeOptions);
            kelurahans[shuffleArray[i]].initializeShape();
            i++;
        } else {
            mapSC.onKelurahansDrawn();
            clearInterval(interval);
        }
    }, drawDelay)
}

function getProjectStateIcons() {
    this.NV = new Image();
    this.NV.src = "src/img/png/status_NV.png";
    this.NV.title = "Not voted";
    this.VO = new Image();
    this.VO.src = "src/img/png/status_VO.png";
    this.VO.title = "Voted";
    this.YES = new Image();
    this.YES.src = "src/img/png/executed_YES.png";
    this.YES.title = "Executed";
    this.NO = new Image();
    this.NO.src = "src/img/png/executed_NO.png";
    this.NO.title = "Not executed";
    this.COMMENT = new Image();
    this.COMMENT.src = "src/img/png/comment.png";
    this.COMMENT.title = "Comment";
    this.getIcon = function(code) {
        return this[code].cloneNode();
    }
}

function getSubcategoryIcons() {
    this.icons = {};
    for (var name in subcategories) {
        var tempIcon = new Image();
        tempIcon.className = "icon-block";
        tempIcon.src = "src/img/png/solo_" + name + ".png";
        tempIcon.innerHTML = subcategories[name].name;
        this.icons[name] = tempIcon;
    }
    this.getIcon = function(code) {
        return this.icons[code].cloneNode();
    }
}
this.getNameFromKey = function(JSONelement, key_name, name_name) {
    this.JSONelement = JSONelement;
    this.key_name = key_name;
    this.name_name = name_name;
    this.name_value = null;
    for (var key in JSONelement) {
        if (JSONelement.hasOwnProperty(key)) {
            if (JSONelement[key].KEY == this.key_name) {
                this.name_value = JSONelement[key][this.name_name];
                break;
            }
        }
    }
    return this.name_value;
}

function constructNewCoordinates(polygon) {
    var newCoordinates = [];
    var coordinates = polygon['coordinates'][0];
    for (var i in coordinates) {
        newCoordinates.push(new L.LatLng(coordinates[i][1], coordinates[i][0]));
    }
    return newCoordinates;
}

function constructNewPointCoordinates(originalPoint) {
    var pointCoordinates;
    var pointFromSource = originalPoint["coordinates"];
    pointCoordinates = new L.LatLng(pointFromSource[1], pointFromSource[0]);
    return pointCoordinates;
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function sortNumber(a, b) {
        return a - b;
    }
    // Fisher–Yates shuffle

function shuffle(array) {
    var counter = array.length,
        temp, index;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function getIntervals(min, max, stepNum) {
    this.min = min;
    this.max = max;
    this.stepNum = stepNum;
    this.step = (this.max - this.min) / this.stepNum;
    this.intervals = [];
    this.intervals[0] = this.min;
    for (var i = 1; i < stepNum; i++) {
        this.intervals[i] = this.intervals[i - 1] + this.step;
    };
    this.intervals[stepNum] = this.max;
    return this.intervals;
}

function mapKey(min, max, intervals, colorK, label) {
        var color = percentageColor.substring(1);
        this.colorK = colorK;
        document.getElementById("key_bar_container").innerHTML = "";
        var data_value = [];
        var data_opacity = [];
        var data_color = [];
        var data_plabel = [];
        for (var i = 0; i < (intervals.length - 1); i++) {
            data_value.push(parseInt(100 / (intervals.length - 1)));
            data_opacity.push(1);
            data_color.push(this.colorK[i]);
            data_plabel.push(parseInt(intervals[i]));
        };
        data_plabel.push(Math.round(max));
        data_value.push(0);
        d3.select("body #key_bar_container").append("div").attr("id", "key-container").append("h3").text(label).style("margin-bottom", "0.5em");
        d3.select("body #key-container").append("div").attr("id", "label-container");
        d3.select("body #key-container").append("div").attr("id", "bar-container");
        d3.select("body #key-container").append("div").attr("id", "tick-container");
        d3.select("body #key-container").append("div").attr("id", "plabel-container");
        d3.select("body #bar-container").selectAll("div.bar").data(data_value).enter().append("div").attr("class", "bar").style("width", function(d) {
            return d + "%";
        });
        d3.select("body").selectAll("div.bar").data(data_color).style("background-color", function(d) {
            return d;
        });
        d3.select("body").selectAll("div.bar").data(data_opacity).style("opacity", function(d) {
            return d;
        });
        d3.select("body #tick-container").selectAll("div").data(data_value).enter().append("div").attr("class", "tick").style("padding-left", function(d) {
            return d + "%";
        });
        d3.select("body #plabel-container").selectAll("div.bar").data(data_value).enter().append("div").style("width", function(d) {
            return d + "%";
        }).data(data_plabel).append("h6").text(function(d) {
            return d;
        });
    }
    //***********************************************************************
    //***************Here goes the stuff for the  info***********************
    //***********************************************************************

function getProjects() {
    columnNames = getWhatToGet(projectFields);
    var query = 'SELECT ' + columnNames + '  FROM ' + musrenbangFusionTableID;
    getFusionTablesData(query, "parseProjects");
}

function parseData(data, fields, keyToSave) {
    var rows = data['rows'];
    this.fields = fields;
    // Filling a TaffyDB with the information of the projects.
    for (var j in rows) {
        var tempObj = {};
        tempObj["INDEX"] = j;
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].KIND == "TEXT") {
                tempObj[this.fields[i].KEY] = rows[j][i];
            } else if (this.fields[i].KIND == "INTEGER") {
                tempObj[this.fields[i].KEY] = isNaN(parseFloat(rows[j][i])) ? 0 : parseFloat(rows[j][i]);
            } else if (this.fields[i].TYPE == "PERCENTAGE") {
                tempObj[this.fields[i].KEY] = isNaN(parseFloat(rows[j][i])) ? 0 : parseFloat(rows[j][i]);
                tempObj[this.fields[i].KEY] = (tempObj[this.fields[i].KEY] > 100) ? 100 : tempObj[this.fields[i].KEY];
            } else {
                tempObj[this.fields[i].KEY] = isNaN(parseFloat(rows[j][i])) ? 0 : parseFloat(rows[j][i]);
            }
        }
        aggregateTaffyDatabase[keyToSave].insert(tempObj);
        if (keyToSave.indexOf("KEL") > -1) {
            aggregateDataDatabase[keyToSave][tempObj.KELURAHAN] = tempObj;
        } else {
            if (!aggregateDataDatabase[keyToSave][tempObj.KELURAHAN]) {
                aggregateDataDatabase[keyToSave][tempObj.KELURAHAN] = {};
            }
            if (!aggregateDataDatabase[keyToSave][tempObj.KELURAHAN][tempObj.RW]) {
                aggregateDataDatabase[keyToSave][tempObj.KELURAHAN][tempObj.RW] = {};
            }
            aggregateDataDatabase[keyToSave][tempObj.KELURAHAN][tempObj.RW][tempObj.RT] = tempObj;
        }
    }
}

function parseDataKEL2010(data) {
    this.data = data;
    parseData(this.data, dataFields["KEL2010"], "KEL2010");
}

function parseDataKEL2012(data) {
    this.data = data;
    parseData(this.data, dataFields["KEL2012"], "KEL2012");
}

function parseDataRT2010(data) {
    this.data = data;
    parseData(this.data, dataFields["RT2010"], "RT2010");
}

function parseDataRT2012(data) {
    this.data = data;
    parseData(this.data, dataFields["RT2012"], "RT2012");
}

function parseProjects(data) {
    var rows = data['rows'];
    // Filling a TaffyDB with the information of the projects.
    for (var j in rows) {
        var tempObj = {};
        tempObj["INDEX"] = j;
        for (var i = 0; i < projectFields.length; i++) {
            if ((projectFields[i].KEY == "PLANNED_BUDGET") || (projectFields[i].KEY == "EXECUTED_BUDGET")) {
                if (rows[j][i] == "") {
                    tempObj[projectFields[i].KEY] = 0;
                } else {
                    tempObj[projectFields[i].KEY] = isNaN(parseInt(rows[j][i])) ? 0 : parseInt(rows[j][i]);
                }
            } else {
                tempObj[projectFields[i].KEY] = rows[j][i];
            }
        }
        var tempKelName = tempObj.KELURAHAN.replace(/ /g, "_");
        tempObj["ID"] = tempKelName + "-" + tempObj.YEAR + "-" + tempObj.CATEGORY + "-" + tempObj.SUBCATEGORY + "-" + tempObj.VOTED + "-" + tempObj.UNIQUE_NUMBER;
        tempObj["SUBCATEGORY_TEXT"] = subcategories[tempObj.SUBCATEGORY].name;
        projectDatabase.insert(tempObj);
    }
    mapSC.onProjectsParsed();
}

function projectCard(project, parent) {
    var li = document.createElement('li');
    li.title = "Project ID: " + project.ID;
    var input = document.createElement("input");
    input.id = project.ID;
    input.name = "accordion-1";
    input.type = "radio"
    li.appendChild(input);
    this.label = document.createElement("label");
    this.label.htmlFor = project.ID;
    this.label.className = "pc-" + project.SUBCATEGORY;
    var icon = subcategoryIcons.getIcon(project.SUBCATEGORY);
    this.label.appendChild(icon);
    var div = document.createElement("div");
    div.className = "text-block";
    var h6 = document.createElement("h6");
    h6.innerHTML = project.PROJECT_NAME;
    div.appendChild(h6);
    this.label.appendChild(div);
    this.commentIcon = projectStateIcons.getIcon("COMMENT");
    this.commentIcon.onclick = function() {
    	updateQueryStringParameter(window.location.pathname.substring(1), "projectid", project.ID);
        var modal = document.createElement("div");
        modal.className = "modal";
        modal.title = "Comments for " + project.PROJECT_NAME;
        console.log("location " + window.location );
        modal.innerHTML = '<fb:comments class="fb-comments" data-href="' + window.location + '" data-width="550" data-numposts="5" data-colorscheme="light"></fb:comments>'
        FB.XFBML.parse(modal);
        $(modal).dialog({
            minWidth: 600,
            minHeight: 400,
        });
    }
    var stateIconsContainer = document.createElement("div");
    stateIconsContainer.className = "state_icons_container";
    stateIconsContainer.appendChild(projectStateIcons.getIcon(project.VOTED));
    stateIconsContainer.appendChild(projectStateIcons.getIcon(project.IS_IT_EXECUTED));
    stateIconsContainer.appendChild(this.commentIcon);
    this.label.appendChild(stateIconsContainer);
    li.appendChild(this.label);
    var article = document.createElement("article");
    article.className = "ac-small";
    var processPriority = document.createElement("p");
    processPriority.innerHTML = "Project priority: " + project.PRIORITY;
    article.appendChild(processPriority);
    var plannedBudget = document.createElement("p");
    plannedBudget.innerHTML = "Planned budget: " + numberWithCommas(project.PLANNED_BUDGET) + " IDR";
    article.appendChild(plannedBudget);
    var executedBudget = document.createElement("p");
    executedBudget.innerHTML = "Executed budget: " + numberWithCommas(project.EXECUTED_BUDGET) + " IDR";
    article.appendChild(executedBudget);
    var location = document.createElement("p");
    location.innerHTML = "Location: " + project.LOCATION;
    article.appendChild(location);
    li.appendChild(article);
    this.select = function(){
        this.label.onclick();
        this.commentIcon.onclick();
    }
    this.label.onclick = function() {
        parent.setSelectedProject(project.ID);
    };
    this.getView = function() {
        return li;
    };
}

function fillProjectCards(kelurahan, years, sC, ghostOrNot, executedOrNot, parent) {
    this.sC = sC;
    var list = document.getElementById("list");
    var ul = document.createElement("ul");
    var projectTAFFY = TAFFY();
    projectCards = {};
    for (var j = 0; j < years.length; j++) {
        for (var k = 0; k < this.sC.length; k++) {
            for (var l = 0; l < ghostOrNot.length; l++) {
                for (var m = 0; m < executedOrNot.length; m++) {
                    var projectsToShow = projectDatabase({
                        KELURAHAN: kelurahan,
                        YEAR: ("" + years[j]),
                        SUBCATEGORY: this.sC[k],
                        VOTED: ghostOrNot[l],
                        IS_IT_EXECUTED: executedOrNot[m]
                    }).get();
                    for (var i = 0; i < projectsToShow.length; i++) {
                        projectCards[projectsToShow[i].ID] = new projectCard(projectsToShow[i], parent);
                        ul.appendChild(projectCards[projectsToShow[i].ID].getView());
                        projectTAFFY.insert(projectsToShow[i]);
                    }
                    list.appendChild(ul);
                }
            }
        }
    }
    return projectTAFFY;
}

function fillKelurahanSummaries(projects) {
    this.projects = projects;
    this.list = document.getElementById("list");
    for (var i = 0; i < kelurahans.length; i++) {
        var kelurahanSummary = document.createElement("div");
        kelurahanSummary.style.cursor = 'pointer';
        kelurahanSummary.kelurahanName = kelurahans[i].getName();
        var kname = document.createElement("h6");
        kname.innerHTML = kelurahans[i].getName();
        kelurahanSummary.appendChild(kname);
        var planned_budgetdiv = document.createElement("div");
        var executed_budgetdiv = document.createElement("div");
        var plannedName = getNameFromKey(projectFields, "PLANNED_BUDGET", "NAME");
        var executedName = getNameFromKey(projectFields, "EXECUTED_BUDGET", "NAME");
        var pb = new budgetBar("PLANNED_BUDGET", plannedName, planned_budgetdiv);
        var eb = new budgetBar("EXECUTED_BUDGET", executedName, executed_budgetdiv);
        pb.updateBar(TAFFY(projects({
            "KELURAHAN": kelurahans[i].getName(),
            "VOTED": "VO"
        }).get()));
        eb.updateBar(TAFFY(projects({
            "KELURAHAN": kelurahans[i].getName(),
            "IS_IT_EXECUTED": "YES"
        }).get()));
        kelurahanSummary.appendChild(planned_budgetdiv);
        kelurahanSummary.appendChild(executed_budgetdiv);
        kelurahanSummary.onclick = function() {
            mapSC.selectKelurahanByName(this.kelurahanName);
        }
        kelurahanSummary.onmouseover = function() {
            mapSC.onKelurahanMouseOver(mapSC.getKelurahanByName(this.kelurahanName));
        }
        kelurahanSummary.onmouseout = function() {
            mapSC.onKelurahanMouseOut(mapSC.getKelurahanByName(this.kelurahanName));
        }
        this.list.appendChild(kelurahanSummary);
    }
}

function showDataLayer(key, type, label, year, locScope) {
    this.label = label;
    this.year = year;
    this.locScope = locScope;
    this.scope = locScope + year;
    map.removeLayer(aggregateDataLayer);
    aggregateDataLayer = {};
    aggregateDataLayer = L.mapbox.featureLayer().addTo(map);
    this.max = aggregateTaffyDatabase[this.scope]().max(key);
    this.min = aggregateTaffyDatabase[this.scope]().min(key);
    this.intervals = getIntervals(this.min, this.max, colorKeys.length);
    mapKey(this.min, this.max, this.intervals, colorKeys, this.label);
    if (this.locScope == "KEL") {
        for (var kelName in kelurahanShapes) {
            if (kelurahanShapes.hasOwnProperty(kelName)) {
                var info = aggregateDataDatabase[this.scope][kelName];
                var shape = kelurahanShapes[kelName]["SHAPE"];
                var style = JSON.parse(JSON.stringify(originalDataLayerShapeOptions));
                style.fillColor = noDataColor;
                if (info[key] == this.min) {
                    style.fillColor = colorKeys[0];
                } else if (info[key] == this.max) {
                    style.fillColor = colorKeys[colorKeys.length - 1];
                } else {
                    for (var i = intervals.length - 1; i >= 0; i--) {
                        style.fillColor = noDataColor;
                        if (info[key] >= this.intervals[i]) {
                            style.fillColor = colorKeys[i];
                            break;
                        }
                    };
                }
                if (style.fillColor == noDataColor) {
                    console.log(this.locscope + " " + kelName + " " + info[key] + " > " + this.intervals[i] + " color: " + colorKeys[i]);
                }
                shape.setStyle(style);
                shape.addTo(aggregateDataLayer);
                shape.bringToBack();
            }
        }
    } else {
        for (var kelName in subdivisions) {
            if (subdivisions.hasOwnProperty(kelName)) {
                for (var rwName in subdivisions[kelName]) {
                    if (subdivisions[kelName].hasOwnProperty(rwName)) {
                        for (var rtName in subdivisions[kelName][rwName]) {
                            if (subdivisions[kelName][rwName].hasOwnProperty(rtName)) {
                                try {
                                    var info = aggregateDataDatabase[this.scope][kelName][rwName][rtName];
                                } catch (err) {}
                                if (typeof info != 'undefined') {
                                    var shape = subdivisions[kelName][rwName][rtName]["SHAPE"];
                                    var style = JSON.parse(JSON.stringify(originalDataLayerShapeOptions));
                                    style.fillColor = noDataColor;
                                    if (info[key] == this.min) {
                                        style.fillColor = colorKeys[0];
                                    } else if (info[key] == this.max) {
                                        style.fillColor = colorKeys[colorKeys.length - 1];
                                    } else {
                                        for (var i = intervals.length - 1; i >= 0; i--) {
                                            style.fillColor = noDataColor;
                                            if (info[key] >= this.intervals[i]) {
                                                style.fillColor = colorKeys[i];
                                                break;
                                            }
                                        };
                                    }
                                    if (style.fillColor == noDataColor) {
                                        console.log(this.locscope + " " + kelName + " RW " + rwName + " RT " + rtName + info[key] + " > " + this.intervals[i] + " color: " + colorKeys[i]);
                                    }
                                    shape.setStyle(style);
                                    shape.addTo(aggregateDataLayer);
                                    shape.bringToBack();
                                } else {}
                            }
                        }
                    }
                }
            }
        }
    }
    console.log("ima finishS")
}

function emptyProjectCards() {
        projectCards = {};
        var list = document.getElementById("list");
        list.innerHTML = "";
    }
    //***********************************************************************
    //*************Here goes the stuff related to Fusion Tables**************
    //***********************************************************************

function getFusionTablesData(query, callback) {
    var script = document.createElement('script');
    var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
    url.push('sql=');
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&callback=' + callback);
    url.push('&key=AIzaSyAhX7a_0uyiA8DfW-4XJ6ZN_ay8GkAGrz0');
    script.src = url.join('');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
}

function getWhatToGet(columnNames) {
    var whatToGet = "";
    for (var i = 0; i < columnNames.length; i++) {
        whatToGet = whatToGet + columnNames[i].KEY + ", ";
    }
    whatToGet = whatToGet.substring(0, whatToGet.length - 2);
    return whatToGet;
}	  

//*************************************************************************
// Functions related to managing the urls of the page
function clearURL(){
	var url = window.location.pathname;
	url = url.substring(0, url.lastIndexOf("/"));
	history.replaceState(null,null, url + "/");
}
function getParams(url){ 
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
         params = {},
         match;
     while(match = regex.exec(url)) {
         params[match[1]] = match[2];
     }
     console.log(JSON.stringify(params));
     return params;
}
function getProjectIDfromURL(){
	var params = getParams(window.location);
	if(params.projectid != null){
		return (params.projectid).toUpperCase();
	} else {
		return null;
	}
}

function updateQueryStringParameter(uri, key, value) {
	key = key.toLowerCase();
	value = value.toLowerCase();
	var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)", "i");
	if (uri.match(re)) {
		return uri.replace(re, '$1' + key + "=" + value + '$2');
	} else {
	    var hash =  '';
	    if( uri.indexOf('#') !== -1 ){
	        hash = uri.replace(/.*#/, '#');
	        uri = uri.replace(/#.*/, '');
	    }
	    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	    history.replaceState(null,null, separator + key + "=" + value + hash);    
	}
}



//*************************************************************************
// Functions helpers

function getKelurahanNameByProjectID(projectID) {
    kelName = projectID.substr(0, projectID.indexOf('-'));
    kelName = kelName.replace(/_/g, ' ');
    console.log(kelName)
    return kelName;
}
