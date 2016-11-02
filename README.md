# photoViewer

photoViewer是一个集合图片轮播，缩放功能的webPack 组件，兼容IOS 安卓各主流浏览器/Webview.
依赖：zepto.js

使用方法：
引入zepto.js webpack_photoViewer.js

photoViewer.init(
                {
                    order:order,   //当前选中第几张照片 从零开算
                    imgList:imgList, //轮播照片列表
                    disableAutoPlay:true, //是否仅用自动播放动画,默认为true
                }
        ).show();
        调用init方法后会插入dom元素，photoViewer对象使用show方法即可展示照片。
        
入参：
order/int 打开相册后显示第几张照片，从0开始计数。
imgList/[Json] 轮播照片列表，如果传入单图就不带轮播只有缩放效果。
格式[{highLevel:String,lowLevel:String}]照片列表的高清地址和缩略图地址，开始显示缩略图并加载大图，大图就绪后替换。
disableAutoPlay:true 不填写默认为true,禁用自动轮播。

操作说明：
show()后读取图片，两指缩放图片，缩放率小于1或者大于2时照片回归中心点。为了防止抖动，缩放过程中图片不能上下左右位移，单指操作或者
放大到最大（2倍率）时可以单图滑动查看细节，两次超出边界即触发轮播图的滚动到下张逻辑。
