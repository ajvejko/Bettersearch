import { reactive, ref } from "vue";

export const focusInput = ref(false);

const changeFocus = () => {
  focusInput.value = !focusInput.value;
};

export const buttonStore = reactive({
  name: "",
  homeURL: "",
  searchURL: "https://www.google.com/search?q=",
  buttonList: [] as { name: string; homeURL: string; searchURL: string }[],
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
      changeFocus();
      this.name = "";
      this.homeURL = "";
      this.searchURL = "https://www.google.com/search?q=";
    } else {
      changeFocus();
      this.name = name;
      this.homeURL = homeURL;
      this.searchURL = searchURL;
    }
  },
  editButton(): void {},
});
