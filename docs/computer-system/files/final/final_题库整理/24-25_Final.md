# Computer Systems I — Final Examination (Reconstructed by GPT)

## Part I. Multiple Choice Questions

------

### 1. Multiplier Design

A combinational multiplier multiplies two unsigned 5-bit binary numbers.

What is the maximum number of bits required to represent the product?

A. 5 bits
 B. 8 bits
 C. 9 bits
 D. 10 bits

------

### 2. BCD Representation

What is the Binary-Coded Decimal (BCD) representation of decimal number 34?

A. 00110100
 B. 0011 0100
 C. 100010
 D. 0010 0010

------

### 3. Two’s Complement

What is the 8-bit two’s complement representation of $(-35)_{10}$?

A. 11011101
 B. 11100011
 C. 11011100
 D. 00100011

------

### 4. Boolean Algebra Simplification

Simplify the Boolean function:
$$
F = A\overline{C} + ABC + AC\overline{D} + CD
$$
Which of the following is equivalent to $F$?

A. $A + CD$
 B. $A\overline{C} + AC + CD$
 C. $A + AC\overline{D} + CD$
 D. $A\overline{D} + CD$

------

### 5. Gate Cost

Consider the Boolean function:
$$
F = AB\overline{D} + B + C(B+\overline{A}D)
$$
Assume the following gate cost model:

- Each NOT gate costs 1
- Each $n$-input logic gate costs $n$

What is the total gate cost of the circuit implementation?

A. 10
 B. 12
 C. 14
 D. 16

------

### 6. Latch Invalid State

An SR latch implemented using NOR gates enters an invalid state under which input condition?

A. $S=0, R=0$
 B. $S=0, R=1$
 C. $S=1, R=0$
 D. $S=1, R=1$

------

### 7. Verilog Conditional Operator

The logic function
$$
O=\overline{S_0}\overline{S_1}I_3+\overline{S_0}S_1I_2+S_0\overline{S_1}I_1+S_0S_1I_0
$$
is equivalent to which Verilog expression using conditional (`?:`) operators?

A.

```
assign O = S0 ? (S1 ? I0 : I1) : (S1 ? I2 : I3);
```

B.

```
assign O = S1 ? (S0 ? I0 : I2) : (S0 ? I1 : I3);
```

C.

```
assign O = S0 & S1 ? I0 : I3;
```

D.

```
assign O = S0 ? I0 : I1;
```

------

### 8. RISC-V Instruction Decode

Which field in an RISC-V R-type instruction specifies the destination register?

A. opcode
 B. funct3
 C. rd
 D. rs1

------

### 9. Sequential Logic Concepts

Which of the following statements is correct?

A. A D flip-flop can be constructed using combinational circuits only.

B. Level-triggered latches usually provide better timing robustness in complex synchronous systems than edge-triggered flip-flops.

C. For the same functionality, a Moore machine generally requires more states than a Mealy machine.

D. None of the above.

------

### 10. RISC-V Instruction Format

The `jalr` instruction in RISC-V belongs to which instruction type?

A. R-type
 B. I-type
 C. S-type
 D. J-type

------

### 11. IEEE 754 Floating Point Representation

What is the IEEE 754 single-precision floating-point representation of $-17.5625$?

A. 11000001100011000000000000000000

B. 11000001100011010000000000000000

C. 01000001100011010000000000000000

D. 11000001000011010000000000000000

------

### 12. Memory Access

Suppose memory contains the following data:

| Memory Address | Stored Data |
| -------------- | ----------- |
| 0x1000         | 0x1008      |
| 0x1004         | 0x100C      |
| 0x1008         | 0x1004      |
| 0x100C         | 0x100D      |

Initially, register `R2` contains `0x0004`.

After executing:

```
lw R1, 0x1004(R2)
```

what value will be stored in `R1`?

A. 0x1004
 B. 0x1008
 C. 0x100C
 D. 0x100D

------

### 13. CPI Calculation

A single-cycle CPU supports four instruction classes: A, B, C, and D.

Their instruction frequencies are:

- A: 10%
- B: 20%
- C: 30%
- D: 40%

The CPI values of A, B, and C are:

- A: 1
- B: 4
- C: 3

After optimization, the CPI of instruction D becomes half of its original value, and the overall CPI becomes 3.

What was the original CPI of instruction D?

A. 4
 B. 5
 C. 6
 D. 8

------

### 14. Single-Cycle vs Multi-Cycle CPU

Which of the following components is necessary in a multi-cycle CPU design but not strictly necessary in a single-cycle CPU?

A. Instruction Register (IR)
 B. Program Counter (PC)
 C. Instruction Memory
 D. Multiplexer (MUX)

------

### 15. Overflow Detection

In two’s complement arithmetic, overflow occurs when:

A. Adding a positive number to a negative number.

B. The carry-out bit $c_n = 1$.

C. The sign bits of the operands are different.

D. $c_n \oplus c_{n-1} = 1$.





# Part II. Design and Analysis Problems

------

## Problem 1 (10 points)

The Boolean function $Y(A,B,C,D)$ is specified by the following truth table.

