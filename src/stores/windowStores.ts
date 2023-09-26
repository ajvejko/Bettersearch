import { reactive } from "vue";

export const windowStore = reactive({
  AddWindow: false,
  showAddWindow(): void {
    this.AddWindow = !this.AddWindow;
  },
});
