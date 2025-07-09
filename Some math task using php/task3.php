<?php
    function isSumEqual($input) {
        foreach ($input as $inp) {
            $lenInput = strlen((string)$inp);
            
            if ($lenInput != 6) {
                echo 'Довжина ' . $inp . ' не є коректною <br>';
                continue;
            }
    
            $input1part = 0;
            $input2part = 0;
            $inpStr = (string)$inp;
    
            for ($i = 0; $i < 6; $i++) {
                $digit = (int)$inpStr[$i];
                if ($i < 3) {
                    $input1part += $digit;
                } else {
                    $input2part += $digit;
                }
            }
    
            if ($input1part == $input2part) {
                echo $inp . ' - рівні <br>';
            } else {
                echo $inp . ' - не рівні <br>';
            }
        }
    }
?>