require('./loading.css');
var greeter = require('./loading.html');

function parseDom(arg) {

    var objE = document.createElement("div");

    objE.innerHTML = arg;

    return objE.childNodes[0];

};

module.exports = function() {
    return {
        init:function(args){

           this.loadingDom=parseDom(greeter)

           if(!!args && !!args.dom){
               args.dom.appendChild(this.loadingDom)
           }else {
               document.body.appendChild(this.loadingDom)
           }
           return this;
        },
        show:function(){
            this.loadingDom.style.display = 'block';
            return this;
        },
        hide:function(){
            this.loadingDom.style.display = 'none';
            return this;
        }
    }
};