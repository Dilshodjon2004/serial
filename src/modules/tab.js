function tab(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });
  // Tabs end
}

export default tab;