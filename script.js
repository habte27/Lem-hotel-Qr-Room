// Elements
const languageSelect = document.getElementById("language-select");
const body = document.body;

// Language Data
const menuData = {
    en: {
        product1name: "Single Standard Bedroom",
        product1desc: "Enjoy our exclusive room service menu with delicious meals delivered to your door.",
        product1price: " Price: ETB 900.00",
        product2name: "Double Standard Bedroom",
        product2desc: "Enjoy our exclusive room service menu with delicious meals delivered to your door.",
        product2price: "Price: ETB 1,000.00",
        product3name: "Twin Bedroom",
        product3desc: "Enjoy our exclusive room service menu with delicious meals delivered to your door.",
        product3price: "Price: ETB 1,500.00"
    },
    am: {
        product1name: " በለ አንድ መደብ መኝታ ክፍል",
        product1desc: "በልዩ ክፍል አገልግሎታችን ወደ ክፍልዎ በሚመጡት ጣፋጭ ምግብ ይደሰቱ።",
        product1price: "ዋጋ: 900.00 ብር",
        product2name: "ድርብ ስታንዳርድ መኝታ ክፍል",
        product2desc: "በልዩ ክፍል አገልግሎታችን ወደ ክፍልዎ በሚመጡት ጣፋጭ ምግብ ይደሰቱ።",
        product2price: "ዋጋ: 1000.00 ብር",
        product3name: "በለ ሁለት መኝታ  ክፍል",
        product3desc: "በልዩ ክፍል አገልግሎታችን ወደ ክፍልዎ በሚመጡት ጣፋጭ ምግብ ይደሰቱ።",
        product3price: "ዋጋ: 1500.00 ብር"
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



