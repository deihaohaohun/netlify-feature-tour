var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/account/index.ts
var account_exports = {};
__export(account_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(account_exports);

// netlify/functions/account/account.json
var account_default = [
  {
    name: "QQ:280",
    account: "280751922",
    password: "697@97048970.com",
    keywords: []
  },
  {
    name: "QQ:9526",
    account: "952682493",
    password: "youdou3932.com",
    keywords: []
  },
  {
    name: "WeChat",
    account: "youdou3932",
    password: "youdou048970",
    keywords: []
  },
  {
    name: "\u4E2A\u4EBA\u6240\u5F97\u7A0E",
    account: "18222023301",
    password: "youdou3932",
    keywords: ["\u4E2A\u7A0E"]
  },
  {
    name: "Google",
    account: "youdou173339@gmail.com",
    password: "YouDou048970@",
    keywords: []
  },
  {
    name: "\u7F51\u6613",
    account: "youdou173339@163.com",
    password: "YouDou3932",
    keywords: []
  },
  {
    name: "\u4E09\u79D2\u8D44\u6E90\u76D2\u5B50",
    account: "\u5F97\u597D\u597D\u6DF7",
    password: "youdou3932",
    keywords: ["\u5F00\u8F66", "\u9A7E\u7167", "\u8001\u53F8\u673A"]
  },
  {
    name: "\u54D4\u54E9\u54D4\u54E9",
    account: "18222023301",
    password: "bilibiliganbei",
    keywords: ["\u5C0F\u7834\u7AD9"]
  },
  {
    name: "\u6398\u91D1",
    account: "17695525322",
    password: "Youdou@3932",
    keywords: []
  },
  {
    name: "\u8054\u60F3",
    account: "mengxl8",
    password: "YOUdou@3932",
    keywords: ["Lenovo"]
  },
  {
    name: "ins",
    account: "17695525322",
    password: "youdou3932",
    keywords: ["instagram"]
  },
  {
    name: "\u62DB\u5546\u94F6\u884C",
    account: "6214855496177391",
    password: "280751",
    keywords: []
  },
  {
    name: "\u62DB\u5546\u94F6\u884C",
    account: "6214855496177391",
    password: "280751",
    keywords: []
  },
  {
    name: "\u7801\u4E91",
    account: "280751922@qq.com",
    password: "youdou3932",
    keywords: []
  },
  {
    name: "\u4E03\u725B\u4E91",
    account: "280751922@qq.com",
    password: "youdou3932",
    keywords: []
  },
  {
    name: "\u793E\u4FDD",
    account: "412726199402026715",
    password: "youdou048970",
    keywords: []
  },
  {
    name: "\u5C0F\u7A0B\u5E8F",
    account: "280751922",
    password: "Youdou3932",
    keywords: []
  },
  {
    name: "Microsoft",
    account: "280751922@qq.com",
    password: "233333xl",
    keywords: ["\u5FAE\u8F6F"]
  },
  {
    name: "Pixiv",
    account: "deihaohaohun",
    password: "youdou3932",
    keywords: ["p\u7AD9"]
  },
  {
    name: "Github",
    account: "280751922@qq.com",
    password: "youdou048970",
    keywords: []
  },
  {
    name: "\u5806\u7CD6",
    account: "18222023301",
    password: "youdou3932",
    keywords: ["\u58C1\u7EB8"]
  },
  {
    name: "Tumblr",
    account: "280751922@qq.com",
    password: "youdou3932com",
    keywords: ["\u6C64\u535A\u4E50", "\u5F00\u8F66", "\u8001\u53F8\u673A"]
  },
  {
    name: "Oracle",
    account: "280751922@qq.com",
    password: "YouDou048970",
    keywords: ["\u7532\u9AA8\u6587"]
  }
];

// netlify/functions/account/index.ts
var handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
  };
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(account_default)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
