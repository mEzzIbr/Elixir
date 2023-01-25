import { supabase } from '../../supabase';

export default async function getSpaceReactions (id){
    const {data} = await supabase
    .from('space-reactions-dict')
    .select('*')
    .eq('team_id', id)

    
    return data

}