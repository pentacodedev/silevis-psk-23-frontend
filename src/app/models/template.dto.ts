import { InternshipDto } from "./internship.dto";
import { UsosDto } from "./usos.dto";

export interface TemplateDto {
  internship: InternshipDto;
  user: UsosDto;
  polish: boolean;
}
