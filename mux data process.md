# Mux Data Proceess原理

#### issues
- 让你来做一个一样的Mux Data 获取数据 实现Dashboard的各项指标的分析  如何复现

#### Target: 

​		实现和Mux Data 后台Dashboard一样的数据分析.

~~Analysis~~

#### 问题分析：

1.  
	- 通过调用JS库.使用
	-   

or

2. - 此为 mux data如何设计的简单推断
   - 获取视频
   - 通过mux.monitor来让mux监控对应的视频 
   - 获取meta Data的S



播放器向Mux Data服务器发出请求 (sending requests)

-----



从代码上看，先Yarn install Mux-embed.其中Mux embed是解析器？ 或者说是*API库*  .然后通过把 embed 引入React  或 HTML .  

`import mux from "mux-embed"; `



`metadata` 是选择获取特定数据的关键。

由 [Custom JavaScript integration](https://docs.mux.com/guides/data/custom-javascript-integration#include-the-mux-embed-library) 可得



Reference
