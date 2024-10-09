import { ReactNode } from "react";
import { CharacterI } from "../gql/characters/getCharacters.inteface";

export interface ContextStarredValuesI {
    characters: CharacterI[],
    onStarredCharacter: (character: CharacterI) => void,
    onExistCharacterStarred: (characterID: string) => boolean,
    onDeleteCharacter: (characterID: string) => void,
}
export interface ContextStarredI {
    children: ReactNode
}