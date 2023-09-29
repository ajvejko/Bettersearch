import { reactive } from "vue";
import { buttonStore } from "./buttonStores";

export const windowStore = reactive({
  AddWindow: false,
  EditWindow: false,
  EditMode: false,

  showModal(name?: string, homeURL?: string, searchURL?: string): void {
    if (!this.EditMode) {
      buttonStore.name = "";
      buttonStore.homeURL = "";
      buttonStore.searchURL = "";
      this.AddWindow = !this.AddWindow;
    } else {
      if (name && homeURL && searchURL) {
        buttonStore.name = name;
        buttonStore.homeURL = homeURL;
        buttonStore.searchURL = searchURL;
      }
      this.EditWindow = !this.EditWindow;
    }
  },

  switchEditMode(): void {
    this.EditMode = !this.EditMode;
  },
});
