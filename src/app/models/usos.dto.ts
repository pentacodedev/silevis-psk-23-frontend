import { StudentProgramme } from "./studentProgramme.dto";

export interface UsosDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  studentNumber: string;
  studentProgrammes: StudentProgramme[];
}
