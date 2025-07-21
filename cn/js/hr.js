document.addEventListener('DOMContentLoaded', function() {
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
            mainHeader.classList.add('nav-active');
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
                        mainHeader.classList.add('nav-active');
                    } else {
                        setTimeout(() => {
                            if (!document.querySelector('.nav-item.active')) {
                                mainHeader.classList.remove('nav-active');
                            }
                        }, 300);
                    }
                }
            }
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
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(headerHideTimeout);
        });
    });

    mainHeader.addEventListener('mouseenter', function() {
        clearTimeout(headerHideTimeout);
        mainHeader.classList.add('nav-active');
    });

    const adjustContentMargin = () => {
        const headerHeight = mainHeader.offsetHeight;
    };
    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');
    const modalCloseButton = document.querySelector('.image-modal-close');
    const carouselImages = document.querySelectorAll('#imageCarousel img');

    function openImageModal(imageSrc, textContent) {
        modalImage.src = imageSrc;
        modalText.textContent = textContent;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    carouselImages.forEach(img => {
        img.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-modal-image');
            const textContent = this.getAttribute('data-modal-text');
            openImageModal(imageSrc, textContent);
        });
    });

    modalCloseButton.addEventListener('click', closeImageModal);

    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });

    const slideBlocks = document.querySelectorAll('.slide-block');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
            }
        });
    }, observerOptions);

    slideBlocks.forEach(block => {
        observer.observe(block);
    });

    const carousel = document.getElementById('imageCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let autoScrollInterval;

    function initCarousel() {
        console.log('start', items.length);
        updatePositions();
        updateProgressBar(); // Ensure progress bar is updated on init
        startAutoScroll();
    }

    function updatePositions() {
        console.log('timing', currentIndex);
        items.forEach((item, index) => {
            let relativeIndex = index - currentIndex;
            
            if (relativeIndex < -2) relativeIndex += items.length;
            if (relativeIndex > 2) relativeIndex -= items.length;
            
            item.classList.remove('pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-5');
            
            if (relativeIndex >= -2 && relativeIndex <= 2) {
                const posClass = `pos-${relativeIndex + 3}`;
                item.classList.add(posClass);
                console.log(`图片 ${index} 设置为 ${posClass}`);
            } else {
                console.log(`图片 ${index} 隐藏`);
            }
        });
        updateProgressBar();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updatePositions();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updatePositions();
    }

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        currentX = e.clientX;
        stopAutoScroll();
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
    });

    carousel.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        isDragging = false;
        carousel.style.cursor = 'grab';
        startAutoScroll();
    });

    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.cursor = 'grab';
            startAutoScroll();
        }
    });

    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = e.touches[0].clientX;
        stopAutoScroll();
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        isDragging = false;
        startAutoScroll();
    });

    const progressItems = document.querySelectorAll('.progress-item');
    
    function updateProgressBar() {
        progressItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updatePositions();
        updateProgressBar();
    }

    progressItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            goToSlide(index);
            stopAutoScroll();
            startAutoScroll();
        });
    });

    // Initialize carousel on DOMContentLoaded
    initCarousel();
});