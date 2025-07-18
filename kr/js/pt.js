document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.querySelector('.map-block');
    const tooltip = document.getElementById('provinceTooltip');
    const tooltipImage = document.getElementById('tooltipImage');
    const tooltipText = document.getElementById('tooltipText');
    const provincePaths = mapContainer.querySelectorAll('svg > g > path.land');

    const provinceData = {
"CN-62": { image: "assets/images/foot.jpg", text: "" },
"CN-45": { image: "assets/images/foot.jpg", text: "" },
"CN-52": { image: "assets/images/foot.jpg", text: "" },
"CN-46": { image: "assets/images/foot.jpg", text: "" },
"CN-13": { image: "assets/images/foot.jpg", text: "" },
"CN-41": { image: "assets/images/foot.jpg", text: "" },
"CN-91": { image: "assets/images/foot.jpg", text: "" },
"CN-23": { image: "assets/images/foot.jpg", text: "" },
"CN-65": { image: "assets/images/foot.jpg", text: "" },

"CN-41": { image: "assets/images/foot.jpg", text: "" },
"CN-91": { image: "assets/images/foot.jpg", text: "" },
"CN-23": { image: "assets/images/foot.jpg", text: "" },

"CN-71": { image: "assets/images/foot.jpg", text: "" },
"CN-50": { image: "assets/images/foot.jpg", text: "" },

"CN-36": { image: "assets/images/foot.jpg", text: "" },
"CN-92": { image: "assets/images/foot.jpg", text: "" },
"CN-54": { image: "assets/images/foot.jpg", text: "" },
"CN-53": { image: "assets/images/foot.jpg", text: "" },
"CN-63": { image: "assets/images/foot.jpg", text: "" },
"CN-15": { image: "assets/images/foot.jpg", text: "" },
"CN-14": { image: "assets/images/foot.jpg", text: "" },
"CN-64": { image: "assets/images/foot.jpg", text: "" },


"CN-32": {
  image: "../images/jiangsu.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK Hynix Co2 & C2F System Installation & Hook up</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK Hynix System IC Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK Hynix System IC PKG.6 Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK Hynix System IC Wafer Plant Hook-up Work</td>
      </tr>
     
      
    </table>
  `
},

"CN-21": {
  image: "../images/liaoning.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">대련 Intel HK19B 특수기체 2차 배관 설치공사</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">대련 Intel 특수기체 및 화학배관 2차 배관 설치 공사</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">대련 Intel TANGO 프로젝트  GAS 2차배관 설치공사</td>
      </tr>

   
    </table>
  `
},

"CN-61": {
  image: "../images/shaanxi.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">중국 전자 M Retrofit 2기 PJT 내 B/E 상부층 인테리어 및 수도 전기 설치 공사</td>
      </tr>
    
    
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">서안 SCS 공장 구역 임시 건설 공정의 모듈화 가공 공장 건설 공정</td>
      </tr>

    
    </table>
  `
},

"CN-37": {
  image: "../images/shandong.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2017.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">옌타이 Y1 Notch Grinder 증설 관련 C/R & UT 설치 프로젝트 - UT 프로젝트</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">칭다오융합반도체유한공사 고급 밀봉 및 테스트 공장 프로젝트 특수 가스 시스템</td>
      </tr>
   
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">만웨이반도체기술(산동)유한공사 소방 개조 프로젝트 - 클린룸 인테리어 및 사무실 인테리어 공사</td>
      </tr>
   
     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">칭다오융합반도체유한공사 고급 밀봉 및 테스트 공장 프로젝트 특수 가스 시스템</td>
      </tr>

    </table>
  `
},

"CN-31": {
  image: "../images/shanghai.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

        
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">비탁과기(상하이)주식회사 설비 배관 설치 공사</td>
      </tr>
    </table>
  `
},
    
      "CN-32": {
  image: "../images/jiangsu.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">



      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">주화전자(상주)저장탱크 Level Gauge 설치사업</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK CO2 설비 공급 설치공사</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 SK Wet Chemical 폐액재생시스템 제작 및 설치공사</td>
      </tr>



      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">남경 LG 화학전해액 공급설비 배관 설치공사</td>

      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">염성 SK배터리공장 1기 2동 부속기 설치공사 배터리공장 1기 2동 부속기 설치공사 </td>
      </tr>


      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">해진반도체(우시)유한공사--W09창고공사</td>
      </tr>

 
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무석 하이닉스 Ar 시스템 확충 프로젝트 MEI(추가)</td>
      </tr>
    </table>
  `
},
"CN-35": {
  image: "../images/fujian.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">샤먼 헝쿤-포토레지스트 연구개발 및 생산설비 프로젝트</td>
      </tr>


    </table>
  `
},
      "CN-12": {
  image: "../images/tianjin.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">천진 2기 신축환경공사 에어 배관공사(P1)</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">삼성전기 빈하이 1공장 RTO 및 농축기 증설공사</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">천진삼성전기유한공사 MLCC 30억 확장투자 개조 프로젝트/옥상풍관공사</td>
      </tr>

    </table>
  `
},
"CN-34": {
  image: "../images/anhui.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

   
     
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">합비 란커 투자유한공사 합비종합보세구역 전자정보표준화공장 프로젝트-대량가스공급시스템 공사 시공</td>
      </tr>

 <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">합비장흠 ALHF CXMT 시공</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">합비 심과 연간 8000톤 이소프로필알코올 1기 설치 공사</td>
      </tr>

   <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">합비정합대량가스 스테인리스관 재료 및 설치기술 서비스</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">안후이 헝쿤 1000L 혼합시스템 3&5 파이프라인 자동충전기 프로젝트</td>
      </tr>

    </table>
  `
},
"CN-51": {
  image: "../images/sichuan.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">BOECD TEST CENTRAL SET-UP</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">면양 BOE B11설비증설 set up--설비 설치 및 배관 연결</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.10</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">청두 BOE B7 설비 증설 set up--설비 설치 및 배관 연결</td>
      </tr>

     <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">청두 BOE B7 TSP PH2 설비 증설 set up </td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">면양 BOEB11 TSPPH2 설비 증설 set up </td>
      </tr>

    </table>
  `
},
"CN-22": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">장춘천명성과기유한공사 공장건설설계자문</td>
      </tr>

    </table>
  `
},

"CN-33": {
  image: "../images/zhejiang.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">절강건업마이크로전자재료유한회사 전자급 이소프로필알코올도관설치프로젝트</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">항저우 푸신 12인치 아날로그 집적회로 칩 생산라인 프로젝트 (1기) 공장 사무 2차 배치/Hookup 공정 총 도급 프로젝트 PCW/CW/PV系统专业分包</td>
      </tr>

     

 <tr>
    

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">항저우 지하이 4K 2차 분배 Special Gas Hook-Up 프로젝트</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">취저우 효성 VC3 PROJECT - HVAC & Clean Room Panel 설치</td>
      </tr>

<tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">항저우 부신 반도체 용접 공사 시공 설치 </td>
      </tr>

     
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">취저우 효성 ISO 연결부 교체 공사</td>
      </tr>
    </table>
  `
},
"CN-44": {
  image: "../images/guangdong.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">광저우 LGD CO 공장 저장소용기 설치 공사</td>
      </tr>


      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">광저우 LGD CO 공장 증설용 설비 set up </td>
      </tr>
    </table>
  `
},
"CN-43": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">창사후이커 현상액 농도 관리 및 회수 시스템 설치공사</td>
      </tr>
    </table>
  `
},
"CN-13": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">중전과학기술 제45연구소 CDS 급액관공사</td>
      </tr>
    </table>
  `
},
"CN-11": {
  image: "../images/zhan_wei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">베이징 집전 SCO2 배관 VMB 시스템 공사-C1B 프로젝트 배관설치</td>
      </tr>

    </table>
  `
},

