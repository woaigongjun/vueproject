// 在这里定义了一些验证规则  计划之后会和另一个文件夹  合并的

//   手机电话号码校验规则
const mobilePhoneRule = (rule, value, callback) => {
  const reg = /^\d{11}$/
  if (!reg.test(value) && value != null) {
    callback(new Error('请输入正确号码格式'))
  } else {
    callback()
  }
}

// 网址的验证规则
const websiteRule = (rule, value, callback) => {
  const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
  if (!regExp.test(value) === true && value !== '' && value != null) {
    callback(new Error('网址格式不正确'))
  } else {
    callback()
  }
}

// 网关的验证规则
const gateway = (rule, value, callback) => {
  const regExp = /[&<>]/im
  if (regExp.test(value) === true) {
    callback(new Error("请不要填写'&'.'<'.'>'字符"))
  } else {
    callback()
  }
}

export default {
  gateway,
  websiteRule,
  mobilePhoneRule
}

export const money = (rule, value, callback) => {
  const regExp = /^\d+(\.\d{1,100})?$/
  if (regExp.test(value) === false && value !== '') {
    callback(new Error('请输入正确金额格式'))
  } else {
    callback()
  }
}
export const phoneRules = (rule, value, callback) => {
  const regExp = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/
  if (regExp.test(value) === false && value !== '') {
    callback(new Error('请输入正确号码格式'))
  } else {
    callback()
  }
}

export const faxRule = (rule, value, callback) => {
  const regExp = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/
  if (regExp.test(value) === false && value !== '') {
    callback(new Error('请输入正确的传真号码格式'))
  } else {
    callback()
  }
}

// 支持邮箱校验格式

export const haveAite = (rule, value, callback) => {
  const regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (regExp.test(value) === false && value !== '') {
    callback(new Error('请输入正确的邮箱格式'))
  } else {
    callback()
  }
}
// 支持数字，不支持特殊字符及空格

export const special1 = (rule, value, callback) => {
  const regExp = /^\d+$/im
  if (regExp.test(value) === false) {
    callback(new Error('仅支持数字，不支持特殊字符'))
  } else {
    callback()
  }
}
// 拼音：支持英文，支持的特殊字符有“空格”

export const special2 = (rule, value, callback) => {
  const regExp = /^[a-zA-Z\s]*$/im
  if (regExp.test(value) === false) {
    callback(new Error('仅支持英文，支持的特殊字符有空格'))
  } else {
    callback()
  }
}

// 只能英文
export const special3 = (rule, value, callback) => {
  const regExp = /^[a-zA-Z]*$/im
  if (regExp.test(value) === false) {
    callback(new Error('仅支持英文'))
  } else {
    callback()
  }
}

// 符号：支持英文，支持全部特殊字符
export const special13 = (rule, value, callback) => {
  const regExp = /^[0-9\u4E00-\u9FA5]*$/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文'))
  } else {
    callback()
  }
}

// 英文名称/拼音简称/英文地址/英文：支持英文，支持的特殊字符有“空格”,.（）

export const special4 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[0-9\u4E00-\u9FA5·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！、-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文，特殊字符仅支持（），. 及空格'))
  } else {
    callback()
  }
}

// 银行、币种、国家名称、简写：支持中文，不支持特殊字符和空格
export const special10 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[0-9a-zA-Z·\\~`#￥%^&_+={}\[\]|<>.。”：，‘’“"':;；?*\@\/!！(),、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持中文，不支持特殊字符和空格'))
  } else {
    callback()
  }
}

// 名称：支持中文，支持的特殊字符有“空格”,.（）
export const special5 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[0-9a-zA-Z·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！、-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持中文，特殊字符仅支持（），. 及空格'))
  } else {
    callback()
  }
}

// 编码：支持数字、英文，不支持特殊字符及空格

export const special6 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[\u4E00-\u9FA5·\\~`#￥%^&_+={}\[\]|<>.。”：，‘’“"':;；?*\@\/!！(),、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文、数字，不支持特殊字符'))
  } else {
    callback()
  }
}

// 路线：支持中文、英文、数字，支持的特殊字符有“空格”,.（）

export const special7 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！、-]/im
  if (regExp.test(value) === true) {
    callback(new Error('特殊字符仅支持（），. 及空格'))
  } else {
    callback()
  }
}

// 中文地址：支持中文、英文、数字，支持的特殊字符有,.（）

export const special12 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！，,.。（）()、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('特殊字符仅支持（），.'))
  } else {
    callback()
  }
}

// 支持中文、英文、数字，支持的特殊字符有,.（）

export const special8 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！、-]/im
  if (regExp.test(value) === true) {
    callback(new Error('特殊字符仅支持（），. '))
  } else {
    callback()
  }
}

