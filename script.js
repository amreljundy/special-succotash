function copyToClipboard() {
    let outputText = document.getElementById("output").textContent.trim();

    if (outputText === "" || outputText === "لم يتم العثور على أرقام.") {
        alert("⚠️ لا توجد أرقام لنسخها!");
        return;
    }

    // إنشاء عنصر مؤقت لنسخ النص
    let tempTextArea = document.createElement("textarea");
    tempTextArea.style.position = "absolute";
    tempTextArea.style.left = "-9999px"; // إخفاء العنصر
    tempTextArea.value = outputText;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // دعم للهواتف المحمولة
    document.execCommand("copy"); // تنفيذ النسخ
    document.body.removeChild(tempTextArea); // إزالة العنصر بعد النسخ

    alert("✅ تم نسخ الأرقام إلى الحافظة!");
}
