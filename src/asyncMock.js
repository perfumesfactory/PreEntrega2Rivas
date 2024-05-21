const products = [
    {
      id: 1,
      category: "Tarjeta_Madre",
      title: "ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)",
      price: "159.99",
      description: "Experience next-level performance and connectivity with the ROG Strix B550-F Gaming, featuring PCIe 4.0 and 2.5Gb Ethernet. Robust power and effective cooling make the ROG Strix B550-F Gaming the perfect partner for 3rd Gen AMD Ryzen CPUs. ROG Strix B550-F Gaming has two M.2 slots, including the latest PCIe 4.0, to provide maximum storage flexibility and the fastest data speeds available via the 3rd Gen AMD Ryzen platform. Both M.2 slots support up to the type 22110 socket and NVM Express RAID for a performance boost.",
      image: "1.jpg",
    },
    {
      id: 2,
      category: "Tarjeta_Madre",
      title: "MSI B760 Gaming Plus WiFi Gaming Motherboard (Supports 12th/13th/14th Gen Intel Processors, LGA 1700, DDR5, PCIe 4.0, M.2, 2.5Gbps LAN, USB 3.2 Gen2, HDMI/DP, Wi-Fi 6E, Bluetooth 5.3, ATX)",
      price: "159.99",
      description: "The PRO Series is tailored to professionals from all walks of life. The lineup features impressive performance and high quality, while aiming to provide users incredible experience. Users who care about productivity and efficiency can definitely count on the MSI PRO Series to assist you with multitasking and increasing efficiency. The PRO Series is tailored to professionals from all walks of life. The lineup features impressive performance and high quality, while aiming to provide users incredible experience.",
      image: "2.jpg",
    },
    {
      id: 3,
      category: "Tarjeta_Madre",
      title: "MSI B550 Gaming GEN3 Gaming Motherboard (AMD Ryzen 5000 Series, AM4, DDR4, PCIe 3.0, SATA 6Gb/s, M.2, USB 3.2 Gen 1, HDMI/DVI-Port, ATX)",
      price: "99.99",
      description: "MSI motherboards let you manage speeds and temperatures for all your system and CPU fans. Total Fan Control allows you check your primary system characteristics in a simplified graphical interface. You can also set up to 4 temperature targets for CPU and motherboard, which will adjust the fan speeds automatically. MSI B550 motherboards support all the latest storage standards, which allows users to connect any ultra-fast storage device. Higher efficiency makes your work easier.",
      image: "3.jpg",
    },
    {
      id: 4,
      category: "Tarjeta_Madre",
      title: "Gigabyte B550 Gaming X V2 (AMD Ryzen 5000/B550/ATX/M.2/HDMI/DVI/USB 3.1 Gen 2/DDR4/ATX/Gaming Motherboard)",
      price: "92.99",
      description: "Supports AMD 3rd Gen Ryzen and 3rd Gen Ryzen with Radeon Graphics Processors Dual Channel ECC/ Non-ECC Unbuffered DDR4, 4 DIMMs 10+3 Phases Digital Twin Power Design with Low RDS(on) MOSFETs Ultra Durable PCIe 4.0 Ready x16 Slot Dual Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 Connectors GIGABYTE Exclusive 8118 Gaming LAN with Bandwidth Management Front USB 3.2 Gen1 Type-C and HDMI & DVI-D for Multiple Display High Quality Audio Capacitors and Audio Noise Guard for Ultimate Audio Quality RGB FUSION 2.0 support Addressable LED & RGB LED.",
      image: "4.jpg",
    }, 
    {
      id: 9,
      category: "Tarjeta_Grafica",
      title: "MSI Gaming GeForce RTX 3060 12GB 15 Gbps GDRR6 192-Bit HDMI/DP PCIe 4 Torx Twin Fan Ampere OC Graphics Card",
      price: "276.48",
      description: "The GeForce RTX 3060 lets you take on the latest games using the power of Ampere, NVIDIA's 2nd generation RTX architecture. Get incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory. The GeForce RTX 3060 lets you take on the latest games using the power of Ampere, NVIDIA's 2nd generation RTX architecture",
      image: "9.jpg",
    },
    {
      id: 10,
      category: "Tarjeta_Grafica",
      title: "GIGABYTE GeForce RTX 3060 Gaming OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060GAMING OC-12GD Video Card",
      price: "266.79",
      description: "GIGABYTE offers a comprehensive product lineup that aims to “Upgrade Your Life.” With expertise encompassing consumer, business, gaming, and cloud systems, GIGABYTE established its reputation as one of the leaders in the industry with products including motherboards, graphics cards, laptops, mini PCs, monitors, and other PC components and accessories.",
      image: "10.jpg",
    },
    {
      id: 13,
      category: "Tarjeta_Grafica",
      title: "GIGABYTE GeForce RTX 4060 Gaming OC 8G Graphics Card, 3X WINDFORCE Fans, 8GB 128-bit GDDR6, GV-N4060GAMING OC-8GD Video Card",
      price: "297.59",
      description: "Powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace architechture, and full ray tracing 4th Generation Tensor Cores: Up to 4x performance with DLSS 3 3rd Generation RT Cores: Up to 2x ray tracing performance Powered by GeForce RTX 4060 Integrated with 8GB GDDR6 128-bit memory interface WINDFORCE Cooling System, RGB Fusion, Dual BIOS, Protection metal back plate. Ahead of its time, ahead of the game is the GIGABYTE GeForce RTX 4060 GAMING OC 8G Graphics Cards.",
      image: "13.jpg",
    },
    {
      id: 16,
      category: "Tarjeta_Grafica",
      title: "GIGABYTE Radeon RX 7900 GRE Gaming OC 16G Graphics Card, 3X WINDFORCE Fans 16GB 256-bit GDDR6, GV-R79GREGAMING OC-16GD Video Card",
      price: "539.05",
      description: "The most advanced GPU for gamers is here - the Radeon RX 7900 GRE GAMING OC 16G Graphics Cards. Experience unprecedented performance, visuals, and power efficiency at 4K and beyond with AMD Radeon RX 7000 Series graphics cards, the world's first gaming GPUs powered by AMD RDNA 3 technology. The most advanced GPU for gamers is here - the Radeon RX 7900 GRE GAMING OC 16G Graphics Cards",
      image: "16.jpg",
    },
    {
      id: 17,
      category: "Procesador",
      title: "Intel Core i7-12700KF Gaming Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked LGA1700 600 Series Chipset 125W",
      price: "221.61",
      description: "Intel® Processors for All That You Do. Intel sets the industry standard for processor innovation and performance, powering laptops, desktops, workstations and servers-for business and personal use, immersive gaming, content creation, IoT, Artificial Intelligence, and more. Explore the range of options here.Chipset Compatibility: Find compatible motherboards by accessing the Intel® Product Compatibility Tool, click Desktop and Workstation Processors , and choose the processor to find available compatible motherboards and other related information. ",
      image: "17.jpg",
    },
    {
      id: 19,
      category: "Procesador",
      title: "Intel® Core™ i9-14900KF New Gaming Desktop Processor 24 cores (8 P-cores + 16 E-cores) - Unlocked",
      price: "511.77",
      description: "Intel® Core™ i9-14900KF desktop processor, without processor graphics. Featuring Intel® Thermal Velocity Boost, Intel® Turbo Boost Max Technology 3.0 Frequency, PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, unlocked Intel® Core™ i9 desktop processors are optimized for enthusiast gamers and serious creators to help deliver high performance. Compatible with Intel® 700 Series and Intel® 600 Series (with potential BIOS update) chipset-based motherboards. 125W Processor Base Power.",
      image: "19.jpg",
    },
    {
      id: 21,
      category: "Procesador",
      title: "AMD Ryzen 7 5700X 8-Core, 16-Thread Unlocked Desktop Processor",
      price: "168.00",
      description: "Can deliver ultra-fast 100 plus FPS performance in the world's most popular games, discrete graphics card required. 8 Cores and 16 processing threads, based on AMD Zen 3 architecture. 4.6 GHz Max Boost, unlocked for overclocking, 36 MB cache, DDR4-3200 support. For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards. Cooler not included . Max. Operating Temperature (Tjmax) 90°C",
      image: "21.jpg",
    },
    {
      id: 24,
      category: "Procesador",
      title: "AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor",
      price: "277.98",
      description: "Be unstoppable with the unprecedented speed of the world’s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you’re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you’re always in the lead. A fast and easy way to expand and accelerate the storage in a desktop PC with an AMD Ryzen™ processor.",
      image: "24.jpg",
    },
    {
      id: 25,
      category: "Memoria_RAM",
      title: "Corsair VENGEANCE RGB PRO DDR4 32GB (2x16GB) 3200MHz CL16 Intel XMP 2.0 iCUE Compatible Computer Memory - Black (CMW32GX4M2E3200C16)",
      price: "89.99",
      description: "CORSAIR VENGEANCE RGB PRO Series DDR4 memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance and stability. Every module boasts ten individually controlled RGB LEDs, while wire-free design makes installation simple. Take control with CORSAIR iCUE software and completely customize every module’s lighting to match your system, or easily synchronize lighting across all your CORSAIR products with Light LINK.",
      image: "25.jpg",
    },
    {
      id: 27,
      category: "Memoria_RAM",
      title: "Silicon Power DDR4 32GB (2x16GB) Turbine 3200MHz (PC4 25600) 288-pin CL16 1.35V UDIMM Desktop Memory Module RAM - Low Voltage (SP032GXLZU320BDA)",
      price: "50.99",
      description: "Silicon Power DDR4 UDIMM is compatible with the Intel Haswell-E platform and X99 series motherboards as well as with the Intel Skylake platform and 100 series motherboards. It enables higher performance and stability for advanced gamers, multimedia pros and DIY enthusiasts and lets you experience super-fast data transfer rates with 17GB/s of bandwidth, which is 33% faster than DDR3-1600.",
      image: "27.jpg",
    },
    {
      id: 28,
      category: "Memoria_RAM",
      title: "CORSAIR VENGEANCE DDR5 RAM 64GB (2x32GB) 5200MHz CL40 Intel XMP iCUE Compatible Computer Memory - Black (CMK64GX5M2B5200C40)",
      price: "159.99",
      description: "CORSAIR VENGEANCE DDR5, optimized for Intel® motherboards, delivers the higher frequencies and greater capacities of DDR5 technology in a high-quality, compact module that suits your system. Tightly-screened high-frequency memory chips power your PC through faster processing, rendering, and buffering than ever, with onboard voltage regulation for easy, finely controlled overclocking. CORSAIR iCUE software enables real-time frequency monitoring, onboard voltage regulation, and Intel XMP 3.0 profile customization.",
      image: "28.jpg",
    },
    {
      id: 29,
      category: "Memoria_RAM",
      title: "Patriot Viper Steel RGB DDR4 RAM 16GB (2X8GB) 3600MHz CL20 UDIMM Desktop Gaming Memory Kit - PVSR416G360C0K",
      price: "48.99",
      description: "Capacity: 16GB (2 x 8GB) 3600MHz DDR4 Kit. Compatibility: Tested across the latest Intel and AMD platforms for reliably fast performance. Feature Overclock: XMP 2.0 Support for Automatic Overclocking. RGB: Compatible with ASUS Aura Sync/ASROCK POLYCHROME SYNC/MSI Mystic Light/Gigabyte RGB Fusion motherboard apps to add striking customization to your PC Edition: Black headshield sides with golden Viper logo & Lightbar on top",
      image: "29.jpg",
    },
    {
      id: 35,
      category: "Case",
      title: "Antec NX410 ATX Mid-Tower Case, Tempered Glass Side Panel, Full Side View, Pre-Installed 2 x 140mm in Front & 1 x 120 mm ARGB Fans in Rear (White) (9734088000)",
      price: "69.00",
      description: "3 ARGB Fans Included : 2 x 140 mm ARGB fan in front & 1 x 120 mm ARGB fan in rear. Tempered Glass Side Panel : Tempered Glass Side Panel can enjoy the simple and clean white appearance without losing the gorgeous RGB effect which inside your rig. High Efficiency Cooling Design : 2 x 140mm ARGB fan which installed in front of the case, effectively drive the air convection to achieve awesome cooling effect for your rig.",
      image: "35.jpg",
    },
    {
      id: 36,
      category: "Case",
      title: "Bgears b-Optillusion Gaming PC ATX case, Special Optical Illusion ARGB Front Panel, Tempered Glass Side. USB3.0, Support up to EATX Motherboard. Fan Not Included.",
      price: "57.99",
      description: "Mesmerizing Optical Illusion effect Front ARGB Panel. Tinted Tempered Glass Side window. Massive Airflow design can install up to 8 fans. Support E-ATX/ATX/Micro-ATX/ITX, Support WaterCooling: Front 240mm or 360mm, Top-240mm or 280mm, Rear-120mm. Top Magnetic washable Dust Filter. For Front Panel LED Connection Guide, please check website",
      image: "36.jpg",
    },
    {
      id: 38,
      category: "Case",
      title: "Thermaltake View 200 TG Snow ARGB Motherboard Sync ATX Tempered Glass Mid Tower Computer Case with 3x120mm Front ARGB Fan, CA-1X3-00M6WN-00",
      price: "79.99",
      description: "View 200 TG ARGB Snow Mid Tower Chassis is an ATX case that comes with three preinstalled hydraulic bearing 120mm ARGB Lite front fans, and its RGB lighting is visible through its uniquely designed tempered glass front panel. Its RGB lighting can be controlled by motherboard software from ASUS, GIGABYTE, MSI, and ASRock. Moreover, up to six 120mm fans.",
      image: "38.jpg",
    },
    {
      id: 39,
      category: "Case",
      title: "PC Case ATX Pre-Install 4x120mm RGB Fans(Fix Color), ATX Gaming PC Case, USB 3.0 Tempered Glass Mid Tower Computer Case, Black,R7",
      price: "62.99",
      description: "Cost-effective PC Case -- MOROVOL R7 comes pre-installed with four fix color RGB fans; the gaming case is equipped with two pieces of tempered glass, high light transmission performance can showcase the cool lights of the case; the mid tower case can adapt to the needs of different players' PC components. 4 Fix Color RGB Fans - The R7 pc case is pre-installed with 4 RGB 120mm case fans.",
      image: "39.jpg",
    },
    {
      id: 42,
      category: "Fuente_de_Poder",
      title: "MSI MAG A850GL PCIE 5 & ATX 3.0 Gaming Power Supply - Full Modular - 80 Plus Gold Certified 850W - Compact Size - ATX PSU",
      price: "108.49",
      description: "MSI MAG A850GL PCIE 5 Gaming Power Supply - Full Modular - 80 PLUS Gold Certified 850W - Compact Size - ATX PSU. MSI MAG A850GL PCIE 5 Gaming Power Supply - Full Modular - 80 PLUS Gold Certified 850W - Compact Size - ATX PSU. MSI MAG A850GL PCIE 5 Gaming Power Supply - Full Modular - 80 PLUS Gold Certified 850W - Compact Size - ATX PSU",
      image: "42.jpg",
    },
    {
      id: 43,
      category: "Fuente_de_Poder",
      title: "Thermaltake Smart BX1 750W Bronze SLI/Crossfire Ready Continuous Power ATX12V V2.3/ EPS V2.92 80 Plus Bronze Certified 5 Year Warranty Non Modular Power Supply PS-SPD-0750NNFABU-1",
      price: "69.99",
      description: "Built to deliver 80 Plus Bronze with 88% power efficiency, The smart BX1 series is available in 450W - 750W models. Constructed with a 120mm hydraulic bearing fan, Japanese main capacitor and other premium components to help deliver a continuous and stable power output at 40℃, Near silent operation and reliable performance. With an ample 5-year , The smart BX1 is able to satisfy the market, where value-oriented users are looking for a new power Supply with all the latest features.",
      image: "43.jpg",
    },
    {
      id: 46,
      category: "Fuente_de_Poder",
      title: "Segotep 750W Power Supply, 80 Plus Gold Full Modular PCIe 5.0 & ATX 3.0 Gaming PSU for NVIDIA RTX 20/30/40 Series & AMD GPU, 120mm Silent FDB Fan, 5 Year Warranty",
      price: "79.99",
      description: "ATX 3.0 & PCIe 5.0 Ready: The PSU can hold up to 200% total power excursion & 300% GPU power excursion, it is more stable and secure than traditional ATX 3.0 power supply. 80 PLUS GOLD Certified: The 750 Watt Power Supply 80 Plus Gold provides ultra-high power efficiency of 91.8% at typical load, reducing heat in your computer's system and prolonging its life.",
      image: "46.jpg",
    },
    {
      id: 47,
      category: "Fuente_de_Poder",
      title: "MSI MAG A650BN Gaming Power Supply - 80 Plus Bronze Certified 650W - Compact Size - ATX PSU",
      price: "59.99",
      description: "MSI MAG A650BN Gaming Power Supply - 80 PLUS Bronze Certified 550W - Compact Size - ATX PSU. MSI MAG A650BN Gaming Power Supply - 80 PLUS Bronze Certified 550W - Compact Size - ATX PSU. MSI MAG A650BN Gaming Power Supply - 80 PLUS Bronze Certified 550W - Compact Size - ATX PSU. MSI MAG A650BN Gaming Power Supply - 80 PLUS Bronze Certified 550W - Compact Size - ATX PSU",
      image: "47.jpg",
    },
    
    {
      id: 53,
      category: "Disco_Duro",
      title: "FX815 512GB SSD 3D NAND 2.5 inch SATA III Internal Solid State Drive (SSD) - 6 Gb/s, Up to 560 MB/s for Laptop and Desktop Updating -SSD Hard Drive",
      price: "29.99",
      description: "Upgrade your laptop or desktop computer and feel the difference with super-fast operating system boot times and quick application loads. This SSD offers superior performance compared to traditional hard drives (HDD) and is perfect for gaming, delivering enhanced performance for seamless cutscenes. The 7mm slim design of the Fikwot FX815 makes it suitable for Ultrabooks and Ultra-slim notebooks. Its large capacity options ranging from 256GB to 2TB cater to various storage needs, whether it be for office documents, entertainment files, or multimedia content.",
      image: "53.jpg",
    },
    {
      id: 54,
      category: "Disco_Duro",
      title: "Patriot Memory Burst Elite SATA 3 480GB SSD 2.5 Inch Solid State Drive",
      price: "28.99",
      description: "Amazon.com Return Policy:You may return any new computer purchased from Amazon.com that is arrives in damaged condition, or is still in unopened boxes, for a full refund within 30 days of purchase. Amazon.com reserves the right to test returns and impose a customer fee equal to 15 percent of the product sales price if the customer misrepresents the condition of the product. Any returned computer that is damaged through customer misuse, is missing parts, or is in unsellable condition due to customer tampering will result in the customer being charged a higher restocking fee based on the condition of the product.",
      image: "54.jpg",
    },
    {
      id: 55,
      category: "Disco_Duro",
      title: "Crucial T500 1TB Gen4 NVMe M.2 Internal Gaming SSD with Heatsink, Up to 7300MB/s, Playstation 5 Compatible + 1mo Adobe CC All Apps- CT1000T500SSD5",
      price: "89.99",
      description: "Gaming speed claims based on Micron test results measuring Forspoken Benchmark, Call of Duty and Valorant bootup times of the Crucial T500 and other Gen4 SSDs. Your performance may vary.Typical I/O performance as measured using CrystalDiskMark with default settings for NVMe SSDs and write cache enabled. Windows 11 Core isolation disabled for performance measurement. Fresh out-of-box (FOB) state is assumed. For performance measurement purposes, the SSD may be restored to FOB state using the secure erase command. System variations will affect measured results. Some of the storage capacity is used for formatting and other purposes and is not available for data storage.",
      image: "55.jpg",
    },
    {
      id: 56,
      category: "Disco_Duro",
      title: "Western Digital WD_BLACK 2TB SN770 NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 5,150 MB/s - WDS200T3X0E",
      price: "139.46",
      description: "Get ready to game even faster with the WD_BLACK SN770 NVMe SSD. Zoom past load times and get into the action now with a purpose-built gaming drive that boasts up to 40% faster performance and up to 20% more power efficiency at maximum speed over the previous generation(3) (1TB model), plus a PCIe Gen4 interface(4) that delivers blazing speeds of up to 5,150MB/s(1) (1TB and 2TB models).​ (1)Based on read speed. 1 MB/s = 1 million bytes per second. Based on internal testing",
      image: "56.jpg",
    },
    
    {
      id: 61,
      category: "Periferico",
      title: "Redragon K673 PRO 75% Wireless Gasket RGB Gaming Keyboard, 3-Modes 81 Keys Compact Mechanical Keyboard Hot-Swap Socket, Dedicated Knob Control and Sound Absorbing Pads, Linear Red Switch",
      price: "51.99",
      description: "The body structure differs from traditional screw fixing by using precision-locked covers with gaskets to assist with noise reduction and flexibility. It provides even feedback while the vertical cushioning reduces rigid noise, delivering a crisp, clean and softer typing feel.",
      image: "61.jpg",
    },
    {
      id: 62,
      category: "Periferico",
      title: "NPET K10V1 Wired Computer Keyboard, Plug and Play, Full-Size with 12 Multimedia Keys, Spill-Resistant, 6.2ft USB Cable, Compatible with PC, Laptop (Black)",
      price: "11.99",
      description: "Easy to Set-up and Use: Set-up couldn't be easier, you plug in this corded keyboard via USB on your desktop or laptop and start using it immediately without any software installation. Full-Size Keyboard: Offers 104 keys, including FN+F1-F12 multimedia keys, 5ft USB cable, and a number keypad.",
      image: "62.jpg",
    },
    {
      id: 63,
      category: "Periferico",
      title: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design, Multimedia Keys, Quiet Silent USB Membrane Keyboard for Desktop, Computer, PC (Black)",
      price: "23.99",
      description: "IP32 Spill Resistance: With durable construction that repels liquids and dirt for easy cleanup. Capable of withstanding accidental spills. Adjustable feet let you set your keyboard to the ideal position, so it's comfortable to use even during the longest gaming sessions.",
      image: "63.jpg",
    },
    {
      id: 64,
      category: "Periferico",
      title: "RK ROYAL KLUDGE RK61 Wired 60% Mechanical Gaming Keyboard Programmable QMK/VIA RGB Backlit 61 Keys Ultra-Compact Hot Swappable Red Switch White",
      price: "49.97",
      description: "MINI 60% KEYBOARD--RK61 is a ultra-compact layout keyboard with 61 keys. Concentrated all the key functions you need in minimalist design. Save more space for your mouse moving and neat the desktop. It’s most FPS gamers' choice for this 60% gaming keyboard.",
      image: "64.jpg",
    },
    {
      id: 65,
      category: "Periferico",
      title: "Wired Gaming Mouse [Breathing RGB LED] [Plug Play] High-Precision Adjustable 7200 DPI, 7 Programmable Buttons, Ergonomic Computer USB Mice for Windows/PC/Mac/Laptop Gamer",
      price: "16.99",
      description: "16 million color options for the backlight setting make your gaming mouse look cool.The RGB lights is more vibrant than basic light up mice.Turn it off when you unwanted. Gaming mouse run flawlessly with optical sensor and avoids random clicks.adjust DPI 1200-7200,polling rate125-1000Hz to provide precise cursor movements for gameplay.",
      image: "65.jpg",
    },
    {
      id: 66,
      category: "Periferico",
      title: "TECKNET Wireless Mouse, 2.4G Ergonomic Optical Mouse, Computer Mouse for USB-A Laptop, PC, Computer, Chromebook, Notebook, 6 Buttons, 24 Months Battery Life - Purple",
      price: "9.99",
      description: "Compact Design, Travel Friendly - With the dimension of 4.09*1.88*1.49 in, this compact mouse provides more portability and a better travel experience. Only compatible with USB-A Port Devices. Ergonomic Design, Comfort Grip - The contoured shape of this mouse is ergonomically designed to fit the natural curve of your hand, ensuring lasting comfort and productivity. Featuring rubber side-grips, it offers added thumb support for a superior working experience.",
      image: "66.jpg",
    },
    {
      id: 67,
      category: "Periferico",
      title: "Logitech M510 Wireless Computer Mouse for PC with USB Unifying Receiver - Graphite",
      price: "23.20",
      description: "You’ve got the control to do more, faster. Flipping through photo albums and Web pages is a breeze, especially for right-handers—with three standard buttons plus Back/Forward buttons that you can also program to switch applications, go full screen and more. And side-to-side scrolling plus zoom gives you the power to scroll horizontally and vertically through your music library, maps and Facebook feeds, and zoom in and out of photos and budget spr",
      image: "67.jpg",
    },
    {
      id: 68,
      category: "Periferico",
      title: "T-DAGGER Wireless Gaming Mouse- USB Cordless PC Accessories Computer Mice with LED Backlit, Ergonomic Gamer Laptop Mouse with 7 Silent Buttons, 5 Adjustable DPI Plug & Play for PC",
      price: "16.99",
      description: "PC gaming mouse will make no noise when clicking left or right buttons, no worry for disturbing others. Suitable for public places such as office, library dormitory, cafe, etc. Our wireless mouse is tested for up to 5 million clicks. PC mouse for gaming provides a BLUE LED backlit, greatly matching your cool style and creating a great atmosphere to enhance your gaming fun. Besides, gaming mouse will make your gaming room more special, especially at night.(Light is disabled)",
      image: "68.jpg",
    },
    
    {
      id: 73,
      category: "Monitor",
      title: "SANSUI Computer Monitor 27 inch 165Hz 1ms PC Gaming Monitor -2 x HDMI 2.0丨1 x Display Port 1.4丨IPS丨FHD 1080P丨Adaptive Sync丨100% sRGB丨Blacklevel Adjust丨VESA Compatible,Black (ES-G27F2)",
      price: "119.99",
      description: "27 inch 165Hz Fast IPS Gaming Monitor | Adaptive Sync Technology. Refresh Rate: 165Hz | Response Time: 1ms (OD) | Display Color:16.7M(8bit)丨HDR Ready丨CrossHair/Timer/RTS/FPS/RACING Game Assistant. VESA Compatible (100 x 100mm) | Ergonomic Tilt: -5° to 15°丨178°V/H Viewing Angle丨Cable Managed Easy Mount Stand丨Flicker-Free",
      image: "73.jpg",
    },
    {
      id: 74,
      category: "Monitor",
      title: "KOORUI Monitor 21.5 Inch Gaming Monitor FHD 1080P/Full HD 100HZ PC Monitor VA Panel LCD Display with Speakers Adpitive sync (HDMI/VGA/VESA Compatible/Audio Terminal) S01",
      price: "69.99",
      description: "21.45 inches [Panel type] VA [Maximum resolution] FHD (1920x1080) [Aspect ratio] 16:9 [Contrast ratio] 3000:1 [Brightness] 250nit [Color gamut] 99% sRGB [Other features] Tilt angle Adjustable (up and down -5 to 20°), equipped with a speaker, you can enjoy the sound.",
      image: "74.jpg",
    },
    {
      id: 75,
      category: "Monitor",
      title: "Acer KB272 EBI 27 inch IPS Full HD (1920 x 1080) Zero-Frame Gaming Office Monitor | AMD FreeSync Technology | Up to 100Hz Refresh | 1ms (VRB) | Low Blue Light | Tilt | HDMI & VGA Ports,Black",
      price: "99.99",
      description: "In competitive gaming, every frame matters. Introducing Acer's KB272 gaming monitor - the Full HD resolution monitor that can keep up with your game play. Through AMD FreeSync technology, the game’s frame rate is determined by your graphics card, not the fixed refresh rate of the monitor, giving you a serious competitive edge.",
      image: "75.jpg",
    },
    {
      id: 76,
      category: "Monitor",
      title: "PHILIPS 22 inch Class Thin Full HD (1920 x 1080) Monitor, 100Hz Refresh Rate, VESA, HDMI x1, VGA x1, LowBlue Mode, Adaptive Sync, 4 Year Advance Replacement Warranty, 221V8LB",
      price: "69.99",
      description: "CRISP CLARITY: This 22 inch class (21.5″ viewable) Philips V line monitor delivers crisp Full HD 1920x1080 visuals. Enjoy movies, shows and videos with remarkable detail. 100HZ FAST REFRESH RATE: 100Hz brings your favorite movies and video games to life. Stream, binge, and play effortlessly. SMOOTH ACTION WITH ADAPTIVE-SYNC: Adaptive-Sync technology ensures fluid action sequences and rapid response time.",
      image: "76.jpg",
    },
  ];

  export const getProducts = new Promise((resolve) => {
      resolve(products);
  });

  export const getCategoryProducts = (categoryName) => {
    return products.filter((product) => product.category == categoryName)
  };
  
  export const getProduct = (productId) => {
    return products.find((prod) => prod.id == productId);
  };