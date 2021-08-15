# Mux Data传输

```json
{
  "events": [
    {
      "mapve": "2.1",
      "mem": "mux-embed",//相应的JSON解析的Packages
      "memve": "4.1.1",//mux data 对应的版本
      "udvcg": "",
      "pinid": "fc0e5be4-0ce3-466a-acc8-0b8fc59c482c",
      "msara": 1,
      "bdm": "litix.io",
      "psqno": 3,
      "xsqno": 3,
      "pispa": false,
      "pphti": 0,
      "pwd": 376,
      "pht": 211,
      "pauon": false,
      "ppron": "metadata",
      "vsodu": 10154,
      "vsoht": 720,
      "vsowd": 1280,
      "uti": 1628780884540.2,
      "psw": "HTML5 Video Element",
      "pswve": "No Versions",
      "pmxpinm": "VideoElementMonitor",
      "pmxpive": "4.1.1",
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "pnm": "Main Player",
      "piiti": 1628780873350,
      "xid": "525d3c4b-e773-4155-b304-997809e210bd",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "xmaphps": 0,
      "xwati": 0,
      "pvwco": 1,
      "xst": 1628780884540.2,
      "vsoisli": false,
      "sid": "2d28003c-e300-41c0-a82f-74832f82c76e",
      "sst": "1628780801908.3",
      "sex": 1628782384541.3,
      "mvrid": "d5ffcfc0-728d-4ed0-bb90-e2cfb1aef9b8",
      "msano": "0.7219504715011147",
      "e": "viewstart",// 触发时状态
      "wur": "https://mux.caitouyun.com/",
      "vpour": "",
      "vsour": "MSE style URL"
    }
  ]
}
```



----

- 触发时状态(Click 事件)：

```
” e=> “  X = [
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

通常播放会包括Play和Play两个事件