import { reactive } from "vue";
import { buttonStore } from "./buttonStores";

export const windowStore = reactive({
  AddWindow: false,
  EditWindow: false,
  EditMode: false,
  showAddModal(): void {
    buttonStore.name = "";
    buttonStore.homeURL = "";
    buttonStore.searchURL = "";
    this.AddWindow = !this.AddWindow;
  },

  showEditModal(name: string, homeURL: string, searchURL: string): void {
    buttonStore.name = name;
    buttonStore.homeURL = homeURL;
    buttonStore.searchURL = searchURL;
    this.EditWindow = !this.EditWindow;
  },

  switchEditMode(): void {
    this.EditMode = !this.EditMode;
  },
});
