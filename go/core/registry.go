package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBinEntityFunc func(client *CatchrHttpSDK, entopts map[string]any) CatchrHttpEntity

var NewBinPublicEntityFunc func(client *CatchrHttpSDK, entopts map[string]any) CatchrHttpEntity

var NewBinRequestEntityFunc func(client *CatchrHttpSDK, entopts map[string]any) CatchrHttpEntity

var NewHntEntityFunc func(client *CatchrHttpSDK, entopts map[string]any) CatchrHttpEntity

