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
  // Adds the button to the buttonList array
  addButton(name: string, homeURL: string, searchURL: string): void {
    this.buttonList.push({
      name: name,
      homeURL: homeURL,
      searchURL: searchURL,
    });
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },
  // Removes the button from the buttonList array
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

  editButton(name: string, homeURL: string, searchURL: string): void {
    // Loops through the buttonList array and finds the button that matches the parameters
    const newButtonList = this.buttonList.map((button) => {
      if (
        button.name === name ||
        button.homeURL === homeURL ||
        button.searchURL === searchURL
      ) {
        button.name = name;
        button.homeURL = homeURL;
        button.searchURL = searchURL;
      }
      return button;
    });
    this.buttonList = newButtonList;

    // Update the button list in local storage
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },

  deleteButton(name: string, homeURL: string, searchURL: string): void {
    // Find the index of the button to delete in the button list
    const buttonIndex = this.buttonList.findIndex(
      (button) =>
        button.name === name &&
        button.homeURL === homeURL &&
        button.searchURL === searchURL,
    );

    // Remove the button from the button list
    this.buttonList.splice(buttonIndex, 1);
    console.log(this.buttonList);

    // Update the button list in local storage
    localStorage.setItem("buttonList", JSON.stringify(this.buttonList));
  },
});
