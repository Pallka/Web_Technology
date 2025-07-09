<?php
    function reverseText($texts) {
        foreach ($texts as $text) {
            $reversedText = implode('', array_reverse(mb_str_split($text)));
            echo '<pre>' . $text . '              ' . $reversedText . '</pre>';
        }
    }
?>