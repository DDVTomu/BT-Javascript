/**
 * Bài tập 1: Tính lương nhân viên
 * Input:
 * Tạo biến luong = số lương lấy từ ô nhập
 * Tạo biến ngay = số ngày làm lấy từ ô nhập
 *
 * Process:
 * Tạo biến result = Lương 1 ngày * số ngày làm
 * result1 = luong * ngay
 *
 * Ouput
 * Hiển thị lương nhân viên lấy từ biến result
 */

var btnBT1 = document.getElementById("btnBT1");

btnBT1.onclick = function () {
  var luong = document.getElementById("numLuong").value * 1;
  var ngay = document.getElementById("numNgay").value * 1;

  var result = luong * ngay;
  console.log(result);
  document.getElementById("resultBT1").innerHTML = result;
};

/**
 * Bài tập 2: Tính giá trị trung bình 5 số thực
 * Input:
 * tạo biến num1 = số thực lấy từ ô nhập 1
 * tạo biến num2 = số thực lấy từ ô nhập 2
 * tạo biến num3 = số thực lấy từ ô nhập 3
 * tạo biến num4 = số thực lấy từ ô nhập 4
 * tạo biến num5 = số thực lấy từ ô nhập 5
 *
 * Process:
 * Tạo biến result2 = (tổng 5 số thực) / 5
 *  result2 = (num1 + num2 + num3 + num4 + num5) / 5
 *
 * Ouput
 * Hiển thị giá trị trung bình lấy từ biến result
 */

var btnBT2 = document.getElementById("btnBT2");

btnBT2.onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;

  var result = (num1 + num2 + num3 + num4 + num5) / 5;
  document.getElementById("resultBT2").innerHTML = result;
};

/**
 * Bài tập 3: Quy đổi tiền
 * Input:
 * tạo biến moneyVND = 23500
 * tạo biến moneyUSD = số thực lấy từ ô nhập
 *
 * Process:
 * Áp dụng bài toán quy dổi
 * moneyVND = moneyVND * moneyUSD
 *
 * Ouput
 * Hiển thị số tiền VND lấy từ moneyVND
 */

var btnBT3 = document.getElementById("btnBT3");
var moneyVND = 23500;
btnBT3.onclick = function () {
  var moneyUSD = document.getElementById("numUSD").value * 1;
  moneyVND = moneyVND * moneyUSD;
  document.getElementById("resultBT3").innerHTML = moneyVND;
};

/**
 * Bài tập 4: Diện tích và chu vi hình chữ nhật
 * Input:
 * tạo biến inputCD = chiều dài lấy từ ô nhập
 * tạo biến inputCR = chiều rộng lấy từ ô nhập
 *
 * Process:
 * Áp dụng bài toán quy dổi
 * tạo biến resultDT = inputCD * inputCR
 * tạo biến resultCV = (inputCD + inputCR) * 2
 * Ouput
 * Hiển thị kết quả diện tích lấy từ ô nhập resultDT và chu vi lấy từ ô nhập resultCV
 */

var btnBT4 = document.getElementById("btnBT4");
btnBT4.onclick = function () {
  var inputCD = document.getElementById("numCD").value * 1;
  var inputCR = document.getElementById("numCR").value * 1;
  var resultDT = inputCD * inputCR;
  var resultCV = (inputCD + inputCR) * 2;

  document.getElementById("resultBT4").innerHTML =
    "Diên tích: " + resultDT + " Chu vi: " + resultCV;
};

/**
 * Bài tập 5: Tính tổng 2 ký số
 * Input:
 * tạo biến so = 2 ký số lấy từ ô nhập
 * Process:
 * tạo biến lấy số hàng đơn vị numDV = so % 10
 * tạo biến lấy số hàng chục numCH = so / 10
 * Áp dụng tính tổng
 * result = numDV + numCH
 * Ouput
 * Hiển thị kết quả tổng = result
 */
var btnBT5 = document.getElementById("btnBT5");
btnBT5.onclick = function () {
  var so = document.getElementById("numSO").value * 1;

  var numDV = (so % 10);
  var numCH = Math.floor(so / 10);
  var result = numDV + numCH;

  document.getElementById("resultBT5").innerHTML = result
};