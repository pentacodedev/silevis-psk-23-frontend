import { InternshipDto } from "./internship.dto"

export enum TicketStatusEnum {
  Unreviewed = 0,
  Accepted = 1,
  Denied = 2,
}

export interface NewDateTicketDto {
   studentEmail: string
   description: string
   dateOfStart : string,
   dateOfEnd: string,
   status : TicketStatusEnum,
   intership: InternshipDto
}