"CN-42": {
  image: "../images/hubei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">


      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">무한 신심 XMC 12B 정제실 증설 프로젝트 설치</td>
      </tr>

    </table>
  `
},
    };

    mapContainer.addEventListener('mousemove', function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        let tooltipX = mouseX + 15;
        let tooltipY = mouseY + 15;

        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        if (tooltipX + tooltipWidth > window.innerWidth) {
            tooltipX = mouseX - tooltipWidth - 15;
        }
        if (tooltipY + tooltipHeight > window.innerHeight) {
            tooltipY = mouseY - tooltipHeight - 15;
        }

        tooltip.style.left = tooltipX + 'px';
        tooltip.style.top = tooltipY + 'px';
    });

    provincePaths.forEach(path => {
        path.addEventListener('mouseover', function(event) {
            const provinceId = this.id;
            const data = provinceData[provinceId];

            if (data) {
                tooltipImage.src = data.image;
                tooltipText.innerHTML = data.text
                tooltip.style.display = 'flex';
            }
        });

        path.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });

    mapContainer.addEventListener('mouseout', function(event) {
        if (!mapContainer.contains(event.relatedTarget)) {
            tooltip.style.display = 'none';
        }
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
            if (dropdown && window.innerWidth > 768) {
                showDropdown(dropdown);
            } else if (window.innerWidth > 768) {
                hideAllDropdownsInternal();
            }
        });

        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                const targetDropdown = this.querySelector('.dropdown-container');
                if (e.currentTarget.getAttribute('href') === '#') {
                    e.preventDefault();
                }

                navItems.forEach(navItem => {
                    if (navItem !== this && navItem.classList.contains('active')) {
                        navItem.classList.remove('active');
                    }
                });

                if (targetDropdown) {
                    this.classList.toggle('active');
                    if (this.classList.contains('active')) {
                        mainHeader.classList.add('nav-active');
                        targetDropdown.style.display = 'flex';
                    } else {
                        targetDropdown.style.display = 'none';
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
            if (!isMouseOverHeaderAndDropdowns() && window.innerWidth > 768) {
                hideAllDropdowns();
            }
        }, 100);
    });

    dropdownContainers.forEach(dropdown => {
        dropdown.addEventListener('mouseleave', function() {
            headerHideTimeout = setTimeout(() => {
                if (!isMouseOverHeaderAndDropdowns() && window.innerWidth > 768) {
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
        const mainContent = document.querySelector('.main-content');
        if (mainContent && window.innerWidth > 768) {
            mainContent.style.marginTop = `${headerHeight}px`;
        } else if (mainContent && window.innerWidth <= 768) {
            mainContent.style.marginTop = '0';
        }
    };

    adjustContentMargin();
    window.addEventListener('resize', adjustContentMargin);
});

document.addEventListener('DOMContentLoaded', function() {
    const leftBlockTooltip = document.getElementById('leftBlockTooltip');
    const leftBlockTooltipImg = document.getElementById('leftBlockTooltipImg');
    const leftBlockTooltipText = document.getElementById('leftBlockTooltipText');
   
    const leftBlockData = {
        futureBlock1: {
            img: 'assets/images/LOGO.png',
            text: '&emsp;&emsp;&emsp; \n 모스크바 크류코보 시내 제레노그라드'
        },
        futureBlock2: {
            img: 'assets/images/LOGO.png',
            text: '&emsp;&emsp; \n 인도 북방주 노이다 고탐불 다나갈 137호'
        }
    };
   
    ['futureBlock1', 'futureBlock2'].forEach(function(blockId) {
        const block = document.getElementById(blockId);
        if (!block) return;
        const img = block.querySelector('img');
        block.addEventListener('mousemove', function(e) {
            const data = leftBlockData[blockId];
            if (data) {
                leftBlockTooltipImg.src = data.img;
                leftBlockTooltipText.innerHTML = data.text;
                leftBlockTooltip.style.display = 'flex';
                const rect = block.getBoundingClientRect();
                let tooltipX = e.clientX - rect.left + 20;
                let tooltipY = e.clientY - rect.top + 20;
                leftBlockTooltip.style.left = (rect.left + tooltipX) + 'px';
                leftBlockTooltip.style.top = (rect.top + tooltipY) + 'px';
            }
        });
        block.addEventListener('mouseleave', function() {
            leftBlockTooltip.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const gridImages = document.querySelectorAll('.grid-image');
    const cn51Text = document.querySelector('.cn-51');
    const cn22Text = document.querySelector('.cn-22');
   
    const cn51Svg = document.getElementById('CN-51');
    const cn22Svg = document.getElementById('CN-22');
    const cn11Svg = document.getElementById('CN-11');
    const cn31Svg = document.getElementById('CN-31');
    const cn44Svg = document.getElementById('CN-44');
    const cn32Svg = document.getElementById('CN-32');
    const cn33Svg = document.getElementById('CN-33');
    const cn37Svg = document.getElementById('CN-37');
    const cn13Svg = document.getElementById('CN-13');
    const cn41Svg = document.getElementById('CN-41');
    const cn42Svg = document.getElementById('CN-42');
    const cn43Svg = document.getElementById('CN-43');
    const cn45Svg = document.getElementById('CN-45');
    const cn46Svg = document.getElementById('CN-46');
    const cn50Svg = document.getElementById('CN-50');
    const cn52Svg = document.getElementById('CN-52');
    const cn53Svg = document.getElementById('CN-53');
    const cn54Svg = document.getElementById('CN-54');
    const cn61Svg = document.getElementById('CN-61');
    const cn62Svg = document.getElementById('CN-62');
    const cn63Svg = document.getElementById('CN-63');
    const cn64Svg = document.getElementById('CN-64');
    const cn65Svg = document.getElementById('CN-65');
    const cn21Svg = document.getElementById('CN-21');
    const cn23Svg = document.getElementById('CN-23');
    const cn34Svg = document.getElementById('CN-34');
    const cn35Svg = document.getElementById('CN-35');
    const cn36Svg = document.getElementById('CN-36');
    const cn14Svg = document.getElementById('CN-14');
    const cn15Svg = document.getElementById('CN-15');
    const cn12Svg = document.getElementById('CN-12');

    gridImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            const imageName = this.getAttribute('data-image');
           
            if (imageName === 'pt1') {


                if (cn21Svg) cn21Svg.style.fill = '#03436e';

            } else if (imageName === 'pt2') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt3') {
                if (cn61Svg) cn61Svg.style.fill = '#03436e';
                if (cn32Svg) cn32Svg.style.fill = '#03436e';
                if (cn12Svg) cn12Svg.style.fill = '#03436e';
            } else if (imageName === 'pt4') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt5') {
                if (cn42Svg) cn42Svg.style.fill = '#03436e';

            } else if (imageName === 'pt6') {
                if (cn51Svg) cn51Svg.style.fill = '#03436e';

            } else if (imageName === 'pt7') {
                if (cn37Svg) cn37Svg.style.fill = '#03436e';
                if (cn44Svg) cn44Svg.style.fill = '#03436e';
                if (cn32Svg) cn32Svg.style.fill = '#03436e';
            } else if (imageName === 'pt8') {
                if (cn34Svg) cn34Svg.style.fill = '#03436e';

            } else if (imageName === 'pt9') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt10') {
                if (cn33Svg) cn33Svg.style.fill = '#03436e';

            } else if (imageName === 'pt11') {
                if (cn33Svg) cn33Svg.style.fill = '#03436e';

            } else if (imageName === 'pt12') {
                if (cn31Svg) cn31Svg.style.fill = '#03436e';

            } else if (imageName === 'pt13') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt14') {
                if (cn11Svg) cn11Svg.style.fill = '#03436e';

            } else if (imageName === 'pt15') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt16') {
                if (cn21Svg) cn21Svg.style.fill = '#03436e';
                if (cn34Svg) cn34Svg.style.fill = '#03436e';
                if (cn35Svg) cn35Svg.style.fill = '#03436e';
            } else if (imageName === 'pt17') {
                if (cn34Svg) cn34Svg.style.fill = '#03436e';

            } else if (imageName === 'pt18') {

                if (cn44Svg) cn44Svg.style.fill = '#03436e';
            } else if (imageName === 'pt19') {
                if (cn32Svg) cn32Svg.style.fill = '#03436e';

            } else if (imageName === 'pt20') {
                if (cn35Svg) cn35Svg.style.fill = '#03436e';

            }
        });

        img.addEventListener('mouseleave', function() {
            const imageName = this.getAttribute('data-image');
           
            if (imageName === 'pt1') {
                if (cn21Svg) cn21Svg.style.fill = '';
            } else if (imageName === 'pt2') {
                if (cn51Svg) cn51Svg.style.fill = '';
   

            } else if (imageName === 'pt3') {
                if (cn61Svg) cn61Svg.style.fill = '';
                if (cn32Svg) cn32Svg.style.fill = '';
                if (cn12Svg) cn12Svg.style.fill = '';
            } else if (imageName === 'pt4') {
                if (cn51Svg) cn51Svg.style.fill = '';

            } else if (imageName === 'pt5') {
                
                if (cn42Svg) cn42Svg.style.fill = '';
            } else if (imageName === 'pt6') {
                if (cn51Svg) cn51Svg.style.fill = '';

            } else if (imageName === 'pt7') {
                if (cn32Svg) cn32Svg.style.fill = '';
                if (cn37Svg) cn44Svg.style.fill = '';
                if (cn44Svg) cn37Svg.style.fill = '';

            } else if (imageName === 'pt8') {
                if (cn34Svg) cn34Svg.style.fill = '';

            } else if (imageName === 'pt9') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt10') {
                if (cn33Svg) cn33Svg.style.fill = '';

            } else if (imageName === 'pt11') {
                if (cn33Svg) cn33Svg.style.fill = '';
            } else if (imageName === 'pt12') {
                if (cn31Svg) cn31Svg.style.fill = '';

            } else if (imageName === 'pt13') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt14') {
               
                if (cn11Svg) cn11Svg.style.fill = '';
            } else if (imageName === 'pt15') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt16') {
                if (cn21Svg) cn21Svg.style.fill = '';
                if (cn34Svg) cn34Svg.style.fill = '';
                if (cn35Svg) cn35Svg.style.fill = '';
            } else if (imageName === 'pt17') {
                if (cn34Svg) cn34Svg.style.fill = '';

            } else if (imageName === 'pt18') {

                if (cn44Svg) cn44Svg.style.fill = '';
            } else if (imageName === 'pt19') {
                if (cn32Svg) cn32Svg.style.fill = '';

            } else if (imageName === 'pt20') {
                if (cn35Svg) cn35Svg.style.fill = '';

            }
        });
    });
});