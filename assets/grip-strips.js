/* Transcribed from the Tecton Forge Phone Wing compatibility charts.
   colors are ordered thin to thick within each lid-profile group.
   A laptop's color is the recommended strip. Edit names here if a chart was misread. */
window.GRIP_STRIPS = {
  stripsPerWing: 4,
  manufacturers: ["Apple", "Dell", "HP", "Lenovo", "ASUS", "Acer", "Samsung", "Microsoft", "LG", "Gaming"],
  groups: {
    "1": { name: "Group 1", colors: ["Black", "Gray", "White", "Orange", "Red", "Green", "Blue"] },
    "2": { name: "Group 2", colors: ["Orange", "Green", "Blue", "Gray", "Black", "White", "Red"] }
  },
  laptops: [
    { manufacturer: "Apple", name: "MacBook Pro 16\"", detail: "2021+", group: 2, color: "Black", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Pro 14\"", detail: "2021+", group: 2, color: "Gray", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Neo 13\"", detail: "2026+", group: 2, color: "Gray", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Air 13\"", detail: "M2+ 2022+", group: 2, color: "Red", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Air 15\"", detail: "M2+ 2022+", group: 2, color: "Red", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Pro 13\" Retina", detail: "A1502", group: 2, color: "Black", chart: "/forge/apple/" },
    { manufacturer: "Apple", name: "MacBook Pro 13\"", detail: "A1708", group: 2, color: "Red", chart: "/forge/apple/" },

    { manufacturer: "Dell", name: "XPS Googlebook", detail: "13.4\" 2.5K Touchscreen", group: 2, color: "Gray", chart: "/forge/dell/" },
    { manufacturer: "Dell", name: "XPS", detail: "13.4\" & 14\" Touchscreen", group: 2, color: "Gray", chart: "/forge/dell/" },
    { manufacturer: "Dell", name: "15.6\"", detail: "2K Touchscreen", group: 1, color: "Red", chart: "/forge/dell/" },
    { manufacturer: "Dell", name: "15.3\"", detail: "2K Touchscreen", group: 1, color: "Green", chart: "/forge/dell/" },
    { manufacturer: "Dell", name: "16S, 14S", detail: "2K Touchscreen", group: 2, color: "Green", chart: "/forge/dell/" },

    { manufacturer: "HP", name: "Omnibook Ultra", detail: "14\" 3K OLED Touchscreen", group: 2, color: "Black", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook 5", detail: "14\" 2K OLED Touchscreen", group: 2, color: "Black", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook 3", detail: "17.3\" HD Laptop", group: 1, color: "Red", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook 3", detail: "14\" & 16\" 2K Touchscreen", group: 1, color: "Orange", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook 3", detail: "14\" OLED Laptop", group: 1, color: "Green", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Googlebook", detail: "14\" 3K OLED Touchscreen", group: 2, color: "Black", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook X", detail: "14\" 2K OLED Touchscreen", group: 2, color: "Orange", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook X", detail: "17.3\" Touchscreen Laptop", group: 1, color: "Orange", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook X", detail: "16\" 2K OLED Touchscreen", group: 1, color: "Green", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Omnibook X", detail: "Flip 2-in-1 16\" Touchscreen", group: 1, color: "Red", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Hyperx Omen", detail: "16\" 2K Gaming Laptop", group: 1, color: "Red", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Victus", detail: "15.6\" Gaming Laptop", group: 1, color: "Red", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Chromebook Plus", detail: "14\" 2K Touchscreen", group: 1, color: "Orange", chart: "/forge/hp/" },
    { manufacturer: "HP", name: "Chromebook Plus", detail: "2-in-1 14\" 2K Touchscreen", group: 1, color: "Gray", chart: "/forge/hp/" },

    { manufacturer: "Lenovo", name: "Yoga Slim 7X", detail: "14\" 2K OLED Touchscreen", group: 2, color: "White", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Yoga 9n, 9i", detail: "16\" & 14\" 2-in-1 3K OLED Touchscreen", group: 2, color: "Green", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Yoga 7a", detail: "14\" 2K OLED Touchscreen", group: 2, color: "Orange", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Yoga 7a", detail: "16\" 2K OLED Touchscreen", group: 1, color: "Green", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Yoga Pro 7i Aura Edition", detail: "15.3\" 3K OLED Laptop", group: 2, color: "White", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Yoga Pro 7a", detail: "15.3\" 3K OLED Touchscreen", group: 2, color: "Black", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Legion 7a", detail: "16\" 2.5K Gaming Laptop", group: 2, color: "Blue", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "IdeaPad Slim 3i", detail: "15.6\" HD Laptop, 15.3\" 2K Touchscreen", group: 1, color: "Orange", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "IdeaPad Slim 3", detail: "14\" 2K Touchscreen", group: 1, color: "Red", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "LOQ", detail: "15.6\" 2K Gaming Laptop", group: 1, color: "Red", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Googlebook", detail: "15.3\" 3K 120Hz OLED Touchscreen", group: 2, color: "Orange", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Chromebook Plus", detail: "15.3\" 2K Touchscreen", group: 1, color: "Orange", chart: "/forge/lenovo/" },
    { manufacturer: "Lenovo", name: "Chromebook Plus 2-in-1", detail: "14\" Full HD Touchscreen", group: 1, color: "Blue", chart: "/forge/lenovo/" },

    { manufacturer: "ASUS", name: "Zenbook 14", detail: "14\" 2K OLED Laptop", group: 2, color: "Blue", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "Zenbook 14", detail: "14\" 2K OLED Touchscreen", group: 2, color: "Orange", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "ProArt P16, P14", detail: "16\" & 14\" OLED Touchscreen", group: 2, color: "Red", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "ProArt PX13", detail: "13\" 3K OLED 2-in-1 Touchscreen", group: 2, color: "Gray", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "Vivobook Go 14", detail: "14\" 2K Laptop", group: 1, color: "Green", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "ROG Zephyrus G14", detail: "14\" OLED 3K Gaming Laptop", group: 2, color: "White", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "ROG Strix G18", detail: "18\" 2.5K 240Hz Gaming Laptop", group: 1, color: "Black", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "ROG Strix G16", detail: "16\" FHD 165Hz Gaming Laptop", group: 1, color: "Blue", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "Chromebook CX14", detail: "14\" FHD", group: 1, color: "Orange", chart: "/forge/asus/" },
    { manufacturer: "ASUS", name: "Chromebook Plus CX34", detail: "14\" FHD", group: 1, color: "Orange", chart: "/forge/asus/" },

    { manufacturer: "Acer", name: "Swift Air", detail: "14\" 2K LCD Laptop", group: 2, color: "Gray", chart: "/forge/acer/" },
    { manufacturer: "Acer", name: "Swift Go", detail: "16\" WUXGA Touchscreen", group: 2, color: "Green", chart: "/forge/acer/" },
    { manufacturer: "Acer", name: "Swift Go", detail: "16\" 2K OLED Laptop", group: 2, color: "Green", chart: "/forge/acer/" },
    { manufacturer: "Acer", name: "Nitro V", detail: "16\" WUXGA Gaming", group: 1, color: "Blue", chart: "/forge/acer/" },
    { manufacturer: "Acer", name: "Predator Neo", detail: "16\" Gaming Laptop", group: 2, color: "Orange", chart: "/forge/acer/" },
    { manufacturer: "Acer", name: "Chromebook (Plus)", detail: "516 16\", 315 15.6\" Laptops", group: 1, color: "Orange", chart: "/forge/acer/" },

    { manufacturer: "Samsung", name: "Galaxy Book 6", detail: "16\" Touchscreen IPS LED", group: 2, color: "Blue", chart: "/forge/samsung/" },
    { manufacturer: "Samsung", name: "Galaxy Book 4 Edge", detail: "15.6\" FHD IPS Laptop", group: 2, color: "Blue", chart: "/forge/samsung/" },

    { manufacturer: "Microsoft", name: "Surface Laptop Ultra", detail: "15\" 3K Touchscreen", group: 2, color: "Red", chart: "/forge/microsoft/" },
    { manufacturer: "Microsoft", name: "Surface Laptop", detail: "13.8\" 2K Touchscreen", group: 2, color: "Red", chart: "/forge/microsoft/" },
    { manufacturer: "Microsoft", name: "Surface Laptop", detail: "13\" 2K Touchscreen", group: 2, color: "Red", chart: "/forge/microsoft/" },
    { manufacturer: "Microsoft", name: "Surface Pro", detail: "12\" Touchscreen", group: 1, color: "White", chart: "/forge/microsoft/" },

    { manufacturer: "LG", name: "gram Max", detail: "17\" 2.5K WQXGA Touchscreen", group: 2, color: "Blue", chart: "/forge/lg/" },
    { manufacturer: "LG", name: "gram Book", detail: "16\" Touchscreen", group: 1, color: "Blue", chart: "/forge/lg/" },

    { manufacturer: "Gaming", name: "Alienware", detail: "15.3\" 2K Gaming Laptop", group: 1, color: "White", chart: "/forge/gaming/" },
    { manufacturer: "Gaming", name: "Gigabyte A16", detail: "165Hz 1920x1200 WUXGA Gaming", group: 1, color: "Orange", chart: "/forge/gaming/" },
    { manufacturer: "Gaming", name: "MSI Raider 16 HX", detail: "16\" 2.5K QHD 240Hz Gaming", group: 1, color: "Orange", chart: "/forge/gaming/" }
  ]
};
