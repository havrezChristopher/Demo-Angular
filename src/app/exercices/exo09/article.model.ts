/**
 * Interface pour créer un article à ajouter dans le panier
 *
 */
export interface Article {
    name: string;
    qty: number;
    dateAdd: Date;
}