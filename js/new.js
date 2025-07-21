document.addEventListener('DOMContentLoaded', () => {

    const galleryContainer = document.getElementById('photo-gallery');
    const photoModal = document.getElementById('photoModal');
    const modalBody = document.getElementById('modalBody');
    const closeButton = document.querySelector('.close-button');


    const jsonFilePath = 'https://curious-chimera-36d31a.netlify.app/photos.json'; 




        document.addEventListener('DOMContentLoaded', function() {
            const adjustContentMargin = () => {
                const mainHeader = document.getElementById('mainHeader');
                const mainContent = document.querySelector('.main-content');
                if (mainHeader && mainContent && window.innerWidth > 768) {
                    const headerHeight = mainHeader.offsetHeight;
                    mainContent.style.marginTop = `${headerHeight}px`;
                } else if (mainContent && window.innerWidth <= 768) {
                    mainContent.style.marginTop = '0';
                }
            };

            // 延迟调用 adjustContentMargin
            setTimeout(adjustContentMargin, 50); 
            window.addEventListener('resize', adjustContentMargin);
        });












    //1获取当前页面语种
    function getCurrentLanguage() {
        let lang = document.documentElement.lang;
        if (lang) {
            return lang.toLowerCase();
        }
        const path = window.location.pathname;
        if (path.includes('/en/')) return 'en';
        if (path.includes('/cn/')) return 'cn';
        if (path.includes('/ru/')) return 'ru';
        if (path.includes('/jp/')) return 'jp';
        if (path.includes('/kr/')) return 'kr';
        return 'en'; 
    }
    const currentLang = getCurrentLanguage();
    console.log('当前页面语种:', currentLang);

    //2加载数据并生成主页摘要块
    let allPhotosData = [];

    function renderPhotoGallery(photosData) {
        galleryContainer.innerHTML = '';
        if (photosData.length === 0) {
            galleryContainer.innerHTML = '<p style="text-align: center; color: #666; width: 100%;">没有找到相关图片。</p>';
            return;
        }
        photosData.forEach(photo => {
            const abstractBlock = document.createElement('div');
            abstractBlock.classList.add('abstract-block');
            abstractBlock.dataset.id = photo.id; 

            const abstractImageUrl = photo.abstract.imageUrl || '';
            const abstractTitle = photo.abstract.title[currentLang] || photo.abstract.title['en'] || 'Title Not Available';
            const abstractPreviewText = photo.abstract.previewText[currentLang] || photo.abstract.previewText['en'] || 'Preview text not available.';

            const abstractImageDiv = document.createElement('div');
            abstractImageDiv.classList.add('abstract-image');
            const img = document.createElement('img');
            img.src = abstractImageUrl;
            img.alt = abstractTitle; 
            abstractImageDiv.appendChild(img);

            const abstractTextDiv = document.createElement('div');
            abstractTextDiv.classList.add('abstract-text');
            
            const titleHeading = document.createElement('h3');
            titleHeading.classList.add('abstract-title');
            titleHeading.textContent = abstractTitle;
            
            const previewParagraph = document.createElement('p');
            previewParagraph.classList.add('abstract-preview');
            previewParagraph.textContent = abstractPreviewText;

            abstractTextDiv.appendChild(titleHeading);
            abstractTextDiv.appendChild(previewParagraph);

            abstractBlock.appendChild(abstractImageDiv);
            abstractBlock.appendChild(abstractTextDiv);

            titleHeading.addEventListener('click', (event) => {
                event.stopPropagation(); 
                displayPhotoDetail(photo); 
            });

            galleryContainer.appendChild(abstractBlock);
        });
    }

    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} - Could not load JSON data.`);
            }
            return response.json();
        })
        .then(photosData => {
            allPhotosData = photosData.filter(photo => {
                return photo.languages && photo.languages.includes(currentLang);
            });
            renderPhotoGallery(allPhotosData);
        })
        .catch(error => {
            console.error('Error loading or parsing photos data:', error);
            galleryContainer.innerHTML = '<p style="text-align: center; color: red;">time out</p>';
        });







    //3 搜索功能集成到图片画廊
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function performPhotoSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) {
            renderPhotoGallery(allPhotosData);
            return;
        }
        const filteredPhotos = allPhotosData.filter(photo => {
            const titleCn = photo.abstract.title.cn ? photo.abstract.title.cn.toLowerCase() : '';
            const titleEn = photo.abstract.title.en ? photo.abstract.title.en.toLowerCase() : '';
            const previewCn = photo.abstract.previewText.cn ? photo.abstract.previewText.cn.toLowerCase() : '';
            const previewEn = photo.abstract.previewText.en ? photo.abstract.previewText.en.toLowerCase() : '';
            return titleCn.includes(searchTerm) ||
                   titleEn.includes(searchTerm) ||
                   previewCn.includes(searchTerm) ||
                   previewEn.includes(searchTerm);
        });
        renderPhotoGallery(filteredPhotos);
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performPhotoSearch);
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performPhotoSearch();
            }
        });
    }



















    //4模态框显示详情的函数
    function displayPhotoDetail(photo) {
        modalBody.innerHTML = ''; 

        const detailContent = document.createElement('div');
        detailContent.classList.add('detail-content');

        if (photo.details.mainTitle) {
            const modalMainTitle = document.createElement('h2');
            modalMainTitle.classList.add('modal-main-title');
            modalMainTitle.textContent = photo.details.mainTitle[currentLang] || photo.details.mainTitle['en'] || 'Detail Content';
            detailContent.appendChild(modalMainTitle);
        }

        if (photo.details.contentBlocks && photo.details.contentBlocks.length > 0) {
            photo.details.contentBlocks.forEach(block => {
                if (block.type === 'paragraph') {
                    const p = document.createElement('p');
                    p.classList.add('content-block-paragraph');
                    p.textContent = block.text[currentLang] || block.text['en'] || 'Paragraph not available.'; 
                    detailContent.appendChild(p);
                } else if (block.type === 'image_group') {
                    const imageGroupContainer = document.createElement('div');
                    imageGroupContainer.classList.add('content-block-image-group');

                    if (block.images && block.images.length > 0) {
                        block.images.forEach(imgData => {
                            const img = document.createElement('img');
                            img.src = imgData.url;
                            img.alt = imgData.alt[currentLang] || imgData.alt['en'] || 'Image'; 
                            imageGroupContainer.appendChild(img);
                        });
                    }

                    if (block.caption && (block.caption[currentLang] || block.caption['en'])) {
                        const caption = document.createElement('p');
                        caption.classList.add('image-group-caption');
                        caption.textContent = block.caption[currentLang] || block.caption['en'];
                        imageGroupContainer.appendChild(caption);
                    }
                    detailContent.appendChild(imageGroupContainer);
                }
            });
        }

        modalBody.appendChild(detailContent);
        photoModal.style.display = 'flex'; 
    }


    
    //5模态框关闭事件处理
    closeButton.addEventListener('click', () => {
        photoModal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === photoModal) { 
            photoModal.style.display = 'none'; 
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && photoModal.style.display === 'flex') { 
            photoModal.style.display = 'none'; 
        }
    });
});