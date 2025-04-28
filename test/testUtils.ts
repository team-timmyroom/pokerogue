import i18next from "i18next";
import { Species } from "#enums/species";
import type PokemonSpecies from "#app/data/pokemon-species";
import type { PokemonForm } from "#app/data/pokemon-species";
import { SpeciesFormKey } from "#enums/species-form-key";
import { pokemonSpeciesLevelMoves, pokemonFormLevelMoves } from "#app/data/balance/pokemon-level-moves";
import type { Moves } from "#app/enums/moves";
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
};

export const containsFileNamesSetWithForm = (form: PokemonForm, species: PokemonSpecies): boolean => {
  const imageTail = form.getFormSpriteKey(form.formIndex) !== "" ? "-" + form.getFormSpriteKey(form.formIndex) : "";
  return fileNamesSet.has(Species[Species[species.speciesId]] + imageTail + ".png");
};

export const getPokemonId = (species: PokemonSpecies): string => {
  if (fileNamesSet.has(Species[Species[species.speciesId]] + ".png")) {
    return Species[species.speciesId].toLowerCase();
  }
  return "";
};

export const containsFileNamesSet = (species: PokemonSpecies): boolean => {
  return fileNamesSet.has(Species[Species[species.speciesId]] + ".png");
};

export const getPokemonFormLevelMoves = (form: PokemonForm, species: PokemonSpecies): Moves[] => {
  let ret2: Moves[] = [];
  const moves: Moves[] = pokemonSpeciesLevelMoves[species.speciesId].map(levelMove => levelMove[1]);
  if (
    pokemonFormLevelMoves.hasOwnProperty(form.speciesId) &&
    pokemonFormLevelMoves[form.speciesId].hasOwnProperty(form.formIndex)
  ) {
    ret2 = pokemonFormLevelMoves[form.speciesId][form.formIndex].map(formlevelmove => formlevelmove[1]);
  } else {
    for (let i = 0; i < moves.length; i++) {
      ret2.push(moves[i]);
    }
  }
  return ret2;
};

export const generateCommonId = (species: Species) => {
  const spe = getPokemonSpecies(species);
  const fs = spe.forms;
  const f = fs[0];
  if (spe.forms.length !== 0) {
    return getPokemonIdWithForm(f, spe);
  }
  return getPokemonId(spe);
};

export const getSName = (_lan: string, species: PokemonSpecies) => {
  // i18next.changeLanguage(lan);
  return i18next.t(`pokemon:${Species[species.speciesId].toLowerCase()}`);
};

export const getName = (_lan: string, species: PokemonSpecies, formIndex: integer) => {
  const soso = ["mega", "mega-x", "mega-y", "primal", "eternamax", "gigantamax"];

  const formKey = species.forms[formIndex].formKey;

  // i18next.changeLanguage(lan);
  if (!soso.includes(formKey)) {
    // console.log("dgs" + " " + formKey + " " + Species[species.speciesId]);
    const formText = capitalizeString(formKey, "-", false, false) || "";
    const speciesName = capitalizeString(Species[species.speciesId], "_", true, false);

    let formName = "";
    if (species.speciesId === Species.ARCEUS) {
      formName = i18next.t(`pokemonInfo:Type.${formText?.toUpperCase()}`);
    } else {
      const i18key = `pokemonForm:${speciesName}${formText}`;
      formName = i18next.exists(i18key) ? i18next.t(i18key) : formText;
    }
    return formName;
  }

  if (formIndex !== undefined && species.forms.length) {
    const form = species.forms[formIndex];
    let key: string | null;
    switch (form.formKey) {
      case SpeciesFormKey.MEGA:
      case SpeciesFormKey.PRIMAL:
      case SpeciesFormKey.ETERNAMAX:
      case SpeciesFormKey.MEGA_X:
      case SpeciesFormKey.MEGA_Y:
        key = form.formKey;
        break;
      default:
        if (form.formKey.indexOf(SpeciesFormKey.GIGANTAMAX) > -1) {
          key = "gigantamax";
        } else {
          key = null;
        }
    }
    if (formKey === "mega-x") {
      return i18next.t(`battlePokemonForm:${"megax"}`, { pokemonName: species.name });
    }
    if (formKey === "mega-y") {
      return i18next.t(`battlePokemonForm:${"megay"}`, { pokemonName: species.name });
    }

    if (key) {
      // i18next.changeLanguage(lan);
      return i18next.t(`battlePokemonForm:${key}`, { pokemonName: species.name });
    }
  }
  return species.name;
};

export function capitalizeString(str: string, sep: string, lowerFirstChar = true, returnWithSpaces = false) {
  if (str) {
    const splitedStr = str.toLowerCase().split(sep);

    for (let i = +lowerFirstChar; i < splitedStr?.length; i++) {
      splitedStr[i] = splitedStr[i].charAt(0).toUpperCase() + splitedStr[i].substring(1);
    }

    return returnWithSpaces ? splitedStr.join(" ") : splitedStr.join("");
  }
  return null;
}
