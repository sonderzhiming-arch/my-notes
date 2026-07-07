# Transformer 架构

Transformer 完全基于**注意力机制**，摒弃了循环与卷积结构，是现代大语言模型的基石。

## 缩放点积注意力

给定查询 $Q$、键 $K$、值 $V$，注意力输出为：

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left( \frac{Q K^{\top}}{\sqrt{d_k}} \right) V
$$

其中 $\sqrt{d_k}$ 是缩放因子，用于防止点积过大导致 softmax 梯度消失。

## 多头注意力

多头注意力把表示拆成 $h$ 个子空间并行计算，再拼接：

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)\, W^O
$$

$$
\text{head}_i = \text{Attention}(Q W_i^Q,\; K W_i^K,\; V W_i^V)
$$

## PyTorch 实现自注意力

```python
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q, k, v, mask=None):
    d_k = q.size(-1)
    scores = q @ k.transpose(-2, -1) / (d_k ** 0.5)  # (B, T, T)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float("-inf"))
    attn = F.softmax(scores, dim=-1)
    return attn @ v                                  # (B, T, d_v)

# 示例：batch=1, 序列长度=4, 维度=8
q = k = v = torch.randn(1, 4, 8)
out = scaled_dot_product_attention(q, k, v)
print(out.shape)   # torch.Size([1, 4, 8])
```

## 位置编码

由于注意力本身对顺序不敏感，需要注入位置信息。原论文使用正弦位置编码：

$$
PE_{(pos,\, 2i)} = \sin\!\left( \frac{pos}{10000^{2i/d}} \right), \quad
PE_{(pos,\, 2i+1)} = \cos\!\left( \frac{pos}{10000^{2i/d}} \right)
$$

!!! note "因果掩码"
    在解码器（如 GPT）中，用上三角掩码把未来位置的注意力分数设为 $-\infty$，保证自回归生成时只能看到过去的 token。

!!! tip "延伸阅读"
    原始论文：《Attention Is All You Need》(Vaswani et al., 2017)。
