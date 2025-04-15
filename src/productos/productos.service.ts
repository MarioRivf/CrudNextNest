import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class ProductosService {

  constructor(private prismaService: PrismaService){}

  create(createProductoDto: CreateProductoDto) {
    return this.prismaService.product.create({
      data: createProductoDto
    })
  }

  findAll() {
    return this.prismaService.product.findMany()
  }

  async findOne(id: number) {
    const productFound = await this.prismaService.product.findUnique({
      where: {
        id: id
      }
    })
    if (!productFound) {
      throw new NotFoundException(`Producto con id ${id} no existe`)
    }

    return productFound;
    //return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
