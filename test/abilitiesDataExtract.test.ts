import { describe, it } from "vitest";
import * as fs from "fs";
import * as path from "path";
import i18next from "i18next";
import { Abilities } from "#app/enums/abilities";
import { allAbilities } from "#app/data/ability";
import { allSpecies } from "#app/data/pokemon-species";
import { starterPassiveAbilities } from "#app/data/balance/passives";
import * as Utils from "#app/test/testUtils";

export interface AbilityData {
  _id: string;
  name: string;
  koName: string;
  released: string,
  description: string;
  generation: number;
  pokemonIds: string[];
  isBypassFaint: boolean;
  isIgnorable: boolean;
}

// 각 특성에 대해 JSON 파일을 생성하는 함수
const generateAbilityJsonFiles = () => {
  const _fileNamesSet = Utils.getFileNameSet();

  const aaability: AbilityData[] = [];
  for (const a of allAbilities) {
    if (a.id === Abilities.NONE) {
      continue;
    }
    const _NAME = a.name;
    // i18next.changeLanguage("ko");
    // i18next.loadLanguages("ko");
    let i18nKey = Abilities[a.id]
      ?.split("_")
      .filter(f => f)
      .map((f, i) => (i > 0 ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase()))
      .join("");
    // console.log(i18nKey);
    if (i18nKey === "static") {
      i18nKey = "staticAbility";
    }
    const NNAME = a.id ? `${i18next.t(`ability:${i18nKey}.name`) as string}` : "";
    const safe = a.id ? `${i18next.t(`ability:${i18nKey}.name`) as string}` : "";
    const DESCRIPTION = a.id ? (i18next.t(`ability:${i18nKey}.description`) as string) : "";
    // console.log(NNAME)
    // console.log(DESCRIPTION)

    // pokemon id 세팅
    const ret: string[] = [];
    for (let i = 0; i < allSpecies.length; i++) {
      const y = allSpecies[i];
      const passive = starterPassiveAbilities[y.getRootSpeciesId()];
      if (y.forms.length !== 0) {
        for (const form of y.forms) {
          if (form.ability1 === a.id || form.ability2 === a.id || form.abilityHidden === a.id || a.id === passive[0]) {
            if (Utils.containsFileNamesSetWithForm(form, y)) {
              ret.push(Utils.getPokemonIdWithForm(form, y));
            }
          }
        }
      } else if (y.ability1 === a.id || y.ability2 === a.id || y.abilityHidden === a.id || passive[0] === a.id) {
        if (Utils.containsFileNamesSet(y)) {
          ret.push(Utils.getPokemonId(y));
        }
      }
    }

    const abilityData: AbilityData = {
      _id: Abilities[a.id].toLowerCase(),
      name: NNAME,
      koName: safe,
      released: a.nameAppend,
      description: DESCRIPTION,
      generation: a.generation,
      pokemonIds: ret,
      isBypassFaint: a.isBypassFaint ? a.isBypassFaint : false,
      isIgnorable: a.isIgnorable ? a.isIgnorable : false,
    };
    aaability.push(abilityData);
  }
  const jsonFilePath = path.join(__dirname, "ability-json-all.json");
  fs.writeFileSync(jsonFilePath, JSON.stringify(aaability, null, 2));
};

// 테스트 스위트 추가
describe("Ability JSON 파일 생성 테스트", () => {
  it("JSON 파일이 올바르게 생성되는지 테스트", () => {
    generateAbilityJsonFiles();
  });
});
