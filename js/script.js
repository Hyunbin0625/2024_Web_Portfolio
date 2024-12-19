$(function () {
    let currentIndex = 0; // 현재 슬라이드 인덱스
    const slideWidth = 60; // 슬라이드 너비 (% 단위)

    // 복제 없이 무한 반복 효과를 위해 슬라이드를 재배치하는 함수
    function moveSlide() {
        currentIndex++;

        $(".sliderwrap").animate({ marginLeft: -currentIndex * slideWidth + "%" }, 600, function () {
            // 마지막 슬라이드에서 첫 번째 슬라이드를 뒤로 이동
            if (currentIndex === $(".slider").length - 1) {
                $(".sliderwrap").append($(".slider").first()); // 첫 번째 슬라이드를 마지막에 추가
                $(".sliderwrap").css("marginLeft", -(--currentIndex) * slideWidth + "%"); // 위치 조정
            }
        });
    }

    // 3초마다 슬라이드 이동
    setInterval(moveSlide, 3000);
});

// 햄버거메뉴 토글만들기 스크립트
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show'); /* 메뉴 표시 토글 */
        menuToggle.classList.toggle('show'); /* 햄버거 아이콘 토글 */
    });
});

// 자동 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const slideCount = images.length; // 복제된 이미지 포함
    let index = 1; // 시작 인덱스 (실제 첫 번째 슬라이드)
    const slideWidth = 50 + 6.5; // 슬라이드 너비 + 여백 (50% + 6.5px)

    // 무한 슬라이드를 위한 함수
    function moveToNextSlide() {
        index++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * slideWidth}%)`;
    
        // 마지막 슬라이드 처리 (복제된 첫 번째 슬라이드로 이동)
        if (index === slideCount - 1) {
            setTimeout(() => {
                slides.style.transition = "none";
                index = 1; // 첫 번째 슬라이드로 돌아감
                slides.style.transform = `translateX(-${index * slideWidth}%)`;
            }, 500);
        }
    }

    function moveToPrevSlide() {
        index--;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * slideWidth}%)`;
    
        // 첫 번째 슬라이드 처리 (복제된 마지막 슬라이드로 이동)
        if (index === 0) {
            setTimeout(() => {
                slides.style.transition = "none";
                index = slideCount - 2;
                slides.style.transform = `translateX(-${index * slideWidth}%)`;
            }, 500);
        }
    }

    // 자동 슬라이드
    setInterval(moveToNextSlide, 3000);
});