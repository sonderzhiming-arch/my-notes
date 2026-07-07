// MathJax 3 配置：配合 pymdownx.arithmatex(generic) 使用
// 行内公式用 \( ... \)，行间公式用 \[ ... \] 或 $$ ... $$
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// 支持 Material 的即时加载（instant loading）后重新渲染公式
document$.subscribe(() => {
  MathJax.startup.output.clearCache();
  MathJax.typesetClear();
  MathJax.texReset();
  MathJax.typesetPromise();
});
