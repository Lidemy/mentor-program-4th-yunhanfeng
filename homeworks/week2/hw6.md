``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 一個字串放進function裡面
2. 先執行第一個for迴圈，檢查array裡面的每個數字是不是小於零，一出現小於零，則return invalid，則該function運作結束
3. 檢查完第一個for迴圈，沒有問題，沒有return invalid的話，則繼續執行下一個迴圈
4. 下一個迴圈從array的第三個數開始，檢查第三個數是否為第一個數和第二個數的加總，若不是，則return invalid，則該迴圈運作結束
5. 因此就是持續跑，檢查三是否為二漢醫的總和，四是否為前面兩個數的總和，直到跑到最後一個數，是否為前兩樹的總和，若都通過，則不會回傳任何東西，第二個迴圈結束
6. 最後回傳valid
7. 該函數為判斷這個array裡面的數值是否為費氏數列