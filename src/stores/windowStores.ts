import { reactive } from "vue";
import { buttonStore } from "./buttonStores";

export const windowStore = reactive({
  AddWindow: false,
  showAddWindow(): void {
    this.AddWindow = !this.AddWindow;
    buttonStore.name = "";
    buttonStore.homeURL = "";
    buttonStore.searchURL = "";
  },
});
