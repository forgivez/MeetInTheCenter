//지도 객체 설정
var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),  // 중앙에 위치할 좌표
    zoom: 8                                                 // 초기 줌상태
};
var map = new naver.maps.Map('map-container', mapOptions);

function searchLocation() {
    var searchInput1 = document.getElementById('search-input1').value;
    var searchInput2 = document.getElementById('search-input2').value;

    // 임시로 alert로 정보를 보여주는 예시 코드
    document.getElementById('info-content').innerHTML = '검색어 1: ' + searchInput1 + '<br>검색어 2: ' + searchInput2;
    document.getElementById('info-container').classList.add('active');
}