// based off of movie & book scripts by Christian B. B. Houmann
// scripts + quickadd documentation: https://github.com/chhoumann/quickadd/
// jikan api documentation: https://docs.api.jikan.moe/

const notice = msg => new Notice(msg, 5000);

const searchResultsLimit = "10";
const API_URL = "https://api.jikan.moe/v4/manga";

module.exports = {
    entry: start,
    settings: {
        name: "MAL Manga Script Using Jikan API",
    options: {
        "searchResultsLimit": {
            type: "dropdown",
            defaultValue: "10",
            options: [
                "5",
                "10",
                "15",
                "20",
            ],
        }
    }
    }
}

let QuickAdd;
let Settings;

async function start(params, settings) {
    QuickAdd = params;
    Settings = settings;

    const query = await QuickAdd.quickAddApi.inputPrompt("Enter manga name: ");
    if (!query) {
        notice("No query entered.");
        throw new Error("No query entered.");
    }

    let selectedManga;
    
    const results = await createQuery(query);      

    const choice = await QuickAdd.quickAddApi.suggester(results.map(formatTitleForSuggestion), results);
        if (!choice) {
            notice("No choice selected.");
            throw new Error("No choice selected.");
        }

    selectedManga = choice;

    QuickAdd.variables = {
        ...selectedManga,
        authorsReversed: fixAuthors(selectedManga.authors),
        genreList: flatten(selectedManga.genres),
        authorsOriginal: getnestedvalue(selectedManga.authors),
        themesList: flatten(selectedManga.themes),
        cover: selectedManga.images.jpg.image_url,
        fileName: replaceIllegalFileNameCharactersInString(selectedManga.title),
        chapterNumber: isNumber(selectedManga.chapters),
        volumeNumber: isNumber(selectedManga.volumes),
    }
}

function formatTitleForSuggestion(resultItem) {
    return `(${resultItem.type}) ${resultItem.title}`;
}

async function createQuery(query) {
    const searchResults = await apiGet(API_URL, {
        "q": query,
    });

    if (!searchResults.data) {
        notice("No results found.");
        throw new Error("No results found.");
    }

    return searchResults.data;
}

function fixAuthors(authors) {
    const reversedArray = authors.map(author => author.name.split(', ').reverse().join(' '));
    const reversedArrayString = reversedArray.join(", ");
    console.log(reversedArray);
    console.log(reversedArrayString);
    return reversedArrayString;
}

function getnestedvalue(sublist) {
    if (sublist.length === 0) return "N/A";
    if (sublist.length === 1) return sublist.name;
    return sublist.map(item => item.name).join(", ");
}

function flatten(array) {
    if (array.length > 0) return array.flatMap((array) => array.name).join(", ");
    if (!array.length > 0) return "N/A";
}

function isNumber(str) {
    if (str > 0) return str;
    console.log(str);
    if (!str > 0) return "0";

}

function replaceIllegalFileNameCharactersInString(string) {
    return string.replace(/[\\,#%&\{\}\/*<>$\'\":@]*/g, '');    
}

async function apiGet(url, data) {
    let finalURL = new URL(url);
    if (data)
        Object.keys(data).forEach(key => finalURL.searchParams.append(key, data[key]));
    finalURL.searchParams.append("limit", searchResultsLimit); // Limits the number of results returned
    const res = await request({
        url: finalURL.href,
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return JSON.parse(res);

}
