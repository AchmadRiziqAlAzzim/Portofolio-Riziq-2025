<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "loginwebsite_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi Gagal");
}
?>