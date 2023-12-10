export const API_KEY = "84e37592c3b4f4a65be092fd4cf1baed"

const requests = [
    { fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`, title: "Trending Now", id: "1", isLargeRow: true },
    { fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, title: "Top Rated", id: "3", isLargeRow: false },
    { fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`, title: "Actions Movies", id: "4", isLargeRow: false },
    { fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`, title: "Comedy Movies", id: "5", isLargeRow: false },
    { fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`, title: "NetFilx Originals", id: "2", isLargeRow: true },
    { fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`, title: "Horror Movies", id: "6", isLargeRow: false },
    { fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, title: "RomanceMove Movie", id: "7", isLargeRow: false },
    { fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`, title: "Documentaries Movie", id: "8", isLargeRow: false },
]


export default requests