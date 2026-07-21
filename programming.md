# JavaScript Programming Interview Questions (Basic to Medium)

Each question below is an executable HTML lab. Copy each into its own `.html` file and open in a browser.

---

## Q1. Sum of Two Numbers

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function sum() {
            var a = Number(document.getElementById("a").value);
            var b = Number(document.getElementById("b").value);
            var result = a + b;
            document.getElementById("result").innerHTML = "Sum: " + result;
        }
    </script>
</head>
<body>
    <h3>Q1. Sum of Two Numbers</h3>
    <label>Enter A:</label>
    <input type="number" id="a"><br><br>
    <label>Enter B:</label>
    <input type="number" id="b"><br><br>
    <button onclick="sum()">Calculate</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q2. Check Even or Odd

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function checkEvenOdd() {
            var num = Number(document.getElementById("num").value);
            if (num % 2 === 0) {
                document.getElementById("result").innerHTML = num + " is Even";
            } else {
                document.getElementById("result").innerHTML = num + " is Odd";
            }
        }
    </script>
</head>
<body>
    <h3>Q2. Check Even or Odd</h3>
    <label>Enter a number:</label>
    <input type="number" id="num"><br><br>
    <button onclick="checkEvenOdd()">Check</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q3. Largest of Three Numbers

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function findLargest() {
            var a = Number(document.getElementById("a").value);
            var b = Number(document.getElementById("b").value);
            var c = Number(document.getElementById("c").value);
            var largest;
            if (a >= b && a >= c) {
                largest = a;
            } else if (b >= a && b >= c) {
                largest = b;
            } else {
                largest = c;
            }
            document.getElementById("result").innerHTML = "Largest: " + largest;
        }
    </script>
