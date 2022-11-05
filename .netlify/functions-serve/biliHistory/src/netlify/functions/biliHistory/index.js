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

// netlify/functions/biliHistory/index.ts
var biliHistory_exports = {};
__export(biliHistory_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(biliHistory_exports);

// netlify/functions/biliHistory/doing.json
var doing_default = [
  {
    title: "\u5723\u8BDE\u4E4B\u543BSS+ plus",
    cover: "https://i0.hdslb.com/bfs/bangumi/0e2656a8ba9f754b4ac8de132a13e6c0aa188468.jpg@268w_358h.webp"
  },
  {
    title: "\u7CBE\u7075\u5B9D\u53EF\u68A6 \u65E0\u5370",
    cover: "https://i0.hdslb.com/bfs/bangumi/297063889e7836facea595b63eb6330f51904a24.jpg@220w_280h.webp"
  },
  {
    title: "\u8857\u89D2\u9B54\u65CF \u7B2C\u4E8C\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/a29f3b00a94d1b4a029054f72963cc10d98bae99.jpg@268w_358h.webp"
  },
  {
    title: "\u56DB\u8272\u6218\u8BB0 / RWBY \u7B2C\u4E00\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/21bfba22ad670f0b8162055198bcdd23780dcb0d.png@220w_280h.webp"
  },
  {
    title: "\u590F\u65E5\u91CD\u73B0",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/4b2547ffdd6f40f997454b37c0ad48624a1730d9.jpg@220w_280h.webp"
  },
  {
    title: "\u9F50\u6728\u6960\u96C4\u7684\u707E\u96BE \u7B2C\u4E8C\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/5e32e992cbb666d42b931a1ab8e3752f9d490b93.jpg@268w_358h.webp"
  },
  {
    title: "\u8DEF\u4EBA\u8D85\u80FD100 III(\u7075\u80FD\u767E\u5206\u767E \u7B2C\u4E09\u5B63)",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/f298e43fd9673abdaf86ecb30ba8197410ee3c3e.png@220w_280h.webp"
  },
  {
    title: "\u732B\u548C\u8001\u9F20\u559C\u5267\u79C0\uFF081980\uFF09",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/d716a784aad6c1d5778f82004036520520bed474.jpg@220w_280h.webp"
  },
  {
    title: "\u53F2\u52AA\u6BD4\u592A\u7A7A\u5386\u9669\u8BB0 \u7B2C\u4E00\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/31202ecba405d3682b701348c7de75f9b414739e.png@220w_280h.webp"
  },
  {
    title: "\u56FD\u738B\u6392\u540D",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/8aead7650fb3ded88f24654b7b66823169cb9a8c.png@220w_280h.webp"
  }
];

// netlify/functions/biliHistory/todo.json
var todo_default = [
  {
    title: "\u672C\u7530\u5C0F\u72FC\u4E0E\u6211",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/15de5f28590ca917a78795c40a119cb4d50a4455.png@220w_280h.webp"
  },
  {
    title: "\u5B66\u56ED\u5B64\u5C9B",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/86b4b78cd908b30a26c772e6419de5d1385b1cb3.jpg@220w_280h.webp"
  },
  {
    title: "\u5F0F\u5B88\u540C\u5B66\u4E0D\u53EA\u53EF\u7231\u800C\u5DF2",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/9918f6e67c26d6bd1ddad8dab70bcc7af3bfae9b.png@220w_280h.webp"
  }
];

// netlify/functions/biliHistory/done.json
var done_default = [
  {
    title: "\u5723\u8BDE\u4E4B\u543BSS",
    cover: "https://i0.hdslb.com/bfs/bangumi/0cf19817077713b638513b1636e4d86989bff9c7.jpg@220w_280h.webp"
  },
  {
    title: "\u98DF\u8349\u8001\u9F99\u88AB\u51A0\u4EE5\u6076\u9F99\u4E4B\u540D",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/303b4b9b3c244cd56e2c8315b985e9600714c13c.png@220w_280h.webp"
  },
  {
    title: "\u7B28\u5973\u5B69",
    cover: "https://i0.hdslb.com/bfs/bangumi/c897c607f6d2e40a18cb9656aed48ea26c252721.jpg@320w_428h.webp"
  },
  {
    title: "\u6708\u8272\u771F\u7F8E",
    cover: "https://i0.hdslb.com/bfs/bangumi/5ce66f68d54052e3a305524b9b06a76977e974fc.jpg@320w_428h.webp"
  },
  {
    title: "\u78A7\u84DD\u4E4B\u6D77",
    cover: "https://i0.hdslb.com/bfs/bangumi/7c9002f893f1a9debde1c38b860d64ef31c20d03.png@320w_428h.webp"
  },
  {
    title: "\u591A\u7F57\u7F57",
    cover: "https://i0.hdslb.com/bfs/bangumi/3fc16a667502cbff226e585eb660a96a20c7458c.png@320w_428h.webp"
  },
  {
    title: "\u5E72\u7269\u59B9\uFF01\u5C0F\u57CB",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/e7fb0d62e99b974e00e19b68e51e8b1fcdfc02d5.png@320w_428h.webp"
  },
  {
    title: "\u56DB\u6708\u662F\u4F60\u7684\u8C0E\u8A00",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/f5128c939b24909c7cb75bab51be0ee0c4d1b33a.jpg@320w_428h.webp"
  },
  {
    title: "\u5F92\u7136\u559C\u6B22\u4F60\uFF01",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/cb4dde6d68cf3a826538d84925e123a1148b779d.png@320w_428h.webp"
  },
  {
    title: "\u8F6C\u751F\u6210\u8718\u86DB\u53C8\u600E\u6837\uFF01",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/f0796e37abac25ba2aa9f23120646aaa9a3d5ea7.png@320w_428h.webp"
  },
  {
    title: "\u56E0\u4E3A\u592A\u6015\u75DB\u5C31\u5168\u70B9\u9632\u5FA1\u529B\u4E86",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/8021d3f6b0df6dbba6d32f76eb9cfe2531e166c4.png@320w_428h.webp"
  },
  {
    title: "\u6B22\u8FCE\u6765\u5230\u5B9E\u529B\u81F3\u4E0A\u4E3B\u4E49\u7684\u6559\u5BA4",
    cover: "https://i0.hdslb.com/bfs/bangumi/a79e331b7443ed5df5a2acd345dc41d598d46ff9.jpg@320w_428h.webp"
  },
  {
    title: "\u5173\u4E8E\u6211\u8F6C\u751F\u53D8\u6210\u53F2\u83B1\u59C6\u8FD9\u6863\u4E8B \u7B2C\u4E8C\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/fd492888df64bbc3b821dac5d516dbc1c2fe5f08.png@320w_428h.webp"
  },
  {
    title: "\u5173\u4E8E\u6211\u8F6C\u751F\u53D8\u6210\u53F2\u83B1\u59C6\u8FD9\u6863\u4E8B",
    cover: "https://i0.hdslb.com/bfs/bangumi/a4c0e0ccc44fe3949a734f546cf5bb07da925bad.png@268w_358h.webp"
  },
  {
    title: "\u5173\u4E8E\u6211\u8F6C\u751F\u53D8\u6210\u53F2\u83B1\u59C6\u8FD9\u6863\u4E8B \u8F6C\u751F\u53F2\u83B1\u59C6\u65E5\u8BB0",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/cac1699418451387f93572066b7e5d14d799d3cd.jpg@320w_428h.webp"
  },
  {
    title: "\u95F4\u8C0D\u8FC7\u5BB6\u5BB6",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/f50a08cc1562f2c1e933b656c00db3fcafd110e9.png@320w_428h.webp"
  },
  {
    title: "\u9F50\u6728\u6960\u96C4\u7684\u707E\u96BE\uFF08\u65E5\u64AD&\u7CBE\u9009\u7248\uFF09",
    cover: "https://i0.hdslb.com/bfs/bangumi/eb4f17335f48951945fb9da47e6ee0bc65fa2fbb.jpg@220w_280h.webp"
  },
  {
    title: "\u6253\u5DE5\u5427\uFF01\u9B54\u738B\u5927\u4EBA \u7B2C\u4E8C\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/282fdd17a5efdc226b0e0f0f077ce13d132f8646.png@268w_358h.webp"
  },
  {
    title: "\uFF24\uFF52\uFF0E\uFF33\uFF34\uFF2F\uFF2E\uFF25 \u77F3\u7EAA\u5143 \u7279\u522B\u7BC7\uFF1A\u9F99\u6C34",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/81a4c708722395b6be78a3412ecfd7dd90a71aef.png@220w_280h.webp"
  },
  {
    title: "\u8857\u89D2\u9B54\u65CF \u7B2C\u4E00\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/8fa97d1f68517724a0afcb1ca536bfe5b818e0d8.png@220w_280h.webp"
  },
  {
    title: "\u6708\u5149\u4E0B\u7684\u5F02\u4E16\u754C\u4E4B\u65C5",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/32dcc1744797502611fe14805328e8cab3e78f29.png@220w_280h.webp"
  },
  {
    title: "\u53EF\u5851\u6027\u8BB0\u5FC6",
    cover: "https://i0.hdslb.com/bfs/bangumi/3e688cd89f778968bdf6f6d9ca6f3d20b76f04ea.jpg@220w_280h.webp"
  },
  {
    title: "\u4E16\u754C\u9876\u5C16\u7684\u6697\u6740\u8005,\u8F6C\u751F\u4E3A\u5F02\u4E16\u754C\u8D35\u65CF",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/4f9b67c600242e6772072a152c48b18dba016864.png@220w_280h.webp"
  },
  {
    title: "OVERLORD",
    cover: "https://i0.hdslb.com/bfs/bangumi/b8e72ea69e57e0b7ac85d8b4d366554fd866df1a.jpg@220w_280h.webp"
  },
  {
    title: "OVERLORD \u2161",
    cover: "https://i0.hdslb.com/bfs/bangumi/851f979c8ebcc7583a43abd4b786c4e2e66b746b.jpg@220w_280h.webp"
  },
  {
    title: "OVERLORD \u2162",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/dd7a9d0a0bee32b1f43c2656398d8463d12b3069.jpg@220w_280h.webp"
  },
  {
    title: "\u5C0F\u6797\u5BB6\u7684\u9F99\u5973\u4EC6",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/c72a95c3cae82f58f8fa25facd40960aa2003d26.png@320w_428h.webp"
  },
  {
    title: "\u5C0F\u6797\u5BB6\u7684\u9F99\u5973\u4EC6 \u7B2C\u4E8C\u5B63",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/847e9dbb6876fb37a30199a5c88910704976d45b.png@220w_280h.webp"
  },
  {
    title: "\u6211\u592A\u53D7\u6B22\u8FCE\u4E86\u8BE5\u600E\u4E48\u529E",
    cover: "https://i0.hdslb.com/bfs/bangumi/b3633d2e5cafa0d048f4beef63618c92cfac4c4c.jpg@220w_280h.webp"
  },
  {
    title: "\u840C\u59BB\u98DF\u795E",
    cover: "https://i0.hdslb.com/bfs/bangumi/image/b348bb6f42d6a9603130ab15a9dccef980ba1a19.png@220w_280h.webp"
  }
];

// netlify/functions/biliHistory/index.ts
var handler = async (event, context) => {
  let jsonData = [];
  let result = [];
  let { body } = event;
  if (body) {
    let data = JSON.parse(body);
    if (data.type === 0) {
      jsonData = doing_default;
    } else if (data.type === 1) {
      jsonData = todo_default;
    } else {
      jsonData = done_default;
    }
    result = jsonData.slice(10 * (data.page - 1), 10 * (data.page - 1) + 10);
  }
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
  };
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      total: jsonData.length,
      data: result
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
