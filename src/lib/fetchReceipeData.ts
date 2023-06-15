
const defaultUrl = 'https://www.themealdb.com/api/json/v1/1'

async function fetchReceipeData(id: string) {

    let url: RequestInfo | URL = `${defaultUrl}/lookup.php?i=${id}`


    const data: any = await fetch(url).then(res => res.json());


    return data;
}

export default fetchReceipeData