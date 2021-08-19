# Mux Data

对视频请求的JSON内容进行解析
```js

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
      "xmaphps": 0,// view max playhead position
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


```js
"events": [
    {
      "psuti": 22,//Player startup time 
      "wloti": 99,//page load time
    }
  ]
```


```js
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
上述为流程中出现过的
`Timeframe` 使用**array of epoch timestamps**.

----

e.g

```js
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
      "xmaphps": 4500,//View max playhead position
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



- 解析JSON使用的Params, JSON 数据解析对应的格式为`df`、`dff`、`dfff`、`dffff`

```js
          d = {
            a: "env",
            b: "beacon",
            c: "custom",
            d: "ad",
            e: "event",
            f: "experiment",
            m: "mux",
            n: "response",
            p: "player",
            q: "request",
            r: "retry",
            s: "session",
            t: "timestamp",
            u: "viewer",
            v: "video",
            w: "page",
            x: "view",
            y: "sub",
          }

          f = {
            ad: "ad",
            ag: "aggregate",
            ap: "api",
            al: "application",
            ar: "architecture",
            as: "asset",
            au: "autoplay",
            av: "average",
            bi: "bitrate",
            br: "break",
            bw: "browser",
            by: "bytes",
            ca: "cached",
            cb: "cancel",
            cd: "code",
            cg: "category",
            ch: "changed",
            cn: "config",
            co: "count",
            ce: "counter",
            cp: "complete",
            cr: "creative",
            ct: "content",
            cu: "current",
            cx: "connection",
            dg: "downscaling",
            dm: "domain",
            dn: "cdn",
            do: "downscale",
            du: "duration",
            dv: "device",
            ec: "encoding",
            en: "end",
            eg: "engine",
            em: "embed",
            er: "error",
            es: "errorcode",
            et: "errortext",
            ee: "event",
            ev: "events",
            ex: "expires",
            fi: "first",
            fm: "family",
            ft: "format",
            fq: "frequency",
            fr: "frame",
            fs: "fullscreen",
            he: "headers",
            ho: "host",
            hn: "hostname",
            ht: "height",
            id: "id",
            ii: "init",
            in: "instance",
            ip: "ip",
            is: "is",
            ke: "key",
            la: "language",
            lb: "labeled",
            le: "level",
            li: "live",
            ld: "loaded",
            lo: "load",
            ls: "lists",
            lt: "latency",
            ma: "max",
            md: "media",
            me: "message",
            mi: "mime",
            ml: "midroll",
            mm: "min",
            mn: "manufacturer",
            mo: "model",
            mx: "mux",
            nm: "name",
            no: "number",
            on: "on",
            os: "os",
            pa: "paused",
            pb: "playback",
            pd: "producer",
            pe: "percentage",
            pf: "played",
            pg: "program",
            ph: "playhead",
            pi: "plugin",
            pl: "preroll",
            pn: "playing",
            po: "poster",
            pr: "preload",
            ps: "position",
            py: "property",
            ra: "rate",
            rd: "requested",
            re: "rebuffer",
            rf: "rendition",
            rm: "remote",
            ro: "ratio",
            rp: "response",
            rq: "request",
            rs: "requests",
            sa: "sample",
            se: "session",
            sk: "seek",
            sm: "stream",
            so: "source",
            sq: "sequence",
            sr: "series",
            st: "start",
            su: "startup",
            sv: "server",
            sw: "software",
            ta: "tag",
            tc: "tech",
            te: "text",
            th: "throughput",
            ti: "time",
            tl: "total",
            to: "to",
            tt: "title",
            ty: "type",
            ug: "upscaling",
            up: "upscale",
            ur: "url",
            us: "user",
            va: "variant",
            vd: "viewed",
            vi: "video",
            ve: "version",
            vw: "view",
            vr: "viewer",
            wd: "width",
            wa: "watch",
            wt: "waiting",
          }

