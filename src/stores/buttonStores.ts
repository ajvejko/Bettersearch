import { reactive, ref } from "vue";

export const focusInput = ref(false);

const changeFocus = () => {
  focusInput.value = !focusInput.value;
};

export const buttonStore = reactive({
  name: "",
  homeURL: "",
  searchURL: "https://www.google.com/search?q=",
  index: -1,
  buttonList: [] as {
    name: string;
    homeURL: string;
    searchURL: string;
    index: number;
  }[],
  // Adds the button to the buttonList array
  addButton(name: string, homeURL: string, searchURL: string): void {
    this.buttonList.push({
      name: name,
      homeURL: homeURL,
      searchURL: searchURL,
      index: this.buttonList.length,
    });
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },

  // Toggles the button in the buttonList array
  toggleButton(
    name: string,
    homeURL: string,
    searchURL: string,
    index: number,
  ): void {
    if (this.index === index) {
      changeFocus();
      this.name = "";
      this.homeURL = "";
      this.searchURL = "https://www.google.com/search?q=";
      this.index = -1;
    } else {
      changeFocus();
      this.name = name;
      this.homeURL = homeURL;
      this.searchURL = searchURL;
      this.index = index;
    }
  },
  // Edits the button in the buttonList array
  editButton(
    name: string,
    homeURL: string,
    searchURL: string,
    index: number,
  ): void {
    // Loops through the buttonList array and finds the button that matches the parameters
    const newButtonList = this.buttonList.map((button) => {
      if (button.index === this.index) {
        button.name = name;
        button.homeURL = homeURL;
        button.searchURL = searchURL;
        console.log(
          "index of edited button: " + button.index,
          "index of passed button: " + buttonStore.index,
        );
      }
      return button;
    });
    this.buttonList = newButtonList;
    console.log(index);

    // Update the button list in local storage
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },

  // Removes the button from the buttonList array
  deleteButton(): void {
    if (this.index !== -1) {
      // Remove the button from the button list
      this.buttonList.splice(this.index, 1);
      // Update the button list in local storage
      localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
      this.index = -1;
    }
  },
});
