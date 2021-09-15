<?php
/////////////////////////////////////////////////////////////
//			DB
/////////////////////////////////////////////////////////////
function Exhibit_Kiosk_db_conn() {
/////////////////////////////////////////////////////////////
  $DB_hostname = "127.0.0.1";
  $DB_username = "MicroObs";
  $DB_password = "MicroObs123";
  $DB_dbname = "MicroObs";
  //Connect to the database
  $connection = mysql_connect( $DB_hostname, $DB_username, $DB_password );
  mysql_select_db( $DB_dbname, $connection );
  if ( $connection->connect_error ) {
    die( "Connection failed: " . $connection->connect_error );
  } else {}
/////////////////////////////////////////////////////////////
}
/////////////////////////////////////////////////////////////
function Exhibit_Kiosk_close_db_conn() {
/////////////////////////////////////////////////////////////
  /* Closing connection */
  if ( $dbh ) {
    mysql_close( $dbh );
  }
}
/////////////////////////////////////////////////////////////
//			DB Ended	
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
 function CFA_generate_Location($length = 16)
  {
    $Location = "";
	$possible = "2346789abcdfghjkmnpqrtvwxyzABCDFGHJKLMNPQRTVWXYZ";
    $maxlength = strlen($possible);
	$InsertThis=rand(4, 10);
	$InsertThis1=$InsertThis+1;
    if ($length > $maxlength) {$length = $maxlength;}
    $i = 0; 
    while ($i < $length) { 

      $char = substr($possible, mt_rand(0, $maxlength-1), 1);
      if (!strstr($Location, $char)) { 
        	if($i==$InsertThis)
				{$Location .="O";}
			elseif($i==$InsertThis1)
				{$Location .="E";}
			elseif($i<$InsertThis)
				{
					$AI_t1T0 .= $char;
					$Location .= $char;
				}
			elseif($i>$InsertThis1)
				{
					$AI_t1T1 .= $char;
					$Location .= $char;
				}
        $i++;
      }
    }
	$Location .= $InsertThis;
	return array ($Location,$AI_t1T0 , $AI_t1T1);

  }
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
?>