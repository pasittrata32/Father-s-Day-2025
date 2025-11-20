# คู่มือการเชื่อมต่อฐานข้อมูล Google Sheets

เอกสารนี้อธิบายขั้นตอนการสร้างฐานข้อมูลด้วย Google Sheets และการเขียน Google Apps Script เพื่อรับข้อมูลจากหน้าเว็บไซต์ (React)

## ขั้นตอนที่ 1: เตรียม Google Sheets

1. สร้าง **Google Sheet** ใหม่ที่ [sheets.google.com](https://sheets.google.com)
2. ใน **แถวที่ 1 (Row 1)** ให้สร้างหัวข้อคอลัมน์ (Header) ดังนี้:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Timestamp** | **Student Prefix** | **Student Name** | **Student Surname** | **Program** | **Level** | **Room** | **Parent Prefix** | **Parent Name** | **Parent Surname** | **Attending** | **Guests** | **Session** |

---

## ขั้นตอนที่ 2: สร้าง Google Apps Script (Back-end)

1. ใน Google Sheet ที่สร้างไว้ ไปที่เมนู **Extensions (ส่วนขยาย)** > **Apps Script**
2. ลบโค้ดเดิมในไฟล์ `Code.gs` ออกทั้งหมด
3. คัดลอกโค้ดด้านล่างไปวาง:

### Code.gs

```javascript
/**
 * ฟังก์ชันสำหรับรับข้อมูลผ่าน HTTP POST (จาก React)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // รอคิวการเขียนข้อมูลสูงสุด 10 วินาที

  try {
    // 1. เลือก Sheet ที่กำลังใช้งาน
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 2. แปลงข้อมูล JSON ที่ส่งมาจากเว็บไซต์
    // จำเป็นต้องใช้ e.postData.contents
    var data = JSON.parse(e.postData.contents);

    // 3. สร้างวันที่และเวลาปัจจุบัน
    var timestamp = new Date();

    // 4. จัดเรียงข้อมูลให้ตรงกับคอลัมน์ใน Sheet
    var rowData = [
      timestamp,                // A: Timestamp
      data.prefix,              // B: Student Prefix
      data.firstName,           // C: Student Name
      data.lastName,            // D: Student Surname
      data.studentProgram,      // E: Program
      data.level,               // F: Level
      data.room,                // G: Room
      data.parentPrefix,        // H: Parent Prefix
      data.parentFirstName,     // I: Parent Name
      data.parentLastName,      // J: Parent Surname
      data.isAttending,         // K: Attending (yes/no)
      data.guestCount,          // L: Guests
      data.program              // M: Session (Thai/English)
    ];

    // 5. เพิ่มข้อมูลต่อท้ายแถวสุดท้าย
    sheet.appendRow(rowData);

    // 6. ส่งค่าตอบกลับว่าสำเร็จ
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    // กรณีเกิดข้อผิดพลาด
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } finally {
    lock.releaseLock();
  }
}

/**
 * ฟังก์ชัน setup เบื้องต้น (แก้ปัญหา CORS preflight บางกรณี)
 */
function doGet(e) {
  return ContentService.createTextOutput("Service is running. Please use POST method to submit data.");
}
```

---

## ขั้นตอนที่ 3: การ Deploy (สำคัญมาก)

เพื่อให้เว็บไซต์ภายนอกสามารถส่งข้อมูลเข้ามาได้ ต้องทำการ Deploy เป็น Web App

1. กดปุ่ม **Deploy** (สีน้ำเงิน มุมขวาบน) > เลือก **New deployment**
2. คลิกที่ไอคอนฟันเฟือง (Select type) > เลือก **Web app**
3. ตั้งค่าดังนี้:
   - **Description**: `Version 1` (หรืออะไรก็ได้)
   - **Execute as**: `Me` (อีเมลของคุณ - สำคัญ)
   - **Who has access**: `Anyone` (ทุกคน) -> **สำคัญที่สุด!** ถ้าไม่เลือกอันนี้ React จะส่งข้อมูลไม่ได้
4. กด **Deploy**
5. คัดลอก **Web App URL** เก็บไว้ (URL จะยาวๆ ขึ้นต้นด้วย `https://script.google.com/macros/s/...`)

---

## ขั้นตอนที่ 4: การเชื่อมต่อกับ React (App.tsx)

ในไฟล์ `App.tsx` ให้แก้ไขฟังก์ชัน `handleFormSubmit` ดังนี้:

```typescript
const handleFormSubmit = async (data: FormData) => {
  // 1. ใส่ URL ที่ได้จากการ Deploy ขั้นตอนที่ 3
  const GOOGLE_SCRIPT_URL = "วาง_URL_ของคุณที่นี่";

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      // ใช้ text/plain เพื่อหลีกเลี่ยงปัญหา CORS Preflight ใน Google Apps Script
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
    });

    setShowSuccess(true);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง");
  }
};
```
