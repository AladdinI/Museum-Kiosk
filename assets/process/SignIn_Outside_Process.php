<?php
////////////////////////////////////////////
include('EK_DB.php');
////////////////////////////////////////////
session_start(); 
$errors = [];
$data = [];
$errorMsg='';
$email=$_POST['email'];
$password=$_POST['password'];
$SignIn_Kiosk_ID=$_POST['SignIn_Kiosk_ID'];
if (empty($email)) {
    $errors['email'] = 'Email is required.';
    $errorMsg= 'Email is required.';
}
elseif (empty($password)) {
    $errors['password'] = 'Password is required.';
    $errorMsg= 'Password is required.';
}
elseif (empty($SignIn_Kiosk_ID)) {
    $errors['SignIn_Kiosk_ID'] = 'Kiosk ID is required.';
    $errorMsg= 'Kiosk ID is required.';
}
////////////////////////////////////////////
if (!empty($errors)) 
    {
        $data['type'] = false;
        $data['result'] = $errorMsg;
    } 
else
    {
    
        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////
        Exhibit_Kiosk_db_conn();
        /////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////
        $R_kiosk_id=0;
        $query112 = "";
        $query112 .= "SELECT * FROM `Exhibit_Kiosk_Registered` ";
        $query112 .= "WHERE `EK_R_kiosk_id` LIKE '$SignIn_Kiosk_ID' ";
        $query112 .= "AND `EK_R_Venue` LIKE '$Admin_Venue'  ";
        $query112 .= "AND `EK_R_Admin` = ".$Admin_id." ";
        $query112 .= "AND (`EK_R_Status` =1  OR `EK_R_Type` =1) ";
        $result12 = mysql_query( $query112 );
        if(!$result12)
            {
                $signup_Msg = "We are experiencing problems with the database connection. (102)<br>";
            }
        else
            {
                while ( $row12 = mysql_fetch_assoc( $result12 ) ) 
                    { 
                        $R_kiosk_id=$row12["EK_R_ID"];
                    }
            }
    ////////////////////////////////////////////
    if($R_kiosk_id!=0)
        {
        
            $data['type'] = false;
            $data['result'] ='This Kiosk id has already been registered in our system.';
        }
    else if($R_kiosk_id==0)
        {
            list ($rAnd_Act, $x_path, $y_path) = CFA_generate_Location();
            $RK_Qu = "";
            $RK_Qu .= "INSERT INTO  `Exhibit_Kiosk_Registered` ";
            $RK_Qu .= "VALUES (NULL,";
            $RK_Qu .= "".$Admin_id.", ";
            $RK_Qu .= "'1', "; // status
            $RK_Qu .= "'2', "; // type
            $RK_Qu .= "'$SignIn_Kiosk_ID', "; // kioskID
            $RK_Qu .= "'$Admin_Venue', "; // Venue
            $RK_Qu .= "'$rAnd_Act', "; // CFA Key
            $RK_Qu .= "NOW(), "; //
            $RK_Qu .= "NOW() "; //
            $RK_Qu .= ")";
            $RK_result = mysql_query( $RK_Qu );
            if(!$RK_result)
                {
                    $data['type'] = false;
                    $data['result'] ='Error (103) Please contact system Adminstrator.';
                }
            else
            {
                $data['type'] = true;
                $data['result'] = "Registering Kiosk, please wait.";
            }
        }
    else
        {
            $data['type'] = false;
            $data['result'] ='Error (105) Please contact system Adminstrator.';
        }
    ////////////////////////////////////////////
        Exhibit_Kiosk_close_db_conn();
    ////////////////////////////////////////////
    if($Admin_id!=0 && $data['type']==true)
        {
            $_SESSION['Exhibit_Kiosk_Admin_In']=$Admin_id;
            $_SESSION['Exhibit_Kiosk_Admin_Venue']=$Admin_Venue;
            $data['type'] = true;
            $data['Kiosk_ID'] = $SignIn_Kiosk_ID;
            $data['CFA_Credential'] = $rAnd_Act;       
            $data['result'] = "Logging in, please wait.";
        }
    else if($data['type']==false)
        {   
            
        }
    else
        {
            $data['type'] = false;
            $data['Kiosk_ID'] = $SignIn_Kiosk_ID;
            $data['result'] ='Incorrect Email/Password Combination.';
        }
}
echo json_encode($data);
?>