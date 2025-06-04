document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-bg');

    video.play().catch(function(error) {
        console.log('Video auto-play failed:', error);
        video.controls = false;
    });

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
    }

    document.querySelectorAll('.info-block').forEach(block => {
        block.addEventListener('click', function(e) {
            const originalHref = this.getAttribute('href');
            if (originalHref && originalHref.startsWith('http')) {
                window.location.href = originalHref;
            } else if (originalHref) {
                const currentPath = window.location.pathname;
                const depth = (currentPath.match(/\//g) || []).length - (currentPath.endsWith('/') ? 1 : 0);
                let finalHref = originalHref;
                if (depth > 1) {
                    finalHref = '../' + originalHref; 
                }
                window.location.href = finalHref;
            }
        });
    });

    const mainHeader = document.getElementById('mainHeader');
    const navItems = document.querySelectorAll('.nav-item');
    const dropdownContainers = document.querySelectorAll('.dropdown-container');

    let headerHideTimeout; 
    let currentActiveDropdown = null; 
    let dropdownShowTime = 0; 
    const minDisplayDuration = 500; 

    function showDropdown(dropdownElement) {
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
        mainHeader.classList.remove('nav-active');
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
        if (mainHeader.matches(':hover')) {
            return true;
        }
        for (let i = 0; i < dropdownContainers.length; i++) {
            const d = dropdownContainers[i];
            if (d.matches(':hover') && d.style.display === 'block') {
                return true;
            }
        }
        return false;
    }

    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-container');

        item.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout); 
            mainHeader.classList.add('nav-active');
            showDropdown(dropdown); 
        });
    });

    dropdownContainers.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout); 
            mainHeader.classList.add('nav-active'); 
        });
    });

    mainHeader.addEventListener('mouseleave', function() {
        headerHideTimeout = setTimeout(() => {
            if (!isMouseOverHeaderAndDropdowns()) {
                hideAllDropdowns();
            }
        }, 100); 
    });

    dropdownContainers.forEach(dropdown => {
        dropdown.addEventListener('mouseleave', function() {
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns()) {
                    hideAllDropdowns();
                }
            }, 100); 
        });
    });

    mainHeader.addEventListener('mouseenter', function() {
        clearTimeout(headerHideTimeout);
    });

    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        const btnTextSpan = btn.querySelector('.btn-text');
        const subpage = btn.dataset.subpage;

        if (subpage === 'dynamism') {
            btn.addEventListener('click', function(event) {
                event.preventDefault(); 
                window.location.href = 'dynamism.html'; 
            });
        } else if (subpage === 'organization-chart') {
            btn.addEventListener('click', function(event) {
                event.preventDefault(); 
                window.location.href = 'newmap.html'; 
            });
        } else if (!btn.hasAttribute('onclick') && subpage !== 'business-detail1') {
            btn.addEventListener('click', function(event) {
                event.preventDefault(); 
                const textContent = btnTextSpan ? btnTextSpan.textContent.trim() : '';
                alert("Time Out\nThe page for \"" + textContent + "\" is currently under construction.");
            });
        }
    });

    navItems.forEach(item => {
        if (item.getAttribute('href') === '#' && item.dataset.page !== 'ir') {
            item.addEventListener('click', function(event) {
                event.preventDefault(); 
                const pageName = this.textContent.trim().split('\n')[0].trim();
                alert("Time Out\nThe page for \"" + pageName + "\" is currently under construction.");
            });
        }
    });
});