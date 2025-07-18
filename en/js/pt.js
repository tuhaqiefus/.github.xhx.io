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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK Hynix Co2 & C2F System Installation & Hook up</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK Hynix System IC Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK Hynix System IC PKG.6 Chemical System Installation</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK Hynix System IC Wafer Plant Hook-up Work</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.01</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hangzhou Fuxin 12-inch Analog Integrated Circuit Chip Production Line Project Hook-up Engineering</td>
      </tr>
      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hangzhou Fuxin 12-inch Analog Integrated Circuit Chip Production Line Project Hook-up Engineering</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Dalian Intel HK19B Specialty Gas Secondary Piping Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Dalian Intel Specialty Gas and Chemical Piping Secondary Distribution Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Dalian Intel TANGO Project GAS Secondary Piping Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">BDEAS Production Equipment Procurement and Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">CPHF System</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">China Electronics M Retrofit Phase II PJT B/E Upper Floor Decoration and MEP Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2017.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">PCW Plant Warehouse Renovation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.04</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Xi'an SCS Plant Temporary Construction Project - Modular Processing Plant Construction Project</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">X2 PJT GAS&PCW Piping Project</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">1~2M3 TANK Installation Technology Support</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">0.5~2M3 TANK Installation Technology Support</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Yantai Y1 Notch Grinder Incremental Response C/R&UT Installation Project - UT Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Qingdao Fusion Semiconductor Co., Ltd. High-End Packaging and Testing Plant Project Specialty Gas System</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wanwei Semiconductor Technology (Shandong) Co., Ltd. Fire Protection Renovation Project - Cleanroom Decoration and Office Decoration Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Qingdao Fusion Semiconductor Co., Ltd. High-End Packaging and Testing Plant Project Specialty Gas System</td>
      </tr>

    </table>
  `
},

"CN-31": {
  image: "../images/shanghai.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2016.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">SCS M Retrofit PJT 2nd Phase Project Xi'an B/E Upper Floor Decoration and MEP Installation Project - Outdoor Pipe Rack GAS Project (M07GKG)</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.10</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Secondary Piping Project Power Side Secondary Piping System - Wastewater Subcontracting Project</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Mechanical and Electrical Installation Service Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Feizhuo Technology (Shanghai) Co., Ltd. Equipment and Piping Installation Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Sumitomo Chemical (Changzhou) Tank Level Gauge Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK CO2 Supply Equipment Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi SK Wet Chemical Waste Liquid Regeneration System Fabrication and Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Nanjing LG Chemical Electrolyte Supply Equipment Piping Installation Project</td>

      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Yancheng SK Battery Plant Phase 1 Building 2 Supporting Machine Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Haitchen Semiconductor (Wuxi) Co., Ltd. -- W09 Warehouse Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wet Refining Building RTO System Renovation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuxi Hynix Ar System Expansion Project MEI (Additional)</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Xiamen Hengkun - Photoresist R&D and Production Equipment Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Synthesis Equipment Procurement</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Motor Replacement and MCC Panel Renovation Project, Motor Modification Project</td>
      </tr>

        <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Laboratory Filling Equipment</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Ion Exchange System 250L</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Phase I DCS Host Computer Dismantling and Renovation Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Tianjin Phase II New Environmental Engineering Ductwork and Piping Project (P1)</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Samsung Electro-Mechanics Binhai Plant 1 RTO and Concentrator Addition Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Tianjin Samsung Electro-Mechanics Co., Ltd. MLCC 3 Billion Expansion Investment and Renovation Project / Rooftop Ductwork and Piping Project</td>
      </tr>

    </table>
  `
},
"CN-34": {
  image: "../images/anhui.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2018.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">TM1 Sensor Developer Machine Renovation TAMH Recovery Pipeline Renovation</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Changxin Secondary Distribution Labor Package</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hefei Lankes Investment Co., Ltd. Hefei Comprehensive Bonded Zone Electronic Information Standardized Factory Project - Bulk Gas Supply System Engineering Construction</td>
      </tr>

<tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hefei Changxin ALHF CXMT Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.05</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hefei Xinke Annual Production of 8000 Tons Isopropanol Phase I Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">HF CXMT Project</td>
      </tr>

    <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hefei Jinghe Bulk Gas Stainless Steel Pipe Material and Installation Technical Services</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Anhui Hengkun 1000L Mixing System 3&5 Pipeline Automatic Filling Machine Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Mianyang BOE B11 Additional Equipment Setup -- Equipment Installation and Pipeline Connection</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2019.10</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Chengdu BOE B7 Additional Equipment Setup -- Equipment Installation and Pipeline Connection</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.08</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Chengdu BOE B7 TSP PH2 Additional Equipment Setup</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.11</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Mianyang BOE B11 TSP PH2 Additional Equipment Setup</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2021.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">IT Machine Installation</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Changchun Tianmingsheng Technology Co., Ltd. Factory Construction Design Consulting</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Zhejiang Jianye Microelectronics Material Co., Ltd. Electronic Grade Isopropanol Pipeline Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hangzhou Fuxin 12-inch Analog Integrated Circuit Chip Production Line Project (Phase I) Plant Secondary Distribution/Hookup Engineering General Contracting Project PCW/CW/PV System Professional Subcontracting</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Electronic Grade Isopropanol Filling System Equipment Installation Project</td>
      </tr>

<tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.12</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">CN-2 Project Filling Station New Analytical Instrument Piping Works</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hangzhou Jihai 4K Secondary Distribution Special Gas Hook-Up Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Quzhou Hyosung VC3 PROJECT - HVAC & Clean Room Panel Installation</td>
      </tr>

<tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2023.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Hangzhou Fuxin Semiconductor Welding Engineering Installation</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2022.03</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;"> PCW/CW/PV system Hook up Design, Procurement, Installation, Testing, Acceptance, and Maintenance</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Quzhou Hyosung ISO Connector Replacement Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Guangzhou LG CO Factory Storage Container Installation Project</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.06</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Chemical Line set-up Chemical Engineering Line Construction Project - Chemical Piping Installation</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2020.09</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Guangzhou LGD CO Factory Additional Equipment Set-up</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Changsha HK Display Developer Concentration Control and Recovery System Installation Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">China Electronics Technology Group Corporation No.45 Research Institute CDS Liquid Supply Pipeline Project</td>
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
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Beijing Jidian SCO2 Pipeline VMB System Project - C1B Project Pipeline Installation</td>
      </tr>

    </table>
  `
},

"CN-42": {
  image: "../images/hubei.jpg",
  text: `
    <table style="width:100%; border-collapse: collapse;">

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.02</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">20,000 tons/year Electronic Grade Ammonia Water Co-production, 10,000 tons/year Electronic Grade Ammonia Gas Project High-Purity Metal Pipeline Installation Engineering</td>
      </tr>

      <tr>
        <td style="width:30%; vertical-align:top; padding-bottom:5px;">2024.07</td>
        <td style="width:70%; vertical-align:top; padding-bottom:5px;">Wuhan Xinxin XMC 12B Purification Room Expansion Project Installation</td>
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
            text: '&emsp;\n Zelenograd City, Kryukovo Intra-district, Moscow City'
        },
        futureBlock2: {
            img: 'assets/images/LOGO.png',
            text: '&emsp; \n 137 Gautam Buddha Nagar, Noida, Uttar Pradesh, India'
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