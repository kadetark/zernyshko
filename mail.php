<?php
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name_user']);
    $phone = htmlspecialchars($_POST['phone']);
    $comment = htmlspecialchars($_POST['comment']);

    // Настройки email
    $to = "kadet-a@mail.ru"; // Укажите ваш email
    $subject = "Новая бронь с сайта";
    $message = "Имя: $name\nТелефон: $phone\nКомментарий: $comment";
    $headers = "From: no-reply@yoursite.com\r\nContent-type: text/plain; charset=UTF-8";

    // Отправка email
    if (mail($to, $subject, $message, $headers)) {
        // Перенаправление на страницу благодарности
        header("Location: thanks.html");
        exit;
    } else {
        echo "Ошибка отправки сообщения.";
    }
}
?>
