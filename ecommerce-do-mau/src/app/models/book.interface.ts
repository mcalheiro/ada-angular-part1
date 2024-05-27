export interface IBook {
    id: number;
    title: string;
    author: string;
    description: string;
    published: Date;
    price: number;
};

// Remove later
type BookType = {
    id: number;
    title: string;
    author: string;
    description: string;
    published: Date;
    price: number;
}