</head>
<body>
    <h3>Q3. Largest of Three Numbers</h3>
    <label>Enter A:</label>
    <input type="number" id="a"><br><br>
    <label>Enter B:</label>
    <input type="number" id="b"><br><br>
    <label>Enter C:</label>
    <input type="number" id="c"><br><br>
    <button onclick="findLargest()">Find Largest</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q4. Reverse a String

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function reverseString() {
            var str = document.getElementById("str").value;
            var reversed = "";
            for (var i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            document.getElementById("result").innerHTML = "Reversed: " + reversed;
        }
    </script>
</head>
<body>
    <h3>Q4. Reverse a String</h3>
    <label>Enter a string:</label>
    <input type="text" id="str"><br><br>
    <button onclick="reverseString()">Reverse</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q5. Factorial of a Number

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function factorial() {
            var n = Number(document.getElementById("num").value);
            var result = 1;
            for (var i = 1; i <= n; i++) {
                result = result * i;
            }
            document.getElementById("result").innerHTML = "Factorial of " + n + " = " + result;
        }
    </script>
</head>
<body>
    <h3>Q5. Factorial of a Number</h3>
    <label>Enter a number:</label>
    <input type="number" id="num"><br><br>
    <button onclick="factorial()">Calculate</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q6. Check Palindrome

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function checkPalindrome() {
            var str = document.getElementById("str").value;
            var reversed = "";
            for (var i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            if (str === reversed) {
                document.getElementById("result").innerHTML = "\"" + str + "\" is a Palindrome";
            } else {
                document.getElementById("result").innerHTML = "\"" + str + "\" is NOT a Palindrome";
            }
        }
    </script>
</head>
<body>
    <h3>Q6. Check Palindrome</h3>
    <label>Enter a string:</label>
    <input type="text" id="str"><br><br>
    <button onclick="checkPalindrome()">Check</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q7. Sum of Array Elements

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function sumArray() {
            var input = document.getElementById("arr").value;
            var arr = input.split(",");
            var total = 0;
            for (var i = 0; i < arr.length; i++) {
                total += Number(arr[i]);
            }
            document.getElementById("result").innerHTML = "Sum: " + total;
        }
    </script>
</head>
<body>
    <h3>Q7. Sum of Array Elements</h3>
    <label>Enter numbers (comma separated):</label>
    <input type="text" id="arr" placeholder="1,2,3,4,5"><br><br>
    <button onclick="sumArray()">Calculate</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q8. Count Vowels in a String

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function countVowels() {
            var str = document.getElementById("str").value;
            var count = 0;
            var vowels = "aeiouAEIOU";
            for (var i = 0; i < str.length; i++) {
                if (vowels.indexOf(str[i]) !== -1) {
                    count++;
                }
            }
            document.getElementById("result").innerHTML = "Vowel count: " + count;
        }
    </script>
</head>
<body>
    <h3>Q8. Count Vowels in a String</h3>
    <label>Enter a string:</label>
    <input type="text" id="str"><br><br>
    <button onclick="countVowels()">Count</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q9. Find Min and Max in Array

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function findMinMax() {
            var input = document.getElementById("arr").value;
            var arr = input.split(",");
            var min = Number(arr[0]);
            var max = Number(arr[0]);
            for (var i = 1; i < arr.length; i++) {
                var num = Number(arr[i]);
                if (num < min) {
                    min = num;
                }
                if (num > max) {
                    max = num;
                }
            }
            document.getElementById("result").innerHTML = "Min: " + min + ", Max: " + max;
        }
    </script>
</head>
<body>
    <h3>Q9. Find Min and Max in Array</h3>
    <label>Enter numbers (comma separated):</label>
    <input type="text" id="arr" placeholder="3,7,1,9,4"><br><br>
    <button onclick="findMinMax()">Find</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q10. Fibonacci Series

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function fibonacci() {
            var n = Number(document.getElementById("num").value);
            var a = 0;
            var b = 1;
            var series = [];
            for (var i = 0; i < n; i++) {
                series.push(a);
                var next = a + b;
                a = b;
                b = next;
            }
            document.getElementById("result").innerHTML = "Series: " + series.join(", ");
        }
    </script>
</head>
<body>
    <h3>Q10. Fibonacci Series</h3>
    <label>Enter number of terms:</label>
    <input type="number" id="num"><br><br>
    <button onclick="fibonacci()">Generate</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q11. Check Prime Number

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function checkPrime() {
            var num = Number(document.getElementById("num").value);
            if (num <= 1) {
                document.getElementById("result").innerHTML = num + " is NOT Prime";
                return;
            }
            var isPrime = true;
            for (var i = 2; i <= num / 2; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                document.getElementById("result").innerHTML = num + " is Prime";
            } else {
                document.getElementById("result").innerHTML = num + " is NOT Prime";
            }
        }
    </script>
</head>
<body>
    <h3>Q11. Check Prime Number</h3>
    <label>Enter a number:</label>
    <input type="number" id="num"><br><br>
    <button onclick="checkPrime()">Check</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q12. Remove Duplicates from Array

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function removeDuplicates() {
            var input = document.getElementById("arr").value;
            var arr = input.split(",");
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                var val = arr[i].trim();
                if (unique.indexOf(val) === -1) {
                    unique.push(val);
                }
            }
            document.getElementById("result").innerHTML = "Unique: " + unique.join(", ");
        }
    </script>
</head>
<body>
    <h3>Q12. Remove Duplicates from Array</h3>
    <label>Enter numbers (comma separated):</label>
    <input type="text" id="arr" placeholder="1,2,2,3,4,4,5"><br><br>
    <button onclick="removeDuplicates()">Remove Duplicates</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q13. Bubble Sort

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function bubbleSort() {
            var input = document.getElementById("arr").value;
            var parts = input.split(",");
            var arr = [];
            for (var k = 0; k < parts.length; k++) {
                arr.push(Number(parts[k]));
            }
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            document.getElementById("result").innerHTML = "Sorted: " + arr.join(", ");
        }
    </script>
</head>
<body>
    <h3>Q13. Bubble Sort</h3>
    <label>Enter numbers (comma separated):</label>
    <input type="text" id="arr" placeholder="5,3,8,1,2"><br><br>
    <button onclick="bubbleSort()">Sort</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q14. Count Character Occurrences

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function charCount() {
            var str = document.getElementById("str").value;
            var count = {};
            for (var i = 0; i < str.length; i++) {
                var ch = str[i];
                if (count[ch]) {
                    count[ch]++;
                } else {
                    count[ch] = 1;
                }
            }
            var output = "";
            for (var key in count) {
                output += key + ": " + count[key] + ", ";
            }
            document.getElementById("result").innerHTML = "Characters: " + output;
        }
    </script>
</head>
<body>
    <h3>Q14. Count Character Occurrences</h3>
    <label>Enter a string:</label>
    <input type="text" id="str"><br><br>
    <button onclick="charCount()">Count</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q15. Swap Two Numbers Without Third Variable

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function swap() {
            var a = Number(document.getElementById("a").value);
            var b = Number(document.getElementById("b").value);
            var before = "Before: a = " + a + ", b = " + b;
            a = a + b;
            b = a - b;
            a = a - b;
            var after = "After: a = " + a + ", b = " + b;
            document.getElementById("result").innerHTML = before + "<br>" + after;
        }
    </script>
</head>
<body>
    <h3>Q15. Swap Two Numbers Without Third Variable</h3>
    <label>Enter A:</label>
    <input type="number" id="a"><br><br>
    <label>Enter B:</label>
    <input type="number" id="b"><br><br>
    <button onclick="swap()">Swap</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q16. Second Largest Number in Array

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function secondLargest() {
            var input = document.getElementById("arr").value;
            var parts = input.split(",");
            var arr = [];
            for (var k = 0; k < parts.length; k++) {
                arr.push(Number(parts[k]));
            }
            var first = -Infinity;
            var second = -Infinity;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > first) {
                    second = first;
                    first = arr[i];
                } else if (arr[i] > second && arr[i] !== first) {
                    second = arr[i];
                }
            }
            document.getElementById("result").innerHTML = "Second Largest: " + second;
        }
    </script>
