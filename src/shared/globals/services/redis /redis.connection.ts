import Logger from 'bunyan';
import {config} from '@root/config';
import {} from '@service/redis/'
const log: Logger= config.createLogger('redisConnection');
class RedisConnection extends BaseCache {

}
