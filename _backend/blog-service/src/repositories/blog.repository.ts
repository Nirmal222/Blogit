import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogDataSource} from '../datasources';
import {Blog, BlogRelations} from '../models';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.blog_id,
  BlogRelations
> {
  constructor(
    @inject('datasources.blog') dataSource: BlogDataSource,
  ) {
    super(Blog, dataSource);
  }
}
