import { supabase } from "../../supabase";


export default async function getAllMembers() {
    const {data} = await supabase
    .from('member')
    .select('*')
    console.log(data)
  
   return data
}
  