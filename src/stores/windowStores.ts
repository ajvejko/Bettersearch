import { reactive } from "vue";
import { buttonStore } from "./buttonStores";

export const windowStore = reactive({
  AddWindow: false,
  EditWindow: false,
  CopyPasteWindow: false,
  EditMode: false,
  isFirstTime: Boolean(null),
  showAddModal(): void {
    buttonStore.name = "";
    buttonStore.homeURL = "";
    buttonStore.searchURL = "";
    this.AddWindow = !this.AddWindow;
  },

  showEditModal(
    name: string,
    homeURL: string,
    searchURL: string,
    index: number,
  ): void {
    buttonStore.name = name;
    buttonStore.homeURL = homeURL;
    buttonStore.searchURL = searchURL;
    buttonStore.index = index;
    this.EditWindow = !this.EditWindow;
  },
  switchEditMode(): void {
    this.EditMode = !this.EditMode;
  },

  showCopyPasteModal(): void {
    this.CopyPasteWindow = !this.CopyPasteWindow;
  },
});
