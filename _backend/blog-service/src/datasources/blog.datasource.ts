import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'blog',
  connector: 'mongodb',
  url: "mongodb+srv://Nirmal:vAQx8A3zK6aYZjud@cluster0.pk8wxgz.mongodb.net/blogs",
  host: '',
  port: 0,
  user: '',
  password: '',
  database: 'blogs',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BlogDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'blog';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.blog', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
