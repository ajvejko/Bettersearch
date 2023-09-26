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
    this.name = "";
    this.homeURL = "";
    this.searchURL = "";
  },
  toggleButton(name: string, homeURL: string, searchURL: string): void {
    if (this.name === name) {
      this.name = "";
      this.homeURL = "";
      this.searchURL = "";
    } else {
      console.log(name, homeURL, searchURL);
      this.name = name;
      this.homeURL = homeURL;
      this.searchURL = searchURL;
    }
  },
  editButton(): void {},
});
