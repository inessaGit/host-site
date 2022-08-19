/*
https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
https://leetcode.com/problems/validate-ip-address/solution/

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Leading zeros (e.g. 01.02.03.04) are considered invalid
====Important regex number range
https://www.regextutorial.org/regex-for-numbers-and-ranges.php
the range [0-255] will match 0,1,2,5. 
First is the range 0-2 which is in a character class will match 0,1,2 
and 5 written two times, will match 5.

  String chunkIPv4 = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
There are few main ways to solve it:
- Regex (i.e. regular expression). Less performing one, though it's a good way to demonstrate your knowledge of regex.
- Divide and Conquer, the simplest one.
- -- break ipv4 into 4 chunks 
----- check that each chunk has only 0-255 nums AND and there is no leading zeros.
*/

