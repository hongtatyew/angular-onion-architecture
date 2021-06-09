import { HeroRole } from "./hero-role.enum";

export interface Hero {
    id: number;
    name: string;
    description: string;
    academy: string;
    quirk: string;
    superMoves: string[];
    role: HeroRole;
    profileImageUrl: string;
}
