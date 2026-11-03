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

## 样式

站点用「墨笺」书卷风：`docs/stylesheets/extra.css` 管布局，`docs/stylesheets/ink.css` 管配色、字体和细节（含深色模式）。
首页和课程页上的资料数量是手写的，增删资料后记得一起改：列表页开头的「共 N 份资料」、课程页的分类卡片、首页的课程卡片和总数。

## 部署

push 到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 首次部署清单

- 把 `mkdocs.yml` 里的 `site_url` / `repo_url` 改成你自己的仓库地址；
- 在 GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
