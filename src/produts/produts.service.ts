import { Injectable } from '@nestjs/common';
import { CreateProdutDto } from './dto/create-produt.dto';
import { UpdateProdutDto } from './dto/update-produt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produt } from './entities/produt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutsService {
  constructor(
    @InjectRepository(Produt)
    private readonly productsRepository: Repository<Produt>,
  ) {}

  async create(createProdutDto: CreateProdutDto) {
    const products = await this.productsRepository.create(createProdutDto);
    await this.productsRepository.save(products);
    return products;
  }

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: string) {
    return this.productsRepository.findOneBy({ id });
  }

  async update(id: string, updateProdutDto: UpdateProdutDto) {
    const findProduct = await this.productsRepository.findOneBy({ id });
    const updateProduct = await this.productsRepository.merge(
      findProduct,
      updateProdutDto,
    );
    return this.productsRepository.save(updateProduct);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productsRepository.remove(product);
    return `Producto ${product.name} ha sido eliminado sastifactoriamente`;
  }
}
