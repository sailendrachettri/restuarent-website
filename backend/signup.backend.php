<?php
	include("index.html");
	require ("./database-backend.php");

	if(isset($_POST["submit"]))
	{
		$fullname=$_POST["fullname"];
		$rollno=$_POST["email"];
		$dept=$_POST["password"];

		// for production use
		$sql="INSERT INTO user(fullname,email,password) values('$fullname','$email','$password')";
        
		if(mysqli_query($conn,$sql))
		{
			echo "<script>alert('Recorded added sucesfully'); window.location.href='index.html';</script>";
		}
		else
		{
			echo "<script>alert('Recorded cration failed , try again'); window.location.href='index.html';</script>";		
		} 

	}

?>