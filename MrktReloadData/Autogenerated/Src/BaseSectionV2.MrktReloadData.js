define("BaseSectionV2", ["MrktReloadDataCSSResources","BaseSectionV2Resources", "css!MrktReloadDataCSS"], function(resources) {
	return {
		messages: {
			"onReloadCardData": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			"ReloadDashboard": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
		},
		methods: {
			onReloadDataButtonClick: function() {
				if(this.get("ActiveViewName") === "AnalyticsDataView")
				{
					this.ReloadAnalyticsDataViewData();
				} else {
					$(".reloadData-button-rotate").toggleClass("rotate");
					this.updateSection();
					 setTimeout(function(){
					 $(".reloadData-button-rotate").removeClass("rotate");
				   },1000);
				}
			},
			ReloadAnalyticsDataViewData: function() {
				var dashboardModuleId = this.sandbox.id + "SectionDashboardDashboardModule";
				$(".reloadData-button-rotate").toggleClass("rotate");
				this.sandbox.publish("ReloadDashboard", null, [dashboardModuleId]);
				setTimeout(function(){
				 $(".reloadData-button-rotate").removeClass("rotate");
			   },1000);
			},
			onCombinedModeReloadDataButtonClick: function() {
				this.sandbox.publish("onReloadCardData", null, [this.getCardModuleSandboxId()]);
			},
			getIcon: function(){
				return resources.localizableImages.MrktReloadDataButtonIcon;
			}
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ReloadDataContainer",
				"parentName": "FiltersContainer",
				"propertyName": "items",
				"index": 0,
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["dlb-reloadData-container", "dlb-reload-button-marginRight"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "ReloadDataButton",
				"parentName": "ReloadDataContainer",
				"propertyName": "items",
				"index": 0,
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"click": {"bindTo": "onReloadDataButtonClick"},
					"classes": {
						"wrapperClass": ["reloadData-button-zindex", "reloadData-button-rotate", "reloadData-button-wrapperEl"],
						"imageClass": ["reloadData-button-image"]
					},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "getIcon"},
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeReloadDataButton",
				"parentName": "CombinedModeActionButtonsCardRightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"click": {"bindTo": "onCombinedModeReloadDataButtonClick"},
					"classes": {
						"wrapperClass": ["reloadData-button-zindex", "reloadData-button-rotate"],
						"imageClass": ["reloadData-button-image"]
					},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "getIcon"},
					"visible": true
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
