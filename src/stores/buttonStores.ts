import { reactive } from "vue";

export const buttonStore = reactive({
  buttonList: [] as { name: string; homeURL: string; searchURL: string }[],
  name: "",
  homeURL: "",
  searchURL: "",
  addButton(): void {
    this.buttonList.push({
      name: this.name,
      homeURL: this.homeURL,
      searchURL: this.searchURL,
    });
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },
  toggleButton(name: string, home: string, search: string): void {
    if (this.name === name) {
      this.name = "";
      this.homeURL = "";
      this.searchURL = "";
    } else {
      this.name = name;
      this.homeURL = home;
      this.searchURL = search;
    }
  },
  editButton(): void {},
});
