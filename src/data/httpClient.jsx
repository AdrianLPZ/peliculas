const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTQ1MGYxZDg3YjM4YTFkNDNlYTYxYmIzMTAzYWMzNiIsInN1YiI6IjY0OGRkNzc2NTU5ZDIyMDBhZDgyMGJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BnDo3xWDONDITBrLN31ieXlOw7hCje0ajkobAxVzUu8",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
