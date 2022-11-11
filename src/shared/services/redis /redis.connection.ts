import Logger from 'bunyan';
import {config} from '@root/config';
import { BaseCache } from '@global/services/redis /base.cache';

const log: Logger= config.createLogger('redisConnection');
class RedisConnection extends BaseCache {

}
