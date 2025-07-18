document.addEventListener('DOMContentLoaded', () => {
    const productDisplayArea = document.querySelector('.product-display-area');
    const categoryButtons = document.querySelectorAll('.product-category-btn');

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.modal .close-button');

const productsData = {
        category1: [
            { img: 'assets/images/semi_equipment/category101.png', desc: 'Tianjin Samsung Electro-Mechanics Phase 2', modalText: ' - Duct and Steel Structure Installation Project' },
            { img: 'assets/images/semi_equipment/category102.png', desc: 'Wuxi Hynix C1, C2', modalText: '- CO2 Supply System Equipment Installation; Secondary Piping' },
            { img: 'assets/images/semi_equipment/category103.png', desc: 'Dalian Intel', modalText: '- RED SEA, TANGO Specialty Gas, Chemical Secondary Piping' },
            { img: 'assets/images/semi_equipment/category104.png', desc: 'Xi\'an Samsung Semiconductor Phase 1', modalText: '- PCW, GASS Piping' },
            { img: 'assets/images/semi_equipment/category105.png', desc: 'Xi\'an Samsung Semiconductor Phase 2', modalText: '- Chemical MAIN LINE, Temporary Construction Cleanroom, Shed' },
        ],
        category2: [
            { img: 'assets/images/semi_equipment/category201.jpg', desc: 'Hefei BOE', modalText: '- DCS. DRS System' },
            { img: 'assets/images/semi_equipment/category202.png', desc: 'Chengdu BOE', modalText: ' - DCS.DRS System' },
            { img: 'assets/images/semi_equipment/category203.png', desc: 'Guangzhou LGD', modalText: ' - CPL Waterproofing Project for Reclaimed Water Ponds and Wastewater Conversion Ponds in FAB Building' },
        ],
        category3: [
            { img: 'assets/images/semi_equipment/category301.png', desc: 'Changzhou Sumitomo Chemical', modalText: '- Equipment and Process Piping Installation' },
            { img: 'assets/images/semi_equipment/category302.jpg', desc: 'Chongqing Showa Denko', modalText: ' - Cleanroom and Equipment Piping Installation' },
            { img: 'assets/images/semi_equipment/category303.jpg', desc: 'Zhenjiang SKM', modalText: ' - Electrolyzer Equipment and Piping Installation' },
        ],
        category4: [
            { img: 'assets/images/semi_equipment/category401.jpg', desc: 'Diamond Grinding Wheel', modalText: 'High-quality diamond grinding wheels with excellent wear resistance and sharpness, widely used for precision grinding and cutting of hard and brittle materials such as ceramics, glass, and cemented carbide.' },
        ],
        category5: [
            { img: 'assets/images/semi_equipment/category501.png', desc: 'Shanghai CS Project', modalText: 'Qingyuan uses self-produced equipment and its own workers to build a domestic first-class standard cleanroom in Shanghai.' },
            { img: 'assets/images/semi_equipment/category502.png', desc: 'Vietnam DT Project', modalText: 'Meets international cleanroom class requirements, assisting clients in expanding into the Southeast Asian market.' },
            { img: 'assets/images/semi_equipment/category503.png', desc: 'Suzhou LJ Project', modalText: 'Adopts modular design and rapid construction technology.' },
            { img: 'assets/images/semi_equipment/category506.jpg', desc: 'Qingyuan Century AS - Air Shower', modalText: '1. Unique ultra-thin blowing cabinet and fan, equipped with rotatable embedded stainless steel nozzles, greatly increasing space utilization and blowing effect; 2. Built-in multiple operating programs, which can be easily and flexibly called. Intelligent human-machine interface allows real-time monitoring of operation interlocking and other statuses; 3. Standardized modular design makes on-site assembly faster and maintenance more convenient; 4. Functions and forms can be changed according to user needs and site conditions.' },
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