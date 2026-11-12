import {
  IsString,
  IsInt,
  Min,
  IsIn,
  Matches,
  IsOptional,
  ValidateNested,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";

import type { Area } from "../order.types";

class CreateDishDto {
  @IsString()
  name!: string;

  @IsInt()
  @Min(1)
  priceSantim!: number;
}

export class CreateOrderDto {
  @IsString()
  customer!: string;

  @IsIn(["Bole", "Kazanchis", "Piassa", "Megenagna"])
  area!: Area;

  @IsInt()
  @Min(1)
  totalSantim!: number;

  @IsOptional()
  @Matches(/^(?:\+251|0)9\d{8}$/, {
    message: "phone must be a valid TeleBirr number",
  })
  phone?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDishDto)
  dishes!: CreateDishDto[];
}