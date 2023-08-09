<?php
// 兩個陣列
$array1 = ['獎品1', '獎品2', '獎品3', '獎品4', '獎品5', '獎品6','獎品7', '獎品8', '獎品9', '獎品10', '獎品11', '獎品12'];
$array2 = [1,2,3,4,5,6,7,8,9,10,11,12];

// 從兩個陣列中挑選資料
$data2 = $array2[array_rand($array2)];
$data1 = $array1[$data2-1];
// 構建要返回的數據陣列
$data = [
    'data1' => $data1,
    'data2' => $data2
];

// 將數據轉換為JSON格式
$jsonData = json_encode($data);

// 設置MIME類型為JSON
header('Content-type: application/json');

// 返回JSON數據
echo $jsonData;
?>