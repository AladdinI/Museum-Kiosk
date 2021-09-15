<?php
session_start(); 
$errors = [];
$data = [];
$errorMsg='';
$email=$_POST['email'];
$password=$_POST['password'];
if (empty($email)) {
    $errors['email'] = 'Email is required.';
    $errorMsg= 'Email is required.';
}
elseif (empty($password)) {
    $errors['password'] = 'Password is required.';
    $errorMsg= 'Password is required.';
}
////////////////////////////////////////////
if (!empty($errors)) 
    {
        $data['type'] = false;
        $data['result'] = $errorMsg;
    } 
else
    {
    ////////////////////////////////////////////        
    /////////////////////////////////////////
    //			DB
    /////////////////////////////////////////
    function Exhibit_Kiosk_db_conn() {
      //////////////////////////////////////
      $hostname = "127.0.0.1";
      $username = "MicroObs";
      $password = "MicroObs123";
      $dbname = "MicroObs";
      //Connect to the database
      $connection = mysql_connect( $hostname, $username, $password );
      mysql_select_db( $dbname, $connection );
      if ( $connection->connect_error ) {
        die( "Connection failed: " . $connection->connect_error );
      } else {}
      /////////////////////////
    }
    /////////////////////////////////////////
    /////////////////////////////////////////
    function Exhibit_Kiosk_close_db_conn() {
      /////////////////////////
      /* Closing connection */
      if ( $dbh ) {
        mysql_close( $dbh );
      }
    }
    /////////////////////////////////////////////////////////////
    //			DB Ended	
    /////////////////////////////////////////////////////////////
        Exhibit_Kiosk_db_conn();
    ////////////////////////////////////////////
        $Admin_id=0;
        $query112 = "";
        $encKey = MD5( $password );
        $query112 .= "SELECT * FROM `Exhibit_Kiosk_Admins` ";
        $query112 .= "WHERE `EK_A_Email` LIKE '$email' ";
        $query112 .= "AND `EK_A_Key` LIKE '$encKey'  ";
        $query112 .= "AND (`EK_A_Status` =1  OR `EK_A_Type` =1) ";
        $result12 = mysql_query( $query112 );
        if(!$result12)
            {
                $signup_Msg = "We are experiencing problems with the database connection. (101)<br>";
            }
        else
            {
                while ( $row12 = mysql_fetch_assoc( $result12 ) ) 
                    { 
                        $Admin_id=$row12["EK_A_ID"];
                        $Admin_Venue=$row12["EK_A_Venue"];
                    }
            }
    ////////////////////////////////////////////
        Exhibit_Kiosk_close_db_conn();
    ////////////////////////////////////////////
    if($Admin_id!=0)
        {
            $_SESSION['Exhibit_Kiosk_Admin_In']=$Admin_id;
            $_SESSION['Exhibit_Kiosk_Admin_Venue']=$Admin_Venue;
        
            $data['type'] = true;
            $data['result'] = "Logging in, please wait.";
        }
    else
        {
            $data['type'] = false;
            $data['result'] ='Incorrect Email/Password Combination.';
        }
}
echo json_encode($data);
?>