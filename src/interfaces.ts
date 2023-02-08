export interface LocationData {
  id: number;
  name: string;
  region: {
    name: string;
    url: string;
  };
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }[];
  areas: {
    name: string;
    url: string;
  }[];
}

export interface LocationAreaData {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: {
      version: {
        name: string;
        url: string;
      };
      max_chance: number;
      encounter_details: {
        min_level: number;
        max_level: number;
        condition_values: [];
        chance: number;
        method: {
          name: string;
          url: string;
        };
      }[];
    }[];
  }[];
}

export interface PokemonData {
  id: number;
  name: number;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location_area_encounters: string; //url to encounters
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/35.png";
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png";
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/35.png";
        };
        yellow: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/35.png";
          back_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/35.png";
          front_gray: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/35.png";
        };
      };
      "generation-ii": {
        crystal: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/35.png";
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/35.png";
        };
        gold: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/35.png";
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/35.png";
        };
        silver: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/35.png";
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/35.png";
        };
      };
      "generation-iii": {
        emerald: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/35.png";
        };
        "firered-leafgreen": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png";
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/35.png";
        };
        "ruby-sapphire": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/35.png";
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/35.png";
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/35.png";
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/35.png";
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/35.png";
          back_female: null;
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/35.png";
          back_shiny_female: null;
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/35.png";
          front_shiny_female: null;
        };
        "heartgold-soulsilver": {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/35.png";
          back_female: null;
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/35.png";
          back_shiny_female: null;
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/35.png";
          front_shiny_female: null;
        };
        platinum: {
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/35.png";
          back_female: null;
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/35.png";
          back_shiny_female: null;
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/35.png";
          front_shiny_female: null;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif";
            back_female: null;
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/35.gif";
            back_shiny_female: null;
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif";
            front_female: null;
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/35.gif";
            front_shiny_female: null;
          };
          back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/35.png";
          back_female: null;
          back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/35.png";
          back_shiny_female: null;
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/35.png";
          front_shiny_female: null;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/35.png";
          front_shiny_female: null;
        };
        "x-y": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/35.png";
          front_shiny_female: null;
        };
      };
      "generation-vii": {
        icons: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/35.png";
          front_female: null;
        };
        "ultra-sun-ultra-moon": {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/35.png";
          front_female: null;
          front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/35.png";
          front_shiny_female: null;
        };
      };
      "generation-viii": {
        icons: {
          front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/35.png";
          front_female: null;
        };
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  past_types: {
    generation: {
      name: string;
      url: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  }[];
}