```



----

- 监听的事件包括：

```js
” events => “   K = [
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
            "adfirstquartile",
            "admidpoint",
            "adthirdquartile",
            "rebufferstart",
            "rebufferend",
            "seeked",
            "error",
            "hb",
            "requestcompleted",
            "requestfailed",
            "requestcanceled",
            "renditionchange",
          ],
```

通常包括  "loadstart", "viewstart","play","playing","seeking","waiting","seeked","playing","pause","ended"

```js
     //Send now event
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

```

预加载检测插件类型，然后开始监控事件。

event :  { playerready -> loadstart -> viewstart -> play -> playing -> seeking -> waiting -> seeked -> playing ->pause ->ended }









#### 完整流程的JSON

```js
// 加载完视频播放器，然后未播放时
{
  "events": [
    {
      "mapve": "2.1",
      "mem": "mux-embed",
      "memve": "4.1.1",
      "udvcg": "",
      "pinid": "b699986c-30b2-4469-92a5-94cd2d22ae53",
      "msara": 1,
      "bdm": "litix.io",
      "psqno": 1,
      "xsqno": 1,
      "pispa": true,
      "pphti": 0,
      "pwd": 500,
      "pht": 250,
      "pauon": false,
      "ppron": "metadata",
      "vsodu": null,
      "vsoht": 0,
      "vsowd": 0,
      "uti": 1629030555162.9,
      "psw": "HTML5 Video Element",
      "pswve": "No Versions",
      "pmxpinm": "VideoElementMonitor",
      "pmxpive": "4.1.1",
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "pnm": "Main Player",
      "piiti": 1629030555141,
      "xid": "4a1eeefe-9da7-4f2c-a8a4-0af7ba082256",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      
      "psuti": 22,
      "wloti": 99,

      "sid": "43df35e6-ed67-43cc-8a16-682e411043f8",
      "sst": "1629030090541.4",
      "sex": 1629032055163.6,
      "mvrid": "ba036dc1-e3c7-4e56-b0a7-590df56fba0c",
      "msano": "0.5775986118657279",
      "e": "playerready",
      "wur": "https://mux.caitouyun.com/",
      "vpour": ""
    },
    {
      "mapve": "2.1",
      "pinid": "b699986c-30b2-4469-92a5-94cd2d22ae53",
      "bdm": "litix.io",
      "psqno": 2,
      "xsqno": 2,
      "pphti": 0,
      "vsodu": null,
      "uti": 1629030555170.1,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "4a1eeefe-9da7-4f2c-a8a4-0af7ba082256",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629032055172.1,
      "e": "loadstart",
      "vsour": "MSE style URL"
    }
  ]
}


// 点击播放
{
  "events": [
    {
      "mapve": "2.1",
      "mem": "mux-embed",
      "memve": "4.1.1",
      "udvcg": "",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "msara": 1,
      "bdm": "litix.io",
      "psqno": 3,
      "xsqno": 3,
      "pispa": false,
      "pphti": 0,
      "pwd": 500,
      "pht": 281,
      "pauon": false,
      "ppron": "metadata",
      "vsodu": 10154,
      "vsoht": 720,
      "vsowd": 1280,
      "uti": 1629030169037.7,
      "psw": "HTML5 Video Element",
      "pswve": "No Versions",
      "pmxpinm": "VideoElementMonitor",
      "pmxpive": "4.1.1",
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "pnm": "Main Player",
      "piiti": 1629030090681,
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "xmaphps": 0,
      "xwati": 0,
      "pvwco": 1,
      "xst": 1629030169037.7,
      "vsoisli": false,

      "sid": "43df35e6-ed67-43cc-8a16-682e411043f8",
      "sst": "1629030090541.4",
      "sex": 1629031669039.1,
      "mvrid": "ba036dc1-e3c7-4e56-b0a7-590df56fba0c",
      "msano": "0.5775986118657279",
      "e": "viewstart",
      "wur": "https://mux.caitouyun.com/",
      "vpour": "",
      "vsour": "MSE style URL"
    }
  ]
}


