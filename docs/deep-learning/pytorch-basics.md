# PyTorch 入门

## 张量与自动求导

PyTorch 的核心是 `Tensor`，它类似 NumPy 数组，但支持 GPU 加速和自动求导。

```python
import torch

# 创建需要梯度的张量
x = torch.tensor([2.0], requires_grad=True)
y = x ** 2 + 3 * x + 1     # y = x^2 + 3x + 1

y.backward()               # 反向传播
print(x.grad)              # dy/dx = 2x + 3 = 7.0
```

上面计算的梯度对应导数：

$$
\frac{\mathrm{d}y}{\mathrm{d}x} = 2x + 3 \;\Big|_{x=2} = 7
$$

## 一个最小训练循环

以线性回归为例，用梯度下降最小化均方误差损失：

$$
\mathcal{L} = \frac{1}{N} \sum_{i=1}^{N} \left( \hat{y}_i - y_i \right)^2
$$

```python
import torch
import torch.nn as nn

model = nn.Linear(1, 1)
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

x = torch.randn(100, 1)
y = 3 * x + 2 + 0.1 * torch.randn(100, 1)

for epoch in range(200):
    pred = model(x)                 # 前向
    loss = criterion(pred, y)       # 计算损失

    optimizer.zero_grad()           # 清空上一步梯度
    loss.backward()                 # 反向传播
    optimizer.step()                # 更新参数

    if (epoch + 1) % 50 == 0:
        print(f"epoch {epoch+1:3d}  loss {loss.item():.4f}")
```

!!! warning "别忘了 zero_grad"
    PyTorch 默认会累加梯度，每次迭代前必须调用 `optimizer.zero_grad()`，否则梯度会不断叠加导致训练发散。

!!! tip "切换设备"
    用 `model.to("cuda")` 和 `x.to("cuda")` 把模型和数据搬到 GPU；两者必须在同一设备上。
