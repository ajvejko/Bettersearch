import { reactive, ref } from "vue";

export const focusInput = ref(false);

export const focus = () => {
  focusInput.value = true;
};

export const blur = () => {
  focusInput.value = false;
};

export const buttonStore = reactive({
  name: "",
  homeURL: "",
  searchURL: "",
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
      blur();
      this.name = "";
      this.homeURL = "";
      this.searchURL = "";
    } else {
      focus();
      this.name = name;
      this.homeURL = homeURL;
      this.searchURL = searchURL;
    }
  },
  editButton(): void {},
});
