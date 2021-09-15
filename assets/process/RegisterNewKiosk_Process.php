<?php
session_start();
include('EK_DB.php');
$errors = [];
$data = [];
$errorMsg='';
$kiosk_id=$_POST['kiosk_id'];
if (empty($kiosk_id)) {
    $errors['kiosk_id'] = 'Kiosk ID is required.';
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
    //////////////////////////////////////////// 
    Exhibit_Kiosk_db_conn();
    ////////////////////////////////////////////
        $R_kiosk_id=0;
        $query112 = "";
        $query112 .= "SELECT * FROM `Exhibit_Kiosk_Registered` ";
        $query112 .= "WHERE `EK_R_kiosk_id` LIKE '$kiosk_id' ";
        $query112 .= "AND `EK_R_Venue` LIKE '".$_SESSION['Exhibit_Kiosk_Admin_Venue']."'  ";
        $query112 .= "AND `EK_R_Admin` = ".$_SESSION['Exhibit_Kiosk_Admin_In']." ";
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
            $RK_Qu .= "".$_SESSION['Exhibit_Kiosk_Admin_In'].", ";
            $RK_Qu .= "'1', "; // status
            $RK_Qu .= "'2', "; // type
            $RK_Qu .= "'$kiosk_id', "; // kioskID
            $RK_Qu .= "'".$_SESSION['Exhibit_Kiosk_Admin_Venue']."', "; // Venue
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
}
echo json_encode($data);
?>