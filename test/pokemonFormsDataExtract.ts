import { Species } from "#app/enums/species";
import {
  pokemonFormChanges,
  SpeciesFormChangeItemTrigger,
  FormChangeItem,
  SpeciesFormChangeCompoundTrigger,
  type SpeciesFormChange,
  type SpeciesFormChangeTrigger,
} from "#app/data/pokemon-forms";

export interface FormChangeInfo {
  from: string;
  previousForm: string;
  currentForm: string;
  item: string | null;
}

export const generateItem = (fc: SpeciesFormChange): string | null => {
  if (fc.trigger instanceof SpeciesFormChangeItemTrigger) {
    return FormChangeItem[fc.trigger.item].toLowerCase();
  }
  if (fc.trigger instanceof SpeciesFormChangeCompoundTrigger) {
    const ts: SpeciesFormChangeTrigger[] = fc.trigger.triggers;
    let le = "";
    for (let i = 0; i < ts.length; i++) {
      const k = ts[i];
      if (k instanceof SpeciesFormChangeItemTrigger) {
        le += FormChangeItem[k.item].toLowerCase();
      }
    }
    return le !== "" ? le : null;
  }
  return null;
};

export const generateFormChangeInfo = (): Map<string, FormChangeInfo[]> => {
  const re = new Map<string, FormChangeInfo[]>();
  for (const key of Object.keys(pokemonFormChanges)) {
    const formchangelist = pokemonFormChanges[key];
    // console.log(Species[key]);
    // console.log(formchangelist);
    const formchangeinfolist: FormChangeInfo[] = formchangelist.map(fc => ({
      from: Species[key].toLowerCase(),
      previousForm: fc.preFormKey.toLowerCase().replace(/ |-/g, "_"),
      currentForm: fc.formKey.toLowerCase().replace(/ |-/g, "_"),
      item: generateItem(fc),
    }));

    for (let i = 0; i < formchangelist.length; i++) {
      const formchange = formchangelist[i];
      const pretail =
        formchange.preFormKey !== "" ? "_" + formchange.preFormKey.toLowerCase().replace(/ |-/g, "_") : "";
      const pre = Species[key].toLowerCase() + pretail;
      const evotail = formchange.formKey !== "" ? "_" + formchange.formKey.toLowerCase().replace(/ |-/g, "_") : "";
      const evo = Species[formchange.speciesId].toLowerCase() + evotail;
      if (!re.has(pre)) {
        re.set(pre, [...formchangeinfolist]);
      }
      if (!re.has(evo)) {
        re.set(evo, [...formchangeinfolist]);
      }
    }
  }
  return re;
};
