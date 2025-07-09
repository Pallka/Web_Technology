<?php
    function generatePythagoreanTable($size){
        $resultTable = [];
        $resultTable[] = "<table>";
        $resultTable[] = "<tr>";
    
        $resultTable[] = "</tr>";
        for($i = 1; $i <= $size; $i++) {
            for($j = 1; $j <= $size; $j++) {
                $resultTable[] = "<td><pre>  ".($i*$j)."</pre></td>";
            }
            $resultTable[] = "</tr>";
        }
        $resultTable[] = "</table><hr>";
        return $resultTable;
    }
?>
