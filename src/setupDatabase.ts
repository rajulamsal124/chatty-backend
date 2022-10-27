// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mongoose, { ConnectionStates } from 'mongoose';
import Logger from 'bunyan';
import { config } from '@root/config';
const log: Logger= config.createLogger('setupDatabase');
// Anaynomous function
export default () => {
    const connect=()=>{
        mongoose.connect(`${config.DATABASE_URL}`)
            .then (()=>{
                log.info('Successfully connected to database');
            })
            .catch((error)=>{
                log.error('Error connecting to database', error);
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};
