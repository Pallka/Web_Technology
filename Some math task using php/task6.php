<?php
    function getUniqueValue($input) {
        if (empty($input)) {
            return 0;
        }
    
        $counts = array_count_values($input);
    
        $uniqueValues = array_filter($counts, function($count) {
            return $count === 1;
        });
    
        if (empty($uniqueValues)) {
            return 0;
        }
    
        return min(array_keys($uniqueValues));
    }
?>
