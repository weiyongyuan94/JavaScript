/**
 * 用来枚举属性的对象工具函数
 * 把P的可枚举属性复制到O 中，并且返回 O
 * 若P和O含有同名的属性，则会覆盖O中的属性
 * 这个函数并不处理getter和setter以及复制属性
 */

 function extend(o,p){
     for(const prop in p){
         o[prop] = p[prop];
     }
     return o
 }

 /**
  * 用来枚举属性的对象工具函数
  * 把P的可枚举属性复制到O 中，并且返回 O
  * 若P和O含有同名的属性，O 中的属性不会受到影响
  * 这个函数并不处理getter和setter以及复制属性
  */
 
  function merge(o,p){
      for(const prop in o){
          if(o.hasOwnProperty[prop]){
              continue;
              o[prop] = p[prop];
          }
          return o
      }
  }

  /**
   * 若O中的属性在P中没有同名的属性，则从O中删除该属性
   * 返回O
   */

   function restrict(o,p){
       for(const prop in o){
           if(!(prop in p)){
               delete o[prop]
           }
       }
       return o;
   }

   /**
    * 若O中的属性在P中存在同名属性，那么从O中删除该属性
    * 返回O
    */

    function subtract(o,p){
        for(const prop in p){
            delete o[prop]
        }
        return o
    }
    /**
     * 返回一个新对象，该对象同时拥有O和P的属性
     * 若出现同名属性，则使用P中的属性
     */
    function union(o,p){
        return extend(extend({},o),p);
    }

    /**
     * 返回一个新对象，该对象拥有同时出现在O和P的属性（交集）
     */

    function intersection(o,p){
        return restrict(extend({},o),p);
    }

    /**
     * 返回一个数组，这个数组包含的是O中可枚举发的自有属性的名字
     */
    function keys(o){
        //参数必须是对象
        if(typeof o !== "object"){
            throw TypeError();
        }

        var result = [];
        //遍历所有可枚举的属性
        for(const prop in 0){
            //判断是否有自有属性，将自有属性名添加到数组中
            if(o.hasOwnProperty(prop)){
                result.push(prop);
            }
            return result;
        }
    }

    /**
     * 返回传递给它的人一对象的类属性（ 对象类型信息）的方法
     */
    function  classof(o){
        if (o === null) {
            return "Null";
        }
        if (o === undefined) {
            return "Undefined";
        }
        return Object.prototype.toString.call(o).slice(8,-1);
    }

    /**
     * 检测类数组对象
     * 判定O是否是一个类数组对象
     * 字符串和函数有length属性，可以通过typeof检测将其排除
     * 客户端的JavaScript中的DOM文本节点也有length属性，通过O.nodeType != 3 将其排除
     */
    function isArrayLike(o){
        if (o && typeof o === 'object' && isFinite(o.length) && o.length>=0 && o.length === Math.floor(o.length) && o.length < 4294967296) {
            return  true
        }else{
            return false;
        }
    }


Array.join = Array.join || function(a,sep){
    return Array.prototype.join.call(a, sep);
};
Array.slice = Array.slice || function (a, sep){
    return Array.prototype.slice.call(a, sep);
};
Array.map = Array.map || function (a, sep){
    return Array.prototype.map.call(a, sep);
}

/**
 * 模板方法模式
 */

//模板类  提示框data渲染数据
var Alert = function(data){
    if (!data) {
        return;
    }
    //内容
    this.content = data.content;
    //提示面板
    this.panel = document.createElement("div");
    //提示内容组件
    this.contentNode = document.createElement("p");
    //确定按钮组件
    this.confirmBtn = document.createElement("span");
    //关闭按钮组件
    this.closeBtn = document.createElement("b");

    this.panel.className = "alert";
    this.closeBtn.className = "a-close";
    this.confirmBtn.className = "a-confirm";
    this.confirmBtn.innerHTML = data.confirm || "确认";
    this.contentNode.innerHTML = this.content;
    this.success = data.success || function(){};
    this.fail = data.fail || function(){};
}

//提示框原型
Alert.prototype = {
    init:function(){
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        document.body.appendChild(this.panel);
        this.bindEvent();
        this.show()
    },
    bindEvent:function(){
        var that = this;
        thi.closeBtn.onclick = function(){
            that.success();
            that.hide();
        }

        this.confirmBtn.onclick = function(){
            that.success();
            that.hide();
        }
    },
    hide:function(){
        this.panel.style.dispaly = "none";
    },

    show:function(){
        this.panel.style.dispaly = "block";
    }
}
