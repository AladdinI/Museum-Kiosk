// JavaScript Document
//////////////////////////////////////////////////////////////////////////////////////////////
/** 
 * 
 * Version       7.0
 * Author     	 Alaalden Ibrahim <aibrahim@cfa.harvard.edu>
 * Date           March 09 2010
 * DOCUMENTATION
 * =============
 * --------------------------------------------------------------------------
 * 
 * --------------------------------------------------------------------------
 */
var postState = '';
var postCountry = '';
var SetState = '';
var SetCountry = '';
/////////////////////////////
var post_Institution_State = '';
var post_Institution_Country = '';
var Set_Institution_State = '';
var Set_Institution_Country = '';
/////////////////////////////
// State table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var state = '\
Afghanistan:Badakhshan:Badakhshan|\
Afghanistan:Badghis:Badghis|\
Afghanistan:Baghlan:Baghlan|\
Afghanistan:Balkh:Balkh|\
Afghanistan:Bamian:Bamian|\
Afghanistan:Daykondi:Daykondi|\
Afghanistan:Farah:Farah|\
Afghanistan:Faryab:Faryab|\
Afghanistan:Ghazni:Ghazni|\
Afghanistan:Ghowr:Ghowr|\
Afghanistan:Helmand:Helmand|\
Afghanistan:Herat:Herat|\
Afghanistan:Jowzjan:Jowzjan|\
Afghanistan:Kabul:Kabul|\
Afghanistan:Kandahar:Kandahar|\
Afghanistan:Kapisa:Kapisa|\
Afghanistan:Khost:Khost|\
Afghanistan:Konar:Konar|\
Afghanistan:Kondoz:Kondoz|\
Afghanistan:Laghman:Laghman|\
Afghanistan:Lowgar:Lowgar|\
Afghanistan:Nangarhar:Nangarhar|\
Afghanistan:Nimruz:Nimruz|\
Afghanistan:Nurestan:Nurestan|\
Afghanistan:Oruzgan:Oruzgan|\
Afghanistan:Paktia:Paktia|\
Afghanistan:Paktika:Paktika|\
Afghanistan:Panjshir:Panjshir|\
Afghanistan:Parvan:Parvan|\
Afghanistan:Samangan:Samangan|\
Afghanistan:Sar-e Pol:Sar-e Pol|\
Afghanistan:Takhar:Takhar|\
Afghanistan:Vardak:Vardak|\
Afghanistan:Zabol:Zabol|\
Albania:Berat:Berat|\
Albania:Dibres:Dibres|\
Albania:Durres:Durres|\
Albania:Elbasan:Elbasan|\
Albania:Fier:Fier|\
Albania:Gjirokastre:Gjirokastre|\
Albania:Korce:Korce|\
Albania:Kukes:Kukes|\
Albania:Lezhe:Lezhe|\
Albania:Shkoder:Shkoder|\
Albania:Tirane:Tirane|\
Albania:Vlore:Vlore|\
Algeria:Adrar:Adrar|\
Algeria:Ain Defla:Ain Defla|\
Algeria:Ain Temouchent:Ain Temouchent|\
Algeria:Alger:Alger|\
Algeria:Annaba:Annaba|\
Algeria:Batna:Batna|\
Algeria:Bechar:Bechar|\
Algeria:Bejaia:Bejaia|\
Algeria:Biskra:Biskra|\
Algeria:Blida:Blida|\
Algeria:Bordj Bou Arreridj:Bordj Bou Arreridj|\
Algeria:Bouira:Bouira|\
Algeria:Boumerdes:Boumerdes|\
Algeria:Chlef:Chlef|\
Algeria:Constantine:Constantine|\
Algeria:Djelfa:Djelfa|\
Algeria:El Bayadh:El Bayadh|\
Algeria:El Oued:El Oued|\
Algeria:El Tarf:El Tarf|\
Algeria:Ghardaia:Ghardaia|\
Algeria:Guelma:Guelma|\
Algeria:Illizi:Illizi|\
Algeria:Jijel:Jijel|\
Algeria:Khenchela:Khenchela|\
Algeria:Laghouat:Laghouat|\
Algeria:Muaskar:Muaskar|\
Algeria:Medea:Medea|\
Algeria:Mila:Mila|\
Algeria:Mostaganem:Mostaganem|\
Algeria:M Sila:M Sila|\
Algeria:Naama:Naama|\
Algeria:Oran:Oran|\
Algeria:Ouargla:Ouargla|\
Algeria:Oum el Bouaghi:Oum el Bouaghi|\
Algeria:Relizane:Relizane|\
Algeria:Saida:Saida|\
Algeria:Setif:Setif|\
Algeria:Sidi Bel Abbes:Sidi Bel Abbes|\
Algeria:Skikda:Skikda|\
Algeria:Souk Ahras:Souk Ahras|\
Algeria:Tamanghasset:Tamanghasset|\
Algeria:Tebessa:Tebessa|\
Algeria:Tiaret:Tiaret|\
Algeria:Tindouf:Tindouf|\
Algeria:Tipaza:Tipaza|\
Algeria:Tissemsilt:Tissemsilt|\
Algeria:Tizi Ouzou:Tizi Ouzou|\
Algeria:Tlemcen:Tlemcen|\
Andorra:Andorra la Vella:Andorra la Vella|\
Andorra:Canillo:Canillo|\
Andorra:Encamp:Encamp|\
Andorra:Escaldes-Engordany:Escaldes-Engordany|\
Andorra:La Massana:La Massana|\
Andorra:Ordino:Ordino|\
Andorra:Sant Julia de Loria:Sant Julia de Loria|\
Angola:Bengo:Bengo|\
Angola:Benguela:Benguela|\
Angola:Bie:Bie|\
Angola:Cabinda:Cabinda|\
Angola:Cuando Cubango:Cuando Cubango|\
Angola:Cuanza Norte:Cuanza Norte|\
Angola:Cuanza Sul:Cuanza Sul|\
Angola:Cunene:Cunene|\
Angola:Huambo:Huambo|\
Angola:Huila:Huila|\
Angola:Luanda:Luanda|\
Angola:Lunda Norte:Lunda Norte|\
Angola:Lunda Sul:Lunda Sul|\
Angola:Malanje:Malanje|\
Angola:Moxico:Moxico|\
Angola:Namibe:Namibe|\
Angola:Uige:Uige|\
Angola:Zaire:Zaire|\
Antigua:Barbuda:Barbuda|\
Antigua:Redonda:Redonda|\
Antigua:Saint George:Saint George|\
Antigua:Saint John:Saint John|\
Antigua:Saint Mary:Saint Mary|\
Antigua:Saint Paul:Saint Paul|\
Antigua:Saint Peter:Saint Peter|\
Antigua:Saint Philip:Saint Philip|\
Argentina:Buenos Aires:Buenos Aires|\
Argentina:Buenos Aires Capital:Buenos Aires Capital|\
Argentina:Catamarca:Catamarca|\
Argentina:Chaco:Chaco|\
Argentina:Chubut:Chubut|\
Argentina:Cordoba:Cordoba|\
Argentina:Corrientes:Corrientes|\
Argentina:Entre Rios:Entre Rios|\
Argentina:Formosa:Formosa|\
Argentina:Jujuy:Jujuy|\
Argentina:La Pampa:La Pampa|\
Argentina:La Rioja:La Rioja|\
Argentina:Mendoza:Mendoza|\
Argentina:Misiones:Misiones|\
Argentina:Neuquen:Neuquen|\
Argentina:Rio Negro:Rio Negro|\
Argentina:Salta:Salta|\
Argentina:San Juan:San Juan|\
Argentina:San Luis:San Luis|\
Argentina:Santa Cruz:Santa Cruz|\
Argentina:Santa Fe:Santa Fe|\
Argentina:Santiago del Estero:Santiago del Estero|\
Argentina:Tierra del Fuego:Tierra del Fuego|\
Argentina:Tucuman:Tucuman|\
Armenia:Aragatsotn:Aragatsotn|\
Armenia:Ararat:Ararat|\
Armenia:Armavir:Armavir|\
Armenia:Geghark unik:Geghark unik|\
Armenia:Kotayk:Kotayk|\
Armenia:Lorri:Lorri|\
Armenia:Shirak:Shirak|\
Armenia:Syunik:Syunik|\
Armenia:Tavush:Tavush|\
Armenia:Vayots Dzor:Vayots Dzor|\
Armenia:Yerevan:Yerevan|\
Australia:AAT:Australian Antarctic Territory|\
Australia:Capital Territory:Capital Territory|\
Australia:New South Wales:New South Wales|\
Australia:Northern Territory:Northern Territory|\
Australia:Queensland:Queensland|\
Australia:South Australia:South Australia|\
Australia:Tasmania:Tasmania|\
Australia:Victoria:Victoria|\
Australia:Western Australia:Western Australia|\
Austria:Burgenland:Burgenland|\
Austria:Kaernten:Kaernten|\
Austria:Niederoesterreich:Niederoesterreich|\
Austria:Oberoesterreich:Oberoesterreich|\
Austria:Salzburg:Salzburg|\
Austria:Steiermark:Steiermark|\
Austria:Tirol:Tirol|\
Austria:Vorarlberg:Vorarlberg|\
Austria:Wien:Wien|\
Azerbaijan:Abseron Rayonu:Abseron Rayonu|\
Azerbaijan:Agcabadi Rayonu:Agcabadi Rayonu|\
Azerbaijan:Agdam Rayonu:Agdam Rayonu|\
Azerbaijan:Agdas Rayonu:Agdas Rayonu|\
Azerbaijan:Agstafa Rayonu:Agstafa Rayonu|\
Azerbaijan:Agsu Rayonu:Agsu Rayonu|\
Azerbaijan:Astara Rayonu:Astara Rayonu|\
Azerbaijan:Balakan Rayonu:Balakan Rayonu|\
Azerbaijan:Barda Rayonu:Barda Rayonu|\
Azerbaijan:Beylaqan Rayonu:Beylaqan Rayonu|\
Azerbaijan:Bilasuvar Rayonu:Bilasuvar Rayonu|\
Azerbaijan:Cabrayil Rayonu:Cabrayil Rayonu|\
Azerbaijan:Calilabad Rayonu:Calilabad Rayonu|\
Azerbaijan:Daskasan Rayonu:Daskasan Rayonu|\
Azerbaijan:Davaci Rayonu:Davaci Rayonu|\
Azerbaijan:Fuzuli Rayonu:Fuzuli Rayonu|\
Azerbaijan:Gadabay Rayonu:Gadabay Rayonu|\
Azerbaijan:Goranboy Rayonu:Goranboy Rayonu|\
Azerbaijan:Goycay Rayonu:Goycay Rayonu|\
Azerbaijan:Haciqabul Rayonu:Haciqabul Rayonu|\
Azerbaijan:Imisli Rayonu:Imisli Rayonu|\
Azerbaijan:Ismayilli Rayonu:Ismayilli Rayonu|\
Azerbaijan:Kalbacar Rayonu:Kalbacar Rayonu|\
Azerbaijan:Kurdamir Rayonu:Kurdamir Rayonu|\
Azerbaijan:Lacin Rayonu:Lacin Rayonu|\
Azerbaijan:Lankaran Rayonu:Lankaran Rayonu|\
Azerbaijan:Lerik Rayonu:Lerik Rayonu|\
Azerbaijan:Masalli Rayonu:Masalli Rayonu|\
Azerbaijan:Neftcala Rayonu:Neftcala Rayonu|\
Azerbaijan:Oguz Rayonu:Oguz Rayonu|\
Azerbaijan:Qabala Rayonu:Qabala Rayonu|\
Azerbaijan:Qax Rayonu:Qax Rayonu|\
Azerbaijan:Qazax Rayonu:Qazax Rayonu|\
Azerbaijan:Qobustan Rayonu:Qobustan Rayonu|\
Azerbaijan:Quba Rayonu:Quba Rayonu|\
Azerbaijan:Qubadli Rayonu:Qubadli Rayonu|\
Azerbaijan:Qusar Rayonu:Qusar Rayonu|\
Azerbaijan:Saatli Rayonu:Saatli Rayonu|\
Azerbaijan:Sabirabad Rayonu:Sabirabad Rayonu|\
Azerbaijan:Saki Rayonu:Saki Rayonu|\
Azerbaijan:Salyan Rayonu:Salyan Rayonu|\
Azerbaijan:Samaxi Rayonu:Samaxi Rayonu|\
Azerbaijan:Samkir Rayonu:Samkir Rayonu|\
Azerbaijan:Samux Rayonu:Samux Rayonu|\
Azerbaijan:Siyazan Rayonu:Siyazan Rayonu|\
Azerbaijan:Susa Rayonu:Susa Rayonu|\
Azerbaijan:Tartar Rayonu:Tartar Rayonu|\
Azerbaijan:Tovuz Rayonu:Tovuz Rayonu|\
Azerbaijan:Ucar Rayonu:Ucar Rayonu|\
Azerbaijan:Xacmaz Rayonu:Xacmaz Rayonu|\
Azerbaijan:Xanlar Rayonu:Xanlar Rayonu|\
Azerbaijan:Xizi Rayonu:Xizi Rayonu|\
Azerbaijan:Xocali Rayonu:Xocali Rayonu|\
Azerbaijan:Xocavand Rayonu:Xocavand Rayonu|\
Azerbaijan:Yardimli Rayonu:Yardimli Rayonu|\
Azerbaijan:Yevlax Rayonu:Yevlax Rayonu|\
Azerbaijan:Zangilan Rayonu:Zangilan Rayonu|\
Azerbaijan:Zaqatala Rayonu:Zaqatala Rayonu|\
Azerbaijan:Zardab Rayonu:Zardab Rayonu|\
Azerbaijan:Ali Bayramli Sahari:Ali Bayramli Sahari|\
Azerbaijan:Baki Sahari:Baki Sahari|\
Azerbaijan:Ganca Sahari:Ganca Sahari|\
Azerbaijan:Lankaran Sahari:Lankaran Sahari|\
Azerbaijan:Mingacevir Sahari:Mingacevir Sahari|\
Azerbaijan:Naftalan Sahari:Naftalan Sahari|\
Azerbaijan:Saki Sahari:Saki Sahari|\
Azerbaijan:Sumqayit Sahari:Sumqayit Sahari|\
Azerbaijan:Susa Sahari:Susa Sahari|\
Azerbaijan:Xankandi Sahari:Xankandi Sahari|\
Azerbaijan:Yevlax Sahari:Yevlax Sahari|\
Azerbaijan:Naxcivan Muxtar:Naxcivan Muxtar|\
Bahamas:Acklins and Crooked Islands:Acklins and Crooked Islands|\
Bahamas:Bimini:Bimini|\
Bahamas:Cat Island:Cat Island|\
Bahamas:Exuma:Exuma|\
Bahamas:Freeport:Freeport|\
Bahamas:Fresh Creek:Fresh Creek|\
Bahamas:Governor Harbour:Governor Harbour|\
Bahamas:Green Turtle Cay:Green Turtle Cay|\
Bahamas:Harbour Island:Harbour Island|\
Bahamas:High Rock:High Rock|\
Bahamas:Inagua:Inagua|\
Bahamas:Kemps Bay:Kemps Bay|\
Bahamas:Long Island:Long Island|\
Bahamas:Marsh Harbour:Marsh Harbour|\
Bahamas:Mayaguana:Mayaguana|\
Bahamas:New Providence:New Providence|\
Bahamas:Nichollstown and Berry Islands:Nichollstown and Berry Islands|\
Bahamas:Ragged Island:Ragged Island|\
Bahamas:Rock Sound:Rock Sound|\
Bahamas:Sandy Point:Sandy Point|\
Bahamas:San Salvador and Rum Cay:San Salvador and Rum Cay|\
Bahrain:Al Hadd:Al Hadd|\
Bahrain:Al Manamah:Al Manamah|\
Bahrain:Al Mintaqah al Gharbiyah:Al Mintaqah al Gharbiyah|\
Bahrain:Al Mintaqah al Wusta:Al Mintaqah al Wusta|\
Bahrain:Al Mintaqah ash Shamaliyah:Al Mintaqah ash Shamaliyah|\
Bahrain:Al Muharraq:Al Muharraq|\
Bahrain:Ar Rifa wa al Mintaqah al Janubiyah:Ar Rifa wa al Mintaqah al Janubiyah|\
Bahrain:Jidd Hafs:Jidd Hafs|\
Bahrain:Madinat Hamad:Madinat Hamad|\
Bahrain:Madinat Isa:Madinat Isa|\
Bahrain:Juzur Hawar:Juzur Hawar|\
Bahrain:Sitrah:Sitrah|\
Bangladesh:Barisal:Barisal|\
Bangladesh:Chittagong:Chittagong|\
Bangladesh:Dhaka:Dhaka|\
Bangladesh:Khulna:Khulna|\
Bangladesh:Rajshahi:Rajshahi|\
Bangladesh:Sylhet:Sylhet|\
Barbados:Christ Church:Christ Church|\
Barbados:Saint Andrew:Saint Andrew|\
Barbados:Saint George:Saint George|\
Barbados:Saint James:Saint James|\
Barbados:Saint John:Saint John|\
Barbados:Saint Joseph:Saint Joseph|\
Barbados:Saint Lucy:Saint Lucy|\
Barbados:Saint Michael:Saint Michael|\
Barbados:Saint Peter:Saint Peter|\
Barbados:Saint Philip:Saint Philip|\
Barbados:Saint Thomas:Saint Thomas|\
Belarus:Brest:Brest|\
Belarus:Homyel:Homyel|\
Belarus:Horad Minsk:Horad Minsk|\
Belarus:Hrodna:Hrodna|\
Belarus:Mahilyow:Mahilyow|\
Belarus:Minsk:Minsk|\
Belarus:Vitsyebsk:Vitsyebsk|\
Belgium:Antwerpen:Antwerpen|\
Belgium:Brabant Wallon:Brabant Wallon|\
Belgium:Brussels:Brussels|\
Belgium:Flanders:Flanders|\
Belgium:Hainaut:Hainaut|\
Belgium:Liege:Liege|\
Belgium:Limburg:Limburg|\
Belgium:Luxembourg:Luxembourg|\
Belgium:Namur:Namur|\
Belgium:Oost-Vlaanderen:Oost-Vlaanderen|\
Belgium:Vlaams-Brabant:Vlaams-Brabant|\
Belgium:Wallonia:Wallonia|\
Belgium:West-Vlaanderen:West-Vlaanderen|\
Belize:Belize:Belize|\
Belize:Cayo:Cayo|\
Belize:Corozal:Corozal|\
Belize:Orange Walk:Orange Walk|\
Belize:Stann Creek:Stann Creek|\
Belize:Toledo:Toledo|\
Benin:Alibori:Alibori|\
Benin:Atakora:Atakora|\
Benin:Atlantique:Atlantique|\
Benin:Borgou:Borgou|\
Benin:Collines:Collines|\
Benin:Donga:Donga|\
Benin:Kouffo:Kouffo|\
Benin:Littoral:Littoral|\
Benin:Mono:Mono|\
Benin:Oueme:Oueme|\
Benin:Plateau:Plateau|\
Benin:Zou:Zou|\
Bermuda:Devonshire:Devonshire|\
Bermuda:Hamilton:Hamilton|\
Bermuda:Hamilton:Hamilton|\
Bermuda:Paget:Paget|\
Bermuda:Pembroke:Pembroke|\
Bermuda:Saint George:Saint George|\
Bermuda:Saint George\'s:Saint George\'s|\
Bermuda:Sandys:Sandys|\
Bermuda:Smith\'s:Smith\'s|\
Bermuda:Southampton:Southampton|\
Bermuda:Warwick:Warwick|\
Bhutan:Bumthang:Bumthang|\
Bhutan:Chukha:Chukha|\
Bhutan:Dagana:Dagana|\
Bhutan:Gasa:Gasa|\
Bhutan:Haa:Haa|\
Bhutan:Lhuntse:Lhuntse|\
Bhutan:Mongar:Mongar|\
Bhutan:Paro:Paro|\
Bhutan:Pemagatshel:Pemagatshel|\
Bhutan:Punakha:Punakha|\
Bhutan:Samdrup Jongkhar:Samdrup Jongkhar|\
Bhutan:Samtse:Samtse|\
Bhutan:Sarpang:Sarpang|\
Bhutan:Thimphu:Thimphu|\
Bhutan:Trashigang:Trashigang|\
Bhutan:Trashiyangste:Trashiyangste|\
Bhutan:Trongsa:Trongsa|\
Bhutan:Tsirang:Tsirang|\
Bhutan:Wangdue Phodrang:Wangdue Phodrang|\
Bhutan:Zhemgang:Zhemgang|\
Bolivia:Chuquisaca:Chuquisaca|\
Bolivia:Cochabamba:Cochabamba|\
Bolivia:Beni:Beni|\
Bolivia:La Paz:La Paz|\
Bolivia:Oruro:Oruro|\
Bolivia:Pando:Pando|\
Bolivia:Potosi:Potosi|\
Bolivia:Santa Cruz:Santa Cruz|\
Bolivia:Tarija:Tarija|\
Bosnia:Una-Sana [Federation]:Una-Sana [Federation]|\
Bosnia:Posavina [Federation]:Posavina [Federation]|\
Bosnia:Tuzla [Federation]:Tuzla [Federation]|\
Bosnia:Zenica-Doboj [Federation]:Zenica-Doboj [Federation]|\
Bosnia:Bosnian Podrinje [Federation]:Bosnian Podrinje [Federation]|\
Bosnia:Central Bosnia [Federation]:Central Bosnia [Federation]|\
Bosnia:Herzegovina-Neretva [Federation]:Herzegovina-Neretva [Federation]|\
Bosnia:West Herzegovina [Federation]:West Herzegovina [Federation]|\
Bosnia:Sarajevo [Federation]:Sarajevo [Federation]|\
Bosnia: West Bosnia [Federation]: West Bosnia [Federation]|\
Bosnia:Banja Luka [RS]:Banja Luka [RS]|\
Bosnia:Bijeljina [RS]:Bijeljina [RS]|\
Bosnia:Doboj [RS]:Doboj [RS]|\
Bosnia:Fo?a [RS]:Fo?a [RS]|\
Bosnia:Sarajevo-Romanija [RS]:Sarajevo-Romanija [RS]|\
Bosnia:Trebinje [RS]:Trebinje [RS]|\
Bosnia:Vlasenica [RS]:Vlasenica [RS]|\
Botswana:Central:Central|\
Botswana:Ghanzi:Ghanzi|\
Botswana:Kgalagadi:Kgalagadi|\
Botswana:Kgatleng:Kgatleng|\
Botswana:Kweneng:Kweneng|\
Botswana:North East:North East|\
Botswana:North West:North West|\
Botswana:South East:South East|\
Botswana:Southern:Southern|\
Brazil:Acre:Acre|\
Brazil:Alagoas:Alagoas|\
Brazil:Amazonas:Amazonas|\
Brazil:Amapa:Amapa|\
Brazil:Baia:Baia|\
Brazil:Ceara:Ceara|\
Brazil:Distrito Federal:Distrito Federal|\
Brazil:Espirito Santo:Espirito Santo|\
Brazil:Fernando de Noronha:Fernando de Noronha|\
Brazil:Goias:Goias|\
Brazil:Maranhao:Maranhao|\
Brazil:Minas Gerais:Minas Gerais|\
Brazil:Mato Grosso do Sul:Mato Grosso do Sul|\
Brazil:Mato Grosso:Mato Grosso|\
Brazil:Para:Para|\
Brazil:Paraiba:Paraiba|\
Brazil:Pernambuco:Pernambuco|\
Brazil:Piaui:Piaui|\
Brazil:Parana:Parana|\
Brazil:Rio de Janeiro:Rio de Janeiro|\
Brazil:Rio Grande do Norte:Rio Grande do Norte|\
Brazil:Rondonia:Rondonia|\
Brazil:Roraima:Roraima|\
Brazil:Rio Grande do Sul:Rio Grande do Sul|\
Brazil:Santa Catarina:Santa Catarina|\
Brazil:Sergipe:Sergipe|\
Brazil:Sao Paulo:Sao Paulo|\
Brazil:Tocatins:Tocatins|\
Brazil:Acre:Acre|\
Brazil:Alagoas:Alagoas|\
Brazil:Amapa:Amapa|\
Brazil:Amazonas:Amazonas|\
Brazil:Bahia:Bahia|\
Brazil:Ceara:Ceara|\
Brazil:Distrito Federal:Distrito Federal|\
Brazil:Espirito Santo:Espirito Santo|\
Brazil:Goias:Goias|\
Brazil:Maranhao:Maranhao|\
Brazil:Mato Grosso:Mato Grosso|\
Brazil:Mato Grosso do Sul:Mato Grosso do Sul|\
Brazil:Minas Gerais:Minas Gerais|\
Brazil:Para:Para|\
Brazil:Paraiba:Paraiba|\
Brazil:Parana:Parana|\
Brazil:Pernambuco:Pernambuco|\
Brazil:Piaui:Piaui|\
Brazil:Rio de Janeiro:Rio de Janeiro|\
Brazil:Rio Grande do Norte:Rio Grande do Norte|\
Brazil:Rio Grande do Sul:Rio Grande do Sul|\
Brazil:Rondonia:Rondonia|\
Brazil:Roraima:Roraima|\
Brazil:Santa Catarina:Santa Catarina|\
Brazil:Sao Paulo:Sao Paulo|\
Brazil:Sergipe:Sergipe|\
Brazil:Tocantins:Tocantins|\
Brunei:Belait:Belait|\
Brunei:Brunei and Muara:Brunei and Muara|\
Brunei:Temburong:Temburong|\
Brunei:Tutong:Tutong|\
Bulgaria:Blagoevgrad:Blagoevgrad|\
Bulgaria:Burgas:Burgas|\
Bulgaria:Dobrich:Dobrich|\
Bulgaria:Gabrovo:Gabrovo|\
Bulgaria:Khaskovo:Khaskovo|\
Bulgaria:Kurdzhali:Kurdzhali|\
Bulgaria:Kyustendil:Kyustendil|\
Bulgaria:Lovech:Lovech|\
Bulgaria:Montana:Montana|\
Bulgaria:Pazardzhik:Pazardzhik|\
Bulgaria:Pernik:Pernik|\
Bulgaria:Pleven:Pleven|\
Bulgaria:Plovdiv:Plovdiv|\
Bulgaria:Razgrad:Razgrad|\
Bulgaria:Ruse:Ruse|\
Bulgaria:Shumen:Shumen|\
Bulgaria:Silistra:Silistra|\
Bulgaria:Sliven:Sliven|\
Bulgaria:Smolyan:Smolyan|\
Bulgaria:Sofiya:Sofiya|\
Bulgaria:Sofiya-Grad:Sofiya-Grad|\
Bulgaria:Stara Zagora:Stara Zagora|\
Bulgaria:Turgovishte:Turgovishte|\
Bulgaria:Varna:Varna|\
Bulgaria:Veliko Turnovo:Veliko Turnovo|\
Bulgaria:Vidin:Vidin|\
Bulgaria:Vratsa:Vratsa|\
Bulgaria:Yambol:Yambol|\
Burkina Faso:Bale:Bale|\
Burkina Faso:Bam:Bam|\
Burkina Faso:Banwa:Banwa|\
Burkina Faso:Bazega:Bazega|\
Burkina Faso:Bougouriba:Bougouriba|\
Burkina Faso:Boulgou:Boulgou|\
Burkina Faso:Boulkiemde:Boulkiemde|\
Burkina Faso:Comoe:Comoe|\
Burkina Faso:Ganzourgou:Ganzourgou|\
Burkina Faso:Gnagna:Gnagna|\
Burkina Faso:Gourma:Gourma|\
Burkina Faso:Houet:Houet|\
Burkina Faso:Ioba:Ioba|\
Burkina Faso:Kadiogo:Kadiogo|\
Burkina Faso:Kenedougou:Kenedougou|\
Burkina Faso:Komondjari:Komondjari|\
Burkina Faso:Kompienga:Kompienga|\
Burkina Faso:Kossi:Kossi|\
Burkina Faso:Koulpelogo:Koulpelogo|\
Burkina Faso:Kouritenga:Kouritenga|\
Burkina Faso:Kourweogo:Kourweogo|\
Burkina Faso:Leraba:Leraba|\
Burkina Faso:Loroum:Loroum|\
Burkina Faso:Mouhoun:Mouhoun|\
Burkina Faso:Namentenga:Namentenga|\
Burkina Faso:Nahouri:Nahouri|\
Burkina Faso:Nayala:Nayala|\
Burkina Faso:Noumbiel:Noumbiel|\
Burkina Faso:Oubritenga:Oubritenga|\
Burkina Faso:Oudalan:Oudalan|\
Burkina Faso:Passore:Passore|\
Burkina Faso:Poni:Poni|\
Burkina Faso:Sanguie:Sanguie|\
Burkina Faso:Sanmatenga:Sanmatenga|\
Burkina Faso:Seno:Seno|\
Burkina Faso:Sissili:Sissili|\
Burkina Faso:Soum:Soum|\
Burkina Faso:Sourou:Sourou|\
Burkina Faso:Tapoa:Tapoa|\
Burkina Faso:Tuy:Tuy|\
Burkina Faso:Yagha:Yagha|\
Burkina Faso:Yatenga:Yatenga|\
Burkina Faso:Ziro:Ziro|\
Burkina Faso:Zondoma:Zondoma|\
Burkina Faso:Zoundweogo:Zoundweogo|\
Burma:Ayeyarwady:Ayeyarwady|\
Burma:Bago:Bago|\
Burma:Magway:Magway|\
Burma:Mandalay:Mandalay|\
Burma:Sagaing:Sagaing|\
Burma:Tanintharyi:Tanintharyi|\
Burma:Yangon:Yangon|\
Burma:Chin State:Chin State|\
Burma:Kachin State:Kachin State|\
Burma:Kayin State:Kayin State|\
Burma:Kayah State:Kayah State|\
Burma:Mon State:Mon State|\
Burma:Rakhine State:Rakhine State|\
Burma:Shan State:Shan State|\
Burundi:Bubanza:Bubanza|\
Burundi:Bujumbura Mairie:Bujumbura Mairie|\
Burundi:Bujumbura Rural:Bujumbura Rural|\
Burundi:Bururi:Bururi|\
Burundi:Cankuzo:Cankuzo|\
Burundi:Cibitoke:Cibitoke|\
Burundi:Gitega:Gitega|\
Burundi:Karuzi:Karuzi|\
Burundi:Kayanza:Kayanza|\
Burundi:Kirundo:Kirundo|\
Burundi:Makamba:Makamba|\
Burundi:Muramvya:Muramvya|\
Burundi:Muyinga:Muyinga|\
Burundi:Mwaro:Mwaro|\
Burundi:Ngozi:Ngozi|\
Burundi:Rutana:Rutana|\
Burundi:Ruyigi:Ruyigi|\
Cambodia:Banteay Mean Chey:Banteay Mean Chey|\
Cambodia:Batdambang:Batdambang|\
Cambodia:Kampong Cham:Kampong Cham|\
Cambodia:Kampong Chhnang:Kampong Chhnang|\
Cambodia:Kampong Spoe:Kampong Spoe|\
Cambodia:Kampong Thum:Kampong Thum|\
Cambodia:Kampot:Kampot|\
Cambodia:Kandal:Kandal|\
Cambodia:Koh Kong:Koh Kong|\
Cambodia:Kracheh:Kracheh|\
Cambodia:Mondol Kiri:Mondol Kiri|\
Cambodia:Otdar Mean Chey:Otdar Mean Chey|\
Cambodia:Pouthisat:Pouthisat|\
Cambodia:Preah Vihear:Preah Vihear|\
Cambodia:Prey Veng:Prey Veng|\
Cambodia:Rotanakir:Rotanakir|\
Cambodia:Siem Reab:Siem Reab|\
Cambodia:Stoeng Treng:Stoeng Treng|\
Cambodia:Svay Rieng:Svay Rieng|\
Cambodia:Takao:Takao|\
Cambodia:Keb:Keb|\
Cambodia:Pailin:Pailin|\
Cambodia:Phnom Penh:Phnom Penh|\
Cambodia:Preah Seihanu:Preah Seihanu|\
Cameroon:Adamaoua:Adamaoua|\
Cameroon:Centre:Centre|\
Cameroon:Est:Est|\
Cameroon:Extreme-Nord:Extreme-Nord|\
Cameroon:Littoral:Littoral|\
Cameroon:Nord:Nord|\
Cameroon:Nord-Ouest:Nord-Ouest|\
Cameroon:Ouest:Ouest|\
Cameroon:Sud:Sud|\
Cameroon:Sud-Ouest:Sud-Ouest|\
Canada:Alberta:Alberta|\
Canada:Manitoba:Manitoba|\
Canada:Alberta:Alberta|\
Canada:British Columbia:British Columbia|\
Canada:Manitoba:Manitoba|\
Canada:New Brunswick:New Brunswick|\
Canada:Newfoundland and Labrador:Newfoundland and Labrador|\
Canada:Nova Scotia:Nova Scotia|\
Canada:Northwest Territories:Northwest Territories|\
Canada:Nunavut:Nunavut|\
Canada:Ontario:Ontario|\
Canada:Prince Edward Island:Prince Edward Island|\
Canada:Quebec:Quebec|\
Canada:Saskatchewan:Saskatchewan|\
Canada:YT:Yukon Territory|\
Central African Republic:Bamingui-Bangoran:Bamingui-Bangoran|\
Central African Republic:Bangui:Bangui|\
Central African Republic:Basse-Kotto:Basse-Kotto|\
Central African Republic:Haute-Kotto:Haute-Kotto|\
Central African Republic:Haut-Mbomou:Haut-Mbomou|\
Central African Republic:Kemo:Kemo|\
Central African Republic:Lobaye:Lobaye|\
Central African Republic:Mambere-Kadei:Mambere-Kadei|\
Central African Republic:Mbomou:Mbomou|\
Central African Republic:Nana-Grebizi:Nana-Grebizi|\
Central African Republic:Nana-Mambere:Nana-Mambere|\
Central African Republic:Ombella-Mpoko:Ombella-Mpoko|\
Central African Republic:Ouaka:Ouaka|\
Central African Republic:Ouham:Ouham|\
Central African Republic:Ouham-Pende:Ouham-Pende|\
Central African Republic:Sangha-Mbaere:Sangha-Mbaere|\
Central African Republic:Vakaga:Vakaga|\
Chad:Batha:Batha|\
Chad:Biltine:Biltine|\
Chad:Borkou-Ennedi-Tibesti:Borkou-Ennedi-Tibesti|\
Chad:Chari-Baguirmi:Chari-Baguirmi|\
Chad:Guéra:Guéra|\
Chad:Kanem:Kanem|\
Chad:Lac:Lac|\
Chad:Logone Occidental:Logone Occidental|\
Chad:Logone Oriental:Logone Oriental|\
Chad:Mayo-Kebbi:Mayo-Kebbi|\
Chad:Moyen-Chari:Moyen-Chari|\
Chad:Ouaddaï:Ouaddaï|\
Chad:Salamat:Salamat|\
Chad:Tandjile:Tandjile|\
Chile:Aysen:Aysen|\
Chile:Antofagasta:Antofagasta|\
Chile:Araucania:Araucania|\
Chile:Atacama:Atacama|\
Chile:Bio-Bio:Bio-Bio|\
Chile:Coquimbo:Coquimbo|\
Chile:O\'Higgins:O\'Higgins|\
Chile:Los Lagos:Los Lagos|\
Chile:Magallanes y la Antartica Chilena:Magallanes y la Antartica Chilena|\
Chile:Maule:Maule|\
Chile:Santiago Region Metropolitana:Santiago Region Metropolitana|\
Chile:Tarapaca:Tarapaca|\
Chile:Valparaiso:Valparaiso|\
China:Anhui:Anhui|\
China:Fujian:Fujian|\
China:Gansu:Gansu|\
China:Guangdong:Guangdong|\
China:Guizhou:Guizhou|\
China:Hainan:Hainan|\
China:Hebei:Hebei|\
China:Heilongjiang:Heilongjiang|\
China:Henan:Henan|\
China:Hubei:Hubei|\
China:Hunan:Hunan|\
China:Jiangsu:Jiangsu|\
China:Jiangxi:Jiangxi|\
China:Jilin:Jilin|\
China:Liaoning:Liaoning|\
China:Qinghai:Qinghai|\
China:Shaanxi:Shaanxi|\
China:Shandong:Shandong|\
China:Shanxi:Shanxi|\
China:Sichuan:Sichuan|\
China:Yunnan:Yunnan|\
China:Zhejiang:Zhejiang|\
China:Guangxi:Guangxi|\
China:Nei Mongol:Nei Mongol|\
China:Ningxia:Ningxia|\
China:Xinjiang:Xinjiang|\
China:Xizang (Tibet):Xizang (Tibet)|\
China:Beijing:Beijing|\
China:Chongqing:Chongqing|\
China:Shanghai:Shanghai|\
China:Tianjin:Tianjin|\
Colombia:Amazonas:Amazonas|\
Colombia:Antioquia:Antioquia|\
Colombia:Arauca:Arauca|\
Colombia:Atlantico:Atlantico|\
Colombia:Bogota District Capital:Bogota District Capital|\
Colombia:Bolivar:Bolivar|\
Colombia:Boyaca:Boyaca|\
Colombia:Caldas:Caldas|\
Colombia:Caqueta:Caqueta|\
Colombia:Casanare:Casanare|\
Colombia:Cauca:Cauca|\
Colombia:Cesar:Cesar|\
Colombia:Choco:Choco|\
Colombia:Cordoba:Cordoba|\
Colombia:Cundinamarca:Cundinamarca|\
Colombia:Guainia:Guainia|\
Colombia:Guaviare:Guaviare|\
Colombia:Huila:Huila|\
Colombia:La Guajira:La Guajira|\
Colombia:Magdalena:Magdalena|\
Colombia:Meta:Meta|\
Colombia:Narino:Narino|\
Colombia:Norte de Santander:Norte de Santander|\
Colombia:Putumayo:Putumayo|\
Colombia:Quindio:Quindio|\
Colombia:Risaralda:Risaralda|\
Colombia:San Andres and Providencia:San Andres and Providencia|\
Colombia:Santander:Santander|\
Colombia:Sucre:Sucre|\
Colombia:Tolima:Tolima|\
Colombia:Valle del Cauca:Valle del Cauca|\
Colombia:Vaupes:Vaupes|\
Colombia:Vichada:Vichada|\
Comoros:Grande Comore (Njazidja):Grande Comore (Njazidja)|\
Comoros:Anjouan (Nzwani):Anjouan (Nzwani)|\
Comoros:Moheli (Mwali):Moheli (Mwali)|\
Congo (DRC):Bandundu:Bandundu|\
Congo (DRC):Bas-Congo:Bas-Congo|\
Congo (DRC):Equateur:Equateur|\
Congo (DRC):Kasai-Occidental:Kasai-Occidental|\
Congo (DRC):Kasai-Oriental:Kasai-Oriental|\
Congo (DRC):Katanga:Katanga|\
Congo (DRC):Kinshasa:Kinshasa|\
Congo (DRC):Maniema:Maniema|\
Congo (DRC):Nord-Kivu:Nord-Kivu|\
Congo (DRC):Orientale:Orientale|\
Congo (DRC):Sud-Kivu:Sud-Kivu|\
Congo (RC):Bouenza:Bouenza|\
Congo (RC):Brazzaville:Brazzaville|\
Congo (RC):Cuvette:Cuvette|\
Congo (RC):Cuvette-Ouest:Cuvette-Ouest|\
Congo (RC):Kouilou:Kouilou|\
Congo (RC):Lekoumou:Lekoumou|\
Congo (RC):Likouala:Likouala|\
Congo (RC):Niari:Niari|\
Congo (RC):Plateaux:Plateaux|\
Congo (RC):Pool:Pool|\
Congo (RC):Sangha:Sangha|\
Costa Rica:Alajuela:Alajuela|\
Costa Rica:Cartago:Cartago|\
Costa Rica:Guanacaste:Guanacaste|\
Costa Rica:Heredia:Heredia|\
Costa Rica:Limon:Limon|\
Costa Rica:Puntarenas:Puntarenas|\
Costa Rica:San Jose:San Jose|\
Cote d Ivoire:Agneby:Agneby|\
Cote d Ivoire:Bafing:Bafing|\
Cote d Ivoire:Bas-Sassandra:Bas-Sassandra|\
Cote d Ivoire:Denguele:Denguele|\
Cote d Ivoire:Dix-Huit Montagnes:Dix-Huit Montagnes|\
Cote d Ivoire:Fromager:Fromager|\
Cote d Ivoire:Haut-Sassandra:Haut-Sassandra|\
Cote d Ivoire:Lacs:Lacs|\
Cote d Ivoire:Lagunes:Lagunes|\
Cote d Ivoire:Marahoue:Marahoue|\
Cote d Ivoire:Moyen-Cavally:Moyen-Cavally|\
Cote d Ivoire:Moyen-Comoe:Moyen-Comoe|\
Cote d Ivoire:N\'zi-Comoe:N\'zi-Comoe|\
Cote d Ivoire:Savanes:Savanes|\
Cote d Ivoire:Sud-Bandama:Sud-Bandama|\
Cote d Ivoire:Sud-Comoe:Sud-Comoe|\
Cote d Ivoire:Vallee du Bandama:Vallee du Bandama|\
Cote d Ivoire:Worodougou:Worodougou|\
Cote d Ivoire:Zanzan:Zanzan|\
Croatia:Bjelovarsko-Bilogorska:Bjelovarsko-Bilogorska|\
Croatia:Brodsko-Posavska:Brodsko-Posavska|\
Croatia:Dubrovacko-Neretvanska:Dubrovacko-Neretvanska|\
Croatia:Istarska:Istarska|\
Croatia:Karlovacka:Karlovacka|\
Croatia:Koprivnicko-Krizevacka:Koprivnicko-Krizevacka|\
Croatia:Krapinsko-Zagorska:Krapinsko-Zagorska|\
Croatia:Licko-Senjska:Licko-Senjska|\
Croatia:Medimurska:Medimurska|\
Croatia:Osjecko-Baranjska:Osjecko-Baranjska|\
Croatia:Pozesko-Slavonska:Pozesko-Slavonska|\
Croatia:Primorsko-Goranska:Primorsko-Goranska|\
Croatia:Sibensko-Kninska:Sibensko-Kninska|\
Croatia:Sisacko-Moslavacka:Sisacko-Moslavacka|\
Croatia:Splitsko-Dalmatinska:Splitsko-Dalmatinska|\
Croatia:Varazdinska:Varazdinska|\
Croatia:Viroviticko-Podravska:Viroviticko-Podravska|\
Croatia:Vukovarsko-Srijemska:Vukovarsko-Srijemska|\
Croatia:Zadarska:Zadarska|\
Croatia:Zagreb:Zagreb|\
Croatia:Zagrebacka:Zagrebacka|\
Cuba:Camaguey:Camaguey|\
Cuba:Ciego de Avila:Ciego de Avila|\
Cuba:Cienfuegos:Cienfuegos|\
Cuba:Ciudad de La Habana:Ciudad de La Habana|\
Cuba:Granma:Granma|\
Cuba:Guantanamo:Guantanamo|\
Cuba:Holguin:Holguin|\
Cuba:Isla de la Juventud:Isla de la Juventud|\
Cuba:La Habana:La Habana|\
Cuba:Las Tunas:Las Tunas|\
Cuba:Matanzas:Matanzas|\
Cuba:Pinar del Rio:Pinar del Rio|\
Cuba:Sancti Spiritus:Sancti Spiritus|\
Cuba:Santiago de Cuba:Santiago de Cuba|\
Cuba:Villa Clara:Villa Clara|\
Cyprus:Famagusta:Famagusta|\
Cyprus:Kyrenia:Kyrenia|\
Cyprus:Larnaca:Larnaca|\
Cyprus:Limassol:Limassol|\
Cyprus:Nicosia:Nicosia|\
Cyprus:Paphos:Paphos|\
Czech Republic:Jihocesky Kraj:Jihocesky Kraj|\
Czech Republic:Jihomoravsky Kraj:Jihomoravsky Kraj|\
Czech Republic:Karlovarsky Kraj:Karlovarsky Kraj|\
Czech Republic:Kralovehradecky Kraj:Kralovehradecky Kraj|\
Czech Republic:Liberecky Kraj:Liberecky Kraj|\
Czech Republic:Moravskoslezsky Kraj:Moravskoslezsky Kraj|\
Czech Republic:Olomoucky Kraj:Olomoucky Kraj|\
Czech Republic:Pardubicky Kraj:Pardubicky Kraj|\
Czech Republic:Plzensky Kraj:Plzensky Kraj|\
Czech Republic:Praha:Praha|\
Czech Republic:Stredocesky Kraj:Stredocesky Kraj|\
Czech Republic:Ustecky Kraj:Ustecky Kraj|\
Czech Republic:Vysocina:Vysocina|\
Czech Republic:Zlinsky Kraj:Zlinsky Kraj|\
Denmark:Arhus:Arhus|\
Denmark:Bornholm:Bornholm|\
Denmark:Frederiksberg:Frederiksberg|\
Denmark:Frederiksborg:Frederiksborg|\
Denmark:Fyn:Fyn|\
Denmark:Kobenhavn:Kobenhavn|\
Denmark:Kobenhavns:Kobenhavns|\
Denmark:Nordjylland:Nordjylland|\
Denmark:Ribe:Ribe|\
Denmark:Ringkobing:Ringkobing|\
Denmark:Roskilde:Roskilde|\
Denmark:Sonderjylland:Sonderjylland|\
Denmark:Storstrom:Storstrom|\
Denmark:Vejle:Vejle|\
Denmark:Vestsjalland:Vestsjalland|\
Denmark:Viborg:Viborg|\
Djibouti:Ali Sabih:Ali Sabih|\
Djibouti:Dikhil:Dikhil|\
Djibouti:Djibouti:Djibouti|\
Djibouti:Obock:Obock|\
Djibouti:Tadjoura:Tadjoura|\
Dominican Republic:Azua:Azua|\
Dominican Republic:Baoruco:Baoruco|\
Dominican Republic:Barahona:Barahona|\
Dominican Republic:Dajabon:Dajabon|\
Dominican Republic:Distrito Nacional:Distrito Nacional|\
Dominican Republic:Duarte:Duarte|\
Dominican Republic:Elias Pina:Elias Pina|\
Dominican Republic:El Seibo:El Seibo|\
Dominican Republic:Espaillat:Espaillat|\
Dominican Republic:Hato Mayor:Hato Mayor|\
Dominican Republic:Independencia:Independencia|\
Dominican Republic:La Altagracia:La Altagracia|\
Dominican Republic:La Romana:La Romana|\
Dominican Republic:La Vega:La Vega|\
Dominican Republic:Maria Trinidad Sanchez:Maria Trinidad Sanchez|\
Dominican Republic:Monsenor Nouel:Monsenor Nouel|\
Dominican Republic:Monte Cristi:Monte Cristi|\
Dominican Republic:Monte Plata:Monte Plata|\
Dominican Republic:Pedernales:Pedernales|\
Dominican Republic:Peravia:Peravia|\
Dominican Republic:Puerto Plata:Puerto Plata|\
Dominican Republic:Salcedo:Salcedo|\
Dominican Republic:Samana:Samana|\
Dominican Republic:Sanchez Ramirez:Sanchez Ramirez|\
Dominican Republic:San Cristobal:San Cristobal|\
Dominican Republic:San Jose de Ocoa:San Jose de Ocoa|\
Dominican Republic:San Juan:San Juan|\
Dominican Republic:San Pedro de Macoris:San Pedro de Macoris|\
Dominican Republic:Santiago:Santiago|\
Dominican Republic:Santiago Rodriguez:Santiago Rodriguez|\
Dominican Republic:Santo Domingo:Santo Domingo|\
Dominican Republic:Valverde:Valverde|\
Dominica:Saint Andrew:Saint Andrew|\
Dominica:Saint David:Saint David|\
Dominica:Saint George:Saint George|\
Dominica:Saint John:Saint John|\
Dominica:Saint Joseph:Saint Joseph|\
Dominica:Saint Luke:Saint Luke|\
Dominica:Saint Mark:Saint Mark|\
Dominica:Saint Patrick:Saint Patrick|\
Dominica:Saint Paul:Saint Paul|\
Dominica:Saint Peter:Saint Peter|\
Ecuador:Azuay:Azuay|\
Ecuador:Bolivar:Bolivar|\
Ecuador:Canar:Canar|\
Ecuador:Carchi:Carchi|\
Ecuador:Chimborazo:Chimborazo|\
Ecuador:Cotopaxi:Cotopaxi|\
Ecuador:El Oro:El Oro|\
Ecuador:Esmeraldas:Esmeraldas|\
Ecuador:Galapagos:Galapagos|\
Ecuador:Guayas:Guayas|\
Ecuador:Imbabura:Imbabura|\
Ecuador:Loja:Loja|\
Ecuador:Los Rios:Los Rios|\
Ecuador:Manabi:Manabi|\
Ecuador:Morona-Santiago:Morona-Santiago|\
Ecuador:Napo:Napo|\
Ecuador:Orellana:Orellana|\
Ecuador:Pastaza:Pastaza|\
Ecuador:Pichincha:Pichincha|\
Ecuador:Sucumbios:Sucumbios|\
Ecuador:Tungurahua:Tungurahua|\
Ecuador:Zamora-Chinchipe:Zamora-Chinchipe|\
Egypt:Ad Daqahliyah:Ad Daqahliyah|\
Egypt:Al Bahr al Ahmar:Al Bahr al Ahmar|\
Egypt:Al Buhayrah:Al Buhayrah|\
Egypt:Al Fayyum:Al Fayyum|\
Egypt:Al Gharbiyah:Al Gharbiyah|\
Egypt:Al Iskandariyah:Al Iskandariyah|\
Egypt:Al Isma\'iliyah:Al Isma\'iliyah|\
Egypt:Al Jizah:Al Jizah|\
Egypt:Al Minufiyah:Al Minufiyah|\
Egypt:Al Minya:Al Minya|\
Egypt:Al Qahirah:Al Qahirah|\
Egypt:Al Qalyubiyah:Al Qalyubiyah|\
Egypt:Al Wadi al Jadid:Al Wadi al Jadid|\
Egypt:Ash Sharqiyah:Ash Sharqiyah|\
Egypt:As Suways:As Suways|\
Egypt:Aswan:Aswan|\
Egypt:Asyut:Asyut|\
Egypt:Bani Suwayf:Bani Suwayf|\
Egypt:Bur Sa\'id:Bur Sa\'id|\
Egypt:Dumyat:Dumyat|\
Egypt:Janub Sina:Janub Sina|\
Egypt:Kafr ash Shaykh:Kafr ash Shaykh|\
Egypt:Matruh:Matruh|\
Egypt:Qina:Qina|\
Egypt:Shamal Sina:Shamal Sina|\
Egypt:Suhaj:Suhaj|\
El Salvador:Ahuachapan:Ahuachapan|\
El Salvador:Cabanas:Cabanas|\
El Salvador:Chalatenango:Chalatenango|\
El Salvador:Cuscatlan:Cuscatlan|\
El Salvador:La Libertad:La Libertad|\
El Salvador:La Paz:La Paz|\
El Salvador:La Union:La Union|\
El Salvador:Morazan:Morazan|\
El Salvador:San Miguel:San Miguel|\
El Salvador:San Salvador:San Salvador|\
El Salvador:Santa Ana:Santa Ana|\
El Salvador:San Vicente:San Vicente|\
El Salvador:Sonsonate:Sonsonate|\
El Salvador:Usulutan:Usulutan|\
Equatorial Guinea:Annobon:Annobon|\
Equatorial Guinea:Bioko Norte:Bioko Norte|\
Equatorial Guinea:Bioko Sur:Bioko Sur|\
Equatorial Guinea:Centro Sur:Centro Sur|\
Equatorial Guinea:Kie-Ntem:Kie-Ntem|\
Equatorial Guinea:Litoral:Litoral|\
Equatorial Guinea:Wele-Nzas:Wele-Nzas|\
Eritrea:Anseba:Anseba|\
Eritrea:Debub:Debub|\
Eritrea:Debubawi K\'eyih Bahri:Debubawi K\'eyih Bahri|\
Eritrea:Gash Barka:Gash Barka|\
Eritrea:Ma\'akel:Ma\'akel|\
Eritrea:Semenawi Keyih Bahri:Semenawi Keyih Bahri|\
Estonia:Harjumaa (Tallinn):Harjumaa (Tallinn)|\
Estonia:Hiiumaa (Kardla):Hiiumaa (Kardla)|\
Estonia:Ida-Virumaa (Johvi):Ida-Virumaa (Johvi)|\
Estonia:Jarvamaa (Paide):Jarvamaa (Paide)|\
Estonia:Jogevamaa (Jogeva):Jogevamaa (Jogeva)|\
Estonia:Laanemaa (Haapsalu):Laanemaa (Haapsalu)|\
Estonia:Laane-Virumaa (Rakvere):Laane-Virumaa (Rakvere)|\
Estonia:Parnumaa (Parnu):Parnumaa (Parnu)|\
Estonia:Polvamaa (Polva):Polvamaa (Polva)|\
Estonia:Raplamaa (Rapla):Raplamaa (Rapla)|\
Estonia:Saaremaa (Kuressaare):Saaremaa (Kuressaare)|\
Estonia:Tartumaa (Tartu):Tartumaa (Tartu)|\
Estonia:Valgamaa (Valga):Valgamaa (Valga)|\
Estonia:Viljandimaa (Viljandi):Viljandimaa (Viljandi)|\
Estonia:Vorumaa (Voru):Vorumaa (Voru)|\
Ethiopia:Addis Ababa:Addis Ababa|\
Ethiopia:Afar:Afar|\
Ethiopia:Amhara:Amhara|\
Ethiopia:Binshangul Gumuz:Binshangul Gumuz|\
Ethiopia:Dire Dawa:Dire Dawa|\
Ethiopia:Gambela Hizboch:Gambela Hizboch|\
Ethiopia:Harari:Harari|\
Ethiopia:Oromia:Oromia|\
Ethiopia:Somali:Somali|\
Ethiopia:Tigray:Tigray|\
Ethiopia:Southern Nations, Nationalities, and Peoples Region:Southern Nations, Nationalities, and Peoples Region|\
Fiji:Central (Suva):Central (Suva)|\
Fiji:Eastern (Levuka):Eastern (Levuka)|\
Fiji:Northern (Labasa):Northern (Labasa)|\
Fiji:Rotuma:Rotuma|\
Fiji:Western (Lautoka):Western (Lautoka)|\
Finland:Aland:Aland|\
Finland:Etela-Suomen Laani:Etela-Suomen Laani|\
Finland:Ita-Suomen Laani:Ita-Suomen Laani|\
Finland:Lansi-Suomen Laani:Lansi-Suomen Laani|\
Finland:Lappi:Lappi|\
Finland:Oulun Laani:Oulun Laani|\
France:Alsace:Alsace|\
France:Aquitaine:Aquitaine|\
France:Auvergne:Auvergne|\
France:Basse Normandie:Basse Normandie|\
France:Bourgogne:Bourgogne|\
France:Bretagne:Bretagne|\
France:Centre:Centre|\
France:Champagne Ardenne:Champagne Ardenne|\
France:Corse:Corse|\
France:Franche Comte:Franche Comte|\
France:Haute Normandie:Haute Normandie|\
France:Ile de France:Ile de France|\
France:Languedoc-Roussillon:Languedoc-Roussillon|\
France:Limousin:Limousin|\
France:Lorraine:Lorraine|\
France:Midi Pyrenees:Midi Pyrenees|\
France:Nord Pas de Calais:Nord Pas de Calais|\
France:Pays de la Loire:Pays de la Loire|\
France:Picardie:Picardie|\
France:Poitou Charentes:Poitou Charentes|\
France:Provence Alpes Cote dAzur:Provence Alpes Cote dAzur|\
France:Rhone Alpes:Rhone Alpes |\
Germany:Baden Wurttemberg:Baden Wurttemberg|\
Germany:Bavaria:Bavaria|\
Germany:Berlin:Berlin|\
Germany:Brandenburg:Brandenburg|\
Germany:Bremen:Bremen|\
Germany:Hamburg:Hamburg|\
Germany:Hesse:Hesse|\
Germany:Lower Saxony:Lower Saxony|\
Germany:Mecklenburg West Pomerania:Mecklenburg West Pomerania|\
Germany:North Rhine Westphalia:North Rhine Westphalia|\
Germany:Rhineland Palatinate:Rhineland Palatinate|\
Germany:Saarland:Saarland|\
Germany:Saxony:Saxony|\
Germany:Saxony Anhalt:Saxony Anhalt|\
Germany:Schleswig Holstein:Schleswig Holstein|\
Germany:Thuringia:Thuringia|\
Gabon:Estuaire:Estuaire|\
Gabon:Haut-Ogooue:Haut-Ogooue|\
Gabon:Moyen-Ogooue:Moyen-Ogooue|\
Gabon:Ngounie:Ngounie|\
Gabon:Nyanga:Nyanga|\
Gabon:Ogooue-Ivindo:Ogooue-Ivindo|\
Gabon:Ogooue-Lolo:Ogooue-Lolo|\
Gabon:Ogooue-Maritime:Ogooue-Maritime|\
Gabon:Woleu-Ntem:Woleu-Ntem|\
Georgia:Abkhazia (Sokhumi):Abkhazia (Sokhumi)|\
Georgia:Ajaria (Batumi):Ajaria (Batumi)|\
Georgia:Guria (Ozurgeti):Guria (Ozurgeti)|\
Georgia:Imereti (Kutaisi):Imereti (Kutaisi)|\
Georgia:Kakheti (Telavi):Kakheti (Telavi)|\
Georgia:Kvemo Kartli (Rustavi):Kvemo Kartli (Rustavi)|\
Georgia:Mtskheta-Mtianeti (Mtskheta):Mtskheta-Mtianeti (Mtskheta)|\
Georgia:Racha-Lechkhumi-Kvemo Svaneti (Ambrolauri):Racha-Lechkhumi-Kvemo Svaneti (Ambrolauri)|\
Georgia:Samegrelo-Zemo Svateni (Zugdidi):Samegrelo-Zemo Svateni (Zugdidi)|\
Georgia:Samtskhe-Javakheti (Akhaltsikhe):Samtskhe-Javakheti (Akhaltsikhe)|\
Georgia:Shida Kartli (Gori):Shida Kartli (Gori)|\
Georgia:Tbilisi (Tbilisi):Tbilisi (Tbilisi)|\
Ghana:Ashanti:Ashanti|\
Ghana:Brong-Ahafo:Brong-Ahafo|\
Ghana:Central:Central|\
Ghana:Eastern:Eastern|\
Ghana:Greater Accra:Greater Accra|\
Ghana:Northern:Northern|\
Ghana:Upper East:Upper East|\
Ghana:Upper West:Upper West|\
Ghana:Volta:Volta|\
Ghana:Western:Western|\
Greece:Agion Oros:Agion Oros|\
Greece:Achaia:Achaia|\
Greece:Aitolia kai Akarmania:Aitolia kai Akarmania|\
Greece:Argolis:Argolis|\
Greece:Arkadia:Arkadia|\
Greece:Arta:Arta|\
Greece:Attiki:Attiki|\
Greece:Chalkidiki:Chalkidiki|\
Greece:Chanion:Chanion|\
Greece:Chios:Chios|\
Greece:Dodekanisos:Dodekanisos|\
Greece:Drama:Drama|\
Greece:Evros:Evros|\
Greece:Evrytania:Evrytania|\
Greece:Evvoia:Evvoia|\
Greece:Florina:Florina|\
Greece:Fokidos:Fokidos|\
Greece:Fthiotis:Fthiotis|\
Greece:Grevena:Grevena|\
Greece:Ileia:Ileia|\
Greece:Imathia:Imathia|\
Greece:Ioannina:Ioannina|\
Greece:Irakleion:Irakleion|\
Greece:Karditsa:Karditsa|\
Greece:Kastoria:Kastoria|\
Greece:Kavala:Kavala|\
Greece:Kefallinia:Kefallinia|\
Greece:Kerkyra:Kerkyra|\
Greece:Kilkis:Kilkis|\
Greece:Korinthia:Korinthia|\
Greece:Kozani:Kozani|\
Greece:Kyklades:Kyklades|\
Greece:Lakonia:Lakonia|\
Greece:Larisa:Larisa|\
Greece:Lasithi:Lasithi|\
Greece:Lefkas:Lefkas|\
Greece:Lesvos:Lesvos|\
Greece:Magnisia:Magnisia|\
Greece:Messinia:Messinia|\
Greece:Pella:Pella|\
Greece:Pieria:Pieria|\
Greece:Preveza:Preveza|\
Greece:Rethynnis:Rethynnis|\
Greece:Rodopi:Rodopi|\
Greece:Samos:Samos|\
Greece:Serrai:Serrai|\
Greece:Thesprotia:Thesprotia|\
Greece:Thessaloniki:Thessaloniki|\
Greece:Trikala:Trikala|\
Greece:Voiotia:Voiotia|\
Greece:Xanthi:Xanthi|\
Greece:Zakynthos:Zakynthos|\
Greenland:Avannaa (Nordgronland):Avannaa (Nordgronland)|\
Greenland:Tunu (Ostgronland):Tunu (Ostgronland)|\
Greenland:Kitaa (Vestgronland):Kitaa (Vestgronland)|\
Grenada:Carriacou and Petit Martinique:Carriacou and Petit Martinique|\
Grenada:Saint Andrew:Saint Andrew|\
Grenada:Saint David:Saint David|\
Grenada:Saint George:Saint George|\
Grenada:Saint John:Saint John|\
Grenada:Saint Mark:Saint Mark|\
Grenada:Saint Patrick:Saint Patrick|\
Guatemala:Alta Verapaz:Alta Verapaz|\
Guatemala:Baja Verapaz:Baja Verapaz|\
Guatemala:Chimaltenango:Chimaltenango|\
Guatemala:Chiquimula:Chiquimula|\
Guatemala:El Progreso:El Progreso|\
Guatemala:Escuintla:Escuintla|\
Guatemala:Guatemala:Guatemala|\
Guatemala:Huehuetenango:Huehuetenango|\
Guatemala:Izabal:Izabal|\
Guatemala:Jalapa:Jalapa|\
Guatemala:Jutiapa:Jutiapa|\
Guatemala:Peten:Peten|\
Guatemala:Quetzaltenango:Quetzaltenango|\
Guatemala:Quiche:Quiche|\
Guatemala:Retalhuleu:Retalhuleu|\
Guatemala:Sacatepequez:Sacatepequez|\
Guatemala:San Marcos:San Marcos|\
Guatemala:Santa Rosa:Santa Rosa|\
Guatemala:Solola:Solola|\
Guatemala:Suchitepequez:Suchitepequez|\
Guatemala:Totonicapan:Totonicapan|\
Guatemala:Zacapa:Zacapa|\
Guinea Bissau:Bafata:Bafata|\
Guinea Bissau:Biombo:Biombo|\
Guinea Bissau:Bissau:Bissau|\
Guinea Bissau:Bolama:Bolama|\
Guinea Bissau:Cacheu:Cacheu|\
Guinea Bissau:Gabu:Gabu|\
Guinea Bissau:Oio:Oio|\
Guinea Bissau:Quinara:Quinara|\
Guinea Bissau:Tombali:Tombali|\
Guinea:Beyla:Beyla|\
Guinea:Boffa:Boffa|\
Guinea:Boke:Boke|\
Guinea:Conakry:Conakry|\
Guinea:Coyah:Coyah|\
Guinea:Dabola:Dabola|\
Guinea:Dalaba:Dalaba|\
Guinea:Dinguiraye:Dinguiraye|\
Guinea:Dubreka:Dubreka|\
Guinea:Faranah:Faranah|\
Guinea:Forecariah:Forecariah|\
Guinea:Fria:Fria|\
Guinea:Gaoual:Gaoual|\
Guinea:Gueckedou:Gueckedou|\
Guinea:Kankan:Kankan|\
Guinea:Kerouane:Kerouane|\
Guinea:Kindia:Kindia|\
Guinea:Kissidougou:Kissidougou|\
Guinea:Koubia:Koubia|\
Guinea:Koundara:Koundara|\
Guinea:Kouroussa:Kouroussa|\
Guinea:Labe:Labe|\
Guinea:Lelouma:Lelouma|\
Guinea:Lola:Lola|\
Guinea:Macenta:Macenta|\
Guinea:Mali:Mali|\
Guinea:Mamou:Mamou|\
Guinea:Mandiana:Mandiana|\
Guinea:Nzerekore:Nzerekore|\
Guinea:Pita:Pita|\
Guinea:Siguiri:Siguiri|\
Guinea:Telimele:Telimele|\
Guinea:Tougue:Tougue|\
Guinea:Yomou:Yomou|\
Guyana:Barima-Waini:Barima-Waini|\
Guyana:Cuyuni-Mazaruni:Cuyuni-Mazaruni|\
Guyana:Demerara-Mahaica:Demerara-Mahaica|\
Guyana:East Berbice-Corentyne:East Berbice-Corentyne|\
Guyana:Essequibo Islands-West Demerara:Essequibo Islands-West Demerara|\
Guyana:Mahaica-Berbice:Mahaica-Berbice|\
Guyana:Pomeroon-Supenaam:Pomeroon-Supenaam|\
Guyana:Potaro-Siparuni:Potaro-Siparuni|\
Guyana:Upper Demerara-Berbice:Upper Demerara-Berbice|\
Guyana:Upper Takutu-Upper Essequibo:Upper Takutu-Upper Essequibo|\
Haiti:Artibonite:Artibonite|\
Haiti:Centre:Centre|\
Haiti:Grand \'Anse:Grand \'Anse|\
Haiti:Nord:Nord|\
Haiti:Nord-Est:Nord-Est|\
Haiti:Nord-Ouest:Nord-Ouest|\
Haiti:Ouest:Ouest|\
Haiti:Sud:Sud|\
Haiti:Sud-Est:Sud-Est|\
Honduras:Atlantida:Atlantida|\
Honduras:Choluteca:Choluteca|\
Honduras:Colon:Colon|\
Honduras:Comayagua:Comayagua|\
Honduras:Copan:Copan|\
Honduras:Cortes:Cortes|\
Honduras:El Paraiso:El Paraiso|\
Honduras:Francisco Morazan:Francisco Morazan|\
Honduras:Gracias a Dios:Gracias a Dios|\
Honduras:Intibuca:Intibuca|\
Honduras:Islas de la Bahia:Islas de la Bahia|\
Honduras:La Paz:La Paz|\
Honduras:Lempira:Lempira|\
Honduras:Ocotepeque:Ocotepeque|\
Honduras:Olancho:Olancho|\
Honduras:Santa Barbara:Santa Barbara|\
Honduras:Valle:Valle|\
Honduras:Yoro:Yoro|\
Hungary:Bacs-Kiskun:Bacs-Kiskun|\
Hungary:Baranya:Baranya|\
Hungary:Bekes:Bekes|\
Hungary:Borsod-Abauj-Zemplen:Borsod-Abauj-Zemplen|\
Hungary:Csongrad:Csongrad|\
Hungary:Fejer:Fejer|\
Hungary:Gyor-Moson-Sopron:Gyor-Moson-Sopron|\
Hungary:Hajdu-Bihar:Hajdu-Bihar|\
Hungary:Heves:Heves|\
Hungary:Jasz-Nagykun-Szolnok:Jasz-Nagykun-Szolnok|\
Hungary:Komarom-Esztergom:Komarom-Esztergom|\
Hungary:Nograd:Nograd|\
Hungary:Pest:Pest|\
Hungary:Somogy:Somogy|\
Hungary:Szabolcs-Szatmar-Bereg:Szabolcs-Szatmar-Bereg|\
Hungary:Tolna:Tolna|\
Hungary:Vas:Vas|\
Hungary:Veszprem:Veszprem|\
Hungary:Zala:Zala|\
Hungary:Bekescsaba:Bekescsaba|\
Hungary:Debrecen:Debrecen|\
Hungary:Dunaujvaros:Dunaujvaros|\
Hungary:Eger:Eger|\
Hungary:Gyor:Gyor|\
Hungary:Hodmezovasarhely:Hodmezovasarhely|\
Hungary:Kaposvar:Kaposvar|\
Hungary:Kecskemet:Kecskemet|\
Hungary:Miskolc:Miskolc|\
Hungary:Nagykanizsa:Nagykanizsa|\
Hungary:Nyiregyhaza:Nyiregyhaza|\
Hungary:Pecs:Pecs|\
Hungary:Sopron:Sopron|\
Hungary:Szeged:Szeged|\
Hungary:Szekesfehervar:Szekesfehervar|\
Hungary:Szolnok:Szolnok|\
Hungary:Szombathely:Szombathely|\
Hungary:Tatabanya:Tatabanya|\
Hungary:Veszprem:Veszprem|\
Hungary:Zalaegerszeg:Zalaegerszeg|\
Iceland:Austurland:Austurland|\
Iceland:Hofudhborgarsvaedhi:Hofudhborgarsvaedhi|\
Iceland:Nordhurland Eystra:Nordhurland Eystra|\
Iceland:Nordhurland Vestra:Nordhurland Vestra|\
Iceland:Sudhurland:Sudhurland|\
Iceland:Sudhurnes:Sudhurnes|\
Iceland:Vestfirdhir:Vestfirdhir|\
Iceland:Vesturland:Vesturland|\
India:Andaman and Nicobar Islands:Andaman and Nicobar Islands|\
India:Andhra Pradesh:Andhra Pradesh|\
India:Arunachal Pradesh:Arunachal Pradesh|\
India:Assam:Assam|\
India:Bihar:Bihar|\
India:Chandigarh:Chandigarh|\
India:Chhattisgarh:Chhattisgarh|\
India:Dadra and Nagar Haveli:Dadra and Nagar Haveli|\
India:Daman and Diu:Daman and Diu|\
India:Delhi:Delhi|\
India:Goa:Goa|\
India:Gujarat:Gujarat|\
India:Haryana:Haryana|\
India:Himachal Pradesh:Himachal Pradesh|\
India:Jammu and Kashmir:Jammu and Kashmir|\
India:Jharkhand:Jharkhand|\
India:Karnataka:Karnataka|\
India:Kerala:Kerala|\
India:Lakshadweep:Lakshadweep|\
India:Madhya Pradesh:Madhya Pradesh|\
India:Maharashtra:Maharashtra|\
India:Manipur:Manipur|\
India:Meghalaya:Meghalaya|\
India:Mizoram:Mizoram|\
India:Nagaland:Nagaland|\
India:Orissa:Orissa|\
India:Pondicherry:Pondicherry|\
India:Punjab:Punjab|\
India:Rajasthan:Rajasthan|\
India:Sikkim:Sikkim|\
India:Tamil Nadu:Tamil Nadu|\
India:Tripura:Tripura|\
India:Uttaranchal:Uttaranchal|\
India:Uttar Pradesh:Uttar Pradesh|\
India:West Bengal:West Bengal|\
Indonesia:Aceh:Aceh|\
Indonesia:Bali:Bali|\
Indonesia:Banten:Banten|\
Indonesia:Bengkulu:Bengkulu|\
Indonesia:Gorontalo:Gorontalo|\
Indonesia:Irian Jaya Barat:Irian Jaya Barat|\
Indonesia:Jakarta Raya:Jakarta Raya|\
Indonesia:Jambi:Jambi|\
Indonesia:Jawa Barat:Jawa Barat|\
Indonesia:Jawa Tengah:Jawa Tengah|\
Indonesia:Jawa Timur:Jawa Timur|\
Indonesia:Kalimantan Barat:Kalimantan Barat|\
Indonesia:Kalimantan Selatan:Kalimantan Selatan|\
Indonesia:Kalimantan Tengah:Kalimantan Tengah|\
Indonesia:Kalimantan Timur:Kalimantan Timur|\
Indonesia:Kepulauan Bangka Belitung:Kepulauan Bangka Belitung|\
Indonesia:Kepulauan Riau:Kepulauan Riau|\
Indonesia:Lampung:Lampung|\
Indonesia:Maluku:Maluku|\
Indonesia:Maluku Utara:Maluku Utara|\
Indonesia:Nusa Tenggara Barat:Nusa Tenggara Barat|\
Indonesia:Nusa Tenggara Timur:Nusa Tenggara Timur|\
Indonesia:Papua:Papua|\
Indonesia:Riau:Riau|\
Indonesia:Sulawesi Barat:Sulawesi Barat|\
Indonesia:Sulawesi Selatan:Sulawesi Selatan|\
Indonesia:Sulawesi Tengah:Sulawesi Tengah|\
Indonesia:Sulawesi Tenggara:Sulawesi Tenggara|\
Indonesia:Sulawesi Utara:Sulawesi Utara|\
Indonesia:Sumatera Barat:Sumatera Barat|\
Indonesia:Sumatera Selatan:Sumatera Selatan|\
Indonesia:Sumatera Utara:Sumatera Utara|\
Indonesia:Yogyakarta:Yogyakarta|\
Iran:Ardabil:Ardabil|\
Iran:Azarbayjan-e Gharbi:Azarbayjan-e Gharbi|\
Iran:Azarbayjan-e Sharqi:Azarbayjan-e Sharqi|\
Iran:Bushehr:Bushehr|\
Iran:Chahar Mahall va Bakhtiari:Chahar Mahall va Bakhtiari|\
Iran:Esfahan:Esfahan|\
Iran:Fars:Fars|\
Iran:Gilan:Gilan|\
Iran:Golestan:Golestan|\
Iran:Hamadan:Hamadan|\
Iran:Hormozgan:Hormozgan|\
Iran:Ilam:Ilam|\
Iran:Kerman:Kerman|\
Iran:Kermanshah:Kermanshah|\
Iran:Khorasan-e Janubi:Khorasan-e Janubi|\
Iran:Khorasan-e Razavi:Khorasan-e Razavi|\
Iran:Khorasan-e Shemali:Khorasan-e Shemali|\
Iran:Khuzestan:Khuzestan|\
Iran:Kohgiluyeh va Buyer Ahmad:Kohgiluyeh va Buyer Ahmad|\
Iran:Kordestan:Kordestan|\
Iran:Lorestan:Lorestan|\
Iran:Markazi:Markazi|\
Iran:Mazandaran:Mazandaran|\
Iran:Qazvin:Qazvin|\
Iran:Qom:Qom|\
Iran:Semnan:Semnan|\
Iran:Sistan va Baluchestan:Sistan va Baluchestan|\
Iran:Tehran:Tehran|\
Iran:Yazd:Yazd|\
Iran:Zanjan:Zanjan|\
Iraq:Al Anbar:Al Anbar|\
Iraq:Al Basrah:Al Basrah|\
Iraq:Al Muthanna:Al Muthanna|\
Iraq:Al Qadisiyah:Al Qadisiyah|\
Iraq:An Najaf:An Najaf|\
Iraq:Arbil:Arbil|\
Iraq:As Sulaymaniyah:As Sulaymaniyah|\
Iraq:At Ta\'mim:At Ta\'mim|\
Iraq:Babil:Babil|\
Iraq:Baghdad:Baghdad|\
Iraq:Dahuk:Dahuk|\
Iraq:Dhi Qar:Dhi Qar|\
Iraq:Diyala:Diyala|\
Iraq:Karbala\':Karbala\'|\
Iraq:Maysan:Maysan|\
Iraq:Ninawa:Ninawa|\
Iraq:Salah ad Din:Salah ad Din|\
Iraq:Wasit:Wasit|\
Ireland:Carlow:Carlow|\
Ireland:Cavan:Cavan|\
Ireland:Clare:Clare|\
Ireland:Cork:Cork|\
Ireland:Donegal:Donegal|\
Ireland:Dublin:Dublin|\
Ireland:Galway:Galway|\
Ireland:Kerry:Kerry|\
Ireland:Kildare:Kildare|\
Ireland:Kilkenny:Kilkenny|\
Ireland:Laois:Laois|\
Ireland:Leitrim:Leitrim|\
Ireland:Limerick:Limerick|\
Ireland:Longford:Longford|\
Ireland:Louth:Louth|\
Ireland:Mayo:Mayo|\
Ireland:Meath:Meath|\
Ireland:Monaghan:Monaghan|\
Ireland:Offaly:Offaly|\
Ireland:Roscommon:Roscommon|\
Ireland:Sligo:Sligo|\
Ireland:Tipperary:Tipperary|\
Ireland:Waterford:Waterford|\
Ireland:Westmeath:Westmeath|\
Ireland:Wexford:Wexford|\
Ireland:Wicklow:Wicklow|\
Ireland Eire:CO ANTRIM:County Antrim|\
Ireland Eire:CO ARMAGH:County Armagh|\
Ireland Eire:CO DOWN:County Down|\
Ireland Eire:CO FERMANAGH:County Fermanagh|\
Ireland Eire:CO DERRY:County Londonderry|\
Ireland Eire:CO TYRONE:County Tyrone|\
Ireland Eire:CO CAVAN:County Cavan|\
Ireland Eire:CO DONEGAL:County Donegal|\
Ireland Eire:CO MONAGHAN:County Monaghan|\
Ireland Eire:CO DUBLIN:County Dublin|\
Ireland Eire:CO CARLOW:County Carlow|\
Ireland Eire:CO KILDARE:County Kildare|\
Ireland Eire:CO KILKENNY:County Kilkenny|\
Ireland Eire:CO LAOIS:County Laois|\
Ireland Eire:CO LONGFORD:County Longford|\
Ireland Eire:CO LOUTH:County Louth|\
Ireland Eire:CO MEATH:County Meath|\
Ireland Eire:CO OFFALY:County Offaly|\
Ireland Eire:CO WESTMEATH:County Westmeath|\
Ireland Eire:CO WEXFORD:County Wexford|\
Ireland Eire:CO WICKLOW:County Wicklow|\
Ireland Eire:CO GALWAY:County Galway|\
Ireland Eire:CO MAYO:County Mayo|\
Ireland Eire:CO LEITRIM:County Leitrim|\
Ireland Eire:CO ROSCOMMON:County Roscommon|\
Ireland Eire:CO SLIGO:County Sligo|\
Ireland Eire:CO CLARE:County Clare|\
Ireland Eire:CO CORK:County Cork|\
Ireland Eire:CO KERRY:County Kerry|\
Ireland Eire:CO LIMERICK:County Limerick|\
Ireland Eire:CO TIPPERARY:County Tipperary|\
Ireland Eire:CO WATERFORD:County Waterford|\
Israel:Central:Central|\
Israel:Northern:Northern|\
Israel:Southern:Southern|\
Israel:Tel Aviv:Tel Aviv|\
Italy:Abruzzo:Abruzzo|\
Italy:Basilicata:Basilicata|\
Italy:Calabria:Calabria|\
Italy:Campania:Campania|\
Italy:Emilia-Romagna:Emilia-Romagna|\
Italy:Friuli-Venezia Giulia:Friuli-Venezia Giulia|\
Italy:Lazio:Lazio|\
Italy:Liguria:Liguria|\
Italy:Lombardia:Lombardia|\
Italy:Marche:Marche|\
Italy:Molise:Molise|\
Italy:Piemonte:Piemonte|\
Italy:Puglia:Puglia|\
Italy:Sardegna:Sardegna|\
Italy:Sicilia:Sicilia|\
Italy:Toscana:Toscana|\
Italy:Trentino-Alto Adige:Trentino-Alto Adige|\
Italy:Umbria:Umbria|\
Italy:Valle d\'Aosta:Valle d\'Aosta|\
Italy:Veneto:Veneto|\
Jamaica:Clarendon:Clarendon|\
Jamaica:Hanover:Hanover|\
Jamaica:Kingston:Kingston|\
Jamaica:Manchester:Manchester|\
Jamaica:Portland:Portland|\
Jamaica:Saint Andrew:Saint Andrew|\
Jamaica:Saint Ann:Saint Ann|\
Jamaica:Saint Catherine:Saint Catherine|\
Jamaica:Saint Elizabeth:Saint Elizabeth|\
Jamaica:Saint James:Saint James|\
Jamaica:Saint Mary:Saint Mary|\
Jamaica:Saint Thomas:Saint Thomas|\
Jamaica:Trelawny:Trelawny|\
Jamaica:Westmoreland:Westmoreland|\
Japan:Aichi:Aichi|\
Japan:Akita:Akita|\
Japan:Aomori:Aomori|\
Japan:Chiba:Chiba|\
Japan:Ehime:Ehime|\
Japan:Fukui:Fukui|\
Japan:Fukuoka:Fukuoka|\
Japan:Fukushima:Fukushima|\
Japan:Gifu:Gifu|\
Japan:Gumma:Gumma|\
Japan:Hiroshima:Hiroshima|\
Japan:Hokkaido:Hokkaido|\
Japan:Hyogo:Hyogo|\
Japan:Ibaraki:Ibaraki|\
Japan:Ishikawa:Ishikawa|\
Japan:Iwate:Iwate|\
Japan:Kagawa:Kagawa|\
Japan:Kagoshima:Kagoshima|\
Japan:Kanagawa:Kanagawa|\
Japan:Kochi:Kochi|\
Japan:Kumamoto:Kumamoto|\
Japan:Kyoto:Kyoto|\
Japan:Mie:Mie|\
Japan:Miyagi:Miyagi|\
Japan:Miyazaki:Miyazaki|\
Japan:Nagano:Nagano|\
Japan:Nagasaki:Nagasaki|\
Japan:Nara:Nara|\
Japan:Niigata:Niigata|\
Japan:Oita:Oita|\
Japan:Okayama:Okayama|\
Japan:Okinawa:Okinawa|\
Japan:Osaka:Osaka|\
Japan:Saga:Saga|\
Japan:Saitama:Saitama|\
Japan:Shiga:Shiga|\
Japan:Shimane:Shimane|\
Japan:Shizuoka:Shizuoka|\
Japan:Tochigi:Tochigi|\
Japan:Tokushima:Tokushima|\
Japan:Tokyo:Tokyo|\
Japan:Tottori:Tottori|\
Japan:Toyama:Toyama|\
Japan:Wakayama:Wakayama|\
Japan:Yamagata:Yamagata|\
Japan:Yamaguchi:Yamaguchi|\
Japan:Yamanashi:Yamanashi|\
Jordan:Ajlun:Ajlun|\
Jordan:Al \'Aqabah:Al \'Aqabah|\
Jordan:Al Balqa\':Al Balqa\'|\
Jordan:Al Karak:Al Karak|\
Jordan:Al Mafraq:Al Mafraq|\
Jordan:\'Amman:\'Amman|\
Jordan:At Tafilah:At Tafilah|\
Jordan:Az Zarqa\':Az Zarqa\'|\
Jordan:Irbid:Irbid|\
Jordan:Jarash:Jarash|\
Jordan:Ma\'an:Ma\'an|\
Jordan:Madaba:Madaba|\
Kazakhstan:Almaty Oblysy:Almaty Oblysy|\
Kazakhstan:Almaty Qalasy:Almaty Qalasy|\
Kazakhstan:Aqmola Oblysy:Aqmola Oblysy|\
Kazakhstan:Aqtobe Oblysy:Aqtobe Oblysy|\
Kazakhstan:Astana Qalasy:Astana Qalasy|\
Kazakhstan:Atyrau Oblysy:Atyrau Oblysy|\
Kazakhstan:Batys Qazaqstan Oblysy:Batys Qazaqstan Oblysy|\
Kazakhstan:Bayqongyr Qalasy:Bayqongyr Qalasy|\
Kazakhstan:Mangghystau Oblysy:Mangghystau Oblysy|\
Kazakhstan:Ongtustik Qazaqstan Oblysy:Ongtustik Qazaqstan Oblysy|\
Kazakhstan:Pavlodar Oblysy:Pavlodar Oblysy|\
Kazakhstan:Qaraghandy Oblysy:Qaraghandy Oblysy|\
Kazakhstan:Qostanay Oblysy:Qostanay Oblysy|\
Kazakhstan:Qyzylorda Oblysy:Qyzylorda Oblysy|\
Kazakhstan:Shyghys Qazaqstan Oblysy:Shyghys Qazaqstan Oblysy|\
Kazakhstan:Soltustik Qazaqstan Oblysy:Soltustik Qazaqstan Oblysy|\
Kazakhstan:Zhambyl Oblysy:Zhambyl Oblysy|\
Kenya:Central:Central|\
Kenya:Coast:Coast|\
Kenya:Eastern:Eastern|\
Kenya:Nairobi Area:Nairobi Area|\
Kenya:North Eastern:North Eastern|\
Kenya:Nyanza:Nyanza|\
Kenya:Rift Valley:Rift Valley|\
Kenya:Western:Western|\
North Korea :Chagang:Chagang|\
North Korea :North Hamgyong:North Hamgyong|\
North Korea :South Hamgyong:South Hamgyong|\
North Korea :North Hwanghae:North Hwanghae|\
North Korea :South Hwanghae:South Hwanghae|\
North Korea :Kangwon:Kangwon|\
North Korea :North P\'yongan:North P\'yongan|\
North Korea :South P\'yongan:South P\'yongan|\
North Korea :Yanggang:Yanggang|\
North Korea :Kaesong:Kaesong|\
North Korea :Najin:Najin|\
North Korea :Namp\'o:Namp\'o|\
North Korea :Pyongyang:Pyongyang|\
South Korea:Seoul:Seoul|\
South Korea:Busan City:Busan City|\
South Korea:Daegu City:Daegu City|\
South Korea:Incheon City:Incheon City|\
South Korea:Gwangju City:Gwangju City|\
South Korea:Daejeon City:Daejeon City|\
South Korea:Ulsan:Ulsan|\
South Korea:Gyeonggi Province:Gyeonggi Province|\
South Korea:Gangwon Province:Gangwon Province|\
South Korea:North Chungcheong Province:North Chungcheong Province|\
South Korea:South Chungcheong Province:South Chungcheong Province|\
South Korea:North Jeolla Province:North Jeolla Province|\
South Korea:South Jeolla Province:South Jeolla Province|\
South Korea:North Gyeongsang Province:North Gyeongsang Province|\
South Korea:South Gyeongsang Province:South Gyeongsang Province|\
South Korea:Jeju:Jeju|\
Kuwait:Al Ahmadi:Al Ahmadi|\
Kuwait:Al Farwaniyah:Al Farwaniyah|\
Kuwait:Al Asimah:Al Asimah|\
Kuwait:Al Jahra:Al Jahra|\
Kuwait:Hawalli:Hawalli|\
Kuwait:Mubarak Al-Kabeer:Mubarak Al-Kabeer|\
Kyrgyzstan:Batken Oblasty:Batken Oblasty|\
Kyrgyzstan:Bishkek Shaary:Bishkek Shaary|\
Kyrgyzstan:Chuy Oblasty:Chuy Oblasty|\
Kyrgyzstan:Jalal-Abad Oblasty:Jalal-Abad Oblasty|\
Kyrgyzstan:Naryn Oblasty:Naryn Oblasty|\
Kyrgyzstan:Osh Oblasty:Osh Oblasty|\
Kyrgyzstan:Talas Oblasty:Talas Oblasty|\
Kyrgyzstan:Ysyk-Kol Oblasty:Ysyk-Kol Oblasty|\
Laos:Attapu:Attapu|\
Laos:Bokeo:Bokeo|\
Laos:Bolikhamxai:Bolikhamxai|\
Laos:Champasak:Champasak|\
Laos:Houaphan:Houaphan|\
Laos:Khammouan:Khammouan|\
Laos:Louangnamtha:Louangnamtha|\
Laos:Louangphrabang:Louangphrabang|\
Laos:Oudomxai:Oudomxai|\
Laos:Phongsali:Phongsali|\
Laos:Salavan:Salavan|\
Laos:Savannakhet:Savannakhet|\
Laos:Viangchan:Viangchan|\
Laos:Viangchan:Viangchan|\
Laos:Xaignabouli:Xaignabouli|\
Laos:Xaisomboun:Xaisomboun|\
Laos:Xekong:Xekong|\
Laos:Xiangkhoang:Xiangkhoang|\
Latvia:Aizkraukles Rajons:Aizkraukles Rajons|\
Latvia:Aluksnes Rajons:Aluksnes Rajons|\
Latvia:Balvu Rajons:Balvu Rajons|\
Latvia:Bauskas Rajons:Bauskas Rajons|\
Latvia:Cesu Rajons:Cesu Rajons|\
Latvia:Daugavpils:Daugavpils|\
Latvia:Daugavpils Rajons:Daugavpils Rajons|\
Latvia:Dobeles Rajons:Dobeles Rajons|\
Latvia:Gulbenes Rajons:Gulbenes Rajons|\
Latvia:Jekabpils Rajons:Jekabpils Rajons|\
Latvia:Jelgava:Jelgava|\
Latvia:Jelgavas Rajons:Jelgavas Rajons|\
Latvia:Jurmala:Jurmala|\
Latvia:Kraslavas Rajons:Kraslavas Rajons|\
Latvia:Kuldigas Rajons:Kuldigas Rajons|\
Latvia:Liepaja:Liepaja|\
Latvia:Liepajas Rajons:Liepajas Rajons|\
Latvia:Limbazu Rajons:Limbazu Rajons|\
Latvia:Ludzas Rajons:Ludzas Rajons|\
Latvia:Madonas Rajons:Madonas Rajons|\
Latvia:Ogres Rajons:Ogres Rajons|\
Latvia:Preilu Rajons:Preilu Rajons|\
Latvia:Rezekne:Rezekne|\
Latvia:Rezeknes Rajons:Rezeknes Rajons|\
Latvia:Riga:Riga|\
Latvia:Rigas Rajons:Rigas Rajons|\
Latvia:Saldus Rajons:Saldus Rajons|\
Latvia:Talsu Rajons:Talsu Rajons|\
Latvia:Tukuma Rajons:Tukuma Rajons|\
Latvia:Valkas Rajons:Valkas Rajons|\
Latvia:Valmieras Rajons:Valmieras Rajons|\
Latvia:Ventspils:Ventspils|\
Latvia:Ventspils Rajons:Ventspils Rajons|\
Lebanon:Beyrouth:Beyrouth|\
Lebanon:Beqaa:Beqaa|\
Lebanon:Liban-Nord:Liban-Nord|\
Lebanon:Liban-Sud:Liban-Sud|\
Lebanon:Mont-Liban:Mont-Liban|\
Lebanon:Nabatiye:Nabatiye|\
Lesotho:Berea:Berea|\
Lesotho:Butha-Buthe:Butha-Buthe|\
Lesotho:Leribe:Leribe|\
Lesotho:Mafeteng:Mafeteng|\
Lesotho:Maseru:Maseru|\
Lesotho:Mohale\'s Hoek:Mohale\'s Hoek|\
Lesotho:Mokhotlong:Mokhotlong|\
Lesotho:Qacha\'s Nek:Qacha\'s Nek|\
Lesotho:Quthing:Quthing|\
Lesotho:Thaba-Tseka:Thaba-Tseka|\
Liberia:Bomi:Bomi|\
Liberia:Bong:Bong|\
Liberia:Gbarpolu:Gbarpolu|\
Liberia:Grand Bassa:Grand Bassa|\
Liberia:Grand Cape Mount:Grand Cape Mount|\
Liberia:Grand Gedeh:Grand Gedeh|\
Liberia:Grand Kru:Grand Kru|\
Liberia:Lofa:Lofa|\
Liberia:Margibi:Margibi|\
Liberia:Maryland:Maryland|\
Liberia:Montserrado:Montserrado|\
Liberia:Nimba:Nimba|\
Liberia:River Cess:River Cess|\
Liberia:River Gee:River Gee|\
Liberia:Sinoe:Sinoe|\
Libya:Ajdabiya:Ajdabiya|\
Libya:Al \'Aziziyah:Al \'Aziziyah|\
Libya:Al Fatih:Al Fatih|\
Libya:Al Jabal al Akhdar:Al Jabal al Akhdar|\
Libya:Al Jufrah:Al Jufrah|\
Libya:Al Khums:Al Khums|\
Libya:Al Kufrah:Al Kufrah|\
Libya:An Nuqat al Khams:An Nuqat al Khams|\
Libya:Ash Shati\':Ash Shati\'|\
Libya:Awbari:Awbari|\
Libya:Az Zawiyah:Az Zawiyah|\
Libya:Banghazi:Banghazi|\
Libya:Darnah:Darnah|\
Libya:Ghadamis:Ghadamis|\
Libya:Gharyan:Gharyan|\
Libya:Misratah:Misratah|\
Libya:Murzuq:Murzuq|\
Libya:Sabha:Sabha|\
Libya:Sawfajjin:Sawfajjin|\
Libya:Surt:Surt|\
Libya:Tarabulus:Tarabulus|\
Libya:Tarhunah:Tarhunah|\
Libya:Tubruq:Tubruq|\
Libya:Yafran:Yafran|\
Libya:Zlitan:Zlitan|\
Liechtenstein:Balzers:Balzers|\
Liechtenstein:Eschen:Eschen|\
Liechtenstein:Gamprin:Gamprin|\
Liechtenstein:Mauren:Mauren|\
Liechtenstein:Planken:Planken|\
Liechtenstein:Ruggell:Ruggell|\
Liechtenstein:Schaan:Schaan|\
Liechtenstein:Schellenberg:Schellenberg|\
Liechtenstein:Triesen:Triesen|\
Liechtenstein:Triesenberg:Triesenberg|\
Liechtenstein:Vaduz:Vaduz|\
Lithuania:Alytaus:Alytaus|\
Lithuania:Kauno:Kauno|\
Lithuania:Klaipedos:Klaipedos|\
Lithuania:Marijampoles:Marijampoles|\
Lithuania:Panevezio:Panevezio|\
Lithuania:Siauliu:Siauliu|\
Lithuania:Taurages:Taurages|\
Lithuania:Telsiu:Telsiu|\
Lithuania:Utenos:Utenos|\
Lithuania:Vilniaus:Vilniaus|\
Luxembourg:Diekirch:Diekirch|\
Luxembourg:Grevenmacher:Grevenmacher|\
Luxembourg:Luxembourg:Luxembourg|\
Macedonia:Aerodrom:Aerodrom|\
Macedonia:Aracinovo:Aracinovo|\
Macedonia:Berovo:Berovo|\
Macedonia:Bitola:Bitola|\
Macedonia:Bogdanci:Bogdanci|\
Macedonia:Bogovinje:Bogovinje|\
Macedonia:Bosilovo:Bosilovo|\
Macedonia:Brvenica:Brvenica|\
Macedonia:Butel:Butel|\
Macedonia:Cair:Cair|\
Macedonia:Caska:Caska|\
Macedonia:Centar:Centar|\
Macedonia:Centar Zupa:Centar Zupa|\
Macedonia:Cesinovo:Cesinovo|\
Macedonia:Cucer-Sandevo:Cucer-Sandevo|\
Macedonia:Debar:Debar|\
Macedonia:Debartsa:Debartsa|\
Macedonia:Delcevo:Delcevo|\
Macedonia:Demir Hisar:Demir Hisar|\
Macedonia:Demir Kapija:Demir Kapija|\
Macedonia:Dojran:Dojran|\
Macedonia:Dolneni:Dolneni|\
Macedonia:Drugovo:Drugovo|\
Macedonia:Gazi Baba:Gazi Baba|\
Macedonia:Gevgelija:Gevgelija|\
Macedonia:Gjorce Petrov:Gjorce Petrov|\
Macedonia:Gostivar:Gostivar|\
Macedonia:Gradsko:Gradsko|\
Macedonia:Ilinden:Ilinden|\
Macedonia:Jegunovce:Jegunovce|\
Macedonia:Karbinci:Karbinci|\
Macedonia:Karpos:Karpos|\
Macedonia:Kavadarci:Kavadarci|\
Macedonia:Kicevo:Kicevo|\
Macedonia:Kisela Voda:Kisela Voda|\
Macedonia:Kocani:Kocani|\
Macedonia:Konce:Konce|\
Macedonia:Kratovo:Kratovo|\
Macedonia:Kriva Palanka:Kriva Palanka|\
Macedonia:Krivogastani:Krivogastani|\
Macedonia:Krusevo:Krusevo|\
Macedonia:Kumanovo:Kumanovo|\
Macedonia:Lipkovo:Lipkovo|\
Macedonia:Lozovo:Lozovo|\
Macedonia:Makedonska Kamenica:Makedonska Kamenica|\
Macedonia:Makedonski Brod:Makedonski Brod|\
Macedonia:Mavrovo i Rastusa:Mavrovo i Rastusa|\
Macedonia:Mogila:Mogila|\
Macedonia:Negotino:Negotino|\
Macedonia:Novaci:Novaci|\
Macedonia:Novo Selo:Novo Selo|\
Macedonia:Ohrid:Ohrid|\
Macedonia:Oslomej:Oslomej|\
Macedonia:Pehcevo:Pehcevo|\
Macedonia:Petrovec:Petrovec|\
Macedonia:Plasnica:Plasnica|\
Macedonia:Prilep:Prilep|\
Macedonia:Probistip:Probistip|\
Macedonia:Radovis:Radovis|\
Macedonia:Rankovce:Rankovce|\
Macedonia:Resen:Resen|\
Macedonia:Rosoman:Rosoman|\
Macedonia:Saraj:Saraj|\
Macedonia:Skopje:Skopje|\
Macedonia:Sopiste:Sopiste|\
Macedonia:Staro Nagoricane:Staro Nagoricane|\
Macedonia:Stip:Stip|\
Macedonia:Struga:Struga|\
Macedonia:Strumica:Strumica|\
Macedonia:Studenicani:Studenicani|\
Macedonia:Suto Orizari:Suto Orizari|\
Macedonia:Sveti Nikole:Sveti Nikole|\
Macedonia:Tearce:Tearce|\
Macedonia:Tetovo:Tetovo|\
Macedonia:Valandovo:Valandovo|\
Macedonia:Vasilevo:Vasilevo|\
Macedonia:Veles:Veles|\
Macedonia:Vevcani:Vevcani|\
Macedonia:Vinica:Vinica|\
Macedonia:Vranestica:Vranestica|\
Macedonia:Vrapciste:Vrapciste|\
Macedonia:Zajas:Zajas|\
Macedonia:Zelenikovo:Zelenikovo|\
Macedonia:Zelino:Zelino|\
Macedonia:Zrnovci:Zrnovci|\
Madagascar:Antananarivo:Antananarivo|\
Madagascar:Antsiranana:Antsiranana|\
Madagascar:Fianarantsoa:Fianarantsoa|\
Madagascar:Mahajanga:Mahajanga|\
Madagascar:Toamasina:Toamasina|\
Madagascar:Toliara:Toliara|\
Malawi:Balaka:Balaka|\
Malawi:Blantyre:Blantyre|\
Malawi:Chikwawa:Chikwawa|\
Malawi:Chiradzulu:Chiradzulu|\
Malawi:Chitipa:Chitipa|\
Malawi:Dedza:Dedza|\
Malawi:Dowa:Dowa|\
Malawi:Karonga:Karonga|\
Malawi:Kasungu:Kasungu|\
Malawi:Likoma:Likoma|\
Malawi:Lilongwe:Lilongwe|\
Malawi:Machinga:Machinga|\
Malawi:Mangochi:Mangochi|\
Malawi:Mchinji:Mchinji|\
Malawi:Mulanje:Mulanje|\
Malawi:Mwanza:Mwanza|\
Malawi:Mzimba:Mzimba|\
Malawi:Ntcheu:Ntcheu|\
Malawi:Nkhata Bay:Nkhata Bay|\
Malawi:Nkhotakota:Nkhotakota|\
Malawi:Nsanje:Nsanje|\
Malawi:Ntchisi:Ntchisi|\
Malawi:Phalombe:Phalombe|\
Malawi:Rumphi:Rumphi|\
Malawi:Salima:Salima|\
Malawi:Thyolo:Thyolo|\
Malawi:Zomba:Zomba|\
Malaysia:Johor:Johor|\
Malaysia:Kedah:Kedah|\
Malaysia:Kelantan:Kelantan|\
Malaysia:Kuala Lumpur:Kuala Lumpur|\
Malaysia:Labuan:Labuan|\
Malaysia:Malacca:Malacca|\
Malaysia:Negeri Sembilan:Negeri Sembilan|\
Malaysia:Pahang:Pahang|\
Malaysia:Perak:Perak|\
Malaysia:Perlis:Perlis|\
Malaysia:Penang:Penang|\
Malaysia:Sabah:Sabah|\
Malaysia:Sarawak:Sarawak|\
Malaysia:Selangor:Selangor|\
Malaysia:Terengganu:Terengganu|\
Maldives:Alifu:Alifu|\
Maldives:Baa:Baa|\
Maldives:Dhaalu:Dhaalu|\
Maldives:Faafu:Faafu|\
Maldives:Gaafu Alifu:Gaafu Alifu|\
Maldives:Gaafu Dhaalu:Gaafu Dhaalu|\
Maldives:Gnaviyani:Gnaviyani|\
Maldives:Haa Alifu:Haa Alifu|\
Maldives:Haa Dhaalu:Haa Dhaalu|\
Maldives:Kaafu:Kaafu|\
Maldives:Laamu:Laamu|\
Maldives:Lhaviyani:Lhaviyani|\
Maldives:Maale:Maale|\
Maldives:Meemu:Meemu|\
Maldives:Noonu:Noonu|\
Maldives:Raa:Raa|\
Maldives:Seenu:Seenu|\
Maldives:Shaviyani:Shaviyani|\
Maldives:Thaa:Thaa|\
Maldives:Vaavu:Vaavu|\
Mali:Bamako (Capital):Bamako (Capital)|\
Mali:Gao:Gao|\
Mali:Kayes:Kayes|\
Mali:Kidal:Kidal|\
Mali:Koulikoro:Koulikoro|\
Mali:Mopti:Mopti|\
Mali:Segou:Segou|\
Mali:Sikasso:Sikasso|\
Mali:Tombouctou:Tombouctou|\
Mauritania:Adrar:Adrar|\
Mauritania:Assaba:Assaba|\
Mauritania:Brakna:Brakna|\
Mauritania:Dakhlet Nouadhibou:Dakhlet Nouadhibou|\
Mauritania:Gorgol:Gorgol|\
Mauritania:Guidimaka:Guidimaka|\
Mauritania:Hodh Ech Chargui:Hodh Ech Chargui|\
Mauritania:Hodh El Gharbi:Hodh El Gharbi|\
Mauritania:Inchiri:Inchiri|\
Mauritania:Nouakchott:Nouakchott|\
Mauritania:Tagant:Tagant|\
Mauritania:Tiris Zemmour:Tiris Zemmour|\
Mauritania:Trarza:Trarza|\
Mauritius:Agalega Islands:Agalega Islands|\
Mauritius:Black River:Black River|\
Mauritius:Cargados Carajos Shoals:Cargados Carajos Shoals|\
Mauritius:Flacq:Flacq|\
Mauritius:Grand Port:Grand Port|\
Mauritius:Moka:Moka|\
Mauritius:Pamplemousses:Pamplemousses|\
Mauritius:Plaines Wilhems:Plaines Wilhems|\
Mauritius:Port Louis:Port Louis|\
Mauritius:Riviere du Rempart:Riviere du Rempart|\
Mauritius:Rodrigues:Rodrigues|\
Mauritius:Savanne:Savanne|\
Mexico:Aguascalientes:Aguascalientes|\
Mexico:Baja California:Baja California|\
Mexico:Baja California Sur:Baja California Sur|\
Mexico:Campeche:Campeche|\
Mexico:Chiapas:Chiapas|\
Mexico:Chihuahua:Chihuahua|\
Mexico:Coahuila de Zaragoza:Coahuila de Zaragoza|\
Mexico:Colima:Colima|\
Mexico:Distrito Federal:Distrito Federal|\
Mexico:Durango:Durango|\
Mexico:Guanajuato:Guanajuato|\
Mexico:Guerrero:Guerrero|\
Mexico:Hidalgo:Hidalgo|\
Mexico:Jalisco:Jalisco|\
Mexico:Mexico:Mexico|\
Mexico:Michoacan de Ocampo:Michoacan de Ocampo|\
Mexico:Morelos:Morelos|\
Mexico:Nayarit:Nayarit|\
Mexico:Nuevo Leon:Nuevo Leon|\
Mexico:Oaxaca:Oaxaca|\
Mexico:Puebla:Puebla|\
Mexico:Queretaro de Arteaga:Queretaro de Arteaga|\
Mexico:Quintana Roo:Quintana Roo|\
Mexico:San Luis Potosi:San Luis Potosi|\
Mexico:Sinaloa:Sinaloa|\
Mexico:Sonora:Sonora|\
Mexico:Tabasco:Tabasco|\
Mexico:Tamaulipas:Tamaulipas|\
Mexico:Tlaxcala:Tlaxcala|\
Mexico:Veracruz-Llave:Veracruz-Llave|\
Mexico:Yucatan:Yucatan|\
Mexico:Zacatecas:Zacatecas|\
Moldova:Anenii Noi:Anenii Noi|\
Moldova:Basarabeasca:Basarabeasca|\
Moldova:Briceni:Briceni|\
Moldova:Cahul:Cahul|\
Moldova:Cantemir:Cantemir|\
Moldova:Calarasi:Calarasi|\
Moldova:Causeni:Causeni|\
Moldova:Cimislia:Cimislia|\
Moldova:Criuleni:Criuleni|\
Moldova:Donduseni:Donduseni|\
Moldova:Drochia:Drochia|\
Moldova:Dubasari:Dubasari|\
Moldova:Edinet:Edinet|\
Moldova:Falesti:Falesti|\
Moldova:Floresti:Floresti|\
Moldova:Glodeni:Glodeni|\
Moldova:Hincesti:Hincesti|\
Moldova:Ialoveni:Ialoveni|\
Moldova:Leova:Leova|\
Moldova:Nisporeni:Nisporeni|\
Moldova:Ocnita:Ocnita|\
Moldova:Orhei:Orhei|\
Moldova:Rezina:Rezina|\
Moldova:Riscani:Riscani|\
Moldova:Singerei:Singerei|\
Moldova:Soldanesti:Soldanesti|\
Moldova:Soroca:Soroca|\
Moldova:Stefan-Voda:Stefan-Voda|\
Moldova:Straseni:Straseni|\
Moldova:Taraclia:Taraclia|\
Moldova:Telenesti:Telenesti|\
Moldova:Ungheni:Ungheni|\
Moldova:Balti:Balti|\
Moldova:Bender:Bender|\
Moldova:Chisinau:Chisinau|\
Moldova:Gagauzia:Gagauzia|\
Moldova:Stinga Nistrului:Stinga Nistrului|\
Mongolia:Arhangay:Arhangay|\
Mongolia:Bayanhongor:Bayanhongor|\
Mongolia:Bayan-Olgiy:Bayan-Olgiy|\
Mongolia:Bulgan:Bulgan|\
Mongolia:Darhan Uul:Darhan Uul|\
Mongolia:Dornod:Dornod|\
Mongolia:Dornogovi:Dornogovi|\
Mongolia:Dundgovi:Dundgovi|\
Mongolia:Dzavhan:Dzavhan|\
Mongolia:Govi-Altay:Govi-Altay|\
Mongolia:Govi-Sumber:Govi-Sumber|\
Mongolia:Hentiy:Hentiy|\
Mongolia:Hovd:Hovd|\
Mongolia:Hovsgol:Hovsgol|\
Mongolia:Omnogovi:Omnogovi|\
Mongolia:Orhon:Orhon|\
Mongolia:Ovorhangay:Ovorhangay|\
Mongolia:Selenge:Selenge|\
Mongolia:Suhbaatar:Suhbaatar|\
Mongolia:Tov:Tov|\
Mongolia:Ulaanbaatar:Ulaanbaatar|\
Mongolia:Uvs:Uvs|\
Morocco:Agadir:Agadir|\
Morocco:Al Hoceima:Al Hoceima|\
Morocco:Azilal:Azilal|\
Morocco:Beni Mellal:Beni Mellal|\
Morocco:Ben Slimane:Ben Slimane|\
Morocco:Boulemane:Boulemane|\
Morocco:Casablanca:Casablanca|\
Morocco:Chaouen:Chaouen|\
Morocco:El Jadida:El Jadida|\
Morocco:El Kelaa des Sraghna:El Kelaa des Sraghna|\
Morocco:Er Rachidia:Er Rachidia|\
Morocco:Essaouira:Essaouira|\
Morocco:Fes:Fes|\
Morocco:Figuig:Figuig|\
Morocco:Guelmim:Guelmim|\
Morocco:Ifrane:Ifrane|\
Morocco:Kenitra:Kenitra|\
Morocco:Khemisset:Khemisset|\
Morocco:Khenifra:Khenifra|\
Morocco:Khouribga:Khouribga|\
Morocco:Laayoune:Laayoune|\
Morocco:Larache:Larache|\
Morocco:Marrakech:Marrakech|\
Morocco:Meknes:Meknes|\
Morocco:Nador:Nador|\
Morocco:Ouarzazate:Ouarzazate|\
Morocco:Oujda:Oujda|\
Morocco:Rabat-Sale:Rabat-Sale|\
Morocco:Safi:Safi|\
Morocco:Settat:Settat|\
Morocco:Sidi Kacem:Sidi Kacem|\
Morocco:Tangier:Tangier|\
Morocco:Tan-Tan:Tan-Tan|\
Morocco:Taounate:Taounate|\
Morocco:Taroudannt:Taroudannt|\
Morocco:Tata:Tata|\
Morocco:Taza:Taza|\
Morocco:Tetouan:Tetouan|\
Morocco:Tiznit:Tiznit|\
Mozambique:Cabo Delgado:Cabo Delgado|\
Mozambique:Gaza:Gaza|\
Mozambique:Inhambane:Inhambane|\
Mozambique:Manica:Manica|\
Mozambique:Maputo:Maputo|\
Mozambique:Cidade de Maputo:Cidade de Maputo|\
Mozambique:Nampula:Nampula|\
Mozambique:Niassa:Niassa|\
Mozambique:Sofala:Sofala|\
Mozambique:Tete:Tete|\
Mozambique:Zambezia:Zambezia|\
Namibia:Caprivi:Caprivi|\
Namibia:Erongo:Erongo|\
Namibia:Hardap:Hardap|\
Namibia:Karas:Karas|\
Namibia:Khomas:Khomas|\
Namibia:Kunene:Kunene|\
Namibia:Ohangwena:Ohangwena|\
Namibia:Okavango:Okavango|\
Namibia:Omaheke:Omaheke|\
Namibia:Omusati:Omusati|\
Namibia:Oshana:Oshana|\
Namibia:Oshikoto:Oshikoto|\
Namibia:Otjozondjupa:Otjozondjupa|\
Nepal:Bagmati:Bagmati|\
Nepal:Bheri:Bheri|\
Nepal:Dhawalagiri:Dhawalagiri|\
Nepal:Gandaki:Gandaki|\
Nepal:Janakpur:Janakpur|\
Nepal:Karnali:Karnali|\
Nepal:Kosi:Kosi|\
Nepal:Lumbini:Lumbini|\
Nepal:Mahakali:Mahakali|\
Nepal:Mechi:Mechi|\
Nepal:Narayani:Narayani|\
Nepal:Rapti:Rapti|\
Nepal:Sagarmatha:Sagarmatha|\
Nepal:Seti:Seti|\
Netherlands:Drenthe:Drenthe|\
Netherlands:Flevoland:Flevoland|\
Netherlands:Friesland:Friesland|\
Netherlands:Gelderland:Gelderland|\
Netherlands:Groningen:Groningen|\
Netherlands:Limburg:Limburg|\
Netherlands:Noord-Brabant:Noord-Brabant|\
Netherlands:Noord-Holland:Noord-Holland|\
Netherlands:Overijssel:Overijssel|\
Netherlands:Utrecht:Utrecht|\
Netherlands:Zeeland:Zeeland|\
Netherlands:Zuid-Holland:Zuid-Holland|\
New Zealand:Auckland:Auckland|\
New Zealand:Bay of Plenty:Bay of Plenty|\
New Zealand:Canterbury:Canterbury|\
New Zealand:Chatham Islands:Chatham Islands|\
New Zealand:Gisborne:Gisborne|\
New Zealand:Hawke\'s Bay:Hawke\'s Bay|\
New Zealand:Manawatu-Wanganui:Manawatu-Wanganui|\
New Zealand:Marlborough:Marlborough|\
New Zealand:Nelson:Nelson|\
New Zealand:Northland:Northland|\
New Zealand:Otago:Otago|\
New Zealand:Southland:Southland|\
New Zealand:Taranaki:Taranaki|\
New Zealand:Tasman:Tasman|\
New Zealand:Waikato:Waikato|\
New Zealand:Wellington:Wellington|\
New Zealand:West Coast:West Coast|\
Nicaragua:Atlantico Norte:Atlantico Norte|\
Nicaragua:Atlantico Sur:Atlantico Sur|\
Nicaragua:Boaco:Boaco|\
Nicaragua:Carazo:Carazo|\
Nicaragua:Chinandega:Chinandega|\
Nicaragua:Chontales:Chontales|\
Nicaragua:Esteli:Esteli|\
Nicaragua:Granada:Granada|\
Nicaragua:Jinotega:Jinotega|\
Nicaragua:Leon:Leon|\
Nicaragua:Madriz:Madriz|\
Nicaragua:Managua:Managua|\
Nicaragua:Masaya:Masaya|\
Nicaragua:Matagalpa:Matagalpa|\
Nicaragua:Nueva Segovia:Nueva Segovia|\
Nicaragua:Rio San Juan:Rio San Juan|\
Nicaragua:Rivas:Rivas|\
Nigeria:Abia:Abia|\
Nigeria:Abuja Federal Capital:Abuja Federal Capital|\
Nigeria:Adamawa:Adamawa|\
Nigeria:Akwa Ibom:Akwa Ibom|\
Nigeria:Anambra:Anambra|\
Nigeria:Bauchi:Bauchi|\
Nigeria:Bayelsa:Bayelsa|\
Nigeria:Benue:Benue|\
Nigeria:Borno:Borno|\
Nigeria:Cross River:Cross River|\
Nigeria:Delta:Delta|\
Nigeria:Ebonyi:Ebonyi|\
Nigeria:Edo:Edo|\
Nigeria:Ekiti:Ekiti|\
Nigeria:Enugu:Enugu|\
Nigeria:Gombe:Gombe|\
Nigeria:Imo:Imo|\
Nigeria:Jigawa:Jigawa|\
Nigeria:Kaduna:Kaduna|\
Nigeria:Kano:Kano|\
Nigeria:Katsina:Katsina|\
Nigeria:Kebbi:Kebbi|\
Nigeria:Kogi:Kogi|\
Nigeria:Kwara:Kwara|\
Nigeria:Lagos:Lagos|\
Nigeria:Nassarawa:Nassarawa|\
Nigeria:Niger:Niger|\
Nigeria:Ogun:Ogun|\
Nigeria:Ondo:Ondo|\
Nigeria:Osun:Osun|\
Nigeria:Oyo:Oyo|\
Nigeria:Plateau:Plateau|\
Nigeria:Rivers:Rivers|\
Nigeria:Sokoto:Sokoto|\
Nigeria:Taraba:Taraba|\
Nigeria:Yobe:Yobe|\
Nigeria:Zamfara:Zamfara|\
Niger:Agadez:Agadez|\
Niger:Diffa:Diffa|\
Niger:Dosso:Dosso|\
Niger:Maradi:Maradi|\
Niger:Niamey:Niamey|\
Niger:Tahoua:Tahoua|\
Niger:Tillaberi:Tillaberi|\
Niger:Zinder:Zinder|\
Norway:Akershus:Akershus|\
Norway:Aust-Agder:Aust-Agder|\
Norway:Buskerud:Buskerud|\
Norway:Finnmark:Finnmark|\
Norway:Hedmark:Hedmark|\
Norway:Hordaland:Hordaland|\
Norway:More og Romsdal:More og Romsdal|\
Norway:Nordland:Nordland|\
Norway:Nord-Trondelag:Nord-Trondelag|\
Norway:Oppland:Oppland|\
Norway:Oslo:Oslo|\
Norway:Ostfold:Ostfold|\
Norway:Rogaland:Rogaland|\
Norway:Sogn og Fjordane:Sogn og Fjordane|\
Norway:Sor-Trondelag:Sor-Trondelag|\
Norway:Telemark:Telemark|\
Norway:Troms:Troms|\
Norway:Vest-Agder:Vest-Agder|\
Norway:Vestfold:Vestfold|\
Oman:Ad Dakhiliyah:Ad Dakhiliyah|\
Oman:Al Batinah:Al Batinah|\
Oman:Al Wusta:Al Wusta|\
Oman:Ash Sharqiyah:Ash Sharqiyah|\
Oman:Az Zahirah:Az Zahirah|\
Oman:Masqat:Masqat|\
Oman:Musandam:Musandam|\
Oman:Dhofar:Dhofar|\
Palestine:West Bank:West Bank|\
Palestine:Gaza Strip:Gaza Strip|\
Pakistan:Balochistan:Balochistan|\
Pakistan:North-West Frontier Province:North-West Frontier Province|\
Pakistan:Punjab:Punjab|\
Pakistan:Sindh:Sindh|\
Pakistan:Islamabad Capital Territory:Islamabad Capital Territory|\
Pakistan:Federally Administered Tribal Areas:Federally Administered Tribal Areas|\
Panama:Bocas del Toro:Bocas del Toro|\
Panama:Chiriqui:Chiriqui|\
Panama:Cocle:Cocle|\
Panama:Colon:Colon|\
Panama:Darien:Darien|\
Panama:Herrera:Herrera|\
Panama:Los Santos:Los Santos|\
Panama:Panama:Panama|\
Panama:San Blas:San Blas|\
Panama:Veraguas:Veraguas|\
Papua New Guinea:Bougainville:Bougainville|\
Papua New Guinea:Central:Central|\
Papua New Guinea:Chimbu:Chimbu|\
Papua New Guinea:Eastern Highlands:Eastern Highlands|\
Papua New Guinea:East New Britain:East New Britain|\
Papua New Guinea:East Sepik:East Sepik|\
Papua New Guinea:Enga:Enga|\
Papua New Guinea:Gulf:Gulf|\
Papua New Guinea:Madang:Madang|\
Papua New Guinea:Manus:Manus|\
Papua New Guinea:Milne Bay:Milne Bay|\
Papua New Guinea:Morobe:Morobe|\
Papua New Guinea:National Capital:National Capital|\
Papua New Guinea:New Ireland:New Ireland|\
Papua New Guinea:Northern:Northern|\
Papua New Guinea:Sandaun:Sandaun|\
Papua New Guinea:Southern Highlands:Southern Highlands|\
Papua New Guinea:Western:Western|\
Papua New Guinea:Western Highlands:Western Highlands|\
Papua New Guinea:West New Britain:West New Britain|\
Paraguay:Alto Paraguay:Alto Paraguay|\
Paraguay:Alto Parana:Alto Parana|\
Paraguay:Amambay:Amambay|\
Paraguay:Asuncion:Asuncion|\
Paraguay:Boqueron:Boqueron|\
Paraguay:Caaguazu:Caaguazu|\
Paraguay:Caazapa:Caazapa|\
Paraguay:Canindeyu:Canindeyu|\
Paraguay:Central:Central|\
Paraguay:Concepcion:Concepcion|\
Paraguay:Cordillera:Cordillera|\
Paraguay:Guaira:Guaira|\
Paraguay:Itapua:Itapua|\
Paraguay:Misiones:Misiones|\
Paraguay:Neembucu:Neembucu|\
Paraguay:Paraguari:Paraguari|\
Paraguay:Presidente Hayes:Presidente Hayes|\
Paraguay:San Pedro:San Pedro|\
Peru:Amazonas:Amazonas|\
Peru:Ancash:Ancash|\
Peru:Apurimac:Apurimac|\
Peru:Arequipa:Arequipa|\
Peru:Ayacucho:Ayacucho|\
Peru:Cajamarca:Cajamarca|\
Peru:Callao:Callao|\
Peru:Cusco:Cusco|\
Peru:Huancavelica:Huancavelica|\
Peru:Huanuco:Huanuco|\
Peru:Ica:Ica|\
Peru:Junin:Junin|\
Peru:La Libertad:La Libertad|\
Peru:Lambayeque:Lambayeque|\
Peru:Lima:Lima|\
Peru:Loreto:Loreto|\
Peru:Madre de Dios:Madre de Dios|\
Peru:Moquegua:Moquegua|\
Peru:Pasco:Pasco|\
Peru:Piura:Piura|\
Peru:Puno:Puno|\
Peru:San Martin:San Martin|\
Peru:Tacna:Tacna|\
Peru:Tumbes:Tumbes|\
Peru:Ucayali:Ucayali|\
Philippines:Abra:Abra|\
Philippines:Agusan del Norte:Agusan del Norte|\
Philippines:Agusan del Sur:Agusan del Sur|\
Philippines:Aklan:Aklan|\
Philippines:Albay:Albay|\
Philippines:Antique:Antique|\
Philippines:Apayao:Apayao|\
Philippines:Aurora:Aurora|\
Philippines:Basilan:Basilan|\
Philippines:Bataan:Bataan|\
Philippines:Batanes:Batanes|\
Philippines:Batangas:Batangas|\
Philippines:Biliran:Biliran|\
Philippines:Benguet:Benguet|\
Philippines:Bohol:Bohol|\
Philippines:Bukidnon:Bukidnon|\
Philippines:Bulacan:Bulacan|\
Philippines:Cagayan:Cagayan|\
Philippines:Camarines Norte:Camarines Norte|\
Philippines:Camarines Sur:Camarines Sur|\
Philippines:Camiguin:Camiguin|\
Philippines:Capiz:Capiz|\
Philippines:Catanduanes:Catanduanes|\
Philippines:Cavite:Cavite|\
Philippines:Cebu:Cebu|\
Philippines:Compostela:Compostela|\
Philippines:Davao del Norte:Davao del Norte|\
Philippines:Davao del Sur:Davao del Sur|\
Philippines:Davao Oriental:Davao Oriental|\
Philippines:Eastern Samar:Eastern Samar|\
Philippines:Guimaras:Guimaras|\
Philippines:Ifugao:Ifugao|\
Philippines:Ilocos Norte:Ilocos Norte|\
Philippines:Ilocos Sur:Ilocos Sur|\
Philippines:Iloilo:Iloilo|\
Philippines:Isabela:Isabela|\
Philippines:Kalinga:Kalinga|\
Philippines:Laguna:Laguna|\
Philippines:Lanao del Norte:Lanao del Norte|\
Philippines:Lanao del Sur:Lanao del Sur|\
Philippines:La Union:La Union|\
Philippines:Leyte:Leyte|\
Philippines:Maguindanao:Maguindanao|\
Philippines:Marinduque:Marinduque|\
Philippines:Masbate:Masbate|\
Philippines:Mindoro Occidental:Mindoro Occidental|\
Philippines:Mindoro Oriental:Mindoro Oriental|\
Philippines:Misamis Occidental:Misamis Occidental|\
Philippines:Misamis Oriental:Misamis Oriental|\
Philippines:Mountain Province:Mountain Province|\
Philippines:Negros Occidental:Negros Occidental|\
Philippines:Negros Oriental:Negros Oriental|\
Philippines:North Cotabato:North Cotabato|\
Philippines:Northern Samar:Northern Samar|\
Philippines:Nueva Ecija:Nueva Ecija|\
Philippines:Nueva Vizcaya:Nueva Vizcaya|\
Philippines:Palawan:Palawan|\
Philippines:Pampanga:Pampanga|\
Philippines:Pangasinan:Pangasinan|\
Philippines:Quezon:Quezon|\
Philippines:Quirino:Quirino|\
Philippines:Rizal:Rizal|\
Philippines:Romblon:Romblon|\
Philippines:Samar:Samar|\
Philippines:Sarangani:Sarangani|\
Philippines:Siquijor:Siquijor|\
Philippines:Sorsogon:Sorsogon|\
Philippines:South Cotabato:South Cotabato|\
Philippines:Southern Leyte:Southern Leyte|\
Philippines:Sultan Kudarat:Sultan Kudarat|\
Philippines:Sulu:Sulu|\
Philippines:Surigao del Norte:Surigao del Norte|\
Philippines:Surigao del Sur:Surigao del Sur|\
Philippines:Tarlac:Tarlac|\
Philippines:Tawi-Tawi:Tawi-Tawi|\
Philippines:Zambales:Zambales|\
Philippines:Zamboanga del Norte:Zamboanga del Norte|\
Philippines:Zamboanga del Sur:Zamboanga del Sur|\
Philippines:Zamboanga Sibugay:Zamboanga Sibugay|\
Poland:Greater Poland (Wielkopolskie):Greater Poland (Wielkopolskie)|\
Poland:Kuyavian-Pomeranian (Kujawsko-Pomorskie):Kuyavian-Pomeranian (Kujawsko-Pomorskie)|\
Poland:Lesser Poland (Malopolskie):Lesser Poland (Malopolskie)|\
Poland:Lodz (Lodzkie):Lodz (Lodzkie)|\
Poland:Lower Silesian (Dolnoslaskie):Lower Silesian (Dolnoslaskie)|\
Poland:Lublin (Lubelskie):Lublin (Lubelskie)|\
Poland:Lubusz (Lubuskie):Lubusz (Lubuskie)|\
Poland:Masovian (Mazowieckie):Masovian (Mazowieckie)|\
Poland:Opole (Opolskie):Opole (Opolskie)|\
Poland:Podlasie (Podlaskie):Podlasie (Podlaskie)|\
Poland:Pomeranian (Pomorskie):Pomeranian (Pomorskie)|\
Poland:Silesian (Slaskie):Silesian (Slaskie)|\
Poland:Subcarpathian (Podkarpackie):Subcarpathian (Podkarpackie)|\
Poland:Swietokrzyskie (Swietokrzyskie):Swietokrzyskie (Swietokrzyskie)|\
Poland:Warmian-Masurian (Warminsko-Mazurskie):Warmian-Masurian (Warminsko-Mazurskie)|\
Poland:West Pomeranian (Zachodniopomorskie):West Pomeranian (Zachodniopomorskie)|\
Portugal:Aveiro:Aveiro|\
Portugal:Acores:Acores|\
Portugal:Beja:Beja|\
Portugal:Braga:Braga|\
Portugal:Braganca:Braganca|\
Portugal:Castelo Branco:Castelo Branco|\
Portugal:Coimbra:Coimbra|\
Portugal:Evora:Evora|\
Portugal:Faro:Faro|\
Portugal:Guarda:Guarda|\
Portugal:Leiria:Leiria|\
Portugal:Lisboa:Lisboa|\
Portugal:Madeira:Madeira|\
Portugal:Portalegre:Portalegre|\
Portugal:Porto:Porto|\
Portugal:Santarem:Santarem|\
Portugal:Setubal:Setubal|\
Portugal:Viana do Castelo:Viana do Castelo|\
Portugal:Vila Real:Vila Real|\
Portugal:Viseu:Viseu|\
Qatar:Ad Dawhah:Ad Dawhah|\
Qatar:Al Ghuwayriyah:Al Ghuwayriyah|\
Qatar:Al Jumayliyah:Al Jumayliyah|\
Qatar:Al Khawr:Al Khawr|\
Qatar:Al Wakrah:Al Wakrah|\
Qatar:Ar Rayyan:Ar Rayyan|\
Qatar:Jarayan al Batinah:Jarayan al Batinah|\
Qatar:Madinat ash Shamal:Madinat ash Shamal|\
Qatar:Umm Sa\'id:Umm Sa\'id|\
Qatar:Umm Salal:Umm Salal|\
Romania:Alba:Alba|\
Romania:Arad:Arad|\
Romania:Arges:Arges|\
Romania:Bacau:Bacau|\
Romania:Bihor:Bihor|\
Romania:Bistrita-Nasaud:Bistrita-Nasaud|\
Romania:Botosani:Botosani|\
Romania:Braila:Braila|\
Romania:Brasov:Brasov|\
Romania:Bucuresti:Bucuresti|\
Romania:Buzau:Buzau|\
Romania:Calarasi:Calarasi|\
Romania:Caras-Severin:Caras-Severin|\
Romania:Cluj:Cluj|\
Romania:Constanta:Constanta|\
Romania:Covasna:Covasna|\
Romania:Dimbovita:Dimbovita|\
Romania:Dolj:Dolj|\
Romania:Galati:Galati|\
Romania:Gorj:Gorj|\
Romania:Giurgiu:Giurgiu|\
Romania:Harghita:Harghita|\
Romania:Hunedoara:Hunedoara|\
Romania:Ialomita:Ialomita|\
Romania:Iasi:Iasi|\
Romania:Ilfov:Ilfov|\
Romania:Maramures:Maramures|\
Romania:Mehedinti:Mehedinti|\
Romania:Mures:Mures|\
Romania:Neamt:Neamt|\
Romania:Olt:Olt|\
Romania:Prahova:Prahova|\
Romania:Salaj:Salaj|\
Romania:Satu Mare:Satu Mare|\
Romania:Sibiu:Sibiu|\
Romania:Suceava:Suceava|\
Romania:Teleorman:Teleorman|\
Romania:Timis:Timis|\
Romania:Tulcea:Tulcea|\
Romania:Vaslui:Vaslui|\
Romania:Vilcea:Vilcea|\
Romania:Vrancea:Vrancea|\
Russia:adygeya:Adygeya (Maikop)|\
Russia:buryatsky:Agin-Buryat Autonomous Area|\
Russia:altay:Altai Republic (Gorno-Altaisk)|\
Russia:altay2:Altai Territory (Barnaul)|\
Russia:amurskaya:Amur Region (Blagoveshchensk)|\
Russia:arkhangelsk:Arkhangelsk Region|\
Russia:astrahan:Astrakhan Region|\
Russia:bashkortostan:Bashkortostan (Ufa)|\
Russia:belgorod:Belgorod Region|\
Russia:bryansk:Bryansk Region|\
Russia:buryatiya:Buryatia (Ulan-Ude)|\
Russia:chechnya:Chechnya (Grozny)|\
Russia:chelyabinsk:Chelyabinsk Region|\
Russia:chita:Chita Region|\
Russia:chukotka:Chukotka Autonomous Area (Anadyr)|\
Russia:chuvashiya:Chuvashia (Cheboksary)|\
Russia:dagestan:Dagestan (Makhachkala)|\
Russia:evenkiyskiy:Evenkia Autonomous Area (Tura)|\
Russia:ingushetiya:Ingushetia (Magas)|\
Russia:irkutsk:Irkutsk Region|\
Russia:ivanovo:Ivanovo Region|\
Russia:evreyskaya:Jewish Autonomous Region (Birobidzhan)|\
Russia:kabardino-balkariya:Kabardino-Balkaria (Nalchik)|\
Russia:kaliningrad:Kaliningrad Region|\
Russia:kalmykiya:Kalmykia (Elista)|\
Russia:kaluga:Kaluga Region|\
Russia:kamchatskaya:Kamchatka (Petropavlovsk-Kamchatsky)|\
Russia:cherkesk:Karachayevo-Cherkessia (Cherkessk)|\
Russia:karelia:Karelia (Petrozavodsk)|\
Russia:kemerovskaya:Kemerovo Region|\
Russia:habarovskiy:Khabarovsk Territory|\
Russia:hakasiya:Khakassia (Abakan)|\
Russia:hanty-mansiysk:Khanty-Mansiisk Autonomous Area|\
Russia:kirov:Kirov Region|\
Russia:komi:Komi Republic (Syktyvkar)|\
Russia:koryakskiy:Koryak Autonomous Area (Palana)|\
Russia:kostroma:Kostroma Region|\
Russia:krasnodar:Krasnodar Territory|\
Russia:krasnoyarsk:Krasnoyarsk Territory|\
Russia:kurgan:Kurgan Region|\
Russia:kursk:Kursk Region|\
Russia:leningrad:Leningrad Region (St.Petersburg)|\
Russia:lipetsk:Lipetsk Region|\
Russia:magadanskaya:Magadan Region|\
Russia:mariyel:Marii-El Republic (Ioshkar-Ola)|\
Russia:mordoviya:Mordovia (Saransk)|\
Russia:moscow:Moscow|\
Russia:moskovskaya:Moscow Region|\
Russia:murmansk:Murmansk Region|\
Russia:nenets:Nenets Autonomous Area (Naryan-Mar)|\
Russia:nizhniy:Nizhny Novgorod Region|\
Russia:osetiya:North Ossetia (Vladikavkaz)|\
Russia:novgorod:Novgorod Region (Veliky Novgorod)|\
Russia:novosibirskaya:Novosibirsk Region|\
Russia:omsk:Omsk Region|\
Russia:orel:Orel Region|\
Russia:orenburg:Orenburg Region|\
Russia:penza:Penza Region|\
Russia:perm:Perm Territory|\
Russia:komi-perm:Perm Territory 1|\
Russia:primorskiy:Primorsky Territory (Vladivistok)|\
Russia:pskov:Pskov Region|\
Russia:rostov:Rostov Region (Rostov-on-Don)|\
Russia:ryazan:Ryazan Region|\
Russia:sakhalin:Sakhalin (Yuzhno-Sakhalinsk)|\
Russia:saha:Sakha-Yakutia (Yakutsk)|\
Russia:samara:Samara Region|\
Russia:saratov:Saratov Region|\
Russia:smolensk:Smolensk Region|\
Russia:stpetersburg:St. Petersburg|\
Russia:stavropol:Stavropol Territory|\
Russia:sverdlovsk:Sverdlovsk Region (Yekaterinburg)|\
Russia:taymyrskiy:Taimyr Autonomous Area (Dudinka)|\
Russia:tambov:Tambov Region|\
Russia:tatarstan:Tatarstan (Kazan)|\
Russia:tomsk:Tomsk Region|\
Russia:tula:Tula Region|\
Russia:tyva:Tuva (Kyzyl)|\
Russia:tver:Tver Region|\
Russia:tumen:Tyumen Region|\
Russia:udmurtiya:Udmurtia (Izhevsk)|\
Russia:ulianovsk:Ulyanovsk Region|\
Russia:ust-ordynsky:Ust-Ordynsky Buryatsky Autonomous Area |\
Russia:vladimir:Vladimir Region|\
Russia:volgograd:Volgograd Region|\
Russia:vologda:Vologda Region|\
Russia:voronezh:Voronezh Region|\
Russia:yamalo-nenetskiy:Yamal-Nenets Autonomous Area (Salekhard)|\
Russia:yaroslavl:Yaroslavl Region|\
Rwanda:Butare:Butare|\
Rwanda:Byumba:Byumba|\
Rwanda:Cyangugu:Cyangugu|\
Rwanda:Gikongoro:Gikongoro|\
Rwanda:Gisenyi:Gisenyi|\
Rwanda:Gitarama:Gitarama|\
Rwanda:Kibungo:Kibungo|\
Rwanda:Kibuye:Kibuye|\
Rwanda:Kigali Rurale:Kigali Rurale|\
Rwanda:Kigali-ville:Kigali-ville|\
Rwanda:Umutara:Umutara|\
Rwanda:Ruhengeri:Ruhengeri|\
Samoa:A\'ana:A\'ana|\
Samoa:Aiga-i-le-Tai:Aiga-i-le-Tai|\
Samoa:Atua:Atua|\
Samoa:Fa\'asaleleaga:Fa\'asaleleaga|\
Samoa:Gaga\'emauga:Gaga\'emauga|\
Samoa:Gagaifomauga:Gagaifomauga|\
Samoa:Palauli:Palauli|\
Samoa:Satupa\'itea:Satupa\'itea|\
Samoa:Tuamasaga:Tuamasaga|\
Samoa:Va\'a-o-Fonoti:Va\'a-o-Fonoti|\
Samoa:Vaisigano:Vaisigano|\
San Marino:Acquaviva:Acquaviva|\
San Marino:Borgo Maggiore:Borgo Maggiore|\
San Marino:Chiesanuova:Chiesanuova|\
San Marino:Domagnano:Domagnano|\
San Marino:Faetano:Faetano|\
San Marino:Fiorentino:Fiorentino|\
San Marino:Montegiardino:Montegiardino|\
San Marino:San Marino Citta:San Marino Citta|\
San Marino:Serravalle:Serravalle|\
Saudi Arabia:Al Bahah:Al Bahah|\
Saudi Arabia:Al Hudud ash Shamaliyah:Al Hudud ash Shamaliyah|\
Saudi Arabia:Al Jawf:Al Jawf|\
Saudi Arabia:Al Madinah:Al Madinah|\
Saudi Arabia:Al Qasim:Al Qasim|\
Saudi Arabia:Ar Riyad:Ar Riyad|\
Saudi Arabia:Ash Sharqiyah:Ash Sharqiyah|\
Saudi Arabia:\'Asir:\'Asir|\
Saudi Arabia:Ha\'il:Ha\'il|\
Saudi Arabia:Jizan:Jizan|\
Saudi Arabia:Makkah:Makkah|\
Saudi Arabia:Najran:Najran|\
Saudi Arabia:Tabuk:Tabuk|\
Senegal:Dakar:Dakar|\
Senegal:Diourbel:Diourbel|\
Senegal:Fatick:Fatick|\
Senegal:Kaolack:Kaolack|\
Senegal:Kolda:Kolda|\
Senegal:Louga:Louga|\
Senegal:Matam:Matam|\
Senegal:Saint-Louis:Saint-Louis|\
Senegal:Tambacounda:Tambacounda|\
Senegal:Thies:Thies|\
Senegal:Ziguinchor:Ziguinchor|\
Serbia:Kosovo:Kosovo|\
Serbia:Montenegro:Montenegro|\
Serbia:Serbia:Serbia|\
Serbia:Vojvodina:Vojvodina|\
Seychelles:Anse aux Pins:Anse aux Pins|\
Seychelles:Anse Boileau:Anse Boileau|\
Seychelles:Anse Etoile:Anse Etoile|\
Seychelles:Anse Louis:Anse Louis|\
Seychelles:Anse Royale:Anse Royale|\
Seychelles:Baie Lazare:Baie Lazare|\
Seychelles:Baie Sainte Anne:Baie Sainte Anne|\
Seychelles:Beau Vallon:Beau Vallon|\
Seychelles:Bel Air:Bel Air|\
Seychelles:Bel Ombre:Bel Ombre|\
Seychelles:Cascade:Cascade|\
Seychelles:Glacis:Glacis|\
Seychelles:Grand\' Anse:Grand\' Anse|\
Seychelles:Grand\' Anse:Grand\' Anse|\
Seychelles:La Digue:La Digue|\
Seychelles:La Riviere Anglaise:La Riviere Anglaise|\
Seychelles:Mont Buxton:Mont Buxton|\
Seychelles:Mont Fleuri:Mont Fleuri|\
Seychelles:Plaisance:Plaisance|\
Seychelles:Pointe La Rue:Pointe La Rue|\
Seychelles:Port Glaud:Port Glaud|\
Seychelles:Saint Louis:Saint Louis|\
Seychelles:Takamaka:Takamaka|\
Slovakia:Banskobystricky:Banskobystricky|\
Slovakia:Bratislavsky:Bratislavsky|\
Slovakia:Kosicky:Kosicky|\
Slovakia:Nitriansky:Nitriansky|\
Slovakia:Presovsky:Presovsky|\
Slovakia:Trenciansky:Trenciansky|\
Slovakia:Trnavsky:Trnavsky|\
Slovakia:Zilinsky:Zilinsky|\
Slovenia:Ajdovscina:Ajdovscina|\
Slovenia:Beltinci:Beltinci|\
Slovenia:Benedikt:Benedikt|\
Slovenia:Bistrica ob Sotli:Bistrica ob Sotli|\
Slovenia:Bled:Bled|\
Slovenia:Bloke:Bloke|\
Slovenia:Bohinj:Bohinj|\
Slovenia:Borovnica:Borovnica|\
Slovenia:Bovec:Bovec|\
Slovenia:Braslovce:Braslovce|\
Slovenia:Brda:Brda|\
Slovenia:Brezice:Brezice|\
Slovenia:Brezovica:Brezovica|\
Slovenia:Cankova:Cankova|\
Slovenia:Celje:Celje|\
Slovenia:Cerklje na Gorenjskem:Cerklje na Gorenjskem|\
Slovenia:Cerknica:Cerknica|\
Slovenia:Cerkno:Cerkno|\
Slovenia:Cerkvenjak:Cerkvenjak|\
Slovenia:Crensovci:Crensovci|\
Slovenia:Crna na Koroskem:Crna na Koroskem|\
Slovenia:Crnomelj:Crnomelj|\
Slovenia:Destrnik:Destrnik|\
Slovenia:Divaca:Divaca|\
Slovenia:Dobje:Dobje|\
Slovenia:Dobrepolje:Dobrepolje|\
Slovenia:Dobrna:Dobrna|\
Slovenia:Dobrova-Horjul-Polhov Gradec:Dobrova-Horjul-Polhov Gradec|\
Slovenia:Dobrovnik-Dobronak:Dobrovnik-Dobronak|\
Slovenia:Dolenjske Toplice:Dolenjske Toplice|\
Slovenia:Dol pri Ljubljani:Dol pri Ljubljani|\
Slovenia:Domzale:Domzale|\
Slovenia:Dornava:Dornava|\
Slovenia:Dravograd:Dravograd|\
Slovenia:Duplek:Duplek|\
Slovenia:Gorenja Vas-Poljane:Gorenja Vas-Poljane|\
Slovenia:Gorisnica:Gorisnica|\
Slovenia:Gornja Radgona:Gornja Radgona|\
Slovenia:Gornji Grad:Gornji Grad|\
Slovenia:Gornji Petrovci:Gornji Petrovci|\
Slovenia:Grad:Grad|\
Slovenia:Grosuplje:Grosuplje|\
Slovenia:Hajdina:Hajdina|\
Slovenia:Hoce-Slivnica:Hoce-Slivnica|\
Slovenia:Hodos-Hodos:Hodos-Hodos|\
Slovenia:Horjul:Horjul|\
Slovenia:Hrastnik:Hrastnik|\
Slovenia:Hrpelje-Kozina:Hrpelje-Kozina|\
Slovenia:Idrija:Idrija|\
Slovenia:Ig:Ig|\
Slovenia:Ilirska Bistrica:Ilirska Bistrica|\
Slovenia:Ivancna Gorica:Ivancna Gorica|\
Slovenia:Izola-Isola:Izola-Isola|\
Slovenia:Jesenice:Jesenice|\
Slovenia:Jezersko:Jezersko|\
Slovenia:Jursinci:Jursinci|\
Slovenia:Kamnik:Kamnik|\
Slovenia:Kanal:Kanal|\
Slovenia:Kidricevo:Kidricevo|\
Slovenia:Kobarid:Kobarid|\
Slovenia:Kobilje:Kobilje|\
Slovenia:Kocevje:Kocevje|\
Slovenia:Komen:Komen|\
Slovenia:Komenda:Komenda|\
Slovenia:Koper-Capodistria:Koper-Capodistria|\
Slovenia:Kostel:Kostel|\
Slovenia:Kozje:Kozje|\
Slovenia:Kranj:Kranj|\
Slovenia:Kranjska Gora:Kranjska Gora|\
Slovenia:Krizevci:Krizevci|\
Slovenia:Krsko:Krsko|\
Slovenia:Kungota:Kungota|\
Slovenia:Kuzma:Kuzma|\
Slovenia:Lasko:Lasko|\
Slovenia:Lenart:Lenart|\
Slovenia:Lendava-Lendva:Lendava-Lendva|\
Slovenia:Litija:Litija|\
Slovenia:Ljubljana:Ljubljana|\
Slovenia:Ljubno:Ljubno|\
Slovenia:Ljutomer:Ljutomer|\
Slovenia:Logatec:Logatec|\
Slovenia:Loska Dolina:Loska Dolina|\
Slovenia:Loski Potok:Loski Potok|\
Slovenia:Lovrenc na Pohorju:Lovrenc na Pohorju|\
Slovenia:Luce:Luce|\
Slovenia:Lukovica:Lukovica|\
Slovenia:Majsperk:Majsperk|\
Slovenia:Maribor:Maribor|\
Slovenia:Markovci:Markovci|\
Slovenia:Medvode:Medvode|\
Slovenia:Menges:Menges|\
Slovenia:Metlika:Metlika|\
Slovenia:Mezica:Mezica|\
Slovenia:Miklavz na Dravskem Polju:Miklavz na Dravskem Polju|\
Slovenia:Miren-Kostanjevica:Miren-Kostanjevica|\
Slovenia:Mirna Pec:Mirna Pec|\
Slovenia:Mislinja:Mislinja|\
Slovenia:Moravce:Moravce|\
Slovenia:Moravske Toplice:Moravske Toplice|\
Slovenia:Mozirje:Mozirje|\
Slovenia:Murska Sobota:Murska Sobota|\
Slovenia:Muta:Muta|\
Slovenia:Naklo:Naklo|\
Slovenia:Nazarje:Nazarje|\
Slovenia:Nova Gorica:Nova Gorica|\
Slovenia:Novo Mesto:Novo Mesto|\
Slovenia:Odranci:Odranci|\
Slovenia:Oplotnica:Oplotnica|\
Slovenia:Ormoz:Ormoz|\
Slovenia:Osilnica:Osilnica|\
Slovenia:Pesnica:Pesnica|\
Slovenia:Piran-Pirano:Piran-Pirano|\
Slovenia:Pivka:Pivka|\
Slovenia:Podcetrtek:Podcetrtek|\
Slovenia:Podlehnik:Podlehnik|\
Slovenia:Podvelka:Podvelka|\
Slovenia:Polzela:Polzela|\
Slovenia:Postojna:Postojna|\
Slovenia:Prebold:Prebold|\
Slovenia:Preddvor:Preddvor|\
Slovenia:Prevalje:Prevalje|\
Slovenia:Ptuj:Ptuj|\
Slovenia:Puconci:Puconci|\
Slovenia:Race-Fram:Race-Fram|\
Slovenia:Radece:Radece|\
Slovenia:Radenci:Radenci|\
Slovenia:Radlje ob Dravi:Radlje ob Dravi|\
Slovenia:Radovljica:Radovljica|\
Slovenia:Ravne na Koroskem:Ravne na Koroskem|\
Slovenia:Razkrizje:Razkrizje|\
Slovenia:Ribnica:Ribnica|\
Slovenia:Ribnica na Pohorju:Ribnica na Pohorju|\
Slovenia:Rogasovci:Rogasovci|\
Slovenia:Rogaska Slatina:Rogaska Slatina|\
Slovenia:Rogatec:Rogatec|\
Slovenia:Ruse:Ruse|\
Slovenia:Salovci:Salovci|\
Slovenia:Selnica ob Dravi:Selnica ob Dravi|\
Slovenia:Semic:Semic|\
Slovenia:Sempeter-Vrtojba:Sempeter-Vrtojba|\
Slovenia:Sencur:Sencur|\
Slovenia:Sentilj:Sentilj|\
Slovenia:Sentjernej:Sentjernej|\
Slovenia:Sentjur pri Celju:Sentjur pri Celju|\
Slovenia:Sevnica:Sevnica|\
Slovenia:Sezana:Sezana|\
Slovenia:Skocjan:Skocjan|\
Slovenia:Skofja Loka:Skofja Loka|\
Slovenia:Skofljica:Skofljica|\
Slovenia:Slovenj Gradec:Slovenj Gradec|\
Slovenia:Slovenska Bistrica:Slovenska Bistrica|\
Slovenia:Slovenske Konjice:Slovenske Konjice|\
Slovenia:Smarje pri Jelsah:Smarje pri Jelsah|\
Slovenia:Smartno ob Paki:Smartno ob Paki|\
Slovenia:Smartno pri Litiji:Smartno pri Litiji|\
Slovenia:Sodrazica:Sodrazica|\
Slovenia:Solcava:Solcava|\
Slovenia:Sostanj:Sostanj|\
Slovenia:Starse:Starse|\
Slovenia:Store:Store|\
Slovenia:Sveta Ana:Sveta Ana|\
Slovenia:Sveti Andraz v Slovenskih Goricah:Sveti Andraz v Slovenskih Goricah|\
Slovenia:Sveti Jurij:Sveti Jurij|\
Slovenia:Tabor:Tabor|\
Slovenia:Tisina:Tisina|\
Slovenia:Tolmin:Tolmin|\
Slovenia:Trbovlje:Trbovlje|\
Slovenia:Trebnje:Trebnje|\
Slovenia:Trnovska Vas:Trnovska Vas|\
Slovenia:Trzic:Trzic|\
Slovenia:Trzin:Trzin|\
Slovenia:Turnisce:Turnisce|\
Slovenia:Velenje:Velenje|\
Slovenia:Velika Polana:Velika Polana|\
Slovenia:Velike Lasce:Velike Lasce|\
Slovenia:Verzej:Verzej|\
Slovenia:Videm:Videm|\
Slovenia:Vipava:Vipava|\
Slovenia:Vitanje:Vitanje|\
Slovenia:Vodice:Vodice|\
Slovenia:Vojnik:Vojnik|\
Slovenia:Vransko:Vransko|\
Slovenia:Vrhnika:Vrhnika|\
Slovenia:Vuzenica:Vuzenica|\
Slovenia:Zagorje ob Savi:Zagorje ob Savi|\
Slovenia:Zalec:Zalec|\
Slovenia:Zavrc:Zavrc|\
Slovenia:Zelezniki:Zelezniki|\
Slovenia:Zetale:Zetale|\
Slovenia:Ziri:Ziri|\
Slovenia:Zirovnica:Zirovnica|\
Slovenia:Zuzemberk:Zuzemberk|\
Slovenia:Zrece:Zrece|\
Solomon Islands:Central:Central|\
Solomon Islands:Choiseul:Choiseul|\
Solomon Islands:Guadalcanal:Guadalcanal|\
Solomon Islands:Honiara:Honiara|\
Solomon Islands:Isabel:Isabel|\
Solomon Islands:Makira:Makira|\
Solomon Islands:Malaita:Malaita|\
Solomon Islands:Rennell and Bellona:Rennell and Bellona|\
Solomon Islands:Temotu:Temotu|\
Solomon Islands:Western:Western|\
Somali:Awdal:Awdal|\
Somali:Bakool:Bakool|\
Somali:Banaadir:Banaadir|\
Somali:Bari:Bari|\
Somali:Bay:Bay|\
Somali:Galguduud:Galguduud|\
Somali:Gedo:Gedo|\
Somali:Hiiraan:Hiiraan|\
Somali:Jubbada Dhexe:Jubbada Dhexe|\
Somali:Jubbada Hoose:Jubbada Hoose|\
Somali:Mudug:Mudug|\
Somali:Nugaal:Nugaal|\
Somali:Sanaag:Sanaag|\
Somali:Shabeellaha Dhexe:Shabeellaha Dhexe|\
Somali:Shabeellaha Hoose:Shabeellaha Hoose|\
Somali:Sool:Sool|\
Somali:Togdheer:Togdheer|\
Somali:Woqooyi Galbeed:Woqooyi Galbeed|\
South Africa:Eastern Cape:Eastern Cape|\
South Africa:Free State:Free State|\
South Africa:Gauteng:Gauteng|\
South Africa:KwaZulu-Natal:KwaZulu-Natal|\
South Africa:Limpopo:Limpopo|\
South Africa:Mpumalanga:Mpumalanga|\
South Africa:North-West:North-West|\
South Africa:Northern Cape:Northern Cape|\
South Africa:Western Cape:Western Cape|\
Spain:Andalucia:Andalucia|\
Spain:Aragon:Aragon|\
Spain:Asturias:Asturias|\
Spain:Baleares:Baleares|\
Spain:Ceuta:Ceuta|\
Spain:Canarias:Canarias|\
Spain:Cantabria:Cantabria|\
Spain:Castilla-La Mancha:Castilla-La Mancha|\
Spain:Castilla y Leon:Castilla y Leon|\
Spain:Cataluna:Cataluna|\
Spain:Comunidad Valenciana:Comunidad Valenciana|\
Spain:Extremadura:Extremadura|\
Spain:Galicia:Galicia|\
Spain:La Rioja:La Rioja|\
Spain:Madrid:Madrid|\
Spain:Melilla:Melilla|\
Spain:Murcia:Murcia|\
Spain:Navarra:Navarra|\
Spain:Pais Vasco:Pais Vasco|\
Sri Lanka:Central:Central|\
Sri Lanka:North Central:North Central|\
Sri Lanka:North Eastern:North Eastern|\
Sri Lanka:North Western:North Western|\
Sri Lanka:Sabaragamuwa:Sabaragamuwa|\
Sri Lanka:Southern:Southern|\
Sri Lanka:Uva:Uva|\
Sri Lanka:Western:Western|\
Sudan:A\'ali an Nil:A\'ali an Nil|\
Sudan:Al Bahr al Ahmar:Al Bahr al Ahmar|\
Sudan:Al Buhayrat:Al Buhayrat|\
Sudan:Al Jazirah:Al Jazirah|\
Sudan:Al Khartum:Al Khartum|\
Sudan:Al Qadarif:Al Qadarif|\
Sudan:Al Wahdah:Al Wahdah|\
Sudan:An Nil al Abyad:An Nil al Abyad|\
Sudan:An Nil al Azraq:An Nil al Azraq|\
Sudan:Ash Shamaliyah:Ash Shamaliyah|\
Sudan:Bahr al Jabal:Bahr al Jabal|\
Sudan:Gharb al Istiwa\'iyah:Gharb al Istiwa\'iyah|\
Sudan:Gharb Bahr al Ghazal:Gharb Bahr al Ghazal|\
Sudan:Gharb Darfur:Gharb Darfur|\
Sudan:Gharb Kurdufan:Gharb Kurdufan|\
Sudan:Janub Darfur:Janub Darfur|\
Sudan:Janub Kurdufan:Janub Kurdufan|\
Sudan:Junqali:Junqali|\
Sudan:Kassala:Kassala|\
Sudan:Nahr an Nil:Nahr an Nil|\
Sudan:Shamal Bahr al Ghazal:Shamal Bahr al Ghazal|\
Sudan:Shamal Darfur:Shamal Darfur|\
Sudan:Shamal Kurdufan:Shamal Kurdufan|\
Sudan:Sharq al Istiwa\'iyah:Sharq al Istiwa\'iyah|\
Sudan:Sinnar:Sinnar|\
Sudan:Warab:Warab|\
Suriname:Brokopondo:Brokopondo|\
Suriname:Commewijne:Commewijne|\
Suriname:Coronie:Coronie|\
Suriname:Marowijne:Marowijne|\
Suriname:Nickerie:Nickerie|\
Suriname:Para:Para|\
Suriname:Paramaribo:Paramaribo|\
Suriname:Saramacca:Saramacca|\
Suriname:Sipaliwini:Sipaliwini|\
Suriname:Wanica:Wanica|\
Swaziland:Hhohho:Hhohho|\
Swaziland:Lubombo:Lubombo|\
Swaziland:Manzini:Manzini|\
Swaziland:Shiselweni:Shiselweni|\
Sweden:Blekinge:Blekinge|\
Sweden:Dalarnas:Dalarnas|\
Sweden:Gavleborgs:Gavleborgs|\
Sweden:Gotlands:Gotlands|\
Sweden:Hallands:Hallands|\
Sweden:Jamtlands:Jamtlands|\
Sweden:Jonkopings:Jonkopings|\
Sweden:Kalmar:Kalmar|\
Sweden:Kronobergs:Kronobergs|\
Sweden:Norrbottens:Norrbottens|\
Sweden:Orebro:Orebro|\
Sweden:Ostergotlands:Ostergotlands|\
Sweden:Skane:Skane|\
Sweden:Sodermanlands:Sodermanlands|\
Sweden:Stockholms:Stockholms|\
Sweden:Uppsala:Uppsala|\
Sweden:Varmlands:Varmlands|\
Sweden:Vasterbottens:Vasterbottens|\
Sweden:Vasternorrlands:Vasternorrlands|\
Sweden:Vastmanlands:Vastmanlands|\
Sweden:Vastra Gotalands:Vastra Gotalands|\
Switzerland:Aargau:Aargau|\
Switzerland:Appenzell Ausser-Rhoden:Appenzell Ausser-Rhoden|\
Switzerland:Appenzell Inner-Rhoden:Appenzell Inner-Rhoden|\
Switzerland:Basel-Landschaft:Basel-Landschaft|\
Switzerland:Basel-Stadt:Basel-Stadt|\
Switzerland:Bern:Bern|\
Switzerland:Fribourg:Fribourg|\
Switzerland:Geneve:Geneve|\
Switzerland:Glarus:Glarus|\
Switzerland:Graubunden:Graubunden|\
Switzerland:Jura:Jura|\
Switzerland:Luzern:Luzern|\
Switzerland:Neuchatel:Neuchatel|\
Switzerland:Nidwalden:Nidwalden|\
Switzerland:Obwalden:Obwalden|\
Switzerland:Sankt Gallen:Sankt Gallen|\
Switzerland:Schaffhausen:Schaffhausen|\
Switzerland:Schwyz:Schwyz|\
Switzerland:Solothurn:Solothurn|\
Switzerland:Thurgau:Thurgau|\
Switzerland:Ticino:Ticino|\
Switzerland:Uri:Uri|\
Switzerland:Valais:Valais|\
Switzerland:Vaud:Vaud|\
Switzerland:Zug:Zug|\
Switzerland:Zurich:Zurich|\
Syria:Al Hasakah:Al Hasakah|\
Syria:Al Ladhiqiyah:Al Ladhiqiyah|\
Syria:Al Qunaytirah:Al Qunaytirah|\
Syria:Ar Raqqah:Ar Raqqah|\
Syria:As Suwayda\':As Suwayda\'|\
Syria:Dar\'a:Dar\'a|\
Syria:Dayr az Zawr:Dayr az Zawr|\
Syria:Dimashq:Dimashq|\
Syria:Halab:Halab|\
Syria:Hamah:Hamah|\
Syria:Hims:Hims|\
Syria:Idlib:Idlib|\
Syria:Rif Dimashq:Rif Dimashq|\
Syria:Tartus:Tartus|\
Taiwan:Chang-hua:Chang-hua|\
Taiwan:Chia-i:Chia-i|\
Taiwan:Hsin-chu:Hsin-chu|\
Taiwan:Hua-lien:Hua-lien|\
Taiwan:I-lan:I-lan|\
Taiwan:Kao-hsiung:Kao-hsiung|\
Taiwan:Kin-men:Kin-men|\
Taiwan:Lien-chiang:Lien-chiang|\
Taiwan:Miao-li:Miao-li|\
Taiwan:Nan-t\'ou:Nan-t\'ou|\
Taiwan:P\'eng-hu:P\'eng-hu|\
Taiwan:P\'ing-tung:P\'ing-tung|\
Taiwan:T\'ai-chung:T\'ai-chung|\
Taiwan:T\'ai-nan:T\'ai-nan|\
Taiwan:T\'ai-pei:T\'ai-pei|\
Taiwan:T\'ai-tung:T\'ai-tung|\
Taiwan:T\'ao-yuan:T\'ao-yuan|\
Taiwan:Yun-lin:Yun-lin|\
Taiwan:Chia-i:Chia-i|\
Taiwan:Chi-lung:Chi-lung|\
Taiwan:Hsin-chu:Hsin-chu|\
Taiwan:T\'ai-chung:T\'ai-chung|\
Taiwan:T\'ai-nan:T\'ai-nan|\
Taiwan:Kao-hsiung city:Kao-hsiung city|\
Taiwan:T\'ai-pei city:T\'ai-pei city|\
Tanzania:Arusha:Arusha|\
Tanzania:Dar es Salaam:Dar es Salaam|\
Tanzania:Dodoma:Dodoma|\
Tanzania:Iringa:Iringa|\
Tanzania:Kagera:Kagera|\
Tanzania:Kigoma:Kigoma|\
Tanzania:Kilimanjaro:Kilimanjaro|\
Tanzania:Lindi:Lindi|\
Tanzania:Manyara:Manyara|\
Tanzania:Mara:Mara|\
Tanzania:Mbeya:Mbeya|\
Tanzania:Morogoro:Morogoro|\
Tanzania:Mtwara:Mtwara|\
Tanzania:Mwanza:Mwanza|\
Tanzania:Pemba North:Pemba North|\
Tanzania:Pemba South:Pemba South|\
Tanzania:Pwani:Pwani|\
Tanzania:Rukwa:Rukwa|\
Tanzania:Ruvuma:Ruvuma|\
Tanzania:Shinyanga:Shinyanga|\
Tanzania:Singida:Singida|\
Tanzania:Tabora:Tabora|\
Tanzania:Tanga:Tanga|\
Tanzania:Zanzibar Central/South:Zanzibar Central/South|\
Tanzania:Zanzibar North:Zanzibar North|\
Tanzania:Zanzibar Urban/West:Zanzibar Urban/West|\
Thailand:Amnat Charoen:Amnat Charoen|\
Thailand:Ang Thong:Ang Thong|\
Thailand:Buriram:Buriram|\
Thailand:Chachoengsao:Chachoengsao|\
Thailand:Chai Nat:Chai Nat|\
Thailand:Chaiyaphum:Chaiyaphum|\
Thailand:Chanthaburi:Chanthaburi|\
Thailand:Chiang Mai:Chiang Mai|\
Thailand:Chiang Rai:Chiang Rai|\
Thailand:Chon Buri:Chon Buri|\
Thailand:Chumphon:Chumphon|\
Thailand:Kalasin:Kalasin|\
Thailand:Kamphaeng Phet:Kamphaeng Phet|\
Thailand:Kanchanaburi:Kanchanaburi|\
Thailand:Khon Kaen:Khon Kaen|\
Thailand:Krabi:Krabi|\
Thailand:Krung Thep Mahanakhon:Krung Thep Mahanakhon|\
Thailand:Lampang:Lampang|\
Thailand:Lamphun:Lamphun|\
Thailand:Loei:Loei|\
Thailand:Lop Buri:Lop Buri|\
Thailand:Mae Hong Son:Mae Hong Son|\
Thailand:Maha Sarakham:Maha Sarakham|\
Thailand:Mukdahan:Mukdahan|\
Thailand:Nakhon Nayok:Nakhon Nayok|\
Thailand:Nakhon Pathom:Nakhon Pathom|\
Thailand:Nakhon Phanom:Nakhon Phanom|\
Thailand:Nakhon Ratchasima:Nakhon Ratchasima|\
Thailand:Nakhon Sawan:Nakhon Sawan|\
Thailand:Nakhon Si Thammarat:Nakhon Si Thammarat|\
Thailand:Nan:Nan|\
Thailand:Narathiwat:Narathiwat|\
Thailand:Nong Bua Lamphu:Nong Bua Lamphu|\
Thailand:Nong Khai:Nong Khai|\
Thailand:Nonthaburi:Nonthaburi|\
Thailand:Pathum Thani:Pathum Thani|\
Thailand:Pattani:Pattani|\
Thailand:Phangnga:Phangnga|\
Thailand:Phatthalung:Phatthalung|\
Thailand:Phayao:Phayao|\
Thailand:Phetchabun:Phetchabun|\
Thailand:Phetchaburi:Phetchaburi|\
Thailand:Phichit:Phichit|\
Thailand:Phitsanulok:Phitsanulok|\
Thailand:Phra Nakhon Si Ayutthaya:Phra Nakhon Si Ayutthaya|\
Thailand:Phrae:Phrae|\
Thailand:Phuket:Phuket|\
Thailand:Prachin Buri:Prachin Buri|\
Thailand:Prachuap Khiri Khan:Prachuap Khiri Khan|\
Thailand:Ranong:Ranong|\
Thailand:Ratchaburi:Ratchaburi|\
Thailand:Rayong:Rayong|\
Thailand:Roi Et:Roi Et|\
Thailand:Sa Kaeo:Sa Kaeo|\
Thailand:Sakon Nakhon:Sakon Nakhon|\
Thailand:Samut Prakan:Samut Prakan|\
Thailand:Samut Sakhon:Samut Sakhon|\
Thailand:Samut Songkhram:Samut Songkhram|\
Thailand:Sara Buri:Sara Buri|\
Thailand:Satun:Satun|\
Thailand:Sing Buri:Sing Buri|\
Thailand:Sisaket:Sisaket|\
Thailand:Songkhla:Songkhla|\
Thailand:Sukhothai:Sukhothai|\
Thailand:Suphan Buri:Suphan Buri|\
Thailand:Surat Thani:Surat Thani|\
Thailand:Surin:Surin|\
Thailand:Tak:Tak|\
Thailand:Trang:Trang|\
Thailand:Trat:Trat|\
Thailand:Ubon Ratchathani:Ubon Ratchathani|\
Thailand:Udon Thani:Udon Thani|\
Thailand:Uthai Thani:Uthai Thani|\
Thailand:Uttaradit:Uttaradit|\
Thailand:Yala:Yala|\
Thailand:Yasothon:Yasothon|\
Togo:Kara:Kara|\
Togo:Plateaux:Plateaux|\
Togo:Savanes:Savanes|\
Togo:Centrale:Centrale|\
Togo:Maritime:Maritime|\
Trinidad:Couva:Couva|\
Trinidad:Diego Martin:Diego Martin|\
Trinidad:Mayaro:Mayaro|\
Trinidad:Penal:Penal|\
Trinidad:Princes Town:Princes Town|\
Trinidad:Sangre Grande:Sangre Grande|\
Trinidad:San Juan:San Juan|\
Trinidad:Siparia:Siparia|\
Trinidad:Tunapuna:Tunapuna|\
Trinidad:Port-of-Spain:Port-of-Spain|\
Trinidad:San Fernando:San Fernando|\
Trinidad:Arima:Arima|\
Trinidad:Point Fortin:Point Fortin|\
Trinidad:Chaguanas:Chaguanas|\
Trinidad:Tobago:Tobago|\
Tunisia:Ariana (Aryanah):Ariana (Aryanah)|\
Tunisia:Beja (Bajah):Beja (Bajah)|\
Tunisia:Ben Arous (Bin \'Arus):Ben Arous (Bin \'Arus)|\
Tunisia:Bizerte (Banzart):Bizerte (Banzart)|\
Tunisia:Gabes (Qabis):Gabes (Qabis)|\
Tunisia:Gafsa (Qafsah):Gafsa (Qafsah)|\
Tunisia:Jendouba (Jundubah):Jendouba (Jundubah)|\
Tunisia:Kairouan (Al Qayrawan):Kairouan (Al Qayrawan)|\
Tunisia:Kasserine (Al Qasrayn):Kasserine (Al Qasrayn)|\
Tunisia:Kebili (Qibili):Kebili (Qibili)|\
Tunisia:Kef (Al Kaf):Kef (Al Kaf)|\
Tunisia:Mahdia (Al Mahdiyah):Mahdia (Al Mahdiyah)|\
Tunisia:Manouba (Manubah):Manouba (Manubah)|\
Tunisia:Medenine (Madanin):Medenine (Madanin)|\
Tunisia:Monastir (Al Munastir):Monastir (Al Munastir)|\
Tunisia:Nabeul (Nabul):Nabeul (Nabul)|\
Tunisia:Sfax (Safaqis):Sfax (Safaqis)|\
Tunisia:Sidi Bou Zid (Sidi Bu Zayd):Sidi Bou Zid (Sidi Bu Zayd)|\
Tunisia:Siliana (Silyanah):Siliana (Silyanah)|\
Tunisia:Sousse (Susah):Sousse (Susah)|\
Tunisia:Tataouine (Tatawin):Tataouine (Tatawin)|\
Tunisia:Tozeur (Tawzar):Tozeur (Tawzar)|\
Tunisia:Tunis:Tunis|\
Tunisia:Zaghouan (Zaghwan):Zaghouan (Zaghwan)|\
Turkey:Adana:Adana|\
Turkey:Adiyaman:Adiyaman|\
Turkey:Afyonkarahisar:Afyonkarahisar|\
Turkey:Agri:Agri|\
Turkey:Aksaray:Aksaray|\
Turkey:Amasya:Amasya|\
Turkey:Ankara:Ankara|\
Turkey:Antalya:Antalya|\
Turkey:Ardahan:Ardahan|\
Turkey:Artvin:Artvin|\
Turkey:Aydin:Aydin|\
Turkey:Balikesir:Balikesir|\
Turkey:Bartin:Bartin|\
Turkey:Batman:Batman|\
Turkey:Bayburt:Bayburt|\
Turkey:Bilecik:Bilecik|\
Turkey:Bingol:Bingol|\
Turkey:Bitlis:Bitlis|\
Turkey:Bolu:Bolu|\
Turkey:Burdur:Burdur|\
Turkey:Bursa:Bursa|\
Turkey:Canakkale:Canakkale|\
Turkey:Cankiri:Cankiri|\
Turkey:Corum:Corum|\
Turkey:Denizli:Denizli|\
Turkey:Diyarbakir:Diyarbakir|\
Turkey:Duzce:Duzce|\
Turkey:Edirne:Edirne|\
Turkey:Elazig:Elazig|\
Turkey:Erzincan:Erzincan|\
Turkey:Erzurum:Erzurum|\
Turkey:Eskisehir:Eskisehir|\
Turkey:Gaziantep:Gaziantep|\
Turkey:Giresun:Giresun|\
Turkey:Gumushane:Gumushane|\
Turkey:Hakkari:Hakkari|\
Turkey:Hatay:Hatay|\
Turkey:Igdir:Igdir|\
Turkey:Isparta:Isparta|\
Turkey:Istanbul:Istanbul|\
Turkey:Izmir:Izmir|\
Turkey:Kahramanmaras:Kahramanmaras|\
Turkey:Karabuk:Karabuk|\
Turkey:Karaman:Karaman|\
Turkey:Kars:Kars|\
Turkey:Kastamonu:Kastamonu|\
Turkey:Kayseri:Kayseri|\
Turkey:Kilis:Kilis|\
Turkey:Kirikkale:Kirikkale|\
Turkey:Kirklareli:Kirklareli|\
Turkey:Kirsehir:Kirsehir|\
Turkey:Kocaeli:Kocaeli|\
Turkey:Konya:Konya|\
Turkey:Kutahya:Kutahya|\
Turkey:Malatya:Malatya|\
Turkey:Manisa:Manisa|\
Turkey:Mardin:Mardin|\
Turkey:Mersin:Mersin|\
Turkey:Mugla:Mugla|\
Turkey:Mus:Mus|\
Turkey:Nevsehir:Nevsehir|\
Turkey:Nigde:Nigde|\
Turkey:Ordu:Ordu|\
Turkey:Osmaniye:Osmaniye|\
Turkey:Rize:Rize|\
Turkey:Sakarya:Sakarya|\
Turkey:Samsun:Samsun|\
Turkey:Sanliurfa:Sanliurfa|\
Turkey:Siirt:Siirt|\
Turkey:Sinop:Sinop|\
Turkey:Sirnak:Sirnak|\
Turkey:Sivas:Sivas|\
Turkey:Tekirdag:Tekirdag|\
Turkey:Tokat:Tokat|\
Turkey:Trabzon:Trabzon|\
Turkey:Tunceli:Tunceli|\
Turkey:Usak:Usak|\
Turkey:Van:Van|\
Turkey:Yalova:Yalova|\
Turkey:Yozgat:Yozgat|\
Turkey:Zonguldak:Zonguldak|\
Turkmenistan:Ahal Welayaty (Ashgabat):Ahal Welayaty (Ashgabat)|\
Turkmenistan:Balkan Welayaty (Balkanabat):Balkan Welayaty (Balkanabat)|\
Turkmenistan:Dashoguz Welayaty:Dashoguz Welayaty|\
Turkmenistan:Lebap Welayaty (Turkmenabat):Lebap Welayaty (Turkmenabat)|\
Turkmenistan:Mary Welayaty:Mary Welayaty|\
United Arab Emirates:Abu Dhabi:Abu Dhabi|\
United Arab Emirates:\'Ajman:\'Ajman|\
United Arab Emirates:Al Fujayrah:Al Fujayrah|\
United Arab Emirates:Sharjah:Sharjah|\
United Arab Emirates:Dubai:Dubai|\
United Arab Emirates:Ra\'s al Khaymah:Ra\'s al Khaymah|\
United Arab Emirates:Umm al Qaywayn:Umm al Qaywayn|\
Uganda:Adjumani:Adjumani|\
Uganda:Apac:Apac|\
Uganda:Arua:Arua|\
Uganda:Bugiri:Bugiri|\
Uganda:Bundibugyo:Bundibugyo|\
Uganda:Bushenyi:Bushenyi|\
Uganda:Busia:Busia|\
Uganda:Gulu:Gulu|\
Uganda:Hoima:Hoima|\
Uganda:Iganga:Iganga|\
Uganda:Jinja:Jinja|\
Uganda:Kabale:Kabale|\
Uganda:Kabarole:Kabarole|\
Uganda:Kaberamaido:Kaberamaido|\
Uganda:Kalangala:Kalangala|\
Uganda:Kampala:Kampala|\
Uganda:Kamuli:Kamuli|\
Uganda:Kamwenge:Kamwenge|\
Uganda:Kanungu:Kanungu|\
Uganda:Kapchorwa:Kapchorwa|\
Uganda:Kasese:Kasese|\
Uganda:Katakwi:Katakwi|\
Uganda:Kayunga:Kayunga|\
Uganda:Kibale:Kibale|\
Uganda:Kiboga:Kiboga|\
Uganda:Kisoro:Kisoro|\
Uganda:Kitgum:Kitgum|\
Uganda:Kotido:Kotido|\
Uganda:Kumi:Kumi|\
Uganda:Kyenjojo:Kyenjojo|\
Uganda:Lira:Lira|\
Uganda:Luwero:Luwero|\
Uganda:Masaka:Masaka|\
Uganda:Masindi:Masindi|\
Uganda:Mayuge:Mayuge|\
Uganda:Mbale:Mbale|\
Uganda:Mbarara:Mbarara|\
Uganda:Moroto:Moroto|\
Uganda:Moyo:Moyo|\
Uganda:Mpigi:Mpigi|\
Uganda:Mubende:Mubende|\
Uganda:Mukono:Mukono|\
Uganda:Nakapiripirit:Nakapiripirit|\
Uganda:Nakasongola:Nakasongola|\
Uganda:Nebbi:Nebbi|\
Uganda:Ntungamo:Ntungamo|\
Uganda:Pader:Pader|\
Uganda:Pallisa:Pallisa|\
Uganda:Rakai:Rakai|\
Uganda:Rukungiri:Rukungiri|\
Uganda:Sembabule:Sembabule|\
Uganda:Sironko:Sironko|\
Uganda:Soroti:Soroti|\
Uganda:Tororo:Tororo|\
Uganda:Wakiso:Wakiso|\
Uganda:Yumbe:Yumbe|\
Ukraine:Cherkasy:Cherkasy|\
Ukraine:Chernihiv:Chernihiv|\
Ukraine:Chernivtsi:Chernivtsi|\
Ukraine:Crimea:Crimea|\
Ukraine:Dnipropetrovs\'k:Dnipropetrovs\'k|\
Ukraine:Donets\'k:Donets\'k|\
Ukraine:Ivano-Frankivs\'k:Ivano-Frankivs\'k|\
Ukraine:Kharkiv:Kharkiv|\
Ukraine:Kherson:Kherson|\
Ukraine:Khmel\'nyts\'kyy:Khmel\'nyts\'kyy|\
Ukraine:Kirovohrad:Kirovohrad|\
Ukraine:Kiev:Kiev|\
Ukraine:Kyyiv:Kyyiv|\
Ukraine:Luhans\'k:Luhans\'k|\
Ukraine:L\'viv:L\'viv|\
Ukraine:Mykolayiv:Mykolayiv|\
Ukraine:Odesa:Odesa|\
Ukraine:Poltava:Poltava|\
Ukraine:Rivne:Rivne|\
Ukraine:Sevastopol\':Sevastopol\'|\
Ukraine:Sumy:Sumy|\
Ukraine:Ternopil\':Ternopil\'|\
Ukraine:Vinnytsya:Vinnytsya|\
Ukraine:Volyn\':Volyn\'|\
Ukraine:Zakarpattya:Zakarpattya|\
Ukraine:Zaporizhzhya:Zaporizhzhya|\
Ukraine:Zhytomyr:Zhytomyr|\
UK:AVON:Avon|\
UK:BEDS:Bedfordshire|\
UK:BERKS:Berkshire|\
UK:BUCKS:Buckinghamshire|\
UK:CAMBS:Cambridgeshire|\
UK:CHESH:Cheshire|\
UK:CLEVE:Cleveland|\
UK:CORN:Cornwall|\
UK:CUMB:Cumbria|\
UK:DERBY:Derbyshire|\
UK:DEVON:Devon|\
UK:DORSET:Dorset|\
UK:DURHAM:Durham|\
UK:ESSEX:Essex|\
UK:GLOUS:Gloucestershire|\
UK:GLONDON:Greater London|\
UK:GMANCH:Greater Manchester|\
UK:HANTS:Hampshire|\
UK:HERWOR:Hereford and Worcestershire|\
UK:HERTS:Hertfordshire|\
UK:HUMBER:Humberside|\
UK:IOM:Isle of Man|\
UK:IOW:Isle of Wight|\
UK:KENT:Kent|\
UK:LANCS:Lancashire|\
UK:LEICS:Leicestershire|\
UK:LINCS:Lincolnshire|\
UK:MERSEY:Merseyside|\
UK:NORF:Norfolk|\
UK:NHANTS:Northamptonshire|\
UK:NTHUMB:Northumberland|\
UK:NOTTS:Nottinghamshire|\
UK:OXON:Oxfordshire|\
UK:SHROPS:Shropshire|\
UK:SOM:Somerset|\
UK:STAFFS:Staffordshire|\
UK:SUFF:Suffolk|\
UK:SURREY:Surrey|\
UK:SUSS:Sussex|\
UK:WARKS:Warwickshire|\
UK:WMID:West Midlands|\
UK:WILTS:Wiltshire|\
UK:YORK:Yorkshire|\
Uruguay:Artigas:Artigas|\
Uruguay:Canelones:Canelones|\
Uruguay:Cerro Largo:Cerro Largo|\
Uruguay:Colonia:Colonia|\
Uruguay:Durazno:Durazno|\
Uruguay:Flores:Flores|\
Uruguay:Florida:Florida|\
Uruguay:Lavalleja:Lavalleja|\
Uruguay:Maldonado:Maldonado|\
Uruguay:Montevideo:Montevideo|\
Uruguay:Paysandu:Paysandu|\
Uruguay:Rio Negro:Rio Negro|\
Uruguay:Rivera:Rivera|\
Uruguay:Rocha:Rocha|\
Uruguay:Salto:Salto|\
Uruguay:San Jose:San Jose|\
Uruguay:Soriano:Soriano|\
Uruguay:Tacuarembo:Tacuarembo|\
Uruguay:Treinta y Tres:Treinta y Tres|\
United States:AL:Alabama|\
United States:AK:Alaska|\
United States:AS:American Samoa|\
United States:AR:Arkansas|\
United States:AZ:Arizona|\
United States:CA:California|\
United States:CO:Colorado|\
United States:CT:Connecticut|\
United States:DC:D.C.|\
United States:DE:Delaware|\
United States:FL:Florida|\
United States:GA:Georgia|\
United States:GU:Guam|\
United States:HI:Hawaii|\
United States:ID:Idaho|\
United States:IA:Iowa|\
United States:IL:Illinois|\
United States:IN:Indiana|\
United States:KS:Kansas|\
United States:KY:Kentucky|\
United States:LA:Louisiana|\
United States:ME:Maine|\
United States:MD:Maryland|\
United States:MA:Massachusetts|\
United States:MI:Michigan|\
United States:MN:Minnesota|\
United States:MS:Mississippi|\
United States:MO:Missouri|\
United States:MT:Montana|\
United States:NE:Nebraska|\
United States:NV:Nevada|\
United States:NH:New Hampshire|\
United States:NJ:New Jersey|\
United States:NM:New Mexico|\
United States:NY:New York|\
United States:NC:North Carolina|\
United States:ND:North Dakota|\
United States:OH:Ohio|\
United States:OK:Oklahoma|\
United States:OR:Oregon|\
United States:PA:Pennsylvania|\
United States:PR:Puerto Rico|\
United States:RI:Rhode Island|\
United States:SC:South Carolina|\
United States:SD:South Dakota|\
United States:TN:Tennessee|\
United States:TX:Texas|\
United States:UT:Utah|\
United States:VT:Vermont|\
United States:VA:Virginia|\
United States:VI:Virgin Islands|\
United States:WA:Washington|\
United States:WI:Wisconsin|\
United States:WV:West Virginia|\
United States:WY:Wyoming|\
United States:AA:Military Americas|\
United States:AE:Military Europe/ME/Canada|\
United States:AP:Military Pacific|\
Uzbekistan:Andijon Viloyati:Andijon Viloyati|\
Uzbekistan:Buxoro Viloyati:Buxoro Viloyati|\
Uzbekistan:Farg\'ona Viloyati:Farg\'ona Viloyati|\
Uzbekistan:Jizzax Viloyati:Jizzax Viloyati|\
Uzbekistan:Namangan Viloyati:Namangan Viloyati|\
Uzbekistan:Navoiy Viloyati:Navoiy Viloyati|\
Uzbekistan:Qashqadaryo Viloyati:Qashqadaryo Viloyati|\
Uzbekistan:Qaraqalpog\'iston Respublikasi:Qaraqalpog\'iston Respublikasi|\
Uzbekistan:Samarqand Viloyati:Samarqand Viloyati|\
Uzbekistan:Sirdaryo Viloyati:Sirdaryo Viloyati|\
Uzbekistan:Surxondaryo Viloyati:Surxondaryo Viloyati|\
Uzbekistan:Toshkent Shahri:Toshkent Shahri|\
Uzbekistan:Toshkent Viloyati:Toshkent Viloyati|\
Uzbekistan:Xorazm Viloyati:Xorazm Viloyati|\
Vanuatu:Malampa:Malampa|\
Vanuatu:Penama:Penama|\
Vanuatu:Sanma:Sanma|\
Vanuatu:Shefa:Shefa|\
Vanuatu:Tafea:Tafea|\
Vanuatu:Torba:Torba|\
Venezuela:Amazonas:Amazonas|\
Venezuela:Anzoategui:Anzoategui|\
Venezuela:Apure:Apure|\
Venezuela:Aragua:Aragua|\
Venezuela:Barinas:Barinas|\
Venezuela:Bolivar:Bolivar|\
Venezuela:Carabobo:Carabobo|\
Venezuela:Cojedes:Cojedes|\
Venezuela:Delta Amacuro:Delta Amacuro|\
Venezuela:Dependencias Federales:Dependencias Federales|\
Venezuela:Distrito Federal:Distrito Federal|\
Venezuela:Falcon:Falcon|\
Venezuela:Guarico:Guarico|\
Venezuela:Lara:Lara|\
Venezuela:Merida:Merida|\
Venezuela:Miranda:Miranda|\
Venezuela:Monagas:Monagas|\
Venezuela:Nueva Esparta:Nueva Esparta|\
Venezuela:Portuguesa:Portuguesa|\
Venezuela:Sucre:Sucre|\
Venezuela:Tachira:Tachira|\
Venezuela:Trujillo:Trujillo|\
Venezuela:Vargas:Vargas|\
Venezuela:Yaracuy:Yaracuy|\
Venezuela:Zulia:Zulia|\
Vietnam:An Giang:An Giang|\
Vietnam:Bac Giang:Bac Giang|\
Vietnam:Bac Kan:Bac Kan|\
Vietnam:Bac Lieu:Bac Lieu|\
Vietnam:Bac Ninh:Bac Ninh|\
Vietnam:Ba Ria-Vung Tau:Ba Ria-Vung Tau|\
Vietnam:Ben Tre:Ben Tre|\
Vietnam:Binh Dinh:Binh Dinh|\
Vietnam:Binh Duong:Binh Duong|\
Vietnam:Binh Phuoc:Binh Phuoc|\
Vietnam:Binh Thuan:Binh Thuan|\
Vietnam:Ca Mau:Ca Mau|\
Vietnam:Cao Bang:Cao Bang|\
Vietnam:Dac Lak:Dac Lak|\
Vietnam:Dac Nong:Dac Nong|\
Vietnam:Dien Bien:Dien Bien|\
Vietnam:Dong Nai:Dong Nai|\
Vietnam:Dong Thap:Dong Thap|\
Vietnam:Gia Lai:Gia Lai|\
Vietnam:Ha Giang:Ha Giang|\
Vietnam:Hai Duong:Hai Duong|\
Vietnam:Ha Nam:Ha Nam|\
Vietnam:Ha Tay:Ha Tay|\
Vietnam:Ha Tinh:Ha Tinh|\
Vietnam:Hau Giang:Hau Giang|\
Vietnam:Hoa Binh:Hoa Binh|\
Vietnam:Hung Yen:Hung Yen|\
Vietnam:Khanh Hoa:Khanh Hoa|\
Vietnam:Kien Giang:Kien Giang|\
Vietnam:Kon Tum:Kon Tum|\
Vietnam:Lai Chau:Lai Chau|\
Vietnam:Lam Dong:Lam Dong|\
Vietnam:Lang Son:Lang Son|\
Vietnam:Lao Cai:Lao Cai|\
Vietnam:Long An:Long An|\
Vietnam:Nam Dinh:Nam Dinh|\
Vietnam:Nghe An:Nghe An|\
Vietnam:Ninh Binh:Ninh Binh|\
Vietnam:Ninh Thuan:Ninh Thuan|\
Vietnam:Phu Tho:Phu Tho|\
Vietnam:Phu Yen:Phu Yen|\
Vietnam:Quang Binh:Quang Binh|\
Vietnam:Quang Nam:Quang Nam|\
Vietnam:Quang Ngai:Quang Ngai|\
Vietnam:Quang Ninh:Quang Ninh|\
Vietnam:Quang Tri:Quang Tri|\
Vietnam:Soc Trang:Soc Trang|\
Vietnam:Son La:Son La|\
Vietnam:Tay Ninh:Tay Ninh|\
Vietnam:Thai Binh:Thai Binh|\
Vietnam:Thai Nguyen:Thai Nguyen|\
Vietnam:Thanh Hoa:Thanh Hoa|\
Vietnam:Thua Thien-Hue:Thua Thien-Hue|\
Vietnam:Tien Giang:Tien Giang|\
Vietnam:Tra Vinh:Tra Vinh|\
Vietnam:Tuyen Quang:Tuyen Quang|\
Vietnam:Vinh Long:Vinh Long|\
Vietnam:Vinh Phuc:Vinh Phuc|\
Vietnam:Yen Bai:Yen Bai|\
Vietnam:Can Tho:Can Tho|\
Vietnam:Da Nang:Da Nang|\
Vietnam:Hai Phong:Hai Phong|\
Vietnam:Hanoi:Hanoi|\
Vietnam:Ho Chi Minh:Ho Chi Minh|\
Yemen:Abyan:Abyan|\
Yemen:\'Adan:\'Adan|\
Yemen:Ad Dali\':Ad Dali\'|\
Yemen:Al Bayda\':Al Bayda\'|\
Yemen:Al Hudaydah:Al Hudaydah|\
Yemen:Al Jawf:Al Jawf|\
Yemen:Al Mahrah:Al Mahrah|\
Yemen:Al Mahwit:Al Mahwit|\
Yemen:\'Amran:\'Amran|\
Yemen:Dhamar:Dhamar|\
Yemen:Hadramawt:Hadramawt|\
Yemen:Hajjah:Hajjah|\
Yemen:Ibb:Ibb|\
Yemen:Lahij:Lahij|\
Yemen:Ma\'rib:Ma\'rib|\
Yemen:Sa\'dah:Sa\'dah|\
Yemen:San\'a\':San\'a\'|\
Yemen:Shabwah:Shabwah|\
Yemen:Ta\'izz:Ta\'izz|\
Zambia:Central:Central|\
Zambia:Copperbelt:Copperbelt|\
Zambia:Eastern:Eastern|\
Zambia:Luapula:Luapula|\
Zambia:Lusaka:Lusaka|\
Zambia:Northern:Northern|\
Zambia:North-Western:North-Western|\
Zambia:Southern:Southern|\
Zambia:Western:Western|\
Zimbabwe:Bulawayo:Bulawayo|\
Zimbabwe:Harare:Harare|\
Zimbabwe:Manicaland:Manicaland|\
Zimbabwe:Mashonaland Central:Mashonaland Central|\
Zimbabwe:Mashonaland East:Mashonaland East|\
Zimbabwe:Mashonaland West:Mashonaland West|\
Zimbabwe:Masvingo:Masvingo|\
Zimbabwe:Matabeleland North:Matabeleland North|\
Zimbabwe:Matabeleland South:Matabeleland South|\
Zimbabwe:Midlands:Midlands|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var country = '\
	 United States:United States|\
	 Canada:Canada|\
	 Afghanistan:Afghanistan|\
	 Albania:Albania|\
	 Algeria:Algeria|\
	 American Samoa:American Samoa|\
	 Andorra:Andorra|\
	 Angola:Angola|\
	 Anguilla:Anguilla|\
	 Antarctica:Antarctica|\
	 Antigua:Antigua|\
	 Argentina:Argentina|\
	 Armenia:Armenia|\
	 Aruba:Aruba|\
	 Australia:Australia|\
	 Austria:Austria|\
	 Azerbaijan:Azerbaijan|\
	 Bahamas:Bahamas|\
	 Bahrain:Bahrain|\
	 Bangladesh:Bangladesh|\
	 Barbados:Barbados|\
	 Belarus:Belarus|\
	 Belgium:Belgium|\
	 Belize:Belize|\
	 Benin:Benin|\
	 Bermuda:Bermuda|\
	 Bhutan:Bhutan|\
	 Bolivia:Bolivia|\
	 Bosnia:Bosnia and Herzegovina|\
	 Botswana:Botswana|\
	 Brazil:Brazil|\
	 British Virgin Islands:British Virgin Islands|\
	 Brunei:Brunei|\
	 Bulgaria:Bulgaria|\
	 Burkina Faso:Burkina Faso|\
	 Burma:Burma|\
	 Burundi:Burundi|\
	 Cambodia:Cambodia|\
	 Cameroon:Cameroon|\
	 Cape Verde:Cape Verde|\
	 Central African Republic:Central African Republic|\
	 Chad:Chad|\
	 Chile:Chile|\
	 China:China|\
	 Colombia:Colombia|\
	 Comoros:Comoros|\
	 Congo (DRC):Congo (DRC)|\
	 Congo (RC):Congo (RC)|\
	 Cook Islands:Cook Islands|\
	 Costa Rica:Costa Rica|\
	 Cote d Ivoire:Cote d Ivoire|\
	 Croatia:Croatia|\
	 Cuba:Cuba|\
	 Cyprus:Cyprus|\
	 Czech Republic:Czech Republic|\
	 Denmark:Denmark|\
	 Djibouti:Djibouti|\
	 Dominica:Dominica|\
	 Dominican Republic:Dominican Republic|\
	 Ecuador:Ecuador|\
	 Egypt:Egypt|\
	 El Salvador:El Salvador|\
	 Equatorial Guinea:Equatorial Guinea|\
	 Eritrea:Eritrea|\
	 Estonia:Estonia|\
	 Ethiopia:Ethiopia|\
	 Falkland Islands:Falkland Islands|\
	 Federated States of Micronesia:Federated States of Micronesia|\
	 Fiji:Fiji|\
	 Finland:Finland|\
	 France:France|\
	 French Guiana:French Guiana|\
	 French Polynesia:French Polynesia|\
	 Gabon:Gabon|\
	 Georgia:Georgia|\
	 Germany:Germany|\
	 Ghana:Ghana|\
	 Gibraltar:Gibraltar|\
	 Great Britain:Great Britain|\
	 Greece:Greece|\
	 Greenland:Greenland|\
	 Grenada:Grenada|\
	 Guadeloupe:Guadeloupe|\
	 Guam:Guam|\
	 Guatemala:Guatemala|\
	 Guinea:Guinea|\
	 Guinea Bissau:Guinea Bissau|\
	 Guyana:Guyana|\
	 Haiti:Haiti|\
	 Honduras:Honduras|\
	 Hong Kong:Hong Kong|\
	 Hungary:Hungary|\
	 Iceland:Iceland|\
	 India:India|\
	 Indonesia:Indonesia|\
	 Iran:Iran|\
	 Iraq:Iraq|\
	 Ireland:Ireland|\
	 Ireland Eire:Ireland (Eire)|\
	 Israel:Israel|\
	 Italy:Italy|\
	 Ivory Coast:Ivory Coast|\
	 Jamaica:Jamaica|\
	 Japan:Japan|\
	 Jordan:Jordan|\
	 Kazakhstan:Kazakhstan|\
	 Kenya:Kenya|\
	 Kiribati:Kiribati|\
	 Kuwait:Kuwait|\
	 Kyrgyzstan:Kyrgyzstan|\
	 Laos:Laos|\
	 Latvia:Latvia|\
	 Lebanon:Lebanon|\
	 Lesotho:Lesotho|\
	 Liberia:Liberia|\
	 Libya:Libya|\
	 Liechtenstein:Liechtenstein|\
	 Lithuania:Lithuania|\
	 Luxembourg:Luxembourg|\
	 Macau:Macau|\
	 Macedonia:Macedonia|\
	 Madagascar:Madagascar|\
	 Malawi:Malawi|\
	 Malaysia:Malaysia|\
	 Maldives:Maldives|\
	 Mali:Mali|\
	 Malta:Malta|\
	 Marshall Islands:Marshall Islands|\
	 Martinique:Martinique|\
	 Mauritania:Mauritania|\
	 Mauritius:Mauritius|\
	 Mayotte:Mayotte|\
	 Mexico:Mexico|\
	 Moldova:Moldova|\
	 Monaco:Monaco|\
	 Mongolia:Mongolia|\
	 Montserrat:Montserrat|\
	 Morocco:Morocco|\
	 Mozambique:Mozambique|\
	 Namibia:Namibia|\
	 Nauru:Nauru|\
	 Nepal:Nepal|\
	 Netherlands:Netherlands|\
	 Netherlands Antilles:Netherlands Antilles|\
	 New Caledonia:New Caledonia|\
	 New Zealand:New Zealand|\
	 Nicaragua:Nicaragua|\
	 Niger:Niger|\
	 Nigeria:Nigeria|\
	 North Korea :North Korea |\
	 Northern Mariana Islands:Northern Mariana Islands|\
	 Norway:Norway|\
	 Oman:Oman|\
	 Pakistan:Pakistan|\
	 Palau:Palau|\
	 Palestine:Palestine|\
	 Panama:Panama|\
	 Papua New Guinea:Papua New Guinea|\
	 Paraguay:Paraguay|\
	 Peru:Peru|\
	 Philippines:Philippines|\
	 Pitcairn Islands:Pitcairn Islands|\
	 Poland:Poland|\
	 Portugal:Portugal|\
	 Puerto Rico:Puerto Rico|\
	 Qatar:Qatar|\
	 Reunion:Reunion|\
	 Romania:Romania|\
	 Russia:Russia|\
	 Rwanda:Rwanda|\
	 Saint Kitts and Nevis:Saint Kitts and Nevis|\
	 Saint Lucia:Saint Lucia|\
	 Saint Pierre and Miquelon:Saint Pierre and Miquelon|\
	 Saint Vincent and the Grenadines:Saint Vincent and the Grenadines|\
	 Samoa:Samoa|\
	 San Marino:San Marino|\
	 Sao Tome and Principe:Sao Tome and Principe|\
	 Saudi Arabia:Saudi Arabia|\
	 Scandinavia:Scandinavia|\
	 Senegal:Senegal|\
	 Serbia:Serbia|\
	 Seychelles:Seychelles|\
	 Sierra Leone:Sierra Leone|\
	 Singapore:Singapore|\
	 Slovakia:Slovakia|\
	 Slovenia:Slovenia|\
	 Solomon Islands:Solomon Islands|\
	 Somalia:Somalia|\
	 South Africa:South Africa|\
	 South Korea:South Korea|\
	 Spain:Spain|\
	 Sri Lanka:Sri Lanka|\
	 Sudan:Sudan|\
	 Suriname:Suriname|\
	 Swaziland:Swaziland|\
	 Sweden:Sweden|\
	 Switzerland:Switzerland|\
	 Syria:Syria|\
	 Taiwan:Taiwan|\
	 Tajikistan:Tajikistan|\
	 Tanzania:Tanzania|\
	 Thailand:Thailand|\
	 The Gambia:The Gambia|\
	 The Holy See:The Holy See|\
	 Togo:Togo|\
	 Tonga:Tonga|\
	 Trinidad:Trinidad|\
	 Tunisia:Tunisia|\
	 Turkey:Turkey|\
	 Turkmenistan:Turkmenistan|\
	 Turks and Caicos Islands:Turks and Caicos Islands|\
	 Tuvalu:Tuvalu|\
	 United Arab Emirates:United Arab Emirates|\
	 Uganda:Uganda|\
	 Ukraine:Ukraine|\
	 UK:United Kingdom|\
	 Uruguay:Uruguay|\
	 United States:United States|\
	 United States Virgin Islands:United States Virgin Islands|\
	 Uzbekistan:Uzbekistan|\
	 Vanuatu:Vanuatu|\
	 Venezuela:Venezuela|\
	 Vietnam:Vietnam|\
	 Western Sahara:Western Sahara|\
	 Yemen:Yemen|\
	 Yugoslavia:Yugoslavia|\
	 Zaire:Zaire|\
	 Zambia:Zambia|\
	 Zimbabwe:Zimbabwe|\
	 Other:Other|\
	 ';


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Populates the country selected with the counties from the country list
function populateCountry(SetCountry) {
	//alert ("Country Function");
			//	
  if ( postCountry != '' ) {
    SetCountry = postCountry;
	
  }
  var countryLineArray = country.split('|');  // Split into lines
  var selObj = document.getElementById('Country');
  
  
  selObj.options[0] = new Option('Select Country','Select Country');
  selObj.selectedIndex = 0;
  
  for (var loop = 0; loop < countryLineArray.length; loop++) {
    lineArray = countryLineArray[loop].split(':');
    countryCode  = TrimString(lineArray[0]);
    countryName  = TrimString(lineArray[1]);
    if ( countryCode != '' ) {
      selObj.options[loop + 1] = new Option(countryName, countryCode);
    }
    if ( SetCountry == countryCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
    if(SetCountry=='')
        {selObj.selectedIndex = 0;}
    
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function populateState(SetState) {
  var selObj = document.getElementById('State');
  var selObjZip = document.getElementById('Zip_code');
  var foundState = false;
    if(typeof SetState !== 'undefined')
        {
            SetState = SetState.replace("&acute;", "'" );// strip leading
        }  
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select State/Province','');
    selObj.selectedIndex = 0;
  }
  
  
  // Populate the drop down with states from the selected country
  var stateLineArray = state.split("|");  // Split into lines
  var optionCntr = 1;
  
  for (var loop = 0; loop < stateLineArray.length; loop++) {
    lineArray = stateLineArray[loop].split(":");
    countryCode  = TrimString(lineArray[0]);
    stateCode    = TrimString(lineArray[1]);
    stateName    = TrimString(lineArray[2]);
	
  if (document.getElementById('Country').value == countryCode && countryCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) 
	{
			if ( countryCode == 'United States'){}
			else {}
        parentObj = document.getElementById('State').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement('SELECT');
        inputSel.setAttribute("name","State");
        inputSel.setAttribute("id","State");
        inputSel.setAttribute("class","custom-select");
		//inputSel.setAttribute("onblur", "Eval_values(this.value, 'State')");
        // class="custom-select"
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('State');
        selObj.options[0] = new Option('Select State','');
        selObj.selectedIndex = 0;
	  }
	 if ( stateCode != '' ) 
	{
		 	if ( countryCode == 'United States'){}
			else {}
        selObj.options[optionCntr] = new Option(stateName, stateCode);
      }
      // See if it's selected from a previous post
      if (stateCode == SetState && countryCode == postCountry) 
	  {
        selObj.selectedIndex = optionCntr;
      }
      foundState = true;
      optionCntr++
    }
  }
  // If the country has no states, change the select to a text box
  if ( ! foundState ) { 
    parentObj = document.getElementById('State').parentNode;
    parentObj.removeChild(selObj);
//	appendChild
 // Create the Input Field
 //alert("Removed the selectbox and create a text one!");
			if ( countryCode == 'United States'){}
			else {}
var inputEl = document.createElement("input");
    inputEl.setAttribute("id", "State");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "State");
    inputEl.setAttribute("value", "");
    inputEl.setAttribute("class","form-control");
	//inputEl.setAttribute("onblur", "Eval_values(this.value, 'State')");
	//inputEl.setAttribute("size", 20);
    parentObj.appendChild(inputEl) ;
	
	
  }
}
//////////////////////////////////////////////////////
function populateState2(MSG) 
		{
			alert ("State Function :: "+MSG);
		}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function AI_initCountry(SetCountry,SetState) 
{
    
    postState = SetState;
    postCountry = SetCountry;
    populateCountry(SetCountry);
    populateState(SetState);

}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function AI_init_Institution_Country(SetCountry,SetState) {    
    post_Institution_State = SetState;
    post_Institution_Country = SetCountry;
    populate_Institution_Country(SetCountry);
    populate_Institution_State(SetState);
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Populates the country selected with the counties from the country list
function populate_Institution_Country(SetCountry) {
	console.log("populate_Institution_Country : to country(%s)",SetCountry);
			//	
  if ( postCountry != '' ) {
    SetCountry = postCountry;
	
  }
  var countryLineArray = country.split('|');  // Split into lines
  var selObj = document.getElementById('Institution_Country');
  
  
  selObj.options[0] = new Option('Select Country','Select Country');
  selObj.selectedIndex = 0;
  
  for (var loop = 0; loop < countryLineArray.length; loop++) {
    lineArray = countryLineArray[loop].split(':');
    countryCode  = TrimString(lineArray[0]);
    countryName  = TrimString(lineArray[1]);
    if ( countryCode != '' ) {
      selObj.options[loop + 1] = new Option(countryName, countryCode);
    }
    if ( SetCountry == countryCode ) {
      selObj.selectedIndex = loop + 1;
    }
  }
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function populate_Institution_State(SetState) {
    console.log("populate_Institution_State : to state(%s)",SetState);
  var selObj = document.getElementById('Institution_State');
  var selObjZip = document.getElementById('Institution_Zip_code');
  var foundState = false;
    if(typeof SetState !== 'undefined')
        {
            SetState = SetState.replace("&acute;", "'" );// strip leading
        }  
  // Empty options just in case new drop down is shorter
  if ( selObj.type == 'select-one' ) {
    for (var i = 0; i < selObj.options.length; i++) {
      selObj.options[i] = null;
    }
    selObj.options.length=null;
    selObj.options[0] = new Option('Select State/Province','');
    selObj.selectedIndex = 0;
  }
  
  
  // Populate the drop down with states from the selected country
  var stateLineArray = state.split("|");  // Split into lines
  var optionCntr = 1;
  
  for (var loop = 0; loop < stateLineArray.length; loop++) {
    lineArray = stateLineArray[loop].split(":");
    countryCode  = TrimString(lineArray[0]);
    stateCode    = TrimString(lineArray[1]);
    stateName    = TrimString(lineArray[2]);
	
  if (document.getElementById('Institution_Country').value == countryCode && countryCode != '' ) {
    // If it's a input element, change it to a select
      if ( selObj.type == 'text' ) 
	{
			if ( countryCode == 'United States'){}
			else {}
        parentObj = document.getElementById('Institution_State').parentNode;
        parentObj.removeChild(selObj);
        var inputSel = document.createElement('SELECT');
        inputSel.setAttribute("name","Institution_State");
        inputSel.setAttribute("id","Institution_State");
        inputSel.setAttribute("class","custom-select");
		//inputSel.setAttribute("onblur", "Eval_values(this.value, 'State')");
        // class="custom-select"
        parentObj.appendChild(inputSel) ;
        selObj = document.getElementById('Institution_State');
        selObj.options[0] = new Option('Select State','');
        selObj.selectedIndex = 0;
	  }
	 if ( stateCode != '' ) 
	{
		 	if ( countryCode == 'United States'){}
			else {}
        selObj.options[optionCntr] = new Option(stateName, stateCode);
      }
      // See if it's selected from a previous post
      if (stateCode == SetState && countryCode == postCountry) 
	  {
        selObj.selectedIndex = optionCntr;
      }
      foundState = true;
      optionCntr++
    }
  }
  // If the country has no states, change the select to a text box
  if ( ! foundState ) { 
    parentObj = document.getElementById('Institution_State').parentNode;
    parentObj.removeChild(selObj);
//	appendChild
 // Create the Input Field
 //alert("Removed the selectbox and create a text one!");
			if ( countryCode == 'United States'){}
			else {}
var inputEl = document.createElement("input");
    inputEl.setAttribute("id", "Institution_State");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "Institution_State");
    inputEl.setAttribute("value", "");
    inputEl.setAttribute("class","form-control");
	//inputEl.setAttribute("onblur", "Eval_values(this.value, 'State')");
	//inputEl.setAttribute("size", 20);
    parentObj.appendChild(inputEl) ;
	
	
  }
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// This function strips the phone from any extra chars
function isphonenum(s)
{ 
var key1=0;
//empty the value in the form
document.getElementById('phone').value="";
//create a varliable to contain only the chars in want... any thing else will be removed
  var valChar='0123456789'
//check the length of the value entered
  for (var i=0; i < s.length; i++) {
				    var c=s.charAt(i);	
	//this if will remove any chars that do not belong to a phone number	
	if( valChar.indexOf(c) == -1 ) {
		//do nothing //alert (c+ " :is not accepted \n Phone Number Must Be Entered As: (555) 555-1234");
									}
	//here the else will rebuilt the phone number with only numbers
	else {
		key1++;
		//alert (key1);	
				if (key1 == 1)	{
						document.getElementById('phone').value="(";
			          			}
				if (key1 == 4)	{
						document.getElementById('phone').value+=")";
				      			}
				if (key1 == 7)	{
						document.getElementById('phone').value+="-";
				      			}
		document.getElementById('phone').value+=c;
		 }
									}
  return true;
}

function isnum_images(s)
{ 
document.getElementById('num_images').value="";
  var valChar='0123456789'
  for (var i=0; i < s.length; i++) {
			    var c=s.charAt(i);	
	if( valChar.indexOf(c) == -1 ) {
									}
	//here the else will rebuilt the phone number with only numbers
	else {
		document.getElementById('num_images').value+=c;
		 }
									}
  return true;
}
function refill(Fieldval,Fillval) {
	alert ("Value : "+Fillval+" for "+Fieldval);

}
//=============================================================================
//===   This Function Fills the information on click to the right fields  =====
//=============================================================================
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Calender
//
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// Calendar template
function ds_template_main_above(t) {
	return '<table cellpadding="3" cellspacing="1" class="ds_tbl">'
	     + '<tr>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_py();">&lt;&lt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_pm();">&lt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_hi();" colspan="3">[Close]</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_nm();">&gt;</td>'
		 + '<td class="ds_head" style="cursor: pointer" onclick="ds_ny();">&gt;&gt;</td>'
		 + '</tr>'
	     + '<tr>'
		 + '<td colspan="7" class="ds_head">' + t + '</td>'
		 + '</tr>'
		 + '<tr>';
}

function ds_template_day_row(t) {
	return '<td class="ds_subhead">' + t + '</td>';
	// Define width in CSS, XHTML 1.0 Strict doesn't have width property for it.
}

function ds_template_new_week() {
	return '</tr><tr>';
}

function ds_template_blank_cell(colspan) {
	return '<td colspan="' + colspan + '"></td>'
}

function ds_template_day(d, m, y, today) {
	if (d==today){//alert (today);
	return '<td class="ds_subhead" onclick="ds_onclick(' + d + ',' + m + ',' + y + ')">' + d + '</td>';}
	else{
	return '<td class="ds_cell" onclick="ds_onclick(' + d + ',' + m + ',' + y + ')">' + d + '</td>';}
	// Define width the day row.
}

function ds_template_main_below() {
	return '</tr>'
	     + '</table>';
}


// This one draws calendar...
function ds_draw_calendar(m, y, dateT) {
	//alert ("Draw Month: "+m+" day: "+dateT+" year: "+y);
	var today = dateT;
	// First clean the output buffer.
	ds_ob_clean();
	// Here we go, do the header
	ds_echo (ds_template_main_above(ds_monthnames[m - 1] + ' ' + y));
	for (i = 0; i < 7; i ++) {
		ds_echo (ds_template_day_row(ds_daynames[i]));
	}
	// Make a date object.
	var ds_dc_date = new Date();
	ds_dc_date.setMonth(m - 1);
	ds_dc_date.setFullYear(y);
	ds_dc_date.setDate(1);
	//alert (ds_dc_date);
	if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
		days = 31;
	} else if (m == 4 || m == 6 || m == 9 || m == 11) {
		days = 30;
	} else {
		days = (y % 4 == 0) ? 29 : 28;
	}
	var first_day = ds_dc_date.getDay();
	var first_loop = 1;
	// Start the first week
	ds_echo (ds_template_new_week());
	// If sunday is not the first day of the month, make a blank cell...
	if (first_day != 0) {
		ds_echo (ds_template_blank_cell(first_day));
	}
	var j = first_day;
	for (i = 0; i < days; i ++) {
		// Today is sunday, make a new week.
		// If this sunday is the first day of the month,
		// we've made a new row for you already.
		if (j == 0 && !first_loop) {
			// New week!!
			ds_echo (ds_template_new_week());
		}
		// Make a row of that day!
		ds_echo (ds_template_day(i + 1, m, y, today));
		//alert (ds_template_day);
		// This is not first loop anymore...
		first_loop = 0;
		// What is the next day?
		j ++;
		j %= 7;
	}
	// Do the footer
	ds_echo (ds_template_main_below());
	// And let's display..
	ds_ob_flush();
	// Scroll it into view.
	ds_ce.scrollIntoView();
	//alert ("set");
}

// A function to show the calendar.
// When user click on the date, it will set the content of t.
function ds_sh(t) {
	//alert ("Calend") ;
	// Set the element to set...
	ds_element = t;
	// Make a new date, and set the current month and year.
	var ds_sh_date = new Date();
	ds_c_month = ds_sh_date.getMonth() + 1;
	ds_c_year = ds_sh_date.getFullYear();
	ds_c_day = ds_sh_date.getDate();
	// Draw the calendar
	//alert ("Date is: "+ds_sh_date+"  Month: "+ds_c_month+" Year: "+ds_c_year+" day: "+ds_c_day);
	ds_draw_calendar(ds_c_month, ds_c_year, ds_c_day);
	// To change the position properly, we must show it first.
	ds_ce.style.display = '';
	// Move the calendar container!
	the_left = ds_getleft(t);
	the_top = ds_gettop(t) + t.offsetHeight;
	ds_ce.style.left = the_left + 'px';
	ds_ce.style.top = the_top + 'px';
	// Scroll it into view.
	ds_ce.scrollIntoView();
}

// Hide the calendar.
function ds_hi() {
	ds_ce.style.display = 'none';
}

// Moves to the next month...
function ds_nm() {
	// Increase the current month.
	ds_c_month ++;
	// We have passed December, let's go to the next year.
	// Increase the current year, and set the current month to January.
	if (ds_c_month > 12) {
		ds_c_month = 1; 
		ds_c_year++;
	}
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the previous month...
function ds_pm() {
	ds_c_month = ds_c_month - 1; // Can't use dash-dash here, it will make the page invalid.
	// We have passed January, let's go back to the previous year.
	// Decrease the current year, and set the current month to December.
	if (ds_c_month < 1) {
		ds_c_month = 12; 
		ds_c_year = ds_c_year - 1; // Can't use dash-dash here, it will make the page invalid.
	}
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the next year...
function ds_ny() {
	// Increase the current year.
	ds_c_year++;
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Moves to the previous year...
function ds_py() {
	// Decrease the current year.
	ds_c_year = ds_c_year - 1; // Can't use dash-dash here, it will make the page invalid.
	// Redraw the calendar.
	ds_draw_calendar(ds_c_month, ds_c_year);
}

// Format the date to output.
function ds_format_date(d, m, y) {
	// 2 digits month.
	m2 = '00' + m;
	m2 = m2.substr(m2.length - 2);
	// 2 digits day.
	d2 = '00' + d;
	d2 = d2.substr(d2.length - 2);
	// YYYY-MM-DD
	return y + '-' + m2 + '-' + d2;
}

// When the user clicks the day.
function ds_onclick(d, m, y) {
	// Hide the calendar.
	ds_hi();
	// Set the value of it, if we can.
	if (typeof(ds_element.value) != 'undefined') {
		ds_element.value = ds_format_date(d, m, y);
	// Maybe we want to set the HTML in it.
	} else if (typeof(ds_element.innerHTML) != 'undefined') {
		ds_element.innerHTML = ds_format_date(d, m, y);
	// I don't know how should we display it, just alert it to user.
	} else {
		alert (ds_format_date(d, m, y));
	}
}
function ds_ob_clean() {
	ds_ob = '';
}
function ds_ob_flush() {
	ds_oe.innerHTML = ds_ob;
	ds_ob_clean();
}
function ds_echo(t) {
	ds_ob += t;
}
function ds_getel(id) {
	return document.getElementById(id);
}

// Get the left and the top of the element.
function ds_getleft(el) {
	var tmp = el.offsetLeft;
	el = el.offsetParent
	while(el) {
		tmp += el.offsetLeft;
		el = el.offsetParent;
	}
	return tmp;
}
function ds_gettop(el) {
	var tmp = el.offsetTop;
	el = el.offsetParent
	while(el) {
		tmp += el.offsetTop;
		el = el.offsetParent;
	}
	return tmp;
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//
//  END Calender
//
////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


