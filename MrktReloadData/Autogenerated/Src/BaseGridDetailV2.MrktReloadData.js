 define("BaseGridDetailV2", ["MrktReloadDataCSSResources","css!MrktReloadDataCSS"], function(resources) {
	return {
		methods: {
			onReloadDataButtonClick: function() {
				var $buttons = $(".reloadData-button-rotate").click(function(){
					$buttons.removeClass("rotate"); 
					$(this).addClass("rotate"); 
				});
				this.reloadGridData();
				setTimeout(function(){
					$(".reloadData-button-rotate").removeClass("rotate");
					},1000);
			},
			getIsReloadDataButtonVisible: function() {
				return !this.get("IsDetailCollapsed");
			},
			getIcon: function(){
				return resources.localizableImages.MrktReloadDataButtonIcon;
			}
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ReloadDataContainer",
				"parentName": "Detail",
				"propertyName": "tools",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
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
						"wrapperClass": ["reloadData-detail-button-wrapperEl", "reloadData-button-zindex", "reloadData-button-rotate"],
						"imageClass": ["reloadData-detail-button-image"]
					},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "getIcon"},
					"visible": {"bindTo": "getIsReloadDataButtonVisible"}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
