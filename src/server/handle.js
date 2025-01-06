import util from "./util";
import router from "../router/index";
import store from "@/store";
export default function handleError(error) {
  const status = error.response?.status;
  const detail = error.response?.data?.detail;
  if (error.code == "ERR_NETWORK") {
    util.toast("warning", "Internet bilan aloqa yo'q!");
  } else if (status)
    if (status == 400) {
      if (detail == "Inactive user") {
        router.push("/login");
      } else util.toast("warning", detail);
    } else if (status == 401) {
      store.dispatch("incrementRefreshToken")
      let token = store.getters?.user?.access_token;
      if (store.getters.refreshToken <= 1) {
        api.refresh_token({ token: token }).then((res) => {
          store.dispatch("setUser", res.data)
        }).catch((error) => {
          router.push("/sign-in");

        })

      }
    }
}
