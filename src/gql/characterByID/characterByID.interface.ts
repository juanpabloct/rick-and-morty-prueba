export interface InformationCharacterI {
    id: string;
    image: string;
    name: string;
    species: string;
    status: string;
    type: string;
    __typename: string;
}
export interface InformationCharacterResultI {
    charactersByIds: InformationCharacterI[]
}