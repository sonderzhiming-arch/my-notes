// MathJax 3 配置：配合 pymdownx.arithmatex(generic) 使用
// 写法：行内 $...$ 或 \( ... \)，行间 $$ ... $$ 或 \[ ... \]（arithmatex 会统一转换）
// MathJax 约 1 MB，只有页面里真的有公式时才去加载，其余页面不加载
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
  },
  startup: {
    typeset: false // 由下面的代码统一触发排版
  }
};

const MATHJAX_SRC = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
let mathjaxReady = null;

function loadMathJax() {
  if (!mathjaxReady) {
    mathjaxReady = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = MATHJAX_SRC;
      script.async = true;
      // 脚本加载完还要等 MathJax 初始化结束，才能调用排版接口
      script.onload = () => MathJax.startup.promise.then(resolve, reject);
      script.onerror = () => {
        mathjaxReady = null; // 下次换页时可以重试
        reject(new Error("MathJax 加载失败：" + MATHJAX_SRC));
      };
      document.head.appendChild(script);
    });
  }
  return mathjaxReady;
}

// document$ 由 Material 提供：首次打开和即时加载（instant loading）换页时都会触发
document$.subscribe(async () => {
  if (!document.querySelector(".arithmatex")) return;
  try {
    await loadMathJax();
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    await MathJax.typesetPromise();
  } catch (error) {
    console.warn(error);
  }
});
