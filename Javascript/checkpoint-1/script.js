        //isPalindrome, countVowels, fizzBuzz(n), capitalizeWords, sumDigits
        

        // 1. palindrome
        function ispalindrome(str){

            let normal = str.lowerCase()
            let reversed = ""

            for (let i = normal.length - 1; i >= 0; i--){

                reversed = reversed + normal[i];
            }

            if (normal === reversed){
                return true
            }
            else{
                return false
            }
        }


        console.log(ispalindrome("Light"));
        console.log(ispalindrome("racecar"));
