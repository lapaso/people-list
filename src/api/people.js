
import { FORBES_400_URL } from "./../config"

const FORBES_400_URL_WITH_LIMIT = FORBES_400_URL + "?limit=20"

export const getForbes400 = async function () {
    let response = await fetch(FORBES_400_URL_WITH_LIMIT)
    let data = await response.json();
    return data.map((i) => {
        i.email = i.uri + "@gmail.com";
        return i;
    });
}