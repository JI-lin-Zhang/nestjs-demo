import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  eid: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  location: string;
  @Column()
  date: string;
  @Column()
  image: string;
  @Column()
  isFeatured: boolean;
}
