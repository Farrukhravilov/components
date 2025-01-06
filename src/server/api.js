import util from "./util";
import query from "./query";
import server from "./server";
export default {
  login(data) {
    return server(`token`, "post", util.formData(data));
  },
  
  // Kassalar
  createKassa(data) {
    return server(`v1/checkouts`, "post", data);
  },
  updateKassa(data) {
    return server(`v1/checkouts/${data.id}`, "put", data);
  },
  getIncomes(p = query) {
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/checkouts/${p.kassa_id}/incomes?${cursor}${size}`)
  },
  kassaEntry(data) {
    return server(`v1/checkouts/entry`, "post", data)
  },
  orderInfo(p = query) {
    const order_id = p.order_id ? `&order_id=${p.order_id}` : ``;
    return server(`v1/payments/order-info?${order_id}`)
  },
  // To'lovlar
  getPayments(p = query) {
    const orders_type = p.orders_type ? `&orders_type=${p.orders_type}` : ``;
    const search = p.search ? `&title=${p.search}` : ``;
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/payments?${orders_type}${search}${cursor}${size}`)
  },
  allWorkers(p = query) {
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    const fullname = p.fullname ? `&fullname=${p.fullname}` : ``;

    return server(`v1/users?${cursor}${size}${fullname}`, 'get')
  },
  //
  getTaomlar(p = query) {
    const title = p.title ? `&title=${p.title}` : ``;
    const cursor = p.cursor ? `cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/menus?${cursor}${size}${title}`, "get");
  },
  // getProducts(p = query) {
  //   return server(`v1/products`, "get");
  //   let title = p.title ? `&title=${p.title}` : ``;
  //   return server(`v1/menus?cursor=${p.cursor}&size=${p.size}${title}`, "get");
  // },
  addMenu(data) {
    return server(`v1/menus`, "post", data);
  },
  putMenu(data) {
    return server(`v1/menus/${data.id}`, "put", data);
  },
  dlMenu(id) {
    return server(`v1/menus/${id}`, "delete");
  },
  deleteGroups(id) {
    return server(`v1/expense_groups/${id}`, "delete");
  },
  deleteTaom(id) {
    return server(`v1/products/${id}`, "delete");
  },
  getProducts(p = query) {
    let menu_id = p.menu_id ? `&menu_id=${p.menu_id}` : ``;
    return server(
      `v1/products?cursor=${p.cursor}&size=${p.size}${menu_id}`,
      "get"
    );
  },
  getKassa(p = query) {
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    const search = p.search ? `&title=${p.search}` : ``;
    const no_pagination = p.no_pagination ? `&no_pagination=${p.no_pagination}` : ``;
    return server(`v1/checkouts?${cursor}${size}${search}${no_pagination}`, "get");
  },
  // workerDetail(p = query) {
  //   const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
  //   const size = p.size ? `&size=${p.size}` : ``;
  //   return server(`v1/checkouts?${cursor}${size}`, 'get')
  // },
  workerDetail(p = query) {
    return server(`v1/user/${p.id}`, "get");
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/checkouts?${cursor}${size}`, "get");
  },
  workerDetail(id) {
    return server(`v1/user/${id}`, "get");
  },
  createWorker(data) {
    return server(`v1/user`, "post", util.formData(data));
  },
  editWorker(data, id) {
    return server(`v1/user/${id}`, "put", util.formData(data));
  },
  getGroup(p = query) {
    return server(`v1/places`, "get");
  },
  getGroupIncomes(p = query) {
    return server(`v1/expense_groups/${p.id}/incomes`, "get");
  },
  workerOrders(p = query) {
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/user/${p.id}/orders?${cursor}${size}`, "get");
  },
  workerFoods(p = query) {
    return server(
      `v1/user/order/${p.id}/foods?cursor=${p.cursor}&size=${p.size}`,
      "get"
    );
  },
  deleteWorker(id) {
    return server(`v1/user/${id}`, "delete");
  },
  updateWorker(id) {
    return server(`v1/user/${id}`, "put");
  },
  updateExpense(data) {
    return server(`v1/expense_groups/${data.id}`, "put", data);
  },
  // Joylar
  places(p = query) {
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    const search = p.search ? `&title=${p.search}` : ``;
    return server(`v1/places?${cursor}${size}${search}`, "get");
  },
  createPlaces(data) {
    return server(`v1/places`, 'post', data)
  },
  updatePlaces(data) {
    return server(`v1/places/${data.id}`, 'put', data)
  },
  removePlaces(id) {
    return server(`v1/places/${id}`, 'delete')
  },
  getPlacesTables(p = query) {
    const place_id = p.place_id ? `&place_id=${p.place_id}` : ``;
    const cursor = p.cursor ? `&cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/place/tables?${place_id}${cursor}${size}`, "get");
  },
  getExpenceGroups(p = query) {
    const title = p.title ? `&title=${p.title}` : ``;
    const cursor = p.cursor ? `cursor=${p.cursor}` : ``;
    const size = p.size ? `&size=${p.size}` : ``;
    return server(`v1/expense_groups?${cursor}${size}${title}`, "get");
  },
  createGroups(data) {
    return server(`v1/expense_groups`, "post", data);
  },
  createProducts(data) {
    return server(
      `v1/products?menu_id=${data.menu_id}`,
      "post",
      util.formData(data)
    );
  },
  updateProducts(data) {
    return server(
      `v1/products/${data.id}?menu_id=${data.menu_id}`,
      "put",
      util.formData(data)
    );
  },
  createExpenceGroup(data) {
    return server(`v1/expense_groups/payment`, "post", data);
  },
};
