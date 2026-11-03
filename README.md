# Sonder的学习笔记

基于 [MkDocs](https://www.mkdocs.org/) + [Material](https://squidfunk.github.io/mkdocs-material/) 主题的个人学习笔记站点。

## 本地预览

第一次使用先创建虚拟环境并安装依赖：

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

之后每次预览：

```bash
source venv/bin/activate      # 激活虚拟环境
mkdocs serve                  # 启动本地服务器
```

浏览器打开 http://127.0.0.1:8000 即可预览。

## 添加新笔记

1. 在 `docs/` 对应分类目录下新建 `.md` 文件；
2. 在 `mkdocs.yml` 的 `nav` 中登记该文件；
3. 保存后 `mkdocs serve` 会自动热更新。

资料列表的每一行写成 `- [文件名](files/xxx.pdf) <small>PDF</small>`，就会自动带上文件类型图标和标签。

## 切换视觉方案

`docs/stylesheets/themes/` 里有 4 套方案：`ink`（墨笺 · 书卷）、`minimal`（素白 · 极简）、`aurora`（星河 · 科技）、`candy`（糖果 · 活泼）。
把 `mkdocs.yml` 里 `extra_css` 的 `stylesheets/themes/ink.css` 换成想要的文件名即可。

## 部署

push 到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 首次部署清单

- 把 `mkdocs.yml` 里的 `site_url` / `repo_url` 改成你自己的仓库地址；
- 在 GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
