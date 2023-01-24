import { supabase } from "../../supabase";


export default async function SpecificMembers(id) {
    const {data} = await supabase
    .from('member')
    .select('*')
    .eq('hisSpace', id)

    
    return data
  
   
  }
  