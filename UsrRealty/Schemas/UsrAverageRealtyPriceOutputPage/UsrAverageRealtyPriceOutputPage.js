define("UsrAverageRealtyPriceOutputPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "insert",
				"name": "AveragePrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PageParameters_UsrIntegerParameter1_sgzcyh3",
					"labelPosition": "auto",
					"control": "$PageParameters_UsrIntegerParameter1_sgzcyh3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_uxln7d4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SqlText",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 2
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PageParameters_UsrTextParameter1_nes56zp",
					"labelPosition": "auto",
					"control": "$PageParameters_UsrTextParameter1_nes56zp",
					"multiline": true,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_uxln7d4",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_UsrIntegerParameter1_sgzcyh3": {
						"modelConfig": {
							"path": "PageParameters.UsrAveragePrice"
						}
					},
					"PageParameters_UsrTextParameter1_nes56zp": {
						"modelConfig": {
							"path": "PageParameters.UsrSqlText"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});