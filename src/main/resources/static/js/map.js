//지도 객체 설정
var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),  // 중앙에 위치할 좌표
    zoom: 8                                                 // 초기 줌상태
};
var map = new naver.maps.Map('map-container', mapOptions);
var markerList = [];        // 클릭 마커 배열저장
var centerMarker = [];      // 센터 마커 저장
var menuLayer = $('<div style="position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;"></div>');
var humanNumber;

map.getPanes().floatPane.appendChild(menuLayer[0]);

//클릭 이벤트
naver.maps.Event.addListener(map, 'click', function(e) {
    //센터 마커 초기화
    if(centerMarker.length !== 0) {
        centerMarker[0].setMap(null)
        centerMarker.length = 0;
    }
    console.log(e.coord)
    //클릭한 곳 마커 생성
    var marker = new naver.maps.Marker({
        position: e.coord,
        map: map
    });
    let coordHtml =
        'Coord: '+ '(위/경도 좌표)' + e.coord.toString() + '<br />'

    //클릭 마커 초기화
    if(markerList.length >= 2) {
        for(var i = 0; i < markerList.length; i++) {
            markerList[i].setMap(null)
        }
        markerList.length = 0;
    }
    markerList.push(marker);

    menuLayer.show().css({
        left: e.offset.x,
        top: e.offset.y
    }).html(coordHtml);

    // 기능 분리 필요
    if(markerList.length == 2) {
        let x1 = markerList[0].position._lng // x
        let x2 = markerList[1].position._lng // x
        let y1 = markerList[0].position._lat // y
        let y2 = markerList[1].position._lat // y
        let dis_value = distance(x1,x2,y1,y2) * 100;       //두점사이의 거리 km 단위
        let center_point_x = ((x1 + x2) / 2)
        let center_point_y = ((y1 + y2) / 2)
        document.getElementById('info-content').innerHTML = '두점 사이의 거리 ' + dis_value.toFixed(1) + 'Km' + '<br>'
                                                                    + '두점 사이의 센터 좌표'
                                                                    + '<br>lng : ' + center_point_x
                                                                    + '<br>lat : ' +  center_point_y;
        document.getElementById('info-container').classList.add('active');
        let center_coord = {'y': center_point_y, '_lat': center_point_y, 'x': center_point_x, '_lng': center_point_x}
        let center_marker = new naver.maps.Marker({
            position: center_coord,
            map: map
        });
        console.log(center_coord);
        centerMarker.push(center_marker);
    }


});

//esc 입력시 클릭 마커 삭제
naver.maps.Event.addListener(map, 'keydown', function(e) {
    var keyboardEvent = e.keyboardEvent,
        keyCode = keyboardEvent.keyCode || keyboardEvent.which;

    var ESC = 27;

    if (keyCode === ESC) {
        keyboardEvent.preventDefault();

        for (var i=0, ii=markerList.length; i<ii; i++) {
            markerList[i].setMap(null);
        }

        markerList = [];

        menuLayer.hide();
    }
});

naver.maps.Event.addListener(map, 'mousedown', function(e) {
    menuLayer.hide();
});

naver.maps.Event.addListener(map, 'rightclick', function(e) {
    let coordHtml =
        'Coord: '+ '(우 클릭 지점 위/경도 좌표)' + e.coord.toString() + '<br />' +
        'Point: ' + e.point + '<br />' +
        'Offset: ' + e.offset;

    menuLayer.show().css({
        left: e.offset.x,
        top: e.offset.y
    }).html(coordHtml);

    console.log('Coord: ' + e.coord.toString());
});


//상세정보창 표출
function searchLocation() {
    var searchInput1 = document.getElementById('search-input1').value;
    var searchInput2 = document.getElementById('search-input2').value;

    // 임시로 alert로 정보를 보여주는 예시 코드
    document.getElementById('info-content').innerHTML = '검색어 1: ' + searchInput1 + '<br>검색어 2: ' + searchInput2;
    document.getElementById('info-container').classList.add('active');
}

//거리 계산 함수
function distance(x1, x2, y1, y2) {
    let disvalue = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
    return disvalue;
}
//TO DO
//센터 좌표 반경 1~3km 이내 설정

