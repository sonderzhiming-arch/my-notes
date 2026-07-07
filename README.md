# 张志明的学习笔记

基于 [MkDocs](https://www.mkdocs.org/) + [Material](https://squidfunk.github.io/mkdocs-material/) 主题的个人学习笔记站点。

## 本地预览

```bash
source venv/bin/activate      # 激活虚拟环境
mkdocs serve                  # 启动本地服务器
```

浏览器打开 http://127.0.0.1:8000 即可预览。

## 添加新笔记

1. 在 `docs/` 对应分类目录下新建 `.md` 文件；
2. 在 `mkdocs.yml` 的 `nav` 中登记该文件；
3. 保存后 `mkdocs serve` 会自动热更新。

## 部署

push 到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 首次部署清单

- 把 `mkdocs.yml` 里的 `site_url` / `repo_url` 改成你自己的仓库地址；
- 在 GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
