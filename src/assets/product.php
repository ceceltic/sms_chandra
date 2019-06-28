<?php
$link=mysqli_connect("localhost","root",NULL,"chandra") or die("connection_error");

$sql="SELECT * FROM product";
$query=mysqli_query($link,$sql) or die(mysqli_error($link));
$products=array();

while($row=mysqli_fetch_assoc($query))
{
   
    array_push($products,$row); 
   $json=json_encode($products);
   
}

print_r($json);


?>