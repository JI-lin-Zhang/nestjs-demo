import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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

  async findOne(id: number) {
    const data = await this.user.find({
      where: {
        // 模糊查询
        eid: Like(`%${id}%`),
      },
    });
    return {
      status: 200,
      msg: 'success to find the data',
      data,
    };
  }

  async filterSomeOne(@Query() query) {
    const { year, month } = query;
    const months = month < 10 ? `0${month}` : month;
    const data = await this.user.find({
      where: {
        // 模糊查询
        date: Like(`%${year}-${months}%`),
      },
    });

    return {
      status: 200,
      msg: 'success to find the data',
      data,
    };
  }
}
