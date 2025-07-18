document.addEventListener('DOMContentLoaded', () => {
    const productDisplayArea = document.querySelector('.product-display-area');
    const categoryButtons = document.querySelectorAll('.product-category-btn');

    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.modal .close-button');

    const productsData = {
        category1: [
            { img: 'assets/images/semi_equipment/category101.png', desc: '天津三星电机 2期', modalText: ' - 风管、钢结构安装工程' },
            { img: 'assets/images/semi_equipment/category102.png', desc: '无锡海力士C1,C2', modalText: '- CO2 供应系统设备安装;二次配管道' },
            { img: 'assets/images/semi_equipment/category103.png', desc: '大连英特尔', modalText: '- RED SEA ,TANGO 特气、化学品 二次配' },
            { img: 'assets/images/semi_equipment/category104.png', desc: '西安三星半导体1期', modalText: '-PCW,GASS 管道' },
            { img: 'assets/images/semi_equipment/category105.png', desc: '西安三星半导体2期', modalText: '-化学 MAIN LINE, 临建工程 洁净室、棚房' },
        ],
        category2: [
            { img: 'assets/images/semi_equipment/category201.jpg', desc: '合肥京东方', modalText: '-DCS. DRS 系统' },
            { img: 'assets/images/semi_equipment/category202.png', desc: '成都京东方', modalText: '    - DCS.DRS 系统' },
            { img: 'assets/images/semi_equipment/category203.png', desc: '广州 LGD', modalText: ' -FAB栋工程中的再利用水池及废水转换池CPL防水工程    ' },
        ],
        category3: [
            { img: 'assets/images/semi_equipment/category301.png', desc: '常州住化电子', modalText: '- 设备及工艺管道安装' },
            { img: 'assets/images/semi_equipment/category302.jpg', desc: '重庆秀博瑞殷', modalText: '  - 洁净室及设备管道安装' },
            { img: 'assets/images/semi_equipment/category303.jpg', desc: '镇江 SKM', modalText: '    - 电解槽设备及管道安装' },
        ],
        category4: [
            { img: 'assets/images/semi_equipment/category401.jpg', desc: '金刚石砂轮', modalText: '高品质金刚石砂轮，具有卓越的耐磨性和锋利度，广泛应用于硬脆材料如陶瓷、玻璃、硬质合金等的精密研磨和切割。' },
        ],
        category5: [
            { img: 'assets/images/semi_equipment/category501.png', desc: '上海 CS 项目 ', modalText: '庆元使用自产设备和自有工人，在上海建设国内一流标准洁净室' },
            { img: 'assets/images/semi_equipment/category502.png', desc: '越南 DT 项目 ', modalText: '符合国际标准的洁净等级要求，助力客户在东南亚市场的拓展' },
            { img: 'assets/images/semi_equipment/category503.png', desc: '苏州 LJ 项目 ', modalText: '采用了模块化设计和快速施工技术' },
            { img: 'assets/images/semi_equipment/category506.jpg', desc: '庆元世纪AS-风淋室', modalText: '1.特有的超薄吹淋箱体和风机、配以可旋转的嵌入式不锈钢喷嘴，极达的增加了空间利用率和吹淋效果；2.内置多套操作程序，可方便灵活调用。智能化的人机对话界面使运行联锁等状态实时监控；3.标准的模块化设计，使现场组装更加快捷、维护更方便；4.可根据用户使用需求和现场条件变换功能和形式。' },
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