function extractNumbers() {
    let inputText = document.getElementById("inputText").value.trim();
    
    if (inputText === "") {
        alert("⚠️ الرجاء إدخال نص يحتوي على أرقام جوال.");
        return;
    }

    // استخراج جميع الأرقام السعودية التي تبدأ بـ +966 أو 966 أو 05
    let numbers = inputText.match(/\b(?:\+?966|0)5\d{8}\b/g);

    if (!numbers || numbers.length === 0) {
        alert("❌ لم يتم العثور على أرقام جوال في النص!");
        document.getElementById("output").textContent = "لم يتم العثور على أرقام.";
        return;
    }

    // إزالة التكرارات وعرض الأرقام
    let uniqueNumbers = [...new Set(numbers)];
    document.getElementById("output").textContent = uniqueNumbers.join("\n");

    console.log("📜 الأرقام المستخرجة:", uniqueNumbers);
}

function copyToClipboard() {
    let outputText = document.getElementById("output").textContent.trim();

    if (outputText === "" || outputText === "لم يتم العثور على أرقام.") {
        alert("⚠️ لا توجد أرقام لنسخها!");
        return;
    }

    // استخدام Clipboard API للنسخ
    navigator.clipboard.writeText(outputText).then(() => {
        alert("✅ تم نسخ الأرقام إلى الحافظة!");
    }).catch(err => {
        console.error("خطأ أثناء النسخ:", err);
        alert("❌ لم يتم النسخ، الرجاء المحاولة مرة أخرى!");
    });
}
