<?php
    function snakeCaseToCamelCase($inputArray) {
    
        foreach ($inputArray as $input) {
            $inputWithSpaces = str_replace('_', ' ', $input);
            $capitalizedWords = ucwords($inputWithSpaces);
            $noSpaces = str_replace(' ', '', $capitalizedWords);
            $camelCaseString = lcfirst($noSpaces);
            echo '<pre>' . $input . '    ' . $camelCaseString . '</pre>';
        }
    }
    
?>