// 从开始播放到暂停
{
  "events": [
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 4,
      "xsqno": 4,
      "pphti": 0,
      "uti": 1629030169037.7,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629031669041.2,
      "e": "play"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 5,
      "xsqno": 5,
      "pphti": 0,
      "uti": 1629030169041.7,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",

      "xwati": 4.599853515625,
      "xtitofifr": 4.599853515625,

      "sex": 1629031669042.8,
      "e": "playing"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 6,
      "xsqno": 6,
      "pphti": 0,
      "uti": 1629030169044.9,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629031669045.4,
      "e": "seeking"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 7,
      "xsqno": 7,
      "pphti": 100,
      "uti": 1629030169046.5,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",

      "xmauppe": 0,
      "xmadope": 0.6097222222222223,
      "xtlctpbti": 0,
      "xtlug": 0,
      "xtldg": 0,

      "sex": 1629031669048.3,
      "e": "waiting"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 8,
      "xsqno": 8,
      "pphti": 100,
      "uti": 1629030169073.9,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",

      "xmaphps": 100,
      "xwati": 36.599853515625,

      "xskco": 1,
      "xskdu": 29.699951171875,
      "xmaskti": 29.699951171875,
      
      "sex": 1629031669075.3,
      "e": "seeked"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 9,
      "xsqno": 9,
      "pphti": 100,
      "uti": 1629030169076,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629031669076.6,
      "e": "playing"
    },
    {
      "mapve": "2.1",
      "pinid": "df8aaa05-8699-4706-bcc2-a85627e79fde",
      "bdm": "litix.io",
      "psqno": 10,
      "xsqno": 10,
      "pispa": true,
      "pphti": 3956,
      "uti": 1629030173070.9,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "9728a503-b129-4b20-92d0-27886331b9e1",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",

      "xmaphps": 3956,
      "xwati": 4035,
      "xtlctpbti": 3856,
      "xtldg": 2351.088888888889,
      "xctpbti": 3856,

      "sex": 1629031673072.6,
      "e": "pause"
    }
  ]
}


// 重新播放
{
  "events": [
    {
      "mapve": "2.1",
      "pinid": "c0b21dd3-f7a8-4270-9cad-7230e8fddd30",
      "bdm": "litix.io",
      "psqno": 7,
      "xsqno": 7,
      "pispa": false,
      "pphti": 4500,
      "uti": 1629030755265.7,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "91c7a180-add0-4ef8-a3b5-ebb37545b177",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "xmaphps": 4500,
      "sex": 1629032255267.4,
      "e": "play"
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


//结束
{
  "events": [
    {
      "mapve": "2.1",
      "pinid": "c0b21dd3-f7a8-4270-9cad-7230e8fddd30",
      "bdm": "litix.io",
      "psqno": 9,
      "xsqno": 9,
      "pispa": true,
      "pphti": 10154,
      "vsoht": 1080,
      "vsowd": 1920,
      "uti": 1629030760977.3,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "91c7a180-add0-4ef8-a3b5-ebb37545b177",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "xmaphps": 10154,
      "xwati": 10204.7998046875,
      
      "xctpbti": 10088,
      "xtlctpbti": 10088,
      "xtldg": 6150.877777777778,

      "sex": 1629032260979.2,
      "e": "pause"
    },
    {
      "mapve": "2.1",
      "pinid": "c0b21dd3-f7a8-4270-9cad-7230e8fddd30",
      "bdm": "litix.io",
      "psqno": 10,
      "xsqno": 10,
      "pphti": 10154,
      "uti": 1629030760980.3,
      "ake": "tcn2efq04seomoe62sn0f7dk5",
      "xid": "91c7a180-add0-4ef8-a3b5-ebb37545b177",
      "vid": "bXV4LmNhaXRvdXl1bi5jb20vdW5kZWZpbmVk",
      "sex": 1629032260980.8,
      "e": "ended"
    }
  ]
}

```

