const headerHTML = `
    <header id="mainHeader">
        <div class="logo">
            <a href="https://tuhaqiefus.github.io/.github.xhx.io/">
                <img src="assets/images/LOGO.png" alt="鑫华夏 xinova">
            </a>
        </div>
        <nav>
            <a href="#" class="nav-item" data-page="about-us">
                公司介绍
                <div class="dropdown-container">
                    <div class="dropdown-content">
                        <button class="dropdown-btn" data-subpage="about-us-main" onclick="window.location.href='html11.html';">
                            <span class="btn-text">公司简介</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn3.jpg')" data-subpage="business-partners" onclick="window.location.href='html13.html'">
                            <span class="btn-text">合作伙伴</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn4.jpg')" data-subpage="dynamism" onclick="window.location.href='html14.html';">
                            <span class="btn-text">企业文化</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn5.jpg')" data-subpage="organization-chart" onclick="window.location.href='html15.html';">
                            <span class="btn-text">组织架构</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn2.jpg')" data-subpage="expansion" onclick="window.location.href='html16.html';">
                            <span class="btn-text">资质荣誉</span>
                        </button>
                        <button class="dropdown-btn">
                            <span class="btn-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </button>
                        <button class="dropdown-btn">
                            <span class="btn-text">关联公司:</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn8.jpg')" onclick="window.location.href='http://www.juya-tech.com';">
                            <span class="btn-text"> </span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn7.jpg')" onclick="window.location.href='https://semi.xhxcg.com';">
                            <span class="btn-text"> </span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/about-btn6.jpg')" onclick="window.location.href='http://www.ky-century.com/';">
                            <span class="btn-text"> </span>
                        </button>
                    </div>
                </div>
            </a>

            <a class="nav-item" data-page="ir"> 工程业绩
                <div class="dropdown-container">
                    <div class="dropdown-content">
                        <button class="dropdown-btn" style="background-image: url('assets/images/ir-btn1.jpg')" data-subpage="Gas Scrubber" onclick="window.location.href='html2to2.html';">
                               <span class="btn-text">微电子</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/ir-btn2.jpg')" data-subpage="shareholder" onclick="window.location.href='html2to3.html';">
                            <span class="btn-text">光电产业</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/ir-btn3.jpg')" data-subpage="investor" onclick="window.location.href='html2to4.html';">
                            <span class="btn-text">石油化工</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/ir-btn4.jpg')" data-subpage="investor" onclick="window.location.href='html31.html#category5'">
                            <span class="btn-text">洁净系统</span>
                        </button>
                    </div>
                </div>
            </a>

            <a href="#" class="nav-item" data-page="esg">
                E · S · G
                <div class="dropdown-container">
                    <div class="dropdown-content">
                        <button class="dropdown-btn" style="background-image: url('assets/images/esg-btn1.jpg')" data-subpage="Environmental Policy;ISO14001:环境管理体系" onclick="window.location.href='html41.html';">
                            <span class="btn-text">环境保护<span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/esg-btn2.jpg')" data-subpage="Social Responsibility(cross-cultural management)" onclick="window.location.href='html42.html';">
                            <span class="btn-text">社会政策<span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/esg-btn3.jpg')" data-subpage="Governance;资质、荣誉、IR(Financial\\Shareholder\\Investor)、ISO9001、" onclick="window.location.href='html43.html';">
                            <span class="btn-text">内部治理</span>
                        </button>
                    </div>
                </div>
            </a>

            <a href="#" class="nav-item" data-page="careers">
                人力资源
                <div class="dropdown-container">
                    <div class="dropdown-content">
                        <button class="dropdown-btn" style="background-image: url('assets/images/career-btn1.jpg')" data-subpage="job-vacancies" onclick="window.location.href='html51.html';">
                            <span class="btn-text">职位空缺</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/career-btn2.png')" data-subpage="employee-development" onclick="window.location.href='html52.html';">
                            <span class="btn-text">员工天地</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/career-btn2.png')" data-subpage="employee-development" onclick="window.location.href='html53.html';">
                            <span class="btn-text">新闻动态</span>
                        </button>
                        <button class="dropdown-btn">
                            <span class="btn-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </button>
                    </div>
                </div>
            </a>
            <a href="#" class="nav-item" data-page="language">
                语言
                <div class="dropdown-container">
                    <div class="dropdown-content">
                        <button class="dropdown-btn" style="background-image: url('assets/images/lang-cn.jpg')" data-subpage="chinese" onclick="window.location.href='../index.html';">
                            <span class="btn-text"> </span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/lang-en.jpg')" data-subpage="english" onclick="window.location.href='../en/index.html';">
                            <span class="btn-text"> </span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/lang-kr.jpg')" data-subpage="korean" onclick="window.location.href='../kr/index.html';">
                            <span class="btn-text"> </span>
                        </button>
                    </div>
                </div>
            </a>
        </nav>
    </header>
`;
const footerHTML = `
    <footer id="mainFooter">
        <p>公司地址：上海市松江区华加路99号联东U谷30幢 邮编：201600</p>
        <p>电话：86-21-6767-0912 ；86-29-8787-6559</p>
        <p>电子邮件：sales@xhxcg.com</p>
        <p>Copyright &copy; XINOVA. All rights reserved.</p>
    </footer>
`;
document.addEventListener('DOMContentLoaded', function() {

    const headerPlaceholder = document.getElementById('headerPlaceholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        console.error('Header placeholder #headerPlaceholder not found.');
    }

    const footerPlaceholder = document.getElementById('footerPlaceholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        console.error('Footer placeholder #footerPlaceholder not found.');
    }

    const mainHeader = document.getElementById('mainHeader');
    const navItems = document.querySelectorAll('.nav-item');
    const dropdownContainers = document.querySelectorAll('.dropdown-container');

    let headerHideTimeout;
    let currentActiveDropdown = null;
    let dropdownShowTime = 0;
    const minDisplayDuration = 500;

    function showDropdown(dropdownElement) {
        if (!mainHeader) {
            console.warn('mainHeader not found, cannot show dropdown.');
            return;
        }
        if (currentActiveDropdown && currentActiveDropdown !== dropdownElement) {
            currentActiveDropdown.style.opacity = '0';
            currentActiveDropdown.style.visibility = 'hidden';
            currentActiveDropdown.style.display = 'none';
        }

        const headerHeight = mainHeader.offsetHeight;
        dropdownElement.style.top = `${headerHeight}px`;

        dropdownElement.style.display = 'block';
        setTimeout(() => {
            dropdownElement.style.opacity = '1';
            dropdownElement.style.visibility = 'visible';
        }, 10);
        currentActiveDropdown = dropdownElement;
        dropdownShowTime = Date.now();
    }

    function hideAllDropdowns() {
        if (!mainHeader) return;

        if (!isMouseOverHeaderAndDropdowns()) {
            mainHeader.classList.remove('nav-active');
        }

        if (currentActiveDropdown) {
            const timeSinceShow = Date.now() - dropdownShowTime;
            const remainingTime = minDisplayDuration - timeSinceShow;

            if (remainingTime > 0) {
                clearTimeout(headerHideTimeout);
                headerHideTimeout = setTimeout(() => {
                    if (!isMouseOverHeaderAndDropdowns()) {
                        hideAllDropdownsInternal();
                    }
                }, remainingTime);
            } else {
                hideAllDropdownsInternal();
            }
        }
    }

    function hideAllDropdownsInternal() {
        if (currentActiveDropdown) {
            currentActiveDropdown.style.opacity = '0';
            currentActiveDropdown.style.visibility = 'hidden';
            setTimeout(() => {
                if (currentActiveDropdown) {
                    currentActiveDropdown.style.display = 'none';
                    currentActiveDropdown = null;
                }
            }, 300);
        }
    }

    function isMouseOverHeaderAndDropdowns() {
        if (!mainHeader) return false;

        if (mainHeader.matches(':hover')) {
            return true;
        }
        for (let i = 0; i < dropdownContainers.length; i++) {
            const d = dropdownContainers[i];
            if (d.matches(':hover') && d.style.display === 'block' && d.style.opacity === '1') {
                return true;
            }
        }
        return false;
    }

    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-container');

        item.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
            if (mainHeader) {
                mainHeader.classList.add('nav-active');
            }
            if (dropdown) {
                showDropdown(dropdown);
            } else {
                hideAllDropdownsInternal();
            }
        });

        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768 && e.currentTarget.getAttribute('href') === '#') {
                e.preventDefault();
            }

            if (window.innerWidth <= 768) {
                const targetDropdown = this.querySelector('.dropdown-container');

                navItems.forEach(navItem => {
                    if (navItem !== this && navItem.classList.contains('active')) {
                        navItem.classList.remove('active');
                    }
                });

                if (targetDropdown) {
                    this.classList.toggle('active');
                    if (this.classList.contains('active')) {
                        if (mainHeader) {
                            mainHeader.classList.add('nav-active');
                        }
                    } else {
                        setTimeout(() => {
                            if (!document.querySelector('.nav-item.active') && mainHeader) {
                                mainHeader.classList.remove('nav-active');
                            }
                        }, 300);
                    }
                }
            }
        });
    });

    if (mainHeader) {
        mainHeader.addEventListener('mouseleave', function() {
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns()) {
                    hideAllDropdowns();
                }
            }, 100);
        });

        mainHeader.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
            mainHeader.classList.add('nav-active');
        });
    }

    dropdownContainers.forEach(dropdown => {
        dropdown.addEventListener('mouseleave', function() {
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns()) {
                    hideAllDropdowns();
                }
            }, 100);
        });
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
        });
    });

    const adjustContentMargin = () => {
        const mainHeader = document.getElementById('mainHeader');
        const contentWrapper = document.querySelector('.content-wrapper');
        if (mainHeader && contentWrapper) {
            const headerHeight = mainHeader.offsetHeight;
            contentWrapper.style.marginTop = `${headerHeight + 20}px`;
        } else if (contentWrapper) {
            contentWrapper.style.marginTop = '90px';
        }
    };
    
    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);
});