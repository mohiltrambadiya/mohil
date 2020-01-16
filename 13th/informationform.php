<?php
 $fristname = $_POST["fristname"];
 $lastname=$_POST["lastname"];
 $dob=$_POST["dob"];
 $gender=$_POST["gender"];
 $email=$_POST["email"];
 $password=$_POST["password"];
 $securityquestion=$_POST["securityquestion"];
 $securityanswer=$_POST["securityanswer"];
 $address=$_POST["address"];
 $city=$_POST["city"];
 $state=$_POST["state"];
 $zipcode=$_POST["zipcode"];
 $phoneno=$_POST["phoneno"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Submited data</title>
</head>
<body>
    <table>
        <tr>
            <td>fristname</td>
            <td><?php echo $fristname; ?></td>
        </tr>
        <tr>
            <td>lastname</td>
            <td><?php echo $lastname; ?></td>
        </tr>
        <tr>
            <td>dob</td>
            <td><?php echo $dob; ?></td>
        </tr>
        <tr>
            <td>gender</td>
            <td><?php echo $gender; ?></td>
        </tr>
        <tr>
            <td>email</td>
            <td><?php echo $email; ?></td>
        </tr>
        <tr>
            <td>password</td>
            <td><?php echo $password; ?></td>
        </tr>
        <tr>
            <td>securityquestion</td>
            <td><?php echo $securityquestion; ?></td>
        </tr>
        <tr>
            <td>securityanswer</td>
            <td><?php echo $securityanswer; ?></td>
        </tr>
        <tr>
            <td>address</td>
            <td><?php echo $address; ?></td>
        </tr>
        <tr>
            <td>city</td>
            <td><?php echo $city; ?></td>
        </tr>
        <tr>
            <td>state</td>
            <td><?php echo $state; ?></td>
        </tr>
        <tr>
            <td>zipcode</td>
            <td><?php echo $zipcode; ?></td>
        </tr>
        <tr>
            <td>phoneno</td>
            <td><?php echo $phoneno; ?></td>
        </tr>
    </table>
</body>
</html>