import HomeStore from "@/stores/homeStore";
import LoginStore from "@/stores/loginStore";
let loginStore = new LoginStore();
let homeStore = new HomeStore();
const stores = {
  loginStore,
  homeStore
};
export default stores;