<?php
    function generateFibonacciSequence($n) {
        $fibonacciResult = [];
        $a = 0;
        $b = 1;
        if ($n == 0) {
            echo 'пусто';
            return $fibonacciResult;
        }
        if ($n == 1) {
            array_push($fibonacciResult, $a);
            return $fibonacciResult;
        } 
        array_push($fibonacciResult, $a, $b);
        for ($i = 2; $i < $n; $i++) {
            $c = $a + $b;
            array_push($fibonacciResult, $c);
            $a = $b;
            $b = $c;
        }
        
        return $fibonacciResult;
    }
        
?>
