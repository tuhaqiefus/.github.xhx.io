// 页眉 HTML 内容（使用模板字符串，方便多行书写）
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
                            <span class="btn-text">环境保护</span>
                        </button>
                        <button class="dropdown-btn" style="background-image: url('assets/images/esg-btn2.jpg')" data-subpage="Social Responsibility(cross-cultural management)" onclick="window.location.href='html42.html';">
                            <span class="btn-text">社会政策</span>
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

// 页脚 HTML 内容
const footerHTML = `
    <footer id="mainFooter">
        <p>公司地址：上海市松江区华加路99号联东U谷30幢 邮编：201600</p>
        <p>电话：86-021-6767-0912 ；86-029-8787-6559</p>
        <p>电子邮件：sales@xhxsemi.com</p>
        <p>Copyright &copy; XINOVA. All rights reserved.</p>
    </footer>
`;

// DOMContentLoaded 事件确保 HTML 结构加载完成后再执行 JS
document.addEventListener('DOMContentLoaded', function() {
    // 插入页眉
    const headerPlaceholder = document.getElementById('headerPlaceholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        console.error('Header placeholder #headerPlaceholder not found.');
    }

    // 插入页脚
    const footerPlaceholder = document.getElementById('footerPlaceholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        console.error('Footer placeholder #footerPlaceholder not found.');
    }


    // 以下是原先 hf.js 中的所有交互逻辑，现在直接在这里执行，因为 HTML 已经插入
    const mainHeader = document.getElementById('mainHeader'); // 获取主页眉元素
    const navItems = document.querySelectorAll('.nav-item'); // 获取所有导航项元素
    const dropdownContainers = document.querySelectorAll('.dropdown-container'); // 获取所有下拉容器元素

    let headerHideTimeout; // 用于控制页眉隐藏的定时器
    let currentActiveDropdown = null; // 存储当前激活的下拉菜单
    let dropdownShowTime = 0; // 记录下拉菜单显示的时间
    const minDisplayDuration = 500; // 下拉菜单最小显示时长（毫秒）

    // 显示下拉菜单
    function showDropdown(dropdownElement) {
        if (!mainHeader) { // 如果页眉还没加载，就停止执行
            console.warn('mainHeader not found, cannot show dropdown.');
            return;
        }
        // 如果当前有激活的下拉菜单且不是要显示的下拉菜单，则隐藏它
        if (currentActiveDropdown && currentActiveDropdown !== dropdownElement) {
            currentActiveDropdown.style.opacity = '0'; // 设置透明度为0
            currentActiveDropdown.style.visibility = 'hidden'; // 设置为不可见
            currentActiveDropdown.style.display = 'none'; // 隐藏元素
        }

        const headerHeight = mainHeader.offsetHeight; // 获取页眉高度
        dropdownElement.style.top = `${headerHeight}px`; // 根据页眉高度设置下拉菜单的top值

        dropdownElement.style.display = 'block'; // 显示下拉菜单
        setTimeout(() => {
            dropdownElement.style.opacity = '1'; // 逐渐显示下拉菜单（透明度变为1）
            dropdownElement.style.visibility = 'visible'; // 设置为可见
        }, 10); // 短暂延迟，确保display:block先生效，以便过渡效果可见
        currentActiveDropdown = dropdownElement; // 更新当前激活的下拉菜单
        dropdownShowTime = Date.now(); // 记录当前时间
    }

    // 隐藏所有下拉菜单（带有最小显示时长判断）
    function hideAllDropdowns() {
        if (!mainHeader) return; // 如果页眉还没加载，就停止执行

        // 如果鼠标不在页眉和任何下拉菜单上，则移除页眉的nav-active类
        if (!isMouseOverHeaderAndDropdowns()) {
            mainHeader.classList.remove('nav-active');
        }

        if (currentActiveDropdown) {
            const timeSinceShow = Date.now() - dropdownShowTime; // 计算下拉菜单显示了多长时间
            const remainingTime = minDisplayDuration - timeSinceShow; // 计算还需要显示多长时间

            if (remainingTime > 0) {
                clearTimeout(headerHideTimeout); // 清除现有定时器
                // 如果未达到最小显示时长，则延迟隐藏
                headerHideTimeout = setTimeout(() => {
                    if (!isMouseOverHeaderAndDropdowns()) {
                        hideAllDropdownsInternal(); // 真正执行隐藏操作
                    }
                }, remainingTime);
            } else {
                hideAllDropdownsInternal(); // 直接隐藏
            }
        }
    }

    // 内部函数，实际执行隐藏所有下拉菜单的操作
    function hideAllDropdownsInternal() {
        if (currentActiveDropdown) {
            currentActiveDropdown.style.opacity = '0'; // 设置透明度为0
            currentActiveDropdown.style.visibility = 'hidden'; // 设置为不可见
            // 延迟隐藏display，以便过渡效果完成
            setTimeout(() => {
                if (currentActiveDropdown) { // 再次检查，以防在延迟期间有新的下拉菜单被激活
                    currentActiveDropdown.style.display = 'none'; // 隐藏元素
                    currentActiveDropdown = null; // 清除当前激活的下拉菜单
                }
            }, 300); // 与CSS过渡时间保持一致
        }
    }

    // 判断鼠标是否在页眉或任何激活的下拉菜单上
    function isMouseOverHeaderAndDropdowns() {
        if (!mainHeader) return false; // 如果页眉还没加载，就返回 false

        if (mainHeader.matches(':hover')) { // 如果鼠标在页眉上
            return true;
        }
        // 遍历所有下拉菜单，检查鼠标是否在任何可见且透明度为1的下拉菜单上
        for (let i = 0; i < dropdownContainers.length; i++) {
            const d = dropdownContainers[i];
            if (d.matches(':hover') && d.style.display === 'block' && d.style.opacity === '1') {
                return true;
            }
        }
        return false;
    }

    // 为每个导航项添加事件监听器
    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-container'); // 获取当前导航项下的下拉菜单

        // 鼠标进入导航项时
        item.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout); // 清除可能存在的页眉隐藏定时器
            if (mainHeader) { // 确保 mainHeader 存在
                mainHeader.classList.add('nav-active'); // 添加页眉激活类
            }
            if (dropdown) { // 如果存在下拉菜单
                showDropdown(dropdown); // 显示下拉菜单
            } else {
                hideAllDropdownsInternal(); // 如果没有下拉菜单，则隐藏所有其他下拉菜单
            }
        });

        // 导航项点击事件（主要用于移动端）
        item.addEventListener('click', function(e) {
            // 在移动端且链接为'#'时阻止默认跳转
            if (window.innerWidth <= 768 && e.currentTarget.getAttribute('href') === '#') {
                e.preventDefault();
            }

            if (window.innerWidth <= 768) { // 仅在移动端生效
                const targetDropdown = this.querySelector('.dropdown-container'); // 获取当前点击导航项的下拉菜单

                // 隐藏其他导航项的下拉菜单
                navItems.forEach(navItem => {
                    if (navItem !== this && navItem.classList.contains('active')) {
                        navItem.classList.remove('active');
                    }
                });

                if (targetDropdown) {
                    this.classList.toggle('active'); // 切换当前导航项的active类
                    if (this.classList.contains('active')) {
                        if (mainHeader) { // 确保 mainHeader 存在
                            mainHeader.classList.add('nav-active'); // 如果激活，添加页眉激活类
                        }
                    } else {
                        // 如果没有其他激活的导航项，则移除页眉激活类
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

    // 鼠标离开页眉时
    if (mainHeader) { // 确保 mainHeader 存在
        mainHeader.addEventListener('mouseleave', function() {
            // 设置定时器，延迟隐藏页眉和下拉菜单
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns()) { // 再次检查鼠标是否在区域内
                    hideAllDropdowns(); // 隐藏所有下拉菜单
                }
            }, 100); // 短暂延迟
        });

        // 鼠标进入页眉时
        mainHeader.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout); // 清除可能存在的页眉隐藏定时器
            mainHeader.classList.add('nav-active'); // 添加页眉激活类
        });
    }


    // 为每个下拉菜单容器添加事件监听器
    dropdownContainers.forEach(dropdown => {
        // 鼠标离开下拉菜单时
        dropdown.addEventListener('mouseleave', function() {
            // 设置定时器，延迟隐藏页眉和下拉菜单
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns()) { // 再次检查鼠标是否在区域内
                    hideAllDropdowns(); // 隐藏所有下拉菜单
                }
            }, 100); // 短暂延迟
        });
        // 鼠标进入下拉菜单时
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout); // 清除可能存在的页眉隐藏定时器
        });
    });

    // 调整内容区域的顶部外边距，以适应页眉高度
    const adjustContentMargin = () => {
        const mainHeader = document.getElementById('mainHeader'); // 重新获取页眉元素
        const contentWrapper = document.querySelector('.content-wrapper');
        if (mainHeader && contentWrapper) {
            const headerHeight = mainHeader.offsetHeight;
            contentWrapper.style.marginTop = `${headerHeight + 20}px`; // 增加 20px 额外的间距
        } else if (contentWrapper) {
            // 如果页眉还没加载好（理论上不会，因为在 DOMContentLoaded 后执行），给一个默认值
            contentWrapper.style.marginTop = '90px';
        }
    };
    
    // 首次加载和窗口大小改变时调整间距
    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);
});