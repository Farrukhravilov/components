import axios from 'axios';
import baseurl from './baseurl';
import handleError from './handle';
// import store from '../store/index';
import util from './util';
export default async function server(
  endpoint = "",
  method = "get",
  data = null
) {
  let token = store.getters?.user?.access_token || '';
  let result, error;

	await axios
		.request({
			baseURL: baseurl + endpoint,
			headers: { Authorization: `Bearer ${token}` },
			method: method,
			data: data,
		})
		.then((res) => {
			result = res;
			if (method !== 'get') {
				util.toastError('success', "Amaliyot bajarildi !")
			}
		})
		.catch((err) => {
			error = err;
			handleError(err);
		})
		.finally(() => {
			// store.dispatch('setLoading', false);
		});

  return new Promise((resolve, reject) => {
    if (result) resolve(result);
    else reject(error);
  });
}
