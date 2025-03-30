// Elements
const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");
const body = document.body;

// Language Data
const menuData = {
    en: {
        product1name: "Single Standard Bedrooms",
        product1desc: "Durable standard single bed for one person, ideal for bedrooms or rest areas",
        product1price: " Price: ETB 900.00",
        product2name: "Double Standard King-Size Bedrooms",
        product2desc: "Durable king-size bed for two, crafted with quality materials. Ideal for bedrooms or large families. ",
        product2price: "Price: ETB 1,000.00",
        product3name: "Twin Bed Room",
        product3desc: "The Twin Bed Room offers a comfortable and spacious stay, ideal for two guests ",
        product3price: "Price: ETB 1,500.00"
    },
    am: {
        product1name: "መደበኛ ነጠላ አልጋ",
        product1desc: "ይህ መደበኛ ነጠላ አልጋ ለአንድ ሰው የተዘጋጀ ሲሆን፣ ጠንካራ ቁሳቁሶች በመጠቀም የተሰራ እና ለእረፍት ክፍሎች ተስማሚ ነው።",
        product1price: " 900.00 ብር",
        product2name: "መደበኛ ድርብ (ንግ ሳይዝ አልጋ)",
        product2desc: "ይህ የሁለት ሰዎች የተቀየሰ እና ጠንካራ ቁሳቁሶች የተሰራ ድርብ ኪንግ ሳይዝ አልጋ ለመኝታ ክፍሎች ወይም ትላልቅ ቤተሰቦች ተስማሚ ነው።",
        product2price: "1000.00 ብር",
        product3name: "መደበኛ ድርብ (ንግ ሳይዝ አልጋ)",
        product3desc: "ይህ የሁለት ሰዎች የተቀየሰ እና ጠንካራ ቁሳቁሶች የተሰራ ድርብ ኪንግ ሳይዝ አልጋ ለመኝታ ክፍሎች ወይም ትላልቅ ቤተሰቦች ተስማሚ ነው።",
        product3price: "1500.00 ብር"
    }
};


// Load Language Preference
function loadLanguage(lang) {
    document.getElementById("product1-name").textContent = menuData[lang].product1name;
    document.getElementById("product1-desc").textContent = menuData[lang].product1desc;
    document.getElementById("product1-price").textContent = menuData[lang].product1price;

    document.getElementById("product2-name").textContent = menuData[lang].product2name;
    document.getElementById("product2-desc").textContent = menuData[lang].product2desc;
    document.getElementById("product2-price").textContent = menuData[lang].product2price;
   
    document.getElementById("product3-name").textContent = menuData[lang].product3name;
    document.getElementById("product3-desc").textContent = menuData[lang].product3desc;
    document.getElementById("product3-price").textContent = menuData[lang].product3price;
    localStorage.setItem("language", lang);
}

// Change Language Event
languageSelect.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️"; // Sun icon
        themeToggle.classList.add("sun-color"); // Add a class to change color
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = "☀️"; // Change to sun icon
            themeToggle.classList.add("sun-color"); // Apply color change
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = "🌙"; // Change to moon icon
            themeToggle.classList.remove("sun-color"); // Remove color change
        }
    });
});

// Load Saved Preferences
const savedLang = localStorage.getItem("language") || "en";
languageSelect.value = savedLang;
loadLanguage(savedLang);
// Generate QR code for the menu URL
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://lem-hotel-qr-room.vercel.app/", // Replace with your actual URL
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
