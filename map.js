/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global infowindow */

var latlng = new google.maps.LatLng(-34.397, 150.644);

var typeId=google.maps.MapTypeId.ROADMAP;
var mapOptions = 
        {
    center: latlng,
    zoom: 8,
    mapTypeId: typeId
};

google.maps.visualRefresh = true;
var map;
var google;
function initialize() 
{
  var mapDiv = document.getElementById('map');
  var latlng = new google.maps.LatLng(40.5,-70.12);
  var options = {
      center: latlng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
map = new google.maps.Map(mapDiv, mapOptions);
}

function button1()
{
  var mapDiv = document.getElementById('map');
  var myLatlng = new google.maps.LatLng(49.460983, 11.061859);
  var options = {
      center: myLatlng,
      zoom: 7
  };
  
map = new google.maps.Map(mapDiv, options);

var marker1 = new google.maps.Marker(
        {
            position: myLatlng,
            map: map,
            title: 'I am here!',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            
        });
        
var myLatlng1 = new google.maps.LatLng(51.4087123, 14.5094117);
  marker1.addListener("click", () => {
    map.panTo(myLatlng1);
  });
  
var marker2 = new google.maps.Marker(
        {
            position: myLatlng1,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });
  
}

function button2()
{
  var mapDiv = document.getElementById('map');
  var myLatlng = new google.maps.LatLng(45.783100, 3.082400);
  var myLatlng1 = new google.maps.LatLng(44.0908885, 6.3658506);
  var myLatlng2 = new google.maps.LatLng(46.7502164, 4.6713815);
  var options = {
      center: myLatlng,
      zoom: 5
  };
  
  map = new google.maps.Map(mapDiv, options);
  
  var marker = new google.maps.Marker(
        {
            position: myLatlng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
  var marker1 = new google.maps.Marker(
        {
            position: myLatlng1,
            map: map,
            title: '200 km',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
  var marker2 = new google.maps.Marker(
        {
            position: myLatlng2,
            map: map,
            title: '100 km',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        
  const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "0x220000FF",
      fillOpacity: 0.35,
      map,
      center: map.getCenter(),
      radius: 163000
    });
    
  const cityCircle1 = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "green",
      fillOpacity: 0.35,
      map,
      center: map.getCenter(),
      radius: 320000
    });
    
  var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> 200 km </div>' } );
google.maps.event.addListener(marker1, 'click', function(){InfoWindow.open(map,marker1);});

  var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> 100 km </div>' } );
google.maps.event.addListener(marker2, 'click', function(){InfoWindow.open(map,marker2);});
}

function button3()
{
   var mapDiv = document.getElementById('map');
   var myLatlng = new google.maps.LatLng(43.733334, 7.416667);
   var options = {
      center: myLatlng,
      zoom: 13
  };
  
  map = new google.maps.Map(mapDiv, options);
  
  var MonacoDelimiters = [
{ lng: 7.41338348388666, lat: 43.734588623047 },
{ lng: 7.43630027771002, lat: 43.750888824463 },
{ lng: 7.43923950195318, lat: 43.7490272521972 },
{ lng: 7.43958282470709, lat: 43.7492141723633 },
{ lng: 7.43958187103277, lat: 43.7481956481934 },
{ lng: 7.43985986709589, lat: 43.7481956481934 },
{ lng: 7.43985986709589, lat: 43.747917175293 },
{ lng: 7.43958187103277, lat: 43.747917175293 },
{ lng: 7.43958187103277, lat: 43.7459716796876 },
{ lng: 7.43763780593878, lat: 43.7459716796876 },
{ lng: 7.43763780593878, lat: 43.7462501525879 },
{ lng: 7.43625020980835, lat: 43.7462501525879 },
{ lng: 7.43625020980835, lat: 43.7459716796876 },
{ lng: 7.43569421768188, lat: 43.7459716796876 },
{ lng: 7.43569421768188, lat: 43.7462501525879 },
{ lng: 7.43541622161871, lat: 43.7462501525879 },
{ lng: 7.43541622161871, lat: 43.7459716796876 },
{ lng: 7.43513822555542, lat: 43.7459716796876 },
{ lng: 7.43513822555542, lat: 43.7456932067872 },
{ lng: 7.43486213684088, lat: 43.7456932067872 },
{ lng: 7.43486213684088, lat: 43.745418548584 },
{ lng: 7.43430614471436, lat: 43.745418548584 },
{ lng: 7.43430614471436, lat: 43.7451400756836 },
{ lng: 7.43402814865124, lat: 43.7451400756836 },
{ lng: 7.43402814865124, lat: 43.7445831298828 },
{ lng: 7.43347215652477, lat: 43.7445831298828 },
{ lng: 7.43347215652477, lat: 43.7443046569824 },
{ lng: 7.43319416046143, lat: 43.7443046569824 },
{ lng: 7.43319416046143, lat: 43.743751525879 },
{ lng: 7.43291616439831, lat: 43.743751525879 },
{ lng: 7.43291616439831, lat: 43.7431945800782 },
{ lng: 7.43264007568354, lat: 43.7431945800782 },
{ lng: 7.43263816833496, lat: 43.7429161071778 },
{ lng: 7.43208408355707, lat: 43.7429161071778 },
{ lng: 7.43208408355707, lat: 43.7423629760743 },
{ lng: 7.43152809143078, lat: 43.7423629760743 },
{ lng: 7.43152809143078, lat: 43.7418060302735 },
{ lng: 7.43125009536749, lat: 43.7418060302735 },
{ lng: 7.43125009536749, lat: 43.7415275573731 },
{ lng: 7.43097209930431, lat: 43.7415275573731 },
{ lng: 7.43097209930431, lat: 43.7412490844728 },
{ lng: 7.43125009536749, lat: 43.7412490844728 },
{ lng: 7.43125009536749, lat: 43.7409706115724 },
{ lng: 7.43097209930431, lat: 43.7409706115724 },
{ lng: 7.43097209930431, lat: 43.7406959533691 },
{ lng: 7.43069410324097, lat: 43.7406959533691 },
{ lng: 7.43069410324097, lat: 43.7390289306641 },
{ lng: 7.43041610717785, lat: 43.7390289306641 },
{ lng: 7.43041610717785, lat: 43.7379150390625 },
{ lng: 7.43014001846313, lat: 43.7379150390625 },
{ lng: 7.43014001846313, lat: 43.7376403808595 },
{ lng: 7.42902803421015, lat: 43.7376403808595 },
{ lng: 7.42902803421015, lat: 43.7373619079591 },
{ lng: 7.4279150962829,  lat: 43.7373619079591 },
{ lng: 7.4279150962829,  lat: 43.7370834350587 },
{ lng: 7.42763996124268, lat: 43.7370834350587 },
{ lng: 7.42763996124268, lat: 43.7365264892579 },
{ lng: 7.4273619651795,  lat: 43.7365264892579 },
{ lng: 7.4273619651795,  lat: 43.7362518310547 },
{ lng: 7.42676019668579, lat: 43.7362518310547 },
{ lng: 7.42374897003185, lat: 43.7362518310547 },
{ lng: 7.42374897003185, lat: 43.7359733581544 },
{ lng: 7.42347288131708, lat: 43.7359733581544 },
{ lng: 7.42347288131708, lat: 43.735694885254 },
{ lng: 7.42374897003185, lat: 43.735694885254 },
{ lng: 7.42374897003185, lat: 43.7345848083496 },
{ lng: 7.42558193206787, lat: 43.7345848083496 },
{ lng: 7.42708396911621, lat: 43.7345848083496 },
{ lng: 7.42708396911621, lat: 43.7343063354492 },
{ lng: 7.4273619651795,  lat: 43.7343063354492 },
{ lng: 7.4273619651795,  lat: 43.7340278625488 },
{ lng: 7.42763996124268, lat: 43.7340278625488 },
{ lng: 7.42763996124268, lat: 43.7334709167481 },
{ lng: 7.4279150962829,  lat: 43.7334709167481 },
{ lng: 7.4279150962829,  lat: 43.7329177856445 },
{ lng: 7.42819309234625, lat: 43.7329177856445 },
{ lng: 7.42819309234625, lat: 43.7326393127441 },
{ lng: 7.42847204208368, lat: 43.7326393127441 },
{ lng: 7.42847204208368, lat: 43.7312507629396 },
{ lng: 7.42763996124268, lat: 43.7312507629396 },
{ lng: 7.42763996124268, lat: 43.7304153442384 },
{ lng: 7.42652702331543, lat: 43.7304153442384 },
{ lng: 7.42652702331543, lat: 43.7301406860352 },
{ lng: 7.42624902725225, lat: 43.7301406860352 },
{ lng: 7.42624902725225, lat: 43.7298622131348 },
{ lng: 7.42569589614868, lat: 43.7298622131348 },
{ lng: 7.42569589614868, lat: 43.7295837402344 },
{ lng: 7.4251389503479,  lat: 43.7295837402344 },
{ lng: 7.4251389503479,  lat: 43.729305267334 },
{ lng: 7.42458295822144, lat: 43.729305267334 },
{ lng: 7.42458295822144, lat: 43.7290267944337 },
{ lng: 7.42430496215832, lat: 43.7290267944337 },
{ lng: 7.42430496215832, lat: 43.7287483215333 },
{ lng: 7.42402696609497, lat: 43.7287483215333 },
{ lng: 7.42402696609497, lat: 43.7284736633301 },
{ lng: 7.42430496215832, lat: 43.7284736633301 },
{ lng: 7.42430496215832, lat: 43.7279167175293 },
{ lng: 7.42458295822144, lat: 43.7279167175293 },
{ lng: 7.42458295822144, lat: 43.7276382446289 },
{ lng: 7.42430496215832, lat: 43.7276382446289 },
{ lng: 7.42430496215832, lat: 43.7273597717286 },
{ lng: 7.42374897003185, lat: 43.7273597717286 },
{ lng: 7.42374897003185, lat: 43.7270851135255 },
{ lng: 7.4226388931275,  lat: 43.7270851135255 },
{ lng: 7.4226388931275,  lat: 43.7268066406249 },
{ lng: 7.42208290100103, lat: 43.7268066406249 },
{ lng: 7.42208290100103, lat: 43.7265281677246 },
{ lng: 7.42180490493786, lat: 43.7265281677246 },
{ lng: 7.42180490493786, lat: 43.7262496948242 },
{ lng: 7.42152690887451, lat: 43.7262496948242 },
{ lng: 7.42152690887451, lat: 43.7259712219238 },
{ lng: 7.42124891281139, lat: 43.7259712219238 },
{ lng: 7.42124891281139, lat: 43.7254180908204 },
{ lng: 7.42097282409668, lat: 43.7254180908204 },
{ lng: 7.42097282409668, lat: 43.72513961792 },
{ lng: 7.42041683197016, lat: 43.72513961792 },
{ lng: 7.42041683197016, lat: 43.7248611450196 },
{ lng: 7.42013883590704, lat: 43.7248611450196 },
{ lng: 7.42013883590704, lat: 43.7245826721193 },
{ lng: 7.41986083984369, lat: 43.7245826721193 },
{ lng: 7.41986083984369, lat: 43.7243041992189 },
{ lng: 7.41958284378057, lat: 43.7243041992189 },
{ lng: 7.41958284378057, lat: 43.7240295410157 },
{ lng: 7.41902685165411, lat: 43.7240295410157 },
{ lng: 7.41902685165411, lat: 43.7237510681153 },
{ lng: 7.41874885559093, lat: 43.7237510681153 },
{ lng: 7.41874885559093, lat: 43.7234725952149 },
{ lng: 7.41847276687622, lat: 43.7234725952149 },
{ lng: 7.41847276687622, lat: 43.7231941223145 },
{ lng: 7.41819477081305, lat: 43.7231941223145 },
{ lng: 7.41819477081305, lat: 43.7229156494141 },
{ lng: 7.41791677474976, lat: 43.7229156494141 },
{ lng: 7.41791677474976, lat: 43.7226371765137 },
{ lng: 7.41763877868658, lat: 43.7226371765137 },
{ lng: 7.41763877868658, lat: 43.7229156494141 },
{ lng: 7.41486120224005, lat: 43.7229156494141 },
{ lng: 7.41486120224005, lat: 43.7237510681153 },
{ lng: 7.4145817756654,  lat: 43.7237510681153 },
{ lng: 7.4145817756654,  lat: 43.7240295410157 },
{ lng: 7.41430711746216, lat: 43.7240295410157 },
{ lng: 7.41430711746216, lat: 43.7243041992189 },
{ lng: 7.41365289688116, lat: 43.7243041992189 },
{ lng: 7.41562128067011, lat: 43.7257347106935 },
{ lng: 7.40952730178844, lat: 43.729866027832 },
{ lng: 7.4128274917602,  lat: 43.7317237854004 },
{ lng: 7.41338348388666, lat: 43.734588623047 },
{ lng: 7.44013786315924, lat: 43.7495117187499 },
{ lng: 7.44013786315924, lat: 43.7493057250978 },
{ lng: 7.43975496292114,  lat: 43.7493057250978 },
{ lng: 7.44001054763794, lat: 43.7494430541993 },
{ lng: 7.44013786315924, lat: 43.7495117187499 }
];

var MonacoPolygon = new google.maps.Polygon({
    paths: MonacoDelimiters,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
});

MonacoPolygon.setMap(map);
}

function button4()
{
  var mapDiv1 = document.getElementById('map');
  var myLatlng = new google.maps.LatLng(52.408054, -1.510556);
  var myLatlng1 = new google.maps.LatLng(52.427926, -0.332688);
  var myLatlng2 = new google.maps.LatLng(52.420854, -2.688350);
  var myLatlng3 = new google.maps.LatLng(53.126677, -1.514723);
  var myLatlng4 = new google.maps.LatLng(51.690120, -1.458585);
  var myLatlng5 = new google.maps.LatLng(52.240479, -0.902656);
  var myLatlng6 = new google.maps.LatLng(52.192001, -2.220000);
  var myLatlng7 = new google.maps.LatLng(52.633331, -1.133333);
  var options = {
      center: myLatlng,
      zoom: 7
  };
  
map = new google.maps.Map(mapDiv1, options);

var marker = new google.maps.Marker(
        {
            position: myLatlng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            
        });
        
var marker1 = new google.maps.Marker(
        {
            position: myLatlng1,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            
        });
        
var marker2 = new google.maps.Marker(
        {
            position: myLatlng2,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            
        });
        
var marker3 = new google.maps.Marker(
        {
            position: myLatlng3,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
     
var marker4 = new google.maps.Marker(
        {
            position: myLatlng4,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        
var marker5 = new google.maps.Marker(
        {
            position: myLatlng5,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });
        
var marker6 = new google.maps.Marker(
        {
            position: myLatlng6,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });
        
var marker7 = new google.maps.Marker(
        {
            position: myLatlng7,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
        });
        
const circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "0x220000FF",
      fillOpacity: 0.35,
      map,
      center: map.getCenter(),
      radius: 80000
    });

var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> Coventry is a city situated in the West Midlands, which is in the central part of Britain, the UK. The city is situated in a close proximity to the cities of Warwick, Birmingham, and Leicester, so it is possible to say that it is a part of a large urban area in the central part of the British Islands. It is a beautiful old settlement which formed near a large cathedral built in the 14th century. Coventry is known as a large center of culture and education, with 3 universities located there: the University of Warwick, Coventry University, and Arden University. The city is a great destination for those who enjoy exploring the local architecture and lifestyle. There are many places to visit and things to do in Coventy like joining some local musical festivals, watching a play in one of the theaters, or taking some time to play tennis or cricket, etc. </div>' } );
google.maps.event.addListener(marker, 'click', function(){InfoWindow.open(map,marker);});

var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> marker 1 </div>' } );
google.maps.event.addListener(marker5, 'click', function(){InfoWindow.open(map,marker5);});

var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> marker 2 </div>' } );
google.maps.event.addListener(marker6, 'click', function(){InfoWindow.open(map,marker6);});

var InfoWindow = new google.maps.InfoWindow(
        {content: '<div class="info"> marker 3 </div>' } );
google.maps.event.addListener(marker7, 'click', function(){InfoWindow.open(map,marker7);});

}

function button5()
{
    
    var mapDiv = document.getElementById('map');
    var center = new google.maps.LatLng(43.733334, 7.416667);
    var options = {
      center: center,
      zoom: 13
  };
  
  map = new google.maps.Map(mapDiv, options);
   
      var MonacoDelimiters = [
{ lng: 7.41338348388666, lat: 43.734588623047 },
{ lng: 7.43630027771002, lat: 43.750888824463 },
{ lng: 7.43923950195318, lat: 43.7490272521972 },
{ lng: 7.43958282470709, lat: 43.7492141723633 },
{ lng: 7.43958187103277, lat: 43.7481956481934 },
{ lng: 7.43985986709589, lat: 43.7481956481934 },
{ lng: 7.43985986709589, lat: 43.747917175293 },
{ lng: 7.43958187103277, lat: 43.747917175293 },
{ lng: 7.43958187103277, lat: 43.7459716796876 },
{ lng: 7.43763780593878, lat: 43.7459716796876 },
{ lng: 7.43763780593878, lat: 43.7462501525879 },
{ lng: 7.43625020980835, lat: 43.7462501525879 },
{ lng: 7.43625020980835, lat: 43.7459716796876 },
{ lng: 7.43569421768188, lat: 43.7459716796876 },
{ lng: 7.43569421768188, lat: 43.7462501525879 },
{ lng: 7.43541622161871, lat: 43.7462501525879 },
{ lng: 7.43541622161871, lat: 43.7459716796876 },
{ lng: 7.43513822555542, lat: 43.7459716796876 },
{ lng: 7.43513822555542, lat: 43.7456932067872 },
{ lng: 7.43486213684088, lat: 43.7456932067872 },
{ lng: 7.43486213684088, lat: 43.745418548584 },
{ lng: 7.43430614471436, lat: 43.745418548584 },
{ lng: 7.43430614471436, lat: 43.7451400756836 },
{ lng: 7.43402814865124, lat: 43.7451400756836 },
{ lng: 7.43402814865124, lat: 43.7445831298828 },
{ lng: 7.43347215652477, lat: 43.7445831298828 },
{ lng: 7.43347215652477, lat: 43.7443046569824 },
{ lng: 7.43319416046143, lat: 43.7443046569824 },
{ lng: 7.43319416046143, lat: 43.743751525879 },
{ lng: 7.43291616439831, lat: 43.743751525879 },
{ lng: 7.43291616439831, lat: 43.7431945800782 },
{ lng: 7.43264007568354, lat: 43.7431945800782 },
{ lng: 7.43263816833496, lat: 43.7429161071778 },
{ lng: 7.43208408355707, lat: 43.7429161071778 },
{ lng: 7.43208408355707, lat: 43.7423629760743 },
{ lng: 7.43152809143078, lat: 43.7423629760743 },
{ lng: 7.43152809143078, lat: 43.7418060302735 },
{ lng: 7.43125009536749, lat: 43.7418060302735 },
{ lng: 7.43125009536749, lat: 43.7415275573731 },
{ lng: 7.43097209930431, lat: 43.7415275573731 },
{ lng: 7.43097209930431, lat: 43.7412490844728 },
{ lng: 7.43125009536749, lat: 43.7412490844728 },
{ lng: 7.43125009536749, lat: 43.7409706115724 },
{ lng: 7.43097209930431, lat: 43.7409706115724 },
{ lng: 7.43097209930431, lat: 43.7406959533691 },
{ lng: 7.43069410324097, lat: 43.7406959533691 },
{ lng: 7.43069410324097, lat: 43.7390289306641 },
{ lng: 7.43041610717785, lat: 43.7390289306641 },
{ lng: 7.43041610717785, lat: 43.7379150390625 },
{ lng: 7.43014001846313, lat: 43.7379150390625 },
{ lng: 7.43014001846313, lat: 43.7376403808595 },
{ lng: 7.42902803421015, lat: 43.7376403808595 },
{ lng: 7.42902803421015, lat: 43.7373619079591 },
{ lng: 7.4279150962829,  lat: 43.7373619079591 },
{ lng: 7.4279150962829,  lat: 43.7370834350587 },
{ lng: 7.42763996124268, lat: 43.7370834350587 },
{ lng: 7.42763996124268, lat: 43.7365264892579 },
{ lng: 7.4273619651795,  lat: 43.7365264892579 },
{ lng: 7.4273619651795,  lat: 43.7362518310547 },
{ lng: 7.42676019668579, lat: 43.7362518310547 },
{ lng: 7.42374897003185, lat: 43.7362518310547 },
{ lng: 7.42374897003185, lat: 43.7359733581544 },
{ lng: 7.42347288131708, lat: 43.7359733581544 },
{ lng: 7.42347288131708, lat: 43.735694885254 },
{ lng: 7.42374897003185, lat: 43.735694885254 },
{ lng: 7.42374897003185, lat: 43.7345848083496 },
{ lng: 7.42558193206787, lat: 43.7345848083496 },
{ lng: 7.42708396911621, lat: 43.7345848083496 },
{ lng: 7.42708396911621, lat: 43.7343063354492 },
{ lng: 7.4273619651795,  lat: 43.7343063354492 },
{ lng: 7.4273619651795,  lat: 43.7340278625488 },
{ lng: 7.42763996124268, lat: 43.7340278625488 },
{ lng: 7.42763996124268, lat: 43.7334709167481 },
{ lng: 7.4279150962829,  lat: 43.7334709167481 },
{ lng: 7.4279150962829,  lat: 43.7329177856445 },
{ lng: 7.42819309234625, lat: 43.7329177856445 },
{ lng: 7.42819309234625, lat: 43.7326393127441 },
{ lng: 7.42847204208368, lat: 43.7326393127441 },
{ lng: 7.42847204208368, lat: 43.7312507629396 },
{ lng: 7.42763996124268, lat: 43.7312507629396 },
{ lng: 7.42763996124268, lat: 43.7304153442384 },
{ lng: 7.42652702331543, lat: 43.7304153442384 },
{ lng: 7.42652702331543, lat: 43.7301406860352 },
{ lng: 7.42624902725225, lat: 43.7301406860352 },
{ lng: 7.42624902725225, lat: 43.7298622131348 },
{ lng: 7.42569589614868, lat: 43.7298622131348 },
{ lng: 7.42569589614868, lat: 43.7295837402344 },
{ lng: 7.4251389503479,  lat: 43.7295837402344 },
{ lng: 7.4251389503479,  lat: 43.729305267334 },
{ lng: 7.42458295822144, lat: 43.729305267334 },
{ lng: 7.42458295822144, lat: 43.7290267944337 },
{ lng: 7.42430496215832, lat: 43.7290267944337 },
{ lng: 7.42430496215832, lat: 43.7287483215333 },
{ lng: 7.42402696609497, lat: 43.7287483215333 },
{ lng: 7.42402696609497, lat: 43.7284736633301 },
{ lng: 7.42430496215832, lat: 43.7284736633301 },
{ lng: 7.42430496215832, lat: 43.7279167175293 },
{ lng: 7.42458295822144, lat: 43.7279167175293 },
{ lng: 7.42458295822144, lat: 43.7276382446289 },
{ lng: 7.42430496215832, lat: 43.7276382446289 },
{ lng: 7.42430496215832, lat: 43.7273597717286 },
{ lng: 7.42374897003185, lat: 43.7273597717286 },
{ lng: 7.42374897003185, lat: 43.7270851135255 },
{ lng: 7.4226388931275,  lat: 43.7270851135255 },
{ lng: 7.4226388931275,  lat: 43.7268066406249 },
{ lng: 7.42208290100103, lat: 43.7268066406249 },
{ lng: 7.42208290100103, lat: 43.7265281677246 },
{ lng: 7.42180490493786, lat: 43.7265281677246 },
{ lng: 7.42180490493786, lat: 43.7262496948242 },
{ lng: 7.42152690887451, lat: 43.7262496948242 },
{ lng: 7.42152690887451, lat: 43.7259712219238 },
{ lng: 7.42124891281139, lat: 43.7259712219238 },
{ lng: 7.42124891281139, lat: 43.7254180908204 },
{ lng: 7.42097282409668, lat: 43.7254180908204 },
{ lng: 7.42097282409668, lat: 43.72513961792 },
{ lng: 7.42041683197016, lat: 43.72513961792 },
{ lng: 7.42041683197016, lat: 43.7248611450196 },
{ lng: 7.42013883590704, lat: 43.7248611450196 },
{ lng: 7.42013883590704, lat: 43.7245826721193 },
{ lng: 7.41986083984369, lat: 43.7245826721193 },
{ lng: 7.41986083984369, lat: 43.7243041992189 },
{ lng: 7.41958284378057, lat: 43.7243041992189 },
{ lng: 7.41958284378057, lat: 43.7240295410157 },
{ lng: 7.41902685165411, lat: 43.7240295410157 },
{ lng: 7.41902685165411, lat: 43.7237510681153 },
{ lng: 7.41874885559093, lat: 43.7237510681153 },
{ lng: 7.41874885559093, lat: 43.7234725952149 },
{ lng: 7.41847276687622, lat: 43.7234725952149 },
{ lng: 7.41847276687622, lat: 43.7231941223145 },
{ lng: 7.41819477081305, lat: 43.7231941223145 },
{ lng: 7.41819477081305, lat: 43.7229156494141 },
{ lng: 7.41791677474976, lat: 43.7229156494141 },
{ lng: 7.41791677474976, lat: 43.7226371765137 },
{ lng: 7.41763877868658, lat: 43.7226371765137 },
{ lng: 7.41763877868658, lat: 43.7229156494141 },
{ lng: 7.41486120224005, lat: 43.7229156494141 },
{ lng: 7.41486120224005, lat: 43.7237510681153 },
{ lng: 7.4145817756654,  lat: 43.7237510681153 },
{ lng: 7.4145817756654,  lat: 43.7240295410157 },
{ lng: 7.41430711746216, lat: 43.7240295410157 },
{ lng: 7.41430711746216, lat: 43.7243041992189 },
{ lng: 7.41365289688116, lat: 43.7243041992189 },
{ lng: 7.41562128067011, lat: 43.7257347106935 },
{ lng: 7.40952730178844, lat: 43.729866027832 },
{ lng: 7.4128274917602,  lat: 43.7317237854004 },
{ lng: 7.41338348388666, lat: 43.734588623047 },
{ lng: 7.44013786315924, lat: 43.7495117187499 },
{ lng: 7.44013786315924, lat: 43.7493057250978 },
{ lng: 7.43975496292114,  lat: 43.7493057250978 },
{ lng: 7.44001054763794, lat: 43.7494430541993 },
{ lng: 7.44013786315924, lat: 43.7495117187499 }
];

var MonacoPolygon = new google.maps.Polygon({
    paths: MonacoDelimiters,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
});

MonacoPolygon.setMap(map);


google.maps.event.addListener(MonacoPolygon,"mouseover",function(){
 this.setOptions({fillColor: "#00FF00"});
}); 

google.maps.event.addListener(MonacoPolygon,"mouseout",function(){
 this.setOptions({fillColor: "#FF0000"});
});
}
google.maps.event.addDomListener(window, 'load', initialize);
