import { CompanyDto } from "./company.dto";

export interface InternshipDto {
    id: number;
    intershipCreator: CompanyDto;
    dateOfStart: Date;
    dateOfEnd: Date;
    StudentEmail: string;
}