</head>
<body>
    <h3>Q16. Second Largest Number in Array</h3>
    <label>Enter numbers (comma separated):</label>
    <input type="text" id="arr" placeholder="10,20,5,30,15"><br><br>
    <button onclick="secondLargest()">Find</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q17. Celsius to Fahrenheit

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function convert() {
            var celsius = Number(document.getElementById("celsius").value);
            var fahrenheit = (celsius * 9 / 5) + 32;
            document.getElementById("result").innerHTML = celsius + "°C = " + fahrenheit + "°F";
        }
    </script>
</head>
<body>
    <h3>Q17. Celsius to Fahrenheit</h3>
    <label>Enter Celsius:</label>
    <input type="number" id="celsius"><br><br>
    <button onclick="convert()">Convert</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q18. Power of a Number (without Math.pow)

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function power() {
            var base = Number(document.getElementById("base").value);
            var exponent = Number(document.getElementById("exp").value);
            var result = 1;
            for (var i = 0; i < exponent; i++) {
                result = result * base;
            }
            document.getElementById("result").innerHTML = base + " ^ " + exponent + " = " + result;
        }
    </script>
</head>
<body>
    <h3>Q18. Power of a Number</h3>
    <label>Enter Base:</label>
    <input type="number" id="base"><br><br>
    <label>Enter Exponent:</label>
    <input type="number" id="exp"><br><br>
    <button onclick="power()">Calculate</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q19. Merge Two Arrays and Sort

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function mergeAndSort() {
            var input1 = document.getElementById("arr1").value;
            var input2 = document.getElementById("arr2").value;
            var arr1 = input1.split(",");
            var arr2 = input2.split(",");
            var merged = [];
            for (var i = 0; i < arr1.length; i++) {
                merged.push(Number(arr1[i]));
            }
            for (var j = 0; j < arr2.length; j++) {
                merged.push(Number(arr2[j]));
            }
            merged.sort(function (a, b) {
                return a - b;
            });
            document.getElementById("result").innerHTML = "Merged & Sorted: " + merged.join(", ");
        }
    </script>
</head>
<body>
    <h3>Q19. Merge Two Arrays and Sort</h3>
    <label>Enter Array 1 (comma separated):</label>
    <input type="text" id="arr1" placeholder="3,1,5"><br><br>
    <label>Enter Array 2 (comma separated):</label>
    <input type="text" id="arr2" placeholder="4,2,6"><br><br>
    <button onclick="mergeAndSort()">Merge & Sort</button>
    <p id="result"></p>
</body>
</html>
```

---

## Q20. Check Anagram

```html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript">
        function checkAnagram() {
            var str1 = document.getElementById("str1").value;
            var str2 = document.getElementById("str2").value;
            if (str1.length !== str2.length) {
                document.getElementById("result").innerHTML = "NOT Anagrams (different length)";
                return;
            }
            var sorted1 = str1.toLowerCase().split("").sort().join("");
            var sorted2 = str2.toLowerCase().split("").sort().join("");
            if (sorted1 === sorted2) {
                document.getElementById("result").innerHTML = "\"" + str1 + "\" and \"" + str2 + "\" are Anagrams";
            } else {
                document.getElementById("result").innerHTML = "\"" + str1 + "\" and \"" + str2 + "\" are NOT Anagrams";
            }
        }
    </script>
</head>
<body>
    <h3>Q20. Check Anagram</h3>
    <label>Enter String 1:</label>
    <input type="text" id="str1"><br><br>
    <label>Enter String 2:</label>
    <input type="text" id="str2"><br><br>
    <button onclick="checkAnagram()">Check</button>
    <p id="result"></p>
</body>
</html>
```
