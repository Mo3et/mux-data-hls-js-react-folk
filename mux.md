# Mux Data

```json
{
  "events": [
    {
      "mapve": "2.1",//mux api version 
      "mem": "mux-embed",//Mux embed  相应的JSON解析的Packages
      "memve": "4.1.1",//mux embed Version
      "udvcg": "", //viewer device category
      "pinid": "fc0e5be4-0ce3-466a-acc8-0b8fc59c482c",//player instance id
      "msara": 1,//mux sample rate
      "bdm": "litix.io",//beacon CDN
      "psqno": 3,//Player sequence number
      "xsqno": 3,//view sequence number
      "pispa": false,// Player is paused
      "pphti": 0, // Player Playhead time
      "pwd": 376, //Player width
      "pht": 211,//Player height
      "pauon": false,//Player autoPlay on
      "ppron": "metadata",//Player preload on 
      "vsodu": 10154,// view source duration   
      "vsoht": 720,// view source height
      "vsowd": 1280,//view source width
      "uti": 1628780884540.2,//viewer time 
      "psw": "HTML5 Video Element",//Player Software
      "pswve": "No Versions",//Player Software version
      "pmxpinm": "VideoElementMonitor",//Player plugin name
      "pmxpive": "4.1.1",//Player plugin version
      "ake": "tcn2efq04seomoe62sn0f7dk5",// env key
      "pnm": "Main Player",//Player name
      "piiti": 1628780873350,//Player init time
      "xid": "525d3c4b-e773-4155-b304-997809e210bd",//View id
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",//video id
      "xmaphps": 0,// view max playhead 
      "xwati": 0,// view  watch time 
      "pvwco": 1,//Player view count
      "xst": 1628780884540.2,//view start
      "vsoisli": false, //video source is live
      "sid": "2d28003c-e300-41c0-a82f-74832f82c76e",//Session id
      "sst": "1628780801908.3",//session start
      "sex": 1628782384541.3,// session expires
      "mvrid": "d5ffcfc0-728d-4ed0-bb90-e2cfb1aef9b8",//mux viewer id 
      "msano": "0.7219504715011147",//mux sample number
      "e": "viewstart",// event
      "wur": "https://mux.caitouyun.com/",//page url
      "vpour": "",//Player  poster url
      "vsour": "MSE style URL"//Player source url 
    }
  ]
}
```

```json
"events": [
    {
      "psuti": 22,//Player startup time 
      "wloti": 99,//page load time
    }
  ]
```



```json
"events": [
    {
      "xtitofifr": 4.599853515625,//// view time to  firest frame
        
      "xmauppe": 0,// view max upscale percentage
      "xmadope": 0.6097222222222223,//view max downscale percentage
      "xtlctpbti": 0,//view total content palyback time
      "xtlug": 0,//view total upscaling

      "xskco": 1,//view seek 
      "xskdu": 29.699951171875, //view seek duration
      "xmaskti": 29.699951171875,//view max seek time

      "xctpbti": 10088,//view contan playback time
      "xtlctpbti": 10088,//view total content palyback time
      "xtldg": 6150.877777777778, //view total downscaling
}
  ]
```

----

e.g

```JSON
// 暂停后重新播放
{
  "events": [
    {
      "mapve": "2.1",//Mux api version
      "pinid": "c0b21dd3-f7a8-4270-9cad-7230e8fddd30",// Player instance id
      "bdm": "litix.io",//beacon CDN
      "psqno": 7,//player sequence number
      "xsqno": 7,//view sequnce number
      "pispa": false,//player is pause
      "pphti": 4500,//Player Playhead time
      "uti": 1629030755265.7,//viewer time
      "ake": "tcn2efq04seomoe62sn0f7dk5",//env key 
      "xid": "91c7a180-add0-4ef8-a3b5-ebb37545b177",//view id
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",//Player id
      "xmaphps": 4500,//View max playhead 
      "sex": 1629032255267.4,// session expires
      "e": "play"//event
    },
    {
      "mapve": "2.1",
      "pinid": "c0b21dd3-f7a8-4270-9cad-7230e8fddd30",
      "bdm": "litix.io",
      "psqno": 8,
      "xsqno": 8,
      "pphti": 4500,
      "uti": 1629030755267.7,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "91c7a180-add0-4ef8-a3b5-ebb37545b177",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629032255268.1,
      "e": "playing"
    }
  ]
}
```







----

- 监听的事件：

```json
” events => “  X = [
            "viewstart",
            "ended",
            "loadstart",
            "pause",
            "play",
            "playing",
            "ratechange",
            "waiting",
            "adplay",
            "adpause",
            "adended",
            "aderror",
            "adplaying",
            "adrequest",
            "adresponse",
            "adbreakstart",
            "adbreakend",
            "rebufferstart",
            "rebufferend",
            "seeked",
            "error",
            "hb",
            "requestcompleted",
            "requestfailed",
            "requestcanceled",
            "renditionchange",
          ]
```

通常包括  "loadstart", "viewstart","play","playing","seeking","waiting","seeked","playing","pause","ended"

```JS
     //Send 当前状态
     X.forEach(function (e) {
                a.on(e, function (t, r) {
                  0 !== e.indexOf("ad") && this._updateStateData(),
                    (0, u.default)(this.data, r),
                    this._sanitizeData();
                }),
                  a.on("after" + e, function () {
                    ("error" !== e || this.viewErrored) && this.send(e);
                  });
              }),
```

```
"playerready"

```

`Timeframe` 使用**array of epoch timestamps**.

预加载框架或者插件，然后开始监控事件。



