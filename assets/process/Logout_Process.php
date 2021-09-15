<?php
session_start(); 
$errorMsg='';
if ($_SESSION['Exhibit_Kiosk_Admin_In']!=0) {
    $_SESSION['Exhibit_Kiosk_Admin_In']=0;
    $_SESSION['Exhibit_Kiosk_Admin_Venue']='';
    $data['type'] = true;
    $data['result'] = "Logging out, please wait.";
}
elseif (empty($password)) {
    $data['type'] = false;
    $data['result'] = "Failed to logout.";
}
////////////////////////////////////////////
echo json_encode($data);
////////////////////////////////////////////
?>