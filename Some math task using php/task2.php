<?php
    function isLeapYear($year) {
        foreach ($year as $y){
            echo $y . ' рік - ';
            if ($y % 4 == 0) {
                echo 'високосний (true)<br>';
            }
            else { 
                echo ' не є високосний (false)<br>';
            }
        } 
    }
?>
