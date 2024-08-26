  define("BasePageV2", ["MrktReloadDataCSSResources","css!MrktReloadDataCSS"], function(resources) {
	return {
		attributes: {},
		messages: {
			"onReloadCardData": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			}
		},
		diff: [
			{
				"operation": "insert",
				"name": "ReloadDataButton",
				"parentName": "RightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"click": {"bindTo": "onReloadDataButtonClick"},
					"classes": {
						"wrapperClass": ["reloadData-button-zindex", "reloadData-button-rotate"],
						"imageClass": ["reloadData-button-image"]
					},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "getIcon"}
				}
			}
		],
		methods: {
			onReloadDataButtonClick: function() {
				$(".reloadData-button-rotate").toggleClass("rotate");
				this.reloadEntity(function(){
					$(".reloadData-button-rotate").removeClass("rotate");
				});
			},
			getIcon: function(){
				return resources.localizableImages.MrktReloadDataButtonIcon;
			},
			subscribeSandboxEvents: function() {
				this.callParent(arguments);
				this.sandbox.subscribe("onReloadCardData", this.onReloadDataButtonClick, this,
						[this.sandbox.id]);
			}
		},
	};
});