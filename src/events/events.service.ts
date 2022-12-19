import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  // 实例化实体
  constructor(
    @InjectRepository(Event) private readonly user: Repository<Event>,
  ) {}

  async findAll() {
    const data = await this.user.find();
    if (data) {
      return {
        status: 200,
        msg: 'success to find the data',
        data,
      };
    }
    return {
      status: 404,
      msg: 'not success to find the data',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  // filterSomeOne(dataFilter: IDataFilter) {
  //   const { year, month } = dateFilter;
  // let filteredEvents = .filter((event) => {
  //   const eventDate = new Date(event.date);
  //   return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  // });
  // return filteredEvents;
  // }
}