| A    | B    | C    | D    | Y    |
| ---- | ---- | ---- | ---- | ---- |
| 0    | 0    | 0    | 0    | 0    |
| 0    | 0    | 0    | 1    | 1    |
| 0    | 0    | 1    | 0    | X    |
| 0    | 0    | 1    | 1    | 1    |
| 0    | 1    | 0    | 0    | 1    |
| 0    | 1    | 0    | 1    | X    |
| 0    | 1    | 1    | 0    | 0    |
| 0    | 1    | 1    | 1    | 0    |
| 1    | 0    | 0    | 0    | X    |
| 1    | 0    | 0    | 1    | 0    |
| 1    | 0    | 1    | 0    | 0    |
| 1    | 0    | 1    | 1    | 1    |
| 1    | 1    | 0    | 0    | 1    |
| 1    | 1    | 0    | 1    | 1    |
| 1    | 1    | 1    | 0    | X    |
| 1    | 1    | 1    | 1    | 1    |

where $X$ denotes a don't-care condition.

------

### (a) Canonical Representation (3 points)

Determine:
$$
Y=\Sigma m(\cdots)
$$
and
$$
Y=\Sigma m(\cdots)+\Sigma d(\cdots)
$$
where $\Sigma d$ represents the set of don't-care minterms.

------

### (b) Karnaugh Map Minimization (4 points)

Construct the Karnaugh Map for $Y$.

Identify:

- all Prime Implicants,
- all Essential Prime Implicants,

and derive the minimum SOP (Sum-of-Products) expression.

------

### (c) Minimum POS Form (3 points)

Using the Karnaugh Map, derive the minimum POS (Product-of-Sums) expression of $Y$.



------

## Problem 2 (10 points)

Given
$$
F(A,B,C,D)
=
\Sigma m(1,3,4,11,12,13,14,15)
$$
Implement $F$ using:

- exactly two 3-to-8 decoders,
- one inverter,
- OR gates with at most four inputs.

Draw the complete logic diagram.

(10 points)



------

## Problem 3 (15 points)

A traffic light controller has three operating states:

| State Encoding | Light  |
| -------------- | ------ |
| 00             | Green  |
| 01             | Yellow |
| 11             | Red    |

An input signal $X$ is used to extend the yellow-light duration.

When $X=1$, the controller remains in the Yellow state.

The system is implemented using two D flip-flops.

------

### (a) State Table

Construct the complete state transition table.

(4 points)

------

### (b) State Diagram

Draw the corresponding state diagram.

(3 points)

------

### (c) Next-State Logic

Using Karnaugh Maps, derive the next-state equations
$$
D_1
$$
and
$$
D_0
$$
for the two flip-flops.

(5 points)

------

### (d) Logic Circuit

Draw the complete sequential circuit.

(3 points)



------

## Problem 4 (10 points)

A single-cycle processor supports the following instruction classes.

| Instruction Type | Execution Time |
| ---------------- | -------------- |
| R-type           | 750 ps         |
| Load             | 1000 ps        |
| Branch           | 875 ps         |
| I-type           | 625 ps         |
| Jump             | 600 ps         |

Assume all instruction classes occur with equal frequency.

------

### (a)

Determine the clock cycle time and the clock frequency.

(2 points)

------

### (b)

Determine the average CPI.

(2 points)

------

### (c)

Calculate the CPU execution time required to execute
$$
10^8
$$
instructions.

(3 points)

------

### (d)

Suppose the processor is redesigned so that:

- the execution time from part (c) is reduced to 80% of its original value,
- the total number of clock cycles increases by 20%.

Determine the new clock frequency.

(3 points)



------

## Problem 5 (25 points)

A processor uses a fixed-length 32-bit instruction format.

The ISA contains:

- 130 distinct instructions,
- 64 general-purpose registers.

Every instruction has exactly:

- one destination register field $rd$,
- one immediate field $imm$.

All instructions use the same format and occupy exactly one 32-bit word.

------

### (a)

Determine the minimum number of bits required for the opcode field.

(4 points)

------

### (b)

Determine the minimum number of bits required for the destination register field $rd$.

(4 points)

------

### (c)

Determine the maximum number of bits available for the immediate field.

(4 points)

------

### (d)

Assume the immediate value is interpreted as an unsigned byte address offset for memory access.

What is the maximum memory offset that can be represented?

(5 points)

------

### (e)

Assume the immediate value is represented using two's complement notation.

Determine:

- the largest representable immediate value,
- the smallest representable immediate value.

(8 points)



------

## Problem 6 (20 points)

Consider a processor with separate Instruction Memory and Data Memory.

The processor supports the following three instructions:

### Load Word

$$
lw\ ri,imm
$$

------

### Store Word

$$
sw\ ri,imm
$$

------

### Add Immediate

$$
add\ ri,imm
$$

------

### (a)

Complete the interfaces and signal connections of the Register File and Data Memory modules.

(5 points)

------

### (b)

Draw the complete datapath capable of supporting all three instructions.

(8 points)

------

### (c)

Design the control signals required for the datapath.

For each instruction:

- lw
- sw
- add

specify the value of every control signal.

Present your answer in tabular form.

(7 points)