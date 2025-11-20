export type Language = 'th' | 'en';

export interface ContentData {
  to: string;
  para1: string;
  scheduleTitle: string;
  schedule: {
    thai: string;
    thaiTime: string;
    eng: string;
    engTime: string;
  };
  para2: string;
  dressCode: string;
  schoolClosed: string;
  onlineOnlyWarning: string;
  closing: string;
  signer: string;
  position: string;
  
  // Form Labels
  formTitle: string;
  deadline: string;
  
  // Student Details Labels
  prefixLabel: string;
  firstNameLabel: string;
  lastNameLabel: string;
  stdProgramLabel: string;
  levelLabel: string;
  roomLabel: string;

  // Parent Details Labels
  parentSectionTitle: string;
  parentPrefixLabel: string;
  parentFirstNameLabel: string;
  parentLastNameLabel: string;

  // Options
  prefixOptions: string[];
  parentPrefixOptions: string[];
  stdProgramOptions: string[];
  levelOptions: string[];
  roomOptions: string[];

  attendanceLabel: string;
  optionYes: string;
  optionNo: string;
  guestCountLabel: string;
  programLabel: string; // For Session Selection
  submitButton: string;
  
  // Modal
  successTitle: string;
  successMessage: string;
  closeButton: string;
}

export interface FormData {
  prefix: string;
  firstName: string;
  lastName: string;
  studentProgram: string;
  level: string;
  room: string;
  
  parentPrefix: string;
  parentFirstName: string;
  parentLastName: string;

  isAttending: 'yes' | 'no' | null;
  guestCount: number;
  program: 'Thai' | 'English';
}