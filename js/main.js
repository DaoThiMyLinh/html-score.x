document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const headerMenu = document.getElementById('headerMenu');

    if (hamburgerBtn && headerMenu) {
        hamburgerBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            headerMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        document.addEventListener('click', function (e) {
            if (!headerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                headerMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        const dropdownLinks = headerMenu.querySelectorAll('.has-dropdown > .menu-link');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    parent.classList.toggle('open');
                }
            });
        });
        const regularLinks = headerMenu.querySelectorAll('a:not(.has-dropdown > a)');
        regularLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 992) {
                    hamburgerBtn.classList.remove('active');
                    headerMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
        window.addEventListener('resize', function () {
            if (window.innerWidth > 992) {
                hamburgerBtn.classList.remove('active');
                headerMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    const stepItems = document.querySelectorAll('.section-4 .step-item');
    const dashboardLeft = document.querySelector('.section-4 .dashboard-left');
    const dashboardImg = document.querySelector('.section-4 .dashboard-img img');

    const stepData = [
        {
            stepBadge: "BƯỚC 01 / 05",
            title: "Thiết lập cuộc thi",
            desc: "",
            showFeatures: false
        },
        {
            stepBadge: "BƯỚC 02 / 05",
            title: "Quản lý hàng nghìn bài dự<br>thi trên một dashboard",
            desc: "Từ tiếp nhận, kiểm duyệt đến chấm điểm, toàn bộ<br>bài dự thi được quản lý tập trung và minh bạch.",
            showFeatures: true,
            features: [
                {
                    icon: "image/section_4/icon_4a.png",
                    title: "Tự động ghi nhận",
                    desc: "Thu thập bài dự thi ở nhiều dạng: video, hình<br>ảnh, check-in, review."
                },
                {
                    icon: "image/section_4/icon_4b.png",
                    title: "Kiểm duyệt thông minh",
                    desc: "Phát hiện bài sai điều kiện hoặc có dấu hiệu<br>bất thường."
                },
                {
                    icon: "image/section_4/icon_4c.png",
                    title: "Chấm điểm minh bạch",
                    desc: "Điểm và thứ hạng của từng bài được cập nhật<br>theo thời gian thực."
                }
            ]
        },
        {
            stepBadge: "BƯỚC 03 / 05",
            title: "Theo dõi người tham gia",
            desc: "",
            showFeatures: false
        },
        {
            stepBadge: "BƯỚC 04 / 05",
            title: "Bảng xếp hạng thi đua",
            desc: "",
            showFeatures: false
        },
        {
            stepBadge: "BƯỚC 05 / 05",
            title: "Báo cáo",
            desc: "",
            showFeatures: false
        }
    ];

    if (stepItems.length && dashboardLeft) {
        stepItems.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                if (this.classList.contains('active')) return;

                stepItems.forEach(item => item.classList.remove('active'));
                this.classList.add('active');

                const data = stepData[index];
                if (!data) return;

                dashboardLeft.style.opacity = '0';
                dashboardLeft.style.transform = 'translateY(8px)';
                if (dashboardImg) {
                    dashboardImg.style.opacity = '0.7';
                }

                setTimeout(() => {
                    const badge = dashboardLeft.querySelector('.step-badge');
                    const title = dashboardLeft.querySelector('.dashboard-title');
                    const desc = dashboardLeft.querySelector('.dashboard-desc');
                    const featureContainer = dashboardLeft.querySelector('.feature-items');

                    if (badge) badge.textContent = data.stepBadge;
                    if (title) title.innerHTML = data.title;

                    if (data.showFeatures) {
                        if (desc) {
                            desc.style.display = '';
                            desc.innerHTML = data.desc;
                        }
                        if (featureContainer) {
                            featureContainer.style.display = '';
                        }
                    } else {
                        if (desc) {
                            desc.style.display = 'none';
                            desc.innerHTML = '';
                        }
                        if (featureContainer) {
                            featureContainer.style.display = 'none';
                        }
                    }

                    dashboardLeft.style.opacity = '1';
                    dashboardLeft.style.transform = 'translateY(0)';
                    if (dashboardImg) {
                        dashboardImg.style.opacity = '1';
                    }
                }, 180);
            });
        });
    }

    const filterButtons = document.querySelectorAll('.pricing-filters .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const parentGroup = this.parentElement;
            parentGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

