// based off of movie & book scripts by Christian B. B. Houmann
// scripts + quickadd documentation: https://github.com/chhoumann/quickadd/
// jikan api documentation: https://docs.api.jikan.moe/
// Version 2

const notice = msg => new Notice(msg, 5000);

const searchResultsLimit = "10";
const API_URL = "https://api.jikan.moe/v4/manga";

module.exports = {
    entry: start,
    settings: {
        name: "MAL Manga Script Using Jikan API",
    }
 }


let QuickAdd;


async function start(params) {
    QuickAdd = params;

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
        genreList: makeList(selectedManga.genres),
        authorsOriginal: getnestedvalue(selectedManga.authors),
        themesList: makeList(selectedManga.themes),
        cover: selectedManga.images.jpg.image_url,
        summary: reformatSummary(selectedManga.synopsis),
        fileName: replaceIllegalFileNameCharactersInString(selectedManga.title),
        japaneseTitle: selectedManga?.title_japanese ?? "N/A",
        alternateTitles: makeListString(selectedManga.titles),
        chapterNumber: selectedManga?.chapters ?? "0",
        volumeNumber: selectedManga?.volumes ?? "0",
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

function makeList(array) {
    if (array.length == 0) return "N/A";
    if (array.length === 1) return `\n  - "${array[0].name}"`;
    return array.map((item) => `\n  - "${item.name}"`).join("");
}

function makeListString(array) {
    if (array.length === 0) return "N/A";
const altTitles = array.map((item) => `\n - "${item.type}\: ${item.title}" `).join("");
return altTitles
}
function reformatSummary(string) {
    return string.replace(/["'()]/g,"");
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
