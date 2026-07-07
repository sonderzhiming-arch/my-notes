# 排序算法

## 复杂度对比

| 算法 | 平均时间 | 最坏时间 | 空间 | 稳定性 |
| ---- | -------- | -------- | ---- | ------ |
| 快速排序 | $O(n \log n)$ | $O(n^2)$ | $O(\log n)$ | 不稳定 |
| 归并排序 | $O(n \log n)$ | $O(n \log n)$ | $O(n)$ | 稳定 |
| 冒泡排序 | $O(n^2)$ | $O(n^2)$ | $O(1)$ | 稳定 |

## 归并排序

归并排序基于**分治**思想，其递归式满足主定理：

$$
T(n) = 2\,T\!\left(\frac{n}{2}\right) + O(n) \implies T(n) = O(n \log n)
$$

Python 实现：

```python
def merge_sort(arr: list[int]) -> list[int]:
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left: list[int], right: list[int]) -> list[int]:
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:      # <= 保证稳定性
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([5, 2, 9, 1, 5, 6]))  # [1, 2, 5, 5, 6, 9]
```

!!! tip "快速排序的枢轴选择"
    随机选取枢轴（pivot）可以把「已近乎有序」输入导致的 $O(n^2)$ 最坏情况变成期望 $O(n \log n)$。
