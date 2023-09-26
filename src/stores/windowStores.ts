import { reactive } from "vue";

export const windowStore = reactive({
  AddWindow: false,
  showAddWindow() {
    this.AddWindow = !this.AddWindow;
  },
});
