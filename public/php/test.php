<?php
	// 클라이언트 ip 가져오기
	$ip = $_SERVER['REMOTE_ADDR'];

	// 전문생성일시
	$ediDate = date("YmdHis");

	// 상점서명키 (꼭 해당 상점키로 바꿔주세요)
	$merchantKey = "33F49GnCMS1mFYlGXisbUDzVf2ATWCl9k3R++d5hDd3Frmuos/XLx8XhXpe+LDYAbpGKZYSwtlyyLOtS/8aD7A==";

	// hash 처리
	$MerchantID = "nictest00m";
	$price = "1004";
	$str_src = $ediDate.$MerchantID.$price.$merchantKey;
	$hash_String = base64_encode(md5($str_src));
	// 가상계좌 입금 예정일 설정
	$tomorrow  = mktime(0, 0, 0, date("m")  , date("d")+1, date("Y"));
	$vDate = date("Ymd",$tomorrow);
?>
