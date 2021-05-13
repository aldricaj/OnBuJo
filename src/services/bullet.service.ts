import 'axios'
import '@supabase/supabase-js'
import { Bullet } from '../models/Bullet';
import './supabase.config'
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_API_URL } from './supabase.config';
import { Service } from './service';

export class BulletService extends Service {

    async GetAllBullets(): Promise<Array<Bullet>> {
        let supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY);
        let {data:bulletList, error} = await supabase.from('fullbullet').select('*');
        if (error){
            let result = this.handleError(error);
            if (result) throw result;
        }
        return bulletList as Array<Bullet>;
    }
}