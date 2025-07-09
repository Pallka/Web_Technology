<?php
    
    function getMinuteQuater($minute) {
        foreach ($minute as $mnt) {
            echo 'Вхідний текст ' . $mnt;
            if ($mnt < 0 || $mnt > 59) {
                echo ' - некоректне значення <br>';
            } elseif ($mnt <= 15) {
                echo ' - перша чверть <br>';
            } elseif ($mnt <= 30) {
                echo ' - друга чверть <br>';
            } elseif ($mnt <= 45) {
                echo ' - третя чверть <br>';
            }   else {
                echo ' - третя чверть <br>';
                //($minute <= 59 && $minute = 0)
            }
        }
    }

?>
