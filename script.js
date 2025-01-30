function extractNumbers() {
    let inputText = document.getElementById("inputText").value;
    
    // استخراج الأرقام السعودية بصيغتيها (+966 أو 05)
    let numbers = inputText.match(/\b(?:\+966|0)?5\d{8}\b/g);
    
    // عرض الأرقام المستخرجة أو رسالة في حالة عدم العثور على أرقام
    document.getElementById("output").textContent = numbers ? numbers.join("\n") : "لم يتم العثور على أرقام.";
}
