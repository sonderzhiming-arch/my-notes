# RISC-V 指令编码

RISC-V 的基础整数指令集 RV32I 采用 **32 位定长编码**，共有 6 种指令格式。

## 六种指令格式

| 格式 | 用途 | 典型指令 |
| ---- | ---- | -------- |
| R 型 | 寄存器-寄存器运算 | `add` `sub` `and` |
| I 型 | 立即数运算 / 加载 | `addi` `lw` `jalr` |
| S 型 | 存储 | `sw` `sb` |
| B 型 | 条件分支 | `beq` `bne` |
| U 型 | 高位立即数 | `lui` `auipc` |
| J 型 | 无条件跳转 | `jal` |

## R 型指令字段

R 型指令由 `opcode`、`rd`、`funct3`、`rs1`、`rs2`、`funct7` 组成：

```text
 31        25 24    20 19    15 14  12 11     7 6         0
+------------+--------+--------+------+--------+-----------+
|   funct7   |  rs2   |  rs1   |funct3|   rd   |  opcode   |
+------------+--------+--------+------+--------+-----------+
     7 位       5 位     5 位    3 位    5 位       7 位
```

## 立即数拼接（I 型）

I 型指令的 12 位立即数需要做符号扩展。设指令为 $\text{inst}[31:0]$，则立即数为：

$$
\text{imm} = \text{SignExt}\big(\text{inst}[31:20]\big)
$$

对于 B 型分支指令，立即数被拆散编码，需要按位重组：

$$
\text{imm}_B = \{\, \text{inst}[31],\; \text{inst}[7],\; \text{inst}[30{:}25],\; \text{inst}[11{:}8],\; 0 \,\}
$$

最低位恒为 0，因此分支偏移量总是 2 字节对齐。

## 用代码解析一条指令

下面用 Python 手动解码 R 型指令 `add x1, x2, x3`（机器码 `0x003100B3`）：

```python
def decode_r_type(inst: int) -> dict:
    """解析一条 RV32I R 型指令"""
    return {
        "opcode": inst & 0x7F,           # [6:0]
        "rd":     (inst >> 7)  & 0x1F,   # [11:7]
        "funct3": (inst >> 12) & 0x07,   # [14:12]
        "rs1":    (inst >> 15) & 0x1F,   # [19:15]
        "rs2":    (inst >> 20) & 0x1F,   # [24:20]
        "funct7": (inst >> 25) & 0x7F,   # [31:25]
    }

fields = decode_r_type(0x003100B3)
print(fields)
# {'opcode': 51, 'rd': 1, 'funct3': 0, 'rs1': 2, 'rs2': 3, 'funct7': 0}
```

!!! warning "注意字节序"
    RISC-V 采用小端序（little-endian）存储指令，从内存读取时低地址字节是机器码的低 8 位。
