function showSection(sectionId) {
    // Ẩn tất cả các phần
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    // Hiển thị phần được chọn
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}