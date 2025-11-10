/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsString,
  IsNumber,
  IsOptional,
  IsPositive,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Tên sản phẩm phải là chuỗi ký tự' })
  @MaxLength(100, { message: 'Không được quá 100 ký tự' })
  name: string;

  @IsNumber({}, { message: 'Giá phải là số' })
  @IsPositive({ message: 'Giá trị phải là số dương lớn hơn 0' })
  price: number;

  @IsOptional()
  @IsNumber()
  @IsPositive({ message: 'Giá trị phải là số dương lớn hơn 0' })
  oldPrice?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Giá phải là số' })
  sold?: number;

  @IsOptional()
  @IsString({ message: 'Anh phải là chuỗi ký tự' })
  @MaxLength(500, { message: 'Không được quá 500 ký tự' })
  img?: string;
}
