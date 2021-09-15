<?php
session_start(); 
$errors = [];
$data = [];
$errorMsg='';
$Process_Response=false;
///////////////////////////////////////
///////////////////////////////////////
function Clean_Str( $Str ) {
  $Str = str_replace( "'", "&acute;", $Str );
  $Str = str_replace( "`", "&acute;", $Str );
  $Str = str_replace( "~", "", $Str );
  $Str = str_replace( "^", "", $Str );
  $Str = str_replace( "<?", "", $Str );
  $Str = str_replace( "<", "", $Str );
  $Str = str_replace( "?>", "", $Str );
  $Str = str_replace( ">", "", $Str );
  $Str = str_replace( ";", "", $Str );
  $Str = str_replace( '"', "&quot;", $Str );
  //////////////////
  return $Str;
}
///////////////////////////////////////
///////////////////////////////////////
$user_email=$_POST['user_email'];
$s_password=$_POST['s_password'];
$s_confirm_password=$_POST['s_confirm_password'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$institution=$_POST['institution'];
$Country=$_POST['Country'];
$State=$_POST['State'];
$City=$_POST['City'];
$Zip_code=$_POST['Zip_code'];
$send_me_email=$_POST['send_me_email'];
$agree_term=$_POST['agree_term'];
//////////////////////////////////////////////////////////////////////////////
$user_email=Clean_Str( $user_email );
$firstname=Clean_Str( $firstname );
$lastname=Clean_Str( $lastname );
$institution=Clean_Str( $institution );
$Country=Clean_Str( $Country );
$State=Clean_Str( $State );
$City=Clean_Str( $City );
$Zip_code=Clean_Str( $Zip_code );
$send_me_email=Clean_Str( $send_me_email );
//////////////////////////////////////////////////////////////////////////////
// Validate password strength
$uppercase = preg_match('@[A-Z]@', $s_password);
$lowercase = preg_match('@[a-z]@', $s_password);
$number    = preg_match('@[0-9]@', $s_password);
$specialChars = preg_match("/(?=^.{8,}$)((?=.*\d)|(?=.*[\W_]+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/", $s_password);
$whiteSpace = preg_match("/\s/", $s_password);
$Pass_invalid_char='';
$pos1 = strpos($s_password, '~');
$pos2 = strpos($s_password, '`');
$pos3 = strpos($s_password, "'");
$pos4 = strpos($s_password, "^");
$pos5 = strpos($s_password, "<?");
$pos6 = strpos($s_password, "<");
$pos7 = strpos($s_password, "?>");
$pos8 = strpos($s_password, ">");
$pos9 = strpos($s_password, ";");
$pos10 = strpos($s_password, '"');
///////////////////////////////////////////
if ($pos1) {$Pass_invalid_char.='~';}
elseif ($pos2) {$Pass_invalid_char.='`';}
elseif ($pos3) {$Pass_invalid_char.="'";}
elseif ($pos4) {$Pass_invalid_char.="^";}
elseif ($pos5) {$Pass_invalid_char.="<?";}
elseif ($pos6) {$Pass_invalid_char.="<";}
elseif ($pos7) {$Pass_invalid_char.="?>";}
elseif ($pos8) {$Pass_invalid_char.=">";}
elseif ($pos9) {$Pass_invalid_char.=";";}
elseif ($pos10) {$Pass_invalid_char.='"';}
///////////////////////////////////////////
if (empty($user_email)) {
    $errorMsg= 'Email is required.';
}
elseif(!empty($Pass_invalid_char)) {
   $errorMsg='Your password contains invalid characters. Please do not use any of these characters (\' ` ~ > ; " ^)';
}
elseif(!empty($whiteSpace)) {
   $errorMsg='Password should not contain any white space.';
}
elseif(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($s_password) < 8) {
   $errorMsg='Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
}
elseif (empty($s_password)) {
    $errorMsg= 'Password is required.';
}
elseif (empty($s_confirm_password)) {
    $errorMsg= 'Please confirm your Password.';
}
elseif ( $s_password != $s_confirm_password ) {
     $errorMsg= "Passwords does not Match." ;
  }
elseif (empty( $firstname )) {
 $errorMsg= "Missing First Name." ;
}
elseif (empty( $lastname )) {
 $errorMsg= "Missing Last Name." ;
}
elseif ( ( empty( $institution ) ) ) {
 $errorMsg= "Missing School / Institution." ;
}
elseif ( ( empty( $City ) ) ) {
 $errorMsg= "Missing City." ;
}
elseif ( ( empty( $Zip_code ) ) ) {
 $errorMsg= "Missing Zip code." ;
}
elseif ( ( empty( $Country ) || $Country == "Select Country" ) ) {
 $errorMsg= "Missing Country." ;
}
elseif ( ( empty( $State ) || $State == "--select--" ) ) {
 $errorMsg= "Missing State." ;
}
elseif ($agree_term=='false') {
    $errorMsg= 'You must agree to terms and conditions.';
}
////////////////////////////////////////////
if (!empty($errorMsg)) 
    {
        $data['type'] = false;
        $data['result'] = $errorMsg;
    } 
else
    {
    /**********************************************/
    $Process_Response= "Checking/Sign up for user in Database failed.";
    
    /**********************************************/
    if($Process_Response=='MOSART accepted signup')
        {
            $data['type'] = true;
            $data['result'] = "This account has not been activated yet.<br>Once you've submitted your registration, we'll send a confirmation email to the email address you gave us. This message includes a validation link which you need to click on to activate your account.<br>Unfortunately, these confirmation emails can sometimes be caught in spam filters. So, please check for the email in your spam folder and also add @cfa.harvard.edu to your safe senders list.";
        }
    else
        {
            $data['type'] = false;
            $data['result'] =$Process_Response;
        }
}

echo json_encode($data);
?>