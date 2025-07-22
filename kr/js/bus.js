document.addEventListener('DOMContentLoaded', () => {
    const productDisplayArea = document.querySelector('.product-display-area');
    const categoryButtons = document.querySelectorAll('.product-category-btn');

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.modal .close-button');

    const productsData = {
        category1: [
            { img: 'assets/images/semi_equipment/category101.png', desc: '천진삼성전기 2기', modalText: ' - 덕트、강구조물 설치 공사' },
            { img: 'assets/images/semi_equipment/category102.png', desc: '무석 하이닉스 C1,C2', modalText: '- CO2 공급 시스템 설비 설치; 2차 배관' },
            { img: 'assets/images/semi_equipment/category103.png', desc: '대련 인텔', modalText: '- RED SEA ,TANGO 특수 가스, 화학품 2차 배합' },
            { img: 'assets/images/semi_equipment/category104.png', desc: '서안 삼성 반도체 1기', modalText: '-PCW,GASS 배관' },
            { img: 'assets/images/semi_equipment/category105.png', desc: '서안 삼성 반도체 2기', modalText: '-화학 MAIN LINE, 임시 건설 공사의 클린룸 시공.' },
        ],
        category2: [
            { img: 'assets/images/semi_equipment/category201.jpg', desc: '합비 징둥퐁', modalText: '-DCS. DRS 시스템' },
            { img: 'assets/images/semi_equipment/category202.png', desc: '청두 징둥팡', modalText: '    - DCS.DRS 시스템' },
            { img: 'assets/images/semi_equipment/category203.png', desc: '광저우 LGD', modalText: ' -FAB동 공사 중 재활용수조 및 폐수전환수조 CPL 방수공사    ' },
        ],
        category3: [
            { img: 'assets/images/semi_equipment/category301.png', desc: '창저우 주화전자', modalText: '- 설비 및 공예 배관 설치' },
            { img: 'assets/images/semi_equipment/category302.jpg', desc: '충칭 수보루이인', modalText: '  - 클린룸 및 설비 배관 설치' },
            { img: 'assets/images/semi_equipment/category303.jpg', desc: '진강 SKM', modalText: '    - 전기분해조 설비 및 배관설치' },
        ],
        category4: [
            { img: 'assets/images/semi_equipment/category401.jpg', desc: '다이아몬드 숫돌', modalText: '우수한 내마모성과 날카로움을 지닌 고품질 다이아몬드 숫돌은 세라믹, 유리, 초경합금 등의 경질 및 취성 재료의 정밀 연마 및 절단에 널리 사용됩니다.' },
        ],
        category5: [
            { img: 'assets/images/semi_equipment/category501.png', desc: '상하이 CS 프로젝트 ', modalText: '경원세기는 자체 생산 설비와 자사의 노동력으로 상하이에 국내 일류 표준 클린룸 건설' },
            { img: 'assets/images/semi_equipment/category502.png', desc: '베트남 DT 프로젝트 ', modalText: '국제 표준의 청정 등급 요구에 부합하여 동남아시아 시장에서 고객 확장을 합니다.' },
            { img: 'assets/images/semi_equipment/category503.png', desc: '소주 LJ 프로젝트 ', modalText: '모듈화 설계와 신속 시공 기술을 채택하였습니다.' },
            { img: 'assets/images/semi_equipment/category506.jpg', desc: '경원세기AS-에어샤워실', modalText: '1.특유의 슬림한 헤어드라이어와 송풍기, 회전 가능한 매립형 스테인리스 노즐로 공간 활용도와 헤어드라이어 효과를 극대화하였습니다. 2. 여러 개의 조작 프로그램이 내장되어 있어 편리하고 유연하게 호출할 수 있습니다. 지능형 인간-컴퓨터 대화 인터페이스는 인터록 등의 상태를 실시간으로 모니터링합니다. 표준 모듈식 설계는 현장 조립을 더욱 빠르고 쉽게 유지 관리할 수 있도록 합니다. 사용자의 사용 요구와 현장 조건에 따라 기능과 형식을 변경할 수 있습니다.' },
        ]
    };

    function renderProducts(categoryName) {
        productDisplayArea.innerHTML = '';
        const products = productsData[categoryName];

        if (products && products.length > 0) {
            products.forEach(product => {
                const productBlock = document.createElement('div');
                productBlock.classList.add('product-block');

                const img = document.createElement('img');
                img.src = product.img;

                const desc = document.createElement('p');
                desc.textContent = product.desc;

                productBlock.appendChild(img);
                productBlock.appendChild(desc);

                productBlock.addEventListener('click', () => {
                    modalImage.src = product.img;
                    modalDescription.textContent = product.modalText || product.desc;
                    imageModal.style.display = 'flex';
                });

                productDisplayArea.appendChild(productBlock);
            });
        } else {
            productDisplayArea.innerHTML = `<p>暂无 "${categoryName}" 类别产品。</p>`;
        }
    }

    function updateActiveButton(activeCategory) {
        categoryButtons.forEach(button => {
            if (button.dataset.category === activeCategory) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function updateContentBlock(category) {
        const contentCategories = document.querySelectorAll('.content-category');
        contentCategories.forEach(content => {
            if (content.dataset.category === category) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            renderProducts(category);
            updateActiveButton(category);
            updateContentBlock(category);
            window.location.hash = category;
        });
    });

    function loadContentFromURL() {
        const hash = window.location.hash.substring(1);
        let initialCategory = 'category1';

        if (hash && productsData[hash]) {
            initialCategory = hash;
        }

        renderProducts(initialCategory);
        updateActiveButton(initialCategory);
        updateContentBlock(initialCategory);
    }

    loadContentFromURL();

    window.addEventListener('hashchange', loadContentFromURL);

    closeButton.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });

    const adjustPlaceholderContentMargin = () => {
        const mainHeader = document.getElementById('mainHeader');
        const placeholderContent = document.querySelector('.placeholder-content');
        if (mainHeader && placeholderContent && window.innerWidth > 768) {
            const headerHeight = mainHeader.offsetHeight;
            placeholderContent.style.marginTop = `${headerHeight}px`;
        } else if (placeholderContent && window.innerWidth <= 768) {
            placeholderContent.style.marginTop = '0';
        }
    };
    
    setTimeout(adjustPlaceholderContentMargin, 50);
    window.addEventListener('resize', adjustPlaceholderContentMargin);
});
