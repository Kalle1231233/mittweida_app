import useSWR from 'swr';

export interface Place {
    descriptionParagraphs: string;
    highlightLink: string;
    accessible: boolean;
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    image: string;
    openingHours: string;
    rating?: number;
    event?: string;
    address: string;
    entry?: string;
    accessibility?: string;
    familyFriendly?: boolean;
    highlight?: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

const fetcher = (url: string): Promise<Place[]> =>
    fetch(url).then((res) => res.json());

export function usePlaces() {
    const { data, error, isLoading } = useSWR<Place[]>('http://localhost:4000/places', fetcher);

    return {
        places: data ?? [],
        isLoading,
        isError: error || !data
    };
}
