import { describe, it } from "vitest";
import * as fs from "fs";
import * as path from "path";
import i18next, { t } from "i18next";
import { Species } from "#app/enums/species.js";
import { Moves } from "#app/enums/moves";
import { Type } from "#app/data/type";
import { MoveCategory, MoveTarget, allMoves, MoveFlags } from "#app/data/move.js";
import { starterPassiveAbilities, allSpecies } from "#app/data/pokemon-species.js";
import { speciesEggMoves } from "#app/data/egg-moves";
import { pokemonSpeciesLevelMoves, pokemonFormLevelMoves } from "#app/data/pokemon-level-moves.js";
import { tmSpecies } from "#app/data/tms.js";
import * as Utils from "#app/test/test-util.ts";

// 각 기술에 대해 JSON 파일을 생성하는 함수
const generateMoveJsonFiles = () => {

  const aamove: MoveData[] = [];
  for (const m in allMoves) {
    const move = allMoves[m];
    if (move.id === Moves.NONE) {
      continue;
    }
    const NAME = move.name;
    i18next.changeLanguage("ko");
    const i18nKey = Moves[move.id].split("_").filter(f => f).map((f, i) => i ? `${f[0]}${f.slice(1).toLowerCase()}` : f.toLowerCase()).join("") as unknown as string;
    move.name = move.id ? `${i18next.t(`move:${i18nKey}.name`)}` : "";
    move.effect = move.id ? `${i18next.t(`move:${i18nKey}.effect`)}` : "";

    const mmm: string[] = [];
    for (let i = 0; i < allSpecies.length; i++) {
      const spe = allSpecies[i];
      const eggMoves: Moves[] = speciesEggMoves[spe.getRootSpeciesId()];
      const moves: Moves[] = pokemonSpeciesLevelMoves[spe.speciesId].map((levelMove) => levelMove[1]);
      if (spe.forms.length !== 0) {
        for (const form of spe.forms) {
          let levelMovesWithForm: Moves[] = Utils.getPokemonFormLevelMoves(form, spe);
          if (eggMoves.includes(move.id) || levelMovesWithForm.includes(move.id)) {
            if (Utils.containsFileNamesSetWithForm(form, spe)) {
              mmm.push(Utils.getPokemonIdWithForm(form, spe));
            }
          }
        }
      } else {
        if (eggMoves.includes(move.id) || moves.includes(move.id)) {
          if (Utils.containsFileNamesSet(spe)) {
            mmm.push(Utils.generateCommonId(spe.speciesId));
          }
        }
      }
    }

    const tmss = tmSpecies[move.id];
    if (Array.isArray(tmss)) {
      for (let i = 0; i < tmss.length; i++) {
        const tt = tmss[i];
        if (Array.isArray(tt)) {
          const ze = tt[0];
          for (let j = 1; j < tt.length; j++) {
            const tail = tt[j] !== "" ? "_" + tt[j].toLowerCase().replace(/ |-/g, "_") : "";
            var ffff = Utils.getFileNameSet();
            if (ffff.has(Species[ze].toLowerCase() + tail) && !mmm.includes(Species[ze].toLowerCase() + tail)) {
              mmm.push(Species[ze].toLowerCase() + tail);
            }
          }
        } else {
          if (!mmm.includes(Species[tt].toLowerCase())) {
            mmm.push(Utils.generateCommonId(tt));
          }
        }
      }
    }

    const flagss: string[] = [];
    const moveFlagsValues = Object.values(MoveFlags).filter(value => typeof value === "number");
    for (let i = 0; i < moveFlagsValues.length; i++) {
      if (move.hasFlag(MoveFlags[MoveFlags[moveFlagsValues[i]]])) {
        flagss.push(MoveFlags[moveFlagsValues[i]].toLowerCase());
      }
    }

    const moveData: MoveData = {
      _id: Moves[move.id].toLowerCase(),
      name: NAME,
      koName: move.name,
      type: Type[move._type].toLowerCase(),
      moveCategory: MoveCategory[move._category].toLowerCase(),
      moveTarget: MoveTarget[move.moveTarget].toLowerCase(),
      power: move.power,
      accuracy: move.accuracy,
      powerPoint: move.pp,
      effect: move.effect,
      effectChance: move.chance,
      prioirty: move.priority,
      generation: move.generation,
      released: move.nameAppend,
      flags: flagss,
      pokemonIds: mmm
    }

    aamove.push(moveData);
  }
  const jsonFilePath = path.join(__dirname, "move-json-all.json");
  fs.writeFileSync(jsonFilePath, JSON.stringify(aamove, null, 2));
};

export interface MoveData {
  _id: string,
  name: string,
  koName: string,
  type: string,
  moveCategory: string,
  moveTarget: string,
  power: number,
  accuracy: number,
  powerPoint: number,
  effect: string,
  effectChance: number,
  prioirty: number,
  generation: number,
  released: string,
  flags: string[],
  pokemonIds: string[]
};

// 테스트 스위트 추가
describe("Move JSON 파일 생성 테스트", () => {
  it("JSON 파일이 올바르게 생성되는지 테스트", () => {
    generateMoveJsonFiles();
  });
});