// 支持英文、数字，不支持特殊字符及空格
export const special9 = (rule, value, callback) => {
  // let regExp =/[*\\@\/!！\s+]/im
  const regExp = /[\u4E00-\u9FA5·\\~`#￥%^&_+={}\[\]|<>.。”：，‘’“"':;；?*\@\/!！(),、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文、数字，不支持特殊字符及空格'))
  } else {
    callback()
  }
}

// 只支持英文
export const english = (rule, value, callback) => {
  const regExp = /[0-9\u4E00-\u9FA5]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文'))
  } else {
    callback()
  }
}

// 只支持英文（无符号）
export const englishOnly = (rule, value, callback) => {
  const regExp = /[0-9\u4E00-\u9FA5·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！，,.。（）()、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文'))
  } else {
    callback()
  }
}

// 只支持中文
export const chinese = (rule, value, callback) => {
  const regExp = /[0-9a-zA-Z]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持中文'))
  } else {
    callback()
  }
}

// 只支持中文（无符号）
export const chineseOnly = (rule, value, callback) => {
  const regExp = /[0-9a-zA-Z·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！，,.。（）()、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持中文'))
  } else {
    callback()
  }
}

// 只支持英文和数字
export const englishNum = (rule, value, callback) => {
  const regExp = /[\u4E00-\u9FA5]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文和数字'))
  } else {
    callback()
  }
}

// 只支持英文和数字（无符号）
export const englishNumOnly = (rule, value, callback) => {
  const regExp = /[0-9a-zA-Z·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！，,.。（）()、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('仅支持英文和数字'))
  } else {
    callback()
  }
}

// 只支持数字
export const number = (rule, value, callback) => {
  const regExp = /^\d+(\.\d+)?$/
  if (regExp.test(value) === false) {
    callback(new Error('仅支持数字'))
  } else {
    callback()
  }
}

// 只支持数字（无符号）
export const numberOnly = (rule, value, callback) => {
  const regExp = /[0-9]/im
  if (regExp.test(value) !== true && value !== '') {
    callback(new Error('仅支持数字'))
  } else {
    callback()
  }
}

// 不支持特殊字符
export const special = (rule, value, callback) => {
  const regExp = /[·\\~`#￥%^&_+={}\[\]|<>。”：‘’“"':;；?*\@\/!！，,.。（）()、\s-]/im
  if (regExp.test(value) === true) {
    callback(new Error('不支持特殊字符'))
  } else {
    callback()
  }
}

// 只支持数字和字母大写
export const numberAndLitbig = (rule, value, callback) => {
  const regExp = /^[0-9A-Z]{1,}$/
  if (regExp.test(value) === false && value !== '') {
    callback(new Error('仅支持数字和字母大写'))
  } else {
    callback()
  }
}

// 非中文
export const dontChinese = (rule, value, callback) => {
  const regExp = /[\u4e00-\u9fa5]/
  if (regExp.test(value) === true) {
    callback(new Error('请输入非中文'))
  } else {
    callback()
  }
}

// 请不要输入中文
export const dontChinese2 = (rule, value, callback) => {
  const regExp = /[\u4e00-\u9fa5]/
  if (regExp.test(value) === true) {
    callback(new Error('请不要输入中文'))
  } else {
    callback()
  }
}
// 必填校验
export const validatorRequire = (rule, value, callback) => {
  if (value == "") {
    callback(new Error('必填'))
  } else {
    callback()
  }
}
//集装箱号校验 4位大写字母+7位数字
export const validatorContaNo= (rule, value, callback) => {
  const regExp = /^[A-Z]{4}[0-9]{7}$/
  if (regExp.test(value) === false) {
    callback(new Error('必须4位大写字母+7位数字组合'))
  } else {
    callback()
  }
}
// 必须为10位数字验证
export const TenNumber= (rule, value, callback) => {
  const regExp = /^\d{10}$/
  if (regExp.test(value) === false) {
    callback(new Error('必须是10位数字'))
  } else {
    callback()
  }
}
//仅支持整数
export const validatorInt=(rule,value,callback)=>{
  const regExp = /^[1-9]+[0-9]*$/
  if(value){
    if (!regExp.test(value) === true) {
      callback(new Error('请输入正整数'))
    } else {
      callback()
    }
  }else{
    callback()
  }

}
//支持小数点待多少位
export const validatorFloat=(rule,value,callback)=>{
  const regExp = /^[0-9]+(.[0-9]{1,5})?$/
  if(value){
    if (!regExp.test(value) === true) {
      callback(new Error('小数点只能5位'))
    } else {
      callback()
    }
  }else{
    callback()
  }

}
//必须是大写字母
export const EN= (rule, value, callback) => {
  const regExp = /^[A-Z]{2}$/
  if (value&&regExp.test(value) !== true) {
    callback(new Error('必须是大写字母'))
  } else {
    callback()
  }
}
// 尺寸限制4位数数字
export const FourNumber= (rule, value, callback) => {
  const regExp = /^\d{4}$/
  if (regExp.test(value) === false) {
    callback(new Error('必须是4位数字'))
  } else {
    callback()
  }
}
