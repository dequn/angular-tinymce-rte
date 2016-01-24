# angular-tinymce-rte
一款用于简单封装tinymce插件的库,与ui-tinymce不同,主要实现在已有文本上的编辑器实例化.

## 使用方法
   module需要注入ui.rte,在自己的contrller中注入rte服务.

## API
###     rte.init(selector,setting),selector选择器,要实例化成编辑器的html元素,必须能够唯一确定一个元素,如果是多个都会进行实例化,但最终只能操作最后一个实体化完成的;settting是指编辑器的设置,参考tinymce的官方文档,注意需要额外添加一个固定的setting项,如果留空,采用的tinymce的默认设置或者是rte.setEditorSetting(setting)的设置.
```
init_instance_callback:function(editor){
rte.currentEditor = editor
}
```
### rte.getContent()   返回当前编辑器的内容
### rte.resetContent()  重置内容到实例化时元素的内容
### rte.destroy()   注销编辑器,编辑器内容会被渲染到页面的原来位置.
### rte.setEditorSetting(setting)  设置编辑器的setting,需要在init前执行,setting与init中的参数要求相同,注意 ,init中的参数优先级高于此处的设置 .

例子请参考test中的test.html.


