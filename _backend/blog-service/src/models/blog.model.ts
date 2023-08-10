import {Entity, model, property} from '@loopback/repository';

@model()
export class Blog extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  blog_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'array',
    itemType: 'object',
    default: { by:"", like: false, dislike: false },
  })
  likes: string[];

  @property({
    type: 'array',
    itemType: 'object',
    default: { by:"", comment: "", replies:[] },
  })
  comments?: object[];

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
