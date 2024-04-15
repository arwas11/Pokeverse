export interface Pokemon {
  name: string;
  url: string;
  image?: string;
  level?: number
  data?: {
    abilities?: [];
    base_experience?: number;
    cries?: {};
    forms?: [];
    game_indices?: [];
    height?: number;
    held_items?: [];
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: [{
        move?: {
            name?: string
            url?: string
        },
        version_group_details?: [{
            level_learned_at?: number
        }]
    }];
    name?: string;
    order?: number;
    past_abilities?: [];
    past_types?: [];
    species?: {};
    sprites?: {
        front_default?: string
    };
    stats?: [];
    types?: [];
    weight?: number;
  };
}
