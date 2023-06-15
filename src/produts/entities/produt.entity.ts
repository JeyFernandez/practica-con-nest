import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Produt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  detalle: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'numeric' })
  stock: number;
}
