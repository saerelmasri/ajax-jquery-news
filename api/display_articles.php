<?php

include('connect.php');

$query = $conn->prepare('SELECT * FROM news ORDER BY date_created DESC');
$query->execute();
$array = $query->get_result();
$response = [];
while ($news = $array->fetch_assoc()) {
    $response[] = $news;
}
echo json_encode($response);

?>