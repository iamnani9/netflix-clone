// Basic wrapper for localStorage

const KEY = 'netflix_clone_mylist';

export const getMyList = () => {
    try {
        const stored = localStorage.getItem(KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
};

export const addToMyList = (movie) => {
    const list = getMyList();
    if (!list.find(item => item.id === movie.id)) {
        const newList = [...list, movie];
        localStorage.setItem(KEY, JSON.stringify(newList));
        return true;
    }
    return false;
};

export const removeFromMyList = (movieId) => {
    const list = getMyList();
    const newList = list.filter(item => item.id !== movieId);
    localStorage.setItem(KEY, JSON.stringify(newList));
    return newList;
};

export const isInMyList = (movieId) => {
    const list = getMyList();
    return !!list.find(item => item.id === movieId);
};
