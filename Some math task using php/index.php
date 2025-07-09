<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Lab 8 PHP</h1>

    <?php
        include("task1.php");
        include("task2.php");
        include("task3.php");
        include("task4.php");
        include("task5.php");
        include("task6.php");
        include("task7.php");
        include("task8.php");
        include("task9.php");
        
        // ЗАВДАННЯ 1
        echo "<h2>1. Визначення чверті години</h2> <hr>";
        $minute = [10,30,48,0,59,100,-7];
        getMinuteQuater($minute);

        $time;
        echo "<br>The current time is <b>" . date("H:i:s") . "</b><br>";
        $timeArray = [
            'hour' => date("H"),
            'minute' => date("i"),
            'second' => date("s"),
        ];
        print_r($timeArray);
        echo '<br>';
        getMinuteQuater($timeArray);

        // ЗАВДАННЯ 2
        echo "<h2>2. Перевірка високосного року</h2><hr>";
        $yearsArray = [1904,1905,1932,1933,1948,1964,1965,200,2008,2016,2017,2020,2021,2024,2028];
        isLeapYear($yearsArray);

        // ЗАВДАННЯ 3
        echo '<h2>3. Перевірка рівності сум цифр </h2><hr>';
        $inputData = [123456,385934,456366,789564,1,1234567];
        isSumEqual($inputData);

        // ЗАВДАННЯ 4
        echo '<h2>4. Перетворення з snake_case в camelCase</h2><hr>';
        $inputStr = ['hello_world ', 'this_is_home_task', 'string', 'transform_string_case'];
        snakeCaseToCamelCase($inputStr);

        // ЗАВДАННЯ 5
        echo '<h2>5. Дзеркальне відображення тексту</h2><hr>';
        $inputText = ["Привіт, Світ!", "Hello, world", "Веб-технології"];
        reverseText($inputText);

        // ЗАВДАННЯ 6
        echo '<h2>6. Пошук найменшого унікального значення</h2><hr>';
        $inputArray = [1, 1, 2, 2, 3, 3] ;
        echo '<pre>Вхідний масив: <br>'; 
        print_r($inputArray);
        echo 'Найменше унікальне значення: ' . getUniqueValue($inputArray); 
        echo '</pre>';
        
        // ЗАВДАННЯ 7
        echo '<h2>7. Послідовність Фібоначчі</h2><hr>';
        $dataN = 20;
        echo 'Вхідне число n: ' . $dataN . '<br>Послідовність Фібоначчі: ';
        $fibonacciArray = generateFibonacciSequence($dataN);
        foreach ($fibonacciArray as $result) {
            echo $result . '  ';
        }

        // ЗАВДАННЯ 8
        echo '<h2>8. Відображення столиць і назв країн</h2><hr>';
        displayCapitals($ceu);

        // ЗАВДАННЯ 9
        echo '<h2>9. Створення таблиці Піфагора</h2><hr>';
        $size = 10;
        $resultTable = generatePythagoreanTable($size);
        foreach ($resultTable as $result) { 
            echo $result .' ';
        }

    ?>
</body>
</html>