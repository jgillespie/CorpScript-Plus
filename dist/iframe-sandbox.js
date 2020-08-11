/**
 * Create Iframe
 * 
 * Author: Jaeger <JaegerCode@gmail.com>
 * 
 * */
(function(global){
global.iframe = {
	create:function (dom,content){
		var tpl = '<iframe src="about:blank" style="width:100%;height:100%;border:0px;display: block!important;"></iframe>';
		dom.innerHTML = tpl;
		var iframeDom = dom.children[0];
		this.write(iframeDom,content);
		return iframeDom;
	},
	write: function (iframeDom, content) {
		if (iframeDom.tagName && "iframe" == iframeDom.tagName.toLowerCase()) {
		    var c = iframeDom.contentWindow.document;
		    try {
			c.open(), c.write(content), c.close()
		    } catch (d) {
			console.log("append HTML to [iframe:" + iframeDom.name + "] ERROR!")
		    }
		}
	}
};
})(window);
