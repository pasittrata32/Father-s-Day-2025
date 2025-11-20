import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  th: {
    to: "เรียน ผู้ปกครองนักเรียนระดับชั้นประถมศึกษา",
    para1: "ด้วยในวันพฤหัสบดีที่ 4 ธันวาคม 2568 โรงเรียนมีกำหนดจัดกิจกรรมวันพ่อแห่งชาติ ประจำปี 2568 ณ ห้องประชุมชั้น 5 อาคารเพ็ชรตระกูล 2 โดยภายในงานประกอบด้วยกิจกรรมเฉลิมพระเกียรติ พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร และกิจกรรมรำลึกถึงพระคุณพ่อของนักเรียนแต่ละระดับชั้น ดังนี้",
    scheduleTitle: "กำหนดการ",
    schedule: {
      thai: "ระดับชั้นประถมศึกษา Thai Programme",
      thaiTime: "เวลา 09.00 – 10.30 น.",
      eng: "ระดับชั้นประถมศึกษา English Programme",
      engTime: "เวลา 13.00 – 14.30 น.",
    },
    para2: "ในการนี้ขอเรียนเชิญคุณพ่อมาร่วม “กิจกรรมรำลึกถึงพระคุณพ่อ” ร่วมกับนักเรียนแต่ละระดับชั้น ตามวันและเวลาดังกล่าว",
    dressCode: "ทั้งนี้ขอเชิญชวนผู้เข้าร่วมกิจกรรมแต่งกายสุภาพด้วยเสื้อผ้าสีเหลืองติดเข็มกลัดไว้ทุกข์ไว้บริเวณอกด้านซ้าย",
    schoolClosed: "อนึ่งโรงเรียนปิดเรียน 1 วัน คือวันศุกร์ที่ 5 ธันวาคม 2568",
    onlineOnlyWarning: "หมายเหตุสำคัญ: ผู้ปกครองที่ประสงค์จะเข้าร่วมกิจกรรมต้องลงทะเบียนผ่านระบบออนไลน์เท่านั้น (ไม่มีการเปิดลงทะเบียนหน้างาน)",
    closing: "จึงเรียนมาเพื่อโปรดทราบ และตอบรับการเข้าร่วมกิจกรรมด้วยจักขอบคุณยิ่ง",
    signer: "นายวิศัลย์ เพ็ชรตระกูล",
    position: "ผู้แทนผู้รับใบอนุญาตโรงเรียนสาธิตอุดมศึกษา",
    
    formTitle: "แบบตอบรับเข้าร่วมกิจกรรม",
    deadline: "กรุณาส่งแบบตอบรับภายในวันที่ 24 พฤศจิกายน 2568",
    
    prefixLabel: "คำนำหน้า",
    firstNameLabel: "ชื่อ",
    lastNameLabel: "นามสกุล",
    stdProgramLabel: "โปรแกรมการเรียน",
    levelLabel: "ระดับชั้น",
    roomLabel: "ห้อง",
    
    parentSectionTitle: "ข้อมูลผู้ปกครอง",
    parentPrefixLabel: "คำนำหน้า",
    parentFirstNameLabel: "ชื่อ",
    parentLastNameLabel: "นามสกุล",
    
    prefixOptions: ["เด็กชาย", "เด็กหญิง"],
    parentPrefixOptions: ["นาย", "นาง", "นางสาว"],
    stdProgramOptions: ["Thai Program", "English Program"],
    levelOptions: ["ป.1", "ป.2", "ป.3", "ป.4", "ป.5", "ป.6"],
    roomOptions: ["A", "B"],

    attendanceLabel: "ความประสงค์เข้าร่วมกิจกรรม",
    optionYes: "ยินดีเข้าร่วมกิจกรรม",
    optionNo: "ไม่สามารถเข้าร่วมกิจกรรมได้",
    guestCountLabel: "จำนวนผู้ปกครองที่เข้าร่วม (คน)",
    programLabel: "เลือกรอบกิจกรรม",
    submitButton: "บันทึกข้อมูล",
    
    successTitle: "บันทึกข้อมูลสำเร็จ",
    successMessage: "ขอบคุณสำหรับความร่วมมือ ข้อมูลของท่านถูกบันทึกเรียบร้อยแล้ว",
    closeButton: "ปิดหน้าต่าง"
  },
  en: {
    to: "To: Parents and Guardians of Primary Students",
    para1: "On Thursday, 4 December 2025, the school will hold the Father’s Day Celebration 2025 at the Assembly Hall, 5th Floor, Phettrakul 2 Building. The event consists of a tribute ceremony in honor of His Majesty King Bhumibol Adulyadej the Great and an activity for students of each grade level to express gratitude to their fathers.",
    scheduleTitle: "Schedule",
    schedule: {
      thai: "Primary Level – Thai Programme",
      thaiTime: "09:00 – 10:30 a.m.",
      eng: "Primary Level – English Programme",
      engTime: "01:00 – 02:30 p.m.",
    },
    para2: "We would like to cordially invite all fathers to join the “Gratitude to Fathers Activity” with students in each grade level on the date and time mentioned above.",
    dressCode: "Participants are kindly requested to dress respectfully in yellow attire and wear a mourning pin on the left chest.",
    schoolClosed: "Please be informed that the school will be closed for one day on Friday, 5th December 2025.",
    onlineOnlyWarning: "Important Note: Parents wishing to attend must register online only. No on-site registration will be available.",
    closing: "We sincerely hope you will be able to join us and kindly request your confirmation of attendance.",
    signer: "Mr. Visal Phettrakul",
    position: "School Licensee Representative",
    
    formTitle: "Confirmation Return Slip",
    deadline: "Please return by Monday 24th November 2025",
    
    prefixLabel: "Prefix",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    stdProgramLabel: "Program",
    levelLabel: "Level",
    roomLabel: "Room",

    parentSectionTitle: "Parent Information",
    parentPrefixLabel: "Prefix",
    parentFirstNameLabel: "First Name",
    parentLastNameLabel: "Last Name",

    prefixOptions: ["Master", "Miss"],
    parentPrefixOptions: ["Mr.", "Mrs.", "Ms."],
    stdProgramOptions: ["Thai Program", "English Program"],
    levelOptions: ["P.1", "P.2", "P.3", "P.4", "P.5", "P.6"],
    roomOptions: ["A", "B"],

    attendanceLabel: "Attendance",
    optionYes: "Yes, I will attend the ceremony",
    optionNo: "No, I cannot attend",
    guestCountLabel: "Number of Attendees",
    programLabel: "Select Programme Session",
    submitButton: "Submit Confirmation",
    
    successTitle: "Submission Successful",
    successMessage: "Thank you for your confirmation. Your response has been recorded.",
    closeButton: "Close"
  }
};