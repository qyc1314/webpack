import gateway from '@/config/gatewayApiDomain';

export const getCookie = function (name) {
  var arr = document.cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
      var match = arr[i].match(/^([^=]*)=(.*)$/);
      if(!match){
          continue;
      }
      if((match[1]).trim()==name){
          return decodeURIComponent(match[2]);
      }
  }
  return '';
};

export const deepExtend = function () {
  var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
  /*
  变量 options：指向某个源对象。
  变量 name：表示某个源对象的某个属性名。
  变量 src：表示目标对象的某个属性的原始值。
  变量 copy：表示某个源对象的某个属性的值。
  变量 copyIsArray：指示变量 copy 是否是数组。
  变量 clone：表示深度复制时原始值的修正值。
  变量 target：指向目标对象,申明时先临时用第一个参数值。
  变量 i：表示源对象的起始下标，申明时先临时用第二个参数值。
  变量 length：表示参数的个数，用于修正变量 target。
  变量 deep：指示是否执行深度复制，默认为 false。
  ps:源对象指的是把自己的值付给别人的对象；目标对象指的是被源对象赋值的对象
  */

  // 如果第一个参数传入的是布尔值
  if ( typeof target === "boolean" ) {
      deep = target;//设置deep变量，确定是深拷贝还是浅拷贝
      target = arguments[1] || {};//将目标对象设为第二个参数值。
      i = 2;//源对象的起始下标设为2（即从第三个参数开始算源对象）
  }

  // Handle case when target is a string or something (possible in deep copy)
  //嗯，原英文解释的很清楚
  if ( typeof target !== "object" && !isType(target,'function') ) {
      target = {};
  }

  // 如果没有目标对象，那么目标对象就是jquery对象
  if ( length === i ) {
      target = this;
      --i;
  }

  for ( ; i < length; i++ ) {//遍历源对象
      // Only deal with non-null/undefined values
      if ( (options = arguments[ i ]) != null ) {//options就是源对象
          // Extend the base object
          for ( name in options ) {//遍历源对象的属性名
              src = target[ name ];//获取目标对象上，属性名对应的属性
              copy = options[ name ];//获取源对象上，属性名对应的属性

              // 如果复制值copy 与目标对象target相等，
              //为了避免深度遍历时死循环，因此不会覆盖目标对象的同名属性。
              if ( target === copy ) {
                  continue;
              }

              //递归地将源对象上的属性值合并到目标对象上
              //如果是深拷贝，且待拷贝的对象存在，且是普通对象或是数组
              //这一个判断条件非常关键，这正是之前疑问的症结
              //首先，普通对象的定义是:通过 "{}" 或者 "new Object" 创建的
              //回到之前的疑问，目标对象tobeCloned的属性o对象的obj不是普通对象，也不是数组，所以程序不会走到下面的分支
              if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = isType(copy,'array')) ) ) {
                  if ( copyIsArray ) {
                      //如果是数组
                      copyIsArray = false;
                      clone = src && isType(src) ? src : [];

                  } else {
                      clone = src && isPlainObject(src) ? src : {};
                  }

                  // 递归地拷贝
                  target[ name ] = deepExtend( deep, clone, copy );

              } else if ( copy !== undefined ) {
              //会走到这个分支，这个分支的处理很暴力，就是把源对象的属性，直接赋给源对象。
              //对于上文中tobeCloned对象的属性o，没有进一步递归地拷贝，而是直接把引用赋给源对象
              //所以改变tobeCloned的o属性时，目标对象的o属性也被改变了。
                  target[ name ] = copy;
              }
          }
      }
  }

  // Return the modified object
  return target;
};


export const isPlainObject = function (obj) {
  var proto, Ctor;
  var hasOwn = Object.hasOwnProperty;

  // 排除掉明显不是obj的以及一些宿主对象如Window
  if (!obj || toString.call(obj) !== "[object Object]") {
      return false;
  }

  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj);

  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
      return true;
  }

  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
};

export const isType = function (data, type) {
  const dataType = Object.prototype.toString.call(data).slice(8, -1)
  return dataType === type.replace(/(^|\s)(\w)/g, ($1) => $1.toUpperCase())
};

export const getGateway = function (domainName){
  return gateway[domainName][process.env.NODE_ENV];
};

/**
 * 防抖函数
 * @param fn
 * @param t
 * @returns {Function}
 */
export const debounce = function (fn, t) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, t)
  }
};

/**
 * 按传入的字段对数据进行分组
 * @param data: Array<Object> - 数据源
 * @param keys: Array<String> - 传入的字段
 * @returns {*[]}
 */
export const subgroup = function (data, keys) {
  const record = data.reduce((result, item) => {
    const sequence = getSequence(item, keys);
    if (!result[sequence]) {
      result[sequence] = {
        data: data.filter(item => getSequence(item, keys) === sequence)
      };
      keys.forEach((key) => {
        result[sequence][key] = item[key];
      })
    }
    return result
  }, {});

  function getSequence(data, keys) {
    return keys.reduce((r, key) => {
      r += data[key];
      return r;
    }, '');
  }
  return Object.values(record);
};

/**
 * 复制到粘贴板
 * @param text
 * @param success
 * @param error
 */
export const copyText = function(text, success, error) {
  if (!text) return;
  document.designMode = 'off';
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text.trim();
  document.body.appendChild(textarea);
  textarea.setAttribute('style', 'position: fixed; top: -99999px; left: -99999px;');
  textarea.setAttribute('readonly', 'readonly');
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    success && success();
  } catch(err) {
    error && error(err);
  }
  document.body.removeChild(textarea);
};
