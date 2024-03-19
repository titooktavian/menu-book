import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_KEY);

const getMerchantInfo = async () => {
    const fetchData = await supabase
        .from('merchant_info')
        .select()
        .limit(1)
        .single()
        .then((res) => {
            return res;
        });

    return fetchData;
}

const getWorkingHours = async () => {
    const fetchData = await supabase
        .from('working_hours')
        .select()
        .then((res) => {
            return res;
        });

    return fetchData;
}

const getCategoryList = async () => {
    const fetchData = await supabase
        .from('category')
        .select()
        .order('name', { ascending: true })
        .then((res) => {
            return res;
        });

    return fetchData;
}

const getProductByCategory = async (idCategory) => {
    const fetchData = await supabase
        .from('product')
        .select()
        .eq('id_category', idCategory)
        .then((res) => {
            return res;
        });

    return fetchData;
}

export { supabase, getMerchantInfo, getWorkingHours, getCategoryList, getProductByCategory };