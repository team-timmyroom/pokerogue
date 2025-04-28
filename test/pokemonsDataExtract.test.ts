import { describe, it } from "vitest";
import * as fs from "fs";
import * as path from "path";
import i18next from "i18next";
import { selfPokemonBiomes } from "./pokemonBiomes";
import { Species } from "#app/enums/species";
import { Biome } from "#app/enums/biome";
import { Abilities } from "#app/enums/abilities";
import { Moves } from "#app/enums/moves";
import { PokemonType } from "#enums/pokemon-type";
import { allSpecies, PokemonForm } from "#app/data/pokemon-species";
import { starterPassiveAbilities } from "#app/data/balance/passives";
import { speciesEggMoves } from "#app/data/balance/egg-moves";
import { pokemonSpeciesLevelMoves, pokemonFormLevelMoves } from "#app/data/balance/pokemon-level-moves";
import { Stat } from "#app/enums/stat";
import { tmSpecies } from "#app/data/balance/tms";
import { generateEvolutionChains, getEvolutionsById } from "./pokemonEvolutionsDataExtract";
import { generateFormChangeInfo, FormChangeInfo } from "./pokemonFormsDataExtract";
import { getFileNameSet } from "#test/testUtils";
import * as Utils from "#test/testUtils";

// 각 포켓몬에 대해 JSON 파일을 생성하는 함수
const generatePokemonJsonFiles = () => {
  const fileNamesSet = getFileNameSet();

  const evolutionChains = generateEvolutionChains();
  // Species에 따른 Biome의 Map 생성
  const biomeMap = new Map<Species, Biome[]>();
  for (let i = 0; i < selfPokemonBiomes.length; i++) {
    const species = Species[Species[selfPokemonBiomes[i][0]]];
    let biomeEntries = selfPokemonBiomes[i][3].map((a) => Biome[a[0]].toLowerCase());
    biomeEntries = [...new Set(biomeEntries)];
    biomeMap.set(species, biomeEntries);
  }

  // Species에 따른 tms의 Map 생성
  const tmsMap = new Map<string, string[]>();
  for (const m of Object.keys(tmSpecies)) {
    const ss = tmSpecies[m];
    for (let i = 0; i < ss.length; i++) {
      const kj = ss[i];
      if (Array.isArray(kj)) {
        const kjatra = Species[kj[0]].toLowerCase();
        for (let i = 1; i < kjatra.length; i++) {
          const kjkjkjkj = kjatra + "_" + kj[i];
          if (tmsMap.has(kjkjkjkj)) {
            tmsMap.get(kjkjkjkj).push(Moves[m].toLowerCase());
          } else {
            var mms: Moves[] = [];
            mms.push(Moves[m].toLowerCase());
            tmsMap.set(kjkjkjkj, mms);
          }
        }
      } else {
        const kjtra = Species[kj].toLowerCase();
        if (tmsMap.has(kjtra)) {
          tmsMap.get(kjtra).push(Moves[m].toLowerCase());
        } else {
          var mms: Moves[] = [];
          mms.push(Moves[m].toLowerCase());
          tmsMap.set(kjtra, mms);
        }
      }
    }
  }

  const formchangemap: Map<String, FormChangeInfo[]> = generateFormChangeInfo();

  const aapokemon = [];
  for (let i = 0; i < allSpecies.length; i++) {
    const pokemon = allSpecies[i];

    // form에 상관없는 정보들
    const legend = pokemon.legendary;
    const subLegend = pokemon.subLegendary;
    const myth = pokemon.mythical;

    // form에 따른 포켓몬 정보 세팅
    if (pokemon.forms.length !== 0) {
      for (const form of pokemon.forms) {
        // console.log(Utils.getName("ko", pokemon, form.formIndex));
        // 포켓몬 데이터 형식
        const formpokemonData = {
          _id: "",
          imageId: "",
          pokedexNumber: 1,
          name: "",
          koName: "",
          speciesName: "",
          canChangeForm: false,
          formName: "",
          baseExp: 1,
          friendship: 1,
          types: [],
          normalAbilityIds: [],
          hiddenAbilityId: "",
          passiveAbilityId: "",
          generation: 1,
          legendary: false,
          subLegendary: false,
          mythical: false,
          evolutions: [],
          formChanges: [],
          baseTotal: 1,
          hp: 1,
          attack: 1,
          defense: 1,
          specialAttack: 1,
          specialDefense: 1,
          speed: 1,
          height: 1.0,
          weight: 1.0,
          eggMoveIds: [],
          levelMoves: [],
          technicalMachineMoveIds: [],
          biomeIds: []
        };

        // tail
        const tail = form.formKey !== "" ? "_" + form.formKey.toLowerCase().replace(/ |-/g, "_") : "";
        const imageTail = form.getFormSpriteKey(form.formIndex) !== "" ? "-" + form.getFormSpriteKey(form.formIndex) : "";
        if (!fileNamesSet.has(Species[Species[form.speciesId]] + imageTail + ".png")) {
          continue;
        }

        // form에 따른 포켓몬 정보 파싱
        // formkoName
        // i18next.changeLanguage("ko");
        const FORMKONAME = i18next.t(`pokemon:${Species[form.speciesId].toLowerCase()}`) + tail;

        // formtypes
        let formtypelist: string[] = [];
        if (form.type1 !== null) {
          formtypelist.push(PokemonType[form.type1].toLowerCase());
        }
        if (form.type2 !== null) {
          formtypelist.push(PokemonType[form.type2].toLowerCase());
        }
        formtypelist = [...new Set(formtypelist)];

        // formnormalAbilityIds
        let formabilitylist: string[] = [];
        if (form.ability1 != Abilities.NONE) {
          formabilitylist.push(Abilities[form.ability1].toLowerCase());
        }
        if (form.ability2 != Abilities.NONE) {
          formabilitylist.push(Abilities[form.ability2].toLowerCase());
        }
        formabilitylist = [...new Set(formabilitylist)];

        // formlevelmoves
        const formlevelmovelist = [];
        if (pokemonFormLevelMoves.hasOwnProperty(form.speciesId) && pokemonFormLevelMoves[form.speciesId].hasOwnProperty(form.formIndex)) {
          var eachformlevelmovelist = pokemonFormLevelMoves[form.speciesId][form.formIndex];
          for (let i = 0; i < eachformlevelmovelist.length; i++) {
            const formlevelm = {
              level: eachformlevelmovelist[i][0],
              moveId: Moves[eachformlevelmovelist[i][1]].toLowerCase()
            };
            formlevelmovelist.push(formlevelm);
          }
        } else {
          var eachformlevelmovelist = pokemonSpeciesLevelMoves[pokemon.speciesId];
          for (let i = 0; i < eachformlevelmovelist.length; i++) {
            const formlevelm = {
              level: eachformlevelmovelist[i][0],
              moveId: Moves[eachformlevelmovelist[i][1]].toLowerCase()
            };
            formlevelmovelist.push(formlevelm);
          }
        }

        // formtms
        let formtmslist = [];
        if (tmsMap.get(Species[form.speciesId].toLowerCase() + "_" + form.formKey.toLowerCase().replace(/ |-/g, "_")) === undefined) {
          formtmslist = [];
        } else {
          formtmslist = tmsMap.get(Species[form.speciesId].toLowerCase() + "_" + form.formKey.toLowerCase().replace(/ |-/g, "_"));
        }

        // form에 따른 포켓몬 정보 저장
        formpokemonData._id = Species[form.speciesId].toLowerCase() + tail;
        formpokemonData.imageId = Species[form.speciesId].toLowerCase() + imageTail.toLowerCase().replace(/ |-/g, "_");
        formpokemonData.pokedexNumber = form.speciesId;
        formpokemonData.name = Utils.getSName("en", pokemon) + (Utils.getName("en", pokemon, form.formIndex) === "" ? "" : " " + Utils.getName("en", pokemon, form.formIndex));
        formpokemonData.koName = Utils.getSName("ko", pokemon) + (Utils.getName("ko", pokemon, form.formIndex) === "" ? "" : " " + Utils.getName("ko", pokemon, form.formIndex));
        formpokemonData.speciesName = Utils.getSName("ko", pokemon);
        formpokemonData.canChangeForm = pokemon.canChangeForm;
        formpokemonData.formName = Utils.getName("ko", pokemon, form.formIndex);
        formpokemonData.baseExp = form.baseExp;
        formpokemonData.friendship = form.baseFriendship;
        formpokemonData.types = formtypelist;
        formpokemonData.normalAbilityIds = formabilitylist;
        formpokemonData.hiddenAbilityId = form.abilityHidden === Abilities.NONE ? "" : Abilities[form.abilityHidden].toLowerCase();
        formpokemonData.passiveAbilityId = starterPassiveAbilities[form.getRootSpeciesId()][0] == Abilities.NONE ? "" : Abilities[starterPassiveAbilities[form.getRootSpeciesId()][0]].toLowerCase();
        formpokemonData.generation = form.generation;
        formpokemonData.legendary = legend;
        formpokemonData.subLegendary = subLegend;
        formpokemonData.mythical = myth;
        // @ts-ignore
        formpokemonData.evolutions = getEvolutionsById(evolutionChains, formpokemonData._id);
        formpokemonData.formChanges = formchangemap.has(formpokemonData._id) ? formchangemap.get(formpokemonData._id) : [];
        formpokemonData.baseTotal = form.baseTotal;
        formpokemonData.hp = form.getBaseStat(Stat.HP);
        formpokemonData.attack = form.getBaseStat(Stat.ATK);
        formpokemonData.defense = form.getBaseStat(Stat.DEF);
        formpokemonData.specialAttack = form.getBaseStat(Stat.SPATK);
        formpokemonData.specialDefense = form.getBaseStat(Stat.SPDEF);
        formpokemonData.speed = form.getBaseStat(Stat.SPD);
        formpokemonData.height = form.height;
        formpokemonData.weight = form.weight;
        formpokemonData.eggMoveIds = speciesEggMoves[form.getRootSpeciesId()].map((eggMove) => Moves[eggMove].toLowerCase());
        formpokemonData.levelMoves = formlevelmovelist;
        formpokemonData.technicalMachineMoveIds = formtmslist;
        formpokemonData.biomeIds = biomeMap.get(Species[Species[form.speciesId]]);

        aapokemon.push(formpokemonData);
      }
    } else {
      if (!fileNamesSet.has(Species[Species[pokemon.speciesId]] + ".png")) {
        continue;
      }
      // 포켓몬 데이터 형식
      const pokemonData = {
        _id: "",
        imageId: "",
        pokedexNumber: 1,
        name: "",
        koName: "",
        speciesName: "",
        canChangeForm: false,
        formName: "",
        baseExp: 1,
        friendship: 1,
        types: [],
        normalAbilityIds: [],
        hiddenAbilityId: "",
        passiveAbilityId: "",
        generation: 1,
        legendary: false,
        subLegendary: false,
        mythical: false,
        evolutions: [],
        formChanges: [],
        baseTotal: 1,
        hp: 1,
        attack: 1,
        defense: 1,
        specialAttack: 1,
        specialDefense: 1,
        speed: 1,
        height: 1.0,
        weight: 1.0,
        eggMoveIds: [],
        levelMoves: [],
        technicalMachineMoveIds: [],
        biomeIds: []
      };

      // 일반적인 포켓몬 정보 파싱
      // koName
      // i18next.changeLanguage("ko");
      const KONAME = i18next.t(`pokemon:${Species[pokemon.speciesId].toLowerCase()}`);

      // types
      let typelist = [];
      if (pokemon.type1 !== null) {
        typelist.push(PokemonType[pokemon.type1].toLowerCase());
      }
      if (pokemon.type2 !== null) {
        typelist.push(PokemonType[pokemon.type2].toLowerCase());
      }
      typelist = [...new Set(typelist)];

      // normalAbilityIds
      let abilitylist = [];
      abilitylist.push(Abilities[pokemon.ability1].toLowerCase());
      abilitylist.push(Abilities[pokemon.ability2].toLowerCase());
      abilitylist = [...new Set(abilitylist)];

      // levelmoves
      const levelmovelist: Moves[] = [];
      const eachlevelmovelist = pokemonSpeciesLevelMoves[pokemon.speciesId];
      for (let i = 0; i < eachlevelmovelist.length; i++) {
        const levelm = {
          level: eachlevelmovelist[i][0],
          moveId: Moves[eachlevelmovelist[i][1]].toLowerCase()
        };
        levelmovelist.push(levelm);
      }

      // tms
      let tmslist = [];
      if (tmsMap.get(Species[pokemon.speciesId].toLowerCase()) === undefined) {
        tmslist = [];
      } else {
        tmslist = tmsMap.get(Species[pokemon.speciesId].toLowerCase());
      }

      // 일반적인 포켓몬 정보 저장
      pokemonData._id = Species[pokemon.speciesId].toLowerCase();
      pokemonData.imageId = Species[pokemon.speciesId].toLowerCase();
      pokemonData.pokedexNumber = pokemon.speciesId;
      pokemonData.name = Utils.getSName("en", pokemon);
      pokemonData.koName = Utils.getSName("ko", pokemon);
      pokemonData.speciesName = Utils.getSName("ko", pokemon);
      pokemonData.canChangeForm = pokemon.canChangeForm;
      pokemonData.formName = "";
      pokemonData.baseExp = pokemon.baseExp;
      pokemonData.friendship = pokemon.baseFriendship;
      pokemonData.types = typelist;
      pokemonData.normalAbilityIds = abilitylist;
      pokemonData.hiddenAbilityId = pokemon.abilityHidden === Abilities.NONE ? "" : Abilities[pokemon.abilityHidden].toLowerCase();
      pokemonData.passiveAbilityId = Abilities[starterPassiveAbilities[pokemon.getRootSpeciesId()][0]].toLowerCase();
      pokemonData.generation = pokemon.generation;
      pokemonData.legendary = legend;
      pokemonData.subLegendary = subLegend;
      pokemonData.mythical = myth;
      // @ts-ignore
      pokemonData.evolutions = getEvolutionsById(evolutionChains, pokemonData._id);
      pokemonData.formChanges = formchangemap.has(pokemonData._id) ? formchangemap.get(pokemonData._id) : [];
      pokemonData.baseTotal = pokemon.baseTotal;
      pokemonData.hp = pokemon.getBaseStat(Stat.HP);
      pokemonData.attack = pokemon.getBaseStat(Stat.ATK);
      pokemonData.defense = pokemon.getBaseStat(Stat.DEF);
      pokemonData.specialAttack = pokemon.getBaseStat(Stat.SPATK);
      pokemonData.specialDefense = pokemon.getBaseStat(Stat.SPDEF);
      pokemonData.speed = pokemon.getBaseStat(Stat.SPD);
      pokemonData.height = pokemon.height;
      pokemonData.weight = pokemon.weight;
      pokemonData.eggMoveIds = speciesEggMoves[pokemon.getRootSpeciesId()].map((eggMove) => Moves[eggMove].toLowerCase());
      pokemonData.levelMoves = levelmovelist;
      pokemonData.technicalMachineMoveIds = tmslist;
      pokemonData.biomeIds = biomeMap.get(Species[Species[pokemon.speciesId]]);

      aapokemon.push(pokemonData);
    }
  }
  const jsonFilePath = path.join(__dirname, "pokemon-json-all.json");
  fs.writeFileSync(jsonFilePath, JSON.stringify(aapokemon, null, 2));
};

// 테스트 스위트 추가
describe("Pokemon JSON 파일 생성 테스트", () => {
  it("JSON 파일이 올바르게 생성되는지 테스트", () => {
    generatePokemonJsonFiles();
  });
});
