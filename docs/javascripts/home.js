// 首页 Hero 里的大搜索框：点击（或按回车 / 空格）后打开站内搜索，并把光标放进输入框
// Material 只会给顶栏自带的搜索按钮做聚焦，这里补上
// document$ 由 Material 提供：首次打开和即时加载换页时都会触发
document$.subscribe(() => {
  const trigger = document.querySelector(".hero__search");
  if (!trigger) return;

  const focusSearch = () => {
    // 等 Material 打开搜索层后再聚焦
    requestAnimationFrame(() => {
      const input = document.querySelector(".md-search__input");
      if (input) input.focus();
    });
  };

  trigger.addEventListener("click", focusSearch);
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trigger.click();
    }
  });
});
