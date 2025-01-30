function extractNumbers() {
    let inputText = document.getElementById("inputText").value;
    
    // استخراج جميع الأرقام التي تبدأ بـ +966 أو 966 أو 05
    let numbers = inputText.match(/\b(?:\+?966|0)5\d{8}\b/g);
    
    // إزالة التكرارات إن وجدت
    let uniqueNumbers = numbers ? [...new Set(numbers)] : [];

    // عرض الأرقام المستخرجة أو رسالة في حالة عدم العثور على أرقام
    document.getElementById("output").textContent = uniqueNumbers.length > 0 ? uniqueNumbers.join("\n") : "لم يتم العثور على أرقام.";
}

function copyToClipboard() {
    let outputText = document.getElementById("output").textContent.trim();

    if (outputText === "" || outputText === "لم يتم العثور على أرقام.") {
        alert("⚠️ لا توجد أرقام لنسخها!");
        return;
    }

    // استخدام Clipboard API لضمان النسخ بطريقة موثوقة
    navigator.clipboard.writeText(outputText).then(() => {
        alert("✅ تم نسخ الأرقام إلى الحافظة!");
    }).catch(err => {
        console.error("خطأ أثناء النسخ:", err);
        alert("❌ لم يتم النسخ، الرجاء المحاولة مرة أخرى!");
    });
}
