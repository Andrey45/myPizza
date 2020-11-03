import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('pizza')
export class Pizza {
  @PrimaryColumn("integer")
  id: number;

  @Column("text")
  title: string;

  @Column("numeric")
  price: number;

  @Column({nullable: true})
  annotation: string | null;

  @Column({nullable: true})
  description: string | null;

  @Column("integer")
  ingredientsId: number[];
}
