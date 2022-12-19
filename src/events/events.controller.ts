import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller({
  path: 'events',
  version: '1',
})
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Get(':year/:month')
  filterSomeOne(@Param('year') year: string, @Param('month') month: string) {
    return this.eventsService.filterSomeOne({ year, month });
  }
}
