import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductosService {

  constructor(private prismaService: PrismaService){}

  async create(createProductoDto: CreateProductoDto) {
    try {
      return await this.prismaService.product.create({
        data: createProductoDto
      })
    }
    catch (error){
      if(error instanceof Prisma.PrismaClientKnownRequestError){
        if (error.code === "P2002"){
          throw new ConflictException(`Producto con nombre ${createProductoDto.nombre} ya existe`)
        }
      }
    }
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

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const productFound = await this.prismaService.product.update({
      where: {
        id: id
      },
      data: updateProductoDto
    })
    if (!productFound) {
      throw new NotFoundException(`Producto con id ${id} no existe`)
    }
    return productFound;
    //return `This action updates a #${id} producto`;
  }

  async remove(id: number) {
    const deleteproduct = await this.prismaService.product.delete({
      where: {
        id: id
      }
    })
    if (!deleteproduct) {
      throw new NotFoundException(`Producto con id ${id} no existe`)
    }

    return deleteproduct;
    //return `This action returns a #${id} producto`;
  }
}
