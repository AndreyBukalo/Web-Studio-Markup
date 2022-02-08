// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
        

//         menuBtnRef.classList.toggle("menu-button--is-open");
//          const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;
//         menuBtnRef.setAttribute("aria-expanded", !expanded);
//         mobileMenuRef.classList.toggle("mobile-menu--is-open");
       
       
//     });
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("menu-button--is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("mobile-menu--is-open");
  });
})();