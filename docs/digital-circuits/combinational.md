# 组合逻辑

组合逻辑电路的输出仅由**当前输入**决定，不含记忆元件。

## 基本逻辑运算

| 运算 | 符号 | 布尔表达式 |
| ---- | ---- | ---------- |
| 与   | AND  | $Y = A \cdot B$ |
| 或   | OR   | $Y = A + B$ |
| 非   | NOT  | $Y = \overline{A}$ |
| 异或 | XOR  | $Y = A \oplus B$ |

## 布尔代数定律

德摩根定律（De Morgan's Laws）是化简电路的常用工具：

$$
\overline{A \cdot B} = \overline{A} + \overline{B}, \qquad
\overline{A + B} = \overline{A} \cdot \overline{B}
$$

## 一位全加器

一位全加器计算 $A + B + C_{in}$，输出和 $S$ 与进位 $C_{out}$：

$$
S = A \oplus B \oplus C_{in}, \qquad
C_{out} = A \cdot B + C_{in} \cdot (A \oplus B)
$$

用 Verilog 描述：

```verilog
module full_adder(
    input  wire a,
    input  wire b,
    input  wire cin,
    output wire sum,
    output wire cout
);
    assign sum  = a ^ b ^ cin;
    assign cout = (a & b) | (cin & (a ^ b));
endmodule
```

!!! tip "多路选择器（MUX）"
    2 选 1 多路选择器：$Y = \overline{S}\cdot A + S \cdot B$，是构建数据通路的基本单元。
