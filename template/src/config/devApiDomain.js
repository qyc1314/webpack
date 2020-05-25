/**
 * 配置开发环境和线上环境的切换
 *
 * baseUrl:域名地址
 * routerMode:路由模式
 */

let domainName = {}, //域名地址
    routerMode;//路由模式
switch (process.env.NODE_ENV) {
  case "development":
    domainName = {
      erpBanggood: "http://foreend.banggood.cn/erpBanggood",
      itemBanggood: "http://item.banggood.cn",
      productDatum: "http://foreend.banggood.cn/productDatum",//banggood-erp-product 产品资料
      newProduct: "http://foreend.banggood.cn/newProduct",    //scm-newproduct
      javaPublic: "http://foreend.banggood.cn/javaPublic",
      devManagement: "http://foreend.banggood.cn/item",
      consumableManagement: "http://foreend.banggood.cn/consumableManagement",
      whiteListManagement: "http://foreend.banggood.cn/whiteListManagement",
      unsalableManagement: "http://foreend.banggood.cn/unsalableManagement",
      supplierManagement: "http://foreend.banggood.cn/supplierManagement",
      supplierSystem: "http://foreend.banggood.cn/supplierSystem",
      purchaseNet: "http://foreend.banggood.cn/purchaseNet",
      purchaseJava: "http://foreend.banggood.cn/purchaseJava",
      documentarySystem: "http://foreend.banggood.cn/documentarySystem",
      apiBanggood: "http://foreend.banggood.cn/apiBanggood",
      supplierEwold: "http://foreend.banggood.cn/supplierEwold",
    };
    routerMode = 'hash';
    break;
  case "test":
    domainName = {
      erpBanggood: "http://erptest.banggood.cn",
      itemBanggood: "https://item.banggood.cn",
      productDatum: "http://erptest.banggood.cn",
      newProduct: "http://erptest.banggood.cn",
      javaPublic: "http://erptest.banggood.cn",
      devManagement: "http://erptest.banggood.cn",
      consumableManagement: "http://erptest.banggood.cn",
      whiteListManagement: "http://erptest.banggood.cn",
      unsalableManagement: "http://erptest.banggood.cn",
      supplierManagement: "http://erptest.banggood.cn",
      supplierSystem: "http://erptest.banggood.cn",
      purchaseNet: "http://erptest.banggood.cn",
      purchaseJava: "http://erptest.banggood.cn",
      documentarySystem: "http://erptest.banggood.cn",
      apiBanggood: "http://erptest.banggood.cn",
      supplierEwold: "http://erptest.banggood.cn",
    };
    routerMode = 'hash';
    break;
  case "beta":
    domainName = {
      erpBanggood: "https://erp.banggood.cn",
      itemBanggood: "https://item.banggood.cn",
      productDatum: "https://scmproductapi.banggood.cn",
      newProduct: "https://scmnewproduct.banggood.cn",
      javaPublic: "https://scmapi.banggood.cn",
      devManagement: "https://scmoutsource.banggood.cn",
      consumableManagement: "https://scmconsumable.banggood.cn",
      whiteListManagement: "https://apiscm.banggood.cn",
      unsalableManagement: "https://apiscm.banggood.cn",
      supplierManagement: "https://scmsupplier.banggood.cn",
      supplierSystem: "https://appapi.ewold.cn",
      purchaseNet: "https://purchaseapi.banggood.cn",
      purchaseJava: "https://scmpurchase.banggood.cn",
      documentarySystem: "https://epsfol.banggood.cn",
      apiBanggood: "https://api.banggood.cn",
      supplierEwold: "https://appapi.ewold.cn",
    };
    routerMode = 'hash';
    break;
  case "prod":
    domainName = {
      erpBanggood: "https://erp.banggood.cn",
      itemBanggood: "https://item.banggood.cn",
      productDatum: "https://scmproductapi.banggood.cn",
      newProduct: "https://scmnewproduct.banggood.cn",
      javaPublic: "https://scmapi.banggood.cn",
      devManagement: "https://scmoutsource.banggood.cn",
      consumableManagement: "https://scmconsumable.banggood.cn",
      whiteListManagement: "https://apiscm.banggood.cn",
      unsalableManagement: "https://apiscm.banggood.cn",
      supplierManagement: "https://scmsupplier.banggood.cn",
      supplierSystem: "https://appapi.ewold.cn",
      purchaseNet: "https://purchaseapi.banggood.cn",
      purchaseJava: "https://scmpurchase.banggood.cn",
      documentarySystem: "https://epsfol.banggood.cn",
      apiBanggood: "https://api.banggood.cn",
      supplierEwold: "https://appapi.ewold.cn",
    };
    routerMode = 'hash';
    break;
}

export {
  domainName,
  routerMode
};
