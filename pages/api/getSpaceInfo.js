import { supabase } from '../../supabase';

export default async function getSpaceInfo (id){
    const {data} = await supabase
    .from('space')
    .select('*')
    .eq('team_id', id)

    
    return data

}