import 'axios'
import '@supabase/supabase-js'
import './supabase.config'
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_API_URL } from './supabase.config';
import { Service } from './service';
import { Page } from '../models/Page';

export class PageService extends Service {

    async GetPagesForCollection(collectionId: string): Promise<Array<Page>> {
        let supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY);
        let {data:pages, error} = await supabase.from('Page').select('*').eq('parentCollection', collectionId);
        if (error){
            let result = this.handleError(error);
            if (result) throw result;
        }
        return pages as Array<Page>;
    }
}