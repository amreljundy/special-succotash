function copyToClipboard() {
    let outputText = document.getElementById("output").textContent;
    
    if (outputText.trim() === "لم يتم العثور على أرقام." || outputText.trim() === "") {
        alert("لا توجد أرقام لنسخها!");
        return;
    }
    
    // إنشاء عنصر مؤقت لنسخ النص
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = outputText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    
    alert("📋 تم نسخ الأرقام بنجاح!");
}
