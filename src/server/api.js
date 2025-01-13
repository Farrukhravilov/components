import util from "./util";
import query from "./query";
import server from "./server";
export default {
  login(data) {
    return server(`auth/token`, "post", util.formData(data));
  },
  getCategory(p = query) {
    return server(`category/all`, "get");
  },
  createCategory(data) {
    return server(`category/create`, "post", data);
  },
  createCategoryItems(data) {
    return server(`categorys/create_items`, "post", data);
  },
  getTarget(p = query) {
    return server(`target/all`, "get");
  },
  createTarget(data) {
    return server(`target/create`, "post", data);
  },
  getOneTarget(p = query) {
    return server(`target/one_target`, "get");
  },
  // getOneCategory(p = query) {
  //   return server(`category/one_category`, "get");
  // },
  getOneCategory(category_id, p = query) {
    return server(`category/one_category?category_id=${category_id}`, "get");
  }
  
  // Kassalar
  // createKassa(data) {
  //   return server(`v1/checkouts`, "post", data);
  // },
  // updateKassa(data) {
  //   return server(`v1/checkouts/${data.id}`, "put", data);
  // },
  // getIncomes(p = query) {
  //   const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
  //   const size = p.size ? `&size=${p.size}` : ``;
  //   return server(`v1/checkouts/${p.kassa_id}/incomes?${cursor}${size}`)
  // },
  // kassaEntry(data) {
  //   return server(`v1/checkouts/entry`, "post", data)
  // },
  // orderInfo(p = query) {
  //   const order_id = p.order_id ? `&order_id=${p.order_id}` : ``;
  //   return server(`v1/payments/order-info?${order_id}`)
  // },
  // // To'lovlar
  // getPayments(p = query) {
  //   const orders_type = p.orders_type ? `&orders_type=${p.orders_type}` : ``;
  //   const search = p.search ? `&title=${p.search}` : ``;
  //   const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
  //   const size = p.size ? `&size=${p.size}` : ``;
  //   return server(`v1/payments?${orders_type}${search}${cursor}${size}`)
  // },
  // allWorkers(p = query) {
  //   const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
  //   const size = p.size ? `&size=${p.size}` : ``;
  //   const fullname = p.fullname ? `&fullname=${p.fullname}` : ``;

  //   return server(`v1/users?${cursor}${size}${fullname}`, 'get')
  // },
  // //
  // getTaomlar(p = query) {
  //   const title = p.title ? `&title=${p.title}` : ``;
  //   const cursor = p.cursor ? `cursor=${p.cursor}` : ``;
  //   const size = p.size ? `&size=${p.size}` : ``;
  //   return server(`v1/menus?${cursor}${size}${title}`, "get");
  // },
  // getProducts(p = query) {
  //   return server(`v1/products`, "get");
  //   let title = p.title ? `&title=${p.title}` : ``;
  //   return server(`v1/menus?cursor=${p.cursor}&size=${p.size}${title}`, "get");
  // },
};
