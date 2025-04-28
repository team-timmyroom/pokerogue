import { Species } from "#enums/species";
import { Biome } from "#enums/biome";
import { PokemonType } from "#enums/pokemon-type";
import { BiomePoolTier } from "#app/data/balance/biomes";
import { TimeOfDay } from "#enums/time-of-day";

export const selfPokemonBiomes = [
    [ Species.BULBASAUR, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.IVYSAUR, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.VENUSAUR, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.GRASS, BiomePoolTier.RARE ],
      [ Biome.GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CHARMANDER, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CHARMELEON, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CHARIZARD, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SQUIRTLE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.WARTORTLE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BLASTOISE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CATERPIE, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.METAPOD, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BUTTERFREE, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.WEEDLE, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.KAKUNA, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.BEEDRILL, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PIDGEY, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PIDGEOTTO, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PIDGEOT, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.RATTATA, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ],
      [ Biome.SLUM, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.RATICATE, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ],
      [ Biome.SLUM, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SPEAROW, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FEAROW, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.EKANS, PokemonType.POISON, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ARBOK, PokemonType.POISON, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SWAMP, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PIKACHU, PokemonType.ELECTRIC, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.RAICHU, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SANDSHREW, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SANDSLASH, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.COMMON ],
      [ Biome.DESERT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.NIDORAN_F, PokemonType.POISON, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, TimeOfDay.DAY ],
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, TimeOfDay.DAY ]
    ]
    ],
    [ Species.NIDORINA, PokemonType.POISON, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, TimeOfDay.DAY ]
    ]
    ],
    [ Species.NIDOQUEEN, PokemonType.POISON, PokemonType.GROUND, [
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS, TimeOfDay.DAY ]
    ]
    ],
    [ Species.NIDORAN_M, PokemonType.POISON, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, TimeOfDay.DAY ],
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, TimeOfDay.DAY ]
    ]
    ],
    [ Species.NIDORINO, PokemonType.POISON, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, TimeOfDay.DAY ]
    ]
    ],
    [ Species.NIDOKING, PokemonType.POISON, PokemonType.GROUND, [
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS, TimeOfDay.DAY ]
    ]
    ],
    [ Species.CLEFAIRY, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.SPACE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CLEFABLE, PokemonType.FAIRY, -1, [
      [ Biome.SPACE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.VULPIX, PokemonType.FIRE, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.NINETALES, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.JIGGLYPUFF, PokemonType.NORMAL, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.WIGGLYTUFF, PokemonType.NORMAL, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ZUBAT, PokemonType.POISON, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GOLBAT, PokemonType.POISON, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ODDISH, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.GLOOM, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.VILEPLUME, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PARAS, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PARASECT, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.VENONAT, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.VENOMOTH, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.DIGLETT, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DUGTRIO, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MEOWTH, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PERSIAN, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PSYDUCK, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.LAKE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GOLDUCK, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.LAKE, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MANKEY, PokemonType.FIGHTING, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PRIMEAPE, PokemonType.FIGHTING, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GROWLITHE, PokemonType.FIRE, -1, [
      [ Biome.GRASS, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ARCANINE, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.POLIWAG, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.POLIWHIRL, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.POLIWRATH, PokemonType.WATER, PokemonType.FIGHTING, [
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ABRA, PokemonType.PSYCHIC, -1, [
      [ Biome.TOWN, BiomePoolTier.RARE ],
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.KADABRA, PokemonType.PSYCHIC, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.ALAKAZAM, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MACHOP, PokemonType.FIGHTING, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MACHOKE, PokemonType.FIGHTING, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MACHAMP, PokemonType.FIGHTING, -1, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BELLSPROUT, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.WEEPINBELL, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VICTREEBEL, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TENTACOOL, PokemonType.WATER, PokemonType.POISON, [
      [ Biome.SEA, BiomePoolTier.COMMON ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.TENTACRUEL, PokemonType.WATER, PokemonType.POISON, [
      [ Biome.SEA, BiomePoolTier.COMMON ],
      [ Biome.SEA, BiomePoolTier.BOSS ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GEODUDE, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GRAVELER, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GOLEM, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PONYTA, PokemonType.FIRE, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.RAPIDASH, PokemonType.FIRE, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SLOWPOKE, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SLOWBRO, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAGNEMITE, PokemonType.ELECTRIC, PokemonType.STEEL, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MAGNETON, PokemonType.ELECTRIC, PokemonType.STEEL, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FARFETCHD, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DODUO, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.DODRIO, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SEEL, PokemonType.WATER, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DEWGONG, PokemonType.WATER, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GRIMER, PokemonType.POISON, -1, [
      [ Biome.SLUM, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MUK, PokemonType.POISON, -1, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ],
      [ Biome.SLUM, BiomePoolTier.COMMON ],
      [ Biome.SLUM, BiomePoolTier.BOSS ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHELLDER, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.BEACH, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CLOYSTER, PokemonType.WATER, PokemonType.ICE, [
      [ Biome.BEACH, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.GASTLY, PokemonType.GHOST, PokemonType.POISON, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HAUNTER, PokemonType.GHOST, PokemonType.POISON, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GENGAR, PokemonType.GHOST, PokemonType.POISON, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ONIX, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.BADLANDS, BiomePoolTier.RARE ],
      [ Biome.CAVE, BiomePoolTier.RARE ],
      [ Biome.CAVE, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DROWZEE, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HYPNO, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.KRABBY, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.KINGLER, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.VOLTORB, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ELECTRODE, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.EXEGGCUTE, PokemonType.GRASS, PokemonType.PSYCHIC, [
      [ Biome.FOREST, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.EXEGGUTOR, PokemonType.GRASS, PokemonType.PSYCHIC, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CUBONE, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MAROWAK, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS, TimeOfDay.NIGHT ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY, TimeOfDay.DUSK ]]
    ]
    ],
    [ Species.HITMONLEE, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.HITMONCHAN, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.LICKITUNG, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.KOFFING, PokemonType.POISON, -1, [
      [ Biome.SLUM, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.WEEZING, PokemonType.POISON, -1, [
      [ Biome.SLUM, BiomePoolTier.COMMON ],
      [ Biome.SLUM, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.RHYHORN, PokemonType.GROUND, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.RHYDON, PokemonType.GROUND, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CHANSEY, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.MEADOW, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.TANGELA, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.KANGASKHAN, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.SUPER_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HORSEA, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SEADRA, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GOLDEEN, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.COMMON ],
      [ Biome.SEA, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SEAKING, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ],
      [ Biome.SEA, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.STARYU, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.STARMIE, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.BEACH, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BEACH, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.MR_MIME, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.RUINS, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SCYTHER, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.TALL_GRASS, BiomePoolTier.SUPER_RARE ],
      [ Biome.FOREST, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.JYNX, PokemonType.ICE, PokemonType.PSYCHIC, [
      [ Biome.ICE_CAVE, BiomePoolTier.RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ELECTABUZZ, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MAGMAR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PINSIR, PokemonType.BUG, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TAUROS, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAGIKARP, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GYARADOS, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.LAPRAS, PokemonType.WATER, PokemonType.ICE, [
      [ Biome.SEA, BiomePoolTier.RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DITTO, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.ULTRA_RARE ],
      [ Biome.PLAINS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.METROPOLIS, BiomePoolTier.SUPER_RARE ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.SUPER_RARE ],
      [ Biome.LABORATORY, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EEVEE, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.SUPER_RARE ],
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.METROPOLIS, BiomePoolTier.SUPER_RARE ],
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.VAPOREON, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.SUPER_RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.JOLTEON, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.SUPER_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FLAREON, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.SUPER_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PORYGON, PokemonType.NORMAL, -1, [
      [ Biome.FACTORY, BiomePoolTier.RARE ],
      [ Biome.SPACE, BiomePoolTier.SUPER_RARE ],
      [ Biome.LABORATORY, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.OMANYTE, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.OMASTAR, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.KABUTO, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.KABUTOPS, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.AERODACTYL, PokemonType.ROCK, PokemonType.FLYING, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SNORLAX, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ARTICUNO, PokemonType.ICE, PokemonType.FLYING, [
      [ Biome.ICE_CAVE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ZAPDOS, PokemonType.ELECTRIC, PokemonType.FLYING, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MOLTRES, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.DRATINI, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DRAGONAIR, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DRAGONITE, PokemonType.DRAGON, PokemonType.FLYING, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MEWTWO, PokemonType.PSYCHIC, -1, [
      [ Biome.LABORATORY, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.MEW, PokemonType.PSYCHIC, -1, [ ]
    ],
    [ Species.CHIKORITA, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BAYLEEF, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.MEGANIUM, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CYNDAQUIL, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.QUILAVA, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TYPHLOSION, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TOTODILE, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CROCONAW, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FERALIGATR, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.RARE ],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SENTRET, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FURRET, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HOOTHOOT, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.NOCTOWL, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.LEDYBA, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON, TimeOfDay.DAWN ],
      [ Biome.MEADOW, BiomePoolTier.COMMON, TimeOfDay.DAWN ]
    ]
    ],
    [ Species.LEDIAN, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.MEADOW, BiomePoolTier.COMMON, TimeOfDay.DAWN ],
      [ Biome.MEADOW, BiomePoolTier.BOSS, TimeOfDay.DAWN ]
    ]
    ],
    [ Species.SPINARAK, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.TOWN, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.ARIADOS, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TALL_GRASS, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.CROBAT, PokemonType.POISON, PokemonType.FLYING, [
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CHINCHOU, PokemonType.WATER, PokemonType.ELECTRIC, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LANTURN, PokemonType.WATER, PokemonType.ELECTRIC, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.SEABED, BiomePoolTier.COMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PICHU, PokemonType.ELECTRIC, -1, [ ]
    ],
    [ Species.CLEFFA, PokemonType.FAIRY, -1, [ ]
    ],
    [ Species.IGGLYBUFF, PokemonType.NORMAL, PokemonType.FAIRY, [ ]
    ],
    [ Species.TOGEPI, PokemonType.FAIRY, -1, [ ]
    ],
    [ Species.TOGETIC, PokemonType.FAIRY, PokemonType.FLYING, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.NATU, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.XATU, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MAREEP, PokemonType.ELECTRIC, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FLAAFFY, PokemonType.ELECTRIC, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.AMPHAROS, PokemonType.ELECTRIC, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.BELLOSSOM, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.MARILL, PokemonType.WATER, PokemonType.FAIRY, [
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.AZUMARILL, PokemonType.WATER, PokemonType.FAIRY, [
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.LAKE, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SUDOWOODO, PokemonType.ROCK, -1, [
      [ Biome.GRASS, BiomePoolTier.SUPER_RARE ],
      [ Biome.GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.POLITOED, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE ],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HOPPIP, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SKIPLOOM, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.JUMPLUFF, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.AIPOM, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SUNKERN, PokemonType.GRASS, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SUNFLORA, PokemonType.GRASS, -1, [
      [ Biome.GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.YANMA, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.WOOPER, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.QUAGSIRE, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ESPEON, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.SUPER_RARE, TimeOfDay.DAY ],
      [ Biome.RUINS, BiomePoolTier.BOSS_RARE, TimeOfDay.DAY ]
    ]
    ],
    [ Species.UMBREON, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.SUPER_RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.MURKROW, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE, TimeOfDay.NIGHT ],
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SLOWKING, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.LAKE, BiomePoolTier.SUPER_RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.MISDREAVUS, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.UNOWN, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.WOBBUFFET, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GIRAFARIG, PokemonType.NORMAL, PokemonType.PSYCHIC, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.PINECO, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.FORRETRESS, PokemonType.BUG, PokemonType.STEEL, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.DUNSPARCE, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.GLIGAR, PokemonType.GROUND, PokemonType.FLYING, [
      [ Biome.BADLANDS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.STEELIX, PokemonType.STEEL, PokemonType.GROUND, [
      [ Biome.BADLANDS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SNUBBULL, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GRANBULL, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.QWILFISH, PokemonType.WATER, PokemonType.POISON, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SCIZOR, PokemonType.BUG, PokemonType.STEEL, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SHUCKLE, PokemonType.BUG, PokemonType.ROCK, [
      [ Biome.CAVE, BiomePoolTier.SUPER_RARE ],
      [ Biome.CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HERACROSS, PokemonType.BUG, PokemonType.FIGHTING, [
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SNEASEL, PokemonType.DARK, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TEDDIURSA, PokemonType.NORMAL, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.URSARING, PokemonType.NORMAL, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SLUGMA, PokemonType.FIRE, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MAGCARGO, PokemonType.FIRE, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SWINUB, PokemonType.ICE, PokemonType.GROUND, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PILOSWINE, PokemonType.ICE, PokemonType.GROUND, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CORSOLA, PokemonType.WATER, PokemonType.ROCK, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.REMORAID, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.OCTILLERY, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DELIBIRD, PokemonType.ICE, PokemonType.FLYING, [
      [ Biome.ICE_CAVE, BiomePoolTier.SUPER_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.MANTINE, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SKARMORY, PokemonType.STEEL, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.HOUNDOUR, PokemonType.DARK, PokemonType.FIRE, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HOUNDOOM, PokemonType.DARK, PokemonType.FIRE, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.KINGDRA, PokemonType.WATER, PokemonType.DRAGON, [
      [ Biome.SEA, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEA, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PHANPY, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.DONPHAN, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BADLANDS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PORYGON2, PokemonType.NORMAL, -1, [
      [ Biome.FACTORY, BiomePoolTier.RARE ],
      [ Biome.SPACE, BiomePoolTier.SUPER_RARE ],
      [ Biome.LABORATORY, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.STANTLER, PokemonType.NORMAL, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SMEARGLE, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.TYROGUE, PokemonType.FIGHTING, -1, [ ]
    ],
    [ Species.HITMONTOP, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.SUPER_RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS_RARE ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.SMOOCHUM, PokemonType.ICE, PokemonType.PSYCHIC, [ ]
    ],
    [ Species.ELEKID, PokemonType.ELECTRIC, -1, [ ]
    ],
    [ Species.MAGBY, PokemonType.FIRE, -1, [ ]
    ],
    [ Species.MILTANK, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BLISSEY, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.RAIKOU, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ENTEI, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.SUICUNE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.LARVITAR, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PUPITAR, PokemonType.ROCK, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.TYRANITAR, PokemonType.ROCK, PokemonType.DARK, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.WASTELAND, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.LUGIA, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.HO_OH, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.CELEBI, PokemonType.PSYCHIC, PokemonType.GRASS, [ ]
    ],
    [ Species.TREECKO, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GROVYLE, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SCEPTILE, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TORCHIC, PokemonType.FIRE, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.COMBUSKEN, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BLAZIKEN, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.MUDKIP, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.MARSHTOMP, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SWAMPERT, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.RARE ],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.POOCHYENA, PokemonType.DARK, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.MIGHTYENA, PokemonType.DARK, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ZIGZAGOON, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.COMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LINOONE, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.BOSS ],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.WURMPLE, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SILCOON, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, TimeOfDay.DAY ]
    ]
    ],
    [ Species.BEAUTIFLY, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.DAY ],
      [ Biome.FOREST, BiomePoolTier.BOSS, TimeOfDay.DAY ]
    ]
    ],
    [ Species.CASCOON, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.DUSTOX, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.LOTAD, PokemonType.WATER, PokemonType.GRASS, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.LOMBRE, PokemonType.WATER, PokemonType.GRASS, [
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.LUDICOLO, PokemonType.WATER, PokemonType.GRASS, [
      [ Biome.SWAMP, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SEEDOT, PokemonType.GRASS, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.NUZLEAF, PokemonType.GRASS, PokemonType.DARK, [
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SHIFTRY, PokemonType.GRASS, PokemonType.DARK, [
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.TAILLOW, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SWELLOW, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.WINGULL, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PELIPPER, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.RALTS, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.TOWN, BiomePoolTier.SUPER_RARE ],
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.KIRLIA, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GARDEVOIR, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SURSKIT, PokemonType.BUG, PokemonType.WATER, [
      [ Biome.TOWN, BiomePoolTier.RARE ],
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MASQUERAIN, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHROOMISH, PokemonType.GRASS, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.BRELOOM, PokemonType.GRASS, PokemonType.FIGHTING, [
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SLAKOTH, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.VIGOROTH, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SLAKING, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.NINCADA, PokemonType.BUG, PokemonType.GROUND, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON ],
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.NINJASK, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHEDINJA, PokemonType.BUG, PokemonType.GHOST, [
      [ Biome.TALL_GRASS, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.WHISMUR, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LOUDRED, PokemonType.NORMAL, -1, [
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.EXPLOUD, PokemonType.NORMAL, -1, [
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAKUHITA, PokemonType.FIGHTING, -1, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HARIYAMA, PokemonType.FIGHTING, -1, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.DOJO, BiomePoolTier.COMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.AZURILL, PokemonType.NORMAL, PokemonType.FAIRY, [ ]
    ],
    [ Species.NOSEPASS, PokemonType.ROCK, -1, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SKITTY, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.DELCATTY, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SABLEYE, PokemonType.DARK, PokemonType.GHOST, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAWILE, PokemonType.STEEL, PokemonType.FAIRY, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ARON, PokemonType.STEEL, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.LAIRON, PokemonType.STEEL, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.AGGRON, PokemonType.STEEL, PokemonType.ROCK, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MEDITITE, PokemonType.FIGHTING, PokemonType.PSYCHIC, [
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MEDICHAM, PokemonType.FIGHTING, PokemonType.PSYCHIC, [
      [ Biome.DOJO, BiomePoolTier.COMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ELECTRIKE, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MANECTRIC, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PLUSLE, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MINUN, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.VOLBEAT, PokemonType.BUG, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.ILLUMISE, PokemonType.BUG, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.ROSELIA, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GULPIN, PokemonType.POISON, -1, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SWALOT, PokemonType.POISON, -1, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CARVANHA, PokemonType.WATER, PokemonType.DARK, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SHARPEDO, PokemonType.WATER, PokemonType.DARK, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SEA, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.WAILMER, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.WAILORD, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.NUMEL, PokemonType.FIRE, PokemonType.GROUND, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CAMERUPT, PokemonType.FIRE, PokemonType.GROUND, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.COMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TORKOAL, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SPOINK, PokemonType.PSYCHIC, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GRUMPIG, PokemonType.PSYCHIC, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SPINDA, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TRAPINCH, PokemonType.GROUND, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VIBRAVA, PokemonType.GROUND, PokemonType.DRAGON, [
      [ Biome.DESERT, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FLYGON, PokemonType.GROUND, PokemonType.DRAGON, [
      [ Biome.DESERT, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CACNEA, PokemonType.GRASS, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.CACTURNE, PokemonType.GRASS, PokemonType.DARK, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DESERT, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SWABLU, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.ALTARIA, PokemonType.DRAGON, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.ZANGOOSE, PokemonType.NORMAL, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SEVIPER, PokemonType.POISON, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.LUNATONE, PokemonType.ROCK, PokemonType.PSYCHIC, [
      [ Biome.SPACE, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.SPACE, BiomePoolTier.BOSS, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.SOLROCK, PokemonType.ROCK, PokemonType.PSYCHIC, [
      [ Biome.SPACE, BiomePoolTier.COMMON, TimeOfDay.DAY ],
      [ Biome.SPACE, BiomePoolTier.BOSS, TimeOfDay.DAY ]
    ]
    ],
    [ Species.BARBOACH, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.WHISCASH, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CORPHISH, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CRAWDAUNT, PokemonType.WATER, PokemonType.DARK, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BALTOY, PokemonType.GROUND, PokemonType.PSYCHIC, [
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.SPACE, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CLAYDOL, PokemonType.GROUND, PokemonType.PSYCHIC, [
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ],
      [ Biome.SPACE, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.LILEEP, PokemonType.ROCK, PokemonType.GRASS, [
      [ Biome.DESERT, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.CRADILY, PokemonType.ROCK, PokemonType.GRASS, [
      [ Biome.DESERT, BiomePoolTier.SUPER_RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ANORITH, PokemonType.ROCK, PokemonType.BUG, [
      [ Biome.DESERT, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.ARMALDO, PokemonType.ROCK, PokemonType.BUG, [
      [ Biome.DESERT, BiomePoolTier.SUPER_RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FEEBAS, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.MILOTIC, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CASTFORM, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.KECLEON, PokemonType.NORMAL, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHUPPET, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BANETTE, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DUSKULL, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DUSCLOPS, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.TROPIUS, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CHIMECHO, PokemonType.PSYCHIC, -1, [
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ABSOL, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.WYNAUT, PokemonType.PSYCHIC, -1, [ ]
    ],
    [ Species.SNORUNT, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GLALIE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SPHEAL, PokemonType.ICE, PokemonType.WATER, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SEALEO, PokemonType.ICE, PokemonType.WATER, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.WALREIN, PokemonType.ICE, PokemonType.WATER, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CLAMPERL, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HUNTAIL, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GOREBYSS, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.RELICANTH, PokemonType.WATER, PokemonType.ROCK, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.LUVDISC, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BAGON, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SHELGON, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SALAMENCE, PokemonType.DRAGON, PokemonType.FLYING, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BELDUM, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.FACTORY, BiomePoolTier.SUPER_RARE ],
      [ Biome.SPACE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.METANG, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.FACTORY, BiomePoolTier.SUPER_RARE ],
      [ Biome.SPACE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.METAGROSS, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.FACTORY, BiomePoolTier.SUPER_RARE ],
      [ Biome.SPACE, BiomePoolTier.RARE ],
      [ Biome.SPACE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.REGIROCK, PokemonType.ROCK, -1, [
      [ Biome.DESERT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.REGICE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.REGISTEEL, PokemonType.STEEL, -1, [
      [ Biome.RUINS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.LATIAS, PokemonType.DRAGON, PokemonType.PSYCHIC, [
      [ Biome.PLAINS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.LATIOS, PokemonType.DRAGON, PokemonType.PSYCHIC, [
      [ Biome.PLAINS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.KYOGRE, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.GROUDON, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.RAYQUAZA, PokemonType.DRAGON, PokemonType.FLYING, [
      [ Biome.SPACE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.JIRACHI, PokemonType.STEEL, PokemonType.PSYCHIC, [ ]
    ],
    [ Species.DEOXYS, PokemonType.PSYCHIC, -1, [ ]
    ],
    [ Species.TURTWIG, PokemonType.GRASS, -1, [
      [ Biome.GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GROTLE, PokemonType.GRASS, -1, [
      [ Biome.GRASS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TORTERRA, PokemonType.GRASS, PokemonType.GROUND, [
      [ Biome.GRASS, BiomePoolTier.RARE ],
      [ Biome.GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CHIMCHAR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.MONFERNO, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.INFERNAPE, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PIPLUP, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.PRINPLUP, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EMPOLEON, PokemonType.WATER, PokemonType.STEEL, [
      [ Biome.SEA, BiomePoolTier.RARE ],
      [ Biome.SEA, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.STARLY, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.STARAVIA, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.STARAPTOR, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BIDOOF, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BIBAREL, PokemonType.NORMAL, PokemonType.WATER, [
      [ Biome.PLAINS, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.KRICKETOT, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.KRICKETUNE, PokemonType.BUG, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SHINX, PokemonType.ELECTRIC, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LUXIO, PokemonType.ELECTRIC, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LUXRAY, PokemonType.ELECTRIC, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BUDEW, PokemonType.GRASS, PokemonType.POISON, [ ]
    ],
    [ Species.ROSERADE, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CRANIDOS, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.RAMPARDOS, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SHIELDON, PokemonType.ROCK, PokemonType.STEEL, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.BASTIODON, PokemonType.ROCK, PokemonType.STEEL, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.BURMY, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ],
      [ Biome.SLUM, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.WORMADAM, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.FOREST, BiomePoolTier.BOSS ],
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ],
      [ Biome.SLUM, BiomePoolTier.UNCOMMON ],
      [ Biome.SLUM, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MOTHIM, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.COMBEE, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VESPIQUEN, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PACHIRISU, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.BUIZEL, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FLOATZEL, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON ],
      [ Biome.SEA, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CHERUBI, PokemonType.GRASS, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CHERRIM, PokemonType.GRASS, -1, [
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SHELLOS, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GASTRODON, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ],
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.AMBIPOM, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DRIFLOON, PokemonType.GHOST, PokemonType.FLYING, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DRIFBLIM, PokemonType.GHOST, PokemonType.FLYING, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BUNEARY, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.LOPUNNY, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MISMAGIUS, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.HONCHKROW, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GLAMEOW, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PURUGLY, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CHINGLING, PokemonType.PSYCHIC, -1, [
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.STUNKY, PokemonType.POISON, PokemonType.DARK, [
      [ Biome.SLUM, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SKUNTANK, PokemonType.POISON, PokemonType.DARK, [
      [ Biome.SLUM, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.BRONZOR, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.FACTORY, BiomePoolTier.UNCOMMON ],
      [ Biome.SPACE, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BRONZONG, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.FACTORY, BiomePoolTier.UNCOMMON ],
      [ Biome.SPACE, BiomePoolTier.COMMON ],
      [ Biome.SPACE, BiomePoolTier.BOSS ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BONSLY, PokemonType.ROCK, -1, [ ]
    ],
    [ Species.MIME_JR, PokemonType.PSYCHIC, PokemonType.FAIRY, [ ]
    ],
    [ Species.HAPPINY, PokemonType.NORMAL, -1, [ ]
    ],
    [ Species.CHATOT, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.SPIRITOMB, PokemonType.GHOST, PokemonType.DARK, [
      [ Biome.GRAVEYARD, BiomePoolTier.SUPER_RARE ],
      [ Biome.ABYSS, BiomePoolTier.RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GIBLE, PokemonType.DRAGON, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GABITE, PokemonType.DRAGON, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GARCHOMP, PokemonType.DRAGON, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MUNCHLAX, PokemonType.NORMAL, -1, [ ]
    ],
    [ Species.RIOLU, PokemonType.FIGHTING, -1, [ ]
    ],
    [ Species.LUCARIO, PokemonType.FIGHTING, PokemonType.STEEL, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.HIPPOPOTAS, PokemonType.GROUND, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HIPPOWDON, PokemonType.GROUND, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.DESERT, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SKORUPI, PokemonType.POISON, PokemonType.BUG, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.DRAPION, PokemonType.POISON, PokemonType.DARK, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.COMMON ],
      [ Biome.DESERT, BiomePoolTier.BOSS ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CROAGUNK, PokemonType.POISON, PokemonType.FIGHTING, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.TOXICROAK, PokemonType.POISON, PokemonType.FIGHTING, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CARNIVINE, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FINNEON, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.LUMINEON, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON, TimeOfDay.NIGHT ],
      [ Biome.SEA, BiomePoolTier.BOSS, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.MANTYKE, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.SEABED, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SNOVER, PokemonType.GRASS, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ABOMASNOW, PokemonType.GRASS, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.WEAVILE, PokemonType.DARK, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAGNEZONE, PokemonType.ELECTRIC, PokemonType.STEEL, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.LICKILICKY, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.RHYPERIOR, PokemonType.GROUND, PokemonType.ROCK, [
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TANGROWTH, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ELECTIVIRE, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAGMORTAR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TOGEKISS, PokemonType.FAIRY, PokemonType.FLYING, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.YANMEGA, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.LEAFEON, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GLACEON, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GLISCOR, PokemonType.GROUND, PokemonType.FLYING, [
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAMOSWINE, PokemonType.ICE, PokemonType.GROUND, [
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PORYGON_Z, PokemonType.NORMAL, -1, [
      [ Biome.SPACE, BiomePoolTier.BOSS_RARE ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GALLADE, PokemonType.PSYCHIC, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.SUPER_RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PROBOPASS, PokemonType.ROCK, PokemonType.STEEL, [
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DUSKNOIR, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FROSLASS, PokemonType.ICE, PokemonType.GHOST, [
      [ Biome.ICE_CAVE, BiomePoolTier.RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ROTOM, PokemonType.ELECTRIC, PokemonType.GHOST, [
      [ Biome.LABORATORY, BiomePoolTier.SUPER_RARE ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS_SUPER_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.SUPER_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ],
      [ Biome.SEA, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEA, BiomePoolTier.BOSS_SUPER_RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.SUPER_RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_SUPER_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_SUPER_RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.SUPER_RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.UXIE, PokemonType.PSYCHIC, -1, [
      [ Biome.CAVE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.CAVE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MESPRIT, PokemonType.PSYCHIC, -1, [
      [ Biome.LAKE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.AZELF, PokemonType.PSYCHIC, -1, [
      [ Biome.SWAMP, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SWAMP, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.DIALGA, PokemonType.STEEL, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.PALKIA, PokemonType.WATER, PokemonType.DRAGON, [
      [ Biome.ABYSS, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.HEATRAN, PokemonType.FIRE, PokemonType.STEEL, [
      [ Biome.VOLCANO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.REGIGIGAS, PokemonType.NORMAL, -1, [
      [ Biome.TEMPLE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.GIRATINA, PokemonType.GHOST, PokemonType.DRAGON, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.CRESSELIA, PokemonType.PSYCHIC, -1, [
      [ Biome.BEACH, BiomePoolTier.ULTRA_RARE ],
      [ Biome.BEACH, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.PHIONE, PokemonType.WATER, -1, [ ]
    ],
    [ Species.MANAPHY, PokemonType.WATER, -1, [ ]
    ],
    [ Species.DARKRAI, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.SHAYMIN, PokemonType.GRASS, -1, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.ARCEUS, PokemonType.NORMAL, -1, [ ]
    ],
    [ Species.VICTINI, PokemonType.PSYCHIC, PokemonType.FIRE, [ ]
    ],
    [ Species.SNIVY, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SERVINE, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SERPERIOR, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TEPIG, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.PIGNITE, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EMBOAR, PokemonType.FIRE, PokemonType.FIGHTING, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.OSHAWOTT, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DEWOTT, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SAMUROTT, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PATRAT, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.WATCHOG, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.LILLIPUP, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HERDIER, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.STOUTLAND, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PURRLOIN, PokemonType.DARK, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.LIEPARD, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PANSAGE, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SIMISAGE, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON ],
      [ Biome.FOREST, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PANSEAR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SIMISEAR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PANPOUR, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SIMIPOUR, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SEA, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MUNNA, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MUSHARNA, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.COMMON ],
      [ Biome.SPACE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PIDOVE, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TRANQUILL, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.UNFEZANT, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BLITZLE, PokemonType.ELECTRIC, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ZEBSTRIKA, PokemonType.ELECTRIC, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ROGGENROLA, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BOLDORE, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GIGALITH, PokemonType.ROCK, -1, [
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.WOOBAT, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SWOOBAT, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DRILBUR, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.EXCADRILL, PokemonType.GROUND, PokemonType.STEEL, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.AUDINO, PokemonType.NORMAL, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.RARE ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TIMBURR, PokemonType.FIGHTING, -1, [
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GURDURR, PokemonType.FIGHTING, -1, [
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CONKELDURR, PokemonType.FIGHTING, -1, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TYMPOLE, PokemonType.WATER, -1, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PALPITOAD, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SEISMITOAD, PokemonType.WATER, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.COMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.THROH, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SAWK, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SEWADDLE, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SWADLOON, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.LEAVANNY, PokemonType.BUG, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VENIPEDE, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.WHIRLIPEDE, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SCOLIPEDE, PokemonType.BUG, PokemonType.POISON, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.COTTONEE, PokemonType.GRASS, PokemonType.FAIRY, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.WHIMSICOTT, PokemonType.GRASS, PokemonType.FAIRY, [
      [ Biome.GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PETILIL, PokemonType.GRASS, -1, [
      [ Biome.GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.LILLIGANT, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BASCULIN, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SANDILE, PokemonType.GROUND, PokemonType.DARK, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.KROKOROK, PokemonType.GROUND, PokemonType.DARK, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.KROOKODILE, PokemonType.GROUND, PokemonType.DARK, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DESERT, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.DARUMAKA, PokemonType.FIRE, -1, [
      [ Biome.DESERT, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DARMANITAN, PokemonType.FIRE, -1, [
      [ Biome.DESERT, BiomePoolTier.RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MARACTUS, PokemonType.GRASS, -1, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DWEBBLE, PokemonType.BUG, PokemonType.ROCK, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CRUSTLE, PokemonType.BUG, PokemonType.ROCK, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SCRAGGY, PokemonType.DARK, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SCRAFTY, PokemonType.DARK, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SIGILYPH, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ],
      [ Biome.SPACE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.YAMASK, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.COFAGRIGUS, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ],
      [ Biome.TEMPLE, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TIRTOUGA, PokemonType.WATER, PokemonType.ROCK, [
      [ Biome.SEA, BiomePoolTier.SUPER_RARE ],
      [ Biome.BEACH, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.CARRACOSTA, PokemonType.WATER, PokemonType.ROCK, [
      [ Biome.SEA, BiomePoolTier.SUPER_RARE ],
      [ Biome.BEACH, BiomePoolTier.SUPER_RARE ],
      [ Biome.BEACH, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ARCHEN, PokemonType.ROCK, PokemonType.FLYING, [
      [ Biome.RUINS, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.ARCHEOPS, PokemonType.ROCK, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.RUINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TRUBBISH, PokemonType.POISON, -1, [
      [ Biome.SLUM, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GARBODOR, PokemonType.POISON, -1, [
      [ Biome.SLUM, BiomePoolTier.COMMON ],
      [ Biome.SLUM, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ZORUA, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ZOROARK, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MINCCINO, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CINCCINO, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GOTHITA, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GOTHORITA, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GOTHITELLE, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SOLOSIS, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.RARE ],
      [ Biome.LABORATORY, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.DUOSION, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.RARE ],
      [ Biome.LABORATORY, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.REUNICLUS, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.RARE ],
      [ Biome.SPACE, BiomePoolTier.BOSS ],
      [ Biome.LABORATORY, BiomePoolTier.UNCOMMON ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DUCKLETT, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SWANNA, PokemonType.WATER, PokemonType.FLYING, [
      [ Biome.LAKE, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.LAKE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VANILLITE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.VANILLISH, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.VANILLUXE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DEERLING, PokemonType.NORMAL, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SAWSBUCK, PokemonType.NORMAL, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.EMOLGA, PokemonType.ELECTRIC, PokemonType.FLYING, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.KARRABLAST, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ESCAVALIER, PokemonType.BUG, PokemonType.STEEL, [
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FOONGUS, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.AMOONGUSS, PokemonType.GRASS, PokemonType.POISON, [
      [ Biome.GRASS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.FRILLISH, PokemonType.WATER, PokemonType.GHOST, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.JELLICENT, PokemonType.WATER, PokemonType.GHOST, [
      [ Biome.SEABED, BiomePoolTier.COMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ALOMOMOLA, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.JOLTIK, PokemonType.BUG, PokemonType.ELECTRIC, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GALVANTULA, PokemonType.BUG, PokemonType.ELECTRIC, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FERROSEED, PokemonType.GRASS, PokemonType.STEEL, [
      [ Biome.CAVE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FERROTHORN, PokemonType.GRASS, PokemonType.STEEL, [
      [ Biome.CAVE, BiomePoolTier.RARE ],
      [ Biome.CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.KLINK, PokemonType.STEEL, -1, [
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.KLANG, PokemonType.STEEL, -1, [
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.KLINKLANG, PokemonType.STEEL, -1, [
      [ Biome.FACTORY, BiomePoolTier.COMMON ],
      [ Biome.FACTORY, BiomePoolTier.BOSS ],
      [ Biome.LABORATORY, BiomePoolTier.COMMON ],
      [ Biome.LABORATORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TYNAMO, PokemonType.ELECTRIC, -1, [
      [ Biome.SEABED, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EELEKTRIK, PokemonType.ELECTRIC, -1, [
      [ Biome.SEABED, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EELEKTROSS, PokemonType.ELECTRIC, -1, [
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ELGYEM, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.SPACE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.BEHEEYEM, PokemonType.PSYCHIC, -1, [
      [ Biome.RUINS, BiomePoolTier.COMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ],
      [ Biome.SPACE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.LITWICK, PokemonType.GHOST, PokemonType.FIRE, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.LAMPENT, PokemonType.GHOST, PokemonType.FIRE, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CHANDELURE, PokemonType.GHOST, PokemonType.FIRE, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.AXEW, PokemonType.DRAGON, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FRAXURE, PokemonType.DRAGON, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HAXORUS, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CUBCHOO, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BEARTIC, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CRYOGONAL, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHELMET, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ACCELGOR, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.STUNFISK, PokemonType.GROUND, PokemonType.ELECTRIC, [
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MIENFOO, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.MIENSHAO, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.UNCOMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DRUDDIGON, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GOLETT, PokemonType.GROUND, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GOLURK, PokemonType.GROUND, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.COMMON ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PAWNIARD, PokemonType.DARK, PokemonType.STEEL, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BISHARP, PokemonType.DARK, PokemonType.STEEL, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BOUFFALANT, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.RUFFLET, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BRAVIARY, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VULLABY, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.MANDIBUZZ, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.HEATMOR, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DURANT, PokemonType.BUG, PokemonType.STEEL, [
      [ Biome.FOREST, BiomePoolTier.SUPER_RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DEINO, PokemonType.DARK, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ABYSS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ZWEILOUS, PokemonType.DARK, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ABYSS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.HYDREIGON, PokemonType.DARK, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ABYSS, BiomePoolTier.RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.LARVESTA, PokemonType.BUG, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.VOLCARONA, PokemonType.BUG, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.SUPER_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.COBALION, PokemonType.STEEL, PokemonType.FIGHTING, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TERRAKION, PokemonType.ROCK, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.VIRIZION, PokemonType.GRASS, PokemonType.FIGHTING, [
      [ Biome.GRASS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.GRASS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TORNADUS, PokemonType.FLYING, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.ULTRA_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.THUNDURUS, PokemonType.ELECTRIC, PokemonType.FLYING, [
      [ Biome.POWER_PLANT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.RESHIRAM, PokemonType.DRAGON, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.ZEKROM, PokemonType.DRAGON, PokemonType.ELECTRIC, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.LANDORUS, PokemonType.GROUND, PokemonType.FLYING, [
      [ Biome.BADLANDS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.KYUREM, PokemonType.DRAGON, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.KELDEO, PokemonType.WATER, PokemonType.FIGHTING, [
      [ Biome.BEACH, BiomePoolTier.ULTRA_RARE ],
      [ Biome.BEACH, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MELOETTA, PokemonType.NORMAL, PokemonType.PSYCHIC, [
      [ Biome.MEADOW, BiomePoolTier.ULTRA_RARE ],
      [ Biome.MEADOW, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.GENESECT, PokemonType.BUG, PokemonType.STEEL, [
      [ Biome.FACTORY, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FACTORY, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CHESPIN, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.QUILLADIN, PokemonType.GRASS, -1, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CHESNAUGHT, PokemonType.GRASS, PokemonType.FIGHTING, [
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FENNEKIN, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BRAIXEN, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DELPHOX, PokemonType.FIRE, PokemonType.PSYCHIC, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FROAKIE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FROGADIER, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GRENINJA, PokemonType.WATER, PokemonType.DARK, [
      [ Biome.LAKE, BiomePoolTier.RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.BUNNELBY, PokemonType.NORMAL, -1, [
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DIGGERSBY, PokemonType.NORMAL, PokemonType.GROUND, [
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FLETCHLING, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FLETCHINDER, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TALONFLAME, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SCATTERBUG, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SPEWPA, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VIVILLON, PokemonType.BUG, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.LITLEO, PokemonType.FIRE, PokemonType.NORMAL, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PYROAR, PokemonType.FIRE, PokemonType.NORMAL, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FLABEBE, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FLOETTE, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FLORGES, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SKIDDO, PokemonType.GRASS, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GOGOAT, PokemonType.GRASS, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.COMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PANCHAM, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PANGORO, PokemonType.FIGHTING, PokemonType.DARK, [
      [ Biome.DOJO, BiomePoolTier.RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.FURFROU, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ESPURR, PokemonType.PSYCHIC, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.MEOWSTIC, PokemonType.PSYCHIC, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.HONEDGE, PokemonType.STEEL, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DOUBLADE, PokemonType.STEEL, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.AEGISLASH, PokemonType.STEEL, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SPRITZEE, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.AROMATISSE, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SWIRLIX, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SLURPUFF, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.INKAY, PokemonType.DARK, PokemonType.PSYCHIC, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.MALAMAR, PokemonType.DARK, PokemonType.PSYCHIC, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SEA, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.BINACLE, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BARBARACLE, PokemonType.ROCK, PokemonType.WATER, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SKRELP, PokemonType.POISON, PokemonType.WATER, [
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.DRAGALGE, PokemonType.POISON, PokemonType.DRAGON, [
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CLAUNCHER, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CLAWITZER, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.HELIOPTILE, PokemonType.ELECTRIC, PokemonType.NORMAL, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HELIOLISK, PokemonType.ELECTRIC, PokemonType.NORMAL, [
      [ Biome.DESERT, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TYRUNT, PokemonType.ROCK, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.TYRANTRUM, PokemonType.ROCK, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.AMAURA, PokemonType.ROCK, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.AURORUS, PokemonType.ROCK, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.SUPER_RARE ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SYLVEON, PokemonType.FAIRY, -1, [
      [ Biome.MEADOW, BiomePoolTier.SUPER_RARE ],
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HAWLUCHA, PokemonType.FIGHTING, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DEDENNE, PokemonType.ELECTRIC, PokemonType.FAIRY, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CARBINK, PokemonType.ROCK, PokemonType.FAIRY, [
      [ Biome.CAVE, BiomePoolTier.RARE ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GOOMY, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SLIGGOO, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GOODRA, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.KLEFKI, PokemonType.STEEL, PokemonType.FAIRY, [
      [ Biome.FACTORY, BiomePoolTier.UNCOMMON ],
      [ Biome.FACTORY, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PHANTUMP, PokemonType.GHOST, PokemonType.GRASS, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.TREVENANT, PokemonType.GHOST, PokemonType.GRASS, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PUMPKABOO, PokemonType.GHOST, PokemonType.GRASS, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GOURGEIST, PokemonType.GHOST, PokemonType.GRASS, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BERGMITE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.AVALUGG, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.NOIBAT, PokemonType.FLYING, PokemonType.DRAGON, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.NOIVERN, PokemonType.FLYING, PokemonType.DRAGON, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.XERNEAS, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.YVELTAL, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.ABYSS, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.ZYGARDE, PokemonType.DRAGON, PokemonType.GROUND, [
      [ Biome.LABORATORY, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.DIANCIE, PokemonType.ROCK, PokemonType.FAIRY, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.HOOPA, PokemonType.PSYCHIC, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.VOLCANION, PokemonType.FIRE, PokemonType.WATER, [
      [ Biome.VOLCANO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ROWLET, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DARTRIX, PokemonType.GRASS, PokemonType.FLYING, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DECIDUEYE, PokemonType.GRASS, PokemonType.GHOST, [
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.LITTEN, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TORRACAT, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.INCINEROAR, PokemonType.FIRE, PokemonType.DARK, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.POPPLIO, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BRIONNE, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.PRIMARINA, PokemonType.WATER, PokemonType.FAIRY, [
      [ Biome.SEA, BiomePoolTier.RARE ],
      [ Biome.SEA, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PIKIPEK, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.TRUMBEAK, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.TOUCANNON, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.JUNGLE, BiomePoolTier.COMMON ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.YUNGOOS, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GUMSHOOS, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GRUBBIN, PokemonType.BUG, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CHARJABUG, PokemonType.BUG, PokemonType.ELECTRIC, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.VIKAVOLT, PokemonType.BUG, PokemonType.ELECTRIC, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CRABRAWLER, PokemonType.FIGHTING, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CRABOMINABLE, PokemonType.FIGHTING, PokemonType.ICE, [
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ORICORIO, PokemonType.FIRE, PokemonType.FLYING, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON ],
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CUTIEFLY, PokemonType.BUG, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.RIBOMBEE, PokemonType.BUG, PokemonType.FAIRY, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ROCKRUFF, PokemonType.ROCK, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, TimeOfDay.DAY ],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ]
    ]
    ],
    [ Species.LYCANROC, PokemonType.ROCK, -1, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, TimeOfDay.DAY ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE, TimeOfDay.DAY ],
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE, TimeOfDay.NIGHT ],
      [ Biome.CAVE, BiomePoolTier.UNCOMMON, TimeOfDay.DUSK ],
      [ Biome.CAVE, BiomePoolTier.BOSS_RARE, TimeOfDay.DUSK ]
    ]
    ],
    [ Species.WISHIWASHI, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MAREANIE, PokemonType.POISON, PokemonType.WATER, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.TOXAPEX, PokemonType.POISON, PokemonType.WATER, [
      [ Biome.BEACH, BiomePoolTier.COMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ],
      [ Biome.SWAMP, BiomePoolTier.UNCOMMON ],
      [ Biome.SWAMP, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MUDBRAY, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MUDSDALE, PokemonType.GROUND, -1, [
      [ Biome.BADLANDS, BiomePoolTier.COMMON ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DEWPIDER, PokemonType.WATER, PokemonType.BUG, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ARAQUANID, PokemonType.WATER, PokemonType.BUG, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.LAKE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FOMANTIS, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.LURANTIS, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS ],
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MORELULL, PokemonType.GRASS, PokemonType.FAIRY, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SHIINOTIC, PokemonType.GRASS, PokemonType.FAIRY, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SALANDIT, PokemonType.POISON, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SALAZZLE, PokemonType.POISON, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.COMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.STUFFUL, PokemonType.NORMAL, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BEWEAR, PokemonType.NORMAL, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.COMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BOUNSWEET, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.STEENEE, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TSAREENA, PokemonType.GRASS, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.COMFEY, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ORANGURU, PokemonType.NORMAL, PokemonType.PSYCHIC, [
      [ Biome.JUNGLE, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PASSIMIAN, PokemonType.FIGHTING, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.WIMPOD, PokemonType.BUG, PokemonType.WATER, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GOLISOPOD, PokemonType.BUG, PokemonType.WATER, [
      [ Biome.CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SANDYGAST, PokemonType.GHOST, PokemonType.GROUND, [
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.PALOSSAND, PokemonType.GHOST, PokemonType.GROUND, [
      [ Biome.BEACH, BiomePoolTier.UNCOMMON ],
      [ Biome.BEACH, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PYUKUMUKU, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TYPE_NULL, PokemonType.NORMAL, -1, [
      [ Biome.LABORATORY, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.SILVALLY, PokemonType.NORMAL, -1, [
      [ Biome.LABORATORY, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MINIOR, PokemonType.ROCK, PokemonType.FLYING, [
      [ Biome.SPACE, BiomePoolTier.COMMON ],
      [ Biome.SPACE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.KOMALA, PokemonType.NORMAL, -1, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.JUNGLE, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TURTONATOR, PokemonType.FIRE, PokemonType.DRAGON, [
      [ Biome.VOLCANO, BiomePoolTier.UNCOMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TOGEDEMARU, PokemonType.ELECTRIC, PokemonType.STEEL, [
      [ Biome.POWER_PLANT, BiomePoolTier.UNCOMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MIMIKYU, PokemonType.GHOST, PokemonType.FAIRY, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BRUXISH, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.ISLAND, BiomePoolTier.UNCOMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DRAMPA, PokemonType.NORMAL, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DHELMISE, PokemonType.GHOST, PokemonType.GRASS, [
      [ Biome.SEABED, BiomePoolTier.RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.JANGMO_O, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HAKAMO_O, PokemonType.DRAGON, PokemonType.FIGHTING, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.KOMMO_O, PokemonType.DRAGON, PokemonType.FIGHTING, [
      [ Biome.WASTELAND, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.WASTELAND, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TAPU_KOKO, PokemonType.ELECTRIC, PokemonType.FAIRY, [
      [ Biome.TEMPLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TAPU_LELE, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.JUNGLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TAPU_BULU, PokemonType.GRASS, PokemonType.FAIRY, [
      [ Biome.DESERT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TAPU_FINI, PokemonType.WATER, PokemonType.FAIRY, [
      [ Biome.BEACH, BiomePoolTier.ULTRA_RARE ],
      [ Biome.BEACH, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.COSMOG, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.COSMOEM, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.SOLGALEO, PokemonType.PSYCHIC, PokemonType.STEEL, [
      [ Biome.SPACE, BiomePoolTier.BOSS_ULTRA_RARE, TimeOfDay.DAY ]
    ]
    ],
    [ Species.LUNALA, PokemonType.PSYCHIC, PokemonType.GHOST, [
      [ Biome.SPACE, BiomePoolTier.BOSS_ULTRA_RARE, TimeOfDay.NIGHT ]
    ]
    ],
    [ Species.NIHILEGO, PokemonType.ROCK, PokemonType.POISON, [
      [ Biome.SEABED, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.BUZZWOLE, PokemonType.BUG, PokemonType.FIGHTING, [
      [ Biome.JUNGLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.PHEROMOSA, PokemonType.BUG, PokemonType.FIGHTING, [
      [ Biome.DESERT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.DESERT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.XURKITREE, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CELESTEELA, PokemonType.STEEL, PokemonType.FLYING, [
      [ Biome.SPACE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SPACE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.KARTANA, PokemonType.GRASS, PokemonType.STEEL, [
      [ Biome.FOREST, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.GUZZLORD, PokemonType.DARK, PokemonType.DRAGON, [
      [ Biome.SLUM, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SLUM, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.NECROZMA, PokemonType.PSYCHIC, -1, [
      [ Biome.SPACE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.MAGEARNA, PokemonType.STEEL, PokemonType.FAIRY, [
      [ Biome.FACTORY, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FACTORY, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MARSHADOW, PokemonType.FIGHTING, PokemonType.GHOST, [
      [ Biome.GRAVEYARD, BiomePoolTier.ULTRA_RARE ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.POIPOLE, PokemonType.POISON, -1, [
      [ Biome.SWAMP, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.NAGANADEL, PokemonType.POISON, PokemonType.DRAGON, [
      [ Biome.SWAMP, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.STAKATAKA, PokemonType.ROCK, PokemonType.STEEL, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.BLACEPHALON, PokemonType.FIRE, PokemonType.GHOST, [
      [ Biome.ISLAND, BiomePoolTier.ULTRA_RARE ],
      [ Biome.ISLAND, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ZERAORA, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MELTAN, PokemonType.STEEL, -1, [ ]
    ],
    [ Species.MELMETAL, PokemonType.STEEL, -1, [ ]
    ],
    [ Species.GROOKEY, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.THWACKEY, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.RILLABOOM, PokemonType.GRASS, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SCORBUNNY, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.RABOOT, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CINDERACE, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SOBBLE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DRIZZILE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.INTELEON, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.RARE ],
      [ Biome.LAKE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SKWOVET, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GREEDENT, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ROOKIDEE, PokemonType.FLYING, -1, [
      [ Biome.TOWN, BiomePoolTier.RARE ],
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CORVISQUIRE, PokemonType.FLYING, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CORVIKNIGHT, PokemonType.FLYING, PokemonType.STEEL, [
      [ Biome.PLAINS, BiomePoolTier.RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BLIPBUG, PokemonType.BUG, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.DOTTLER, PokemonType.BUG, PokemonType.PSYCHIC, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ORBEETLE, PokemonType.BUG, PokemonType.PSYCHIC, [
      [ Biome.FOREST, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.NICKIT, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.THIEVUL, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GOSSIFLEUR, PokemonType.GRASS, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ELDEGOSS, PokemonType.GRASS, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.WOOLOO, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.MEADOW, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DUBWOOL, PokemonType.NORMAL, -1, [
      [ Biome.MEADOW, BiomePoolTier.COMMON ],
      [ Biome.MEADOW, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CHEWTLE, PokemonType.WATER, -1, [
      [ Biome.LAKE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DREDNAW, PokemonType.WATER, PokemonType.ROCK, [
      [ Biome.LAKE, BiomePoolTier.COMMON ],
      [ Biome.LAKE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.YAMPER, PokemonType.ELECTRIC, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.BOLTUND, PokemonType.ELECTRIC, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ROLYCOLY, PokemonType.ROCK, -1, [
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.CARKOL, PokemonType.ROCK, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.COALOSSAL, PokemonType.ROCK, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.COMMON ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.APPLIN, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FLAPPLE, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.APPLETUN, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SILICOBRA, PokemonType.GROUND, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SANDACONDA, PokemonType.GROUND, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON ],
      [ Biome.DESERT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CRAMORANT, PokemonType.FLYING, PokemonType.WATER, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ARROKUDA, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BARRASKEWDA, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.COMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TOXEL, PokemonType.ELECTRIC, PokemonType.POISON, [ ]
    ],
    [ Species.TOXTRICITY, PokemonType.ELECTRIC, PokemonType.POISON, [
      [ Biome.SLUM, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.SIZZLIPEDE, PokemonType.FIRE, PokemonType.BUG, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CENTISKORCH, PokemonType.FIRE, PokemonType.BUG, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BADLANDS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.CLOBBOPUS, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GRAPPLOCT, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.COMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SINISTEA, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.POLTEAGEIST, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.UNCOMMON ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.HATENNA, PokemonType.PSYCHIC, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.HATTREM, PokemonType.PSYCHIC, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.HATTERENE, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.IMPIDIMP, PokemonType.DARK, PokemonType.FAIRY, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MORGREM, PokemonType.DARK, PokemonType.FAIRY, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GRIMMSNARL, PokemonType.DARK, PokemonType.FAIRY, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.OBSTAGOON, PokemonType.DARK, PokemonType.NORMAL, [
      [ Biome.SLUM, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SLUM, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.PERRSERKER, PokemonType.STEEL, -1, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE, TimeOfDay.DUSK ],
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS_RARE, TimeOfDay.DUSK ]
    ]
    ],
    [ Species.CURSOLA, PokemonType.GHOST, -1, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SIRFETCHD, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.MR_RIME, PokemonType.ICE, PokemonType.PSYCHIC, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.RUNERIGUS, PokemonType.GROUND, PokemonType.GHOST, [
      [ Biome.RUINS, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.RUINS, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.MILCERY, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ALCREMIE, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.COMMON ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FALINKS, PokemonType.FIGHTING, -1, [
      [ Biome.JUNGLE, BiomePoolTier.UNCOMMON ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PINCURCHIN, PokemonType.ELECTRIC, -1, [
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.SNOM, PokemonType.ICE, PokemonType.BUG, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.FROSMOTH, PokemonType.ICE, PokemonType.BUG, [
      [ Biome.ICE_CAVE, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.STONJOURNER, PokemonType.ROCK, -1, [
      [ Biome.RUINS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.EISCUE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.INDEEDEE, PokemonType.PSYCHIC, PokemonType.NORMAL, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.MORPEKO, PokemonType.ELECTRIC, PokemonType.DARK, [
      [ Biome.METROPOLIS, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.CUFANT, PokemonType.STEEL, -1, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.COPPERAJAH, PokemonType.STEEL, -1, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.DRACOZOLT, PokemonType.ELECTRIC, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ARCTOZOLT, PokemonType.ELECTRIC, PokemonType.ICE, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DRACOVISH, PokemonType.WATER, PokemonType.DRAGON, [
      [ Biome.WASTELAND, BiomePoolTier.SUPER_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ARCTOVISH, PokemonType.WATER, PokemonType.ICE, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ],
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DURALUDON, PokemonType.STEEL, PokemonType.DRAGON, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DREEPY, PokemonType.DRAGON, PokemonType.GHOST, [
      [ Biome.WASTELAND, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.DRAKLOAK, PokemonType.DRAGON, PokemonType.GHOST, [
      [ Biome.WASTELAND, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.DRAGAPULT, PokemonType.DRAGON, PokemonType.GHOST, [
      [ Biome.WASTELAND, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.WASTELAND, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ZACIAN, PokemonType.FAIRY, -1, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.ZAMAZENTA, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.ETERNATUS, PokemonType.POISON, PokemonType.DRAGON, [
      [ Biome.END, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.KUBFU, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.ULTRA_RARE ]
    ]
    ],
    [ Species.URSHIFU, PokemonType.FIGHTING, PokemonType.DARK, [
      [ Biome.DOJO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ZARUDE, PokemonType.DARK, PokemonType.GRASS, [
      [ Biome.JUNGLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.REGIELEKI, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.ULTRA_RARE ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.REGIDRAGO, PokemonType.DRAGON, -1, [
      [ Biome.WASTELAND, BiomePoolTier.ULTRA_RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.GLASTRIER, PokemonType.ICE, -1, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.SPECTRIER, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.ULTRA_RARE ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CALYREX, PokemonType.PSYCHIC, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.WYRDEER, PokemonType.NORMAL, PokemonType.PSYCHIC, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.KLEAVOR, PokemonType.BUG, PokemonType.ROCK, [
      [ Biome.JUNGLE, BiomePoolTier.SUPER_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.URSALUNA, PokemonType.GROUND, PokemonType.NORMAL, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BASCULEGION, PokemonType.WATER, PokemonType.GHOST, [
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.SNEASLER, PokemonType.FIGHTING, PokemonType.POISON, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.OVERQWIL, PokemonType.DARK, PokemonType.POISON, [
      [ Biome.SEABED, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ENAMORUS, PokemonType.FAIRY, PokemonType.FLYING, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.SPRIGATITO, PokemonType.GRASS, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.FLORAGATO, PokemonType.GRASS, -1, [
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.MEOWSCARADA, PokemonType.GRASS, PokemonType.DARK, [
      [ Biome.MEADOW, BiomePoolTier.RARE ],
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.FUECOCO, PokemonType.FIRE, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CROCALOR, PokemonType.FIRE, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SKELEDIRGE, PokemonType.FIRE, PokemonType.GHOST, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.QUAXLY, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.QUAXWELL, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.QUAQUAVAL, PokemonType.WATER, PokemonType.FIGHTING, [
      [ Biome.BEACH, BiomePoolTier.RARE ],
      [ Biome.BEACH, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.LECHONK, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.OINKOLOGNE, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.COMMON ],
      [ Biome.PLAINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TAROUNTULA, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SPIDOPS, PokemonType.BUG, -1, [
      [ Biome.FOREST, BiomePoolTier.COMMON ],
      [ Biome.FOREST, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.NYMBLE, PokemonType.BUG, -1, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ],
      [ Biome.FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.LOKIX, PokemonType.BUG, PokemonType.DARK, [
      [ Biome.TALL_GRASS, BiomePoolTier.COMMON ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS ],
      [ Biome.FOREST, BiomePoolTier.COMMON ],
      [ Biome.FOREST, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.PAWMI, PokemonType.ELECTRIC, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PAWMO, PokemonType.ELECTRIC, PokemonType.FIGHTING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.PAWMOT, PokemonType.ELECTRIC, PokemonType.FIGHTING, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TANDEMAUS, PokemonType.NORMAL, -1, [
      [ Biome.TOWN, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.METROPOLIS, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.MAUSHOLD, PokemonType.NORMAL, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FIDOUGH, PokemonType.FAIRY, -1, [
      [ Biome.TOWN, BiomePoolTier.UNCOMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.DACHSBUN, PokemonType.FAIRY, -1, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SMOLIV, PokemonType.GRASS, PokemonType.NORMAL, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.DOLLIV, PokemonType.GRASS, PokemonType.NORMAL, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ARBOLIVA, PokemonType.GRASS, PokemonType.NORMAL, [
      [ Biome.MEADOW, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MEADOW, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SQUAWKABILLY, PokemonType.NORMAL, PokemonType.FLYING, [
      [ Biome.METROPOLIS, BiomePoolTier.UNCOMMON ],
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.NACLI, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.NACLSTACK, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.CAVE, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GARGANACL, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS ],
      [ Biome.CAVE, BiomePoolTier.COMMON ],
      [ Biome.CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CHARCADET, PokemonType.FIRE, -1, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ARMAROUGE, PokemonType.FIRE, PokemonType.PSYCHIC, [
      [ Biome.VOLCANO, BiomePoolTier.RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CERULEDGE, PokemonType.FIRE, PokemonType.GHOST, [
      [ Biome.GRAVEYARD, BiomePoolTier.RARE ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.TADBULB, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BELLIBOLT, PokemonType.ELECTRIC, -1, [
      [ Biome.POWER_PLANT, BiomePoolTier.COMMON ],
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.WATTREL, PokemonType.ELECTRIC, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.KILOWATTREL, PokemonType.ELECTRIC, PokemonType.FLYING, [
      [ Biome.SEA, BiomePoolTier.UNCOMMON ],
      [ Biome.SEA, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.MASCHIFF, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.MABOSSTIFF, PokemonType.DARK, -1, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.SHROODLE, PokemonType.POISON, PokemonType.NORMAL, [
      [ Biome.FOREST, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.GRAFAIAI, PokemonType.POISON, PokemonType.NORMAL, [
      [ Biome.FOREST, BiomePoolTier.COMMON ],
      [ Biome.FOREST, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.BRAMBLIN, PokemonType.GRASS, PokemonType.GHOST, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.BRAMBLEGHAST, PokemonType.GRASS, PokemonType.GHOST, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON ],
      [ Biome.DESERT, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TOEDSCOOL, PokemonType.GROUND, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TOEDSCRUEL, PokemonType.GROUND, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.KLAWF, PokemonType.ROCK, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.CAPSAKID, PokemonType.GRASS, -1, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.SCOVILLAIN, PokemonType.GRASS, PokemonType.FIRE, [
      [ Biome.BADLANDS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.BADLANDS, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.RELLOR, PokemonType.BUG, -1, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.RABSCA, PokemonType.BUG, PokemonType.PSYCHIC, [
      [ Biome.DESERT, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.DESERT, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FLITTLE, PokemonType.PSYCHIC, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ESPATHRA, PokemonType.PSYCHIC, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.TINKATINK, PokemonType.FAIRY, PokemonType.STEEL, [
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.TINKATUFF, PokemonType.FAIRY, PokemonType.STEEL, [
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.TINKATON, PokemonType.FAIRY, PokemonType.STEEL, [
      [ Biome.RUINS, BiomePoolTier.UNCOMMON ],
      [ Biome.RUINS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.WIGLETT, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.WUGTRIO, PokemonType.WATER, -1, [
      [ Biome.BEACH, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BOMBIRDIER, PokemonType.FLYING, PokemonType.DARK, [
      [ Biome.MOUNTAIN, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.FINIZEN, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PALAFIN, PokemonType.WATER, -1, [
      [ Biome.SEA, BiomePoolTier.COMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SEA, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.VAROOM, PokemonType.STEEL, PokemonType.POISON, [
      [ Biome.METROPOLIS, BiomePoolTier.RARE ],
      [ Biome.SLUM, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.REVAVROOM, PokemonType.STEEL, PokemonType.POISON, [
      [ Biome.METROPOLIS, BiomePoolTier.RARE ],
      [ Biome.METROPOLIS, BiomePoolTier.BOSS_RARE ],
      [ Biome.SLUM, BiomePoolTier.RARE ],
      [ Biome.SLUM, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.CYCLIZAR, PokemonType.DRAGON, PokemonType.NORMAL, [
      [ Biome.WASTELAND, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.ORTHWORM, PokemonType.STEEL, -1, [
      [ Biome.DESERT, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.GLIMMET, PokemonType.ROCK, PokemonType.POISON, [
      [ Biome.CAVE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GLIMMORA, PokemonType.ROCK, PokemonType.POISON, [
      [ Biome.CAVE, BiomePoolTier.RARE ],
      [ Biome.CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GREAVARD, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.HOUNDSTONE, PokemonType.GHOST, -1, [
      [ Biome.GRAVEYARD, BiomePoolTier.COMMON ],
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.FLAMIGO, PokemonType.FLYING, PokemonType.FIGHTING, [
      [ Biome.LAKE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CETODDLE, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.CETITAN, PokemonType.ICE, -1, [
      [ Biome.ICE_CAVE, BiomePoolTier.UNCOMMON ],
      [ Biome.ICE_CAVE, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.VELUZA, PokemonType.WATER, PokemonType.PSYCHIC, [
      [ Biome.SEABED, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.DONDOZO, PokemonType.WATER, -1, [
      [ Biome.SEABED, BiomePoolTier.UNCOMMON ],
      [ Biome.SEABED, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.TATSUGIRI, PokemonType.DRAGON, PokemonType.WATER, [
      [ Biome.BEACH, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ANNIHILAPE, PokemonType.FIGHTING, PokemonType.GHOST, [
      [ Biome.PLAINS, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.DOJO, BiomePoolTier.COMMON ],
      [ Biome.DOJO, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.CLODSIRE, PokemonType.POISON, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SWAMP, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.FARIGIRAF, PokemonType.NORMAL, PokemonType.PSYCHIC, [
      [ Biome.TALL_GRASS, BiomePoolTier.RARE ],
      [ Biome.TALL_GRASS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.DUDUNSPARCE, PokemonType.NORMAL, -1, [
      [ Biome.PLAINS, BiomePoolTier.SUPER_RARE ],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.KINGAMBIT, PokemonType.DARK, PokemonType.STEEL, [
      [ Biome.ABYSS, BiomePoolTier.COMMON ],
      [ Biome.ABYSS, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GREAT_TUSK, PokemonType.GROUND, PokemonType.FIGHTING, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SCREAM_TAIL, PokemonType.FAIRY, PokemonType.PSYCHIC, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.BRUTE_BONNET, PokemonType.GRASS, PokemonType.DARK, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FLUTTER_MANE, PokemonType.GHOST, PokemonType.FAIRY, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SLITHER_WING, PokemonType.BUG, PokemonType.FIGHTING, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.SANDY_SHOCKS, PokemonType.ELECTRIC, PokemonType.GROUND, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_TREADS, PokemonType.GROUND, PokemonType.STEEL, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_BUNDLE, PokemonType.ICE, PokemonType.WATER, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_HANDS, PokemonType.FIGHTING, PokemonType.ELECTRIC, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_JUGULIS, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_MOTH, PokemonType.FIRE, PokemonType.POISON, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.IRON_THORNS, PokemonType.ROCK, PokemonType.ELECTRIC, [
      [ Biome.END, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.FRIGIBAX, PokemonType.DRAGON, PokemonType.ICE, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ARCTIBAX, PokemonType.DRAGON, PokemonType.ICE, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.BAXCALIBUR, PokemonType.DRAGON, PokemonType.ICE, [
      [ Biome.WASTELAND, BiomePoolTier.RARE ],
      [ Biome.WASTELAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.GIMMIGHOUL, PokemonType.GHOST, -1, [
      [ Biome.TEMPLE, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.GHOLDENGO, PokemonType.STEEL, PokemonType.GHOST, [
      [ Biome.TEMPLE, BiomePoolTier.RARE ],
      [ Biome.TEMPLE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.WO_CHIEN, PokemonType.DARK, PokemonType.GRASS, [
      [ Biome.FOREST, BiomePoolTier.ULTRA_RARE ],
      [ Biome.FOREST, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CHIEN_PAO, PokemonType.DARK, PokemonType.ICE, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.TING_LU, PokemonType.DARK, PokemonType.GROUND, [
      [ Biome.MOUNTAIN, BiomePoolTier.ULTRA_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.CHI_YU, PokemonType.DARK, PokemonType.FIRE, [
      [ Biome.VOLCANO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.VOLCANO, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ROARING_MOON, PokemonType.DRAGON, PokemonType.DARK, [
      [ Biome.END, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.IRON_VALIANT, PokemonType.FAIRY, PokemonType.FIGHTING, [
      [ Biome.END, BiomePoolTier.UNCOMMON ]
    ]
    ],
    [ Species.KORAIDON, PokemonType.FIGHTING, PokemonType.DRAGON, [
      [ Biome.RUINS, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.MIRAIDON, PokemonType.ELECTRIC, PokemonType.DRAGON, [
      [ Biome.LABORATORY, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.WALKING_WAKE, PokemonType.WATER, PokemonType.DRAGON, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.IRON_LEAVES, PokemonType.GRASS, PokemonType.PSYCHIC, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.DIPPLIN, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.MEADOW, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.POLTCHAGEIST, PokemonType.GRASS, PokemonType.GHOST, [
      [ Biome.BADLANDS, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.SINISTCHA, PokemonType.GRASS, PokemonType.GHOST, [
      [ Biome.BADLANDS, BiomePoolTier.RARE ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.OKIDOGI, PokemonType.POISON, PokemonType.FIGHTING, [
      [ Biome.BADLANDS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.BADLANDS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.MUNKIDORI, PokemonType.POISON, PokemonType.PSYCHIC, [
      [ Biome.JUNGLE, BiomePoolTier.ULTRA_RARE ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.FEZANDIPITI, PokemonType.POISON, PokemonType.FAIRY, [
      [ Biome.RUINS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.RUINS, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.OGERPON, PokemonType.GRASS, -1, [
      [ Biome.MOUNTAIN, BiomePoolTier.ULTRA_RARE ],
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_SUPER_RARE ]
    ]
    ],
    [ Species.ARCHALUDON, PokemonType.STEEL, PokemonType.DRAGON, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HYDRAPPLE, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GOUGING_FIRE, PokemonType.FIRE, PokemonType.DRAGON, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.RAGING_BOLT, PokemonType.ELECTRIC, PokemonType.DRAGON, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.IRON_BOULDER, PokemonType.ROCK, PokemonType.PSYCHIC, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.IRON_CROWN, PokemonType.STEEL, PokemonType.PSYCHIC, [
      [ Biome.END, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.TERAPAGOS, PokemonType.NORMAL, -1, [
      [ Biome.CAVE, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.PECHARUNT, PokemonType.POISON, PokemonType.GHOST, [ ]
    ],
    [ Species.ALOLA_RATTATA, PokemonType.DARK, PokemonType.NORMAL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ALOLA_RATICATE, PokemonType.DARK, PokemonType.NORMAL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ISLAND, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ALOLA_RAICHU, PokemonType.ELECTRIC, PokemonType.PSYCHIC, [
      [ Biome.ISLAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.ISLAND, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ALOLA_SANDSHREW, PokemonType.ICE, PokemonType.STEEL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ALOLA_SANDSLASH, PokemonType.ICE, PokemonType.STEEL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ALOLA_VULPIX, PokemonType.ICE, -1, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE ]
    ]
    ],
    [ Species.ALOLA_NINETALES, PokemonType.ICE, PokemonType.FAIRY, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.ALOLA_DIGLETT, PokemonType.GROUND, PokemonType.STEEL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ALOLA_DUGTRIO, PokemonType.GROUND, PokemonType.STEEL, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ALOLA_MEOWTH, PokemonType.DARK, -1, [
      [ Biome.ISLAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ALOLA_PERSIAN, PokemonType.DARK, -1, [
      [ Biome.ISLAND, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ISLAND, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ALOLA_GEODUDE, PokemonType.ROCK, PokemonType.ELECTRIC, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ALOLA_GRAVELER, PokemonType.ROCK, PokemonType.ELECTRIC, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ALOLA_GOLEM, PokemonType.ROCK, PokemonType.ELECTRIC, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ALOLA_GRIMER, PokemonType.POISON, PokemonType.DARK, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ]
    ]
    ],
    [ Species.ALOLA_MUK, PokemonType.POISON, PokemonType.DARK, [
      [ Biome.ISLAND, BiomePoolTier.COMMON ],
      [ Biome.ISLAND, BiomePoolTier.BOSS ]
    ]
    ],
    [ Species.ALOLA_EXEGGUTOR, PokemonType.GRASS, PokemonType.DRAGON, [
      [ Biome.ISLAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.ISLAND, BiomePoolTier.BOSS, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.ALOLA_MAROWAK, PokemonType.FIRE, PokemonType.GHOST, [
      [ Biome.ISLAND, BiomePoolTier.UNCOMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.ISLAND, BiomePoolTier.BOSS, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.ETERNAL_FLOETTE, PokemonType.FAIRY, -1, [
      [ Biome.FAIRY_CAVE, BiomePoolTier.RARE ],
      [ Biome.FAIRY_CAVE, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GALAR_MEOWTH, PokemonType.STEEL, -1, [
      [ Biome.CONSTRUCTION_SITE, BiomePoolTier.RARE, TimeOfDay.DUSK ]
    ]
    ],
    [ Species.GALAR_PONYTA, PokemonType.PSYCHIC, -1, [
      [ Biome.JUNGLE, BiomePoolTier.RARE, TimeOfDay.DAWN ]
    ]
    ],
    [ Species.GALAR_RAPIDASH, PokemonType.PSYCHIC, PokemonType.FAIRY, [
      [ Biome.JUNGLE, BiomePoolTier.RARE, TimeOfDay.DAWN ],
      [ Biome.JUNGLE, BiomePoolTier.BOSS_RARE, TimeOfDay.DAWN ]
    ]
    ],
    [ Species.GALAR_SLOWPOKE, PokemonType.PSYCHIC, -1, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GALAR_SLOWBRO, PokemonType.POISON, PokemonType.PSYCHIC, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GALAR_FARFETCHD, PokemonType.FIGHTING, -1, [
      [ Biome.DOJO, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.GALAR_WEEZING, PokemonType.POISON, PokemonType.FAIRY, [
      [ Biome.SLUM, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.GALAR_MR_MIME, PokemonType.ICE, PokemonType.PSYCHIC, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.GALAR_ARTICUNO, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.ULTRA_RARE ],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.GALAR_ZAPDOS, PokemonType.FIGHTING, PokemonType.FLYING, [
      [ Biome.DOJO, BiomePoolTier.ULTRA_RARE ],
      [ Biome.DOJO, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.GALAR_MOLTRES, PokemonType.DARK, PokemonType.FLYING, [
      [ Biome.ABYSS, BiomePoolTier.ULTRA_RARE ],
      [ Biome.ABYSS, BiomePoolTier.BOSS_ULTRA_RARE ]
    ]
    ],
    [ Species.GALAR_SLOWKING, PokemonType.POISON, PokemonType.PSYCHIC, [
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GALAR_CORSOLA, PokemonType.GHOST, -1, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.GALAR_ZIGZAGOON, PokemonType.DARK, PokemonType.NORMAL, [
      [ Biome.SLUM, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.GALAR_LINOONE, PokemonType.DARK, PokemonType.NORMAL, [
      [ Biome.SLUM, BiomePoolTier.RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.GALAR_DARUMAKA, PokemonType.ICE, -1, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GALAR_DARMANITAN, PokemonType.ICE, -1, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.GALAR_YAMASK, PokemonType.GROUND, PokemonType.GHOST, [
      [ Biome.RUINS, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.GALAR_STUNFISK, PokemonType.GROUND, PokemonType.STEEL, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE ],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HISUI_GROWLITHE, PokemonType.FIRE, PokemonType.ROCK, [
      [ Biome.VOLCANO, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.HISUI_ARCANINE, PokemonType.FIRE, PokemonType.ROCK, [
      [ Biome.VOLCANO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HISUI_VOLTORB, PokemonType.ELECTRIC, PokemonType.GRASS, [
      [ Biome.POWER_PLANT, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.HISUI_ELECTRODE, PokemonType.ELECTRIC, PokemonType.GRASS, [
      [ Biome.POWER_PLANT, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HISUI_TYPHLOSION, PokemonType.FIRE, PokemonType.GHOST, [
      [ Biome.GRAVEYARD, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HISUI_QWILFISH, PokemonType.DARK, PokemonType.POISON, [
      [ Biome.SEABED, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.HISUI_SNEASEL, PokemonType.FIGHTING, PokemonType.POISON, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HISUI_SAMUROTT, PokemonType.WATER, PokemonType.DARK, [
      [ Biome.ABYSS, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.HISUI_LILLIGANT, PokemonType.GRASS, PokemonType.FIGHTING, [
      [ Biome.MEADOW, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HISUI_ZORUA, PokemonType.NORMAL, PokemonType.GHOST, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.HISUI_ZOROARK, PokemonType.NORMAL, PokemonType.GHOST, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]],
      [ Biome.SNOWY_FOREST, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.HISUI_BRAVIARY, PokemonType.PSYCHIC, PokemonType.FLYING, [
      [ Biome.MOUNTAIN, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HISUI_SLIGGOO, PokemonType.STEEL, PokemonType.DRAGON, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HISUI_GOODRA, PokemonType.STEEL, PokemonType.DRAGON, [
      [ Biome.SWAMP, BiomePoolTier.SUPER_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.SWAMP, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.HISUI_AVALUGG, PokemonType.ICE, PokemonType.ROCK, [
      [ Biome.SNOWY_FOREST, BiomePoolTier.SUPER_RARE ]
    ]
    ],
    [ Species.HISUI_DECIDUEYE, PokemonType.GRASS, PokemonType.FIGHTING, [
      [ Biome.DOJO, BiomePoolTier.BOSS_RARE ]
    ]
    ],
    [ Species.PALDEA_TAUROS, PokemonType.FIGHTING, -1, [
      [ Biome.PLAINS, BiomePoolTier.RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]],
      [ Biome.PLAINS, BiomePoolTier.BOSS_RARE, [ TimeOfDay.DAWN, TimeOfDay.DAY ]]
    ]
    ],
    [ Species.PALDEA_WOOPER, PokemonType.POISON, PokemonType.GROUND, [
      [ Biome.SWAMP, BiomePoolTier.COMMON, [ TimeOfDay.DUSK, TimeOfDay.NIGHT ]]
    ]
    ],
    [ Species.BLOODMOON_URSALUNA, PokemonType.GROUND, PokemonType.NORMAL, [
      [ Biome.FOREST, BiomePoolTier.SUPER_RARE, TimeOfDay.NIGHT ],
      [ Biome.FOREST, BiomePoolTier.BOSS_RARE, TimeOfDay.NIGHT ]
    ]
    ]
  ];