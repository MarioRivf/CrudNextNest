// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductoDto } from './create-producto.dto';

// export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

//export class UpdateProductoDto {}

import { PartialObserver } from 'rxjs'
import {CreateProductoDto} from './create-producto.dto'

export type UpdateProductoDto = Partial<CreateProductoDto>

