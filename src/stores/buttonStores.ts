import { reactive } from "vue";

export const buttonStore = reactive({
  buttonList: [] as { name: string; homeURL: string; searchURL: string }[],
  name: "",
  homeURL: "",
  searchURL: "",
  addButton() {
    this.buttonList.push({
      name: this.name,
      homeURL: this.homeURL,
      searchURL: this.searchURL,
    });
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },
  toggleButton() {},
  editButton() {},
});
