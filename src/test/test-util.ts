import * as fs from "fs";
import * as path from "path";
import { Species } from "#enums/species";
import PokemonSpecies, { PokemonForm } from "#app/data/pokemon-species.js";
import { pokemonSpeciesLevelMoves, pokemonFormLevelMoves } from "#app/data/pokemon-level-moves.js";
import { Moves } from "#app/enums/moves";
import { getPokemonSpecies } from "#app/data/pokemon-species";

const p = require("path");
const f = require("fs");
const directoryPath = p.join(__dirname, "../../public/images/pokemon");
const files = f.readdirSync(directoryPath);
const fileNamesSet = new Set<string>();
files.forEach(file => {
    const filePath = p.join(directoryPath, file);
    if (f.statSync(filePath).isFile() && p.extname(file) === ".png") {
        fileNamesSet.add(file);
    }
});

export const getFileNameSet = (): Set<string> => {
    return fileNamesSet;
};

export const getPokemonIdWithForm = (form: PokemonForm, species: PokemonSpecies): string => {
    const tail = form.formKey !== "" ? "_" + form.formKey.toLowerCase().replace(/ |-/g, "_") : "";
    const imageTail = form.getFormSpriteKey(form.formIndex) !== "" ? "-" + form.getFormSpriteKey(form.formIndex) : "";
    if (fileNamesSet.has(Species[Species[species.speciesId]] + imageTail + ".png")) {
        return Species[species.speciesId].toLowerCase() + tail;
    }
    return "";
}

export const containsFileNamesSetWithForm = (form: PokemonForm, species: PokemonSpecies): boolean => {
    const imageTail = form.getFormSpriteKey(form.formIndex) !== "" ? "-" + form.getFormSpriteKey(form.formIndex) : "";
    return fileNamesSet.has(Species[Species[species.speciesId]] + imageTail + ".png");
}

export const getPokemonId = (species: PokemonSpecies): string => {
    if (fileNamesSet.has(Species[Species[species.speciesId]] + ".png")) {
        return Species[species.speciesId].toLowerCase();
    }
    return "";
}

export const containsFileNamesSet = (species: PokemonSpecies): boolean => {
    return fileNamesSet.has(Species[Species[species.speciesId]] + ".png");
}

export const getPokemonFormLevelMoves = (form: PokemonForm, species: PokemonSpecies): Moves[] => {
    let ret2: Moves[] = [];
    const moves: Moves[] = pokemonSpeciesLevelMoves[species.speciesId].map((levelMove) => levelMove[1]);
    if (pokemonFormLevelMoves.hasOwnProperty(form.speciesId) && pokemonFormLevelMoves[form.speciesId].hasOwnProperty(form.formIndex)) {
        ret2 = pokemonFormLevelMoves[form.speciesId][form.formIndex].map((formlevelmove) => formlevelmove[1]);
    } else {
        for (let i = 0; i < moves.length; i++) {
            ret2.push(moves[i]);
        }
    }
    return ret2;
}

export const generateCommonId = (species: Species) => {
    var spe = getPokemonSpecies(species);
    var fs = spe.forms;
    var f = fs[0];
    if (spe.forms.length !== 0) {
        return getPokemonIdWithForm(f, spe);
    } else {
        return getPokemonId(spe);
    }
};